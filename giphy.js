
    let APIKEY = "PVAvm6c7IoI5psxJZ55TgfyPnPaXCvbS";


// this part of code is for main function to generated random gifs
   const main = async () =>{
    
    try{

    let response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);

    let data = await response.json(); // converts json to object.

     console.log(data.data);
       appendingToDom(data.data);
   }
   catch(error){
    console.log(error);
   }
}

// This function contains logic for gif() button , to get gif's based on the search value
const gif = async() =>{
  let query = document.getElementById("search").value;
  if(query == " "){
    alert("Please provide the input text to proceed");
  }
  else{
    try{
      let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`;
      let response = await fetch(url);
      let data = await response.json();
      appendingToDom(data.data);
    }
    catch(error){
      console.log("error", error);
    }
  }
}

// This function contains the logic for sticker() button function, to get stickers based on the search value
const sticker = async () =>{
  let query = document.getElementById("search").value;
  if(query == " ")
  {
    alert("please provide the input text to proceed");
  }
  else{
    try{
        let url =`https://api.giphy.com/v1/stickers/search?api_key=${APIKEY}&q=${query}`;
        let response = await fetch(url);
        let data = await response.json();
        appendingToDom(data.data);
        console.log(data);
    }
    catch(error){
      console.log("error",error);
    }
  }
}

// This function is to append the data to html document body
const appendingToDom = (data) => {
    let gifContent = document.getElementById("gif");
    let stickerContent = document.getElementById("sticker");
    let main = document.getElementById("main");
  
    gifContent.innerHTML = "";
    stickerContent.innerHTML = "";
    main.innerHTML = "";
  
    data.forEach((element) => {
      let image = document.createElement("img");
  
      image.src = element.images.downsized.url;
  
      image.addEventListener("click", () => {
        detail_gif(element.id);
      });
  
      main.append(image);
    });
  };
  
  main();


  function detail_gif(id){
    localStorage.setItem("details", JSON.stringify(id));
    window.location.href = "gifDetails.html";
  }


