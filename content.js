async function injectUI() {
  // Create toggle button for wheel
  const wheelToggleButton = document.createElement('button');
  wheelToggleButton.id = 'wheel-toggle-button';
  wheelToggleButton.textContent = '🎡 Auto Wheel';
  wheelToggleButton.style.position = 'fixed';
  wheelToggleButton.style.bottom = '20px';
  wheelToggleButton.style.left = '20px';
  wheelToggleButton.style.zIndex = '1000';
  wheelToggleButton.style.padding = '10px 20px';
  wheelToggleButton.style.backgroundColor = '#007bff';
  wheelToggleButton.style.color = '#fff';
  wheelToggleButton.style.border = 'none';
  wheelToggleButton.style.borderRadius = '25px';
  wheelToggleButton.style.cursor = 'pointer';
  wheelToggleButton.style.fontSize = '14px';
  wheelToggleButton.style.fontWeight = 'bold';
  wheelToggleButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  wheelToggleButton.style.transition = 'background-color 0.3s ease';

  // Create toggle button for slot machine
  const slotToggleButton = document.createElement('button');
  slotToggleButton.id = 'slot-toggle-button';
  slotToggleButton.textContent = '🎰 Auto Slot';
  slotToggleButton.style.position = 'fixed';
  slotToggleButton.style.bottom = '70px';
  slotToggleButton.style.left = '20px';
  slotToggleButton.style.zIndex = '1000';
  slotToggleButton.style.padding = '10px 20px';
  slotToggleButton.style.backgroundColor = '#17a2b8';
  slotToggleButton.style.color = '#fff';
  slotToggleButton.style.border = 'none';
  slotToggleButton.style.borderRadius = '25px';
  slotToggleButton.style.cursor = 'pointer';
  slotToggleButton.style.fontSize = '14px';
  slotToggleButton.style.fontWeight = 'bold';
  slotToggleButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  slotToggleButton.style.transition = 'background-color 0.3s ease';

  // Hover effects
  wheelToggleButton.addEventListener('mouseenter', () => {
    wheelToggleButton.style.backgroundColor = '#0056b3';
  });
  wheelToggleButton.addEventListener('mouseleave', () => {
    wheelToggleButton.style.backgroundColor = '#007bff';
  });
  slotToggleButton.addEventListener('mouseenter', () => {
    slotToggleButton.style.backgroundColor = '#117a8b';
  });
  slotToggleButton.addEventListener('mouseleave', () => {
    slotToggleButton.style.backgroundColor = '#17a2b8';
  });

  // Create wheel sidebar
  const wheelSidebar = document.createElement('div');
  wheelSidebar.id = 'wheel-sidebar';
  wheelSidebar.style.position = 'fixed';
  wheelSidebar.style.top = '0';
  wheelSidebar.style.right = '-340px';
  wheelSidebar.style.width = '300px';
  wheelSidebar.style.height = '100vh';
  wheelSidebar.style.backgroundColor = '#ffffff';
  wheelSidebar.style.padding = '20px';
  wheelSidebar.style.boxShadow = '-2px 0 10px rgba(0, 0, 0, 0.1)';
  wheelSidebar.style.zIndex = '1000';
  wheelSidebar.style.overflowY = 'auto';
  wheelSidebar.style.transition = 'right 0.3s ease';
  wheelSidebar.style.display = 'flex';
  wheelSidebar.style.flexDirection = 'column';

  // Create slot machine sidebar
  const slotSidebar = document.createElement('div');
  slotSidebar.id = 'slot-sidebar';
  slotSidebar.style.position = 'fixed';
  slotSidebar.style.top = '0';
  slotSidebar.style.right = '-340px';
  slotSidebar.style.width = '300px';
  slotSidebar.style.height = '100vh';
  slotSidebar.style.backgroundColor = '#ffffff';
  slotSidebar.style.padding = '20px';
  slotSidebar.style.boxShadow = '-2px 0 10px rgba(0, 0, 0, 0.1)';
  slotSidebar.style.zIndex = '1000';
  slotSidebar.style.overflowY = 'auto';
  slotSidebar.style.transition = 'right 0.3s ease';
  slotSidebar.style.display = 'flex';
  slotSidebar.style.flexDirection = 'column';

  // Wheel sidebar HTML
  wheelSidebar.innerHTML = `
    <h3 style="margin-top: 0; font-size: 20px; color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">🎡 Spin Wheel Auto</h3>
    <div style="margin-bottom: 15px;">
      <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">Wheel Bet:</label>
      <select id="wheelBetSelect" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
        <option value="1">x1</option>
        <option value="2">x2</option>
        <option value="3">x3</option>
        <option value="5">x5</option>
        <option value="10">x10</option>
        <option value="25">x25</option>
        <option value="50">x50</option>
        <option value="100">x100</option>
        <option value="250">x250</option>
        <option value="500">x500</option>
        <option value="1000">x1000</option>
        <option value="10000">x10000</option>
      </select>
    </div>
    <div style="margin-bottom: 15px;">
      <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">Number of Spins:</label>
      <input type="number" id="wheelSpinCount" placeholder="Enter spins" min="1" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">
        <input type="checkbox" id="wheelInfiniteSpins" style="margin-right: 5px;"> Infinite Spins
      </label>
    </div>
    <button id="startWheelButton" style="width: 100%; padding: 10px; background-color: #28a745; color: #fff; border: none; border-radius: 5px; font-size: 14px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease;">🚀 Start Wheel Spinning</button>
    <button id="stopButton" style="width: 100%; padding: 10px; background-color: #dc3545; color: #fff; border: none; border-radius: 5px; font-size: 14px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease; display: none;">🛑 Stop Spinning</button>
    <div id="wheelStatus" style="margin-top: 20px; font-size: 14px; color: #333; flex: 1;"></div>
    <div style="margin-top: auto; padding-bottom: 20px; border-top: 1px solid #eee;">
      <div style="text-align: center; font-size: 12px; color: #555; margin-bottom: 5px; margin-top: 5px;">
        Made by <strong>@cheskoxd</strong>
      </div>
      <div style="text-align: center; font-size: 12px; color: #555; margin-bottom: 10px;">
        <strong>Donate:</strong>
        <div style="display: flex; gap: 5px; justify-content: center; margin-top: 5px;">
          <button id="donateBitcoin" style="padding: 5px 10px; background-color: #f7931a; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">BTC</button>
          <a href="https://paypal.me/cheskoxd" target="_blank"><button style="padding: 5px 10px; background-color: rgb(0, 10, 204); color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">Paypal</button></a>
          <button id="donateTon" style="padding: 5px 10px; background-color: #0088cc; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">TON</button>
          <button id="donateNotcoin" style="padding: 5px 10px; background-color: rgb(9, 5, 16); color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">ANY TON COIN</button>
        </div>
      </div>
      <div style="opacity: 0.4; text-align: center; font-size: 10px;">
        This tool makes wheel spins take two seconds
      </div>
    </div>
  `;

  // Slot machine sidebar HTML with slot display
  slotSidebar.innerHTML = `
    <h3 style="margin-top: 0; font-size: 20px; color: #333; border-bottom: 2px solid #17a2b8; padding-bottom: 10px;">🎰 Slot Machine Auto</h3>
    <div id="slotDisplay" style="display: flex; justify-content: space-between; margin-bottom: 15px; background-color: #f8f9fa; padding: 10px; border-radius: 5px;">
      <div style="width: 30%; text-align: center; font-size: 14px; color: #333; border-right: 1px solid #ddd;">-</div>
      <div style="width: 30%; text-align: center; font-size: 14px; color: #333; border-right: 1px solid #ddd;">-</div>
      <div style="width: 30%; text-align: center; font-size: 14px; color: #333;">-</div>
    </div>
    <div style="margin-bottom: 15px;">
      <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">Slot Bet:</label>
      <select id="slotBetSelect" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
        <option value="1">1</option>
        <option value="10">10</option>
        <option value="100">100</option>
        <option value="1000">1000</option>
        <option value="5000">5000</option>
        <option value="10000">10000</option>
        <option value="50000">50000</option>
        <option value="100000">100000</option>
        <option value="500000">500000</option>
        <option value="1000000">1000000</option>
        <option value="5000000">5000000</option>
        <option value="10000000">10000000</option>
      </select>
    </div>
    <div style="margin-bottom: 15px;">
      <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">Number of Spins:</label>
      <input type="number" id="slotSpinCount" placeholder="Enter spins" min="1" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
    </div>
    <div style="margin-bottom: 10px;">
      <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">
        <input type="checkbox" id="slotInfiniteSpins" style="margin-right: 5px;"> Infinite Spins
      </label>
    </div>
    <button id="startSlotButton" style="width: 100%; padding: 10px; background-color: #28a745; color: #fff; border: none; border-radius: 5px; font-size: 14px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease;">🎰 Start Slot Spinning</button>
    <button id="stopSlotButton" style="width: 100%; padding: 10px; background-color: #dc3545; color: #fff; border: none; border-radius: 5px; font-size: 14px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease; display: none;">🛑 Stop Spinning</button>
    <div id="slotStatus" style="margin-top: 20px; font-size: 14px; color: #333; flex: 1;"></div>
    <div style="margin-top: auto; padding-bottom: 20px; border-top: 1px solid #eee;">
      <div style="text-align: center; font-size: 12px; color: #555; margin-bottom: 5px; margin-top: 5px;">
        Made by <strong>@cheskoxd</strong>
      </div>
      <div style="text-align: center; font-size: 12px; color: #555; margin-bottom: 10px;">
        <strong>Donate:</strong>
        <div style="display: flex; gap: 5px; justify-content: center; margin-top: 5px;">
          <button id="donateBitcoinSlot" style="padding: 5px 10px; background-color: #f7931a; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">BTC</button>
          <a href="https://paypal.me/cheskoxd" target="_blank"><button style="padding: 5px 10px; background-color: rgb(0, 10, 204); color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">Paypal</button></a>
          <button id="donateTonSlot" style="padding: 5px 10px; background-color: #0088cc; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">TON</button>
          <button id="donateNotcoinSlot" style="padding: 5px 10px; background-color: rgb(9, 5, 16); color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">ANY TON COIN</button>
        </div>
      </div>
      <div style="opacity: 0.4; text-align: center; font-size: 10px;">
        This tool makes slot spins take 1.5 seconds
      </div>
    </div>
  `;

  // Append buttons and sidebars to the body
  document.body.appendChild(wheelToggleButton);
  document.body.appendChild(slotToggleButton);
  document.body.appendChild(wheelSidebar);
  document.body.appendChild(slotSidebar);

  // Donation buttons for wheel sidebar
  const donateBitcoin = document.getElementById('donateBitcoin');
  const donateTon = document.getElementById('donateTon');
  const donateNotcoin = document.getElementById('donateNotcoin');
  const cryptoAddresses = {
    bitcoin: '1Dq4QPHCQbu3eVvZs36K9qp6j29hrTRr25',
    ton: 'UQD17Qldny20GtPZT2nMRrKZ3Zvlj1Wvzu3xtroZHQ9IDtsr'
  };

  donateBitcoin.addEventListener('click', () => {
    navigator.clipboard.writeText(cryptoAddresses.bitcoin).then(() => {
      alert('Bitcoin address copied to clipboard!');
    });
  });
  donateTon.addEventListener('click', () => {
    navigator.clipboard.writeText(cryptoAddresses.ton).then(() => {
      alert('TON address copied to clipboard!');
    });
  });
  donateNotcoin.addEventListener('click', () => {
    navigator.clipboard.writeText(cryptoAddresses.ton).then(() => {
      alert('TON address copied to clipboard!, You can send any crypto coin based on TON network');
    });
  });

  // Donation buttons for slot sidebar
  const donateBitcoinSlot = document.getElementById('donateBitcoinSlot');
  const donateTonSlot = document.getElementById('donateTonSlot');
  const donateNotcoinSlot = document.getElementById('donateNotcoinSlot');

  donateBitcoinSlot.addEventListener('click', () => {
    navigator.clipboard.writeText(cryptoAddresses.bitcoin).then(() => {
      alert('Bitcoin address copied to clipboard!');
    });
  });
  donateTonSlot.addEventListener('click', () => {
    navigator.clipboard.writeText(cryptoAddresses.ton).then(() => {
      alert('TON address copied to clipboard!');
    });
  });
  donateNotcoinSlot.addEventListener('click', () => {
    navigator.clipboard.writeText(cryptoAddresses.ton).then(() => {
      alert('TON address copied to clipboard!, You can send any crypto coin based on TON network');
    });
  });

  // Toggle sidebar visibility (only one open at a time)
  wheelToggleButton.addEventListener('click', () => {
    if (wheelSidebar.style.right === '0px') {
      wheelSidebar.style.right = '-340px';
      wheelToggleButton.textContent = '🎡 Auto Wheel';
    } else {
      wheelSidebar.style.right = '0px';
      slotSidebar.style.right = '-340px';
      wheelToggleButton.textContent = '🚪 Close';
      slotToggleButton.textContent = '🎰 Auto Slot';
    }
  });

  slotToggleButton.addEventListener('click', () => {
    if (slotSidebar.style.right === '0px') {
      slotSidebar.style.right = '-340px';
      slotToggleButton.textContent = '🎰 Auto Slot';
    } else {
      slotSidebar.style.right = '0px';
      wheelSidebar.style.right = '-340px';
      slotToggleButton.textContent = '🚪 Close';
      wheelToggleButton.textContent = '🎡 Auto Wheel';
    }
  });

  // Infinite spins checkbox for wheel
  const wheelInfiniteSpinsCheckbox = document.getElementById('wheelInfiniteSpins');
  const wheelSpinCountInput = document.getElementById('wheelSpinCount');
  wheelInfiniteSpinsCheckbox.addEventListener('change', () => {
    wheelSpinCountInput.disabled = wheelInfiniteSpinsCheckbox.checked;
    if (wheelInfiniteSpinsCheckbox.checked) wheelSpinCountInput.value = '';
  });

  // Infinite spins checkbox for slot
  const slotInfiniteSpinsCheckbox = document.getElementById('slotInfiniteSpins');
  const slotSpinCountInput = document.getElementById('slotSpinCount');
  slotInfiniteSpinsCheckbox.addEventListener('change', () => {
    slotSpinCountInput.disabled = slotInfiniteSpinsCheckbox.checked;
    if (slotInfiniteSpinsCheckbox.checked) slotSpinCountInput.value = '';
  });

  // Start and stop buttons for wheel
  const startWheelButton = document.getElementById('startWheelButton');
  const stopButton = document.getElementById('stopButton');
  startWheelButton.addEventListener('click', () => {
    const selectedNumber = document.getElementById('wheelBetSelect').value;
    const spinCount = parseInt(document.getElementById('wheelSpinCount').value, 10);
    const infiniteSpins = document.getElementById('wheelInfiniteSpins').checked;

    if (!infiniteSpins && (isNaN(spinCount) || spinCount < 1)) {
      alert('Please enter a valid number of spins.');
      return;
    }

    startSpinning(selectedNumber, infiniteSpins ? Infinity : spinCount, 'wheel');

    startWheelButton.style.display = 'none';
    stopButton.style.display = 'block';
  });

  // Start and stop buttons for slot
  const startSlotButton = document.getElementById('startSlotButton');
  const stopSlotButton = document.getElementById('stopSlotButton');
  startSlotButton.addEventListener('click', () => {
    const betAmount = document.getElementById('slotBetSelect').value;
    const spinCount = parseInt(document.getElementById('slotSpinCount').value, 10);
    const infiniteSpins = document.getElementById('slotInfiniteSpins').checked;

    if (!infiniteSpins && (isNaN(spinCount) || spinCount < 1)) {
      alert('Please enter a valid number of spins.');
      return;
    }

    startSpinning(betAmount, infiniteSpins ? Infinity : spinCount, 'slot');

    startSlotButton.style.display = 'none';
    stopSlotButton.style.display = 'block';
  });

  stopButton.addEventListener('click', () => stopSpinning('wheel'));
  stopSlotButton.addEventListener('click', () => stopSpinning('slot'));

  config = await fetchConfigData();
}

