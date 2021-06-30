import { Card } from '@material-ui/core';
import React from 'react';
import { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import styles from '../HomeCare/Homecare.module.css';




class Homecare extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 11, offset: 2 }} className={styles.layout}>
                        <Tabs defaultActiveKey="homecaredefault">
                            <Tab eventKey="symptoms" title="Symptoms" className={styles.main}>
                                <Card>
                                    <Image src="/images/covid19_symptoms.jpg" alt="Symptoms" width="100%" height="100%" />
                                </Card>
                            </Tab>
                            <Tab eventKey="prevention" title="Prevention" className={styles.main}>
                                <Card>
                                    <Image src="/images/covid19_prevention.jpg" alt="Prevention" width="100%" height="100%" />
                                </Card>
                            </Tab>
                            <Tab eventKey="homecaredefault" title="General Home Care" className={styles.main}>
                                <Card>
                                    <Image src="/images/covid19care.jpg" alt="Homecare" width="100%" height="100%" />
                                </Card>
                            </Tab>
                            <Tab eventKey="homecarepatients" title="WHO Homecare for Patients" className={styles.main}>
                                <Card>
                                    <Image src="/images/covid19_patientsathome.png" alt=" WHO Homecare for Patients" width="100%" height="100%" />
                                </Card>
                            </Tab>
                            <Tab eventKey="homecaregivers" title="WHO Homecare for Caregivers" className={styles.main}>
                                <Card>
                                    <Image src="/images/covid19_caregivers.jpg" alt="WHO Homecare for Caregivers" width="100%" height="100%" />
                                </Card>
                            </Tab>


                        </Tabs>

                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Homecare;