//변수선언
        // var a = 1;
        // b = 2;
        // c = "1"
        // d = '234aaa';

        //let, const
        let a = 1;
        let b = 2;

        console.log(a + b);
        // console.log(c-d)

        const c = 1;
        a = '2';
        console.log(a + b)
        // c = 5; const는 상수라서 값이 재할당이 안됨
        console.log(c)

        let isNum = 'true';
        let isNotNum = false;
        console.log(a === b); //=== 세게 쓰면 타입까지 같냐 ?
        console.log(a !== b); // 타입까지 같지 않나 ?
        console.log(a > b);

        class Person{
            age;
            name;
            constructor(age,name){
                this.age = age;
                this.name = name;
            }
        }

        let p = new Person();
        p.age = 10;
        p.name = "나나"
        console.log(p);

        let p2 = new Person(20,"니니");
        console.log(p2);

        let obj = {"adress": "안양"};
        obj["name"] = "가가";
        obj["age"] = 25
        console.log(obj);

        let key = "age";
        console.log(obj.age);
        console.log(obj["age"]);
        console.log(obj[key])

        let list = [];
        list.push("a");
        list.push("b");
        list.push(1);
        list.push(obj);
        list.push([]);
        console.log(list);
        console.log(list[2]); 

        obj["list"] = list
        console.log(obj);
        console.log(obj.list2);
        console.log(list[100]);

        console.log(new Date());
        console.log(new Date().getTime());
        console.log(new Date(1));
        let 어제 = new Date(new Date().getTime()-1000*60*90*24)
        let 그제 = new Date(new Date().getTime()-1000*60*90*24*2)

        let 한달전 = new Date();
        한달전.setMonth(new Date().getMonth() -1);
        console.log(어제);
        console.log(한달전);


        setTimeout(()=>{
            // alert("하이헬로");
        },1000);

        setInterval(()=>{
        //    window.open("https://naver.com", "_blank");
        },1000);