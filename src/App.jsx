import { Routes, Route } from "react-router";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Us</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Route>
    </Routes>
  );
};

export default App;