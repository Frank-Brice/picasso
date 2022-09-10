// *getting data from an external api

// *use the fetch function

function search() {
  var value = document.getElementById("searchTerm").value;
  fetch(
    `https://pixabay.com/api/?key=19926008-b9e8fc0039d8af8f8061550dc&q=${value}`
  )
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      let result = data.hits; //store the collected hist in your result var
      console.log(result); //test
      //  *print data on the screen
      document.getElementById("container").innerHTML = `
        ${result
          .map((pics) => {
            return `
            <div class="card">
            
              <img src="${pics.webformatURL}">
           
            
              <div class="userDetails">
                     <h4>${pics.user}</h4>
                    <div class="profile">
                    <img src="${
                      !pics.userImageURL
                        ? "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png"
                        : pics.userImageURL
                    }">
                    </div>
              </div>
            </div>
            `;
          })
          .join(" ")}
    
    `;

           if (result.length == 0) {
             document.getElementById(
               "container"
             ).innerHTML = ` <h1>No Result Found for "${value}"</h1> `;
           }
    });

   
}
search();
