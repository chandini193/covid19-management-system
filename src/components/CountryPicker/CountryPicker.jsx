import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';

const CountryPicker = (props) => {
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue=""
                onChange={(e) => props.changeCounrtyHandler(e.target.value)}>
                <option value="">Global</option>
                {props.data.map((countryName, i) =>
                    <option key={i} value={countryName}>{countryName}</option>)};
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;