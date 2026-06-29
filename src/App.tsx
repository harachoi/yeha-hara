import { useScrollReveal } from './hooks/useScrollReveal'
import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { Calendar } from './components/Calendar'
import { Gallery } from './components/Gallery'
import { Venue } from './components/Venue'
import { Account } from './components/Account'
import { Share } from './components/Share'
import { Footer } from './components/Footer'

function App() {
  useScrollReveal()

  return (
    <div className="app">
      <Hero />
      <Invitation />
      <Calendar />
      <Gallery />
      <Venue />
      <Account />
      <Share />
      <Footer />
    </div>
  )
}

export default App
