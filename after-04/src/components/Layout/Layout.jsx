import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout--container">
      <div className="header__wrapper py-2 ">
        <Brand />
        <NavBar />
      </div>
      <main className="main--container">{children}</main>
      <Footer />
    </div>
  );
}
