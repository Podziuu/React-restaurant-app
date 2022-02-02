import Navbar from "./components/Layout/Navbar";
import MainPart from "./components/Layout/MainPart";
import PopularDishes from "./components/Layout/PopularDishes";
import Container from "./components/Layout/Container";
import MultipleService from "./components/Layout/MultipleService";
import Menu from "./components/Layout/Menu";
import Reservation from "./components/Layout/Reservation";
import Opinions from "./components/Layout/Opinions";
import Chefs from "./components/Layout/Chefs";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";

import { useSelector } from "react-redux";

function App() {
  const isCart = useSelector((state) => state.ui.showCart);

  return (
    <div className="bg-[#F9F3EA]">
      <Navbar />
      {isCart && <Cart />}
      <Container>
        <MainPart />
        <PopularDishes />
        <MultipleService />
        <Menu />
        <Reservation />
        <Opinions />
        <Chefs />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
