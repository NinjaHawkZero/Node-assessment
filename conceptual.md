### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token is a standard used to create access tokens for an application.

- What is the signature portion of the JWT?  What does it do?
The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, a JWT is easily decoded by using the JWT decode() method. This is why it is very important not to use JWT to transmit any sensitive information!

- How can you implement authentication with a JWT?  Describe how it works at a high level.
On a high level, JWT authentication works by signing a token for a user that often has a few relevant details about the user (like username and admin status) in the payload. The token is signed with a secret key known only to the server and transmitted upon an initial registration or login. Then, with every subsequent request to the application, that JWT may be required to be sent along with the request in some fashion (whether it be in the request body, header, query string, etc.) in order to access a particular resource. The JWT is then verified, confirming the signature actually works with the server's secret key, then the user can proceed. Often, user information from the JWT payload may be stored in the session for the life of that request (or possibly longer) in order to determine that you are actually the current user and give you authorization to various resources accordingly.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests test individual components of software.  It is good for isolating a section of code to test.  It can't be used for systems that have a lot of interdependence between different modules.  Intergration test are used for test functionality between different components.  They are good for making sure systems are working well together.  Localizing faults is difficult with integration testing.  End to end tests, test an appliation's flow from start to end.  They are good for testing an entire user experience.  The tests are difficult to maintain as they break with every new feature change.

- What is a mock? What are some things you would mock?
An object under testing may have dependencies on other more complex objects.  To isolate and simulate behaviour you create mock objects.  You could mock things like AJAX requests and impure functions.

- What is continuous integration?
The practice of merging in small code changes frequently, instead of a large change at the end of development.

- What is an environment variable and what are they used for?
Environment variables are predetermined values that are typically used to provide the ability to configure a value in your code from outside of your application.

- What is TDD? What are some benefits and drawbacks?
Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases.  Test coverage under TDD is much higher compared to the conventional development models. This is because the TDD focuses on creating tests for each functionality right from the beginning.  Test driven development results in code that is both dependable, and also as simple as possible, because you’re only adding code where necessary in response to individual test results. Drawbacks, are that it slows down development and you may have to mock a lot of functionality.



- What is the value of using JSONSchema for validation?
JSON Schema is a grammar language for defining the structure, content, and (to some extent) semantics of JSON objects. It lets you specify metadata (data about data) about what an object’s properties mean and what values are valid for those properties.

- What are some ways to decide which code to test?
Using TDD you write your test before you write your code.  So you already know what you're going to test.

- What does `RETURNING` do in SQL? When would you use it?
The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING , you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns.

- What are some differences between Web Sockets and HTTP?
Unlike HTTP, where you have to constantly request updates, with websockets, updates are sent immediately when they are available. WebSockets keeps a single, persistent connection open while eliminating latency problems that arise with HTTP request/response-based methods.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  They are both pretty similar, Express running in Node allows for asynchronous code, which is helpful when sending API requests or event-driven programming.  Express also means you have access to NPM, which includes lot of libraries/plug-ins you can install.   Whereas Flask was designed to only handle one request at a time.  Flask uses Python which is a cleaner/easier language in my view also.   But Express seems to be best framework to use for apps containing a lot of asynchronous code, which may lead to more dynamic apps, so I prefer that.
