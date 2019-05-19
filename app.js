console.log('1. [ Starting HBO App ]');

const { app } = require('electron');
const init = require('./bin/init');

app.on('ready', init);
app.on('window-all-closed', ()=> { if (process.platform !== 'darwin') app.quit();  });