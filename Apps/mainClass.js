
class Application {
    constructor(name, licenceName) {
        this.licenceName = licenceName;
        this.name = name;
        this.numberOfStars = 0;
    }
    isCC() {
        return (this.licenceName === "Creative Commons") ? true : false;
    }
    like() {
        this.numberOfStars++;
    }
    showStars() {
        return "Number of stars is: " + this.numberOfStars;
    }
    getData() {
        return `${this.name}, ${super.licenceName}, ${this.numberOfStars}`
    }
}

class WebApplication extends Application {
    constructor(name, technology, licenceName) {
        super(name, licenceName);
        this.technology = technology;
    }
    getData() {
        return super.getData() + this.technology;
    }
    isReact() {
        return (this.technology === "React") ? true : false;
    }
}

class MobileApplication extends Application {
    constructor(name, platformName, licenceName) {
        super(name, licenceName);
        this.platformName = platformName;
    }
    getData() {
        return super.getData() + `, ` + this.platformName;
    }
    isAndroid() {
        return (this.platformName === "Android") ? true : false;
    }
}
whatsApp = new MobileApplication("WhatsApp", "Android", "Creative Commons")
