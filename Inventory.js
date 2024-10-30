function manageInventory(products) {
    let lowStockProducts = products.filter(product => product.stock < 100);
    let reorderDetails = lowStockProducts.map(product => ({
        name: product.name,
        category: product.category,
        reorderCost: product.pricePerUnit * (100 - product.stock)
    }));
    let reorderCostByCategory = reorderDetails.reduce((acc, item) => {
        if(!acc[item.category]) {
            acc[item.category] = 0;
        }
        acc[item.category] += item.reorderCost;
        return acc;
    }, {});
    let sortedCategories = Object.entries(reorderCostByCategory)
    .sort((a,b) => b[1] - a[1])
    .reduce((acc, [category, totalCost]) => {
        acc[category] = totalCost;
        return acc;
    }, {});
    return sortedCategories;
}
const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000},
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500},
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20},
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40},
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150}
];
console.log(manageInventory(products));