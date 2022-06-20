import Item from '../Item/Item';
import '../ItemList/ItemList.css'
import { data } from '../ItemListContainer/data';

const ItemList = () => {
    
    return(
        <div className="cardsContainer">
	            {data.map((product) => (
				<Item key={product.img} data={product} />
			))}
        </div>
    );
}

export default ItemList;
