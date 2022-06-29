import {useState, useEffect} from "react";
import ItemList from "../ItemList/ItemList";
import {data} from '../../Data/data'
import { useParams } from "react-router-dom";


const ItemListContainer = () =>{
    const {categoryId} = useParams();
    const [products, setProducts] = useState ([]);


    useEffect (() => {
        categoryId ? setProducts(data.filter((i) => i.category === categoryId)) : setProducts(data);
    }, [categoryId]);

    console.log("categoryID", categoryId)
                
    return(
            <ItemList products= {products} {...products} />
    )
}

export default ItemListContainer;

/* categoryId ? setProducts(data.filter( i => i.category === categoryId)) : setProducts(data); }, [categoryId]); */