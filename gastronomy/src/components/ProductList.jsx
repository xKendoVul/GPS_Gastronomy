import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [foods, setFood] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/gps/food/').then(response => {
            setFood(response.data)
        })
        .catch(error => {
            console.error('Error fetching food:', error)
        })
    }, [])

    return (
        <Row>
            <Link to={`/product/${product.id}`} className="text-decoration-none">
                <Card className="hover-float">
                <Card.Img variant="top" src={product.image} alt={product.name} />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                C$ {product.price}.00
                            </Card.Text>
                        <StarRating rating={product.rating} />
                        <Button variant="warning" className="mt-2 w-100">Ver Oferta</Button>
                    </Card.Body>
                </Card>
            </Link>

        </Row>
    )
}