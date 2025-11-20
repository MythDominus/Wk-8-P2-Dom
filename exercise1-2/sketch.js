let hamlet;
let words = [];

function preload() {
    hamlet = loadStrings('assets/hamlet.txt');
}

function setup() {
    createCanvas(1000, 800);
    background(255);

    words = getWords(hamlet);

    let names = ['Hamlet', 'Ophelia', 'Horatio', 'Denmark'];

    //count occurances
    let counts = names.map(n => countOccurrences(words, n));

    // find max for scaling font size
    let maxCount = max(counts);

    let x = 40;
    let y = 80;

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let count = counts[i];

        //scale font size based on frequency
        let size = map(count, 0, maxCount, 20, 140);

        textSize(size);
        fill(0);
        textAlign(LEFT, TOP);
        text(name, x, y)

        //move downward for next name
        y += size + 10;
    }

}

function draw() {
}

function getWords(lines) {
    let result = [];

    for (let line of lines) {
        let cleaned = line.replace(/[^A-Za-z0-9]/g, " ");
        let parts = cleaned.split(/\s+/); 

        for (let p of parts) {
            if (p.length > 0) {
                result.push(p);
            }
        }
    }
    return result;
}

function countOccurrences(wordArray, target) {
    target = target.toLowerCase();
    let count = 0;

    for (let w of wordArray) {
        if (w.toLowerCase() === target) {
            count++;
        }
    }
    return count;
}




//function getWords(text) {
//    let parts = [];
//    for(let i = 0; i < text.length; i++) {
//    let words = split(text[i], ' ');
//    arts = parts.concat(words);
//    }
//return(parts)
//}

//function countOccurrences(parts,word) {
//
//    let occurences;
//    for (let i =0; i < parts.length; i++) {
//        if (parts[i] === word) {
//            occurences++
//       }
//    }
//    return(occurences);
//}

//let cleaned = line.replace(/[^A-Za-z0-9]/g, "");
//let parts = cleaned.split(/\s+/); 