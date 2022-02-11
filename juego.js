/*
let rows =4;
let columns = 8;



function generateMatrix()
{
    
  let matrix = new Array(4)
    .fill('.')
    .map(() => new Array(8).fill('.'));

    
    /*for(let i = 0; i < rows; i++)
    {
        for(let j = 0;j < columns; j++)
        {
            console.log("i: ",i," j: ",j);
            console.log(matrix[i][j]);
        }
    }*/
    /*return matrix;
}

function imprimir(matrix)
{
    console.log(this.matrix);
}

imprimir();


//console.log(generateMatrix());*/
class Matrixx {
    constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
      this.matrix = this.generateMatrix();
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
  
    generateMatrix()
    {
      let matrix = new Array(this.rows)
        .fill('.')
        .map(() => new Array(this.columns).fill('.'));
  
      for (let i = 0; i < 5; i++) {
        let x = this.random(0, this.columns - 1);
        let y = this.random(0, this.rows - 1);
        console.log("x: ",x," y: ",y);
        matrix[x][y] = 'o';
      }
      return matrix;
    }
  
    printMatrix() {
      console.log(this.matrix);
    }
  
  }
  
  let myMatrix = new Matrixx(4, 8);
  
  myMatrix.printMatrix();