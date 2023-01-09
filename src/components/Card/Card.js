import React from "react";
import { Link } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import classes from './Card.module.css';
const Card = () => {


  // truncating the string
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };


  // converting date into readable format
  const convertDate = (date) => {
    const newDate = new Date(date).getTime();
    const day = new Date(newDate).toLocaleString("en-US", { day: "numeric" });
    const month = new Date(newDate).toLocaleString("en-US", { month: "short" });
    const year = new Date(newDate).toLocaleString("en-US", { year: "numeric" });
    return `${month} ${day} ${year}`;
    
  }

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
                    <p className={classes.card_date}>{convertDate(data.publishedAt)}</p>
                    <h3 className={classes.card_title}><Link to={data.url}>{data.title}</Link></h3>
                    <p className={classes.card_des}>{truncate(data.description, 150)}</p>
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
