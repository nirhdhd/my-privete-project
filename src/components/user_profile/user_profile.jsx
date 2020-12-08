import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import "./user_profile.scss";
import Button from "@material-ui/core/Button";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";


function User_profile() {

    let history = useHistory();

    const logout = () => {
        localStorage.removeItem('myCoockies');
        history.push("/login");
    }

    const goToStep_One = () => {
        history.push("/step_one");
    }

    return (
        <div className="divStyle">
            <Card className="top_cardStyle">
                <AppBar className="appbar" position="static">
                    <Toolbar className="Toolbar">
                        <Typography variant="h6">BLANKS</Typography>
                        <Button onClick={logout} variant="outlined" color="inherit">logout</Button>
                    </Toolbar>
                </AppBar>
                <Card className="profile_details">
                    <img style={{ height: '300px', marginTop: '20px', marginBottom: '20px' }} src="assets/user_profile.svg" />

                    <Card className="fooo" >username: -----      <Button variant="contained" color="primary">change </Button></Card>
                    <Card className="fooo" >email: -----      <Button variant="contained" color="primary">change </Button></Card>
                    <Card className="fooo" >email: -----      <Button variant="contained" color="primary">change </Button></Card>




                    <Button variant="contained" color="primary">back</Button>
                </Card>
            </Card>




        </div>
    );
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(User_profile);

