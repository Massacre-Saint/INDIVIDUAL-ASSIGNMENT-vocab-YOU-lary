import { createEntry } from '../../api/entriesData';
import { showEntries } from '../components/pages/entries';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-entry')) {
      const entryObject = {
        term: document.querySelector('#term').value,
        definition: document.querySelector('#definition').value,
        category_id: document.querySelector('#category_id').value
      };
      createEntry(entryObject).then((entryArray) => showEntries(entryArray));
    }
  });
};

export default formEvents;
