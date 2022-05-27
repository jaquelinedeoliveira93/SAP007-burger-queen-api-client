// import components
import Button from '../Button/Button';
import Input from './Input';
import Select from './Select';

//import style
import './Form.css';

function Form() {
  return (
    <form className='containerForm'>
      <Input
        type='text'
        text='Nome'
        name='name'
        placeholder='Digite seu nome completo'
      />
      <Input
        type='email'
        text='Email'
        name='email'
        placeholder='Digite um email válido'
      />
      <Input
        type='password'
        text='Senha'
        name='password'
        placeholder='Senha com no mínimo seis caracteres'
      />
      <Select />
      <Button
        text='ENVIAR'
      />
    </form>
  );
};

export default Form;