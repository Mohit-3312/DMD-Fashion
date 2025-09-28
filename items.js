document.getElementById("top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  

  //size click button color change

function toggleButton(element) {
  // Toggle the 'active' class on the clicked button
  element.classList.toggle('active');
}