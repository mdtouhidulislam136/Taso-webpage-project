import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FiPhoneCall } from "react-icons/fi";
import { MdLocationOn, MdOutlineMail } from "react-icons/md";

import {
  collection,
  getDocs }
  from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from './firebase-config';
import {useTranslation} from 'react-i18next';


function Contact() {
  const {t, i18n } = useTranslation();

  const [members, setMembers] = useState([]);
  const memberCollectionRef = collection(db, "board-contacts");

  useEffect(() => {
      const getMembers = async () => {
        const data = await getDocs(memberCollectionRef);
        setMembers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
      };

      getMembers();
    }, [])


    return (
      <main>
        <h1>{t('contactinfo-title')}</h1>
        <div className="boardContact">

            <Row xs={1} md={2} lg={3} xxl={4} className="g-4">
                {members.map((member) => {
                    return (
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={member.avatar} alt={member.name} />
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{member.designation}</Card.Subtitle>
                            <Card.Link href={`mailto:${member.email}`}
                                       title={`Clict here to send mail to ${member.name}`}>
                                       {member.email}
                            </Card.Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
        </div>

        <h2>{t('contactinfo')}</h2>
        <div className="text-left">
          <address>
          {t('address')}
          </address>
          <p>{t('contactp1')}</p>
          <p>{t('contactp2')}</p>
        </div>

        <div className="content">
          <Row xs={1} md={1} lg={2} className="g-6 contact">
            <Col>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3807.0512133672282!2d23.808911!3d61.504104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468f20a434f7ff63%3A0xf436cad3ae9b4d49!2sKuntokatu%203%2C%2033520%20Tampere!5e0!3m2!1sen!2sfi!4v1654414235225!5m2!1sen!2sfi" width="95%" height="400" title="TASO ry's Google maps" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
            <Col>
              <Row>
                <Col sm="3" >
                  <h3>{t('location')}</h3>
                </Col>
                <Col>
                  <a href="https://goo.gl/maps/8T7Aief7NLnuwCaA8" target="_blank" title="Click here to open google maps!">
                    <address>
                      <MdLocationOn /> Kuntokatu 3 A0-18<br />
                    33520, Tampere, Finland</address>
                  </a>
                </Col>
                <hr />
              </Row>
              <Row>
                <Col sm="3" >
                  <h3>{t('phone')}</h3>
                </Col>
                <Col>
                  <a href="callto:+3582020202020" title="Click here to call!">
                  <FiPhoneCall />  +358 20 20202020</a>
                </Col>
                <hr />
              </Row>
              <Row>
                <Col sm="3" >
                  <h3>{t('email')}</h3>
                </Col>
                <Col>
                  <a href="mailto:tampereensahkoopiskelijat@gmail.com" title="Click here to send email!"> <MdOutlineMail />  tampereensahkoopiskelijat@gmail.com</a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

      </main>
    );
}

export default Contact;
