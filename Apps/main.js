function Stars() {
    this.numberOfStars = 0;
}

Stars.prototype.like = function () {
    this.numberOfStars++;
}
Stars.prototype.showStars = function () {
    return "Number of stars is: " + this.numberOfStars;
}




function Licence(licenceName) {
    this.licenceName = licenceName;
}
//Licen`````ce Inherits ;r`````s
Licence.prototype = Object.create(Stars.prototype);
Licence.constructor = Licence;


Licence.prototype.isCC = function () {
    return (this.licenceName === "Creative Commons") ? true : false;
}




function Platform(platformName) {
    this.platformName = platformName;
}
//Platform Inherits Licence
Platform.prototype = Object.create(Licence.prototype);
Platform.constructor = Platform;

Platform.prototype.forAndroid = function () {
    return (this.platformName === "Android") ? true : false;
}




function Technology(framework) {
    this.framework = framework;
}
//Technology inherits Licence
Technology.prototype = Object.create(Licence.prototype);
Technology.constructor = Technology;


Technology.prototype.reactBased = function () {
    return (this.framework === "React") ? true : false;
}





function WebApplication(name, framework, licenceName, url) {
    this.name = name;
    Technology.call(this, framework);
    Licence.call(this, licenceName);
    Stars.call(this)
    this.url = url;
}
//Web application Inherits Technology
WebApplication.prototype = Object.create(Technology.prototype);
WebApplication.constructor = WebApplication;


WebApplication.prototype.getData = function () {
    return [this.name, this.framework, this.licenceName, this.numberOfStars, this.url].join(", ")
}


function MobileApp(name, platformName, licenceName) {
    this.name = name;
    Platform.call(this, platformName);
    Licence.call(this, licenceName);
    Stars.call(this);
}
//Mobile App Inherits Platform
MobileApp.prototype = Object.create(Platform.prototype);
MobileApp.constructor = MobileApp;

MobileApp.prototype.getDate = function () {
    return [this.name, this.platformName, this.licenceName, this.numberOfStars].join(", ");
}

var sampleMobile = new MobileApp("whatsup", "Android", "Creative Commons")
