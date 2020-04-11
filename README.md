# Password_Generator
In this project I created an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

This project helped me learn about randomizing lists and allowing user to set character length.

The javascript I built used lists to pull random characters that includes upper case letters, lower case letters, numbers, and special characters if selected by the user.  

The user will be prompted to answer five questions including:
1. How many characters should be included?
2. Should password include upper case characters?
3. Should password include lower case characters?
4. Should password include numbers?
5. Should password include special characters?

The application utilizes a for loop to generate a random character to the users desired character length.  The character length is restricted to numbers between 8 and 128.  If the user chooses a number below 8 or over 128 the user is told the parameters.  If user does not select any of the character types provided the application will inform user the password is invalid and they will need to try again.

The application will run after a button "click" using an addEventListener function and then uses confirm requests to verify if user would like to use the specific type of character.  
