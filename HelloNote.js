//console.log('Is Node working'?);

const button1 = document.getElementById('clickme');
const outputtext = document.getElementById('randomtext')

runfunc = () => {
    button1.style.color = 'yellow';
    let randPhrases = ['Go Irish!', 'We Are! ND!', 'Suck it, Michigan', 'Goodbye'];
    let randChoice = Math.floor(Math.random() * randPhrases.length);
    outputtext.innerHTML = randPhrases[randChoice];
}

button1.onclick = () => {
    runfunc();
}

