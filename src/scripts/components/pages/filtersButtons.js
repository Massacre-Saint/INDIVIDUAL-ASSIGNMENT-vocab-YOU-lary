import { getCategories } from '../../../api/categoryData';
import renderToDOM from '../../helpers/renderToDom';

const filterButtons = (uid) => {
  getCategories(uid).then((categoryArray) => {
    if (categoryArray.length) {
      let domString = '';
      categoryArray.forEach((category) => {
        domString += `
        <button
          id="filter-category-btn--${category.firebaseKey}"
          type="button" class="btn btn-secondary">
          ${category.category_name}
        </button>
          `;
        renderToDOM('#filter', domString);
      });
    }
  });
};

export default filterButtons;
