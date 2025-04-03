import React from 'react';

function ProductCard({ product }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Rating:</strong> {product.rating} </p>
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Units:</strong> {product.units}</p>
        </div>
    );
}

export default ProductCard;
