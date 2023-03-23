module.exports = {
    displaySingleRow: () => { return "  |  |  " },
    
    displayThreeRows: () => { 
        let row1 = "  |  |  ";
        let row2 = "  |  |  ";
        let row3 = "  |  |  ";
        const allRows = `${row1}\n${row2}\n${row3}`;
        return allRows; 
    }     
}

