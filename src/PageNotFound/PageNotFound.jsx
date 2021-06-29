import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../PageNotFound/PageNotFound.module.css';
import Card from 'react-bootstrap/Card'
export class PageNotFound extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ offset: 6, span: 6 }} className={styles.image}>
                        <img src="/images/page_not_found.png" />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 4, span: 8 }}>
                        <Card className={styles.card}>
                            <Card.Body>
                                <h1>
                                    Page Not Found
                                </h1>
                                <p>Looks like you've followed a
                                broken link or
                                entered a URL that doesn't exist on this site.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PageNotFound
