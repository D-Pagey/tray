[![Netlify Status](https://api.netlify.com/api/v1/badges/b3d17311-c014-4cb0-b578-0627aee4cf42/deploy-status)](https://app.netlify.com/sites/pagey-tray/deploys)

# Revolut Currency Exchange Widget

This is my submission for the Tray Technical Exercise, you can see a live demo hosted
on [Netlify](https://pagey-tray.netlify.app/).

### Useful Scripts

-   `yarn` - install dependencies
-   `yarn start` - run the app locally and go to [http://localhost:3000](http://localhost:3000) in a browser.
-   `yarn test` - runs the test suite
-   `yarn build` - builds the app for production to the `/build` folder

### Developer Notes

I decided to use a form library called `Formik` since it is one of the most popular form libraries.
This also allowed me to drastically reduce state management and therefore have no need for `Redux`,
which can often be overkill for small apps.

With more time, I would have abstracted the `StyledFields` in the `SignUpForm` into their own, reusable,
`Input` components.

I implemented a back functionality for my own developer experience building this app. However, I removed
this functionality ([commit](https://github.com/D-Pagey/tray/commit/ca37ca99fbc1a6a7551f3cdbf816f3be84528af5))
as the brief mentioned this would be a future talking point.
