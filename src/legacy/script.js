import React from 'react';
export default function Quotes() {
  const randomNumber = Math.floor(Math.random() * 8);

  let quote = "";

  switch(randomNumber) {
    case 0:
      quote = {words: "You miss 100% of the shots you don't take", person: 'Wayne Gretzky', 
      description: 'NHL all time record goalscorer', wiki: 'https://en.wikipedia.org/wiki/Wayne_Gretzky'};
      break;
    case 1:
      quote = {words: 'Every time I practice, the luckier I get', person: 'Gary Player', 
      description: 'Golfing legend - three time masters winner', wiki: 'https://en.wikipedia.org/wiki/Gary_Player'};
      break;
    case 2:
      quote = {words: "Winning isn't everything, but wanting to win is", person: 'Vince Lombardi', 
      description: 'NFL player and coach', wiki: 'https://en.wikipedia.org/wiki/Vince_Lombardi'};
      break;
    case 3:
      quote = {words: "I've failed over and over again in my life. And that is why I succeed", person: 'Michael Jordan',
      description: 'NBA legend', wiki: 'https://en.wikipedia.org/wiki/Michael_Jordan'};
      break;
    case 4:
      quote = {words: "The more difficult the victory, the greater the happiness in winning", person: 'Pele',
      description: 'Football great', wiki: 'https://en.wikipedia.org/wiki/Pele'};
      break;
    case 5:
      quote = {words: 'Champions keep playing till they get it right', person: 'Billie Jean King',
      description: 'Tennis legend', wiki: 'https://en.wikipedia.org/wiki/Billie_Jean_King'};
      break;
    case 6:
      quote = {words: 'You are never a loser until you stop trying', person: 'Mike Ditka',
      description: 'former NFL player', wiki: 'https://en.wikipedia.org/wiki/Mike_Ditka'};
      break;
    case 7:
      quote = {words: 'Half the game is mental, the other half is being mental', person: 'Jim McKenny',
      description: 'Hockey player', wiki: 'https://en.wikipedia.org/wiki/Jim_McKenny'};
    break;
    default: quote = {words: "You miss 100% of the shots you don't take", person: 'Wayne Gretzky', 
    description: 'NHL all time record goalscorer', wiki: 'https://en.wikipedia.org/wiki/Wayne_Gretzky'};
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