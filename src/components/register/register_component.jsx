import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import './register_component.scss'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Register() {
    // Declare a new state variable, which we'll call "count"
    // const [count, setCount] = useState(0);

    return (

        <div className="divStyle" >
            <Card className="cardStyle">

                <h1>Register</h1>

                <div className="foo">
                    <TextField style={{ width: "350px", margin: 'auto' }} id="outlined-basic" label="username" variant="outlined" type='text' />
                    <div className="divider" ></div>
                    <TextField style={{ width: "350px", margin: 'auto' }} id="outlined-basic" label="Email" variant="outlined" type='email' />
                    <div className="divider" ></div>
                    <TextField style={{ width: "350px", margin: 'auto' }} id="outlined-basic" label="Password" variant="outlined" type='password' />
                </div>
                <div className="divider" ></div>


                <div className="foo2">
                    <Button className="buttonStyle" variant="contained">confirm</Button>
                    <a className='linkStyle' href="https://reactjs.org/docs/hooks-overview.html">registered allredy? click here </a>
                </div>

            </Card>
        </div>
    );
}

export default Register;