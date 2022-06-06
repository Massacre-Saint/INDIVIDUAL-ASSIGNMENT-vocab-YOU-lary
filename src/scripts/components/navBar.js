import renderToDOM from '../helpers/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><i class="fab fa-github-square fa-3x"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Create Entry</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Entries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Categories</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div id="logout-btn"
      </div>
    </div>
  </nav>
  `;
  renderToDOM('#navbar', domString);
};

export default navBar;
