import { useState } from 'react'
import { MobileLayout } from './components/AppExample'
import { FullScreenModal } from './components/FullScreenModal'
import './App.css'
import { AuthorSection } from './components/homepage/AuthorSection'
import { DocumentationSection } from './components/homepage/DocumentationSection'
import ExampleSection from './components/homepage/ExampleSection'
import { Footer } from './components/homepage/Footer'
import { Header } from './components/homepage/Header'
import { HeroSection } from './components/homepage/HeroSection'
import { HighlightsSection } from './components/homepage/HighlightsSection'

function App() {
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />

      <main>
        <HeroSection />
        <HighlightsSection />
        <ExampleSection
          onShowFullScreenExample={() => setIsFullScreenOpen(true)}
        />
        <DocumentationSection />
      </main>

      <AuthorSection />
      <Footer />

      <FullScreenModal
        isOpen={isFullScreenOpen}
        onClose={() => setIsFullScreenOpen(false)}
      >
        <MobileLayout />
      </FullScreenModal>
    </div>
  )
}

export default App
