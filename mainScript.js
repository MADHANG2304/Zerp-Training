let addBtn = document.getElementById("addbtn");
let modal = document.getElementById("modalOverlay");
let form = document.getElementById("reminderForm");
let saveBtn = document.getElementById("saveBtn");
let cancelBtn = document.getElementById("cancelBtn");
let emptyDiv = document.getElementById("empty");
let grid = document.getElementById("grid");
let table = document.getElementById("table");
let cardContainer = document.getElementById("cardContainer");
let tableContainer = document.getElementById("tableContainer");
let tableBody = document.getElementById("tableBody");
let emptyMsg = document.getElementById("emptyTableMsg");
// let card = document.querySelector(".card");
// let updateBtn = card.querySelector("#update");
// let statusSpan = card.querySelector("#status");
// let statusSelect = card.querySelector("#status-select");

addBtn.addEventListener("click", (event) => {
  modal.style.display = "flex";
});

saveBtn.addEventListener("click", (event) => {
  emptyDiv.style.display = "none";
});

cancelBtn.addEventListener("click", (event) => {
  modal.style.display = "none";
});

// updateBtn.addEventListener("click", (event) => { 
//   statusSpan.style.display = "none";
//   statusSelect.style.display = "inline-block";
//   statusSelect.value = statusSpan.textContent.split(": ")[1];
// });

grid.addEventListener("click", (event) => {
  cardContainer.style.display = "flex";
  tableContainer.style.display = "none";
  grid.style.backgroundColor = "#f0f0f0";
  grid.style.color = "#000000";
  table.style.backgroundColor = "#5D688A";
});

table.addEventListener("click", (event) => {
    cardContainer.style.display = "none";
    tableContainer.style.display = "flex";
    table.style.backgroundColor = "#f0f0f0";
    table.style.color = "#000000";
    grid.style.backgroundColor = "#5D688A";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
    let title = document.getElementById("title").value;
    let category = document.getElementById("category").value;
    let date = document.getElementById("date").value;
    let priority = document.getElementById("priority").value;
    let note = document.getElementById("note").value;

    let cardContainer = document.getElementById("cardContainer");
    let card = document.createElement("div");
    // card.className = "card";
    card.className = `card card-${priority}`; 
    card.innerHTML = `
    <div class="card-header">
        <h2>${title}</h2>
        <span class="category">${category}</span>
    </div>
    <span class="due-date">Due: ${date}</span>
    <p class="task-desc">${note}</p>
    <div class="card-body">
    <span class="priority ${priority}">${priority.charAt(0).toUpperCase() + priority.slice(1)} Priority</span>
    <span class="status" id="status">Status: Pending</span>
    </div>
    <div class="card-footer">
        <div class="actions">
            <button class="edit-btn" id="update">Edit</button>
            <select class="status-select" id="status-select">
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <button class="delete-btn">Delete</button>
        </div>
    </div>`;
    cardContainer.appendChild(card);
    
    emptyMsg.style.display = "none";

    let row = document.createElement("tr");
    row.className = `row-${priority}`;
    row.innerHTML = `
        <td>${title}</td>
        <td>${category}</td>
        <td>
        <span class="priority ${priority}">
          ${priority.charAt(0).toUpperCase() + priority.slice(1)}
        </span></td>
        <td>${date}</td>
        <td>${note}</td>
        <td>
         <div class="actions">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </div>
        </td>
    `;
    tableBody.appendChild(row);
    
    form.reset();
    modal.style.display = "none";
});