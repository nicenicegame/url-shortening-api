import "./App.css";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Advance from "./advance/Advance";
import Boost from "./boost/Boost";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Advance />
        <Boost />
        <Footer />
      </main>
    </div>
  );
}

export default App;
