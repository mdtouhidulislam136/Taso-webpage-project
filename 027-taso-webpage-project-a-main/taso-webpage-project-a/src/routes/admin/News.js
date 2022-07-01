import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FacebookButton } from 'react-social';
import {useTranslation} from 'react-i18next';
import {
    doc,
    collection,
    getDocs,
    deleteDoc }
    from 'firebase/firestore';
import { db } from '../firebase-config';
import PostNews from './PostNews';

function ReadMore({children = 100}) {
    const news = children;
    const [isShow, setIsShowLess] = useState(true)
    const contentShow = isShow ? news.slice(0, 100) : news;
    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return(
        <p>
            {contentShow}
            <span className='btn-link readmore' onClick={toggleIsShow}>
                {isShow ? " ...Read More" : " Read Less"}
            </span>
        </p>
    )
}

function News() {

    const { t } = useTranslation();

    // Connection of firebase table "news" to posting new news on react web app
    const newsCollectionRef = collection(db, "news");
    // Get all the news as array from firebase firestore
    const [news, setNews] = useState([]);
    // Get news from firebase firestore used useEffect
    useEffect(() => {
        const getNews = async () => {
          const data = await getDocs(newsCollectionRef);
          setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getNews();
    }, [])
    // To delete news, admin is able to delete any news content
    const deleteNews = async (id) => {
        const newsDoc = doc(db, "news", id);
        await deleteDoc(newsDoc);
    }
    // For testing purpose + to share news used this url.
    let url = "https://taso-tamk-fi.netlify.app/";
    return(
        <main>
            <h1>{t('news-title')}</h1>
            <div className='text-left'>
                <PostNews />
            </div>
            <Row xs={1} lg={1} xxl={2} className="g-4 text-left">
                {news.map((post) => {
                    return (
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={post.image} />
                        <Card.Body>
                            <Card.Title><Card.Link href={`news/${post.heading}`} target="_blank">{post.heading}</Card.Link></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                            <Card.Text>
                                <ReadMore>
                                    {post.content}
                                </ReadMore>
                            </Card.Text>
                            <Row>
                                <Col>
                                    <Button onClick={() => {deleteNews(post.id)}}>Delete</Button>
                                </Col>
                                {/* Facebook and instagram widget  */}
                                <Col className='text-right share'>
                                    <FacebookButton url={url} appId={1231421954267767}>
                                        <FiFacebook />
                                    </FacebookButton>
                                </Col>
                            </Row>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </main>
    )
}
export default News;
