import logo from "./logo.svg";
import "./App.css";
import Info from "./info";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState(Info);
  const { highlight, menu, news } = info;
  return (
    <div className="font-mono text-gray-900">
      <header className="font-bold max-w-sm flex sm:flex-col p-3 bg-slate-200 rounded-md m-3 items-center justify-start">
        <img src={logo} className="h-16" alt="logo" />
        <div>
          <p className="">All is well</p>
          <p className="text-xs text-gray-500 pt-1">
            Eventually I know God is in control of my life.{" "}
          </p>
        </div>
      </header>

      <div></div>
      <div></div>
      <div className="highight">
        {highlight.data.map((highlight) => {
          return (
            <div className="container-sm p-1 mt-2 font-sans bg-slate-300 text-sm flex items-center justify-start">
              <img src={highlight.img} />
              <div>
                <h2>{highlight.id}</h2>
                <h2>{highlight.description}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
