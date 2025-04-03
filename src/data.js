import data from './data.json';

// Create count object using reduce
export const categoriesCountObj = data.reduce((acc, obj) => {
    acc[obj.category] = (acc[obj.category] || 0) + 1;
    return acc;
}, {});

// Transform to array of objects with name and count
export const categoriesList = Object.keys(categoriesCountObj).map(category => ({
    name: category,
    count: categoriesCountObj[category]
}));

export const priceList = data.map(product =>
    `${product.name}: ${product.price}`
);

export const expensiveProducts = data.filter(product =>
    parseFloat(product.price.replace('$', '')) > 50
);

export const totalInventoryValue = data.reduce((total, product) => {
    return total + parseFloat(product.price.replace('$', '')) * product.units;
}, 0);

export const totalPricePerCategory = data.reduce((acc, product) => {
    const price = parseFloat(product.price.replace('$', ''));
    acc[product.category] = (acc[product.category] || 0) + price;
    return acc;
}, {});

export const uniqueCategories = [...new Set(data.map(product => product.category))];

export const productList = data.map(product => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: parseFloat(product.price.replace('$', '')).toFixed(2),
    rating: product.rating,
    description: product.description,
    units: product.units
}));

console.log("Price List:", priceList);
console.log("Expensive Products:", expensiveProducts);
console.log("Total Inventory Value: $", totalInventoryValue.toFixed(2));
console.log("Total Price Per Category:", totalPricePerCategory);

export default data;
