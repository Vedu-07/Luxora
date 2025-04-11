import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
function App() {
  return (
    <main className='overflow-x-hidden antialiased text-neutral-800 '>
        <Navbar/>
        <Hero/>
        <Services/>
        <Portfolio/>
    </main>
  )
}

export default App
