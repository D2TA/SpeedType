function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function article (){
  max_length = 1231;
  max_letters = 26; // Start at 0 but ' ' as a letter too.
  max_paragraph = 5;
  article_paragraph = getRandomInt(max_paragraph);

  fonts = [" 'Cinzel', serif", " 'Comic Neue', cursive", "'Libre Barcode 39 Text', cursive"," 'Open Sans', sans-serif"," 'Oswald', sans-serif"," 'Press Start 2P', cursive"," 'Roboto Mono', monospace"];
  

  title = country[getRandomInt(country.length)] + ' ' + dog[getRandomInt(dog.length)] + ' ' + fruits[getRandomInt(fruits.length)];
  titleAuthor = 'By: ' + names[getRandomInt(names.length)] + ' ' + dog[getRandomInt(dog.length)];

  document.getElementById('articleTitle').innerHTML = title;
  document.getElementById('articleAuthor').innerHTML = titleAuthor;

  // Generate Text
  for (let index = 0; index <= article_paragraph; index++) {
    article_length = getRandomInt(max_length);
    word = '';
    for (let letter = 0; letter <= article_length; letter++) {
      word = word + letters[getRandomInt(letters.length)]
    };
    htmltext = htmltext + '<br><br>' + word;
  };
  document.getElementById('article').innerHTML = htmltext;
  
  document.getElementById('article').style.fontFamily = fonts[getRandomInt(fonts.length)];
};