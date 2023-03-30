import React from "react";
import "./Meal.css";

const Meal = (props) => {
  console.log(props.meal);
  const { strMealThumb, strMeal, strCategory, strArea, strInstructions } =
    props.meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <div className="meal-info">
        <h6 className="meal-name">{strMeal}</h6>
        <p>Category: {strCategory}</p>
        <p>Origin: {strArea}</p>
        <p>Process: {strInstructions.substring(0, 60)}</p>
      </div>
    </div>
  );
};

export default Meal;
