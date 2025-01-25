chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startSpinning') {
      const { number, spinCount } = message;
      let spinsDone = 0;
  
      const interval = setInterval(() => {
        if (spinsDone >= spinCount) {
          clearInterval(interval);
          console.log('Finished spinning!');
          sendResponse({ status: 'finished', spinsDone });
          return;
        }
  
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('Token not found in localStorage.');
          clearInterval(interval);
          sendResponse({ status: 'error', message: 'Token not found' });
          return;
        }
  
        fetch(`https://boink.boinkers.co/api/play/spinWheelOfFortune/${number}?p=unknown&v=`, {
          method: 'POST',
          headers: {
            'accept': 'application/json, text/plain, */*',
            'accept-language': 'es-ES,es;q=0.5',
            'authorization': token,
            'content-type': 'application/json',
            'priority': 'u=1, i',
            'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132", "Brave";v="132"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'sec-gpc': '1'
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
          console.log(`Spins done: ${spinsDone}`);
        })
        .catch(error => {
          console.error('Error:', error);
          clearInterval(interval);
          sendResponse({ status: 'error', message: error.message });
        });
      }, 2000); // 2 seconds interval
  
      // Return true to indicate that the response will be sent asynchronously
      return true;
    }
  });