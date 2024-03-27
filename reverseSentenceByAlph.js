const dumSentence = "Hi, I'm a dummey sentence. You might use me.";

function reverseSentenceByAlph(sentence){
    const splitedSentence = sentence.split('');
    let reversedByWord = '';

    for(let i = splitedSentence.length - 1; i >= 0; i--){
        reversedByWord += splitedSentence[i];
    }

    return reversedByWord;
}

const reversedByWordResult = reverseSentenceByAlph(dumSentence);
console.log(reversedByWordResult);