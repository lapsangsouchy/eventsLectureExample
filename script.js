let textBtn = document.getElementById('textBtn');
let colorBtn = document.getElementById('colorBtn');
let imgBtn = document.getElementById('imgBtn');
let changingBox = document.getElementById('changingBox');

textBtn.onclick = function (e) {
  e.preventDefault();
  let text = document.querySelector('h1');
  text.innerHTML = 'Sasuke';
};

const changeColor = (e) => {
  e.preventDefault();

  changingBox.style.backgroundColor = 'blue';
  changingBox.style.color = 'white';
};

function addImg(e) {
  e.preventDefault();
  if (!document.querySelector('img')) {
    let newImg = document.createElement('img');
    newImg.src =
      'https://cdn.pixabay.com/photo/2020/11/14/19/52/sasuke-5743769_1280.png';
    changingBox.append(newImg);
  }
}

colorBtn.onclick = changeColor;
imgBtn.onclick = addImg;

