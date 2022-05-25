import "./App.scss";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import { ReactComponent as Logo } from "./assets/logo.svg";
import BGImage from "./assets/background.png";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="logo-div">
        <Logo className="logo-main" />
      </div>
      <div className="main-image-holder">
        <img src={BGImage} alt="" className="main-image" />
        <div className="large-text">Lorem Ipsum elit dolor sit amet</div>
        <div className="small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          varius adipiscing odio. Tortor, ullamcorper arcu sit facilisis at
          curabitur leo nisl, eget.
        </div>
      </div>
      <div className="mail">
        <p>YOU ARE IN FOR SOMETHING EXCITING</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
