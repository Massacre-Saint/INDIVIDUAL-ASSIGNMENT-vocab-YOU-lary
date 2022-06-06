import loginButton from '../buttons/loginBtn';

const welcomeLogin = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to Vocab-U-lary!</h1>
    <p>Please sign in to access app.</p><br />
    <div id="login-form-container"></div>
  `;
  loginButton();
};

export { welcomeLogin, loginButton };
