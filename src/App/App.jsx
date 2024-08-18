import "./App.css"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Customers from "../Customers/Customers"
import Benefits from "../Benefits/Benefits"
import Services from "../Services/Services"
import Help from "../Help/Help"
import Products from "../Products/Products"
import AboutTeam from "../About Team/About Team"
import ContactUs from "../Contact Us/Contact Us"
import Footer from "../Footer/Footer"

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Customers />
      <Benefits />
      <Services />
      <Help />
      <Products />
      <AboutTeam />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
