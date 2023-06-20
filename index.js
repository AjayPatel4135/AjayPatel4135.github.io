let donutCount = 0;
let donutneeded = 100;
let autoClickerCount = 100;
let totalAutoClickerCount = 0;

autoClicker.disabled = true;
document.getElementById('dneeded').innerHTML = 100;

const render = () => {
    if (document.getElementById('dCreated').innerHTML >= 0) {
        donutCount++;
        document.getElementById('dCreated').innerHTML = donutCount;
    }
    if (Math.abs(donutsLeft) > 0) {
        document.getElementById('dneeded').innerHTML = Math.abs(autoClickerCount - donutCount);
    }
};

document.getElementById('donut').addEventListener("click", () => {
    donutCount++
    document.getElementById('dCreated').innerHTML = donutCount;
    if (donutneeded != 0) {
        donutneeded--;
        document.getElementById('dneeded').innerHTML = donutneeded;
    }
    if (donutCount >= autoClickerCount) {
        autoClicker.disabled = false;
    }
});

document.getElementById('autoClicker').addEventListener('click', () => {
    donutCount -= autoClickerCount;
    autoClicker.disabled = true;
    autoClickerCount += Math.round(autoClickerCount * .10);
    document.getElementById('dCreated').innerHTML = donutCount;
    donutneeded = autoClickerCount;
    document.getElementById('dneeded').innerHTML = donutneeded;
    totalAutoClickerCount++;
    document.getElementById('totalAutoClicker').innerHTML = totalAutoClickerCount;
    setInterval(render, 1000);
});

document.getElementById('reset').addEventListener('click', () => {
    donutCount = 0;
    autoClickerCount = 100;
    donutneeded = 100;
    document.getElementById('dCreated').innerHTML = donutCount;
    document.getElementById('dneeded').innerHTML = autoClickerCount;
    document.getElementById('totalAutoClicker').innerHTML = 0;
});

