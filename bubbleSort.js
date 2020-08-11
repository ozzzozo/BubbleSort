let arr = [50, 2000, 5, 8, 150, 20, 2840, 173];

console.log(arr)

let temp

for (let j = 0; j < arr.length; j++) {	
    for (var i = arr.length - 1; i >= 0; i--) {
		try {
			if(arr[i] > arr[i + 1]) {
				temp = arr[i + 1]

				arr[i + 1] = arr[i]
				arr[i] = temp
			}
        } catch(err) {continue}
	}
}

console.log(arr)