//synchronous
//without callback
// const geoCode = ( address) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
//        return data;
//     } , 2000)
    
// }

// const data = geoCode('Philadelphia')
// console.log(data)



//Asynchronous
//with callback

// const geoCode = ( address , callback ) => {
//         setTimeout(() => {
//             const data = {
//                 latitude: 0,
//                 longitude: 0
//             }
//             callback(data)
           
//         } , 2000)
// }

// geoCode('Philadelphia' , (data) => {
//     console.log(data)
// })



// const add = (a , b , callback) => {
//     setTimeout(() => {
//        let sum = a+b;
//          callback(sum) 
//       or  //  callback(a+b)
//     }, 1000);

// }


// add(1,5, (sum) => {
//     console.log(sum)
// })