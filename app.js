const room = document.getElementById("room");
const fireflies = document.getElementById("firefiles");
const stringHandle = document.getElementById("stringHandle");
const loginSide = document.getElementById("loginSide");

const fireflyPositions = [
    [4, 8], [24, 20], [52, 12], [78, 16], [94, 32], [10, 45],
    [31, 57], [70, 50], [88, 67], [17, 82], [47, 91], [76, 88],
];

fireflyPositions.forEach(([x, y], index) => {
    const firefly = document.createElement("span");
    firefly.style.setProperty("--x", `${x}%`);
    firefly.style.setProperty("--y", `${y}%`);
    firefly.style.setProperty("--size", `${index % 3 === 0 ? 5 : 3}px`);
    firefly.style.setProperty("--duration", `${2 + (index % 4) * 0.7}s`);
    firefly.style.setProperty("--delay", `${(index % 5) * -0.6}s`);
    fireflies.appendChild(firefly);
});

function toggleLamp() {
    const isOn = room.classList.toggle("on");
    stringHandle.setAttribute("aria-pressed", String(isOn));
    loginSide.setAttribute("aria-hidden", String(!isOn));
    loginSide.inert = !isOn;
}

stringHandle.addEventListener("click", toggleLamp);
stringHandle.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleLamp();
    }
});