import * as React from "react";
import { Link } from "react-router-dom";
import "../Item/Item.css";

export default function ActionAreaCard({ data }) {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={data.img} alt={data.name} className="img" />
      </div>
      <div className="contentBox">
        <h3> {data.name} </h3>
        <Link className="btn-see" to={`/item/${data.id}`}>
          {" "}
          Ver Mas{" "}
        </Link>
      </div>
    </div>
  );
}
