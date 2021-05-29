import Cards from '../components/Cards/Cards';
import Chart from '../components/Chart/Chart';
import CountryPicker from '../components/CountryPicker/CountryPicker';
import { fetchCountries, fetchData } from '../api';
import { Component } from 'react';
import styles from './WorldWideLiveUpdates.module.css';

class WorldWideLiveUpdates extends Component {
    state = {
        data: {},
        country: "",
        countries: []

    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const fetchedCountries = await fetchCountries();
        this.setState({ data: fetchedData });
        this.setState({ countries: fetchedCountries });
    }

    changeCountryHandler = async (countryName) => {
        const fetchedData = await fetchData(countryName);
        this.setState({ data: fetchedData });
        this.setState({ country: countryName });
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountryPicker data={this.state.countries} changeCounrtyHandler={this.changeCountryHandler} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        );
    }
}

export default WorldWideLiveUpdates;
