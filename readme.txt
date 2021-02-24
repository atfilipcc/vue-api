=== Setup ===
Sample project has been provided, it contains code for a simulated API and some basic configuration for the setup.
Project uses npm with Vue CLI and TypeScript.
You may swap this for your own setup if you wish, but it should be using Vue.js, and should preferably be using TypeScript.

You can install and use any framework/library from npm.
You can swap out npm for yarn if that is preferable.

https://www.npmjs.com/get-npm
https://cli.vuejs.org/

1. Install npm and vue-cli
2. Navigate to the project directory
3. Run commands:
	> npm install
	> npm run serve
4. Open your browser with the URL http://localhost:8080/

=== Task Description ===
Your task is to request data from the API and display information to the user.
If you want to use the sample project then continue where we left off in src/app.vue
Either use the sample project as a template, or make your own from scratch.
Use ApiClient class from the project, which provides a set of functions to fetch data with a simulated networking delay.

Do the following:
A.	Fetch and display data from the API
	The page should contain overview of campaigns, users and clients (provided from the API).
	You could have them as tables or lists.
	Feel free to add some tab functionality to swith between them, or simply put them underneath eachother.
B.	Style the app according to your taste in UI and UX


Now you can further build on the solution as you want, here are some examples of what you can do:

1. Add images of users and clients (any stockphotos from google images or similar works)
2. Loading animation while waiting for api to make the request on page load
	- feel free to extend the delay timer in api-client.ts
3. sort and/or filter functionality
	- it is not nescessary to cover all fields, pick a few
	- feel free to use any existing library that you feel solves this
4. input fields and validation to add and edit data
	- the API does not have functions to send data into, so you can skip the final step of sending the input to the API.
5. Use Vue router to split campaigns, users and clients into 3 separate views that is displayed on separate URLs
	- Include a navigation menu for the user to switch between them
6. Include login with input for email and password
	- Active user can be stored in a cookie
	- Emails and passwords has been included in the supplied dataset (api-client.ts)
	- hashing is not part of this task for the sake of simplicity
	- An existing methods named login exists in api-client.ts, but has not been implemented


Questions regarding this assignment can be sent to
christian.lysaker@publicisgroupe.com

=== Delivery ===
You can deliver it in any of the following ways:
1. Compressed archive (.zip or .7z is preferred)
2. Link to git repository (on github or other)
	- Make sure repository is public or otherwise not restricted by login credentials

Send to christian.lysaker@publicisgroupe.com
