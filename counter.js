// Select the counter elements and the section where counters should start
const counter1 = document.getElementById("counter-1");
const counter2 = document.getElementById("counter-2");
const counter3 = document.getElementById("counter-3");
const counterSection = document.getElementById("counter-section");

// Function to start the counter for each counter element with different target and speed

const startCounter = (counterElement, target) => {

    if (!counterElement) {
        console.error("Counter element not found!");
        return; // Exit if the element doesn't exist
    }
    let counter = 0;

    const interval = setInterval(() => {
        counter++;
        counterElement.textContent = counter;
        if (counter >= target) {
            clearInterval(interval);
        }
    }, 50); // Different speed for each counter
};

// Observer to trigger counters when the section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            // Start counters for each counter element with different targets and speeds
            startCounter(counter1, 500); // Target 1500, fast speed
            startCounter(counter2, 140); // Target 2000, medium speed
            startCounter(counter3, 98); // Target 2500, slow speed
            observer.unobserve(entry.target); // Stop observing after counters start
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the section is visible

observer.observe(counterSection);
