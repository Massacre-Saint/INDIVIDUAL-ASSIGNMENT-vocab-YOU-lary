import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const emptyCategories = () => {
  const domString = `
  <span>
    <h2>No Categories, please submit an entry!</h2>
  </span>
  `;
  renderToDOM('#crud-content', domString);
};

const showCategories = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.category_name}</h5>
          <p class="card-text">${item.definition}</p>
          <hr>
          <i class="fas fa-edit btn" id="update-category--${item.firebaseKey}"></i>
          <i class="btn fas fa-trash-alt" id="delete-category-btn--${item.firebaseKey}"></i>
        </div>
      </div>
    `;
    });
    renderToDOM('#crud-content', domString);
  } else {
    emptyCategories();
  }
};

export { showCategories, emptyCategories };
