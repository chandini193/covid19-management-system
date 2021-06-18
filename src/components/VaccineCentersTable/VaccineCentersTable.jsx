import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from '../VaccineCentersTable/VaccineCentersTable.module.css';

const VaccineCentersTable = (props) => {

    if (!props || props.vaccineCenters === undefined) {
        return <p>No Vaccine Centers available</p>;
    }
    return (
        <Table responsive style={{ marginTop: "20px" }}>
            <tbody>
                {
                    props.vaccineCenters.map((center, i) => {
                        return <tr key={i}>
                            <td>
                                <span className={styles.name}>{center.name}</span>
                                <span key="Questions" className={center.fee_type === 'Free' ? (styles.yellowClass) : (styles.redClass)}>{center.fee_type}</span>
                                <br />
                                {center.address}{','}
                                <br />
                                {center.district_name}{','}
                                <br />
                                {center.state_name}{', '}
                                {center.pincode}
                            </td>
                            <td>
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <td width={"125px"}>Date</td>
                                            <td>Available Slots Dose 1</td>
                                            <td>Available Slots Dose 2</td>
                                            <td>Age limit</td>
                                            <td>Vaccine</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            center.sessions.map((session, i) => {
                                                return <tr key={i}>
                                                    <td>{session.date}</td>
                                                    <td key="Questions" className={session.available_capacity_dose1 > 0 ? (styles.greenClass) : ""}>{session.available_capacity_dose1}</td>
                                                    <td key="Questions" className={session.available_capacity_dose2 > 0 ? (styles.maroonClass) : ""}>{session.available_capacity_dose2}</td>
                                                    <td>{session.min_age_limit}</td>
                                                    <td>{session.vaccine}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    );
}

export default VaccineCentersTable;