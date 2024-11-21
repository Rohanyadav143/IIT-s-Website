function searchFunction() {
  let searchInput = document.getElementById("search");
  let searchTerm = search.value;
  window.location.href = `https://www.google.com/search?q=${searchTerm}`;
}

setTimeout(function () {
  document.querySelector('.front').style.opacity = '0';
  document.querySelector('.front').style.pointerEvents = 'none';
  document.querySelector('.content').style.display = 'block';
}, 1600);


function vAndO() {
  var form = document.getElementById('form');
  if (form.checkValidity()) {
    alert("Submit Succesfully ! Thank You.")
    window.open("two.html", "_blank");
  } else {
    alert('Please fill all the Required Fields.');
  }
}

function v() {
  window.open("two.html", "_blank");
}