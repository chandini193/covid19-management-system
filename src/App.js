import { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideNav from './components/SideNav/SideNav';
import WorldWideLiveUpdates from './WorldWideLiveUpdates/WorldWideLiveUpdates'
import BedsAvailability from './BedsAvailability/BedsAvailability';
import HelpLineNumbers from './HelpLineNumbers/HelpLineNumbers';
import IndiaWideLiveUpdates from './IndiaWideLiveUpdates/IndiaWideLiveUpdates';
import VaccinationCenters from './VaccinationCenters/VaccinationCenters';
import VaccineRegistration from './VaccineRegistration/VaccineRegistration';
import PageNotFound from './PageNotFound/PageNotFound';
import HomeCare from './HomeCare/Homecare';
import TestCenters from './TestCenters/TestCenters';
import {Container} from 'react-bootstrap';
import styles from './App.module.css';
import BloodBankHomePage from './BloodBank/BloodBankHomePage';
import AmbulanceHomePage from './Ambulance/AmbulanceHomePage';
import OxygenHomePage from './Oxygen/OxygenHomePage';
import OxygenServiceForm from './Oxygen/OxygenServiceForm';
import AmbulanceServiceForm from './Ambulance/AmbulanceServiceForm';
import BloodBankServiceForm from './BloodBank/BloodBankServiceForm';

class  App extends Component{
  render(){
    return (
      <Router>
        <div className={styles.body}>
          <SideNav />
          <Container>
          <Switch>
            <Route path="/" exact component={WorldWideLiveUpdates}/>
            <Route path="/BedsAvailability" component={BedsAvailability}/>
            <Route path="/HelpLineNumbers" component={HelpLineNumbers}/>
            <Route path="/IndiaWideLiveUpdates" component={IndiaWideLiveUpdates}/>
            <Route path="/VaccineRegistration" component={VaccineRegistration}/>
            <Route path="/Oxygen"  component={OxygenHomePage}/>
            <Route path="/Ambulance"  component={AmbulanceHomePage}/>
            <Route path="/BloodBanks"  component={BloodBankHomePage}/>
            <Route path="/BloodBankServiceForm"  component={BloodBankServiceForm}/>
            <Route path="/OxygenServiceForm"  component={OxygenServiceForm}/>
            <Route path="/AmbulanceServiceForm"  component={AmbulanceServiceForm}/>
             <Route path="/VaccinationCenters" component={VaccinationCenters}/>
             <Route path="/HomeRemedies" component={HomeCare}/>
            <Route path="/TestCenters" component={TestCenters}/>
            <Route component={PageNotFound}/>
          </Switch> 
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;