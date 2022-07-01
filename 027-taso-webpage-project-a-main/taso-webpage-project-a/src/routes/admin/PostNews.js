import React, { useState }  from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import {
    addDoc,
    collection }
    from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";

import { db } from '../firebase-config';
import { storage } from '../firebase-config';
import { v4 } from "uuid";


function PostNews() {
    const newsCollectionRef = collection(db, "news");

    // Variable To create new news to firebase and showing it in react web app
    const [newsHeading, setHeading] = useState("");
    const [newsDate, setNewsDate] = useState("");
    const [newsContent, setContent] = useState("");

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrl, setImageUrl] = useState("");


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addDoc(newsCollectionRef, { heading: newsHeading, date: newsDate, content: newsContent, image: imageUrl });
        setHeading('');
        setNewsDate('');
        setContent('');

        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/news/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrl((prev) => [...prev, url]);
            // setImageUrl(url);
            console.log(url)
          });
        });
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Create News
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create a new news</Modal.Title>
          </Modal.Header>
          <Modal.Body> {imageUrl}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridHeading">
                    <Form.Label>News Headline *</Form.Label>
                    <Form.Control type="text" placeholder="Headline..." autoFocus required value={newsHeading} onChange={(event) => {
                        setHeading(event.target.value);
                        }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridDate">
                    <Form.Label>Post date *</Form.Label>
                    <Form.Control type="date" required value={newsDate} onChange={(event) => {
                        setNewsDate(event.target.value);
                        }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridMessage">
                    <Form.Label>News Content *</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Type news here..." required value={newsContent} onChange={(event) => {
                        setContent(event.target.value);
                        }} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridImg">
                    <Form.Label>News Image *</Form.Label>
                    <Form.Control type="file" required onChange={(event) => {
                      setImageUpload(event.target.files[0]);
                    }} />
                </Form.Group>
                <hr />
                <Button variant="primary" type="submit" onClick={handleClose}>
                Post news
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default PostNews;
