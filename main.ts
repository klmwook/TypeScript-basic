//return 값에 지정을 하지 않고, 받아오는 변수에 데이터 값을 가져오는 것이 오류를 잡기가 좋다
/*
  함수의 return 값에 타입을 지정하면 비효율적인 이유 
    1. 이미 리턴 된 값이기 때문에 타입오류가 뜨더라도 할 수 있는 작업이 없음
    2. 에러자체가 호출단에서 발생하는게 아닌 함수정의단에서 리턴되는 시점에 발생하기 때문에 호출 시 오류 파악이 힘듬
*/

//공통된 함수의 구조는 동일한 인터페이스 적용 가능
interface Calc {
	//any : 어떤 값이 들어와도 허용하는 타입
	(n1: number, n2: number): any;
}

const plus: Calc = (n1, n2) => {
	return n1 + n2;
};

const minus: Calc = (n1, n2) => {
	return n1 - n2;
};

const multiply: Calc = (n1, n2) => {
	return n1 * n2;
};

const divider: Calc = (n1, n2) => {
	return n1 / n2;
};

//| : union 타입은 복수개의 타입을 허용
const info = (num: number | string) => {
	console.log(`${num}번째 방문자 입니다.`);
};

info('3');

const test = (n1: number, n2: number, n3?: number) => {
	// || : falsy한 값이 들어오면 어떤것이든 대체 값 적용
	// ?? : null, indefined가 들어왔을 때에만 대체 값 적용
	// 잘못된 값이 들어오는게 아니라 아예 들어오는 값이 없을 때 대체값을 넣을 때에는 ?? 연산자 활용
	const result = n1 + n2 + (n3 ?? 5);
	return result;
};

console.log(test(1, 2));
