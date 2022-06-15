import './Button.css';

function Button({ text, className, onClick }) {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
