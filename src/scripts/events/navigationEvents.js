import { signMeOut } from '../components/buttons/logoutBtn';

const navigationEvents = () => {
  document.querySelector('#logout-btn')
    .addEventListener('click', signMeOut);
};

export default navigationEvents;
