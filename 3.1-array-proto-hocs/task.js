function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  //sleep(10); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
  if(arr1.length != arr2.length) {
	return false;
  }
	//
	//for (let i = 0; i < arr1.length; i++ ) {
	//	if (arr1[i] != arr2[i]) {
	//		return false;
	//	} else {
	//		return true;
	//	}
	//}
	
  return arr1.every((item, index) => item == arr2[index]);	
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize(fn, limit) {
  let results = [];
	
  return function() {
    let args = Array.from(arguments);
    //console.log(args);
    let search = results.find((item) => {
      return compareArrays(item.args, args);
	});
		
	if(search) {
		//console.log('Уже считали');
		return results.result;
	};
		
	//console.log('Считаем');
	let finding = fn(...args);
	//console.log(finding);
		
	results.push (
		{
			args: args,
			result: finding
		});
		
	
	if(results.length > limit) {
		results.shift();
	}
	
	//console.log(results);
	return finding;
  }
}
const mSum = memorize(sum, 5); 
//console.log(sum(3, 4)); // 7
//console.log(mSum(3, 4)); // 7

function testCase() {
  let test = [
	 [1,2,3], 
	 [1,2], 
	 [1,2,3], 
	 [1,2], 
	 [9,5,2,4],
	 [1,4,5],
	 [1,1],
	 [2,2],
	 [7,7],
	 [5,5],
	 [9,9],
	 [10,10]
  ]
  
  console.time('test result mSum');
  
  for(let i = 0; i < 10; i++) {
	test.forEach(item => mSum(...item));  
  }
  console.timeEnd('test result mSum');
  
  console.time('test result sum');
  
  for(let i = 0; i < 10; i++) {
	test.forEach(item => sum(...item));  
  }
  console.timeEnd('test result sum');
}


testCase();
