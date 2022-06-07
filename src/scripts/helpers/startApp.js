// import { getCategories } from '../../api/categoryData';
import { getEntries } from '../../api/entriesData';
import { logoutButton } from '../components/buttons/logoutBtn';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { showEntries } from '../components/pages/entries';
// import { showCategories } from '../components/pages/categories';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getEntries().then((entryArray) => showEntries(entryArray));
};
export default startApp;
