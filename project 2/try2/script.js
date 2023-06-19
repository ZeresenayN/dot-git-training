var hugeImage = document.getElementById("bigImageContainer");



function clicked(e, imgName) {
   let hugeImageSrc=hugeImage.getAttribute('src')
    hugeImage.setAttribute('src',imgName);
   document.getElementById(e.currentTarget.id).setAttribute('src',hugeImageSrc)

}