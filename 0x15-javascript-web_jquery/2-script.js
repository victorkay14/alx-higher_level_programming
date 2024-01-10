<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Update Text Color on Click</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    // Wait for the document to be ready
    $(document).ready(function() {
      // Attach a click event handler to the DIV#red_header
      $('#red_header').on('click', function() {
        // Find the <header> element and update its text color to red
        $('header').css('color', '#FF0000');
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a <header> element and a DIV#red_header -->
<header>
  <h1>This is the header</h1>
</header>

<div id="red_header">
  <p>Click me to turn the header red!</p>
</div>

<!-- Other content... -->

</body>
</html>
