import WebServer from './web.server';

let webServer = new WebServer();

webServer.start()
  .then(() => {
    console.log('========================================');
    console.log('Web server started!');
    console.log('Navigate to http://localhost:3000');
    console.log('========================================');
  })
  .catch(e => {
    console.log('========================================');
    console.error(e);
    console.error("Web server failed to start.");
    console.log('========================================');
  });