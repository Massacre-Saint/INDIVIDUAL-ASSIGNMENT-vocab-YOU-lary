import { signMeOut } from '../components/buttons/logoutBtn';
import addEntryForm from '../components/forms/addEntryForm';
import { getCategories } from '../../api/categoryData';
import { emptyEntries, showEntries } from '../components/pages/entries';
import { showCategories } from '../components/pages/categories';
import { getEntries } from '../../api/entriesData';
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
  });

  document.querySelector('#search').addEventListener('input', (e) => {
    const input = e.target.value.trim().toLowerCase();
    getEntries(uid).then((entryArray) => {
      const results = entryArray.filter((entry) => entry.term.trim().toLowerCase().includes(input) || entry.definition.trim().toLowerCase().includes(input));
      if (results.length) {
        showEntries(results, uid);
      } else {
        emptyEntries('No entries match this search');
      }
    });
  });
  document.querySelector('#a-z').addEventListener('click', () => {
    getEntries(uid).then((entryArray) => {
      const results = entryArray.sort((a, b) => a.term.toLowerCase().localeCompare(b.term.toLowerCase()));
      showEntries(results, uid);
    });
  });
  document.querySelector('#z-a').addEventListener('click', () => {
    getEntries(uid).then((entryArray) => {
      const results = entryArray.sort((a, b) => b.term.toLowerCase().localeCompare(a.term.toLowerCase()));
      showEntries(results, uid);
    });
  });
  document.querySelector('#new').addEventListener('click', () => {
    getEntries(uid).then((entryArray) => {
      const results = entryArray.sort((a, b) => b.date - a.date);
      showEntries(results, uid);
    });
  });
  document.querySelector('#old').addEventListener('click', () => {
    getEntries(uid).then((entryArray) => {
      const results = entryArray.sort((a, b) => a.date - b.date);
      showEntries(results, uid);
    });
  });
};

export default navigationEvents;
