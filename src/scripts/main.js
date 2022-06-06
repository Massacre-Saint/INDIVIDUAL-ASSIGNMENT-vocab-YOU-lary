import checkLoginStatus from './helpers/checkLoginStatus';
import 'bootstrap';
import '../styles/main.scss';
import { welcomeLogin } from './components/pages/welcomeLogin';

const init = () => {
  welcomeLogin();
  // <h2>These are font awesome icons:</h2> use for later styling
  // <i class="fas fa-user fa-4x"></i> <i class="fab fa-github-square fa-5x"></i>

  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

init();
