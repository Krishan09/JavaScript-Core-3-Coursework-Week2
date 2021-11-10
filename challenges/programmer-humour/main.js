function funnyProgrammer() {
    let apiUrl = `https://xkcd.now.sh/?comic=latest`;
  
    let container = document.getElementById("container");
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.statusText;
        }
      })
      .then((json) => {
        console.log(json);
        let ProgrammingImg = document.createElement("img");
        container.appendChild(ProgrammingImg);
        ProgrammingImg.src = json.img;
        ProgrammingImg.alt = json.alt;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  funnyProgrammer();