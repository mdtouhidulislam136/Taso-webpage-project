import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { db } from './firebase-config';
import {
    collection,
    getDocs }
    from 'firebase/firestore';
import { FacebookButton } from 'react-social';
import {useTranslation} from 'react-i18next';

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
    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "news");

    useEffect(() => {
        const getNews = async () => {
          const data = await getDocs(newsCollectionRef);
          setNews(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
        };
        getNews();
      }, [])

    // For testing purpose + to share news used this url.
    let url = "https://taso-tamk-fi.netlify.app/";
    return(
        <main>
            <h1>{t('news-title')}</h1>
            <br /> <br />
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
