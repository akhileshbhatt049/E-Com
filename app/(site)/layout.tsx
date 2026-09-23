import Topbar from "../components/Topbar";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <div>
          {" "}
          <Topbar />{" "}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
