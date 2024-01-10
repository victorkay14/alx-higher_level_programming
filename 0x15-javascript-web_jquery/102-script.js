<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Translate Hello</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      // Event handler for the btn_translate click
      $('#btn_translate').on('click', function() {
        // Get the language code from the input field
        var languageCode = $('#language_code').val();

        // Make a GET request to the translation API
        $.get('https://www.fourtonfish.com/hellosalut/hello/', { lang: languageCode }, function(data) {
          // Display the translation of "Hello" in the HTML tag DIV#hello
          $('#hello').text(data.hello);
        });
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with an INPUT#language_code, INPUT#btn_translate, and DIV#hello -->
<input type="text" id="language_code" placeholder="Enter language code">
<input type="button" id="btn_translate" value="Translate">
<div id="hello">
  <!-- The translation of "Hello" will be displayed here -->
</div>

<!-- Other content... -->

</body>
</html>
