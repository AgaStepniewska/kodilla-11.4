function Phone(brand, price, color, simslot, package) {
   this.brand = brand; 
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
	this.simslot = simslot;
	this.package = package;

}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "." + " This is " + this.simslot + ", and it comes with " + this.package + ".");
}
var iPhone6S = new Phone("Apple", 4550, "silver", "very good, branded phone", "64 Gb Memory Card");
var galaxyS6 = new Phone("Samsung", 2300, "white", "dual SIM", "very good quality headphones");
var OnePlusOne = new Phone("OnePlus", 1500, "black", "dual SIM", "a nice, leather flip cover case");

function Parameter(system, weight, camera, battery, screen) {
	this.system = system;
	this.weight = weight;
	this.camera = camera;
	this.battery = battery;
	this.screen = screen;
}
Parameter.prototype.printInfo = function() {
	console.log("Technical specifications: " + "\n" + "Weight: " + this.weight + "\n" + "Camera: " + this.camera + "\n" + "Battery: " + this.battery + "\n" + "Screen parameters: " + this.screen + ".");
}
var IphoneParam = new Parameter("iOS 9", "143g", "12-megapixel camera, Live Photos with stabilization, Autofocus with Focus Pixels", "Built-in rechargeable lithium-ion battery", '4,7", 1334 x 750px');
var galaxyParam = new Parameter("Android 5.0 Lollipop", "138g", "16MP back camera and 5MP front camera", "2,550 mAh battery", "5.1-inch Super AMOLED display");
var OnePlusParam = new Parameter("Android 4.4 KitKat", "162g", "13 Mpx", "Li-Po 3100 mAh", '1080 x 1920 px (5,50") 401 ppi');
iPhone6S.printInfo();
IphoneParam.printInfo();
galaxyS6.printInfo();
galaxyParam.printInfo();
OnePlusOne.printInfo();
OnePlusParam.printInfo();