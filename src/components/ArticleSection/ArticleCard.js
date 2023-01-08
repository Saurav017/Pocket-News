import React from "react";
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
      <h3 className={classes.card_title}>{props.title}</h3>
      <p className={classes.card_des}>{props.description}</p>
    </div>
  );
};

export default ArticleCard;
