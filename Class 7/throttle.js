// Throttle function implementation
function throttle(func, limit) {
    let lastCall = 0;
    let timeoutId;
    
    return function(...args) {
        const now = Date.now();
        const context = this;
        
        // Clear any existing timeout to prevent multiple executions
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        // If enough time has passed since last call, execute immediately
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(context, args);
        } else {
            // Otherwise, schedule the call for the remaining time
            timeoutId = setTimeout(() => {
                lastCall = now;
                func.apply(context, args);
            }, limit - (now - lastCall));
        }
    };
}

// Example usage:
const throttleInput = document.getElementById('throttle-input');
const throttleResults = document.getElementById('throttle-results');
let throttleCounter = 0;

function updateThrottleCounter() {
    throttleCounter++;
    const now = new Date().toLocaleTimeString();
    throttleResults.textContent = `Throttled call #${throttleCounter} at ${now}`;
    console.log(`Throttled call #${throttleCounter}`);
}

// Throttle the function to run at most once every 1000ms (1 second)
const throttledUpdate = throttle(updateThrottleCounter, 10000);

// Add event listener to input
throttleInput?.addEventListener('input', () => {
    const now = new Date().toLocaleTimeString();
    document.getElementById('throttle-input-time').textContent = `Last input at: ${now}`;
    throttledUpdate();
});
