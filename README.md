# Pokedex clone

To preview this app, please visit this link: https://adamjpena.github.io/pokedex/#/

A pokedex, created by Professor Oak, is a device that serves as compendium of all pokemon. This app is a clone of the pokedex which consumes the [Pokeapi](https://pokeapi.co/) to make a [paginated list of pokemons](https://adamjpena.github.io/pokedex/#/) with [detail pages](https://adamjpena.github.io/pokedex/#/detail/28) and an ["Create pokemon" feature](https://adamjpena.github.io/pokedex/#/create).

## Create pokemon

[On the /create page](https://adamjpena.github.io/pokedex/#/create), a user can fill in abbreviated Pokemon information and create their very own Pokemon! I used [React Hook Form](https://github.com/react-hook-form/react-hook-form) to handle validations and submission. In order to keep a user's Pokemon isolated to their own Pokedex without maintaining a database, a successful submission is stored to the browser's Local Storage.

All created pokemon have an id starting with 'created-' to differentiate them. This list of custom pokemon is seamlessly blended with the Pokeapi's list on the overview page and is accessed on the detail page whenever a pokemon id starts with 'created-'.

## Considerations

This app is dependent on Pokeapi calls on every page. While these calls are very quick, this can be improved by statically generating these pages. [Gatsby](https://github.com/gatsbyjs/gatsby) would be a great candidate for this.

Functionality was the primary goal of this app but the styling for this app could use some better standards and TLC. Ideally, I'd like to build out a grid system and consistent theme. The Pokemon detail page is a first pass at a concept for how the rest of the app could look.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
