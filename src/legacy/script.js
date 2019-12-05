import React from 'react';
export default function Quotes() {
  const randomNumber = Math.floor(Math.random() * 3);

  let quote = "";

  switch(randomNumber) {
    case 0:
      quote = {words: "You miss 100% of the shots you don't take", person: 'Wayne Gretzky', description: 'NHL all time record goalscorer', wiki: 'https://en.wikipedia.org/wiki/Wayne_Gretzky'};
      break;
    case 1:
      quote = {words: 'Every time I practice, the luckier I get', person: 'Gary Player', description: 'Golfing legend - three time masters winner', wiki: 'https://en.wikipedia.org/wiki/Gary_Player'};
      break;
    case 2:
      quote = {words: "Winning isn't everything, but wanting to win is", person: 'Vince Lombardi', description: 'NFL player and coach', wiki: 'https://en.wikipedia.org/wiki/Vince_Lombardi'};
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
      quote = 'Half the game is mental, the other half is being mental Jim McKenny - Hockey player';
    break;
  }
  return (
    <>
    <h2>{quote.words}</h2>
    <h3>{quote.person} ({quote.description})</h3>
    <h4>Find out more about {quote.person} <a href={quote.wiki}>here</a></h4>
    </>
  );
}