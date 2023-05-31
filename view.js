var b = document.getElementById('mn');
var a = document.getElementById('v2');




function getBatteryLevel() {
  return new Promise(function(resolve, reject) {
      if ('getBattery' in navigator) {
      navigator.getBattery()
          .then(function(battery) {
          var level = Math.floor(battery.level * 100);
          resolve(level);
          })
          .catch(function(error) {
          reject('Error occurred while retrieving battery level.');
          });
      } else {
      reject('Battery API not supported.');
      }
  });
  }

function general() {
  var b = document.getElementById('mn');
  var a = document.getElementById('v2');
  
  var latDiv = document.getElementById("lat");
  latDiv.textContent = 'Latency: ' + navigator.connection.rtt + ' Mbps';

  var strDiv = document.getElementById("str");
  strDiv.textContent = 'Network Strength: ' + navigator.connection.downlink + ' Mbps';

  var effDiv = document.getElementById("eff");
  effDiv.textContent = 'Network Effective Bandwith: ' + navigator.connection.effectiveType;

  var serDiv = document.getElementById("ser");
  serDiv.textContent = 'Service Workers: ' + (typeof navigator.serviceWorker !== 'undefined').toString();

  var onlDiv = document.getElementById("onl");
  onlDiv.textContent = 'Online: ' + navigator.onLine;

  var cookies = document.getElementById("c");
  cookies.textContent = 'Cookies: ' + navigator.cookieEnabled;

  a.style.display = 'none';
  b.style.display = 'block';
}

function other() {
  var b = document.getElementById('mn');
  var a = document.getElementById('v2');

  var mem = document.getElementById("dev");
  mem.textContent = 'Device Memory: ' + navigator.deviceMemory + ' Gb';

  var battery = document.getElementById("bat");
  
  getBatteryLevel().then(function(level) { 
    battery.textContent = 'Battery Level: ' + level + '%';
  })
  .catch(function(error) { 
      battery.textContent = 'N/A';
  });

  var core = document.getElementById("cor");
  core.textContent = 'Processor Cores: ' + navigator.hardwareConcurrency;

  var usr = document.getElementById("user");
  usr.textContent = 'User Agent: ' + JSON.stringify(window.navigator.userAgentData.toJSON());

  a.style.display = 'block';
  b.style.display = 'none';
}



document.getElementById('gen').onclick = general;
document.getElementById('oth').onclick = other;