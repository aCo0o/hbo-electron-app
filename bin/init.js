const { BrowserWindow } = require('electron'),
        appConfig       = require('./config'),
        path            = require('path'),
        url             = require('url');

module.exports = () => {
    console.log('2. [ Create HBO Wrapper ]');

    win = appConfig.window ? new BrowserWindow(appConfig.window) :
        new BrowserWindow({ show : false, frame: true, width: 1120, height: 600, titleBarStyle: 'hidden'});        
    !appConfig.dev ?
        win.loadURL(url.format({
            slashes: true,
            protocol: 'file:',
            pathname: path.join(__dirname, appConfig.path)
        }))
    : win.loadURL(appConfig.path);
    win.show();

    console.log('3. [ Starting HBO App ]');
};