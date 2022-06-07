import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createCategory = (categoryObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/categories.json`, categoryObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/categories/${response.data.name}.json`, payload)
        .then(() => {
          getCategories(categoryObject).then(resolve);
        });
    }).catch(reject);
});

const getEntriesByCategory = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json?orderBy="category_id"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const updateCategory = (categoryObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/categories/${categoryObj.firebaseKey}.json`, categoryObj)
    .then(() => getCategories().then(resolve))
    .catch(reject);
});

const deleteCategory = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/categories/${firebaseKey}.json`)
    .then(() => {
      getCategories().then((categoryArray) => resolve(categoryArray));
    })
    .catch((error) => reject(error));
});
export {
  getCategories,
  getSingleCategory,
  createCategory,
  getEntriesByCategory,
  updateCategory,
  deleteCategory
};
