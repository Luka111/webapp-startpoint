ALLEX_CONFIGURATION = (function (execlib) {
  'use strict';
  return {
    APP: {
      resources: [{
        name: 'AngularBootstrapper',
        type: 'AngularBootstrapper',
        options: {
          angular_dependencies: []
        }
      }],
      environments: [{
        name: 'ticketselling',
        type: 'allexremote',
        options: {
          entrypoint: {
            address: 'localhost',
            port: 8080
          },
          datasources: [{
            name: 'notification',
            type: 'jsdata',
            options: {
            }
          }],
          commands: [{
            name: 'insertTransaction_NAME',
            options: {
              sink: '.',
              name: 'insertTransaction'
            }
          }]
        }
      }],
      datasources: [{
        name: 'notification',
        environment: 'ticketselling' 
      }],
      commands: [{
        command: 'insertTransaction_NAME',
        environment: 'ticketselling'
      }],
      logic: [/*
      {
        //AUTO LOGIN, remove if not needed
        triggers : 'environment.ticketselling:state',
        references : 'environment.ticketselling>login',
        handler: function (login, state){
          if (state !== 'loggedout') return;
          login ({username:'luka', password:'123'});
        }
      }*/],
      links: [/*
      {
        source: '',
        target: '',
        filter: function (evnt, data) { return; }
      }*/],
      elements: [{
        name: 'insertTransaction',
        type: 'WebElement',
        /*
        options:{
        },
        logic: [{
        }],
        links: [{
        }]
        */
        actual: true
      }]
    }
  };
})(ALLEX);
