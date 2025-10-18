import Footerbreadcrumb from "../Footerbreadcrumb/Footerbreadcrumb";
import FooterInfo from "../FooterInfo/FooterInfo";
import FooterNav from "../FooterNav/FooterNav";
import "./footer.scss";
const Footer = () => {
  return (
    <footer className="position-relative" id="footer">
      <div className="container-fluid col-12 col-md-12 col-lg-11 col-xl-9 col-xxl-8">
        <FooterInfo />
        <FooterNav />
        <Footerbreadcrumb />
      </div>
    </footer>
  );
};

export default Footer;
