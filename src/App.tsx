import { Hero } from './components/Hero'
import { Invitation } from './components/Invitation'
import { Calendar } from './components/Calendar'
import { Gallery } from './components/Gallery'
import { Venue } from './components/Venue'
import { Account } from './components/Account'
import { Contact } from './components/Contact'
import { Share } from './components/Share'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Invitation />
      <Calendar />
      <Gallery />
      <Venue />
      <Account />
      <Contact />
      <Share />
      <Footer />
    </div>
  )
}

export default App
