const quotes = [
    {
        quote : "탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다.",
        author : "몽테뉴",
    },
    //2
    {
        quote : "타인의 대한 존경은 처세법의 제일 조건이다.",
        author : "아미엘",
    },
    //3
    {
        quote : "기다림만으로 사는 사람은 굶어서 죽는다.",
        author : "이탈리아 속담",
    },
    //4
    {
        quote : "끝을 맺기를 처음과 같이 하면 실패가 없다.",
        author : "노자",
    },
    //5
    {
        quote : "힘으로 유지되어야 할 필요가 있는 것은 무엇이나 불운이다.",
        author : "펄벅",
    },
    //6
    {
        quote : "힘으로 사람을 복종시키려 말고 덕으로써 사람을 복종시켜라.",
        author : "맹자",
    },
    //7
    {
        quote : "속이는 말로 재물을 모으는 것은 죽음을 구하는 것.",
        author : "성경",
    },
    //8
    {
        quote : "남자는 야생동물이면 여자는 이 야생동물을 길들이는 자이다.",
        author : "폴리스 바이언",
    },
    //9
    {
        quote : "죄는 미워하고 죄수는 사랑하라.",
        author : "간디",
    },
    //10
    {
        quote : "우선은 자연을 따르라. 그리고 자연을 정복하라.",
        author : "베이컨",
    }
]

//this is object
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[0]);
//0부터 9까지 array에 접근할 function을 Math.random()*10을 이용해 만들자
//그럼 다양한 소숫점을 가진게 나오는데 소수점은 필요가 없으니 Math.round를 사용해서 반올림시켜버린다.
//ceil = 올림 floor = 내림 round = 반올림

// console.log(quotes[Math.floor(Math.random()*10)]);
//[]속에 넣으면 무조건 숫자가 된다.
//이렇게 하면 좋긴한데 명언이 많을떈 어쩔려고?
//length를 이용해서 해보자.

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;