// Thermostat starts at 20 degrees

describe("Thermostat", function() {

  let thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature()).toEqual(20);
  });

  it("increases the temperature with up function", function() {
    expect(thermostat.up()).toEqual(21);
  });

  it("decreases the temperature with down function", function() {
    expect(thermostat.down()).toEqual(19);
  })

  it("has minimum temperature of 10 degrees", function() {
    expect(thermostat.minTemp()).toEqual(10);
  })

  it("temperature can't go below mininum", function() {

     var i;
     for(i = 20; i >= 10; i--) {
       thermostat.down();
     }

    expect(thermostat.down()).toEqual(10);
  });

  it("has a maximum temperature of 25 degrees if power saving mode is on", function() {

    thermostat.powerSavingOn();

    var i;
    for(i=20; i < 24; i++) {
      thermostat.up()
    }
    expect(thermostat.up()).toEqual(25);
  });

  it("has a maximum temperature of 32 degrees if power saving mode is off", function() {
    thermostat.powerSavingOff();

    var i;
    for(i=20; i < 31; i++) {
      thermostat.up()
    }
    expect(thermostat.up()).toEqual(32);

  });

  it("has a reset function which brings the temperature back to 20 degrees", function() {
    expect(thermostat.reset()).toEqual(20);
  });

  it("will return low usage if temperature is below 18 degrees", function() {
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toBe("low-usage");
  });

  it("will return medium usage if temperature is below 25 degrees", function() {
    expect(thermostat.energyUsage()).toBe("medium-usage");
  });

  it("will return high usage if temperature is at or above 25 degrees", function() {
    var i;
    for(i = 20; i < 26; i++) {
      thermostat.up()
    }
    expect(thermostat.energyUsage()).toBe("high-usage");
  });

});
