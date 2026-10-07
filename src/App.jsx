import { useState } from "react";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  const [page, setPage] = useState("home");
  const [selectedPizza, setSelectedPizza] = useState("");

  return (
    <>
      {page === "home" && (
        <Home
          setPage={setPage}
          setSelectedPizza={setSelectedPizza}
        />
      )}

      {page === "order" && (
        <Order
          setPage={setPage}
          selectedPizza={selectedPizza}
        />
      )}
    </>
  );
}

export default App;