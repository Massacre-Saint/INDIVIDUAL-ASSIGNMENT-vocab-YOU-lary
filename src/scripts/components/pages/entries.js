import renderToDOM from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import filterButtons from './filtersButtons';
// import { hideButton } from '../buttons/toggleCategoryButton';

const emptyEntries = () => {
  const domString = `
  <span>
    <h2>No entries, please submit an entry!</h2>
  </span>
  `;
  renderToDOM('#crud-content', domString);
};

const showEntries = (array) => {
  clearDom();
  filterButtons();

  if (array.length) {
    let domString = '';
    console.warn();
    array.forEach((item) => {
      domString += `
      <div class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <span>Category: ${item.categoryId}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${item.term}</h5>
          <p class="card-text">${item.definition}</p>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-entry-btn--${item.firebaseKey}"></i>
          <i class="fas fa-edit btn btn-info" id="update-entry--${item.firebaseKey}"></i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-entry-btn--${item.firebaseKey}"></i>
        </div>
        <span>${item.date}</span>
      </div>
    `;
    });
    renderToDOM('#crud-content', domString);
  } else {
    emptyEntries();
  }
};

export { emptyEntries, showEntries };

// add || line 23 for { || other created option}
