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

Currently we have four field - x point, y point, facing direction and command.
- X Point: Need to provide only number between 0 to 4 else it will throw error.
- Y Point: Need to provide only number between 0 to 4 else it will throw error.
- Facing direction: Need to select one option from the drop down (North, South, East & West).
- Command - Currently we will be having three command (Move, Left & Right. Can select upto 20 command).

## How it works
- We need 5 x 5 unit martix boxes. Initially the robot vacuum will be hidden.
- We will have four direction like north (upside), south (downside), east (right side) and west (left side).
- Once user chose valid x point, y point, facing direction & few command and then click the report button, the robat vacuum will be placed in the exact initail spot, then it will be moved and change direction depend upon the command we chosen.
- When your click cancel button all the form field will be cleared and robot vacuum will be hidden.

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

