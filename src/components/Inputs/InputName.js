import "./Inputs.css";

const InputName = () => {
  return (
    <section>
      <label htmlFor="name" className="labelForm">Nome</label>
      <input type="text" id="name" className="inputForm" placeholder="Nome"/>
    </section>
  );
};

export default InputName;