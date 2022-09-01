import './App.css'
import Header from "./components/Header"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App container">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
