import React from 'react';

function CategoryButton({ category, onClick, isActive }) {
    return (
        <button
            onClick={() => onClick(category)}
            className={`category-button ${isActive ? "active" : ""}`}
        >
            {category}
        </button>
    );
}

export default CategoryButton;
