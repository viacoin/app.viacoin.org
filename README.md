# viacoin.org

Viacoin website app source.

This app generate the build of the website (HTML, CSS, JS, JSON, MEDIAS).

[![CircleCI](https://circleci.com/gh/viacoin/app.viacoin.org/tree/master.svg?style=svg)](https://circleci.com/gh/viacoin/app.viacoin.org/tree/master)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

We need to install Node.js and npm if it's not already the case:

[Get Node.js and npm](https://www.npmjs.com/get-npm)

### Installing

First step is to run the dependencies installation inside the cloned repo:

```
npm install
```

Now, we can start an all-in-one local web server with the running website:

```
npm run start
```

Now go to http://localhost:3000 if the command line has not started the page on your preferred browser like usually.

## Running the tests

Actually, there are no unit tests, but could be in the future:

```
npm run test
```

## Deployment

If we need to deploy in the same Github reporistory into the **_gh-pages_** branch just run:

```
npm run deploy
```

But if you need to create a build to host the website in another server or repository, just run:

```
npm run build
```

And copy all the dist directory into your _www_ directory on the hosting server.

## Built With

* [Webpack](https://webpack.js.org/) - The module bundler
* [Preact](https://preactjs.com/) - Library for building user interfaces
* [Bulma](https://bulma.io/) - CSS framework based on flexbox with SASS support

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/viacoin/app.viacoin.org.git/tags).

## Authors

* **Yudao** - *Initial work*

See also the list of [contributors](https://github.com/viacoin/app.viacoin.org.git/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thank you **_Stephen_** for all your opened mind
