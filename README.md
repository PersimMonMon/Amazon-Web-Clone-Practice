Main idea of JavaScript
    1. Save the data
    2. Generate the HTML
    3. Make it interactice
        
        -data is the information about our products
            -example: for amazon we created an array to store objects that contain info about the product 
        
        -.toFixed allows us to set how many decimals we want 
        -order of scripts going into html matters!

How do we know which product to add? 
    DATA ATTRIBUTE 
        -just another HTML attribute
        -allows us to attach any information to an element 
        -has to start with "data-"
        -then give it any name 
        -use .dataset to get all attributes starting with data- 

Note: includes() only work on arrays or strings

Lesson 13: 
    1. Started final Amazon project
    2. Set up and learned Git
    3. Learned the main idea of JavaScript
    4. Created list of products
    5. Made the "Add to Cart" button interactive 
    6. Made cart quantity interactive

        Summary: 
            Learned to generate HTML with backticks. Use a template to recreate more items to display. Template contains a bunch of div to store images, name, count, ratings, etc. We use that template to generate more HTML by making an array and changing item info with backticks and ${}. Stored the objects into the array, each object contains important information stated above. 

            Add function so that when user clicks on Add to cart it updates the cart count. Done by doing .forEach() on every object and added a eventListener to all buttons with querySelectorAll. When user clicks on the button it adds an object to cart variable list in separate script file. To update quantity when user clicks button twice or more it does not make a duplicate, but rather increases quantity of that item User wants to buy. This is done by creating a variable which checks if that object is presenting by comapring (===). Use false and true statements of that variable to check whether to increase quantity or push new object into cart list. 

            Made the cart count interactive. It calculates total items in cart and updates that to the user. This is done by making a variable to record and adding in new items user puts in, should be within the array loop when it checks once a user clicks on add to cart button. Create class and target it with querySelector and change .innerHTML to total cart count. 

Lesson 14: 

        Why use Modules
            -flaw of having multiple scripts in HTML is that you can't reuse another variable 
            -causes naming errors 
            -order of script tags don't matter
        
        When creating a Module: 
            1. Create a file 
            2. Don't load the file with <script>
            3. Opens with live server only 

            Any variables inside the file, will be contained inside the file 
        
            Get a Variable out of a File 
                1. Add type="module" attribute
                2. Export 
                3. Import (always at top of file)

            Note: you don't need to do type="module" if mjs file aka you have Node

            Normalizing the data
                Don't add repetitive objects if you can get the productId and get the rest of its info from the main source, no need to push same info if it lies somewhere else entirely. 

            