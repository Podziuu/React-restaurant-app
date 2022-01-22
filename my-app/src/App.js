import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import MainPart from "./components/Layout/MainPart";
import PopularDishes from "./components/Layout/PopularDishes";
import Container from "./components/Layout/Container";
import MultipleService from "./components/Layout/MultipleService";

function App() {
  return (
    <div className="bg-[#F9F3EA]">
      <Navbar />
      <Container>
        <MainPart />
        <PopularDishes />
        <MultipleService/>
      </Container>
    </div>
  );
}

export default App;
