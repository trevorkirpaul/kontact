# kontact

## React App to help me not noob so much

I realized I need to focus more on how I retrieve data from a server and maintain app state whiles keeping the server updated.

For example, in the Tangle app, a post is loaded in its respective component container. When the component mounts, I'll fetch the post from the server then when it's recieved I'll populate local state in teh container with the post info.

I definitely over complicated the process even though it does require a lot of actions and data to be tracked. Each post had records of users that liked, disliked and commented. Each post comment also had around he same data being tracked.

One issue I ran into was updating the window/local state to reflect changes made to the post on the server. These local changes could only be displayed if the server changes actually happened.

If a user wanted to like a post, here's the chain of events:

1. User clicks 'add like'
2. A request is sent to the backend with the postID and the user's token(for auth and ID)
3. On the backend, the post is found, token decoded for userID and the userID is added to an array that tracks likes for the post
4. A response is sent to the frontend, which triggers a dispatch depending on whether the like was successfully added
5. On a successful like, a bool is set to true
6. The component which houses the 'add like' button will get this bool as a prop
7. The text/label and onClick method of the like button will change to 'dislike' since it recieved a true
8. A dialog/alert will also pop up during this event, if the like was successful
9. The dialog/alert closes after 4 seconds of being open, on close it fires another dispatch which resets the boolean tracking a like/dislike

I definitely made this way too complicated and I have conflicting flows. The actual code in Tangle will be different since I have `PostActions.js` deciding what the like button label and method will be on load.

Regardless of all this, I employed a lot of 'hacky' code getting a lot of 'simple' features to work as expected.

I decided to make this project, 'kontact', to focus on how I handle all of these actions whiles maintining a balance of truth between the server and the current display/local app state/ redux state.

I generated a JSON file container 150 contacts. Each contacts has basic info like a name, phone, email, location, ect.

Then I have a very basic express server which sends the data on a get request.

I'll slowly add in features such as creating a new contact, user profiles to save contacts, filter via selectors(something I don't focus on enough) and anything else I can think of.

I always ending up cutting some corners so I kept the setup and initial scope of this app as simple as possible. What I learn once I complete this app will not only save me a ton of time in the future but will save a lot of resources that the app won't need to use. Better state management, structure and efficient component rerenders will be the main goals. I'll also work in a new component library I've been wanting to try.
