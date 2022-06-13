import { signMeOut } from '../components/buttons/logoutBtn';
import addEntryForm from '../components/forms/addEntryForm';
import { getCategories } from '../../api/categoryData';
import { emptyEntries, showEntries } from '../components/pages/entries';
import { showCategories } from '../components/pages/categories';
import { getEntries } from '../../api/entriesData';
// import { addButton, hideButton } from '../components/buttons/toggleCategoryButton';
import clearDom from '../helpers/clearDom';
import addCategoryForm from '../components/forms/addCategoryForm';

const navigationEvents = (uid) => {
  document.querySelector('#logout-btn')
    .addEventListener('click', signMeOut);

  document.querySelector('#categories').addEventListener('click', () => {
    getCategories(uid).then((categoryArray) => showCategories(categoryArray));
    // addButton();
  });

  document.querySelector('#create-entry').addEventListener('click', () => {
    addEntryForm({}, uid);
  });

  document.querySelector('#create-category').addEventListener('click', () => {
    addCategoryForm({}, uid);
  });

  document.querySelector('#entries').addEventListener('click', () => {
    getEntries(uid).then((entryArray) => showEntries(entryArray, uid));
    // hideButton();
  });

  document.querySelector('#search').addEventListener('input', (e) => {
    clearDom();
    const input = e.target.value.trim().toLowerCase();
    getEntries(uid).then((entryArray) => {
      const results = entryArray.filter((entry) => entry.term.trim().toLowerCase().includes(input));
      if (results.length) {
        showEntries(results, uid);
      } else {
        emptyEntries('No entries match this search');
      }
    });
  });
  document.querySelector('#search').value = '';
};

export default navigationEvents;
