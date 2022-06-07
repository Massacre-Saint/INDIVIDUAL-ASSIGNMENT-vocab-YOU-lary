import addCategoryForm from '../components/forms/addCategoryForm';
import addEntryForm from '../components/forms/addEntryForm';
import { deleteEntry, getSingleEntry } from '../../api/entriesData';
import { showEntries } from '../components/pages/entries';
import { deleteCategory, getSingleCategory } from '../../api/categoryData';
import { showCategories } from '../components/pages/categories';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('add-category-btn')) {
      addCategoryForm();
    }

    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey).then((entryArray) => showEntries(entryArray));
      }
    }

    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleEntry(firebaseKey).then((entryObj) => addEntryForm(entryObj));
    }

    if (e.target.id.includes('delete-category-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteCategory(firebaseKey).then((categoryArray) => showCategories(categoryArray));
      }
    }

    if (e.target.id.includes('update-category')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCategory(firebaseKey).then((categoryObj) => addCategoryForm(categoryObj));
    }
  });
};

export default domEvents;
