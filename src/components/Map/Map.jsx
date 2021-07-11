import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import styles from '../Map/Map.module.css';
export default function Map(props) {
    const [viewPort, setViewPort] = useState({
        latitude: 22.117891047721773,
        longitude: 87.84933541742876,
        width: "100vw",
        height: "100vh",
        zoom: 3.9
    });
    const [selectedState, setSelectedState] = useState(null);
    return (
        <Container>
            <Row><Col md={{ offset: 3, span: 8 }}>
                <p className={styles.heading}>Click on <AddLocationIcon fontSize={"small"} />to get state wise covid19 live updates</p>
            </Col></Row>
            <Row><Col md={{ offset: 1, span: 8 }}>
                <ReactMapGL {...viewPort}
                    mapboxApiAccessToken={"pk.eyJ1IjoiY2hhbmRpbmkxOTMiLCJhIjoiY2twN3R2bmtwMDN2bTJubnk1b3ZobXRieSJ9.98gmCWhBCcxolE0BJDtwsw"}
                    mapStyle="mapbox://styles/chandini193/ckp8264af0gu918o4ns26x2p8"
                    onViewportChange={viewPort => {
                        setViewPort(viewPort);
                    }}
                >
                    {
                        props.data.map((eachState) => {
                            return <Marker key={eachState.provinceState} latitude={eachState.lat} longitude={eachState.long}>
                                <button className={styles.markerBtn}
                                    onClick={
                                        e => {
                                            e.preventDefault();
                                            setSelectedState(eachState);
                                        }
                                    }
                                >

                                    <AddLocationIcon fontSize={"small"} />
                                </button>
                            </Marker>
                        })
                    }
                    {
                        selectedState ? (
                            <Popup latitude={selectedState.lat} longitude={selectedState.long}
                                onClose={() => {
                                    setSelectedState(null);
                                }}

                            >
                                <div className={styles.popup} >
                                    <p style={{ fontWeight: "bold" }}>State/UT{" "}:{" "}{selectedState.provinceState}</p>
                                    <p className={styles.confirmed}>Confirmed{" "}:{" "}{selectedState.confirmed}</p>
                                    <p className={styles.recovered}>Recovered{" "}:{" "}{selectedState.recovered}</p>
                                    <p className={styles.deaths}>Deaths{" "}:{" "}{selectedState.deaths}</p>
                                    <p className={styles.active}>Active{" "}:{" "}{selectedState.active}</p>
                                </div>
                            </Popup>
                        ) : null
                    }
                </ReactMapGL>
            </Col>
            </Row>

        </Container>
    );
}