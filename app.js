    var lista = [];
    var i = 0;
    function addWords() {
      var text = document.getElementById("add").value;
      lista[i] = text;
      i++;
      text = "";
      document.getElementById("add").value = "";
      return false;
    }
    function searching() {
      var word = document.getElementById("search1").value;
      for (var j = 0; j < lista.length; j++) {
        if (word == lista[j]) {
          alert("The word exists already in the dictionary!");
          word = "";
          document.getElementById("search1").value = "";
          return false;
        }
      }
      alert("The word does not exists in the dictionary!");
      word = "";
      document.getElementById("search1").value = "";
      return false;
    }