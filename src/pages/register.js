// import components
import InputName from "../components/Inputs/InputName";
import InputEmail from "../components/Inputs/InputEmail";
import InputPassword from "../components/Inputs/InputPassword";
import SelectWorkplace from "../components/Select/SelectWorkplace";
import Button from "../components/Button/Button";
// import style
import "./index.css";
import "./Register.css";

function Register() {
  return (
    <section className="sectionForm">
        <h1 className="title">CRIE UMA CONTA</h1>
        <form className="containerForm">
          <InputName />
          <InputEmail />
          <InputPassword />
          <SelectWorkplace />
          <Button />
        </form>
        <p className="subtitle">Já possui uma conta? <u><strong>Faça login aqui</strong></u></p>
    </section>
  );
}

export default Register;
