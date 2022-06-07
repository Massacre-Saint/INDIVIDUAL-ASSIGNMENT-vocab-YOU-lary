import { getEntriesByCategory, getSingleCategory } from './categoryData';

const getCategoryDetails = (categoryFirebaseKey) => new Promise((resolve, reject) => {
  getSingleCategory(categoryFirebaseKey)
    .then((categoryObject) => {
      getEntriesByCategory(categoryObject.firebaseKey)
        .then((entryObject) => {
          resolve({ entryObject, ...categoryObject });
        });
    }).catch((error) => reject(error));
});

export default getCategoryDetails;
