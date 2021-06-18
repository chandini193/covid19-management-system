import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../CascadingDropDown/CascadingDropDown.module.css';



const CascadingDropDown = (props) => {
    if (!props || props.stateNames === undefined) {
        return null;
    }
    return (
        <Form inline={true} className={styles.form}>
            <Form.Group controlId="exampleForm.SelectCustom" className={styles.form_group}>
                <Form.Label className={styles.form_label}>Select State</Form.Label>
                <Form.Control className={styles.form_control} as="select" custom
                    onChange={(e) => props.changeStateHandler(e.target.value)}>
                    {
                        props.stateNames.map((stateName, i) => {
                            return <option key={i} value={stateName.state_id}>{stateName.state_name}</option>
                        })
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom" className={styles.form_group}>
                <Form.Label className={styles.form_label}>Select District</Form.Label>
                <Form.Control className={styles.form_control} as="select" custom
                    onChange={(e) => props.changeDistrictHandler(e.target.value)}>
                    {
                        props.districtNames.map((districtName, i) => {
                            return <option key={i} value={districtName.district_id}>{districtName.district_name}</option>
                        })
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group className={styles.form_group}>
                <Button onClick={props.showVaccineCenters} className={styles.btn} variant="light">Search</Button>
            </Form.Group>
        </Form>

    )
}

export default CascadingDropDown;