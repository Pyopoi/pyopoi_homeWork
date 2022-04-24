//quote때랑 비슷하게 
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// console.log(chosenImage);

//맨날 html에서 가져오기만 했으니까 이젠 여기서 만들어가지고 추가해보자.
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

//body에 Img를 추가해보자. js에만 존재하니까.

document.body.appendChild(bgImage);
