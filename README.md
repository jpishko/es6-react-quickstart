# es6-react-quickstart
Starting point for an enterprise web application built with React using Ant Design for UI and Webpack, Babel for building. <br />
Includes an Express application to simulate an API. <br />
<br />
## Folder Stucture and Important Files
/client: React application <br />
/client/dist: public files; Webpack output <br />
/client/node_modules: dependencies of the React application <br />
/client/src: Source code of the React application <br />
/client/.babelrc: Babel config <br />
/client/package.json: package config for React application <br />
/client/webpack.config.js: Webpack config <br />
package.json: package config for Express application <br />
server.js: Express application <br />
<br />
## Usage:
> git clone https://github.com/jpishko/es6-react-quickstart <br />
> npm install nodemon -g <br />
> npm install && cd client && npm install <br />
> npm cd.. && npm run dev <br />
<br />
## Dependencies
styled-components: Allows writing CSS within tagged template literals to style components. <br />
antd: Full featured UI design language and component library. <br />
axios: For performing HTTP requests <br />
<br />
## Dev Dependencies
babel-plugin-import: Modular import plugin for babel. Automatically imports antd stylesheet when you import components. For usage see .babelrc. <br />
