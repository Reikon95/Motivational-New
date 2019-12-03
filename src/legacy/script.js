const randomNumber = Math.floor(Math.random() * 8);

let quote = "";

switch(randomNumber) {
  case 0:
    quote = "<h1>You miss 100% of the shots you don't take</h1> <p>Wayne Gretzky - Hockey's greatest ever player</p>";
    break;
  case 1:
    quote = '<h1>Every time I practice, the luckier I get</h1> <p>Gary Player - Golfing legend</p>';
    break;
  case 2:
    quote = "<h1>Winning isn't everything, but wanting to win is</h1><p>Vince Lombardi - NFL player and coach</p>";
    break;
  case 3:
    quote = "<h1>I've failed over and over again in my life. And that is why I succeed</h1> <p>Michael Jordan - NBA legend</p>";
    break;
  case 4:
    quote = "<h1>The more difficult the victory, the greater the happiness in winning.</h1> <p>Pele - The greatest football player ever</p>";
    break;
  case 5:
    quote = '<h1>Champions keep playing till they get it right</h1> <p>Billie Jean King - Tennis legend</p>';
    break;
      case 6:
    quote = '<h1>You are never a loser until you stop trying</h1> <p>Mike Ditka - former NFL player</p>';
    break;
  case 7:
    quote = '<h1>Half the game is mental, the other half is being mental</h1> <p>Jim McKenny - Hockey player</p>';
	 break;
}
document.write(`${quote}`);
