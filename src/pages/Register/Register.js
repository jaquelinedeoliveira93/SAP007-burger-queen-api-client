// import hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import functions API
import { createUser } from '../../services/API';
import { setToken } from '../../services/localStorege';

// import components
import Input from '../../components/Form/Input';
import Message from '../../components/Message/Message';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import LinkToLogin from '../../components/Links/LinkToLogin';

// import style
import '../index.css';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password)
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 400:
            setErrorMessage('Preencha todos os campos');
            break;
          case 403:
            setErrorMessage('E-mail já cadastrado');
            break;
          default:
            setErrorMessage('Algo deu errado, tente novamente')
        }
      })
      .then((data) => {
        setToken(data.token);
        navigate('/');
      })
      .catch((error) => {
      });
  };

  return (
    <div className='backgroundImg'>
      <section className='sectionForm' >

        <h1 className='title'>CRIE UMA CONTA</h1>

        <form className='containerForm'>

          <Input
            type='text'
            label='Nome'
            name='name'
            placeholder='Digite seu nome completo'
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <Input
            type='email'
            label='Email'
            name='email'
            placeholder='Digite um email válido'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            type='password'
            label='Senha'
            name='password'
            placeholder='Senha com no mínimo seis caracteres'
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="on"
          />

          <Message
            disable={errorMessage ? false : true}
            message={errorMessage}
          />

          <Button
            className='buttonSubmit'
            text='ENVIAR'
            onClick={handleSubmit}
          />

        </form>

        <p className='subtitle'>Já possui uma conta?</p> <LinkToLogin />

        <Footer />

      </section>
    </div>
  );
};

export default Register;
