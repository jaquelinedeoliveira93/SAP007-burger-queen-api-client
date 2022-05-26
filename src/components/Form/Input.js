import './Input.css';

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div>
      <label className='labelForm' htmlFor={name}>{text}</label>
      <input className='inputForm'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export default Input;