import { getSingleCategory } from './categoryData';

const createCategory = (entryCategoryId) => new Promise((resolve, reject) => {
  getSingleCategory(entryCategoryId).then(())

});
