import React from "react";
import useFetch from '../../hooks/useFetch';
import classes from './Card.module.css';
const Card = () => {

  const { data, loading, error} = useFetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b1e5a61d20f4424799a9f39cab3e0772");

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data);
    if (error) {
        return <p>Something went Wrong</p>;
    }
  return (
        data.map((data, index) => {

            if(index === 0)    {
                return (
                    <div className={classes.main}>
                    <img src={data.urlToImage} alt={data.title} className={classes.card_image} />
                    <p className={classes.card_date}>{data.publishedAt}</p>
                    <h3 className={classes.card_title}>{data.title}</h3>
                    <p className={classes.card_des}>{data.description}</p>
                    </div>
                )
            }
            
            return (
                <></>
            )
    }
    
  ));
};

export default Card;
