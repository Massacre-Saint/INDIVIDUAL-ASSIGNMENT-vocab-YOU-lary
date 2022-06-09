// import { getEntriesByCategory, getSingleCategory } from './categoryData';
// import { getSingleEntry } from './entriesData';

// const viewEntryDetails = (entryFirebaseKey) => new Promise((resolve, reject) => {
//   getSingleEntry(entryFirebaseKey)
//     .then((entryObject) => {
//       getSingleCategory(entryObject.category_id)
//         .then((categoryObject) => {
//           resolve({ categoryObject, ...entryObject });
//         });
//     }).catch((error) => reject(error));
// });

// export default getEntriesCategory;
