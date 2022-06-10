import { getCategories } from '../../../api/categoryData';
import renderToDOM from '../../helpers/renderToDom';

const selectCategory = (categoryId) => {
  let domString = `<label for="categoryId"></label>
    <select class="form-control" id="categoryId">
    <option value="">Select a Category</option>`;

  getCategories().then((categoryArray) => {
    categoryArray.forEach((category) => {
      domString += `
        <option
          value="${category.firebaseKey}"
          ${categoryId === category.firebaseKey ? 'selected' : ''}>
           ${category.category_name}
        </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
