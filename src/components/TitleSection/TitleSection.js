import React from 'react'
import Card from '../Card/Card'
import AsideCard from '../AsideCard/AsideCard'
import classes from './TitleSection.module.css'

const TitleSection = () => {
  return (
    <div className={classes.main}>
        <Card />
        <div className={classes.aside}>
            
        <AsideCard />
        </div>
    </div>
  )
}

export default TitleSection