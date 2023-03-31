import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Navigation } from "./Components/Navigation";
import { Order } from "./Components/Pages/Order";
import { Company } from "./Components/Pages/Company";
import { FAQ } from "./Components/Pages/FAQ";
import { Contact } from "./Components/Pages/Contact";
import { Cart } from "./Components/Pages/Cart";
import { Pizza } from "./Components/Pages/Pizza";
import { Side } from "./Components/Pages/Side";
import { Drink } from "./Components/Pages/Drink";

function App() {
  const client = new QueryClient();
  return (
    <div>
      <Navigation />
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Pizza />} />
            <Route path="/side" element={<Side/>} />
            <Route path="/drink" element={<Drink />} />
          </Route>
          <Route path="/order" element={<Order />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
