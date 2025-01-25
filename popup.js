document.getElementById('startButton').addEventListener('click', async () => {
    const selectedNumber = document.getElementById('numberSelect').value;
    const spinCount = parseInt(document.getElementById('spinCount').value, 10);
  
    if (isNaN(spinCount) || spinCount < 1) {
      alert('Please enter a valid number of spins.');
      return;
    }
  
    // Get the active tab
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    // Inject the content script
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, {
      action: 'startSpinning',
      number: selectedNumber,
      spinCount: spinCount
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error sending message:', chrome.runtime.lastError);
      } else {
        console.log('Message sent successfully:', response);
      }
    });
  });