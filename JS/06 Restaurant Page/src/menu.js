export default function createMenu() {
    const menudiv = document.createElement("div");
    menudiv.innerHTML = "<h2>Our Menu</h2><ul><li>Beverages <ul><li>Tea</li><li>Lemon Tea</li><li>Coffee</li><li>Black Coffee</li></ul></li><li>Breakfast</li><li>Lunch</li><li>Dinner</li></ul > "
    return menudiv;
}