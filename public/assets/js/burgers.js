// Set up of devour button
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var devour = true;
    console.log("checking devour button");
    var newDevourState = {
      devour: devour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devour to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 // Set up of creation of new burger submit button
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#bg").val().trim(),
      devour: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
          location.reload();
      }
    );
  });
});
