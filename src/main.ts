// This is the main entry point for the application's TypeScript code.
// For now, it's empty, but you can add your logic here in the future.

console.log("App script loaded.");

document.addEventListener('DOMContentLoaded', () => {
    // Logic for range display toggle
    const rangeButton = document.getElementById('range-button');
    const rangeDisplay = document.getElementById('range-display');
    const realtimeDisplay = document.getElementById('realtime-display');
    const rangeMarkers = document.getElementById('range-markers');

    if (rangeButton && rangeDisplay && realtimeDisplay && rangeMarkers) {
        rangeButton.addEventListener('click', () => {
            const isHidden = rangeDisplay.style.display === 'none' || rangeDisplay.classList.contains('hidden');
            if (isHidden) {
                rangeDisplay.style.display = 'block';
                rangeDisplay.classList.remove('hidden');

                realtimeDisplay.style.display = 'none';
                realtimeDisplay.classList.add('hidden');

                rangeMarkers.style.display = 'block';
                rangeMarkers.classList.remove('hidden');
                
                rangeButton.classList.remove('bg-withings-card');
                rangeButton.classList.add('bg-withings-pink');
            } else {
                rangeDisplay.style.display = 'none';
                rangeDisplay.classList.add('hidden');

                realtimeDisplay.style.display = 'block';
                realtimeDisplay.classList.remove('hidden');

                rangeMarkers.style.display = 'none';
                rangeMarkers.classList.add('hidden');

                rangeButton.classList.remove('bg-withings-pink');
                rangeButton.classList.add('bg-withings-card');
            }
        });
    }

    // --- Real-time Heart Rate Simulation ---
    const bpmElement = document.getElementById('realtime-bpm');
    if (bpmElement) {
        let currentBpm = 79;
        let heartRateInterval: number | undefined;

        function updateHeartRate() {
            const variation = (Math.random() - 0.5) * 4;
            currentBpm = Math.round(Math.max(65, Math.min(85, currentBpm + variation)));
            if (bpmElement) { // Extra check to satisfy TypeScript compiler
                bpmElement.textContent = String(currentBpm);
            }
        }

        function startLiveHeartRate() {
            if (!heartRateInterval) {
                heartRateInterval = window.setInterval(updateHeartRate, 2000);
            }
        }

        // Start live updates initially only if the element is visible
        if (realtimeDisplay && !realtimeDisplay.classList.contains('hidden')) {
            startLiveHeartRate();
        }
    }
}); 