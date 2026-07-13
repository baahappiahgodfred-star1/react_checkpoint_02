import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PlayerList from "./components/PlayerList";

function App() {
  return (
    <>
      <Header firstname="Sylvestre"/>
      <div className="container">
        <PlayerList/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
