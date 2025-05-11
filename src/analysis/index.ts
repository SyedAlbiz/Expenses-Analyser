import Papa from 'papaparse';

export function csvParse(csvString: string) {
    var parsedCsv = Papa.parse(csvString);
    var relevantRows: string[][] = [];
    for(let i = 0; i < parsedCsv.data.length; i++){
        var isRelevant = true;
        var row: string[] = parsedCsv.data[i];
        var relevantCols: string[] = [];
        for(let k = 0; k < 3; k++){
            if (row[k] == null){
                isRelevant = false;
            } else {
                relevantCols.push(row[k]);
            }
        }
        if (isRelevant == true){
            relevantRows.push(relevantCols)
        }
    }

    console.table(relevantRows);
    return relevantRows;
}
