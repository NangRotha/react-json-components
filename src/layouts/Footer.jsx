

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1: Shop */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none hover-link">All Products</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Phones</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Accessories</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Deals</a></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-white text-decoration-none hover-link">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Careers</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none hover-link">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/contact" className="text-white text-decoration-none hover-link">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">FAQs</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Shipping</a></li>
              <li><a href="#" className="text-white text-decoration-none hover-link">Returns</a></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Follow Us</h5>
            <div className="mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover-link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2 hover-link">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <p className="mb-0"><strong>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;