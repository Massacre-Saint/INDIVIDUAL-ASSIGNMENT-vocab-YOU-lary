import { createCategory, getCategories, updateCategory } from '../../api/categoryData';
import { createEntry, getEntries, updateEntry } from '../../api/entriesData';
import { showCategories } from '../components/pages/categories';
import { showEntries } from '../components/pages/entries';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const entryObject = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        categoryId: document.querySelector('#categoryId').value,
        date: new Date().toLocaleDateString(),
        uid
      };
      createEntry(entryObject, uid).then((entryArray) => showEntries(entryArray, uid));
    }
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const entryObject = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        categoryId: document.querySelector('#categoryId').value,
        date: new Date().toLocaleDateString(),
        firebaseKey,
        uid
      };
      updateEntry(entryObject, uid).then(() => {
        getEntries(uid).then((response) => showEntries(response, uid));
      });
    }

    if (e.target.id.includes('submit-category')) {
      const categoryObject = {
        category_name: document.querySelector('#category_name').value,
        definition: document.querySelector('#category-definition').value,
        uid
      };
      createCategory(categoryObject, uid).then((categoryArray) => showCategories(categoryArray));
    }

    if (e.target.id.includes('update-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      const categoryObject = {
        category_name: document.querySelector('#category_name').value,
        definition: document.querySelector('#category-definition').value,
        firebaseKey,
        uid
      };
      updateCategory(categoryObject, uid).then(() => {
        getCategories(uid).then((response) => showCategories(response));
      });
    }
  });
};
export default formEvents;
