var bigimage = document.getElementById("placeHolder");
var img2 = document.getElementById("bigimage1");
var img3 = document.getElementById("bigimage2");
var img4 = document.getElementById("bigimage3");


img2.addEventListener('click', function () {
    bigimage.src = 'img2.jfif';
})
img3.addEventListener('click', function () {
    bigimage.src = 'img3.jfif';

})
img4.addEventListener('click', function () {
    bigimage.src = 'img4.jfif';
})


