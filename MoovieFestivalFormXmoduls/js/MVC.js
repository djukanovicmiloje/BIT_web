var dataModule = (function () {

    function Genre(name) {
        this.name = name;
    }

    var genreNameList = ["Action", "Comedy", "Drama", "Horror"];
    var genreList = [];

    for (var i = 0; i < genreNameList.length; i++) {
        genreList.push(new Genre(genreNameList[i]));
    }

    function Movie(genre, name, length) {
        this.genre = genre;
        this.name = name;
        this.length = length;
    }
    Movie.prototype.getData = function () {
        return this.name + " " + this.length + "min " + this.genre.name;
    };

    function createMovie(movie) {
        movieList.push(new Movie(movie.genre, movie.name, movie.length));
    }

    function Program(date, name) {
        this.name = name;
        this.date = date;
        this.listOfMovies = [];
        this.numberOfMovies = 0;
        this.durationOfProgram = 0;
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.numberOfMovies++;
        this.durationOfProgram += parseInt(movie.length);
    };

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfMovies = 0;
    }
    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.numberOfMovies += program.numberOfMovies;
    };

    var movieList = [];
    var programList = [];
    var festivalList = [];

    var lists = {
        genreList: genreList,
        movieList: movieList,
        programList: programList,
        festivalList: festivalList
    }

    return {
        lists: lists,
        createMovie: createMovie
    }

})();

var controllerModule = (function (data, ui) {
    /*ON EVELENT TRIGER THIS*/
    data.createMovie(ui.getMovieData());

})(dataModule, uiModule);

var uiModule = (function (ctrl) {

    var $titleInput = $('#movieTitle');
    var $lengthInput = $('#movieLength');

    function getMovieData() {
        var title = $titleInput.val();
        var length = $lengthInput.val();
        //Missing genre 
        return {
            title: title,
            length: length
        }
    }


    return {
        getMovieData: getMovieData
    }
})(controllerModule)