function loader() {
  thisVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById('loader').style.display = 'none';
  document.getElementById('words').style.display = 'block';
}
