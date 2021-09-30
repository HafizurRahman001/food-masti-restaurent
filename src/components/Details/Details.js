import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const Details = () => {
    const { id } = useParams();
    const [mealDetails, setMealDetails] = useState([]);
    const [singleMeal, setSingleMeal] = useState({});
    const history = useHistory()
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals));
    }, []);

    useEffect(() => {
        const foundMeal = mealDetails.find(meal => meal.idMeal === id)
        console.log(foundMeal);
        setSingleMeal(foundMeal);

    }, [mealDetails]);

    const goBack = () => {
        history.push('/restaurent')
    }

    return (
        <Container className='mt-5'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Area Name</th>
                        <th>Related Tags</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleMeal?.idMeal}</td>
                        <td>{singleMeal?.strMeal}</td>
                        <td>{singleMeal?.strCategory}</td>
                        <td>{singleMeal?.strTags ? singleMeal.strTags : 'No related tags'}</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={goBack} className="btn btn-primary">Go Back</Button>
        </Container>
    );
};

export default Details;