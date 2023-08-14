// for (let i = 0; i < 10; i++) {
//     // const element = array[i];
//     console.log(i);
//     if (i % 2 === 0) {

//         alert(i+"짝수")
//     }else {alert(i+"홀수")
//         }
// }


// setInterval(()=>{
//     for (let i = 0; i < 5; i++) {
//         setTimeout(()=>{
//             console.log(i)
//         },1000*i)
//     }
// },1000)

// setInterval(()=>{
//     console.log(new Date());
// },1000);
console.time("a");
const list = ["안","녕","하","세","요"];
let a =list.length;
console.log(a);

for (let i = 0; i< list.length; i++) {
  console.log(list[i])
    };

    console.table(list);
console.timeEnd("a");

function test() {
    // alert("test")
}
test()

function sum(a,b) {
    return a + b
}
const c = sum(1,2);
console.log(c);

const obj = {name : "park", age : 20, p :sum, m :function (a,b){ //변수명이 없어도 실행이 된다 
    return a-b
}}
const d = obj.p(1,2)
console.log(d);
console.log(obj.m(2,1));

function p1(pa){
    function p2(){
        function p3(p){
            pa = p + 200
            return p+200;
        }
        p = 100;
        p = p3(pa)
        return p3(pa)
    }
    return p2()
}
let p = 0;
console.log(p1(p), p);