# MVC DTO pattern nodejs (WORK IN PROGRESS)

This is a Node.js project that follows a professional and scalable framework using the Model-View-Controller (MVC) design pattern for the backend.

## Folder structure

- `src`: Contains the source code of the application.
   - `app`: Main directory of the application.
     - `controllers`: Contains the controllers of the application.
     - `models`: Contains the data models of the application.
     - `DTdtos`: Contains the dtos of the application.
     - `views`: Contains the views of the application.
     - `routes`: Contains the routes of the application.
     - `helpers`: Contains the helpers of the application.
     - `services`: Contains the services of the application.
     - `utils`: Contains application utilities.
   - `config`: Contains the configuration of the project.
   - `middlewares`: Contains the application middlewares.
   - `tests`: Contains the unit tests of the application.
   - `server.js`: Main file of the server.

- `node_modules`: Contains the dependencies of the project.

- `package.json`: Project configuration file.

- `.env`: Environment variable configuration file.

- `.gitignore`: File that specifies the files and directories that should be ignored by Git.

- `README.md`: This file that contains information about the project.

- `.eslintrc.js`: ESLint configuration file.

- `.prettierrc`: Prettier configuration file.

- `.editorconfig`: EditorConfig configuration file.

- `babel.config.js`: Babel configuration file.

- `webpack.config.js`: Webpack configuration file.

## Facility

1. Clone this repository to your local machine:

git clone https://github.com/your-user/my-project.git


1. Navigate to the project directory:

cd my-project

1. Install the dependencies:

npm install


## Use

1. Set the environment variables in the `.env` file according to your needs.

2. Run the application:

npm start


The application will be available at http://localhost:3000.

## Evidence

You can run the unit tests with the following command:

npm test


## Contributions

If you want to contribute to this project, follow the steps below:

1. Fork the repository.

2. Create a branch for your contribution:

git checkout -b my-contribution


1. Make your modifications and improvements.

2. Make a commit of your changes:

git commit -m "My contribution"


1. Push your changes to your remote repository:

git push origin my-contribution


1. Create a pull request in the original repository.

## License

This project is licensed under the MIT license. See the LICENSE file for more details.














## ALTERNATIVES
-------------------------------------

-src
   - app
     - controllers
       -HomeController.js
       -UserController.js
     -models
       -User.js
       -Post.js
     <!-- - views
       - home
         -index.ejs
         -about.ejs
       - user
         -index.ejs
         -edit.ejs
         - profile.ejs -->
     -routes
       -homeRoutes.js
       -userRoutes.js
     -helpers
       -validationHelper.js
     -services
       -AuthService.js
       - EmailService.js
     -utils
       -helperFunctions.js
   - config
     -database.js
     -routes.js
   - middlewares
     -authMiddleware.js
   - tests
     - controllers
       -HomeController.test.js
       -UserController.test.js
     -models
       -user.test.js
       -post.test.js
     -services
       -AuthService.test.js
       - EmailService.test.js
   -server.js
-node_modules
-package.json
- .env
- .gitignore
- README.md
- .eslintrc.js
- .prettierrc
- .editorconfig
-babel.config.js
-webpack.config.js



https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-en



-src
   - app
     - config
       -database.js
       -routes.js
     - controllers
       -HomeController.js
       -UserController.js
     -models
       -User.js
       -Post.js
     - views
       - home
         -index.ejs
       - user
         -index.ejs
         -edit.ejs
   - core
     - middlewares
       -authMiddleware.js
       -validationMiddleware.js
     -services
       -AuthService.js
       - EmailService.js
   -utils
     -helperFunctions.js
   - tests
     - controllers
       -HomeController.test.js
       -UserController.test.js
     -models
       -user.test.js
       -post.test.js
     -services
       -AuthService.test.js
       - EmailService.test.js
   -server.js
-node_modules
-package.json
- .env
- .gitignore




-src
   - app
     - controllers
       -HomeController.js
       -UserController.js
     -models
       -User.js
       -Post.js
     - views
       - home
         -index.ejs
         -about.ejs
       - user
         -index.ejs
         -edit.ejs
         -profile.ejs
     -routes
       -homeRoutes.js
       -userRoutes.js
   - config
     -database.js
   -middleware
