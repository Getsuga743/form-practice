import React, { useState } from "react";
import "./Login.css";
import { Button } from "../../commons/Button/Button";
import { Input } from "../../commons/Input/Input";
import { Label } from "../../commons/Label/Label";
import { Title } from "../../commons/Title/Title";

export const Login = ({ toogleForm }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (name, value) => {
    if (name === "usuario") {
      setUser(value);
    } else if (name === "contraseña") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    let account = { user, password };
    if (account) {
      console.log(account);
    }
  };
  return (
    <div className="login-container">
      <Title text="Bievenido!" />
      <Label text="Usuario:" />
      <Input
        attribute={{
          id: 'usuario',
          name: 'usuario',
          type: 'text',
          placeholder: 'Ingrese su usuario o email',
        }}
        handleChange={handleChange}
      />
      <Label text="Contraseña:" />
      <Input
        attribute={{
          id: 'contraseña',
          name: 'contraseña',
          type: 'password',
          placeholder: 'Ingrese su constraseña',
        }}
        handleChange={handleChange}
      />{' '}
      <div className="btns">
        <Button
          className={'btn-login'}
          onClick={handleSubmit}
          text={'Ingresar'}
        />
        <p>Eres nuevo?</p>
        <Button
          className={'btn-signup'}
          toogleForm={toogleForm}
          text={'Registrarse'}
        ></Button>
      </div>
    </div>
  );
};
