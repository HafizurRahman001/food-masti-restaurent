import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const MealDb = (props) => {
    const { idMeal, strMeal, strArea, strMealThumb, strInstructions } = props.meal;
    const history = useHistory();

    const handleButton = () => {
        history.push(`restaurent/${idMeal}`)
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>
                    {strInstructions.slice(0, 60)}
                </Card.Text>
                {/* <Link to={`/restaurent/${idMeal}`}>Details</Link>{'  '} */}
                <Button className="btn btn-primary" onClick={handleButton} variant="primary">Get Details</Button>
            </Card.Body>
        </Card>
    );
};

export default MealDb;