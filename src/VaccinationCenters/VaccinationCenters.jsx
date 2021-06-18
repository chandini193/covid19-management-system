import { fetchStateNames, fetchdistrictNames, fetchVaccineCenters } from '../api';
import { Component } from 'react';
import CascadingDropDown from '../components/CascadingDropDown/CascadingDropDown';
import { Container, Row, Col } from 'react-bootstrap';
import VaccineCentersTable from '../components/VaccineCentersTable/VaccineCentersTable';


class VaccinationCenters extends Component {
    state = {
        stateNames: [],
        districtNames: [],
        districtId: "",
        vaccineCenters: [],
        date: ""
    }

    async componentDidMount() {
        const fetchedStateNames = await fetchStateNames();
        const fetchedDistrictNames = await fetchdistrictNames(1);
        this.setState({ districtNames: fetchedDistrictNames });
        this.setState({ stateNames: fetchedStateNames });
        this.setState({ districtId: 3 });
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        this.setState({ date: today });
        const fetchedVaccineCenters = await fetchVaccineCenters(3, today);
        this.setState({ vaccineCenters: fetchedVaccineCenters });

    }

    changeStateHandler = async (stateId) => {
        const fetchedDistrictNames = await fetchdistrictNames(stateId);
        this.setState({ districtNames: fetchedDistrictNames });
    }

    changeDistrictHandler = async (selectedDistrictId) => {
        this.setState({ districtId: selectedDistrictId });
    }
    showVaccineCenters = async () => {
        const fetchedVaccineCenters = await fetchVaccineCenters(this.state.districtId, this.state.date);
        this.setState({ vaccineCenters: fetchedVaccineCenters });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ offset: 2, span: 11 }}>
                        <CascadingDropDown stateNames={this.state.stateNames}
                            districtNames={this.state.districtNames}
                            changeStateHandler={this.changeStateHandler}
                            changeDistrictHandler={this.changeDistrictHandler}
                            showVaccineCenters={this.showVaccineCenters}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ offset: 2, span: 11 }}>
                        <VaccineCentersTable vaccineCenters={this.state.vaccineCenters} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default VaccinationCenters;