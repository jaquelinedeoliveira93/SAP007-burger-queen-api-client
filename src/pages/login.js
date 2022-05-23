// import components
import InputEmail from "../components/Inputs/InputEmail";
import InputPassword from "../components/Inputs/InputPassword";
import ButtonHall from "../components/Button/ButtonHall";
import ButtonKitchen from "../components/Button/ButtonKitchen";
import LinkLogin from "../components/Link/LinkLogin";

// import styles
import "./Login.css";
import "./index.css";

// 1 - config react router
// import {BrowserRouter, Routes, Route } from "react-router-dom";
// import Register from "./Register";

function Login() {
  return (
    <section className="sectionForm">
      <h1 className="title">LOGIN</h1>
      <form className="containerForm">
        <InputEmail />
        <InputPassword />
      </form>
      <section className="sectionButtons">
        <ButtonHall />
        <ButtonKitchen />
      </section>
      <LinkLogin />
    </section>
  );
}

export default Login;
