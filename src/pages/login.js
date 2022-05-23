// import components
import InputEmail from "../components/Inputs/InputEmail";
import InputPassword from "../components/Inputs/InputPassword";
import ButtonHall from "../components/Button/ButtonHall";
import ButtonKitchen from "../components/Button/ButtonKitchen";

// import styles
import "./Login.css";
import "./index.css";

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
      <p className="subtitle">Ainda não possui uma conta? <u><strong>Cadastre-se aqui</strong></u></p>
    </section>
  );
}

export default Login;
