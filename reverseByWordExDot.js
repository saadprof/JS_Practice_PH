const dumSentence = "Hi, I'm a dummey sentence. You might use me. And yes, I've some dots on me.";

function reverseByWordExDot(sentence){
    // At first we have to split sentences by dot.
    const splitedByDot = sentence.split('. ');
    
    // Then we take the last sentence containing dot and split it by alphabets.
    const lastSentence = splitedByDot[splitedByDot.length - 1];
    const splitLastSentence = lastSentence.split('');
    
    // Now we exclude the dot from the splited sentence.
    splitLastSentence.pop();

    // And to we join them together to create the same sentence without dot.
    const lastSentenceExDot = splitLastSentence.join('');
    
    console.log(lastSentenceExDot);
}

reverseByWordExDot(dumSentence);