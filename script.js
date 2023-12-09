function fibonacci(num) {
// your code here
   let a=0,b=1;
   if(num===0) return a;
   if(num===1) return b;
   for(let i=2;i<=num;i++){
	  let curr=a+b;
	  a=b;
	  b=curr;
   }
   return curr;
}

module.exports = fibonacci;
