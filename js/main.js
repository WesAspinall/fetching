{
  const ROOT_URL = 'https://jsonplaceholder.typicode.com';
  const USERS = '/users';

  const el = document.querySelector("#root");
  const users = [];


  function fetchData(){
    fetch(ROOT_URL+USERS)
    .then((res) => res.json())
    .then((data) => {
      users.push(...data);
      html = users.map((user) => {
        return `
          <ul>
            <li>${user.name}</li>
            <li>${user.username}</li>
            <li>${user.email}</li>
            <li>${user.website}</li>
            <li>${user.phone}</li>
          </ul>
      `
      }).join('');

      el.innerHTML = html;
    });
  }
  
  fetchData();
}

   