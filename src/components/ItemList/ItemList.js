import Item from '../Item/Item';
import '../ItemList/ItemList.css'
import { data } from '../../Data/data';

const ItemList = () => {
    
    return(
        <div className="cardsContainer">
	            {data.map((product) => (
				<Item key={product.id} data={product} />
			))}
        </div>
    );
}

export default ItemList;