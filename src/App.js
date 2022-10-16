import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { SocialLinks } from "./components/SocialLinks";
import { Above } from "./components/Above";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
      <Above />
    </div>
  );
}

export default App;
