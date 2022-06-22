// import hooks
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import functions API
import { setToken } from '../../services/localStorege';
import { loginUser } from '../../services/API';
import { ErrorLogin } from '../../services/Error';

// import components
import Input from '../../components/Form/Input';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Message from '../../components/Message/Message';
import LinkToRegister from '../../components/Links/LinkToRegister';

// import styles
import '../index.css';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorMessage(ErrorLogin(response));
      })
      .then((data) => {
        setToken(data.token);
        navigate('/Hall');
      })
      .catch((error) => {
      });
  };

  return (
    <div className='backgroundImg'>
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
            autoComplete='on'
          />

          <Message
            disable={errorMessage ? false : true}
            message={errorMessage}
          />

          <Button
            className='buttonSubmit'
            text='ENTRAR'
            onClick={handleLogin}
          />
        </form>

        <p className='subtitle'>Não possui uma conta?</p> <LinkToRegister />

        <Footer />

      </section>
    </div>
  );
};

export default Login;