const dumSentence = "Hi, I'm a dummey sentence. You might use me.";

function reverseSentence(sentence){
    const sentenceSplited = sentence.split(' ')
    const reversedSentenceArr = []
    
    for(let i = sentenceSplited.length - 1; i >= 0; i--){
        reversedSentenceArr.push(sentenceSplited[i]);
    }

    const reversedSentence = reversedSentenceArr.join(' ');
    return reversedSentence;
}

const reversedResult = reverseSentence(dumSentence);
console.log(reversedResult);