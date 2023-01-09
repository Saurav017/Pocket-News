import React from 'react'
import useFetch from '../../hooks/useFetch';
import TitleHeader from '../TitleHeader/TitleHeader';
import ArticleCard from './ArticleCard';
import classes from './ArticleCard.module.css'

const ArticleSection = () => {

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
    <div className={classes.container}>
    <TitleHeader title="Latest News" />
    <div className={classes.sub_container}>
        {data.map((data, index) => {
            if(index < 6)   {
                return (
                    <ArticleCard urlToImage={data.urlToImage} title={data.title} publishedAt={convertDate(data.publishedAt)} description={truncate(data.description,150)} link={data.url} key={index}  />
                )
            }
        })}
    </div>
    </div>
  )
}

export default ArticleSection