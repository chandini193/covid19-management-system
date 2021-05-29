import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import AvailableBeds from '../data/AvailableBeds.json';
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../BedsAvailability/BedsAvailability.module.css';
import { Typography } from '@material-ui/core';

class BedsAvailability extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 10, offset: 2 }} className={styles.main}>
                        <Typography variant='h5'>State-wise list of official portals:</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 2 }}>
                        <Table striped bordered hover responsive style={{ marginTop: "20px" }}>
                            <thead>
                                <tr>
                                    <th>S. No</th>
                                    <th>State/UT</th>
                                    <th>Official portal with
                            availability of COVID-19 beds</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AvailableBeds.map((item, index) => {
                                        return <tr key={index}>
                                            <td >{index + 1}</td>
                                            <td >{item.StateOrUT}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <Button href={item.Official_Portal} className={styles.button} target="_blank" rel="noopener noreferrer">Click Here</Button>
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
