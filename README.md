# Library
This will be a simple app where you can add the books you have read along with their author. I will use Object oriented programming in this project and hopefully you like it.

Step 1 Planning 

I will first make the basic functionality of the app which will be clicking a button and a form appears where you can enter the name of the book , name of the author , number of pages in the book , and a checkbox asking if you have read it or not.I will not worry about styling the button nor the form but I will give it some basic allignment.


The plan:
* first I need to add a event listner to the add a book button and make the form for filling a book appear
we can do this by adding a class on clicking the button to the form div in our html we can add a class of active to the div so which will have a height parameter defined

* After this step we need an Object Book that will contain all these values. For this we will first need to make an object we will use a constructor for this since I will allow the users to add multiple books.