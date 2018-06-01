import WebServer from './web.server';

let webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log('Web server started!');
  })
  .catch(e => {
    console.error(e);
    console.error("Web server failed to start.");
  });