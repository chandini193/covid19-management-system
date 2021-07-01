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
import Blist from './BloodBank/bloodhome';
import Alist from './Ambulance/Ambhome';
import Olist from './Oxygen/OxygenHome';
import OContacts from './Oxygen/Oxyserv';
import AContacts from './Ambulance/aform';
import bform from "./BloodBank/bform";
import {Container} from 'react-bootstrap';
import styles from './App.module.css';

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
            <Route path="/VaccinationCenters" component={VaccinationCenters}/>
            <Route path="/VaccineRegistration" component={VaccineRegistration}/>
            <Route path="/HomeRemedies" component={HomeCare}/>
            <Route path="/TestCenters" component={TestCenters}/>
            <Route path="/Oxygen"  component={Olist}/>
            <Route path="/Ambulance"  component={Alist}/>
            <Route path="/BloodBanks"  component={Blist}/>
            <Route path="/Contacts"  component={bform}/>
            <Route path="/OContacts"  component={OContacts}/>
            <Route path="/AContacts"  component={AContacts}/>
            <Route component={PageNotFound}/>
          </Switch> 
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
