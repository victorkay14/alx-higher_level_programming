<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch and Display Translation</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      // Make a GET request to the translation API
      $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
        // Display the translation of "hello" in the HTML tag DIV#hello
        $('#hello').text(data.hello);
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a DIV#hello -->
<div id="hello">
  <!-- The translation of "hello" will be displayed here -->
</div>

<!-- Other content... -->

</body>
</html>
