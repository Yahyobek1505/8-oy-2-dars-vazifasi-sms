import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tracking from "./pages/Tracking";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tracking />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}
export default App;
