import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ambulance.css';
import { BsInfoSquareFill } from 'react-icons/bs';
import { CardContent, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';
class Alist extends React.Component {
    constructor() {
        super()
        this.state = {
            ambulance: []
        }
    }
    componentDidMount() {
        const url = ("http://localhost:5000/Ambulance");
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                ambulance: res
            }));
    }
    render() {
        return (
            <div>
                <p align="center"><h3 className="heading">Ambulance Dashboard</h3></p><br />
                <p className="formLink" align="center"><h6>  <BsInfoSquareFill /> if you want to provide the services regarding the Ambulance{" "}
                    <a href="/AContacts">Click here</a></h6></p>
                <br />
                <h5 align="center">Contacts of the Ambulance Service Providers</h5>
                {
                    this.state.ambulance.map((item) => {
                        return (
                            <Card key={item.id} className="card">
                                <CardContent>
                                    <Typography color="textSecondary" gutterButtom>UserName  :  {item.userName}</Typography>
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
};
export default Alist;