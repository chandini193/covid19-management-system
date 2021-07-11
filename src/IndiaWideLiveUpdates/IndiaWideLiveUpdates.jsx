import { Component } from 'react';
import Map from '../components/Map/Map';
import { fetchIndianStatesData, fetchData } from '../api'
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../IndiaWideLiveUpdates/IndiaWideLiveUpdates.module.css';



class IndiaWideLiveUpdates extends Component {
    state = {
        data: [],
        indiaConfirmed: 0,
        indiaRecovered: 0,
        indiaDeaths: 0,
        indiaLastUpdate: ""
    }
    async componentDidMount() {
        const fetchedData = await fetchIndianStatesData();
        this.setState({ data: fetchedData });
        const { confirmed, recovered, deaths, lastUpdate } = await fetchData('india');
        this.setState({ indiaConfirmed: confirmed.value });
        this.setState({ indiaRecovered: recovered.value });
        this.setState({ indiaDeaths: deaths.value });
        this.setState({ indiaLastUpdate: lastUpdate });
    }
    render() {
        if (!this.state.data) {
            return null; //You can change here to put a customized loading spinner 
        }
        return (
            <Container>
                <Row>
                    <Col md={{ offset: 1, span: 11 }}>
                        <Card className={styles.card}>
                            <Card.Body>
                                <span>India</span>
                                <span className={styles.confirmed}>Confirmed :  {this.state.indiaConfirmed}</span>
                                <span className={styles.recovered}>Recovered :  {this.state.indiaRecovered}</span>
                                <span className={styles.deaths}>Deaths    :  {this.state.indiaDeaths}</span>
                                <span className={styles.lastUpdate}>Last Update : {new Date(this.state.indiaLastUpdate).toDateString()}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Map data={this.state.data} />
            </Container>

        );
    }
}

export default IndiaWideLiveUpdates;