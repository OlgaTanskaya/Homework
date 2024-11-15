export async function fetchUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    // console.log(users)
    return users
}
fetchUsers()