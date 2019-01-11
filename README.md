# React Cash flow.

Is an App for financial control built in ReactJS using real-time firebase database to control inflow and outflow,
with possibility to filter the monthly flow and also present a graphical dashboard.

## Built With

- [ReactJS](https://reactjs.org) - ReactJS
- [styled-components](http://styled-components.com/) - styled-components
- [Firebase](https://firebase.google.com/) - Firebase
- [ChartJS](https://www.chartjs.org/) - ChartJS

## Install

- **If you have installation or compilation issues with this project, please see [this debugging guide](https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/400)**

First, clone the repo via git:

```bash
git clone --depth=1 https://github.com/mariorodeghiero/react-electron-cash-flow.git your-project-name
```

And then install dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

## Run

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
$ yarn dev
```

Alternatively, you can run the renderer and main processes separately. This way, you can restart one process without waiting for the other. Run these two commands **simultaneously** in different console tabs:

```bash
$ yarn start-renderer-dev
$ yarn start-main-dev
```

If you don't need autofocus when your files was changed, then run `dev` with env `START_MINIMIZED=true`:

```bash
$ START_MINIMIZED=true yarn dev
```

## Packaging

To package apps for the local platform:

```bash
$ yarn package
```

To package apps for all platforms:

First, refer to [Multi Platform Build](https://www.electron.build/multi-platform-build) for dependencies.

Then,

```bash
$ yarn package-all
```

To package apps with options:

```bash
$ yarn package -- --[option]
```

You can debug your production build with devtools by simply setting the `DEBUG_PROD` env variable:

```bash
DEBUG_PROD=true yarn package
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

- [Mário Antônio do Amaral Rodeghiero](https://github.com/mariorodeghiero)

## Contributors

| [![Mário Rodeghiero](https://avatars1.githubusercontent.com/u/24671133?s=88&v=4)](https://github.com/mariorodeghiero) |
| --------------------------------------------------------------------------------------------------------------------- |


| [Mário Rodeghiero](https://github.com/mariorodeghiero)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
