import React from 'react'


const Header = () => {
  return (
    <div className='bg-dark'>
      <div className=" container  p-3 text-bg-dark">
        
        <div className='d-flex justify-content-between align-items-center flex-wrap px-5'>
            <a href='/' className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none'><h1>MyPasal</h1></a>
          
              <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 ' role='search'>
                <input type='search'  className='form-control-dark mx-2'></input><button type='submit' className='btn btn-outline-light'><i class="bi bi-search"></i></button>
              </form>
        </div> 
      </div> 
      <div>
        <div className='bg-secondary'>
          <div className='container d-flex p-2 justify-content-between text-bg-secondary'>

            <div className='nav-items d-flex justify-content-around w-50'>
                <a href='#' className='nav-link d-flex align-items-center text-decoration-none mb-lg-0 active'><h1>Home</h1></a>
                <a href='#' className='nav-link d-flex align-items-center text-decoration-none'><h1>Products</h1></a>
               <a href='#' className='nav-link d-flex align-items-center text-decoration-none'><h1>Services</h1></a>
                <a href='#' className='nav-link d-flex align-items-center text-decoration-none'><h1>Contacts</h1></a>
             </div>

              <div className='d-flex justify-content-centre px-2'>
                <a href='#' className='fs-2 text-dark px-1'><i class="bi bi-person-add"></i></a>
               <a href='#' className='fs-2 text-dark px-1'><i class="bi bi-box-arrow-in-right"></i></a>
               <a href='#' className='fs-2 text-dark px-1'><i class="bi bi-person-circle"></i></a>
             </div>
         </div>
       </div>


       </div>
 
    </div>
  )
}

export default Header
