import { useCallback } from 'react';

const Item = ({ item, onItemClick }) => {
    const handleClick = useCallback(() => {
        onItemClick && onItemClick(item);
    }, [item, onItemClick]);

    return (
        <li>
            <p>{item.name}</p>
            <button type="button" onClick={handleClick}>Ver Detalhes</button>
        </li>
    );
}

export default Item;