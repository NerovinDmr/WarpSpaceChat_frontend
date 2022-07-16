import { Routes, Route } from "react-router-dom";
import { Auth, Home } from "./pages/";
import "./styels/global.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
