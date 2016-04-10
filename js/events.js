module.exports = {

  events: [],

  runEvent: function(event,main)
  {
    // We run through every function which was registered for the event (preload,update,etc)
    // and then we pass in the world object, setting it if there were any changes made to it
    // (if the function returned a new world object)
    if(this.events[event] !== undefined) this.events[event].map(
      function(fn){ fn(main);});
  },

  registerEvent: function(event,fn){
    if(this.events[event] === undefined) this.events[event] = [];
    this.events[event].push(fn);
  },

  preload: function(fn){ this.registerEvent('preload',fn); },
  create: function(fn){ this.registerEvent('create',fn); },
  update: function(fn){ this.registerEvent('update',fn); }

};
