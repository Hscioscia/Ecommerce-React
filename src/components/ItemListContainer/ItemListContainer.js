import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { CircularProgress } from "@mui/material";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getData = async () => {
      const q = categoryId
        ? query(
            collection(db, "sneakers-shop"),
            where("category", "==", categoryId)
          )
        : query(collection(db, "sneakers-shop"));
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
      setIsLoading(false);
    };

    getData();
    setIsLoading(true);
  }, [categoryId]);

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
