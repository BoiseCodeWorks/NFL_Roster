
function PlayersController() {

    // var endpointUri = '';
    // var callback = '';

    // var pservice = new PlayersService(endpointUri, callback);

    // get a players from SF

    var loading = true; //Start the spinner
    var apiUrl = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var playerService = new PlayersService(apiUrl, ready);

    var pservice = playerService;
    this.ptest = pservice;

    function ready() {
        loading = false; //stop the spinner
        console.log('in the ready function');
        // debugger
        //Now that all of our player data is back we can safely setup our bindings for the rest of the view.
        // PlayersService.getPlayersByPosition("QB");
        // var playersOnTeam = playerService.getPlayersByPosition("QB");
        // console.log(playersOnTeam);
        // $('some-button').on('click', function () {
        //     var teamSF = playerService.getPlayersByTeam("SF");
        // })
    };

    // this.teamSF =  function () {
    //     var teamSF = playerService.getPlayersByTeam("SF");
    //     console.log(teamSF);
    // };

    this.addPlayer = function addPlayer(e) {
        event.preventDefault();

        var form = event.target
        var name = form['playerName'].value;
        var position = form['playerPosition'].value;
        var number = form['playerNumber'].value;

        pservice.addNewPlayer(name, position, number);
        drawPlayers();
    }

    function drawPlayers() {

        var playerElement = document.getElementById('player-card');
        playerElement.innerHTML = '';
        var template = ``;
        var counter = 0;
        // var players = pservice.getPlayers();
        for (player of pservice.getPlayers()) {
            console.log(player.name);
            template +=
                `<div class="player-card"> 
                <img src="http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" alt="football player" class="img">
                <h4><center>${player.name}</h4>
                <h4>${player.position}</h4>
                <h4>${player.number}</h4> 
                </div>`
            counter++;
        } playerElement.innerHTML += template;
    };

    this.getQB = function getQB() {
        var playersOnTeam = pservice.getPlayersByPosition("QB");
        // console.log(playersOnTeam);
    }

    this.showPlayers = function showPlayers(e) {
        event.preventDefault();
debugger
        var form = event.target
        var position = form['positionRequested'].value;
        var playersOnTeam = pservice.

        var playerElement = document.getElementById('player-card');
        playerElement.innerHTML = '';
        var template = ``;
        var counter = 0;

        for (player of playersOnTeam) {
            console.log(player);
            template +=
                `<div class="player-card"> 
                <img src=${player.photo} alt="football player" class="img">
                <h4><center>${player.name}</h4>
                <h4>${player.position}</h4>
                <h4>${player.number}</h4> 
                </div>`
            counter++;
        } playerElement.innerHTML += template;
        
    }
};