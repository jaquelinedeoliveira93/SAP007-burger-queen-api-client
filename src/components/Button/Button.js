import './Button.css';

function Button({text}) {
  return (
    <div>
      <button className='buttonSubmit'>{text}</button>
    </div>
  );
};

export default Button;
