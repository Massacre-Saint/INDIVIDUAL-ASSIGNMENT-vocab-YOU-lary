import { signMeOut } from '../components/buttons/logoutBtn';
import addEntryForm from '../components/forms/addEntryForm';
import { getCategories } from '../../api/categoryData';
import { noFilterEntries, showEntries } from '../components/pages/entries';
import { showCategories } from '../components/pages/categories';
import { getEntries } from '../../api/entriesData';
import { addButton, hideButton } from '../components/buttons/toggleCategoryButton';

const navigationEvents = (uid) => {
  document.querySelector('#logout-btn')
    .addEventListener('click', signMeOut);

  document.querySelector('#categories').addEventListener('click', () => {
    getCategories(uid).then((categoryArray) => showCategories(categoryArray));
    addButton();
  });

  document.querySelector('#create-entry').addEventListener('click', () => {
    addEntryForm({}, uid);
  });

  document.querySelector('#entries').addEventListener('click', () => {
    getEntries(uid).then((entryArray) => showEntries(entryArray, uid));
    hideButton();

    document.querySelector('#search').addEventListener('input', (e) => {
      const input = document.querySelector('#search').value.ToLowerCase();
      if (e.keyCode === 13) {
        getEntries(uid).then((entryArray) => {
          const results = [];
          entryArray.forEach((entry) => {
            if (entry.term.ToLowerCase().includes(input)) {
              results.push(entry);
            }
            if (results.length) {
              showEntries(results, uid);
            } else {
              noFilterEntries();
            }
          });
        });
        document.querySelector('#search').value = '';
      }
    });
  });
};

export default navigationEvents;
