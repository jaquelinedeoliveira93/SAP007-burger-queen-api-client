// import components
import Input from '../components/Form/Input';
import Footer from '../components/Footer/Footer';
import LinkToRegister from '../components/Links/LinkToRegister';
import Button from '../components/Button/Button';
import background from '../img/background.jpeg';

// import styles
import './index.css';
import './Login.css';

function Login() {
  return (
    <div style={{
      backgroundImage: { background },
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <section className='sectionForm'>
        <h1 className='title'>LOGIN</h1>
        <form className='containerForm'>
          <Input
            type='email'
            text='Email'
            name='email'
            placeholder='Digite seu email'
          />
          <Input
            type='password'
            text='Senha'
            name='password'
            placeholder='Digite sua senha'
          />
          <Button
            text="ENTRAR"
          />
        </form>
        <p className='subtitle'>Não possui uma conta?</p>
        <LinkToRegister />
        <Footer />
      </section>
    </div>
  );
};

export default Login;
