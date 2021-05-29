import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../SideNav/SideNav.module.css';
import cx from 'classnames';
import BarChartIcon from '@material-ui/icons/BarChart';
import LanguageIcon from '@material-ui/icons/Language';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HotelIcon from '@material-ui/icons/Hotel';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import { Icon } from '@iconify/react';
import ambulanceIcon from '@iconify-icons/mdi/ambulance';
import vaccineIcon from '@iconify-icons/tabler/vaccine';
import headSideMask from '@iconify-icons/uim/head-side-mask';
import medicineBottleFill from '@iconify-icons/ri/medicine-bottle-fill';
import outlineCoronavirus from '@iconify-icons/ic/outline-coronavirus';


export class SideNav extends Component {
    render() {
        return (
            <div className={styles.SideNav}>
                <Navbar expand="lg" className={cx(styles.sideNavBar, "flex-column")}>
                    <Navbar.Brand href="/" className={styles.navBrand}>C<Icon icon={outlineCoronavirus} />vid19 <br />Management System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto flex-column">
                            <Nav.Link href="/" className={styles.navLink}>
                                <LanguageIcon className={styles.navIcon} />
                                <div className={styles.navText}>World Live Updates</div>
                            </Nav.Link>
                            <Nav.Link href="/IndiaWideLiveUpdates" className={styles.navLink}>
                                <BarChartIcon className={styles.navIcon} />
                                <div className={styles.navText}>India Live Updates</div>
                            </Nav.Link>
                            <Nav.Link href="/TestCenters" className={styles.navLink}>
                                <LocalHospitalIcon className={styles.navIcon} />
                                <div className={styles.navText}>Test Centers</div>
                            </Nav.Link>
                            <Nav.Link href="/VaccinationCenters" className={styles.navLink}>
                                <Icon icon={vaccineIcon} className={styles.navIcon} />
                                <div className={styles.navText}>Vaccination Centers</div>
                            </Nav.Link>
                            <Nav.Link href="/BedsAvailability" className={styles.navLink}>
                                <HotelIcon className={styles.navIcon} />
                                <div className={styles.navText}>Beds Availability</div>
                            </Nav.Link>
                            <Nav.Link href="/HelpLineNumbers" className={styles.navLink}>
                                <ContactPhoneIcon className={styles.navIcon} />
                                <div className={styles.navText}>Helpline Numbers</div>
                            </Nav.Link>
                            <Nav.Link href="/Oxygen" className={styles.navLink}>
                                <Icon icon={medicineBottleFill} className={styles.navIcon} />
                                <div className={styles.navText}>Oxygen</div>
                            </Nav.Link>
                            <Nav.Link href="/BloodBanks" className={styles.navLink}>
                                <InvertColorsIcon className={styles.navIcon} />
                                <div className={styles.navText}>Blood Banks</div>
                            </Nav.Link>
                            <Nav.Link href="/Ambulance" className={styles.navLink}>
                                <Icon icon={ambulanceIcon} className={styles.navIcon} />
                                <div className={styles.navText}>Ambulance</div>
                            </Nav.Link>
                            <Nav.Link href="/HomeRemedies" className={styles.navLink}>
                                <Icon icon={headSideMask} className={styles.navIcon} />
                                <div className={styles.navText}>Home Remedies</div>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default SideNav

