import React from 'react'
import useFetch from '../../hooks/useFetch';
import TitleHeader from '../TitleHeader/TitleHeader';
import ArticleCard from './ArticleCard';
import classes from './ArticleCard.module.css'
const ArticleSection = () => {

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
                    <ArticleCard urlToImage={data.urlToImage} title={data.title} publishedAt={data.publishedAt} description={data.description} key={index}  />
                )
            }
        })}
    </div>
    </div>
  )
}

export default ArticleSection