const clearDom = () => {
  document.querySelector('#crud-content').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
