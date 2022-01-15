import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import MainPart from "./components/Layout/MainPart";
import PopularDishes from "./components/Layout/PopularDishes";
import Container from "./components/Layout/Container";

function App() {
  return (
    <div className="bg-[#F9F3EA]">
      <Navbar />
      <Container>
        <MainPart />
        <PopularDishes />
      </Container>
    </div>
  );
}

export default App;
