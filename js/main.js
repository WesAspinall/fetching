{
  const ROOT_URL = 'https://jsonplaceholder.typicode.com';
  const USERS = '/users';
  const PHOTOS = '/photos';

  const fetchEl = document.querySelector("#fetch");
  const jqAjaxEl = $("#jq");

  const users = [];

//fetch api
  function fetchData(){
    fetch(ROOT_URL+USERS)
    .then((res) => res.json())
    .then((data) => {
      sliced = data.slice(0, 2);
      users.push(...sliced);
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

      fetchEl.innerHTML = html;
    });
  }

//$.ajax
  function jqAjax() {
    $.ajax({
      url: ROOT_URL+PHOTOS,
      method: 'GET'
    })
    .then((res) => {
      sliced = res.slice(0,6);
      return sliced
    })
    .then((photos) => {
      photos.forEach((photo) => {
        $(".jq-loading").remove();
        jqAjaxEl.append(`<img src='${photo.url}'>`);
      })
    });
  }

  fetchData();
  jqAjax();
}

   