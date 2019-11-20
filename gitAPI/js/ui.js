const uiModule = (function () {
    let $search = document.querySelector('.search');

    let $users = document.querySelector('#users');


    function getSearchValue() {
        let place = $search.value;
        $search.value = "";
        return place;
    }

    function generateDisplay(userList) {
        $users.innerHTML = '';
        for (let i = 0; i < userList.length; i++) {
            let $link = document.createElement('a');
            $link.setAttribute('href', userList[i].github);
            $link.setAttribute('target', '_blank')

            let $image = document.createElement('img');
            $image.setAttribute('src', userList[i].image);

            $link.appendChild($image);

            let $name = document.createElement('h2');
            $name.textContent = userList[i].username;

            $div = document.createElement('div');
            $div.setAttribute('class', 'user');

            $div.appendChild($link);

            $div.appendChild($name);

            $users.appendChild($div);
        }

    }

    function generateDisplayRepo(repo, index) {
        let $parent = document.querySelectorAll('.user')[index]

        let $repoInfo = document.createElement('li');
        $repoInfo.textContent = `${repo.name.toUpperCase()} ${repo.description} ${repo.stars} ${repo.language}`;

        $parent.appendChild($repoInfo);
    }

    let canvas = document.getElementById('languageDistribution');
    let ctx = canvas.getContext('2d');  
    let canvas_height = 500;
    let canvas_width = 900;


    function displayLanguageDistribution(languagesX) {
       languages  = {ActionScript: 4,
        C: 5,
        CSS: 46,
        Clojure: 8,
        CoffeeScript: 5,
        ColdFusion: 4,
        CommonLisp: 2,
        Dockerfile: 2,
        EmacsLisp: 2,
        F: 3,
        Go: 59,
        Groovy: 1,
        HTML: 32,
        Haskell: 4,
        Java: 79,
        JavaScript: 167,
        Julia: 1,
        JupyterNotebook: 13,
        Lua: 1,
        Makefile: 3,
        PHP: 45,
        PowerShell: 7,
        Python: 62,
        R: 18,
        Ruby: 57,
        Rust: 1,
        Scheme: 1,
        Shell: 34,
        Smalltalk: 1,
        TypeScript: 27,
        Vimscript: 2,
        VimL: 2,
        Vue: 1}
        console.log("IDE LI",languages); //ide
        
        function pastelColors() {
            var r = (Math.round(Math.random() * 127) + 127).toString(16);
            var g = (Math.round(Math.random() * 127) + 127).toString(16);
            var b = (Math.round(Math.random() * 127) + 127).toString(16);
            return '#' + r + g + b;
        }
        let freq = [];    

        let languageNames = Object.getOwnPropertyNames(languages);

        for(let i = 0; i < languageNames.length; i++){
            freq[i] = languages[languageNames[i]];
        }


        console.log(languageNames);


        let max_frq = Math.max(...freq);
        console.log(max_frq);


        let widthOfColumn = canvas_width / freq.length; 

        let fontSize = 0.8*widthOfColumn;
        let lineHeight = widthOfColumn;
        ctx.font = fontSize + 'px Arial';

         
        
                for (let i = 0; i < freq.length; i++) {
                    let heightOfColumn = freq[i] * canvas_height / max_frq;
        
                    ctx.fillStyle = pastelColors();
                    ctx.fillRect(i * widthOfColumn, canvas_height - heightOfColumn, widthOfColumn, heightOfColumn);
        
                    ctx.fillStyle = '#000000';                   
                    //ctx.textAlign = "center";

                    ctx.save();
                    ctx.translate(i * widthOfColumn, canvas_height);
                    ctx.rotate(-(Math.PI)/2);
                    //ctx.textAlign = 'right';
                    ctx.fillText(languageNames[i], 0, widthOfColumn/2 + lineHeight/2);  
                    ctx.restore();                             
                }
            }
                return {
                    getSearchValue,
                    generateDisplay,
                    generateDisplayRepo,
                    displayLanguageDistribution   }
                
    })();
