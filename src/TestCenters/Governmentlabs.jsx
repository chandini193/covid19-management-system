import { Component } from "react";
import Form from "react-bootstrap/Form";
import govtlabs from "../data/Governmentlabs.json";
import styles from '../components/CascadingDropDown/CascadingDropDown.module.css';
import { Typography, Card, CardContent } from "@material-ui/core";
import sty from '../TestCenters/cssstyle.module.css';

class Governmentlabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainobj: govtlabs,
            selected: govtlabs[0].government_labs,
            Name: govtlabs[0].state_or_UT
        }
    }
    changeHandler(event) {
        this.setState({ Name: event.target.value });
        this.setState({ selected: this.state.mainobj.find(obj => obj.state_or_UT === event.target.value).government_labs });

    }

    render() {

        if (this.state.selected === null || this.state.selected === undefined) {
            return null;
        }
        return (
            <div>
                <div>
                    <Form inline={true} className={styles.form}>
                        <Form.Group controlId="ID" className={styles.form_group}>
                            <Form.Label className={styles.form_label}>Select State</Form.Label>
                            <Form.Control className={styles.form_control} as="select" custom
                                onChange={this.changeHandler.bind(this)}>
                                {
                                    this.state.mainobj.map((e, key) => {
                                        return <option key={key} value={(e.state_or_UT)}>{e.state_or_UT}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    {

                        this.state.selected.map((item, i) => {
                            return (
                                <Card key={i} className={sty.card}>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom><b>{item["name"]}</b></Typography>
                                        <Typography color="textSecondary" gutterBottom>{item["address"]}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }

                </div>
            </div>

        )
    }
}
export default Governmentlabs;