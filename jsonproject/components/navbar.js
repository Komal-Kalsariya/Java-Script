const navBar=()=>{
    return ` <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <img src="/jsonproject/images/h2.jpg" class="logo" alt="">

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
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
    <a href="/jsonproject/pages/login.html">
    <i class="fa-regular fa-user"></i>  
      
    </a> 
    <a href="/jsonproject/pages/signup.html">
    <i class="fa-solid fa-user-plus"></i>
      
    </a> 
      </div>
    </div>
  </nav>`
}
export default navBar