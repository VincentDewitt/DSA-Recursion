let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
  ];
  
  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
  ];
  
  function escape(maze) {
    
    this.maze = maze;
  
    this.traverse = function(column, row) {
      console.log('D')
        if(this.maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(this.maze[column][row] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            this.maze[column][row] = 9;
            if(column < this.maze.length - 1) {
              console.log('R')
                this.traverse(column + 1, row);
            }
            if(row < this.maze[column].length - 1) {
              console.log('D')
                this.traverse(column, row + 1);
            }
            if(column > 0) {
              console.log('L')
                this.traverse(column - 1, row);
            }
            if(row > 0) {
              console.log('U')
                this.traverse(column, row - 1);
            }
        }
    }
};

escape(mySmallMaze)
console.log('anagrams')
function anagrams(prefix, str) {
  if (str.length <= 1) {
      console.log(prefix + str);
  }
  else {
      for (let i = 0; i < str.length; i++) {
          const current = str.substring(i, i + 1);
          const before = str.substring(0, i);
          const after = str.substring(i + 1);
          anagrams(prefix + current, before + after);
      }
  }
};

anagrams('', 'east')