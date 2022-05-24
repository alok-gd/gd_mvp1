import "./App.css";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import { ReactComponent as Logo } from "./assets/logo.svg";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="logo-div">
        <Logo className="logo-main" />
      </div>
      <div className="image-main">
        <p className="a">Lorem Ipsum</p>
        <p className="b">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          varius adipiscing odio. Tortor, ullamcorper arcu sit facilisis at
          curabitur leo nisl, eget.
        </p>
      </div>
      <div className="mail">
        <p>YOU ARE IN FOR SOMETHING EXCITING</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
