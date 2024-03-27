const dumSentence = "Hi, I'm a dummey sentence. You might use me. And yes, I've some dots on me.";

function reverseByWordExDot(sentence){
    const splitedByDot = sentence.split('. ');

    console.log(splitedByDot);

}

reverseByWordExDot(dumSentence);