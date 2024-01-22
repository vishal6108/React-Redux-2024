import Navbar from "./Navbar.js";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
