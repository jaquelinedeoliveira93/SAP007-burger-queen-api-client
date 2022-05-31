// import hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import functions
import { setToken } from '../services/localStorege';
import { loginUser } from '../services/API';

// import components
import Input from '../components/Form/Input';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import Message from '../components/Message/Message';
import LinkToRegister from '../components/Links/LinkToRegister';

// import styles
import './index.css';
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((response) => {
        switch (response.status) {
          case 200:
            return response.json();
          case 400:
            setErrorMessage('E-mail ou senha inválidos');
            break;
          default:
            setErrorMessage('Algo deu errado, tente novamente')
        }
      })
      .then((data) => {
        setToken(data.token);
        console.log(data.token)
        navigate('/Hall');
      })
      .catch((error) => {
      });
  };
  return (
    <section className='sectionForm'>
      <h1 className='title'>LOGIN</h1>
      <form className='containerForm'>
        <Input
          type='email'
          label='Email'
          name='email'
          placeholder='Digite seu email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type='password'
          label='Senha'
          name='password'
          placeholder='Digite sua senha'
          value={password}
          onChange={e => setPassword(e.target.value)}
          autoComplete="on"
        />
        <Message
          disable={errorMessage ? false : true}
          message={errorMessage}
        />
        <Button
          text="ENTRAR"
          onClick={handleLogin}
        />
      </form>
      <p className='subtitle'>Não possui uma conta?</p>
      <LinkToRegister />
      <Footer />
    </section>
  );
};

export default Login;
