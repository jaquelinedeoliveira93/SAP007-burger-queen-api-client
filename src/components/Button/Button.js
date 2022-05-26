import './Button.css';

export const Button = props => {
  return (
    <button className='buttonSubmit'>
      {props.title}
    </button>
  );
};

export default Button;
