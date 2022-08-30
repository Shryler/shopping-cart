import "./register.css";

import React, { useState } from 'react';

const Register = () => {

    const [login, setLogin] = useState("");
    const [loginCheck, setLoginCheck] = useState(false);
    const [mail, setMail] = useState("");
    const [mailCheck, setMailCheck] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);
    const [confPasswordCheck, setConfPasswordCheck] = useState(false);

    const regexMail = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
    const regexPassword = new RegExp(/^((?=\S?[A-Z])(?=\S?[a-z])(?=\S*?[0-9]).{5,})\S$/);
    
    const changeLogin = (e) => {
        const loginValue = e.target.value;
        if (loginValue.length > 3){
            setLoginCheck(true);
            setLogin(loginValue);
        } else {
            setLoginCheck(false);
        }
    }

    const changePassword = (e) => {
        const passwordValue = e.target.value;
        const passwordCheck = regexPassword.test(passwordValue);
        if (passwordCheck) {
            setPasswordCheck(true);
            setPassword(passwordValue);
        } else {
            setPasswordCheck(false);
        }
    }

    const confirmPassword = (e) => {
        const confPasswordValue = e.target.value;
        if (password === confPasswordValue){
            setConfPasswordCheck(true);
        } else {
            setConfPasswordCheck(false);
        }
    }

    const changeMail = (e) => {
        const mailValue = e.target.value;
        const mailCheck = regexMail.test(mailValue);
        if (mailCheck) {
            setMailCheck(true);
            setMail(mailValue);
        } else {
            setMailCheck(false);
        }
    }
    const handleClickRegister = (e) => {
        e.preventDefault();
        if (loginCheck && passwordCheck && confPasswordCheck && mailCheck){
            alert("Vous êtes enregistré !")
            console.log("Login :" + login);
            console.log("Mail :" + mail);
            console.log("Password :" + password);
        } else {
            alert("Données incorrectes");
        }
    }

    return (
        <div className="form-register">
            <div className="d-flex flex-column">
                <label htmlFor="" className="mt-2 text-center">Saisir un login</label>
                <input type="text" name="login" placeholder="Login" className={loginCheck ? "form-success" : "form-wrong"} onChange={changeLogin} />
                <span className="text-danger text-center">{loginCheck ? "" : "Login incorrect"}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="" className="mt-2 text-center">Saisir votre adresse mail</label>
                <input type="text" name="mail" placeholder="Adresse mail" className={mailCheck ? "form-success" : "form-wrong"} onChange={changeMail} />
                <span className="text-danger text-center">{mailCheck ? "" : "Adresse mail incorrecte"}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="" className="mt-2 text-center">Saisir un mot de passe</label>
                <input type="password" name="password" placeholder="Password" className={passwordCheck ? "form-success" : "form-wrong"} onChange={changePassword} />
                <span className="text-danger text-center">{passwordCheck ? "" : "Mot de passe incorrecte"}</span>
            </div>
            <div className="d-flex flex-column">
                <label htmlFor="" className="mt-2 text-center">Confirmation du mot de passe</label>
                <input type="password" name="confpassword" placeholder="Confirmation du password" className={confPasswordCheck ? "form-success" : "form-wrong"} onChange={confirmPassword} />
                <span className="text-danger text-center">{confPasswordCheck ? "" : "Confirmation du mot de passe incorrecte"}</span>
            </div>
            <button type="submit" onClick={handleClickRegister}>S'enregister</button>
        </div>
    );
};

export default Register;