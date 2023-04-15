import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
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

function App() {
  // const client = new QueryClient();
  return (
    <div>
      <Navigation />
      {/* <QueryClientProvider client={client}> */}
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
        <Route path="/:params" element={<ShowMenuDetail />} />
        <Route path="*" element={<h1 className="pt-40">Page not found!</h1>} />
      </Routes>
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
