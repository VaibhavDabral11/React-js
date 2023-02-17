
# History of React and why developers build this 

React is a popular JavaScript library for building user interfaces. It was first introduced in 2013 by Facebook developers Jordan Walke and Tom Occhino. The idea behind React was to create a library that could help developers build complex user interfaces with high performance and a modular approach.

React was created in response to some of the challenges that web developers faced with traditional JavaScript frameworks. At the time, most JavaScript frameworks were designed with the assumption that the DOM (Document Object Model) was a fast and lightweight interface. However, as web applications became more complex, the performance of the DOM began to degrade, leading to slow load times and a poor user experience.

React addressed this problem by introducing a new way of rendering user interfaces. Instead of relying on the DOM to render the user interface, React uses a virtual DOM that sits in between the application and the browser's rendering engine. This approach allows React to be more efficient and performant than traditional JavaScript frameworks, making it a popular choice for modern web applications.

Over the years, React has evolved to include new features and concepts, such as state management, component composition, and declarative programming. React has also gained a large and active community of developers, which has contributed to its popularity and continued growth.

Today, React is used by many of the world's largest companies and organizations, including Facebook, Instagram, Netflix, and Airbnb. Its popularity is due in part to its ease of use, performance, and modularity, as well as its strong community and ecosystem of libraries and tools.

In summary, React was developed to address some of the challenges that web developers faced with traditional JavaScript frameworks, and it has since become a popular and widely used library for building user interfaces. Its history is closely tied to the growth and evolution of web development, and its continued development and popularity are a testament to its effectiveness as a tool for creating modern web applications.

## 1. Components In React

In React, "components" is not a specific feature or concept. However, I assume that you are referring to a scenario where you want to create a custom component in React.

Creating custom components is one of the core concepts in React. In React, a component is a reusable piece of code that represents a part of the user interface. You can create a custom component by defining a JavaScript function or class that returns JSX.

## 2. Props In React

In ReactJS, "props" stand for "properties", which are used to pass data between components in a React application.

Props are used to pass data and functionality from one React component to another, allowing you to create a more modular and reusable application. When a component is rendered in a React application, it can receive "props" as an argument, which is an object that contains any data or functions that the parent component wants to pass down to the child component.

Here's an example of how props can be used in a React component:

```ruby
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age} years old</p>
    </div>
  );
}

function App() {
  return <Greeting name="John" age={25} />;
}

export default App;

```
In this example, we define a 'Greeting' component that receives two props, 'name' and 'age', and uses them to render a message that greets the user. We then use this 'Greeting component' in the 'App' component, passing in the name "John" and age 25 as props.

By using props, we can easily pass data between components and create reusable, modular code. Props can be used to pass any kind of data or functionality between components, including strings, numbers, booleans, objects, and functions.

### Propstypes In React

PropTypes is a feature in React that allows you to specify the types of the props that a component should expect to receive. This helps to catch errors early and provides more robust type checking for your React components.

```@ruby
npm install prop-types
```

PropTypes is an optional feature and it is not enabled by default. To use PropTypes, you need to install the prop-types package from NPM:

Then you can import it in your React component and use it to specify the expected types of your props:

```@ruby
import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age} years old</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
};

export default Greeting;

```
In this example, we've imported the 'PropTypes' module and used it to specify the expected types of our 'name' and 'age' props. We've also added the 'isRequired' validator, which ensures that the props are passed down from the parent component.

By defining propTypes, you can ensure that your React components are receiving the correct data types and prevent potential bugs from occurring. If a component receives a prop of the wrong type, React will throw a warning in the console, helping you to catch and fix the error early in the development process.

### Hooks In React  



# Follow these commands given bellow to install react in your system .
1. Install node using given bellow command in terminal .

```ruby
$ sudo apt install nodejs   
```
2.  create react app using given bellow command in terminal .
```ruby
$ npx create-react-app my-app 
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 6a86b78 (router error)
