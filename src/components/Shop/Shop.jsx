import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Shop.css";

const Shop = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className="shop-container">
      <div className="meals-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
      <div className="cart-container">
        <h4>Cart</h4>
      </div>
    </div>
  );
};

export default Shop;
