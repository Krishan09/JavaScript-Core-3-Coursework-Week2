let bodyText = document.getElementsByTagName('body')[0]
const galleryUl = document.getElementById('gallery');
const dogImgBtn = document.getElementById("btn");



function getDogPhotoGallery(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        let listItm = document.createElement("li");
        let dogImage = document.createElement("img");
        dogImage.src = data.message;
        dogImage.height=200;
        dogImage.width = 200;
        listItm.append(image);
        galleryUl.append(listItm);
    })
    .catch(function(error){
        let errWarningMessage = document.createElement("p");
        errWarningMessage.innerText = `An ${error} has occurred`;
        bodyText.append(errWarningMessage);
    })

}

dogImgBtn.addEventListener("click", getDogPhotoGallery)