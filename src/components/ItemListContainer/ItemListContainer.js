import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import {data} from '../Data/data'

const ItemListContainer = () =>{
    const [products, setProducts] = useState ([]);

    useEffect (() => {
        setProducts(data)
    }, []);


    return(
        <ItemList products= {products} />
    )
}

export default ItemListContainer;