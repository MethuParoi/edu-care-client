import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/logo.png";

function Footer() {
  return (
    <div className="bg-secondary text-neutral p-10 flex flex-col items-center">
      <footer className="footer flex lg:flex-row flex-col items-start justify-center gap-x-72">
        <aside className="flex sm:flex-row flex-col sm:gap-x-4 sm:items-center">
          <img className="w-32 h-32" src={logo} alt="" />
          <div>
            <h2 className="text-3xl font-semibold">EduCare</h2>
            <p>A scholarship management platform</p>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">Contact Information</h6>
          <a className="link link-hover">joyeta@gmail.com</a>
          <a className="link link-hover">+880 1744444444</a>
          <a className="link link-hover">Dhaka, Bangladesh</a>
        </nav>
        <nav>
          <h6 className="footer-title">Get in touch</h6>
          <a href="#" target="_blank" className="link link-hover">
            <div className="flex gap-x-4 font-medium">
              <FaLinkedin />
              Linked In
            </div>
          </a>
          <a href="#" target="_blank" className="link link-hover">
            <div className="flex gap-x-4 font-medium">
              <FaSquareXTwitter />
              Twitter
            </div>
          </a>
          <a href="#" target="_blank" className="link link-hover">
            <div className="flex gap-x-4 font-medium">
              <FaFacebook />
              Facebook
            </div>
          </a>
        </nav>
      </footer>
      <div className="mt-4 ">
        <hr className="w-[90vw] h-2" />
        <p className="text-center text-neutral">
          &copy; 2025 Educare. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
