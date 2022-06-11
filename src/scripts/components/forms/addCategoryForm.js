import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addCategoryForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-category--${obj.firebaseKey}` : 'submit-category'}" class="mb-4">
      <div class="form-group">
        <label for="category_name">Category Name</label>
        <input type="text" class="form-control" id="category_name" aria-describedby="termTitle" placeholder="Enter Term Title" value="${obj.category_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="category-definition">Definition</label>
        <textarea class="form-control" placeholder="Term Definition" id="category-definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit Category
      </button>
    </form>`;
  renderToDOM('#form-container', domString);
};

export default addCategoryForm;
