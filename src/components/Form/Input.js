import './Input.css';

function Input({ type, label, name, placeholder, OnChange, value, ...props }) {
  return (
    <div>
      <label className='labelForm' htmlFor={name}>{label}</label>
      <input className='inputForm'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={OnChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;