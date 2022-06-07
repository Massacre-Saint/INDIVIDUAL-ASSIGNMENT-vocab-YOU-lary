import { getCategories } from '../../../api/categoryData';
import renderToDOM from '../../helpers/renderToDom';

const selectCategory = (categoryId) => {
  let domString = `<label for="category_id"></label>
    <select class="form-control" id="category_id" required>
    <option value="">Select a Category</option>`;

  getCategories().then((categoryArray) => {
    categoryArray.forEach((category) => {
      domString += `
        <option 
          value="${category.category_name}" 
          ${categoryId === category.firebaseKey ? 'selected' : ''}>
          ${category.category_name}
        </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
