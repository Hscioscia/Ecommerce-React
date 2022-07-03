import Item from '../Item/Item';
import '../ItemList/ItemList.css'


const ItemList = ({products}) => {
    
    return(
        <div className="cardsContainer">
	            {products.map((product) => (
				<Item key={product.id} data={product} id={product.id} img={product.img} img2={product.img2} stock={product.stock} category={product.category} price={product.price} description={product.description} name={product.name} />
			))}
        </div>
    );
}

export default ItemList;
