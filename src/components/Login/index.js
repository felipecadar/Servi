import React from 'react'
import './Login.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Link} from "react-router-dom"

export default function Login(){

    return (
        <div className="form-container">
            <h1>Servi</h1>
            <form id="form-login">
                <div>
                    <TextField required className="form-field" label="E-mail" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <TextField required className="form-field"  type="password" label="Senha" variant="outlined" margin="normal"/>
                </div>
                <div>
                    <Button className="submit-button" variant="outlined" type="submit">Login</Button>
                </div>
            </form>
            <div id="register-div">
                <p>Ainda não tem uma conta?</p>
                <Button component={Link} to="/register" variant="outlined" >Registrar</Button>
            </div>
        </div>
    )
}
