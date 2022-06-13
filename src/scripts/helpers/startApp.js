import { getEntries } from '../../api/entriesData';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import { showEntries } from '../components/pages/entries';
import navigationEvents from '../events/navigationEvents';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  console.warn(user);
  domBuilder();
  domEvents(user.uid);
  formEvents(user.uid);
  navBar(user);
  navigationEvents(user.uid);
  getEntries(user.uid).then((entryArray) => showEntries(entryArray, user.uid));
};
export default startApp;
