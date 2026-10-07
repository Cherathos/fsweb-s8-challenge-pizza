import { useState } from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Success from "./pages/Success";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [selectedPizza, setSelectedPizza] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setSelectedPizza={setSelectedPizza} />}
        />
        <Route
          path="/order"
          element={<Order selectedPizza={selectedPizza} />}
        />
        <Route 
        path="/success" 
        element={<Success selectedPizza={selectedPizza} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;