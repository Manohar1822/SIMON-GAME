var running=false;

function solve(userClickedPattern, gamePattern){
    var run=true;
    $(".starter").text("Restart Game");
        //alert(gamePattern.length-1);
    if(running===false){
    var buttonColors=["green","red","yellow","blue",];
    var level=0;
    var i=0;
    var returner=true;
        //i=0;
        //level=0;
        //userClickedPattern.length=0;
        //gamePattern.length=0;
        running=true;
        $("h1").text("Level "+level);
        $(".starter").on("click",playAgain);
        function playAgain(){
            location.reload();
        }
        setTimeout(nextSequence,400);
        function nextSequence() {
            i=0;
            userClickedPattern.length=0;
            var randomNumber=Math.floor(Math.random()*4);
            var randomChosenColor=buttonColors[randomNumber];
            gamePattern.push(randomChosenColor);
            $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            playSound(randomChosenColor);
            level++;
            $("h1").text("Level "+level);
        }

       
            $(".btn").click(function(){
                if(run===true){
                    var userChosenColour=this.id;
                userClickedPattern[i]=userChosenColour;
                playSound(userChosenColour);
                animatePress(userChosenColour);
                checkAnswer(userClickedPattern);
                }
                else{
                    $("h1").text("GAME-OVER Press Any key to start. Highest Level= "+level);
                    $("body").addClass("game-over");
                    var audio=new Audio('sounds/wrong.mp3');
                    audio.play();
                    setTimeout(function() {
                        $("body").removeClass("game-over");
                    }, 100);
                    $("body").on("keydown",function () {
                        if(run ===false){
                            //running=true;
                            //alert("Going to refresh");
                            location.reload();
                            /*var userClickedPatter=[];
                            var gamePatter=[];
                            solve(userClickedPatter,gamePatter);*/
                            //alert("Out of solve func");
                        }
                    });
                }                
                //alert(userChosenColour)
            });
        
        

        function checkAnswer() {
            var n=gamePattern.length-1;
            if(userClickedPattern[i]!==gamePattern[i]){
                //alert("GAME-OVER");
                $("h1").text("GAME-OVER Press Any key to start. Highest Level= "+level);
                $("body").addClass("game-over");
                var audio=new Audio('sounds/wrong.mp3');
                audio.play();
                setTimeout(function() {
                    $("body").removeClass("game-over");
                }, 100);
                //alert(i+" Completed "+n);
                run=false;
                $("body").on("keydown",function () {
                    if(run ===false){
                        //running=true;
                        //alert("Going to refresh");
                        location.reload();
                        
                        //alert("Out of solve func");
                    }
                });
                $(".starter").text("Play Again");
            }
            
            else if(i===n){
                setTimeout(nextSequence,400);
            }
            else{
                i++;
            }
        }
        
    }   
}
    $("body").on("keydown",startGame);
    $(".starter").on("click",startGame);


    function startGame() {
        if(running ==false){
            //running=true;
            var userClickedPattern=[];
            var gamePattern=[];
            solve(userClickedPattern,gamePattern);
            
            //alert("Out of solve func");
        }
    }

function playSound(btnColors) {
    var audio=new Audio('sounds/'+btnColors+'.mp3');
    setTimeout(function() {
        audio.play();
    }, 100);
    
}

function animatePress(params) {
    $("#"+params).addClass("pressed");
    setTimeout(function() {
        $("#"+params).removeClass("pressed");
    }, 100);
}  