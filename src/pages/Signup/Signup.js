import React, { useState } from "react";
import { Button } from "../../commons/Button/Button";
import { Input } from "../../commons/Input/Input";
import { Label } from "../../commons/Label/Label";
import { Title } from "../../commons/Title/Title";
import "./Signup.css";
export const Signup = ({ toogleForm }) => {
  // const [user, setUser] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div className="signup-container">
      <Title text="Registro" />
      <Label text="Email" />
      <Input
        attribute={{
          id: "email-signup",
          name: "email",
          type: "email",
          placeholder: "Ingrese su Email",
        }}
      />
      <Label text="Usuario" />
      <Input
        attribute={{
          id: "usuario",
          name: "usuario",
          type: "text",
          placeholder: "Ingrese su nombre de usuario",
        }}
      />
      <Label text="Contraseña" />
      <Input
        attribute={{
          id: "contraseña-signup",
          name: "contraseña-signup",
          type: "password",
          placeholder: "Ingrese su constraseña",
        }}
      />
      <Label text="Contraseña" />
      <Input
        attribute={{
          id: "contraseña-signup-confirm",
          name: "contraseña",
          type: "password",
          placeholder: "Ingrese su constraseña",
        }}
      />
      <div className="container-buttons">
        {" "}
        <Button className={"btn-signup"} text={"Registrarse"}></Button>
      </div>
      <p>ya tienes cuenta?</p>
      <Button className={"btn-login"} onClick={toogleForm} text={"Ingresar"} />
    </div>
  );
};
