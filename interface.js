$( document ).ready(function() {
  var thermostat = new Thermostat();
  $( "#temperature" ).text(thermostat.temp);
  $( "#temperature-up" ).click(function() {
    thermostat.up();
    $( "#temperature" ).text(thermostat.temp);
  });
  $( "#temperature-down" ).click(function() {
    thermostat.down();
    $( "#temperature" ).text(thermostat.temp);
  });
  $( "#temperature-reset" ).click(function() {
    thermostat.reset();
    $( "#temperature" ).text(thermostat.temp);
  });
  $( "#powersaving-on" ).click(function() {
    thermostat.powerSavingOn();
    $( "#power-saving-status" ).text("ON");
  });
   $( "#powersaving-off" ).click(function() {
    thermostat.powerSavingOff();
    $( "#power-saving-status" ).text("OFF");
  });
});
