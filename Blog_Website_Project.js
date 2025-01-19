document.addEventListener("DOMContentLoaded", function() {
    // Get all images with the "loading-image" class
    var images = document.querySelectorAll(".loading-image");
  
    // Iterate through each image
    images.forEach(function(image) {
      // Hide the image
      image.style.display = "none";
  
      // Create the loading effect div
      var loadingDiv = document.createElement("div");
      loadingDiv.className = "sk-chase";
      for (var i = 0; i < 6; i++) {
        var dot = document.createElement("div");
        dot.className = "sk-chase-dot";
        loadingDiv.appendChild(dot);
      }
  
      // Insert the loading effect div before the image
      image.parentNode.insertBefore(loadingDiv, image);
  
      // Listen for the image load event
      image.addEventListener("load", function() {
        // Remove the loading effect div once the image is loaded
        loadingDiv.remove();
  
        // Show the image
        image.style.display = "block";
      });
  
      // Listen for the image error event
      image.addEventListener("error", function() {
        // In case of an error, you can handle it here (e.g., display an error message)
        console.error("Image loading failed.");
      });
    });
  });
  
  
