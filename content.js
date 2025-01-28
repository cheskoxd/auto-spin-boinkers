// Inject the toggle button and sidebar into the webpage
function injectSidebar() {
  // Create the toggle button
  const toggleButton = document.createElement('button');
  toggleButton.id = 'extension-toggle-button';
  toggleButton.textContent = '🎡 Auto Wheel';
  toggleButton.style.position = 'fixed';
  toggleButton.style.bottom = '20px';
  toggleButton.style.left = '20px';
  toggleButton.style.zIndex = '1000';
  toggleButton.style.padding = '10px 20px';
  toggleButton.style.backgroundColor = '#007bff';
  toggleButton.style.color = '#fff';
  toggleButton.style.border = 'none';
  toggleButton.style.borderRadius = '25px';
  toggleButton.style.cursor = 'pointer';
  toggleButton.style.fontSize = '14px';
  toggleButton.style.fontWeight = 'bold';
  toggleButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  toggleButton.style.transition = 'background-color 0.3s ease';

  // Hover effect for the toggle button
  toggleButton.addEventListener('mouseenter', () => {
    toggleButton.style.backgroundColor = '#0056b3';
  });
  toggleButton.addEventListener('mouseleave', () => {
    toggleButton.style.backgroundColor = '#007bff';
  });

  // Create the sidebar
  const sidebar = document.createElement('div');
  sidebar.id = 'extension-sidebar';
  sidebar.style.position = 'fixed';
  sidebar.style.top = '0';
  sidebar.style.right = '-340px'; // Start off-screen
  sidebar.style.width = '300px';
  sidebar.style.height = '100vh';
  sidebar.style.backgroundColor = '#ffffff';
  sidebar.style.padding = '20px';
  sidebar.style.boxShadow = '-2px 0 10px rgba(0, 0, 0, 0.1)';
  sidebar.style.zIndex = '1000';
  sidebar.style.overflowY = 'auto';
  sidebar.style.transition = 'right 0.3s ease';
  sidebar.style.display = 'flex';
  sidebar.style.flexDirection = 'column';

  // Add controls and status display to the sidebar
  // Add controls and status display to the sidebar
sidebar.innerHTML = `
<h3 style="margin-top: 0; font-size: 20px; color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">🎡 Spin Wheel Auto</h3>
<div style="margin-bottom: 15px;">
  <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">Bet:</label>
  <select id="numberSelect" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
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
  <input type="number" id="spinCount" placeholder="Enter spins" min="1" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 5px; font-size: 14px;">
</div>
<div style="margin-bottom: 10px;">
  <label style="display: block; font-size: 14px; color: #555; margin-bottom: 5px;">
    <input type="checkbox" id="infiniteSpins" style="margin-right: 5px;"> Infinite Spins
  </label>
</div>
<button id="startButton" style="width: 100%; padding: 10px; background-color: #28a745; color: #fff; border: none; border-radius: 5px; font-size: 14px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease;">🚀 Start Spinning</button>
<button id="stopButton" style="width: 100%; padding: 10px; background-color: #dc3545; color: #fff; border: none; border-radius: 5px; font-size: 14px; font-weight: bold; cursor: pointer; transition: background-color 0.3s ease; display: none;">🛑 Stop Spinning</button>
<div id="status" style="margin-top: 20px; font-size: 14px; color: #333;flex: 1"></div>
<div style="margin-top: auto; padding-bottom: 20px; border-top: 1px solid #eee;">
  <div style="text-align: center; font-size: 12px; color: #555; margin-bottom: 5px;margin-top: 5px;">
    Made by <strong>@cheskoxd</strong>
  </div>
  <div style="text-align: center; font-size: 12px; color: #555; margin-bottom: 10px;">
    <strong>Donate:</strong>
    <div style="display: flex; gap: 5px; justify-content: center; margin-top: 5px;">
      <button id="donateBitcoin" style="padding: 5px 10px; background-color: #f7931a; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">BTC</button>
      <a href="https://paypal.me/cheskoxd" target="_blank"><button style="padding: 5px 10px; background-color:rgb(0, 10, 204); color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">Paypal</button></a>
      <button id="donateTon" style="padding: 5px 10px; background-color: #0088cc; color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">TON</button>
      <button id="donateNotcoin" style="padding: 5px 10px; background-color:rgb(9, 5, 16); color: #fff; border: none; border-radius: 5px; cursor: pointer; font-size: 10px;">ANY TON COIN</button>
    </div>
  </div>
  <div style="opacity: 0.4; text-align: center; font-size: 10px;">
    This tool makes spins take two seconds, instead of the 10 seconds if you do it normally, also you can change the bet at any time (You will lose your current multiplier if you change your bet)
  </div>
</div>
`;

  // Append the button and sidebar to the body
  document.body.appendChild(toggleButton);
  document.body.appendChild(sidebar);

  // Add event listeners for donation buttons
const donateBitcoin = document.getElementById('donateBitcoin');
const donateTon = document.getElementById('donateTon');
const donateNotcoin = document.getElementById('donateNotcoin');

// Replace these with your actual crypto addresses
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


  // Toggle sidebar visibility
  toggleButton.addEventListener('click', () => {
    const sidebar = document.getElementById('extension-sidebar');
    if (sidebar.style.right === '0px') {
      sidebar.style.right = '-340px'; // Hide sidebar
      toggleButton.textContent = '🎡 Auto Wheel';
    } else {
      sidebar.style.right = '0px'; // Show sidebar
      toggleButton.textContent = '🚪 Close';
    }
  });

  // Add event listener for the infinite spins checkbox
  const infiniteSpinsCheckbox = document.getElementById('infiniteSpins');
  const spinCountInput = document.getElementById('spinCount');

  infiniteSpinsCheckbox.addEventListener('change', () => {
    if (infiniteSpinsCheckbox.checked) {
      spinCountInput.disabled = true;
      spinCountInput.value = ''; // Clear the input value
    } else {
      spinCountInput.disabled = false;
    }
  });

  // Add event listener for the start button
  const startButton = document.getElementById('startButton');
  const stopButton = document.getElementById('stopButton');
  let intervalId = null;

  startButton.addEventListener('click', () => {
    const selectedNumber = document.getElementById('numberSelect').value;
    const spinCount = parseInt(document.getElementById('spinCount').value, 10);
    const infiniteSpins = document.getElementById('infiniteSpins').checked;

    if (!infiniteSpins && (isNaN(spinCount) || spinCount < 1)) {
      alert('Please enter a valid number of spins.');
      return;
    }

    startSpinning(selectedNumber, infiniteSpins ? Infinity : spinCount);

    // Show the stop button and hide the start button
    startButton.style.display = 'none';
    stopButton.style.display = 'block';
  });

  // Add event listener for the stop button
  stopButton.addEventListener('click', () => {
    stopSpinning();
  });
}

