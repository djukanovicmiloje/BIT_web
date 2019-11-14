var $titleInput = $('#movieTitle');
var $lengthInput = $('#movieLength');
var $genereSelect = $('#movieGenre');

/* +++++++++++genereta ganere options++++++++++++++ */

for(var i = 0; i < genreList.length; i++){

 var selectOption = $('<option>'); 

 selectOption.attr('value',i);
 selectOption.text(genreList[i].name);

 $genereSelect.append(selectOption);
}


/* +++++++++++Create Movie++++++++++++++ */

var $createMoviBtn = $('#createMovieBtn');
var $movieList = $('#movieList');
var movieList = [];


Array.prototype.last = function(){
 return this[this.length -1];
}

function createMovie(){
 var title = $titleInput.val();
 var lenght = $lengthInput.val();

 var selectedGenreID = $genereSelect.find(':selected').val(); 
 var genre = genreList[selectedGenreID];
 console.log(genre);
 

 movieList.push(new Movie(genre, title, lenght));

}

function resetMovieForm(){
 $titleInput.val("");
 $lengthInput.val("");
}

var $movieOptions = $('#movieOptions');



function updateMovieList(){
 var $movieInfo = $('<li>');
 $movieInfo.text(movieList.last().getData());
 $movieList.append($movieInfo);

 /* +++++++++++create movie chkbox++++++++++++++ */
 var $movieDiv = $('<div>');

 var $movieCheckBox = $('<input>');
 $movieCheckBox.attr('type','checkbox');
 $movieCheckBox.addClass('movieChk');
 $movieCheckBox.attr('value',movieList.length - 1); 

 $movieDiv.append($movieCheckBox);
 $movieDiv.append(movieList.last().name);

 $movieOptions.append($movieDiv);
 
}

$createMoviBtn.click(function(){
 createMovie();
 resetMovieForm();
 updateMovieList(); 
})

/* +++++++++++Create Program++++++++++++++ */

var programList = [];
var $createProgramBtn = $('#createProgramBtn');
var $programList = $('#programList');
var $programNameInput = $('#programName');

function createProgram(){
 var newProgram = new Program($('#programDate').val(), $programNameInput.val());

 $movieOptions.find(':checked').each(function (index, chkBoxNode){
  var chkBox = $(chkBoxNode);  
  newProgram.addMovie(movieList[chkBox.val()]);
 });


 programList.push(newProgram);
}

var $programOptions = $('#programOptions')

function updateProgramList(){

 $programList.append(programList.last().getInfo());

/* +++++++++++create program chkbox++++++++++++++ */
 
 var $programDiv = $('<div>');

 var $movieCheckBox = $('<input>');
 $movieCheckBox.attr('type','checkbox');
 $movieCheckBox.addClass('movieChk');
 $movieCheckBox.attr('value',programList.length - 1); 

 $programDiv.append($movieCheckBox);
 $programDiv.append(programList.last().name);

 $programOptions.append($programDiv);

}

function resetProgramForm(){
 $movieOptions.find(':checked').each(function(index, node){
  var box = $(node);
  box.prop('checked',false);
 })
}

$createProgramBtn.click(function(){
 createProgram();
 updateProgramList();
 resetProgramForm();
})

/* +++++++++++Create Festival++++++++++++++ */

var festivalList = [];
var $createFestivalBtn = $('#createFestivalBtn');
var $festivalList = $('#festivalList');
var $festivalNameInput = $('#festivalName');
var $programOptions = $('#programOptions');

function createFestival(){
 var newFestival = new Festival($festivalNameInput.val());

 $programOptions.find(':checked').each(function (index, chkBoxNode){
  var chkBox = $(chkBoxNode);  
  newFestival.addProgram(programList[chkBox.val()]);
 });

 festivalList.push(newFestival);
}


 




