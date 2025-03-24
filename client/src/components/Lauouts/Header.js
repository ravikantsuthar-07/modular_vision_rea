import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-3">
              <Link className="text-white px-2" href="tel:+0123456789"
                ><i className="fa fa-phone-alt txt-primary me-2"></i>+91 94146 04749</Link>
              <Link className="text-white px-2" href="mailto:info@modularvisionera.com">
                <i className="fa fa-envelope-open txt-primary me-2"></i>
                info@example.com
                </Link>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <Link className="btn btn-sm-square btn-outline-body me-1" href="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="btn btn-sm-square btn-outline-body me-1" href="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link className="btn btn-sm-square btn-outline-body me-1" href="">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link className="btn btn-sm-square btn-outline-body me-0" href="">
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Header;