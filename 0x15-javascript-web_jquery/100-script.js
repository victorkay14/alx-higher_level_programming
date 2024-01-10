<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Update Text Color</title>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      // Wait for the document to be fully loaded
      var header = document.querySelector('header');
      if (header) {
        // If <header> element is found, update its text color to red
        header.style.color = '#FF0000';
      }
    });
  </script>
</head>
<body>

<!-- Your HTML content with a <header> element -->
<header>
  <h1>This is the header</h1>
</header>

<!-- Other content... -->

</body>
</html>
