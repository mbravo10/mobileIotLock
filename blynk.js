//Sample test file for script 
const blynkToken = 'cCCcQ-JRYBPPQcooxVstS3k9Tdz475Ig';
const Gpio = require('pigpio').Gpio;
const Blynk = require('blynk-library'); 
const blynk = new Blynk.Blynk(blynkToken, options = {
	connector: new Blynk.TcpClient()
});
const v0 = new blynk.VirtualPin(0);
const v1 = new blynk.VirtualPin(1);

var ledPin = 18;
var turnedOn = false;


//Setup pin 
led = new Gpio(ledPin, {mode: Gpio.OUTPUT});

blynk.on('connect', () => console.log('Blynk ready'))
blynk.on('disconnect', () => console.log('DISCONNECT'))

v0.on('write', (param) => {
	console.log(param);
	if(param[0] === '0'){
		turnOn();
	}
	else if(param[0] === '1'){
		turnOff();
	}else{
		blynk.notify('Light turned off with unkown param');
	}
});



		


function turnOn(){
	led.digitalWrite(1);
	turnedOn = true;
	
	v1.write('Light is turned on');
}

function turnOff(){
	led.digitalWrite(0);
	turnedOn = false;
	v1.write('Light has been turned off');
}
