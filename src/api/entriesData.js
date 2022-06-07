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

export { getEntries, createEntry };
