import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About/About'
import './App.css'
import Home from './pages/Home/Home'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import LoadingOverlay from './components/LoadingOverlay'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop'
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({startEvent: 'DOMContentLoaded'});
    AOS.refreshHard();
  }, [])
  return (
    <Router>
      <div className="App">
      <SpeedInsights/>
        <LoadingOverlay />
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
