const url = "https://jsonplaceholder.typicode.com/users";

const listUsers = async () =>{
    const response= await fetch(url);
    const users = await response.json();
    console.log(users);

    let tableBody =`` ;
    users.forEach((user,index) => {
        // console.log(user);
        tableBody += `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.company.name}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
        </tr>
        `
    });
       // document.getElementById("tableBody_users").innerHTML = tableBody;
       tableBody_users.innerHTML = tableBody; 
};


window.addEventListener("load",function(){
    listUsers();
});