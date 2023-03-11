let gaimein = document.getElementById ("ak-gaime-in")
let stockin = document.getElementById("ak-stockIM")
let pricein = document.getElementById("ak-priceIM")

let addbtn = document.getElementById("ak-btn")


addbtn.addEventListener("click", ()=> {
postProducts();

window.location.href ="index.html"


})

const API_URL = 'https://dependable-data-380220-h6ezabenkq-el.a.run.app/'
const ul_products = document.getElementById('products-list')
// let input = document.getElementById("input-value");
// let addButton = document.getElementById("add-btn");
// let ul = document.getElementById("ul-box");


// addButton.addEventListener("mouseover", () => {
//   addButton.style.backgroundColor = "#080d9e";
// });
// addButton.addEventListener("mouseleave", () => {
//   addButton.style.backgroundColor = "darkblue";
// });

// addButton.addEventListener("click", postToDo);
getCategories();
function getCategories() {
  fetch("https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/categories")
    .then((res) => res.json())
    .then((data) =>
    
    {
        // console.log(data.categories[0])
        console.log(data)
        // e._id
        // e.name
        // 
    }
    //   data.todos.forEach((e) => {
    //     ul.innerHTML += `
    // <li id="in-li${e._id}" class="in-li" style="${
    //       e.completed && "background-color: #e9f0f1"
    //     }">
    //     <span id="in-span-1${e._id}" style="${
    //       e.completed && "text-decoration: line-through"
    //     }">${e.title}</span>
    //     <div class='edit-delete-icon'>
    //       <span class='edit' onClick='updateToDo(${JSON.stringify(e)})'>
    //         <i class="fa-regular fa-pen-to-square"></i>
    //       </span>
    //       <span class="in-span-2" onClick=deleteToDo('${e._id}')>
    //         <i class="fa-sharp fa-solid fa-trash-can"></i>
    //       </span>
    //     </div> 
    // </li>
    // `;
    //   })
    )
}

function getCategoriesId(id) {
    fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/categories/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // Access the data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

function postCategories() {
  fetch("https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/categories", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     // name: 
    }),
  })
    .then((res) => {
      if (res.status === 201) {
        // ul.innerHTML = "";
        // input.value = "";
        // getData();
      }
    })
    .catch((err) => console.log(err));
}

function deleteCategories(id) {
  fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/categories${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 200) {
    //   ul.innerHTML = "";
    //   getData();
    }
  });
}

function updateCategories(name) {
  fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/categories${name}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      //name: name
    }),
  }).then((e) => {
    if (e.status === 200) {
    //   ul.innerHTML = "";
    //   getCategories();
    }
  });
}


getProducts();
function getProducts() {
  fetch("https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products")
    .then((res) => res.json())
    .then((data) =>{
        
        console.log(data.products[0])
        // e._id
        // e.title
        // ....

        data.products.forEach(e => {
            ul_products.innerHTML += `
            <li class="row">
            <span class="col-md-2">${e._id.slice(0,6)}</span>
            <span class="col-md-2">${e.title}</span>
            <span class="col-md-2">${e.stock}</span>
            <span class="col-md-2">${e.price}</span>
            <span class="col-md-2">status</span>
            <span class="col-md-2">emrler</span>
        </li>   `
        });
    }
    )
}

function getProductsId(id) {
    fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // Access the data as needed
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


function postProducts() {
  fetch("https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
     title: gaimein.value,
     price: pricein.value,
     stock: stockin.value,
    }),
  })
    .then((res) => {
      if (res.status === 201) {
        getProducts();
      }
    })
    .catch((err) => console.log(err));
}

function deleteCategories(id) {
  fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 200) {
    //   ul.innerHTML = "";
    //   getData();
    }
  });
}

function updateProducts(name) {
  fetch(`https://dependable-data-380220-h6ezabenkq-el.a.run.app/api/products/${value._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    title: '', 
    price: '', 
    stock: '', 
    category: '', 
    sold: ''
    }),
  }).then((e) => {
    if (e.status === 200) {
    //   ul.innerHTML = "";
    //   getCategories();
    }
  });
}



function deleteQaime(){ // qaimeni silmek
return `
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
`
}