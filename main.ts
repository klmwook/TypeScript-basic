//Generic : 타입의 선언을 정의단에서 하는 것이 아닌 호출할때 적용
//Generic은 들어오게 되는 타입이 다양할 때 활용

const getLength = <type>(arr: type[]) => {
	return arr.length;
};

const arr1 = [1, 2, 3];
const arr2 = ['red', 'green', 'blue'];
const arr3 = [1, '2', 3];

console.log(getLength<number>(arr1));
console.log(getLength<string>(arr2));
console.log(getLength<number | string>(arr3));
