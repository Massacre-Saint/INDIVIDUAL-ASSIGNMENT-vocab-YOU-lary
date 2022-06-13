import addCategoryForm from '../components/forms/addCategoryForm';
import addEntryForm from '../components/forms/addEntryForm';
import { deleteEntry, getSingleEntry, getEntriesByCategory } from '../../api/entriesData';
import { showEntries } from '../components/pages/entries';
import { deleteCategory, getSingleCategory } from '../../api/categoryData';
import { showCategories } from '../components/pages/categories';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey, uid).then((entryArray) => showEntries(entryArray, uid));
      }
    }

    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj, uid));
    }

    if (e.target.id.includes('delete-category-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCategory(firebaseKey, uid).then((categoryArray) => showCategories(categoryArray));
      }
    }

    if (e.target.id.includes('update-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCategory(firebaseKey).then((categoryObj) => addCategoryForm(categoryObj, uid));
    }

    if (e.target.id.includes('filter-category-btn')) {
      const button = e.target.id.split('--');
      const firebaseKey = button[1];
      getEntriesByCategory(firebaseKey, uid).then((entryArray) => {
        if (entryArray.length) {
          showEntries(entryArray, uid);
        }
      });
    }
  });
};

export default domEvents;
// try to do getentries by category
