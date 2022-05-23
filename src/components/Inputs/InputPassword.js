import "./Inputs.css";

const InputPassword = () => {
  return (
    <section>
      <label htmlFor="password" className="labelForm">Senha</label>
      <input type="text" id="password" className="inputForm" placeholder="Senha"/>
    </section>
  );
};

export default InputPassword;