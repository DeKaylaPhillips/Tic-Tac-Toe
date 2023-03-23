module.exports = {
    displaySingleRow: () => { return "  |  |  " },
    
    displayThreeRows: () => { 
        let row = "  |  |  ";
        const allRows = `${row}\n${row}\n${row}`;
        return allRows; 
    },

    displaySeparatedRows: () => {
        let row = "    |   |    "
        let dashes = "- - - - - - -"
        const board = `${row}\n${dashes}\n${row}\n${dashes}\n${row}`
        return board
    }  
}


