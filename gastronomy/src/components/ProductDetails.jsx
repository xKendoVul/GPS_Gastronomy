import { useEffect,useState } from "react"
import axios from "axios"

export function ProductDetails ({ product }) {
    const [foods, setFood] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/gps/food/${id}`).then(response => {
            setFood(response.data)
        })
        .catch(error => {
            console.error('Error fetching food:', error)
        })
    }, [])
    
  return (
    <div>
        {foods.map((food) => (
            <Row>
            <Col md={6}>
              <Image src={food.image} alt={food.name} fluid />
            </Col>
            <Col md={6}>
              <h2>{food.name}</h2>
              <h3 className="text-dark">C$ {food.price}</h3>
              <p>{food.description}</p>
              <div className="d-flex gap-2 mb-3">
              <Button variant="warning" size="sm" className="mb-3 hover-float">
              <Telephone className="me-1" /> Llamar 
            </Button>
            <Button variant="warning" size="sm" className="mb-3 hover-float">
              <Send className="me-1" /> Cómo Llegar
            </Button>
            <Button variant="warning" size="sm" className="mb-3 hover-float">
              <Floppy className="me-1" /> Reservar
            </Button>
            <Button variant="warning" size="sm" className="mb-3 hover-float">
              <Share className="me-1" /> Compartir
            </Button>
              </div>
            </Col>
          </Row>
            
          
        ))}
    </div>
  );
}
