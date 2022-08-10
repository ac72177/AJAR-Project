# Plan+
## Project Description
Plan+ (Plan-plus) is a garden-theme planning tool for anyone who wishes to manage and keep track of their their goals. Plan+ helps users to gain a better control of their plans and progress by providing the ability to add tasks under each plan, visualize plan progress, and to view plans based on labels and other attributes. Unlike all the other planning tools, Plan+ presents a fun and comforting user experience by visualizing each plan as a Plant in users' garden, which "grows" as the plan gets completed. 
## Task Requirements 
### Minimal
1. A user must be able to login/signup to their account (completed)
- [x] Signup: username, password, email address
- [x] Login: input email and password or username and password to log in
 
2. A user must be able to create a plan in the UI (completed)
- [x] User can input plan information into fields
- [x] User can save changes to the server to create a new plan in the database
- [x] User can cancel to discard changes on the plan
- [x] Click Create Plan button that prompts open a form
 
3. App must be able to fetch and display plans data inputted from database for a specific user (completed) 
 
### Standard
- [x] A user can delete data from their account
- [x] A user can edit their existing plans
- [x] A user can filter plans based on a specific plan attribute 
- [x] A user can associate Plans with other Tasks
- [x] A user can assign a due date field to a Plan
- [ ] A user can attach files to each plan 
- [x] A user can Aggregate progress for all plans on dashboard
 
### Stretch
- [ ] Notifications to remind users when a plan is due soon
- [x] Can invite other users to join the app
- [ ] Can view profiles of other users 
 


## Project integration with course concepts:
### HTML, CSS, JS
We created our CSS to lay out the styling for the navigation bar beside the pages. React Components that were uncommon such as the Garden and the Summary Bar had their own css files. Javascript and HTML were used in conjunction for our React components and code for Redux. 
### React & Redux
React and Redux were used for our client-side code with React components and Redux actions, reducers and stores. In addition to the functional React components we created, we also used the Material UI library to leverage components that would ensure a consistent experience across the application. Redux handled user-triggered events with thunk functions which made calls to Express in a predictable and traceable way. For example, we used useEffect to dispatch an asynchronous thunk function to fetch our plans and update the store so that our components could render the data and used memoized selectors to filter our state.
### MongoDB
We used an Object Data Modeling library called Mongoose to create a schema/model for our plans, users, and invite collections. We benefit from using the NoSQL format by maintaining different collections to have faster runtime when querying. These collections persisted the data across sessions and enabled us to have an invite users feature. 
### Node & Express
Our backend app is created via Express and receives axios HTTP requests from the frontend to handle the database connections. We have configured the routes and the basic CRUD calls in interacting with the data from the backend. Our API is RESTful.
The backend application used Express to connect the front-end to our database by handling various asynchronous HTTP requests. We created routes to handle the CRUD requests which allowed us to interact with our database. Express serves our API calls in a RESTful manner and is also configured to serve our static client files which are set up in the heroku post-build script. 
### Release Engineering
We deployed our app which is maintained in one repository on Heroku. Since we import libraries for the calendar, Material UI and garden components, our front end must be updated and maintained. To ensure that there are no breaking changes, we have a github action that deploys the front-end which can ensure that the front end is functional.
Above and beyond functionality:
Our application is fully responsive across the pages. Originally our application did not have a specific theme; however we decided to include more graphics when tracking the progress and used plants as a visually pleasing metric. Our UI became more engaging as a result. Additionally, plan+ was designed for individual users; however, we add a social element to the app. Leveraging the fact that we had used authentication with Auth0, a third party platform, we were able to invite users to plans. 

## Next steps:
We have completed our minimal and most of our standards goals. We would like to complete sort and filter as well as our two incomplete stretch goals: notifications and viewing profiles of other Users. Aside from those goals we would like to restructure the Plans collection to have tighter authentication, create a specific visual garden for plans that are shared between users, add a scrollable list view for subplans, and add more functionality to the Calendar Page aside from viewing dates. 

## Contributors:

### Andrea Chan 
worked on the UI for plan modification, the navigation bar, and the filter functionality. She set up the Redux Store, actions, thunks in client in the reducer folder for CRUD actions, set up the API routes for Create, Read and Delete. She also contributed to project management by leading sprint planning and organizing meetings.

### Andrew Chang 
worked on the UI for the overview and landing page. He worked on signup/login workflows and updated the reducers and APIs to handle user creation/authentication. He contributed to the cleaning up of the UI across the pages and added moving graphics to components.

### Jun Choi 
worked on the UI for the individual plan page. He set up the Update endpoint for the backend API and worked on the plan sharing/invite feature. He also added embedded links in the individual plan page. 
### Rene Huang 
worked on the UI for the Garden, the filtering functionalities, and the Calendar. She implemented the progress bar logic that would ensure that the status bars would update when tracking progress. She contributed to UI cleanup and added more functionality to the garden so that you could reach the detailed view of each plant. 


## Rough Sketch

![sketch](/mock.png)
![Login](https://user-images.githubusercontent.com/43710010/170760306-a7b1ab47-3ff9-4357-bea2-10c291b4286c.png)
![Sign up](https://user-images.githubusercontent.com/43710010/170760315-193e63e1-1ed9-4b92-a18e-4fc2b709a846.png)
![MacBook Pro 14_ - 3 (1)](https://user-images.githubusercontent.com/43710010/170760325-655a8baf-7676-42ec-a316-6e1ef7461f2a.png)
![MacBook Pro 14_ - 4](https://user-images.githubusercontent.com/43710010/170760340-e300dde5-e80d-4dbc-8da4-4cd40c71ae7e.png)

