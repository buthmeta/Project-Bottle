import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Heading/Header";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Product/Product";
import Service from "./Components/Service/Service";
import Testimonial from "./Components/Testimonail/Testimonial";
import Testing from "./Components/Testing/Testing";

const App = () => {
  return (
    <section>
      <Header />
      <Hero />
      <About />
      <Product />
      <Service />
      <Testimonial />
      <Testing />
      <Contact />
      <Footer />
    </section>
  );
};

export default App;
