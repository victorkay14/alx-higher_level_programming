<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Update Header Text on Click</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#update_header').on('click', function() {
        // Update the text of the <header> element to "New Header!!!"
        $('header').text('New Header!!!');
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a <header> element and a DIV#update_header -->
<header>
  <h1>This is the header</h1>
</header>

<div id="update_header">
  <p>Click me to update the header text!</p>
</div>

<!-- Other content... -->

</body>
</html>
