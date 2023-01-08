import React from 'react'
import ArticleSection from '../components/ArticleSection/ArticleSection'
import Navbar from '../components/Navbar/Navbar'
import TitleSection from '../components/TitleSection/TitleSection'

const Home = () => {
  return (
        <main>
            <Navbar />
            <TitleSection />
            <ArticleSection />
        </main>    
  )
}

export default Home