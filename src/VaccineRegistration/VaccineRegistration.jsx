import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../VaccineRegistration/VaccineRegistration.module.css';
import Badge from 'react-bootstrap/Badge';

export default class VaccineRegistration extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ offset: 2, span: 11 }} className={styles.row}>
                        <Carousel>
                            <Carousel.Item>
                                <img style={{ height: '500px' }}
                                    className="d-block w-100"
                                    src="/images/coronavirus-safety-tips.png"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: '500px' }}
                                    className="d-block w-100"
                                    src="/images/covid-prevention.png"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: '500px' }}
                                    className="d-block w-100"
                                    src="/images/Vaccine-Myths.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img style={{ height: '500px' }}
                                    className="d-block w-100"
                                    src="/images/vaccine_sideEffects.jpg"
                                    alt="Third slide"
                                />
                            </Carousel.Item>

                        </Carousel>
                    </Col>
                </Row>
                <Row className={styles.row}>
                    <Col md={{ offset: 2, span: 11 }}>
                        <Card>
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>How to register for vaccine in Co-Win</Card.Title>
                                <Card.Text className={styles.cardText}>
                                    <Row>
                                        <Col md={6}>
                                            <ul>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />Login on to <a href="https://www.cowin.gov.in/" target="_blank"><Badge variant="info" className={styles.badge}>www.cowin.gov.in</Badge></a></li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />Register with OTP</li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />Provide necessary details</li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />Schedule your vaccine</li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />Get vaccinated</li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />Demo video has been provided below for scheduling of Covid19 Vaccine</li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />For any FAQ's <a href="https://www.cowin.gov.in/faq" target="_blank"><Badge variant="info" className={styles.badge}>Click Here</Badge></a></li>
                                                <li><img src="/images/right-arrow.png" className={styles.icon} />To view vaccination dashboard <a href="https://dashboard.cowin.gov.in/" target="_blank"><Badge variant="info" className={styles.badge}>Click Here</Badge></a></li>
                                            </ul>
                                        </Col>
                                        <Col md={5}>
                                            <img style={{ width: '25rem', height: '20rem' }} src="/images/vaccine.png" />
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className={styles.row}>
                    <Col md={{ offset: 2, span: 11 }} className={styles.v}>
                        <video width="100%" height="500" controls autoplay>
                            <source src="/videos/How to book a COVID-19 Vaccination appointment on CoWIN if you're 18 years or older.mp4" type="video/mp4" title="How to book a slot?" /> Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>
            </Container>
        )
    }
}
