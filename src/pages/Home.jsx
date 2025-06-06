import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { AboutSection } from '../components/AboutSection'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/** Theme toggle */}
        <ThemeToggle />

        {/** Background Effects */}
        <StarBackground />

        {/** Nav Bar */}
        <Navbar />

        {/** Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <Footer />
        </main>

        {/** Footer */}
    </div>
  )
}

export default Home