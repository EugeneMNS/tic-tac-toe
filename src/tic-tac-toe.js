class TicTacToe {
    constructor() {
        this.matrix = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ]
        this.symbol = 'x'
    }

    getCurrentPlayerSymbol() {
        return this.symbol
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] == null){
            this.matrix[rowIndex][columnIndex] = this.symbol
            this.symbol == 'x'? this.symbol = 'o': this.symbol = 'x'
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()){
            return true
        }else{
            return false
        }

    }

    getWinner() {
        let row1 = this.matrix[0][0] + this.matrix[0][1] + this.matrix[0][2]
        let row2 = this.matrix[1][0] + this.matrix[1][1] + this.matrix[1][2]
        let row3 = this.matrix[2][0] + this.matrix[2][1] + this.matrix[2][2]
        let column1 = this.matrix[0][0] + this.matrix[1][0] + this.matrix[2][0]
        let column2 = this.matrix[0][1] + this.matrix[1][1] + this.matrix[2][1]
        let column3 = this.matrix[0][2] + this.matrix[1][2] + this.matrix[2][2]
        let diagonal1 = this.matrix[0][0] + this.matrix[1][1] + this.matrix[2][2]
        let diagonal2 = this.matrix[2][0] + this.matrix[1][1] + this.matrix[0][2]
        switch('xxx'){
            case row1: 
                return 'x';
                break;
            case row2: 
                return 'x';
                break;
            case row3: 
                return 'x';
                break;
            case column1: 
                return 'x';
                break;
            case column2: 
                return 'x';
                break;
            case column3: 
                return 'x';
                break;
            case diagonal1: 
                return 'x';
                break;
            case diagonal2: 
                return 'x';
                break;
        }

        switch('ooo'){
            case row1: 
                return 'o';
                break;
            case row2: 
                return 'o';
                break;
            case row3: 
                return 'o';
                break;
            case column1: 
                return 'o';
                break;
            case column2: 
                return 'o';
                break;
            case column3: 
                return 'o';
                break;
            case diagonal1: 
                return 'o';
                break;
            case diagonal2: 
                return 'o';
                break;
        }
        return null
    

    }

    noMoreTurns() {
        if(this.matrix[0][0] != null && this.matrix[0][1] != null && this.matrix[0][2] != null && this.matrix[1][0] != null && this.matrix[1][1] != null && this.matrix[1][2] != null && this.matrix[2][0] != null && this.matrix[2][1] != null && this.matrix[2][2] != null){
            return true
        }else{
            return false
        }

    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
            return true
        }else{
            return false
        }
    }

    getFieldValue(rowIndex, colIndex) {
         return this.matrix[rowIndex][colIndex]

    }
}

module.exports = TicTacToe;
