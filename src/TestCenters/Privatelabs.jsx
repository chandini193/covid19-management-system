import { Component } from "react";
import Form from "react-bootstrap/Form";
import privatelabs from "../data/Privatelabs.json";
import styles from '../components/CascadingDropDown/CascadingDropDown.module.css';
import { Typography, Card, CardContent } from "@material-ui/core";
import sty from '../TestCenters/cssstyle.module.css';
import cx from 'classnames';

class Privatelabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mainobj: privatelabs,
            selected: privatelabs[0].private_labs,
            Name: privatelabs[0].state_or_UT
        }
    }
    changeHandler(event) {
        this.setState({ Name: event.target.value });
        this.setState({ selected: this.state.mainobj.find(obj => obj.state_or_UT === event.target.value).private_labs });

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
                                <Card key={i} className={cx(sty.container, sty.card)}>
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
export default Privatelabs;