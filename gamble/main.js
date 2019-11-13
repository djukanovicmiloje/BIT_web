"use strict"
const Continent = {
    ASIA: "Asia",
    EUROPA: "Europa"
};
function Country(name, odds, continent) {
    this.name = name;
    this.odds = odds;
    this.continent = continent;
}

Country.prototype.getAbbr = function () {
    return (this.name[0] + this.name[1]).toUpperCase();
}

function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
}

Person.prototype.getAge = function () {
    var currentDate = new Date();
    return currentDate.getFullYear() - this.dateOfBirth.getFullYear();
}

Person.prototype.getDateOfBirth = function () {
    var date = this.dateOfBirth.getDate();
    var month = this.dateOfBirth.getMonth();
    var year = this.dateOfBirth.getFullYear();
    return date + "." + month + "." + year;
}

function Player(person, betAmount, country) {
    this.person = person;
    this.betAmount = betAmount;
    this.country = country;
}

Player.prototype.getData = function () {
    return this.country.getAbbr() + ", " + this.betAmount + " eur, " + this.person.name + " " + this.person.surname + ", " + this.person.getAge() + " years";
}

function Address(country, city, postalCode, street, number) {
    this.country = country;
    this.city = city;
    this.postalCode = postalCode;
    this.street = street;
    this.number = number;
}

Address.prototype.getFullAddress = function () {
    return this.street + " " + this.number + ", " + this.postalCode + " " + this.city + ", " + this.country.getAbbr();
}

function BettingPlace(address) {
    this.address = address;
    this.listOfPlayers = [];
    this.sumOfBets = 0;
}

BettingPlace.prototype.addPlayer = function (player) {
    if (player instanceof Player) {
        this.listOfPlayers.push(player);
        this.sumOfBets += player.betAmount;
    }
}

BettingPlace.prototype.getData = function () {
    return this.address.getFullAddress() + ", sum of all bets: " + this.sumOfBets + "\n";
}
BettingPlace.prototype.getPlayerList = function () {
    var output = this.getDate();
    for (var i = 0; i < this.listOfPlayers.length; i++) {
        output += this.listOfPlayers[i].getData() + "\n";
    }
    return output
}

function BettingHouse(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
    this.numberOfPlayers = 0;
}

BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
    if (bettingPlace instanceof BettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
        this.numberOfPlayers += bettingPlace.listOfPlayers.length;
    }
}

BettingHouse.prototype.getData = function () {
    output = this.name + "," + this.listOfBettingPlaces.length + " betting places, " + this.numberOfPlayers + " bets";
    for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
        output += this.listOfBettingPlaces.getPlayerList();
    }
}

var serbia = new Country("Serbia", "1", Continent.EUROPA);
var iran = new Country("Iran", "5", Continent.ASIA);

/* console.log(serbia.getAbbr()); */

var person1 = new Person("John", "Doe", new Date(1981, 2, 2));
var person2 = new Person("Mark", "Zuc", new Date(1997, 6, 2));

/* console.log(person2.getAge()); */
/* console.log(person1.getDateOfBirth()); */

var player1 = new Player(person1, 2100, serbia);
var player2 = new Player(person2, 8100, iran);

/* console.log(player1.getData()); */

var address1 = new Address(serbia, "Belgrade", "11000", "Nemanjina", "4");
var address2 = new Address(iran, "Teheran", "666", "Sultanova", "6");

/* console.log(address1.getFullAddress());
 */

