module.exports = {

  events: [],

  runEvent: function(event,main)
  {
    // We run through every function which was registered for the event (preload,update,etc)
    // and then we pass in the main game object, setting it if there were any changes made to it
    // (if the function returned a new world object)
    if(this.events[event] !== undefined) this.events[event].map(
      function(obj){ if(obj.enabled) obj.fn(main,obj.guid);});
  },

  registerEvent: function(event,fn){
    var guid = this.guid();
    if(this.events[event] === undefined) this.events[event] = [];
    this.events[event].push({fn:fn, guid:guid, enabled:true});
    return guid;
  },

  preload: function(fn){ return this.registerEvent('preload',fn); },
  create: function(fn){ return this.registerEvent('create',fn); },
  update: function(fn){ return this.registerEvent('update',fn); },

  useEvent: function(event,guid,fn){
    this.events[event].some(function(obj,index){
      if(obj.guid && obj.guid == guid)
      {
        return fn(this.events[event],index);
      }
    }.bind(this));
  },

  stop: function(event,guid){
    this.useEvent(event,guid,function(matchedEvent,index){
    matchedEvent.splice(index,1);
    return true;
  })},

  disable: function(event,guid){
    this.useEvent(event,guid,function(matchedEvent,index){
    matchedEvent[index].enabled = false;
    return true;
  })},

  enable: function(event,guid){
    this.useEvent(event,guid,function(matchedEvent,index){
    matchedEvent[index].enabled = true;
    return true;
  })},

  guid: function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
};
