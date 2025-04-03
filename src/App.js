import React, { useState } from 'react';
import { uniqueCategories, productList } from './data';
import CategoryButton from './CategoryButton';
import ProductCard from './ProductCard';
import './styles.css';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? productList.filter(product => product.category === selectedCategory)
    : productList;

  // Calculate total units and total inventory cost dynamically
  const totalUnits = filteredProducts.reduce((sum, product) => sum + product.units, 0);
  const totalInventoryCost = filteredProducts.reduce((sum, product) => sum + (product.price * product.units), 0);

  return (
    <div className="app-container">
      <h1 className="title">[ SYSTEM: PRODUCT INVENTORY ]</h1>

      {/* Summary Info */}
      <div className="stats">
        <p>⟶ CATEGORIES: {uniqueCategories.length}</p>
        <p>⟶ PRODUCTS: {filteredProducts.length}</p>
        <p>⟶ TOTAL UNITS: {totalUnits}</p>
        <p>⟶ INVENTORY VALUE: ${totalInventoryCost.toFixed(2)}</p>
      </div>

      {/* Category Buttons */}
      <div className="category-container">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`category-button ${selectedCategory === null ? "active" : ""}`}
        >
          ALL CATEGORIES
        </button>
        {uniqueCategories.map(category => (
          <CategoryButton
            key={category}
            category={category}
            onClick={setSelectedCategory}
            isActive={selectedCategory === category}
          />
        ))}
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
