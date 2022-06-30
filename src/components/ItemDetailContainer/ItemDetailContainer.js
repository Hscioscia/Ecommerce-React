import {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductId, data } from "../../Data/data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        getProductId(id)
            .then(res => {
                setProduct(res)
                (data.find(prod => prod.id === Number(id)));
            }
            )
            .catch(err => console.log(err))
    }, [id]);

    console.log("ID:", id);

    return(
        <div key={product.id}>
        <ItemDetail id = {id} product = {product} {...product}/>
        </div>
    )
};

export default ItemDetailContainer;
