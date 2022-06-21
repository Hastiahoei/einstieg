     
     let num = 6, min = 1, max = 49;
     let zahlen = [];

    
     const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

     const shuffle = data => {
         for(let i = 0; i < data.length; i++){
             // Index, mit dem i den Inhalt tauschen soll
             let zufall = createNumber(0,data.length-1);

             let temp = data[i];
             data[i] = data[zufall];
             data[zufall] = temp;
         }
         return data;
     }

     const createArray = (num, min, max) => {

         let stack = [];
         for (let i = min; i <= max; i++) {
             stack.push(i);
         }
         
         stack = shuffle(stack);

         return stack.splice(0,6);
     }

     const output = data => {
         data.sort((a, b) => a - b);
         console.log(data);
     }

     const init = () => {
         zahlen = createArray(num, min, max);
         output(zahlen);
     }

     init();





      let num = 1000000, min = 0, max = 100;
      let zahlen = [];

      
      const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

      const createArray = (num, min, max) => {
          let myArray = [];
          for (let i = 0; i < num; i++) {
              myArray.push(createNumber(min, max));
          }
          return myArray;
      }

      const getAverage = data => {
          let sum = 0;
          for (let i = 0; i < data.length; i++) {
              sum += data[i];
          }
          return sum / data.length;
      }

      const init = () => {
          zahlen = createArray(num, min, max);
          let durchschnitt = getAverage(zahlen);
          console.log(zahlen);
          console.log(durchschnitt);
      }

      init();





      
      let num = 10, min = 1, max = 6;
      let zahlen = [];


      const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

      
      const createArray = (num, min, max) => {
          let myArray = [];
          for (let i = 0; i < num; i++) {
              myArray.push(createNumber(min, max));
          }
          return myArray;
      }

    
      const init = () => {
          zahlen = createArray(num, min, max);
          console.log(zahlen);
      } 

      init();
