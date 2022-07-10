import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { CircularProgress } from "@mui/material";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);  

  const getData = async () => {
    const q = query(collection(db, "sneakers-shop"));
    const querySnapshot = await getDocs(q);
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setProducts(docs);
  };

  useEffect(() => {  
    setIsLoading(true) 
    getData();
    setIsLoading(false);
  }, []);

  return (
    <div>
     {isLoading ? (
        <div className="loading">
          <CircularProgress className="loading" color="inherit" />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
