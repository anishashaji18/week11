const electron =  require('electron');
const url = require('url');
const path = reuire('path');
const{app, BrowserWindow} = electron;

let mainWindow;
app.on('ready', function(){
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
protocol:'file:' ,
slashes:true
   })) ;
})

