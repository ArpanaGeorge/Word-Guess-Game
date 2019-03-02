

//######Variable declarations
var correctwordarray = [];
var guessesRem = 10;
var wins = 0;
var alreadyGuessed = [];
var correctWordString;
var pressedLetterArray = [];


//#####Clicking start playing button calls startGame function
document.getElementById("Btn").onclick = startGame;

//######startGame function
function startGame()
{
    var j=1;
    var machinerandomarray = [];
    //######Emptying the Arrays on start of game
    pressedLetterArray = [];
    correctwordarray = [];

    //####Setting initial values on start of each game
    guesses.innerHTML = 10;
    win.innerHTML = wins;
    result.style.opacity = "0";

    //######Calling randomStringArray for genereating random letters in an array
    var machineRandomString = randomStringfunction();
    console.log(machineRandomString);
    
    //#######Converting randomstring to array
    for(var i=0;i<machineRandomString.length;i++)
    {
        
        machinerandomarray[i] = machineRandomString.substring(i, j);
        j++;
    }
    //alert(machinerandomarray);

    for(var i=0;i<machinerandomarray.length;i++)
    {
        correctwordarray[i] = "-";
    }
    var initialcorrectWordString = correctwordarray.join("");
    document.getElementById('word').innerHTML = initialcorrectWordString;
    //var machineRandomString = machinerandomarray.join("");

    //********Browser event listening for keyup */
    document.onkeyup = function(event)
    {
        //#####Setting the number of guesses remaining
        guesses.innerHTML = guessesRem;
        var flag = 0;//####Variable will be set to 1 if the guessed letter is correct one
        var blank = "";
        var pressedLetter = event.key.toLowerCase();
        var checkDuplicate=0;
        //alert(pressedLetter);
        //####Checking if pressed letter is a duplicate
        for(var i=0;i<pressedLetterArray.length;i++)
        {
            if(pressedLetterArray[i]===pressedLetter)
            {
                checkDuplicate = 1;
            }
        }
        //####Pushing non-duplicate pressed letter to pressedletter array. Then converted it to string 
        // and displayed it as Letters Already Guessed
        if(checkDuplicate === 0)
        {
        pressedLetterArray.push(pressedLetter);
        }
        pressedLetterString = pressedLetterArray.join("");
        guessedLetters.innerHTML = pressedLetterString;
        //#########Checking if the guessed letter is correct by comparing with each letter in random array
        console.log("pressedLetter"+pressedLetter);
        machinerandomarray.forEach(function (item,index)
        {
            //console.log("item n index -" +item +index);
            
            if (pressedLetter === item) 
            {
             correctwordarray[index]=item;
             console.log(correctwordarray);
             correctWordString = correctwordarray.join("");
             // for(var i=0;i<correctwordarray.length;i++)
             word.innerHTML = correctWordString;
             flag=1;//####Variable set to 1 when the guessed letter is same as the letter in randomly generated array
             }
        
        });
        //########Decrementing remaining guesses when guessed letter goes wrong
        if (flag===0 && checkDuplicate ===0)
        {
            guessesRem--;
            guesses.innerHTML = guessesRem;
        }
        // 

        //########Lose Condition - Giving alert you lose when guesses remaining = 0
        if(guessesRem === 0)
        {
            result.style.opacity = "1";
            result.innerHTML = "You are hanged. Press button to start playing again";
            result.style.backgroundColor = "red";
            result.style.color = "yellow";
            guessesRem = 10;
            guessedLetters.innerHTML = blank;
        }

        //########Win Condition - Giving alert you win when machineRandomString === correctWordString
        if( machineRandomString === correctWordString)
         {
            result.style.opacity = "1";
             result.innerHTML = "You Win a point. Press button to start playing again";
             guessesRem = 10;
            wins++;
            guessedLetters.innerHTML = blank;
            result.style.backgroundColor = "yellow";
            result.style.color = "red";
            if(correctWordString === "flute")
            {
                images.src = "assets/images/flute.jfif "
            }
            if(correctWordString === "guitar")
            {
                images.src = "assets/images/guitar.jfif "
            }
            if(correctWordString === "violin")
            {
                images.src = "assets/images/violin.jfif "
            }
            if(correctWordString === "piano")
            {
                images.src = "assets/images/piano.jfif "
            }
            if(correctWordString === "saxophones")
            {
                images.src = "assets/images/saxo.jfif "
            }
            if(correctWordString === "xylophone")
            {
                images.src = "assets/images/xylo.jfif "
            }
         }
    
    }
}


//Function Definitions
//##### Function randomstringArray for genereating random letters in an array
function randomStringfunction()
{
    

    var randomarr = ["piano", "guitar","violin","flute","saxophones","xylophone"];
    var randomString = randomarr[Math.floor(Math.random() * randomarr.length)];
    //alert(randomString);
    return randomString;
}




