import { useEffect,useState } from "react"
import { getFood } from "../api/getfood"

export function Food() {

    const [foods, setFood] = useState([])

    useEffect(() => {
        async function loadfood() {
             const res = await getFood()
        setFood(res.data)
        }
        loadfood();
    }, [])

    return (
        <div>
            {foods.map (food => (
                <div>
                    <h1>{food.name}</h1>
                    <h1>{food.description}</h1>
                </div>
            ))}
        </div>
    )
}