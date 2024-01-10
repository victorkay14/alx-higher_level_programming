<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add Class on Click</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#red_header').on('click', function() {
        $('header').addClass('red');
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
  <p>Click me to add the class 'red' to the header!</p>
</div>

<!-- Other content... -->

</body>
</html>
