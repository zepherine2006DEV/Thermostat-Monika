function Thermostat() {
  this.savingSwitch = true;
  const DEFAULTTEMP = 20;
  const MINTEMP = 10;
  const MAXTEMPONPOWERSAVING= 25;
  const MAXTEMPONPOWERSAVINGOFF = 32;

  this.defaultTemperature = function() {
      return DEFAULTTEMP;
  };

  this.temp = DEFAULTTEMP;

  this.up = function(){
  // if temp > 25  and power switch is on then we can't have it higher
    if (this.temp < MAXTEMPONPOWERSAVING && this.savingSwitch===true) {
      this.temp++;
    } else if (this.temp < MAXTEMPONPOWERSAVINGOFF && this.savingSwitch===false) {
        this.temp ++;
      }

    return this.temp;
  };

  this.down = function() {

    if (this.temp > MINTEMP) {
      this.temp --;
    }
      return this.temp;
  };

  this.minTemp = function() {
    return MINTEMP;
  };

  this.powerSavingOn = function(){
    this.savingSwitch = true
  };

  this.powerSavingOff = function(){
    this.savingSwitch = false
  };

  this.reset = function() {
    this.temp = DEFAULTTEMP;
    return DEFAULTTEMP;
  }

};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < 18) {
    return "low-usage";
  }
  else if (this.temp >= 25) {
    return "high-usage";
  }
  else {
    return "medium-usage";
  }
};
