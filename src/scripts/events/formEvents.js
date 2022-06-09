import { createCategory, getCategories, updateCategory } from '../../api/categoryData';
import { createEntry, getEntries, updateEntry } from '../../api/entriesData';
import { showCategories } from '../components/pages/categories';
import { showEntries } from '../components/pages/entries';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-entry')) {
      const entryObject = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        categoryId: document.querySelector('#category_id').value,
        date: new Date()
        // selectedCategory_id: document.querySelector('#selectedCategory_id').value
      };
      createEntry(entryObject).then((entryArray) => showEntries(entryArray));
    }
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const entryObject = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        categoryId: document.querySelector('#category_id').value,
        firebaseKey
      };
      updateEntry(entryObject).then(() => {
        getEntries().then((response) => showEntries(response));
      });
    }

    if (e.target.id.includes('submit-category')) {
      const categoryObject = {
        category_name: document.querySelector('#category_name').value,
        definition: document.querySelector('#category-definition').value
      };
      createCategory(categoryObject).then((categoryArray) => showCategories(categoryArray));
    }

    if (e.target.id.includes('update-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      const categoryObject = {
        category_name: document.querySelector('#category_name').value,
        definition: document.querySelector('#category-definition').value,
        firebaseKey
      };
      updateCategory(categoryObject).then(() => {
        getCategories().then((response) => showCategories(response));
      });
    }
  });
};
export default formEvents;
