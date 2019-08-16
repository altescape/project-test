# project-test

## Summary

The form has been built using Vuex and Vue router, a bit overkill here,
but still very helpful to use.

- Uses Vuex
- Uses Vue Router
- There is validation on the forms.
- The data persists in localStorage. If the screen is refreshed or closed. This can be cleared by clicking the link. A backup will run every 1000 millieseconds.
- There is an address lookup service API being used, though in test mode it will always return the same list of addresses.
- The facility to run E2E tests using Cypress is there but I ran out of time to build those.

#### Todos:

It's not a finished job there would be some outstanding things that I would do before releasing to production, they might include:

- Cross browser testing - only tested in Chrome so far.
- Mobile testing.
- Responsive testing - only slightly tested in Chrome.
- Fix some flex layout issues with Bootstrap 4.
- Add accessibility standards and test.
- Optimise components/modules.

#### Improvements:
Some improvements I can think of might include: 
- Animated SVGs
- Form layout could be improved (firstname/lastname on one line for instance, generally shorten the forms height).
- Steps added for user journey.
- Error messages could be improved/more friendly.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```
