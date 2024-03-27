const dumSentence = "Hi, I'm a dummey sentence. You might use me. And yes, I've some dots on me.";

function reverseByWordExDot(sentence){
    // At first we have to split sentences by dot.
    const splitedByDot = sentence.split('. ');
    
    const lastSentence = splitedByDot[splitedByDot.length - 1];
    const splitLastSentence = lastSentence.split('');

    console.log(splitLastSentence);
}

reverseByWordExDot(dumSentence);