import renderToDOM from '../helpers/renderToDom';
import { logoutButton } from './buttons/logoutBtn';
import createRender from './createRender';
import u from '../../../documentation/u.png';
// const toggleCategories = () => {
//   const hideCategories = document.querySelector('#toggle-categories');
//   hideCategories.setAttribute('hidden', 'true');
// };

const navBar = (user) => {
  const domString = `
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <span>
          Vocab <img src="${u}" alt="logo"> lary
        </span>
      </a>
      <form class="d-flex" role="search">
        <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon">
          <i class="fa-solid fa-arrow-down"></i>
        </span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hello ${user.displayName}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item" id="entries">
              <a class="nav-link active" aria-current="page" href="#">Entries</a>
            </li>
            <li class="nav-item" id="categories">
              <a class="nav-link" href="#">Categories</a>
            </li>
            <div id="createRender"></div>
          </ul>
          <div id="logout-btn"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `;
  renderToDOM('#navbar', domString);
  logoutButton();
  createRender();
};

export default navBar;
/* <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="${u}" alt="logo" width="50px"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="create-entry" class="nav-link" aria-current="page" href="#">Create Entry</a>
          </li>
          <li class="nav-item" id="entries">
            <a class="nav-link" href="#">Entries</a>
          </li>
          <li class="nav-item" id="categories">
            <a class="nav-link" href="#">Categories</a>
          </li>
        </ul>
      </div>
      <form class="d-flex" role="search">
        <input id="search" class="searchBar form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
      <div id="logout-btn"></div>
      </div>
  </nav> */
