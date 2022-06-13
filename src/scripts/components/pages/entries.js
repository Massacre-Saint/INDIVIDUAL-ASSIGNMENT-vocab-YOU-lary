import renderToDOM from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import filterButtons from './filtersButtons';
// import { hideButton } from '../buttons/toggleCategoryButton';

const emptyEntries = (content) => {
  clearDom();
  const domString = `
  <span class="no-entries">
    <h2>${content || 'No entries found.'}</h2>
  </span>
  `;
  renderToDOM('#crud-content', domString);
};

const noFilterEntries = () => {
  clearDom();
  const domString = `
  <span>
    <h2>No entries match this category!</h2>
  </span>
  `;
  renderToDOM('#crud-content', domString);
};

const showEntries = (array, uid) => {
  clearDom();
  if (array.length) {
    filterButtons(uid);
    let domString = '';
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
          <i class="fas fa-edit btn" id="update-entry--${item.firebaseKey}"></i>
          <i class="btn fas fa-trash-alt" id="delete-entry-btn--${item.firebaseKey}"></i>
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

export { emptyEntries, showEntries, noFilterEntries };
