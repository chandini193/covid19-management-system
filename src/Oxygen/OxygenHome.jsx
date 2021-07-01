import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './oxygen.css';
import { BsInfoSquareFill } from 'react-icons/bs';
import { CardContent, Typography } from '@material-ui/core';
import { Card } from '@material-ui/core';


class Olist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Oxygen: []

        }
    }
    componentDidMount() {
        const url = ("http://localhost:5000/Oxygen");
        fetch(url)
            .then(res => res.json())
            .then(res => this.setState({
                Oxygen: res
            }));
    }
    render() {
        return (
            <div>
                <p align="center"><h3 className="hey">Oxygen DashBoard</h3></p><br />
                <p className="hello" align="center"><h6>  <BsInfoSquareFill /> if you want to provide the services regarding the Oxygen Bank{" "}
                    <a href="/OContacts">Fill the form</a></h6></p>
                <br />
                <div>

                    <h5 align="center">Contacts of the Oxygen Service</h5>
                    {
                        this.state.Oxygen.map((item) => {
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
            </div>
        )
    }
};
export default Olist;