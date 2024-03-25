# angularspringbootFSproject
angular and spring boot full stack project.

##Hej,
##Project Documentation is here 

##textiliatojui

- Folder 'textiliatojui' consists of the Angular project and code for the front end.
- Here I used Primeng, Prime Flex, CSS and Bootstrap for styling.
- I used Signals for state management and Angular stand-alone Framework for building UI.

##springbootBE
- Folder 'springbootBE' consists of the Angular project and code for the backend.
- Here I used Java Springboot, and Spring JPA to store data in a H2 in-memory database.

Steps to Run the Project:
1. First clone the project from GitHub using the command "git clone <git repo URL"
2. Please open the backend SpringbootBE folder in your preferred IDE for example Visual Studio or Eclipse.
3. Run the code with run as Java application on right-clicking on the file "AssignmentApplication.java".
4. After confirming the code is running smoothly, Open the frontend  folder in an IDE that you are comfortable with.
5. After navigating into the right folder run the command "npm install" on your terminal to install all dependencies required.
6. Then run the command "ng serve" in your terminal.
7. Once you notice the terminal shows the link to localhost:4200, click on it by holding the control key which opens your browser with the right screen in front of you.
8. And you can test the website with the right test cases that are required.
9. As we are using H2 in-memory DB, the database will be empty every time you rerun the project.
10. You can provide the data into the DB by clicking the Addtoj button or using Postman with the post URL "http://localhost:8080/addTextiliatoj" and you can see the data using "http://localhost:8080/getTextiliatojList".

   ## How to open H2 memory DB
   after running the spring boot application open the browser with "localhost:8080/h2-console"  which opens a form.

   test the connection and if everything goes well you can see the editor where you can wrrite the query to insert and view the data.

