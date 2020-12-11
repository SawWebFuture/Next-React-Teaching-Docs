// React tag that does not register in HTML structure <React.Fragment></React.Fragment> or empty bracets <></>

// Steps
//1. components folder add file e.g. (navBar)
//2. Build Arrow Function Component and add code in return statement
//3. Import file and use with tag name <NavBar>

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

// Example with Class Arrow Function Component

const Carousel = () => {
//     return (
//         <div>
//             <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//                     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//                 </ol>

//                 <div className="carousel-inner" role="listbox">
//                     <div className="carousel-item active">
//                         <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
//                     </div>
//                     <div className="carousel-item">
//                         <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
//                     </div>
//                     <div className="carousel-item">
//                         <img className="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
//                     </div>
//                 </div>

//                 <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>

//                 <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </a>

//             </div>
//         </div>
//     )
// }

// export default Carousel; 
