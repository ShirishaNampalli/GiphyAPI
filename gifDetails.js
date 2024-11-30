let APIKEY = "PVAvm6c7IoI5psxJZ55TgfyPnPaXCvbS";

const details = async () => {
    let id = JSON.parse(localStorage.getItem("details"));
  
    try {
      let response = await fetch(
        `https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`
      );
  
      let data = await response.json(); //json -object
  
      console.log(data.data);
      appendingToDom(data.data); // array of object
    } catch (error) {
      console.log(error);
    }
  };
  details();
  
  const appendingToDom = (data) => {
    let details = document.getElementById("details");
  
    let image = document.createElement("img");
    image.src = data.images.original.url;
  
    details.append(image);
  };
  
  