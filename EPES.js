function evaluateEmployees(employees) {
    let filteredEmployees = employees.filter(employee => employee.tasksCompleted > 5);
    let performanceArray = filteredEmployees.map(employee => {
        let performanceLevel;
        if(employee.rating > 4.5) {
            performanceLevel = "Excellent";
        } else {
            performanceLevel = "Needs Improvement";
        }
        return { name: employee.name, performanceLevel};
    });
    let sortedPerformanceArray = performanceArray.sort((a,b) => {
        const performanceOrder = 
        { "Excellent": 1, "Good": 2, "Needs Improvement": 3};
        return performanceOrder[a.performanceLevel] - performanceOrder[b.performanceLevel];
    });
    return sortedPerformanceArray;
}
const employees = [
    { name: "Alice", tasksCompleted: 10, rating: 4.7},
    { name: "Bob", tasksCompleted: 4, rating: 4.2},
    { name: "Charlie", tasksCompleted: 7, rating: 3.5},
    { name: "David", tasksCompleted: 6, rating: 2.9},
    { name: "Eve", tasksCompleted: 8, rating: 4.9}
];
console.log(evaluateEmployees(employees));