// Global variables
let spinsDone = 0;
let totalEnergyUsed = 0;
let prizeValues = {};
let remainingEnergy = 0;
let totalEnergy = 0;
let currentMultiplier = 1;
let intervalId = null;
let isSpinning = false;
let config = {};
let lastSlutz = ['-', '-', '-'];

async function fetchConfigData() {
  try {
    const response = await fetch("https://boinkers.io/public/data/config?p=unknown", {
      headers: {
        "accept": "application/json, text/plain, */*",
        "accept-language": "es-ES,es;q=0.5",
        "if-none-match": "W/\"23e8f-LhuqOBVhikD3m9pkr0wV7ekAxLg\"",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Brave\";v=\"132\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-gpc": "1"
      },
      referrer: "https://boinkers.io/daily-wheel",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include"
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    const versionHash = data?.versionHash || null;
    const liveOps = data?.liveOps || [];
    const wheelLiveOp = liveOps.reduce((latest, op) => {
      if (op.liveOpName && op.liveOpName.toLowerCase().includes("wheel")) {
        if (!latest || new Date(op.startDate) > new Date(latest.startDate)) return op;
      }
      return latest;
    }, null);

    const wheelLiveOpId = wheelLiveOp?._id || null;
    const wheelLiveOpName = wheelLiveOp?.liveOpName || null;
    console.log("VersionHash:", versionHash, "Wheel LiveOp ID:", wheelLiveOpId, "Wheel LiveOp Name:", wheelLiveOpName);
    return { versionHash, wheelLiveOpId, wheelLiveOpName };
  } catch (error) {
    console.error("Error fetching config data:", error.message);
    return null;
  }
}

function startSpinning(betAmount, spinCount, type) {
  spinsDone = 0;
  totalEnergyUsed = 0;
  prizeValues = {};
  currentMultiplier = type === 'wheel' ? 1 : 0;
  isSpinning = true;

  updateStatus({
    status: 'running',
    spinsDone,
    totalEnergyUsed,
    prizeValues,
    currentMultiplier,
    totalEnergy,
    slutz: lastSlutz
  }, type);

  const endpoint = type === 'wheel' ? `spinWheelOfFortune/${betAmount}` : `spinSlotMachine/${betAmount}`;
  const referrer = type === 'wheel' ? 'https://boinkers.io/daily-wheel' : 'https://boinkers.io/sluts';
  const interval = type === 'wheel' ? 2500 : 1500;
  const body = type === 'wheel' ? `{"liveOpId": "${config.wheelLiveOpId}"}` : null;

  intervalId = setInterval(() => {
    if (!isSpinning || spinsDone >= spinCount) {
      stopSpinning(type);
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      stopSpinning(type);
      updateStatus({ status: 'error', message: 'Token not found in localStorage.' }, type);
      return;
    }

    fetch(`https://boinkers.io/api/play/${endpoint}?p=unknown&v=${config.versionHash}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': token,
        'content-type': 'application/json',
      },
      referrer,
      referrerPolicy: 'strict-origin-when-cross-origin',
      body,
      mode: 'cors',
      credentials: 'include'
    })
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .then(data => {
      spinsDone++;
      totalEnergyUsed += data.energyUsed || betAmount;
      const prizeName = data.prize?.prizeTypeName || 'No Prize';
      const prizeValue = data.prize?.prizeValue || 0;
      if (prizeName) {
        if (!prizeValues[prizeName]) prizeValues[prizeName] = 0;
        prizeValues[prizeName] += prizeValue;
      }
      if (type === 'wheel') currentMultiplier = data.currentCombo?.currentBonus || 1;
      remainingEnergy = data.userGameEnergy?.energy || 0;
      totalEnergy = data.userGamesEnergy?.slotMachine?.energy || 0;
      if (type === 'slot') lastSlutz = data.slutz || ['-', '-', '-'];
      updateStatus({
        status: isSpinning ? 'running' : 'finished',
        spinsDone,
        totalEnergyUsed,
        prizeValues,
        remainingEnergy,
        currentMultiplier,
        totalEnergy,
        slutz: lastSlutz
      }, type);

      if (remainingEnergy < betAmount) {
        stopSpinning(type);
        updateStatus({
          status: 'error',
          message: `Not enough energy to spin. Remaining energy: ${remainingEnergy}`
        }, type);
      }
    })
    .catch(error => {
      if (!isSpinning) return;
      console.error('Error:', error);
      updateStatus({ status: 'error', message: error.message }, type);
    });
  }, interval);
}

function stopSpinning(type) {
  isSpinning = false;
  clearInterval(intervalId);
  intervalId = null;

  updateStatus({
    status: 'finished',
    spinsDone,
    totalEnergyUsed,
    prizeValues,
    remainingEnergy,
    currentMultiplier,
    totalEnergy,
    slutz: lastSlutz
  }, type);

  if (type === 'wheel') {
    document.getElementById('startWheelButton').style.display = 'block';
    document.getElementById('stopButton').style.display = 'none';
  } else {
    document.getElementById('startSlotButton').style.display = 'block';
    document.getElementById('stopSlotButton').style.display = 'none';
  }
}

function slutsIcon(icon){
  switch (icon) {
    case "rug":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/rug.png" alt="" />`
    case "coin":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/coin.png" alt="" />`
    case "ass":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/ass.png" alt="" />`
    case "bull":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/bull_v2.png" alt="" />`
    case "treasure-chest":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/treasure-chest.png" alt="" />`
    case "rugBear":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/rugBear_v2.png" alt="" />`
    case "bear":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/bear_v2.png" alt="" />`
    case "energy":
      return `<img style="width: 40px; height: 40px;" src="https://boinkers.io/assets/img/slut/prizes/energy-drink_v2.png" alt="" />`
    case "gaeResource":
      return `<div>SYMBOL</div>`
  
    default:
      return icon
  }
}

function updateStatus({ status, spinsDone, totalEnergyUsed, prizeValues, remainingEnergy, currentMultiplier, message, totalEnergy, slutz }, type) {
  const statusElement = document.getElementById(type === 'wheel' ? 'wheelStatus' : 'slotStatus');
  if (type === 'slot') {
    const slotDisplay = document.getElementById('slotDisplay');
    if (slotDisplay && slutz) {
      slotDisplay.innerHTML = `
        <div style="width: 30%; text-align: center; font-size: 14px; color: #333; border-right: 1px solid #ddd;">${slutsIcon(slutz[0])}</div>
        <div style="width: 30%; text-align: center; font-size: 14px; color: #333; border-right: 1px solid #ddd;">${slutsIcon(slutz[1])}</div>
        <div style="width: 30%; text-align: center; font-size: 14px; color: #333;">${slutsIcon(slutz[2])}</div>
      `;
    }
  }

  if (status === 'finished') {
    let resultText = `<div style="background-color: #e8f5e9; padding: 10px; border-radius: 5px; color: #2e7d32;">✅ Finished spinning!</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total spins used:</strong> ${spinsDone}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total energy spent:</strong> ${totalEnergyUsed}</div>`;
    if (currentMultiplier && type === 'wheel') {
      resultText += `<div style="margin-top: 10px;"><strong>Current Multiplier:</strong> x${currentMultiplier}</div>`;
    }
    resultText += `<div style="margin-top: 10px;"><strong>Total prizes won:</strong></div>`;
    for (const [prizeName, prizeValue] of Object.entries(prizeValues)) {
      if (prizeName === "slotMachine") {
        resultText += `<div><img style="width: 20px; height: 20px;" src="https://boinkers.io/assets/img/daily-wheel/energy-drink.png" alt="" /> Energy: ${prizeValue}</div>`;
      } else {
        resultText += `<div>🎁 ${prizeName}: ${prizeValue}</div>`;
      }
    }
    resultText += `<div style="margin-top: 10px;"><strong>Energy balance:</strong> ${totalEnergy}</div>`;
    statusElement.innerHTML = resultText;
  } else if (status === 'running') {
    let resultText = `<div style="background-color: #fff3e0; padding: 10px; border-radius: 5px; color: #e65100;">🔄 Completed Spins: ${spinsDone}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total energy spent:</strong> ${totalEnergyUsed}</div>`;
    if (currentMultiplier && type === 'wheel') {
      resultText += `<div style="margin-top: 10px;"><strong>Current Multiplier:</strong> x${currentMultiplier}</div>`;
    }
    resultText += `<div style="margin-top: 10px;"><strong>Total prizes won:</strong></div>`;
    for (const [prizeName, prizeValue] of Object.entries(prizeValues)) {
      resultText += `<div>${prizeName === "slotMachine" ? `<img style="width: 20px; height: 20px;" src="https://boinkers.io/assets/img/daily-wheel/energy-drink.png" alt="" />` : "🎁"} ${prizeName === "slotMachine" ? "Energy" : prizeName}: ${prizeValue}</div>`;
    }
    resultText += `<div style="margin-top: 10px;"><strong>Energy balance:</strong> ${totalEnergy}</div>`;
    statusElement.innerHTML = resultText;
  } else if (status === 'error') {
    statusElement.innerHTML = `<div style="background-color: #ffebee; padding: 10px; border-radius: 5px; color: #c62828;">❌ Error: ${message}</div>`;
  }
}

injectUI();