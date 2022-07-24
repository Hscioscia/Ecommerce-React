import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { db } from "../../Firebase/FirebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const docRef = doc(db, "sneakers-shop", id);
    getDoc(docRef)
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <CircularProgress className="loading" color="inherit" />
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
