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
      <a class="navbar-brand" href="#" id="logo">
        <span>
          Vocab <img src="${u}" alt="logo"> lary
        </span>
      </a>
      <div class="center">
        <form class="d-flex" role="search">
          <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="btn-group">
          <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a id="a-z" class="dropdown-item" href="#">A to Z</a></li>
            <li><a id="z-a" class="dropdown-item" href="#">Z to A</a></li>
            <li><a id="new" class="dropdown-item" href="#">Newest</a></li>
            <li><a id="old" class="dropdown-item" href="#">Oldest</a></li>
          </ul>
        </div>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
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
