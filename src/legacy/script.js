import React from 'react';
export default function Quotes() {
  const randomNumber = Math.floor(Math.random() * 8);

  let quote = "";

  switch(randomNumber) {
    case 0:
      quote = "You miss 100% of the shots you don't take ayne Gretzky - Hockey's greatest ever player";
      break;
    case 1:
      quote = 'Every time I practice, the luckier I get ary Player - Golfing legend';
      break;
    case 2:
      quote = "Winning isn't everything, but wanting to win is nce Lombardi - NFL player and coach";
      break;
    case 3:
      quote = "I've failed over and over again in my life. And that is why I succeed ichael Jordan - NBA legend";
      break;
    case 4:
      quote = "The more difficult the victory, the greater the happiness in winning. ele - The greatest football player ever";
      break;
    case 5:
      quote = 'Champions keep playing till they get it right illie Jean King - Tennis legend';
      break;
        case 6:
      quote = 'You are never a loser until you stop trying Mike Ditka - former NFL player';
      break;
    case 7:
      quote = 'Half the game is mental, the other half is being mental im McKenny - Hockey player';
    break;
  }
  return (
    quote
  );
}