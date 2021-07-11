import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssBloodBank.css';
import { BsInfoSquareFill } from 'react-icons/bs';
import { CardContent, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
class BloodBankHomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            bloodbank: []
        }
    }
    componentDidMount() {
        const url = ("http://localhost:5000/BloodBank");
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                bloodbank: res
            }));
    }

    render() {

        return (
            <div>
                <p align="center"><h4 className="layout">Blood Bank Dash Board</h4></p><br />
                <p className="innerlayout" align="center"><h6>  <BsInfoSquareFill /> if you want to provide the services regarding the Blood Bank
                    <a href="/BloodBankServiceForm">{" "}Click here</a></h6></p>
                <br />
                <h5 align="center">Contacts of the Blood Bank</h5>
                {
                    this.state.bloodbank.map((item) => {
                        return (
                            <Card key={item.id} className="card">
                                <CardContent>
                                    <Typography color="textSecondary" gutterButtom>BloodBankName  :  {item.bloodBankName}</Typography>
                                    <Typography color="textSecondary" gutterButtom>Email  :  {item.email}</Typography>
                                    <Typography color="textSecondary" gutterButtom>PhoneNumber  :  {item.phoneNumber}</Typography>
                                    <Typography color="textSecondary" gutterButtom>Address  :  {item.address}</Typography>
                                    <Typography color="textSecondary" gutterButtom>City  :  {item.city}</Typography>
                                    <Typography color="textSecondary" gutterButtom>District  :  {item.district_name}</Typography>
                                    <Typography color="textSecondary" gutterButtom>State  :  {item.state_name}</Typography>
                                    <Typography color="textSecondary" gutterButtom>Remarks  :  {item.remarks}</Typography>
                                    <Typography color="textSecondary" gutterButtom>Verified  :  {item.verified}</Typography>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
export default BloodBankHomePage;