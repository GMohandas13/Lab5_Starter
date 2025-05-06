# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Lab Partner: Aarush Mehrotra

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No, a unit test would likely not be suitable for this. Sending a message would encapsulate multiple "units" of a program, such as the client, database/server, and a second client. It is our understanding that unit tests are meant to test simpler outcomes than this. Furthermore, it might be a little complex to set up a unit test and actually test the correct output for this scenario. 

This is not a small-scale test, and changing other parts of the application could affect the hardcoded unit tests. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Answer: This is more acceptable. The unit test for such a feature would be far simpler, and wouldn't be affected by changes in other parts of the application. A test like this fits the definition of a unit test far better than in the first question as it isolates one specific factor/aspect of the function being tested.


Link to Expose: https://gmohandas13.github.io/Lab5_Starter/expose.html


Link to Explore: https://gmohandas13.github.io/Lab5_Starter/explore.html
