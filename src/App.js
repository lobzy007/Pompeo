import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Collection from "./Components/Collection";
import Banner from "./Components/Banner";
import News from "./Components/News";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Collection />
      <Banner />
      <News />
      <Footer />
    </>
  );
}

export default App;
