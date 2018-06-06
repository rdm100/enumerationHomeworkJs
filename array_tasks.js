var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},
//I did it this way because I was testing docs it would have been easier to do element*element
	square: function (arr) {
		var arr2 = [];
		arr.forEach(function(element){
		var result = Math.pow(element, 2);
			arr2.push(result);
		});
		return arr2;
	},

	sum: function (arr) {
		 total = 0;
		arr.forEach(function(element){
			total += element;
		})
		return total;
	},

	findDuplicates: function (arr) {
		var newArray = [];
		arr.forEach(function(element){
		// if the element is not the last index of element it's a duplicate
		if (arr.indexOf(element) !== arr.lastIndexOf(element)){
				if (!newArray.includes(element)){//stops element being pushed if it's been put in newArray already 
						newArray.push(element);
				}
			}
		})
				return newArray;	

	},

	removeAndClone: function (arr, valueToRemove) {
		  const result = arr.filter(element => element !== valueToRemove);
  		  return result;
	},

	findIndexesOf: function (arr, itemToFind) {
		let results = [];
		arr.forEach(function(element, index) {
			if(element === itemToFind){
				results.push(index);
			}
		});
			return results;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let total = 0;
		arr.forEach(function(number) {
			if(number % 2 === 0){
				total += (number ** 2);
			}
		})
			return total;
	}

}

module.exports = arrayTasks
