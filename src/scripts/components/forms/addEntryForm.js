import renderToDOM from '../../helpers/renderToDom';
import clearDom from '../../helpers/clearDom';
import selectCategory from './selectCategory';

/* <label for="category_id">Define the related Category</label>
        <input type="text" class="form-control" id="category_id"  aria-describedby="categoryName" placeholder="Category Name" value="
        ${obj.category_id || ''}" required></input> */
const addEntryForm = (obj = {}) => {
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
  selectCategory(`${obj.category_id || ''}`);
};

export default addEntryForm;
// date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
