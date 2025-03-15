//elements
const form = document.getElementById('userForm');
const listBtn = document.getElementById('listBtn');
const userList = document.getElementById('usersList');

let users = [];
let editUser = 0;

//Add users
function addUser(name, age, course) {
    users.push({ name, age, course });
}

function displayUsers() {
    userList.innerHTML = '';
    users.forEach((user, index) => {
        const userHTML = `
            <div class="userItem">
                <h3>${user.name}</h3>
                <p>Age: ${user.age}</p>
                <p>Course: ${user.course}</p>
                <button class="deleteBtn"onclick="deleteUser(${index})">Delete</button>
                <button class="alterBtn"onclick="alterUser(${index})">Alter</button>
            </div>
            `;
        userList.insertAdjacentHTML('beforeend', userHTML);
    });
}

function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}

function toggleUsersList() {
    userList.classList.toggle('hidden');
    if (!userList.classList.contains('hidden')) {
        displayUsers();
    }
}

function alterUser(index) {
    const user = users[index];
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('course').value = user.course;
    editUser = index;
}

function updateUser(name, age, course) {
    if (editUser > 0) {
        users[editUser] = { name, age, course };
        editUser = 0;
    }
}

//form to insert users
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
    addUser(name, age, course);
    form.reset();
    displayUsers();
});

listBtn.addEventListener('click', toggleUsersList);