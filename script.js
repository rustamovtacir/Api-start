
let div = document.querySelector("div")
fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(data);

        data.users.forEach(x => {
            return div.innerHTML += `<section class="card" style="max-width: 320px">
//   <img src="${x.image}" class="card-img-top" alt="...">
  <div class="card-body">

  <p style="color: #51ff00df; font-weight: bold;">${x.firstName} ${x.lastName}</p>

    <p class="card-text">${x.
                    university

                }</p>
  <p>${x.
                    userAgent
                }</p>
    <h4 class="card-title">${x.email
                }</h4>

    <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</section>`
        })

    })