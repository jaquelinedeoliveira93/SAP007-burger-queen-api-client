import './Button.css';

function Button({text, onClick, ...props}) {
  return (
    <div>
      <button className='buttonSubmit' onClick={onClick} {...props}>{text}</button>
    </div>
  );
};

export default Button;
