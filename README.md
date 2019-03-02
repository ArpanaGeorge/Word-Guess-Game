####### Word-Guess-Game

#######Instructions:
Start Word Guess game by pressing Start playing button
Theme is musical instruments.
Randomly Generated string will be one among predefined strings - "piano", "guitar","violin","flute","saxophones","xylophone"

#######Program Logic:
->Clicking start playing button calls startGame function

	->Inside the startGame function:
		- First called function randomStringfunction for getting random strings from predefined array.

		-Then created browser event listening for keyup and invoked function for keyup

			->Inside function for keyup
				-first converted keyed letters to lowercase and pushed it inside an array pressedletterArray and converted it into string pressedletterString using array join method.Then displayed it as the already guessed letters.

				-Then used foreach method for Checking if the guessed letter is correct by comparing with each letter in random array
					-Used Variable flag and  set to 1 when the guessed letter is same as the letter in randomly generated array

				-On completing foreEach method, if flag=0,then Decremented remaining guesses. ie,when guessed letter goes wrong,decremented remaining guesses.

				-Lose condition - Give message "you lose that round" when guesses remaining = 0 and reset guesses remaining = 10 for next round

				-Win Condition - Give message you win when machineRandomString === correctWordString and incremented win by 1.
   					       - Also image for the last correctly guessed word will be displayed.



