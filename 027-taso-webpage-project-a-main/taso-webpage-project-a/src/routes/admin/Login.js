import React from "react";
import { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navitage = useNavigate();

    const { dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                navitage("/admin");
            })
            .catch((error) => {
                setError(true);
            });
    }

    return (
        <main className="login">
            <h2>Login admin panel</h2> <br />
            <form onSubmit={handleLogin}>
                <label>
                    User id:
                    <input type="email" placeholder="Enter user email" onChange={ e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="password" onChange={ e => setPassword(e.target.value)} />
                </label>
                <Button variant="primary" type="submit">Login</Button>
                <br /> {error && <span>Wrong email or password!</span>}
            </form>
        </main>
    )
}

export default Login;
