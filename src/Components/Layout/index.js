import Side from "../Side/index.js";
import Header from "../Header/index.js";

export function Layout({ children }) {
  return (
    <div className={"w-full h-full"}>
      <div>
        <Side />
      </div>
      <div>
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
