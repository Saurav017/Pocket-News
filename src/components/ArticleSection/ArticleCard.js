import React from "react";
import { Link } from "react-router-dom";
import classes from "./ArticleCard.module.css";
const ArticleCard = (props) => {
  return (
    <div className={classes.main}>
      <img
        src={props.urlToImage}
        alt={props.title}
        className={classes.card_image}
      />
      <p className={classes.card_date}>{props.publishedAt}</p>
      <h3 className={classes.card_title}><Link to={props.link}>{props.title}</Link></h3>
      <p className={classes.card_des}>{props.description}</p>
    </div>
  );
};

export default ArticleCard;
