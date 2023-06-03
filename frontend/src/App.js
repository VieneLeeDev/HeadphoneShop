import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trangchu from "./pages/Trangchu/Trangchu";
import Congdong from "./pages/Congdong/Congdong";
import Thamkhao from "./pages/Thamkhao/Thamkhao";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Category from "./pages/Category/Category";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/congdong" element={<Congdong />} />
        <Route path="/Thamkhao" element={<Thamkhao />} />
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path="/Category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
