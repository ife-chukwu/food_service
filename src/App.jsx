import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { Navigation } from "./Components/Navigation";
import { Order } from "./Components/Pages/Order";
import { Company } from "./Components/Pages/Company";
import { FAQ } from "./Components/Pages/FAQ";
import { Contact } from "./Components/Pages/Contact";
import { Cart } from "./Components/Pages/Cart";
import { Pizza } from "./Components/Pages/Pizza";
import { Side } from "./Components/Pages/Side";
import { Drink } from "./Components/Pages/Drink";
import { OurFood } from "./OurFood";
import { OurDelivery } from "./Components/Pages/OurDelivery";
import { OurCompany } from "./Components/Pages/OurCompany";
import { FullMenu } from "./Components/Pages/FullMenu";
import { OrderDrink } from "./Components/Pages/OrderDrink";
import { OrderSides } from "./Components/Pages/OrderSides";
import { Burgers } from "./Components/Pages/Burgers";
import { ShowMenuDetail } from "./Components/Pages/ShowMenuDetail";
import { SearchArea } from "./Components/Pages/SearchArea";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Pizza />} />
          <Route path="/side" element={<Side />} />
          <Route path="/drink" element={<Drink />} />
        </Route>
        <Route path="/order" element={<Order />}>
          <Route path="/order" element={<FullMenu />} />
          <Route path="/order/order-drink" element={<OrderDrink />} />
          <Route path="/order/order-side" element={<OrderSides />} />
          <Route path="/order/burgers" element={<Burgers />} />
        </Route>
        <Route path="/company" element={<Company />} />
        <Route path="/faq" element={<FAQ />}>
          <Route path="/faq" element={<OurFood />} />
          <Route path="/faq/delivery" element={<OurDelivery />} />
          <Route path="/faq/company" element={<OurCompany />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:params" element={<ShowMenuDetail />} />
        <Route path="/order/order-side/:params" element={<ShowMenuDetail />} />
        <Route path="/order/burgers/:params" element={<ShowMenuDetail />} />
        <Route path="/search/:params" element={<ShowMenuDetail />} />
        <Route path="/:params" element={<ShowMenuDetail />} />
        <Route path="/search" element={<SearchArea />} />
        <Route path="*" element={<h1 className="pt-40">Page not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
