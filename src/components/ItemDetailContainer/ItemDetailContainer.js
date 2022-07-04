import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductId } from "../../Data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        getProductId(id)
            .then(res => {
                setProduct(res)
            }
            )
            .catch(err => console.log(err))
    }, [id]);


    return(
        <div key={product.id}>
        <ItemDetail id = {id} product = {product} {...product}/>
        </div>
    )
};

export default ItemDetailContainer;
