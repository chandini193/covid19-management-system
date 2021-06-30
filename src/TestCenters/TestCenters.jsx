import React from 'react';
import { Container, Row, Col, Tabs } from 'react-bootstrap';
import { Component } from 'react';
import { Paper } from '@material-ui/core';
import { Tab } from 'react-bootstrap';
import Governmentlabs from '../TestCenters/Governmentlabs';
import Privatelabs from '../TestCenters/Privatelabs';
import Collectionsites from '../TestCenters/Collectionsites';
import styles from '../TestCenters/cssstyle.module.css';


class TestCenters extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 11, offset: 2 }}>
                        <Paper square className={styles.layout}>
                            <Tabs defaultActiveKey="governmentlabs" className={styles.tab}>
                                <Tab eventKey="governmentlabs" title="Government Labs">
                                    <Container>
                                        <Governmentlabs />
                                    </Container>
                                </Tab>
                                <Tab eventKey="privatelabs" title="Private Labs" >
                                    <Container>
                                        <Privatelabs />
                                    </Container>
                                </Tab>
                                <Tab eventKey="collectionsites" title="Collection Sites" >
                                    <Container>
                                        <Collectionsites />
                                    </Container>
                                </Tab>
                            </Tabs>
                        </Paper>
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default TestCenters;