"use strict";
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
            }
            else {
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
        let heartRateInterval;
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

    // --- HRV Test Functionality ---
    const hrvTestBtn = document.getElementById('hrv-test-btn');
    if (hrvTestBtn) {
        hrvTestBtn.addEventListener('click', () => {
            // 更改按钮状态为测试中
            hrvTestBtn.textContent = '测试中...';
            hrvTestBtn.disabled = true;
            hrvTestBtn.classList.add('opacity-50');
            
            // 模拟2分钟测试
            setTimeout(() => {
                hrvTestBtn.textContent = '开始测试';
                hrvTestBtn.disabled = false;
                hrvTestBtn.classList.remove('opacity-50');
                
                // 模拟更新HRV结果
                alert('HRV测试完成！\n结果: 42.8ms\n压力指数: 低');
            }, 3000); // 为演示目的缩短为3秒
        });
    }

    // --- ECG Test Functionality ---
    const ecgTestBtn = document.getElementById('ecg-test-btn');
    if (ecgTestBtn) {
        ecgTestBtn.addEventListener('click', () => {
            // 更改按钮状态为测试中
            ecgTestBtn.textContent = '测试中...';
            ecgTestBtn.disabled = true;
            ecgTestBtn.classList.add('opacity-50');
            
            // 模拟30秒测试
            setTimeout(() => {
                ecgTestBtn.textContent = '开始测试';
                ecgTestBtn.disabled = false;
                ecgTestBtn.classList.remove('opacity-50');
                
                // 模拟更新ECG结果
                alert('ECG测试完成！\n结果: 正常窦性心律\n心率: 74 次/分\n无异常发现');
            }, 2000); // 为演示目的缩短为2秒
        });
    }
});
