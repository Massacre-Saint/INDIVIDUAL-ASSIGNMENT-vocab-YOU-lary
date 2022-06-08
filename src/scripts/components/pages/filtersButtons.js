// import clearDom from "../../helpers/clearDom"
import { getCategories } from '../../../api/categoryData';
import renderToDOM from '../../helpers/renderToDom';

const filterButtons = () => {
  // clearDom();
  getCategories().then((categoryArray) => {
    if (categoryArray.length) {
      let domString = '';
      categoryArray.forEach((category) => {
        domString += `
        <button type="button" class="btn btn-secondary">${category.category_name}</button>
        `;
        renderToDOM('#filter', domString);
      });
    }
  });
};

export default filterButtons;
