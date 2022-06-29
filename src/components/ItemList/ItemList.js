import Item from '../Item/Item';
import '../ItemList/ItemList.css'


const ItemList = ({products}) => {
    
    return(
        <div className="cardsContainer">
	            {products.map((product) => (
				<Item key={product.id} data={product} id={product.id} />
			))}
        </div>
    );
}

export default ItemList;