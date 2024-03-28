const dumSentence = `Hi, I'm a dummy sentence. You might use me. I wish my dot disappear.`;

// Let's break the problem into chunks.
/*
    ###Problem: Have to remove the dots from the phrase of sentences then reverse the words.

    <Requirement>:  1. Split the sentences into single sentence.
                    2. Remove the dot of last element.
                    3. Reverse the words of every sentence.
                    4. Return the same phrase excluding dots with reversed words.

    (Approach): 1. Create helpingFunction1, that take single sentence, split it, remove the dot, 
                    then join it, and then return the sentence without dot.

                2. Create helpingFunction2, that take single sentence, 
                    split it by word, join them, then return the reversed sentence.

                2. Create main function that take the phrase, pop the last element, 
                    push new elemnt from helpingFunction1.

                3. Then iterate over the new array, use helpingFunction2 to reverse by words of every sentences,
                    and at last again join them in a phrase. 
*/
function mainFunc(phrase){
    const singleSentenceArr = phrase.split('. ');
    const dotRemoved = dotRemover(singleSentenceArr[singleSentenceArr.length - 1]);

    return dotRemoved
}

function dotRemover(sentenceWithDot){
    const sentenceToAlph = sentenceWithDot.split('');
    sentenceToAlph.pop();
    const alphToSentence = sentenceToAlph.join('');
    return alphToSentence;
}

const finalResult = mainFunc(dumSentence);
console.log(finalResult);