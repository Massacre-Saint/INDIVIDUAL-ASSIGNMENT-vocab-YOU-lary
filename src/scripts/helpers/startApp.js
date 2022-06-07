import { getEntries } from '../../api/entriesData';
import { logoutButton } from '../components/buttons/logoutBtn';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { showEntries } from '../components/pages/entries';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getEntries().then((entryArray) => showEntries(entryArray));
};
export default startApp;
