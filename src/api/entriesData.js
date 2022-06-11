import axios from 'axios';
import { noFilterEntries } from '../scripts/components/pages/entries';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEntries = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/entries.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createEntry = (entryObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/entries.json`, entryObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/entries/${response.data.name}.json`, payload)
        .then(() => {
          getEntries(uid).then(resolve);
        });
    }).catch(reject);
});

const updateEntry = (entryObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/entries/${entryObj.firebaseKey}.json`, entryObj)
    .then(() => getEntries(uid).then(resolve))
    .catch(reject);
});

const deleteEntry = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/entries/${firebaseKey}.json`)
    .then(() => {
      getEntries(uid).then((booksArray) => resolve(booksArray));
    })
    .catch((error) => reject(error));
});

const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/entries/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getEntriesByCategory = (categoryId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/entries.json?orderBy="categoryId"&equalTo="${categoryId}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([noFilterEntries()]);
      }
    })
    .catch((error) => reject(error));
});
export {
  getEntries,
  createEntry,
  updateEntry,
  deleteEntry,
  getSingleEntry,
  getEntriesByCategory
};
