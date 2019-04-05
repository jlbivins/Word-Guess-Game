
        //'use strict'  
        var ltr_in = '';
        var blankword = [];
        var word_game = {
            word_array: ['memphis', 'chicago', 'decatur', 'richmond', 'boston', 'detroit',
                'charlotte', 'phoenix', 'wichita', 'nashville', 'buffalo', 'dallas',
                'seattle', 'reno', 'flagstaff', 'topeka', 'miami', 'atlanta', 'birmingham',
                'orlando'],
        };

        var guessed_it = false;
        var randomItem = [];
        var count = 0;
        
        console.log(randomItem);

       // document.querySelector("#myword1").innerText = blankword.join(" "); //beginning dashes
      //  document.querySelector("#myword2").innerText = "count: " + count;     //beginning count

        console.log(blankword);
        var word_display = 'Word: ';
        var displaystring2 = blankword.join(" ");
        var answer = [];
        var displaystring3 = 'G A M E O V E R';

        function start_game(){
          randomItem = word_game.word_array[Math.floor(Math.random() * word_game.word_array.length)];
          count=randomItem.length;
          blankword=[];
          for (var i = 0; i < randomItem.length; i++) {
             blankword.push("_");
        }
        document.querySelector("#myword1").innerText = blankword.join(" ");
        document.querySelector("#myword2").innerText = "count: " + count;
       // document.querySelector("#myword3").innerText = "      ";
                }
  
        document.onkeypress = function (event) { displayWord(event.key) };//displays dashes/letters
      

        function displayWord(key) {
        if (randomItem.indexOf(key) != -1) 
        {
            for (var i = 0; i < randomItem.length; i++) {
                if (randomItem[i] == key) {
                    blankword[i] = key;
                    }

                }

            document.querySelector("#myword1").innerText = blankword.join(" ");

            if(blankword.indexOf("_")==-1){
                document.querySelector("#myword1").innerText = blankword.join(" ");
                alert('you win!!');
                start_game();
            }
        } //end-if            
        else
        {
            if(count > 0){
              count--;
              document.querySelector("#myword2").innerText = "count: " + count;
            }
            else{
                alert('you lose!!'); 
              document.querySelector("#myword1").innerText = randomItem;
             // document.querySelector("#myword3").innerText = "Sorry, you lose!!!!";
              start_game();
            }
        }

   }
   start_game();
