import React,{Component} from 'react';
import './cssambulance.css';
import axois from 'axios';
import {  FiUser } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import {FiSmartphone} from 'react-icons/fi';
import {BiComment} from 'react-icons/bi';
import {BiCurrentLocation} from 'react-icons/bi';
import {BiHomeAlt} from 'react-icons/bi';
class AmbulanceServiceForm extends Component{
    constructor(props){
        super(props)
        this.state={
            Name:'',
            email:'',
            phoneNumber:'',
            address:'',
            city:'',
            district_name:'',
            state_name:'',
            remarks:''
    }
}
   handleChange=(e)=>{
       e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
   }
   handleSubmit=(e)=>{
        e.preventDefault();
        if(this.validateForm()){
        axois.post("http://localhost:5000/Ambulance",this.state).then(alert("form submitted"))
        .then(response=>{
            console.log(response.data)
        })
    }
   }
   validateForm(){
    let Name=this.state.Name;
    let email=this.state.email;
    let phoneNumber=this.state.phoneNumber;
    let address=this.state.address;
    let city=this.state.city;
    let state_name=this.state.state_name;
    let district_name=this.state.district_name;
    let nameError="";
    let emailError="";
    let phoneNumberError="";
    let addressError="";
    let cityError="";
    let stateError="";
    let districtError="";
    let formIsValid = true;

    if (!Name) {
      formIsValid = false;
      nameError = "*Please enter your username.";
    }

    if (typeof Name !== "undefined") {
      if (!Name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        nameError= "*Please enter alphabet characters only.";
      }
    }

    if (!email) {
      formIsValid = false;
      emailError = "*Please enter your email-ID.";
    }

    if (typeof email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(email)) {
        formIsValid = false;
        emailError = "*Please enter valid email-ID.";
      }
    }

    if (!phoneNumber) {
      formIsValid = false;
      phoneNumberError = "*Please enter your mobile no.";
    }

    if (typeof pattern !== "undefined") {
      if (!phoneNumber.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        phoneNumberError = "*Please enter valid mobile no.";
      }
    }

    if (!address) {
      formIsValid = false;
      addressError = "*Please enter your address.";
    }

    if (typeof address !== "undefined") {
      if (!address) {
        formIsValid = false;
        addressError= "*Please enter your address.";
      }
    }
    if (!city) {
      formIsValid = false;
      cityError = "*Please enter your city.";
    }

    if (typeof city !== "undefined") {
      if (!city.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        cityError = "*Please enter city.";
      }
    }
    if (!state_name) {
      formIsValid = false;
      stateError = "*Please enter your state.";
    }

    if (typeof state_name !== "undefined") {
      if (!state_name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        stateError = "*Please enter state.";
      }
    }
    if (!district_name) {
      formIsValid = false;
      districtError = "*Please enter your district.";
    }

    if (typeof district_name !== "undefined") {
      if (!district_name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        districtError = "*Please enter district.";
      }
    }

    this.setState({
      nameError:nameError,emailError:emailError,phoneNumberError:phoneNumberError,addressError:addressError,cityError:cityError,stateError:stateError,districtError:districtError});
    return formIsValid;


  }

    render(){
    const {Name,email,phoneNumber,address,city,state_name,district_name,remarks}=this.state
        return(
            <div className="App">
                <form onSubmit={this.handleSubmit} >
                <div className="information">
                <h3>Ambulance Service Form</h3><br/>
          	<label> <FiUser/>Name:</label>
                <input type="text" name="Name" value={Name} onChange={this.handleChange}/>
                <div className="style" >{this.state.nameError}</div>
                <label> <FiMail/>Email:</label>
                <input type="text" name="email" value={email} onChange={this.handleChange}/>
                <div className="style" >{this.state.emailError}</div>
               <label> <FiSmartphone/>Phone:</label>
                <input type="number" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                <div  className="style"  >{this.state.phoneNumberError}</div>
                <label><BiHomeAlt/>Address:</label>
                <input type="text"  name="address" value={address} onChange={this.handleChange}/>
                <div className="style" >{this.state.addressError}</div>
                <label> <BiCurrentLocation/>City:</label>
                <input type="text" name="city" value={city} onChange={this.handleChange} />
                <div className="style" >{this.state.cityError}</div>
                <label><BiCurrentLocation/>State: </label>
                    <select  name="state_name" value={state_name} onChange={this.handleChange}>
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
                </select>
                <div className="style" >{this.state.stateError}</div>
                <label><BiCurrentLocation/>District : </label>
              <input type="text" name="district_name" value={district_name}onChange={this.handleChange} />   
              <div className="style" >{this.state.districtError}</div>
          <label><BiComment/>Remarks:</label>
          <input type="textArea"  name="remarks" value={remarks} onChange={this.handleChange} placeholder="remarks(optional)"/><br/>
            <button>Submit</button>  
      </div>
  </form> 
   </div> 
    )
   }
}
export default AmbulanceServiceForm;