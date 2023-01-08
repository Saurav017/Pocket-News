import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import classes from "./AsideCard.module.css";

const AsideCard = () => {
  const { data, loading, error } = useFetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b1e5a61d20f4424799a9f39cab3e0772"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data);
  if (error) {
    return <p>Something went Wrong</p>;
  }
  return data.map((data, index) => {
    if (index !== 0 && index < 4) {
      return (
        <>
        <hr className={classes.line}></hr>
<div className={classes.main} key={index}>
        <div className={classes.img_div}>
          <img
            src={data.urlToImage}
            alt={data.title}
            className={classes.card_image}
          />
        </div>
        <div className="content_div">
        <p className={classes.card_date}>{data.publishedAt}</p>
          <Link to="/" className={classes.card_title}>
            {data.title}
          </Link>
        </div>
          
        </div>
        </>
        
      );
    }

    return <></>;
  });
};

export default AsideCard;
