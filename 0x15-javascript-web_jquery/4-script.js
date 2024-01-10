<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Class on Click</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#toggle_header').on('click', function() {
        $('header').toggleClass('red green');
      });
    });
  </script>
  <style>
    /* Set initial style for red class */
    .red {
      color: red;
    }
    /* Set initial style for green class */
    .green {
      color: green;
    }
  </style>
</head>
<body>

<!-- Your HTML content with a <header> element and a DIV#toggle_header -->
<header class="red">
  <h1>This is the header</h1>
</header>

<div id="toggle_header">
  <p>Click me to toggle the class of the header!</p>
</div>

<!-- Other content... -->

</body>
</html>
