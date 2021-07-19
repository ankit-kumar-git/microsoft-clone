import "./Footer.css";
import { IoMdGlobe } from "react-icons/io";
import FooterContainer from "./FooterContainer";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <FooterContainer
          head={"What's new"}
          props={[
            "Microsoft 365",
            "Surface Pro X",
            "Surface Pro 7",
            "Surface Laptop 3",
            "Windows 10 apps",
          ]}
        />
        <FooterContainer
          head={"Microsoft Store"}
          props={[
            "Account Profile",
            "Download Center",
            "Microsoft Store Support",
            "Returns",
            "Order Tracking",
          ]}
        />
        <FooterContainer
          head={"Education"}
          props={[
            "Microsoft in education",
            "Office for students",
            "Office 365 for schools",
            "Microsoft Azure in education",
          ]}
        />
        <FooterContainer
          head={"Enterprise"}
          props={[
            "Azure",
            "AppSource",
            "Automotive",
            "Government",
            "Healthcare",
            "Manufacturing",
            "Financial Services",
            "Retail",
          ]}
        />
        <FooterContainer
          head={"Developers"}
          props={[
            "Microsoft Visual Studio",
            "Developer Center",
            "Channel 9",
            "Microsoft 365 Dev Center",
            "Microsoft 365 Developer Program",
          ]}
        />
        <FooterContainer
          head={"Company"}
          props={[
            "Careers",
            "About Microsoft",
            "Company news",
            "Investors",
            "Security",
          ]}
        />
      </div>
      <div className="footer-bottom">
        <div className="left">
          <IoMdGlobe color="gray" size="1.5rem" />
          <p>English (India)</p>
        </div>
        <div className="right">
          <ul>
            <li>Contact Microsoft</li>
            <li>Privacy</li>
            <li>Term of use</li>
            <li>Trademarks</li>
            <li>About our ads</li>
          </ul>
          <p>&copy; Microsoft 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
