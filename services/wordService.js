// wordService.js
const getRandomWord = () => {
    // This function can be expanded to fetch words from an API or database
    const words = ["Apple", "Banana", "Cat", "Dog", "Sun", "Moon", "Tree", "Flower", "Book", "Pen", "Coffee", "Tea", "Chair", "Table", "Car", "Bicycle", "Pizza", "Burger", "Music", "Art"];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

export default getRandomWord;
