import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Selling from "./pages/selling";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Home/>}/>
        <Route path="/onsale" element={<Selling/>}/>
      </Routes>
    </div>
  )
}