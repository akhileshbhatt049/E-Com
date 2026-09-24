import Topbar from "../components/Topbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div>
          {" "}
          <Topbar />{" "}
        </div>

        <div>{children}</div>

        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
