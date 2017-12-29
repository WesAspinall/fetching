{
  const ROOT_URL = 'https://jsonplaceholder.typicode.com';
  const USERS = '/users';
  const PHOTOS = '/photos';
  const COMMENTS = '/comments';

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
            <li>${user.name}, ${user.username}, ${user.email}, ${user.website}, ${user.phone}</li>
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
      sliced = res.slice(0,2);
      return sliced
    })
    .then((photos) => {
      photos.forEach((photo) => {
        jqAjaxEl.append(`<img src='${photo.url}'>`);
      });

      $(".jq-loading").remove(); //moved outside of forEach
    });
  }

  // difference between .then() and .done() found here:
  // https://stackoverflow.com/questions/5436327/jquery-deferreds-and-promises-then-vs-done
  function jqGet() {
    $.get(ROOT_URL+COMMENTS).done((res) => {
      sliced = res.slice(0,4);
      sliced.forEach((comment) => $('#comments').append(`<p>${comment.body}</p>`));
      $(".comments-loading").remove();
    });
  }

  fetchData();
  jqAjax();
  jqGet();
}

   