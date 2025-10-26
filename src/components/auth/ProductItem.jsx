import React from 'react';

const ProductItem = ({ product, onDelete }) => {
    return (
        <li>
            <h3>{product.name}</h3>
            <button onClick={() => onDelete(product.id)}>Eliminar</button>
        </li>
    );
};

export default ProductItem;