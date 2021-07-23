import Navbar from "../components/Common/Navbar/index";
import Footer from "../components/Student/Footer";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
