import React, { useEffect, useState } from 'react';
import './Restaurent.css'
import MealDb from '../MealDb/MealDb';
import { Container } from 'react-bootstrap';

const Restaurent = () => {
    const [meals, setMils] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMils(data.meals));
    }, [searchText]);

    const handleSearch = (event) => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <>
            <input className="mt-2 w-25" onChange={handleSearch} type="text" placeholder="search foods here" />
            <Container className="meal-container">
                {
                    meals.map(meal => <MealDb meal={meal} key={meal.idMeal}></MealDb>)
                }

            </Container>
        </>
    );
};

export default Restaurent;