const Header = () => {
    return (
        <div className="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-3">
              <a className="text-white px-2" href="tel:+0123456789"
                ><i className="fa fa-phone-alt txt-primary me-2"></i>+91 94146 04749</a>
              <a className="text-white px-2" href="mailto:info@example.com">
                <i className="fa fa-envelope-open txt-primary me-2"></i>
                info@example.com
                </a>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-sm-square btn-outline-body me-1" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-sm-square btn-outline-body me-1" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-sm-square btn-outline-body me-1" href="">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="btn btn-sm-square btn-outline-body me-0" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Header;