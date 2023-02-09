import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Center from "./components/center/Center";
import NavBar from "./components/navBar/NavBar";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/categories/Categories";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutUs/AboutUs";
import Careers from "./components/careers/Careers";
import NotFound from "./components/notFound/NotFound";
import ProductsData from "./components/products_List/Products_Data";
import ProductsDetails from "./components/products_List/ProductsDetails";
import ProductDetail from "./components/products_List/ProductDetail";
import PermanentJobs from "./components/careers/PermanentJobs";
import ContractJobs from "./components/careers/ContractJobs";
import ProtectedRoute from "./utils/ProtectedRoute";

export default function App() {
  return (
    <div>
      {/* <Header /> */}
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/aboutUs' element={<AboutUs />} />
        <Route exact path='/careers' element={<Careers />}>
          <Route index element={<PermanentJobs />} />
          <Route exact path='permanentJob' element={<PermanentJobs />} />
          <Route exact path='contractJob' element={<ContractJobs />} />
        </Route>
        <Route exact path='/products' element={
          <ProtectedRoute>
            <ProductsData />
          </ProtectedRoute>
        } />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path='/productDetails/:id' element={<ProductsDetails />} />
        <Route exact path='/productDetail' element={<ProductDetail />} />
      </Routes>
      {/* <Categories/> */}
      {/* <Carousel /> */}
      <Center />
      <Footer />
    </div>
  )

}