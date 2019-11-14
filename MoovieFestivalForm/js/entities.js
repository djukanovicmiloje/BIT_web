/* +++++++++++GENRE++++++++++++++ */

function Genre(name) {
  this.name = name;
}
Genre.prototype.getData = function() {
  return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
};

var genreNameList = ["Action", "Comedy", "Drama", "Horror"];
var genreList = [];

for(var i = 0; i < genreNameList.length; i++){
 genreList.push(new Genre(genreNameList[i]));
}
/* console.log(genreList[0].name); */


/* +++++++++++МOVIE++++++++++++++ */

function Movie(genre, name, length) {
  this.genre = genre;
  this.name = name;
  this.length = length;
}
Movie.prototype.getData = function() {
  return this.name + " " + this.length + "min " + this.genre.name;
};

/* +++++++++++PROGRAM++++++++++++++ */

function Program(date, name) {
  this.name = name;
  this.date = date;
  this.listOfMovies = [];
  this.numberOfMovies = 0;
  this.durationOfProgram = 0;
}
/* Program.prototype.getData = function() {
  var output = this.date + this.durationOfProgram + "min \n";
  for (var i = 0; i < this.listOfMovies.length; i++) {
    output += this.listOfMovies[i].getData() + "\n";
  }
  return output;
}
 */
Program.prototype.getInfo = function(){
  var $info = $('<div>');
  var $title = $('<h4>');
  $title.text(`Name: ${this.name.toUpperCase()}  Duration: ${this.durationOfProgram}min  Date: ${this.date}`);

  $info.append($title);
  $info.append($('<li>').text('List of movies:'));

  for(var i = 0; i < this.listOfMovies.length; i++){
   var $movieInfo = $('<li>');
   $movieInfo.text(this.listOfMovies[i].name);

   $info.append($movieInfo);
  }

  return $info;
}

Program.prototype.addMovie = function(movie) {
  this.listOfMovies.push(movie);
  this.numberOfMovies++;
  this.durationOfProgram += parseInt(movie.length);
};


/* +++++++++++FESTIVAL++++++++++++++ */

function Festival(name) {
  this.name = name;
  this.listOfPrograms = [];
  this.numberOfMovies = 0;
}
Festival.prototype.addProgram = function(program) {
  this.listOfPrograms.push(program);
  this.numberOfMovies += program.numberOfMovies;
};
Festival.prototype.getData = function() {
  var output =
    this.name + " festival has " + this.numberOfMovies + " movie titles \n";
  for (var i in this.listOfPrograms) {
    output += this.listOfPrograms[i].getData();
  }
  return output;
};
