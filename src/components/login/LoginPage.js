import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Link from 'next/link';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      {showLoginForm ? <LoginForm /> : <SignupForm />}
      <p>
        {showLoginForm
          ? "Ainda não tem uma conta? "
          : "Já possui uma conta? "}
        <Link href="#" onClick={handleToggleForm} style={{ alignSelf: 'center', fontWeight: 'normal', fontSize: '0.9em' }}>
          <strong>{showLoginForm ? "Cadastre-se" : "Faça o login"}</strong>
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
