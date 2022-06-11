import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCategories = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/categories.json?orderBy="uid"&equalTo="${uid}"`)
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

const createCategory = (categoryObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/categories.json`, categoryObject)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/categories/${response.data.name}.json`, payload)
        .then(() => {
          getCategories(uid).then(resolve);
        });
    }).catch(reject);
});

const updateCategory = (categoryObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/categories/${categoryObj.firebaseKey}.json`, categoryObj)
    .then(() => getCategories(uid).then(resolve))
    .catch(reject);
});

const deleteCategory = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/categories/${firebaseKey}.json`)
    .then(() => {
      getCategories(uid).then((categoryArray) => resolve(categoryArray));
    })
    .catch((error) => reject(error));
});
export {
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
