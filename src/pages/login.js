// import components
import InputEmail from "../components/Inputs/InputEmail";
import InputPassword from "../components/Inputs/InputPassword";
import ButtonHall from "../components/Button/ButtonHall";
import ButtonKitchen from "../components/Button/ButtonKitchen";
import Footer from "../components/Footer/Footer";

// import styles
import "./Login.css";
import "./index.css";

// 1 - config react router
import { Link } from "react-router-dom";

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
      <p className="subtitle">Não possui uma conta? <Link to="Register"><u><strong>Cadastra-se aqui</strong></u></Link></p>
      <Footer />
    </section>
  );
}

export default Login;
