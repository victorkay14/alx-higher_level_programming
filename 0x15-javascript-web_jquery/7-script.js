CTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch Character Name</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      // Make a GET request to the SWAPI URL
      $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
        // Extract the character name from the response data
        var characterName = data.name;
        // Display the character name in the HTML tag DIV#character
        $('#character').text(characterName);
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a DIV#character -->
<div id="character">
  <!-- The character name will be displayed here -->
</div>

<!-- Other content... -->

</body>
</html>

