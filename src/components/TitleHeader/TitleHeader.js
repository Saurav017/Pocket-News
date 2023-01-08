import React from 'react'
import classes from './TitleHeader.module.css'
const TitleHeader = (props) => {
  return (
    <div className={classes.main}>
        <hr className={classes.line}></hr>
        <h1 className={classes.title}>{props.title}</h1>
    </div>
  )
}

export default TitleHeader