// import components
import InputEmail from '../components/Inputs/InputEmail';
import InputPassword from '../components/Inputs/InputPassword';
import Footer from '../components/Footer/Footer';
import LinkToRegister from '../components/Links/LinkToRegister';
import Button from '../components/Button/Button';
import background from '../img/background.jpeg';

// import styles
import './index.css';
import './Login.css';

function Login() {
  return (
    <div style={{ backgroundImage: {background},
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' 
    }}>
      <section className='sectionForm'>
        <h1 className='title'>LOGIN</h1>
        <form className='containerForm'>
          <InputEmail />
          <InputPassword />
          <Button
            title="ENTRAR"
            onPress
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
