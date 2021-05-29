import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import HelpLineNumbers from '../data/HelpLineNumbers.json';
import { Component } from 'react';
import styles from '../BedsAvailability/BedsAvailability.module.css';
import { Typography } from '@material-ui/core';

class BedsAvailability extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 2 }} className={styles.main}>
                        <Typography variant='h5'>State-wise list of coronavirus helpline numbers:</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 2 }}>
                        <Table striped bordered hover responsive style={{ marginTop: "20px" }}>
                            <thead>
                                <tr>
                                    <th>S. No</th>
                                    <th>State/UT</th>
                                    <th>State-wise list of coronavirus helpline numbers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ textAlign: "center", fontSize: "large" }}>
                                    <td colSpan="3">
                                        National Coronavirus Helpline Number : 91-11-23978046 or 1075
                                    </td>
                                </tr>
                                {
                                    HelpLineNumbers.map((item, index) => {
                                        return <tr key={index}>
                                            <td >{index + 1}</td>
                                            <td >{item.state_or_UT}</td>
                                            <td >{item.helpline_number}
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default BedsAvailability;