// Global variables to track spinning state
let spinsDone = 0;
let totalEnergyUsed = 0;
let prizeValues = {};
let remainingEnergy = 0;
let totalEnergy = 0;
let currentMultiplier = 1; // Track the current multiplier
let intervalId = null;
let isSpinning = false; // Flag to track if spinning is active


async function fetchConfigValue(url, key) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (key in data) {
      return data[key];
    } else {
      throw new Error(`Key "${key}" not found in the config file.`);
    }
  } catch (error) {
    console.error('Error fetching config value:', error.message);
    return null; // Return null or handle error as needed
  }
}


// Function to start spinning
async function startSpinning(selectedNumber, spinCount) {
  const VERSION = await fetchConfigValue('https://cheskoxd.github.io/auto-spin-boinkers/data.json', 'version');
  spinsDone = 0;
  totalEnergyUsed = 0;
  prizeValues = {};
  currentMultiplier = 1; // Reset the multiplier
  isSpinning = true; // Set spinning flag to true

  updateStatus({
    status: 'running',
    spinsDone,
    totalEnergyUsed,
    prizeValues,
    currentMultiplier, 
    totalEnergy
  });


  intervalId = setInterval(() => {
    if (!isSpinning || spinsDone >= spinCount) {
      stopSpinning();
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      stopSpinning();
      updateStatus({
        status: 'error',
        message: 'Token not found in localStorage.'
      });
      return;
    }
    

    fetch(`https://boink.boinkers.co/api/play/spinWheelOfFortune/${selectedNumber}?p=unknown&v=${VERSION}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json, text/plain, */*',
        'authorization': token,
        'content-type': 'application/json',
      },
      referrer: 'https://boink.boinkers.co/daily-wheel',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: '{}',
      mode: 'cors',
      credentials: 'include'
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

      spinsDone++;

      // Update total energy used
      totalEnergyUsed += data.energyUsed || 0;

      // Update total prize value by prize name
      const prizeName = data.prize?.prizeName;
      const prizeValue = data.prize?.prizeValue || 0;
      if (prizeName) {
        if (!prizeValues[prizeName]) {
          prizeValues[prizeName] = 0;
        }
        prizeValues[prizeName] += prizeValue;
      }

      // Update the current multiplier
      currentMultiplier = data.currentCombo?.currentBonus || 1;

      // Update the status with remaining energy and current multiplier
      remainingEnergy = data.userGameEnergy?.energy || 0;
      totalEnergy = data.userGamesEnergy?.slotMachine?.energy || 0;
      updateStatus({
        status: isSpinning ? 'running' : 'finished',
        spinsDone,
        totalEnergyUsed,
        prizeValues,
        remainingEnergy,
        currentMultiplier,
        totalEnergy
      });

      // Stop spinning if the user runs out of energy
      if (remainingEnergy < selectedNumber) {
        stopSpinning();
        updateStatus({
          status: 'error',
          message: `Not enough energy to spin. Remaining spins: ${remainingEnergy}`
        });
      }
    })
    .catch(error => {
      if (!isSpinning) return; // Ignore if spinning is stopped
      console.error('Error:', error);
      stopSpinning();
      updateStatus({
        status: 'error',
        message: error.message
      });
    });
  }, 2000); // 2 seconds interval
}

// Function to stop spinning
function stopSpinning() {
  isSpinning = false; // Set spinning flag to false
  clearInterval(intervalId);
  intervalId = null;

  // Update the status to "finished"
  updateStatus({
    status: 'finished',
    spinsDone,
    totalEnergyUsed,
    prizeValues,
    remainingEnergy,
    currentMultiplier,
    totalEnergy
  });

  // Show the start button and hide the stop button
  document.getElementById('startButton').style.display = 'block';
  document.getElementById('stopButton').style.display = 'none';
}

// Function to update the status in the sidebar
function updateStatus({ status, spinsDone, totalEnergyUsed, prizeValues, remainingEnergy, currentMultiplier, message, totalEnergy }) {
  const statusElement = document.getElementById('status');
  if (status === 'finished') {
    let resultText = `<div style="background-color: #e8f5e9; padding: 10px; border-radius: 5px; color: #2e7d32;">✅ Finished spinning!</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total spins used:</strong> ${totalEnergyUsed}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Current Multiplier:</strong> x${currentMultiplier}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total prizes won:</strong></div>`;
    for (const [prizeName, prizeValue] of Object.entries(prizeValues)) {
      if (prizeName === "slotMachine") {
        resultText += `<div><img style="width: 20px; height: 20px;" src="https://boink.boinkers.co/assets/img/daily-wheel/energy-drink.png" alt="" /> Energy: ${prizeValue}</div>`;
      } else {
        resultText += `<div>🎁 Other prizes: ${prizeValue}</div>`;
      }
    }
    resultText += `<div style="margin-top: 10px;"><strong>Energy balance:</strong> ${totalEnergy}</div>`;
    statusElement.innerHTML = resultText;
  } else if (status === 'running') {
    let resultText = `<div style="background-color: #fff3e0; padding: 10px; border-radius: 5px; color: #e65100;">🔄 Completed Spins: ${spinsDone}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total spins spent:</strong> ${totalEnergyUsed}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Current Multiplier:</strong> x${currentMultiplier}</div>`;
    resultText += `<div style="margin-top: 10px;"><strong>Total prizes won:</strong></div>`;
    for (const [prizeName, prizeValue] of Object.entries(prizeValues)) {
      resultText += `<div>${prizeName === "slotMachine" ? `<img style="width: 20px; height: 20px;" src="https://boink.boinkers.co/assets/img/daily-wheel/energy-drink.png" alt="" />` : "🎁"} ${prizeName === "slotMachine" ? "Energy" : "Other prizes"}: ${prizeValue}</div>`;
    }
    resultText += `<div style="margin-top: 10px;"><strong>Energy balance is:</strong> ${totalEnergy}</div>`;
    statusElement.innerHTML = resultText;
  } else if (status === 'error') {
    statusElement.innerHTML = `<div style="background-color: #ffebee; padding: 10px; border-radius: 5px; color: #c62828;">❌ Error: ${message}</div>`;
  }
}

// Inject the sidebar and toggle button when the script runs
injectSidebar();