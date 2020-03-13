This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

/////////////////////////////////////////////////////


         MY README COMMENT START FROM HERE - IDOWU  (ID)
  
////////////////////////////////////////////////////
Stack Used
- React Hook
- Suspense and Context API
- Implement Redux Principle with Context API and Hook

A component trigger the action and action is dispatch and tell the REDUCER the TYPE of Action need to dispatch then Update the Store and the component bring the update to the UI

//Create representation of my Store in store.tsx

- create initial state Object
- Reducer function
- Store Proviver - It provides all my components in the app with the access to the store the return <store.Provider></store.Provider>
#Store.tsx
Store provider will receive props and ensure that the VALUE (value={{state, dispatch}}>) is get across the component.

// InitialState
In my initial state Object, I set up empty array for both communities array and homes array.

const initialState = {
communities=[],
homes = []
}
The initialState then pass to the store.
Also create same for my interface.

#Index.js
// Encapsulate my StoreProvider in index.tsx so that my app will have access to store

App.tsx
I import STORE  and make use of useContext for my store. It's where my UI data is structured

#Reducer.
Reducer take 2 argument which 'state' and 'action'.The reducer has Switch statement that listen to the TYPE of action that was trigger by ACTION then return the community data via action.payload.
