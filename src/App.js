import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SocialLinks } from "./components/SocialLinks";
import { Above } from "./components/Above";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Above />
      <Portfolio />
      <SocialLinks />
    </div>
  );
}

export default App;
