import Navbar from "../components/Common/Navbar/index";
const Layout = props => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default Layout;
