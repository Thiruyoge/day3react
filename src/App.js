import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import pic1 from "./images/pic1.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";

import pic5 from "./images/5.jpg";
import { CartProvider } from "./createContext";
import Product from "./Product";

function App() {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <h3 class="navbar-brand" href="#">
            My Shopping{" "}
          </h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto "></ul>
            <span class="navbar-text">
            </span>
          </div>
        </div>
      </nav>

      <section>
        <div class="card border-0 bg-dark text-light " style={{ height: 100 }}>
          <div class="card-body d-flex justify-content-center mx-auto ">
            <h2 class="">Welcome To My Shopping</h2>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row m-3">
            <div class="col-lg-4">
              <div class="card border-secondary" id="product">
                <img class="card-img-top" src={pic1} alt="Logo" />;
                <div class="card-body">
                  <h5 class="card-title">Round Blade</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <CartProvider>
                    <div>
                      <Product />
                    </div>
                  </CartProvider>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4">
            <div class="card border-secondary" id="product">
                <img class="card-img-top" src={pic2} alt="Logo" />;
                <div class="card-body">
                  <h5 class="card-title">Round Blade</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <CartProvider>
                    <div>
                    
                      <Product />
                    </div>
                  </CartProvider>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4">
            <div class="card border-secondary" id="product">
                <img class="card-img-top" src={pic3} alt="Logo" />;
                <div class="card-body">
                  <h5 class="card-title">Round Blade</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <CartProvider>
                    <div>
                      <Product />
                    </div>
                  </CartProvider>
                 
                </div>
              </div>
            </div>
          </div>

          <div class="row m-3">
            <div class="col-lg-4">
              <div class="card border-secondary" id="product">
                <img class="card-img-top" src={pic4} alt="Logo" />;
                <div class="card-body">
                  <h5 class="card-title">Round Blade</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <CartProvider>
                    <div>
                      <Product />
                    </div>
                  </CartProvider>
                 
                </div>
              </div>
            </div>
            <div class="col-lg-4">
            <div class="card border-secondary" id="product">
                <img class="card-img-top" src={pic5} alt="Logo" />;
                <div class="card-body">
                  <h5 class="card-title">Round Blade</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <CartProvider>
                    <div>
                      <Product />
                    </div>
                  </CartProvider>
                 
                </div>
              </div>
            </div>
           
          </div>


        </div>
      </section>
    </>
  );
}

export default App;
