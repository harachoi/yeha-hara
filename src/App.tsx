import { useScrollReveal } from './hooks/useScrollReveal'
import { Hero } from './components/Hero'
import { BibleVerse } from './components/BibleVerse'
import { Invitation } from './components/Invitation'
import { Calendar } from './components/Calendar'
import { Gallery } from './components/Gallery'
import { Venue } from './components/Venue'
import { Account } from './components/Account'
import { Share } from './components/Share'
import { BgmPlayer } from './components/BgmPlayer'

function App() {
  useScrollReveal()

  return (
    <div className="app">
      <BgmPlayer />
      <Hero />
      <Calendar />
      <Invitation />
      <BibleVerse />
      <Gallery />
      <Venue />
      <Account />
      <Share />
    </div>
  )
}

export default App
