import { signMeOut } from '../components/buttons/logoutBtn';
import addEntryForm from '../components/forms/addEntryForm';
import { getCategories } from '../../api/categoryData';
import { showEntries } from '../components/pages/entries';
import { showCategories } from '../components/pages/categories';
import { getEntries } from '../../api/entriesData';
import { addButton, hideButton } from '../components/buttons/toggleCategoryButton';

const navigationEvents = () => {
  document.querySelector('#logout-btn')
    .addEventListener('click', signMeOut);

  document.querySelector('#categories').addEventListener('click', () => {
    getCategories().then((categoryArray) => showCategories(categoryArray));
    addButton();
  });

  document.querySelector('#create-entry').addEventListener('click', () => {
    addEntryForm({});
  });

  document.querySelector('#entries').addEventListener('click', () => {
    getEntries().then((entryArray) => showEntries(entryArray));
    hideButton();
  });
};

export default navigationEvents;
