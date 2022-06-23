import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductId } from "../Data/data";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState ([]);
    const id = 4;

    useEffect(() => {
        getProductId(id)
            .then(res => {
                setProduct(res)
            }
            )
            .catch(err => console.log(err))
    }, [])

    return(
        <ItemDetail img={product.img} name={product.name} description={product.description} price={product.price} />
    )
}

export default ItemDetailContainer;