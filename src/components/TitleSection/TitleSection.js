import React from "react";
import Card from "../Card/Card";
import AsideCard from "../AsideCard/AsideCard";
import classes from "./TitleSection.module.css";
import TitleHeader from "../TitleHeader/TitleHeader";

const TitleSection = () => {
  return (
    <div className={classes.container}>
        <TitleHeader title="Top Headlines" />
      <div className={classes.main}>
        <Card />
        <div className={classes.aside}>
          <AsideCard />
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
