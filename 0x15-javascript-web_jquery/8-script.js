<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>List Movies</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      // Make a GET request to the SWAPI URL for films
      $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
        // Extract the array of films from the response data
        var films = data.results;

        // Iterate through each film and append its title to the UL#list_movies
        $.each(films, function(index, film) {
          $('#list_movies').append('<li>' + film.title + '</li>');
        });
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a UL#list_movies -->
<ul id="list_movies">
  <!-- Movie titles will be listed here -->
</ul>

<!-- Other content... -->

</body>
</html>
