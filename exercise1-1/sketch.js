let imdbtext = []
let currentText1 = '';
let currentText2 = '';

function preload() {
  imdbtext = loadStrings('assets/imdb_labelled.txt');
}

function setup() {
    createCanvas(400, 400); 
    textSize(20);
    textAlign(CENTER)
    randomImdbText();
}

function draw() {
    background(0);
    if (currentText2 === '1') {
        fill(0, 0, 255);
    } else {
        fill(255, 0, 0);
    }

    text(currentText1, 20, height - 300, width - 40);
}

function mousePressed() {
    randomImdbText()
}

function randomImdbText() {
    let line = random(imdbtext);

    let parts = split(line, '\t');

    currentText1 = parts[0];
    currentText2 = parts[1].trim();
}

