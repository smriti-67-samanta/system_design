const readline = require('readline');

class TicTacToe {
    constructor() {
        this.board = this.initializeBoard();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameOver = false;
        this.diagonalLock = {
            player1: { A1_C3: false, A3_C1: false },
            player2: { A1_C3: false, A3_C1: false }
        };
    }

    initializeBoard() {
        return {
            'A': { '1': '_', '2': '_', '3': '_' },
            'B': { '1': '_', '2': '_', '3': '_' },
            'C': { '1': '_', '2': '_', '3': '_' }
        };
    }

    displayBoard() {
        console.log('\n   1  2  3');
        console.log('A  ' + this.board.A['1'] + '  ' + this.board.A['2'] + '  ' + this.board.A['3']);
        console.log('B  ' + this.board.B['1'] + '  ' + this.board.B['2'] + '  ' + this.board.B['3']);
        console.log('C  ' + this.board.C['1'] + '  ' + this.board.C['2'] + '  ' + this.board.C['3']);
        console.log('');
    }

    async askQuestion(question) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question(question, (answer) => {
                rl.close();
                resolve(answer);
            });
        });
    }

    async registerPlayers() {
        console.log('=== Tic-Tac-Toe (Diagonal-Lock Variant) ===\n');

        // Player 1 registration
        let player1Name = await this.askQuestion('Enter Player 1 name: ');
        let player1Symbol = await this.askQuestion('Enter Player 1 symbol (cannot be "_"): ');
        
        while (player1Symbol === '_') {
            console.log('Error: Symbol cannot be "_". Please choose another symbol.');
            player1Symbol = await this.askQuestion('Enter Player 1 symbol: ');
        }

        // Player 2 registration
        let player2Name = await this.askQuestion('Enter Player 2 name: ');
        let player2Symbol = await this.askQuestion('Enter Player 2 symbol (cannot be "_"): ');
        
        while (player2Symbol === '_' || player2Symbol === player1Symbol) {
            if (player2Symbol === '_') {
                console.log('Error: Symbol cannot be "_". Please choose another symbol.');
            } else {
                console.log('Error: Symbol already taken by Player 1. Please choose another symbol.');
            }
            player2Symbol = await this.askQuestion('Enter Player 2 symbol: ');
        }

        this.players = [
            { name: player1Name, symbol: player1Symbol },
            { name: player2Name, symbol: player2Symbol }
        ];

        console.log('\nPlayers registered successfully!');
    }

    isValidMove(input) {
        const validFormat = /^[A-C][1-3]$/i;
        if (!validFormat.test(input)) {
            return { valid: false, message: 'Invalid format! Use format like A1, B2, C3' };
        }

        const row = input[0].toUpperCase();
        const col = input[1];

        if (this.board[row][col] !== '_') {
            return { valid: false, message: 'Cell already taken! Choose an empty cell.' };
        }

        return { valid: true, row, col };
    }

    checkDiagonalLock(player, row, col) {
        const playerIndex = this.players.findIndex(p => p.symbol === player);
        const playerKey = `player${playerIndex + 1}`;
        
        // Check for A1 and C3 combination
        if ((row === 'A' && col === '1') || (row === 'C' && col === '3')) {
            const otherCorner1 = row === 'A' ? this.board.C['3'] : this.board.A['1'];
            if (otherCorner1 === player) {
                this.diagonalLock[playerKey].A1_C3 = true;
                console.log(`🔒 Diagonal Lock Activated! ${this.players[playerIndex].name} has locked A1-C3 diagonal!`);
            }
        }

        // Check for A3 and C1 combination
        if ((row === 'A' && col === '3') || (row === 'C' && col === '1')) {
            const otherCorner2 = row === 'A' ? this.board.C['1'] : this.board.A['3'];
            if (otherCorner2 === player) {
                this.diagonalLock[playerKey].A3_C1 = true;
                console.log(`🔒 Diagonal Lock Activated! ${this.players[playerIndex].name} has locked A3-C1 diagonal!`);
            }
        }
    }

    isCenterLockedForOpponent(player) {
        const currentPlayerIndex = this.players.findIndex(p => p.symbol === player);
        const opponentIndex = 1 - currentPlayerIndex;
        const opponentKey = `player${opponentIndex + 1}`;
        
        return (this.diagonalLock[opponentKey].A1_C3 || this.diagonalLock[opponentKey].A3_C1) && 
               this.board.B['2'] === '_';
    }

    async makeMove() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        
        console.log(`\n${currentPlayer.name}'s turn (${currentPlayer.symbol})`);
        
        let validMove = false;
        let row, col;

        while (!validMove) {
            const input = await this.askQuestion('Enter your move (e.g., A1, B2, C3): ');
            const validation = this.isValidMove(input);
            
            if (validation.valid) {
                row = validation.row;
                col = validation.col;
                
                // Check if center is locked for opponent
                if (row === 'B' && col === '2' && this.isCenterLockedForOpponent(currentPlayer.symbol)) {
                    console.log('Error: Center cell B2 is locked! You cannot claim it.');
                    continue;
                }
                
                validMove = true;
            } else {
                console.log('Error:', validation.message);
            }
        }

        // Make the move
        this.board[row][col] = currentPlayer.symbol;
        
        // Check for diagonal lock conditions
        this.checkDiagonalLock(currentPlayer.symbol, row, col);

        return { row, col };
    }

    checkWin() {
        const currentPlayer = this.players[this.currentPlayerIndex];
        const symbol = currentPlayer.symbol;

        // Check rows
        for (let row of ['A', 'B', 'C']) {
            if (this.board[row]['1'] === symbol && 
                this.board[row]['2'] === symbol && 
                this.board[row]['3'] === symbol) {
                return true;
            }
        }

        // Check columns
        for (let col of ['1', '2', '3']) {
            if (this.board.A[col] === symbol && 
                this.board.B[col] === symbol && 
                this.board.C[col] === symbol) {
                return true;
            }
        }

        // Check diagonals
        if (this.board.A['1'] === symbol && this.board.B['2'] === symbol && this.board.C['3'] === symbol) {
            return true;
        }
        if (this.board.A['3'] === symbol && this.board.B['2'] === symbol && this.board.C['1'] === symbol) {
            return true;
        }

        return false;
    }

    checkDraw() {
        for (let row of ['A', 'B', 'C']) {
            for (let col of ['1', '2', '3']) {
                if (this.board[row][col] === '_') {
                    return false;
                }
            }
        }
        return true;
    }

    async startGame() {
        await this.registerPlayers();
        this.displayBoard();

        while (!this.gameOver) {
            await this.makeMove();
            this.displayBoard();

            if (this.checkWin()) {
                const winner = this.players[this.currentPlayerIndex];
                console.log(`🎉 Congratulations! ${winner.name} (${winner.symbol}) wins! 🎉`);
                this.gameOver = true;
            } else if (this.checkDraw()) {
                console.log("It's a draw! 🤝");
                this.gameOver = true;
            } else {
                // Switch to next player
                this.currentPlayerIndex = 1 - this.currentPlayerIndex;
            }
        }

        console.log('\nGame Over! Thanks for playing!');
    }
}

// Start the game
const game = new TicTacToe();
game.startGame();