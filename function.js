// a)print odd numbers in an array 

// (function odd(a=[1,2,3,4,5,6,6]){
//   a.forEach(element =>{
//       if(element%2!=0)
//       console.log("odd")
//   })
// })()

// b)convert all the strings to title caps in the string array

// (function strup(str=['apple','mango','grape','banana','orange']){
//     str.forEach(element => {
//         str = element.toLowerCase().split(' ');
//         for (var i = 0; i < str.length; i++) {
//             console.log(str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1));
//           }
//     });   
// })()

// c) Sum of all numbers in an array

// (function sum(a=[1,5,3,6,3,6]){
//     let s=0
//     for(let i=0;i<=a.length;i++){
//         s=s+a[i]
//     }
//     console.log(s)
// })()

// d) Return all the prime numbers in an array


// (function prime(a=[1,2,3,4,5,6,7,8,9]){
//         a.forEach(element =>{
//               if(element === 2)
//               console.log(element)
//               else if(element%2 === 0 || element === 1)
//               console.log("Not a prime number")
//               else
//               console.log(element)
//         })
// })()

// e) Return all the palindromes in array.

// (function palindrome(a=['peep','rotator','kite','grapler','noon','morning','MADAM']){
//     a.forEach(element => {
//         let arrstr=element.split('')
//         let revstr=arrstr.reverse()
//         let joinstr=revstr.join('')
//         if(element === joinstr)
//         console.log(element)
//         else
//         console.log('Not a palindrome')
//     })

// })()

// f) Return median of two sorted array of same size

// function getMedian(ar1, ar2, n)
// {
//     var i = 0; 
//     var j = 0; 
//     var count;
//     var m1 = -1, m2 = -1;
//     for (count = 0; count <= n; count++)
//     {
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; 
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; 
//             m2 = ar2[j];
//             j++;
//         }
//     }
//     return (m1 + m2)/2;
// }
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
//     console.log("Doesn't work for arrays of unequal size");

// g) Remove duplicates from an array.

// (function duplicate(a=[1,2,3,7,4,6,3,5,7,4]){
//     let arr=[]
//      a.forEach(element =>
//         {
//             if(!arr.includes(element)){
//                 arr.push(element);
//             }
//         })
//         console.log(arr)
// })()

// h) rotate an array by K times

// function RightRotate(a, n, k)
// {
//     k = k % n;
//     for (let i = 0; i < n; i++) {
//         if (i < k) {
//             console.log(a[n + i - k]);
//         }
//         else {
//             console.log((a[i - k]));
//         }
//     }
// }
// let Array = [1, 2, 3, 4, 5];
// let N = Array.length;
// let K = 2; 
// RightRotate(Array, N, K);
  

// ARROW FUNCTIONS:-

// a) print odd numbers in an array

// let odd = () =>
// {
//     a.forEach(element =>{
//               if(element%2!=0)
//               console.log(element)
//           })
// }
// odd(a=[1,23,5,7,9,8,6,2])

// b) Return all the strings to title caps in string array

// let cap = (str) =>{
//     str.forEach(element => {
//         str = element.toLowerCase().split(' ');
//         for (var i = 0; i < str.length; i++) {
//             console.log(str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1));
//           }
//     });
// }
// cap(['apple','mangoes','oranges','grapes','bananas'])

// c) sum of all numbers in an Array.

// let sum = (arr)=>
// {
//    let sum=0
//    for(i=0;i<arr.length;i++)
//    {
//     sum=sum+arr[i];
//    }
//    console.log(sum)
// }
// sum([1,3,5,7,9,8,6,4,2])

// d) Return all the prime numbers in an array

// let prime=(arr) =>{
//     arr.forEach(element =>{
//         if(element === 2)
//         console.log(element)
//         else if(element%2 === 0 || element === 1)
//         console.log("Not a prime number")
//         else
//         console.log(element)
//   })
// }
// prime([1,2,3,4,5,6,7,8,9,10])

// Return all the palindromes in an array

// let palindrome=(str)=>{
//     str.forEach(element => {
//        let spstr = element.split('')
//        let revstr=spstr.reverse()
//        let newstr=revstr.join('')
//        if(newstr===element)
//        console.log(element)
//        else
//        console.log("Not a palindrome")
//     });
// }
// palindrome(['MADAM','NOON','MORNING','PUP','HOST'])