const clearDom = () => {
  document.querySelector('#crud-content').innerHTML = '';
  document.querySelector('#filter').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
