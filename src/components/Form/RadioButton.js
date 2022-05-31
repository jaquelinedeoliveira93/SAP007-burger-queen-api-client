import './Input.css';

function RadioButton({ type, label, name, OnChange, value, ...props }) {
  return (
      <div className='containerRadio'>
        <label className='labelForm' htmlFor={name}>{label}</label>
        <input className='radioButton'
          type={type}
          name={name}
          onChange={OnChange}
          value={value}
          {...props}
        />
      </div>
  );
};

export default RadioButton