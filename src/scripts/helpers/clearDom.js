const clearDom = () => {
  document.querySelector('#app').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
