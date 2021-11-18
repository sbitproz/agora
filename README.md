# Launchy

Hi :)

This project has been designed to pull information from https://api.spacexdata.com/v3/. This react project utilises Material UI for the 'UI' and redux for state management. As a special twist RxJS is used with redux-observables to manage side effects and transform data in a reactive functional way. The project attempts at delivering reasonably comprehensive test coverage.

Naturally there's room for improvement all round especially in styling :). This project isn't complete :(

Personally I've spent more time with enzyme, but recognise that perhaps the future is the testing-library so I've adopted that in this project.

## Othert comments / questions

I wonder if by launch name you meant mission name.

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs the node modules so that you can start, build and test the project

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test --coverage`

Launches the test runner which calculates the test coverage and generates the coverage report

### `yarn build`

Will build the project

## Folder Architecture:

This is a small project but still has enough components to utilise a domain folder structure. By abstracting out reuseable components, I have focused on 2 key component domains common and logs. The folder structure will be similar to the following:

```
components
|  +-- Launches
|     +-- launches.constants
|     +-- launches.epic
|     +-- launches.interfaces
|     +-- launches.selectors
|     +-- etc...
|  +-- common
|     +-- Modal
|     +-- Table
|     +-- Typography
+-- interfaces
+-- store
+-- styles
+-- etc...
App.tsx
```

I have index filename to reduce import filename paths.

## More time

If I spent more time on this project, which I will undoubtable do just to clean it up. I would:

- improve the styling; perhaps add nicer theme
- refactor and fix outstanding typescript, eliminate any
- improve testing; cover the transition when the modal closes
- improve accessibility
- throw in husky and some git process improvements
- add proper search by launch / mission name on the response with a debounce custom hook rather than by datagrid
