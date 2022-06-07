import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/entries.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createEntry = (entryObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/entries.json`, entryObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/entries/${response.data.name}.json`, payload)
        .then(() => {
          getEntries(entryObj).then(resolve);
        });
    }).catch(reject);
});

const updateEntry = (entryObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/entries/${entryObj.firebaseKey}.json`, entryObj)
    .then(() => getEntries().then(resolve))
    .catch(reject);
});

const deleteEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/entries/${firebaseKey}.json`)
    .then(() => {
      getEntries().then((booksArray) => resolve(booksArray));
    })
    .catch((error) => reject(error));
});

const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/entries/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});
export {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
  getSingleEntry
};
