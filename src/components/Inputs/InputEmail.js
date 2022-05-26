import './Inputs.css';

const InputEmail = () => {
  return (
    <section>
      <label htmlFor='email' className='labelForm'>Email</label>
      <input type='email' id='email' className='inputForm' placeholder='Email'/>
    </section>
  );
};

export default InputEmail;