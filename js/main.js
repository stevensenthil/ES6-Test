                                        // ES6-TEST:



// //1.  Differnce between let and const keyword?
			var and let create variables that can be reassigned another value. const creates "constant" variables that cannot be reassigned another value.
			var declarations are globally scoped or function scoped while let and const are block scoped. 


// 2.   Which methods are used to avoid Shallow copy?

			Using spread operator.
			Using Object.assign operator.
			Using JSON.stringify and JSON.parse.

// 3.   Difference between map and foreach
			 The map() method returns a new array, whereas the forEach() method does not return a new array. The map() method is used to transform the elements of array, whereas the forEach() method is used to loop through the elements of an array

// 4.  Write the states of promises.

				Resolved
				pending
				Rejected

//5. Difference between promise chaining and promise all.
 				Executes one by one (synchronous). Result of one execution can be passed to the next step. Execution time to fulfill all the promise is comparatively high. Chaining after an error is possible.

//6.   What is the final value of obj.
// const obj = {foo:1}
// obj.bar = 2;
// console.log(obj)

			ans:{foo:1,bar:2}

// 7. const speed = "quick";
// console.log(`The ${speed} brown fox jumps over the lazy dog`)
           ans:The quick brown fox jumps over the lazy dog
		   

//8.  var obj1 = {
//     id: 1,
//     company: "GFG"
// };
// var obj2 = obj1;
// obj2.id = 2;
// console.log(obj1.id);
// console.log(obj2.id);

				ans:2
				ans:2


//9. Input : [3,4,5,6]
//     Output : [3,5,7,9]
// How to achieve this output?
				var input=[3,4,5,6]
				let solu=input.map((value,index) => {
					var c=value+index
					return c
				})
				console.log(solu)

//10.    Which method is used to check all values and return boolean value?
					 every() Method  

// 11.   const value = [35,66,234,56,88,90,22]
//       How to find minimum value?
				const value = [35,66,234,56,88,90,22]
				let x=Math.min(...value)
				console.log(x)




//12.    ES6 Published in 
                   2015  

//13.  var employee =[{
		// name : "Karuppasamy",
		// age : 24,
		// Salary : 25000,
		// level : "junior"
		// },
		// {
		// name : "Samy",
		// age : 21,
		// Salary : 20000,
		// level : "junior"
		// },{
		// name : "Kaviya",
		// age : 22,
		// Salary : 18000,
		// level : "junior"
		// },{
		// name : "Naresh",
		// age : 45,
		// Salary : 100000,
		// level : "senior"
		// },{
		// name : "Prem",
		// age : 24,
		// Salary : 50000,
		// level : "senior"
		// }];

					Output : ["Naresh","Prem"];

					var output=[]
					employee.filter((value) => {
					if(value.level==="senior"){
						output.push(value.name)
					}
				})
				console.log(output)

//14.  const rem = 0
			// rem++;
			// rem++;
			// console.log(rem);

			Ans: Uncaught TypeError: Assignment to constant variable.
			at <anonymous>:2:8  


//15.  function a(){
			// console.log("Hi")

			// }

			// function b(){
			// console.log("Fabevy")
			// }

			// a(b)

			 output=hi


// 16.  var num = 0;
			 console.log(num++);
			 console.log(num++);
			 console.log(++num);
			 console.log(num);		
			 
			 ans:  0,1,3,3

// 17.    Solve the armstrong logic in async/await

					let a=153 
					let count=0
					let sum=0
					let c =a
					let d=c

					function first(){
						return newPromise((p,q)=>{
							while(a!=0){
								b=a%10
								a=(a-b)/10
								count++
							}
							p(count)
						})
					}

					function second(count){
						return newPromise((r,s)=>{
							while(c!=0){
								b=c%10
								a=(c-b)/10
								sum=sum+(b**count)
							}
							r(sum)
						})
					}

					function third(m){
						return newPromise((t,u)=>{
							if(d==sum){
								t("It's Armstrong Number")
							}
							else{
								u("Not Armstrong")
							}
						})
					}

					async function hi(){
						try{
							let l=await first()
							let m=await second(l)
							let n=await third(m)
							console.log(n)

						}

						catch{
							console.log("error")
						}
					}
					hi()




//18.    let obj1 = {
			// "name" : "Monisha"
			// }
			// let obj = Object.assign({},obj1);
			// obj1.position = "QAE"
			// console.log(obj,obj1);


			{ name: 'Monisha' } { name: 'Monisha', position: 'QAE' }



//19.    let person = {name: "Linda"}
				// const members = [person];
				// person = null;
				// console.log(person)
				Ans:  null


//20.  Which methods are used to solve async function into sync?
             Callback
			 promise
			 promise Chaining
			 promise all
			 async await
