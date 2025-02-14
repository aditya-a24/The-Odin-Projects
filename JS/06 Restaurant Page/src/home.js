export default function createHome() {
    const homeDiv = document.createElement("div");
    homeDiv.innerHTML = "<h2>Welcome to BLD - Breakfast Lunch & Dinner</h2><p>Best food in town!</p>"
    return homeDiv;
}