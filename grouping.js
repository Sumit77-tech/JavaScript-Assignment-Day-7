function countAndSortCategories(categories) {
    let categoryCounts = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});
    let sortedCategories = Object.entries(categoryCounts)
    .sort((a,b) => b[1] - a[1])
    .map(entry => entry[0]);
    return sortedCategories;
}
const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
console.log(countAndSortCategories(categories));