const navBar=()=>{
    return ` <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
    <img src="/jsonproject/images/h2logo.jpg" alt="">

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/jsonproject/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/jsonproject/pages/admin.html">Admin</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/jsonproject/pages/product.html">product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/jsonproject/pages/cart.html">cart</a>
          </li>
        
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    <a href="/jsonproject/pages/login.html">
      <button class="btn btn-outline-success" type="submit">login</button>
      
    </a> 
    <a href="/jsonproject/pages/signup.html">
      <button class="btn btn-outline-success" type="submit">Signup</button>
      
    </a> 
      </div>
    </div>
  </nav>`
}
export default navBar