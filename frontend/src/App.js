import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trangchu from "./pages/Trangchu/Trangchu";
import Congdong from "./pages/Congdong/Congdong";
import Thamkhao from "./pages/Thamkhao/Thamkhao";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Category from "./pages/Category/Category";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employee from "./pages/Employee/Employee";
import Admin from "./pages/Admin/Admin";
import HomeDashboard from "./pages/HomeDashboard/HomeDashboard";
import Statistical from "./pages/Statistical/Statistical";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trangchu />} />
        <Route path="/congdong" element={<Congdong />} />
        <Route path="/Thamkhao" element={<Thamkhao />} />
        <Route path="/DetailProduct/:id" element={<DetailProduct />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Home" element={<HomeDashboard />} />
          <Route path="Statistical" element={<Statistical />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Employee" element={<Employee />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
