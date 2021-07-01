import React, { Component } from 'react';
import './ambulance.css';
import axois from 'axios';
import { FiUser } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiSmartphone } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiHomeAlt } from 'react-icons/bi';
class aform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            email: '',
            phoneNumber: '',
            address: '',
            city: '',
            district: '',
            state: '',
            remarks: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axois.post("http://localhost:5000/Ambulance", this.state)
            .then(response => {
                console.log(response.data)
            })
    }
    render() {
        const { userName, email, phoneNumber, address, city, district, state, remarks } = this.state
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div className="information">
                        <h3>Ambulance Service Form</h3><br />
                        <label><FiUser />UserName:{' '}
                            <input type="text" name="userName" value={userName} onChange={this.handleChange} /></label><br />
                        <label> <FiMail />   Email Id:{' '}
                            <input type="email" name="email" value={email} onChange={this.handleChange} /></label><br />
                        <label> <FiSmartphone />Phone No:{' '}
                            <input type="number" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} /></label><br />
                        <label> <BiHomeAlt />  Address:{' '}
                            <input type="text" name="address" value={address} onChange={this.handleChange} /></label><br />
                        <label> <BiCurrentLocation />CityName:{' '}
                            <input type="text" name="city" value={city} onChange={this.handleChange} /></label><br />
                        <label><BiCurrentLocation />District:{' '}
                            <input type="text" name="district" value={district} onChange={this.handleChange} /></label><br />
                        <label>   <BiCurrentLocation /> State:{' '}
                            <select name="state" value={state} onChange={this.handleChange}>
                                <option>Andaman and Nicobar Islands</option>
                                <option> Andhra Pradesh</option>
                                <option>  Arunachal Pradesh</option>
                                <option> Assam</option>
                                <option> Bihar</option>
                                <option> Chhattisgarh</option>
                                <option>Dadra and Nagar Haveli</option>
                                <option>Daman and Diu</option>
                                <option>Delhi</option>
                                <option> Goa</option>
                                <option> Gujarat</option>
                                <option> Haryana</option>
                                <option> Himachal Pradesh</option>
                                <option> Jammu and Kashmir</option>
                                <option> Jharkhand</option>
                                <option> Karnataka</option>
                                <option> Kerala</option>
                                <option>Ladakh</option>
                                <option>Lakshadweep</option>
                                <option> Madhya Pradesh</option>
                                <option> Maharashtra</option>
                                <option> Manipur</option>
                                <option> Meghalaya</option>
                                <option> Mizoram</option>
                                <option>  Nagaland</option>
                                <option> Odisha</option>
                                <option>Puducherry</option>
                                <option> Punjab</option>
                                <option> Rajasthan</option>
                                <option> Sikkim</option>
                                <option> Tamil Nadu</option>
                                <option> Telangana	</option>
                                <option>  Tripura	</option>
                                <option>  Uttar Pradesh</option>
                                <option>  Uttarakhand</option>
                                <option>West Bengal</option>
                            </select> </label>  <br />
                        <label><BiComment />Remarks:{' '}
                            <input type="textArea" name="remarks" value={remarks} onChange={this.handleChange} />
                        </label><br />
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default aform;