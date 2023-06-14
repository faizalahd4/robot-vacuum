# Robot Vacuum

This application is a simulation of a robot vacuum moving in an area of dimensions 5 units by 5 units. The robot is free to roam around the area but must be prevented from leaving the area. The goal is to create a web interface that accepts commands and displays the result of the robot's movements.

## Technologies Used
React: A JavaScript library for building user interfaces.
React Material UI: A popular React UI component library that provides ready-to-use components for a polished user interface.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

## Installation and Setup

To run the application, please follow these steps:

### `git clone https://github.com/faizalahd4/robot-vacuum.git`

Clone the project into your local machine.

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

## Validation to follow

We currently have four fields: X point, Y point, facing direction, and command.
- X Point: You must enter a number between 0 and 4; otherwise, an error will occur.
- Y Point: You must enter a number between 0 and 4; otherwise, an error will occur.
- Facing direction: You need to select one option from the drop-down menu (North, South, East, or West).
- Command: Currently, we have three commands (Move, Left, and Right). You can select up to 20 commands.

## How it works

We require a 5x5 unit matrix of boxes. Initially, the robot vacuum will be concealed.
- We will have four directions: north (upward), south (downward), east (rightward), and west (leftward).
- Once the user selects a valid x point, y point, facing direction, and a few commands, and then clicks the report button, the robot vacuum will be positioned precisely at the initial spot. It will subsequently move and change direction based on the chosen commands.
- Clicking the cancel button will clear all form fields and hide the robot vacuum.

### Example 1
PLACE 0, 0 SOUTH
MOVE
MOVE
LEFT
REPORT: 2, 0, EAST

### Example 2
PLACE 1, 2 EAST
MOVE
RIGHT
MOVE
MOVE
LEFT
REPORT: 3, 3, EAST

