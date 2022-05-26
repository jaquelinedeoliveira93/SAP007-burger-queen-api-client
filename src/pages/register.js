// import { useState, useEffect } from 'react';

// import components
import Form from '../components/Form/Form';
import Footer from '../components/Footer/Footer';
import LinkToLogin from '../components/Links/LinkToLogin';

// import style
import './index.css';
import './Register.css';

function Register() {
  return (
    <section className='sectionForm' >
      <h1 className='title'>CRIE UMA CONTA</h1>
      <Form />
      <p className='subtitle'>Já possui uma conta?</p>
      <LinkToLogin />
      <Footer />
    </section>
  );
}

export default Register;
