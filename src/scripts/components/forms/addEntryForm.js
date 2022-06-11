import renderToDOM from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import selectCategory from './selectCategory';

const addEntryForm = (obj = {}, uid) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
      <div class="form-group">
        <label for="term">Term Title</label>
        <input type="text" class="form-control" id="term" aria-describedby="termTitle" placeholder="Enter Term Title" value="${obj.term || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Term Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
      <div class="form-group" id="select-category"></div>
      </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit Entry
      </button>
    </form>`;
  renderToDOM('#form-container', domString);
  selectCategory(`${obj.categoryId || ''}`, uid);
};

export default addEntryForm;
