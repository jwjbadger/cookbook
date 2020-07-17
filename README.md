# This Project

This project is supposed to allow people to use a website, mobile app, and desktop app as a cookbook. I especially like this project as I like cooking, but don't like flipping through cookbooks, finding old recipes, and figuring out how I did certain things (modifiying the recipe). The idea I have for this project is something where you can add, edit, and remove recipes. Also, you should be able to rate and comment on recipes.

## What I Am Thinking

I am thinking that this will work so that there are **no users**. How it will work, is everyone can edit recipes, and when creating recipes, the author can specify who is titled the author for that recipe. This solution works for a small scale application (i.e. in a family or for one person), but it would have to be changed for large applications. For example, one could add a changelog to the recipe, then users could decide which version to use, or upvote versions and eventually, delete versions that are too heavily downvoted.

## Cookbook-Backend

## Running

To run this, just run `npm run start` in the root directory of cookbook-backend.

## What I Learned With Backends

I learned a lot about using Express, Mongoose, MongoDB, Node.JS, and much more. I learned how to setup backends much more effectively, much faster. I also learned about designing NoSQL databases.

## Cookbook-React

### Running React

In order to run cookbook-react, you first need to clone the repo or only cookbook-backend and cookbook-react. Then, you need to run `npm install` in cookbook-backend and cookbook-react. To run them, on the same machine, run `npm start` in cookbook-backend and `yarn start` in cookbook-react. That should be it. Addtionaly, you can run `yarn build` to get a higher quality, fast static site.

### What I Learned

From this subproject, I learned a lot. Even though I have used React before in the [pathfinding-visualizer](https://github.com/jwjbadger/pathfinding-visualizer), I have never learned it properly. I know feel like I know React much better. Additionally, I gained experience with Express and Mongoose, and feel much better about using them in order to quickly create a backend. Finally, I learned more about creating projects and managing them with **git**. I tried seperating this project differently by having all sub-projects in one repository.

## Cookbook-Flutter

### Running Flutter

Check out the Flutter website for more information on installing and running, but once you have everything setup that needs to be, you should just need to run `flutter run` in the root directory of this app (make sure cookbook-backend and change `ROOT_URL` in the `recipeService` file if the ip of your machine running the backend is different than what is there), then, after a bit, the app should appear on your emulator or phone.

### What This Taught Me

I learned much more about creating Flutter applications, testing them, and setting up projects. I received much more knowledge in the area of setting up Flutter apps fast. I learned how to use flutter a bit better, and how to find colour schemes (even though the one I found isn't great). I also learned about managing Flutter with git (i.e. Flutter specific _gitignores_ and so on).

## Cookbook-Desktop

### Running

To run this project, I reccomend you use `npm run start` for a dev version, and `npm run build` for a production version (a .exe file). You can also run `npm run electron-build` or `npm run electron-start`, but both of these will only do electron's part (`electron-build` will not build the React source, and `electron-start` need you to run `react-start` before it). As always, cookbook-backend needs to be running during this.

### What I Learned From This

I didn't learn too much about electron because I just ported a existing project, but I did learn more about electron.
