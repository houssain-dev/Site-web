<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Barre de recherche</title>
<style>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }

  .search-container {
    display: flex;
    border: 2px solid #ccc;
    border-radius: 25px;
    overflow: hidden;
    width: 300px;
  }

  .search-container input {
    border: none;
    padding: 10px;
    flex: 1;
    outline: none;
  }

  .search-container button {
    background: #007BFF;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }

  .search-container button:hover {
    background: #0056b3;
  }
</style>
</head>
<body>

<div class="search-container">
  <input type="text" id="searchInput" placeholder="Rechercher...">
  <button onclick="search()">🔍</button>
</div>

<script>
  function search() {
    const query = document.getElementById("searchInput").value;
    if (query) {
      alert("Tu as recherché : " + query);
      // Exemple : redirection vers Google
      // window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
    }
  }
</script>

</body>
</html>
