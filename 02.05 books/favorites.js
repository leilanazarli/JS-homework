import { books } from "./js.js";

let favorite=document.querySelector(".favorites")
 
function createFavorites(arr) {
    arr.forEach(element => {
        favorite.innerHTML+=   `
        <li
    class="list-group-item list-group-item-success my-2 d-flex justify-content-between align-items-center rounded"
  >
    <span>${element.publisher}</span>
    <div>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </li>
        `
    });
}
createFavorites(books);