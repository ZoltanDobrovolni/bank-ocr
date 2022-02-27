const lengthOfChar = 3;
const numberOfCharInAccountNumber = 9; 
export const parseFile = (content: string): string[][][] => {
    // console.log(content);
    // const lines = content.split("\r\n"); // sima /n-el így nem lesz jó gondolom. ki kell próbálni linux-ra konvertáltva
    const lines = content.split("\n").map(item => item.split("\r\n")).flatMap(it => it); // sima /n-el így nem lesz jó gondolom. ki kell próbálni linux-ra konvertáltva
    console.log(lines);
    const linesWithoutBlankLines = lines.filter((_, index) => ((index + 1) % 4 !== 0));
    console.log(linesWithoutBlankLines);
    return chunkArray(linesWithoutBlankLines, 3).map(parseThreeLine)
}

function chunkArray(array: string[], size: number): string[][] {
    if(array.length <= size){
        return [array]
    }
    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
 }

function parseThreeLine(lines: string[]) {
    const emptyMatrix = new Array(numberOfCharInAccountNumber).fill([]).map(() => new Array(lengthOfChar).fill(''));
    const characterMatrix = lines.filter((_, index) => ((index + 1) % 4 !== 0)).reduce((previousValue: string[][], currentValue: string, currentLineIndex: number, array: string[]) => {
        console.log(`${currentLineIndex}. line`, currentValue);
        // const subs = currentValue.match(`/.{1,2}/g`);
        const subs = currentValue.match(/.{3}/g);
        // console.log("subsF: ", subs);
        // console.log(currentLineIndex);
        subs?.forEach((sub, currentCharIndex) => {
            // console.log('XXXXXXXXXXXX  ', currentCharIndex, currentLineIndex);
            previousValue[currentCharIndex][currentLineIndex] = sub
        });
        return previousValue;
    }, emptyMatrix)
    console.log(characterMatrix, characterMatrix[0]);
    return characterMatrix;
}