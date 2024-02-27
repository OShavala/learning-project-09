document.addEventListener("DOMContentLoaded", function() {
    const filterInput = document.getElementById("filterInput");
  
    filterInput.addEventListener("input", function(event) {
      const inputValue = event.target.value;
      console.log("Введено: ", inputValue);
      
    });
  });

  
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
  }
  