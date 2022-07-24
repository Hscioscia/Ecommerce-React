import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
import TextField from "@mui/material/TextField";
import { useContext, useState } from "react";
import { CircularProgress } from "@mui/material";
import { CartContext } from "../Context/CartContext";
import MessageSuccess from '../MessageSuccess/MessageSuccess'
import "../Checkout/Checkout.css";

const initialState = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
};

const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { cart, setCart, getTotalPrice } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const total = getTotalPrice();
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
      cart,
      total,
    });
    setPurchaseID(docRef.id);
    setValues(initialState);
    setCart([]);
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
          name="name"
          value={values.name}
          onChange={handleOnChange}
          required
          disabled={purchaseID !== ""}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
          name="lastname"
          value={values.lastname}
          onChange={handleOnChange}
          required
          disabled={purchaseID !== ""}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
          name="phone"
          value={values.phone}
          onChange={handleOnChange}
          required
          disabled={purchaseID !== ""}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          style={{ margin: 10, maxWidth: 400, minWidth: 280 }}
          name="email"
          value={values.email}
          onChange={handleOnChange}
          required
          disabled={purchaseID !== ""}
          fullWidth
        />
        {purchaseID !== "" ? (
          ""
        ) : (
          <button disabled={getTotalPrice() === 0} className="submitForm">
            Enviar
          </button>
        )}
      </form>
      {isLoading ? <CircularProgress className="circularProgress" /> : ""}
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default Checkout;
