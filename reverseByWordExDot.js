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

    
    // pop the last sentence with dot.
    singleSentenceArr.pop()
    // push the sentence without dot in the last.
    singleSentenceArr.push(dotRemoved);


    // Using for...of loop to iterate over the array of sentence and 
    // send them to the wordReverser function to reverse the sentence by word.
    for(let singleSentence of singleSentenceArr){
        wordReverser(singleSentence);
    }

    // return dotRemoved
}

// This dot remover function takes a sentence, split it,
// remove the last dot, join and return the sentence again.
function dotRemover(sentenceWithDot){
    const sentenceToAlph = sentenceWithDot.split('');
    sentenceToAlph.pop();
    const alphToSentence = sentenceToAlph.join('');
    return alphToSentence;
}


// This function takes sentences as input, store them into array,
// then iterate over the array containin array of sentence,
// split them by word, reverse the sentence by word,
// join them and return phrase of reversed sentences.
function wordReverser(sentenceToReverse){
    const arrOfSentenceArr = [];
    arrOfSentenceArr.push(sentenceToReverse)
    
    const arrOfReversedSentenceArr = [];

    for(let sentenceArr of arrOfSentenceArr){
        const splitedSentenceByWord = sentenceArr.split(' ');
        for(let i = splitedSentenceByWord.length - 1; i >= 0; i--){
            arrOfReversedSentenceArr.push(splitedSentenceByWord[i]);
        }
    }
    const reversedSentences = arrOfReversedSentenceArr.join(' ');
    console.log(reversedSentences);
}


const finalResult = mainFunc(dumSentence);
console.log(finalResult);