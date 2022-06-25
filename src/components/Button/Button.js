import './Button.css';

function Button({ text, className, onClick, value }) {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        value={value}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
