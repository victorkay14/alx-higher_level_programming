<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manipulate List</title>
  <!-- Include jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <script>
    // Wait for the document to be ready
    $(document).ready(function() {
      // Add item to the list
      $('#add_item').on('click', function() {
        $('<li>').text('Item').appendTo('ul.my_list');
      });

      // Remove the last item from the list
      $('#remove_item').on('click', function() {
        $('ul.my_list li:last-child').remove();
      });

      // Clear all items from the list
      $('#clear_list').on('click', function() {
        $('ul.my_list').empty();
      });
    });
  </script>
</head>
<body>

<!-- Your HTML content with a UL.my_list and DIV#add_item, DIV#remove_item, and DIV#clear_list -->
<ul class="my_list">
  <!-- List items will be added/removed here -->
</ul>

<div id="add_item">
  <p>Click me to add a new item to the list!</p>
</div>

<div id="remove_item">
  <p>Click me to remove the last item from the list!</p>
</div>

<div id="clear_list">
  <p>Click me to clear all items from the list!</p>
</div>

<!-- Other content... -->

</body>
</html>
