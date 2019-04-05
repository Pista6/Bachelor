import { pipe } from 'rxjs';

// export class DataFromServer {

//     constructor(
//       public Date: Date,
//       public Open: number,
//       public High: number,
//       public Low: number,
//       public Close: number,
//       public AdjClose: number,
//       public Volume: number,
//     ) {}

  
//   }

  export interface DataFromServer {
    Date: Date,
    Open: number,
    High: number,
    Low: number,
    Close: number,
    AdjClose: number,
    Volume: number,
  }

  // export interface DataFromServer {
  //   x: Date[] | number[];
  //   y: number[];
  //   z: number[];
  // }