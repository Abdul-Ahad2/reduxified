import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import Tournaments from "./pages/Tournaments";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/tournaments" element={<Tournaments />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
