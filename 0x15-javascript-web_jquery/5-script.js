<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Add List Item on Click</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    $(document).ready(function() {
      $('#add_item').on('click', function() {
        // Create a new <li> element with the text "Item"
        var newItem = $('<li>').text('Item');
        // Append the new <li> element to the <ul> with class 'my_list'
        $('ul.my_list').append(newItem);
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a <ul> element and a DIV#add_item -->
<ul class="my_list">
  <!-- Existing list items go here -->
</ul>

<div id="add_item">
  <p>Click me to add a new item to the list!</p>
</div>

<!-- Other content... -->

</body>
</html>
