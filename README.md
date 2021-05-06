# Example typescript project

This is an example typescript project with jest unit testing, linting, and husky.

You will find example product and cart classes and their associated test files, this is very much a demonstration of how tests can be run.

## Running tests

Tests can be run be running the following command

```
npm test
```

## Linting

The linter can be run using the following command

```
npm lint
```

## Husky

Husky provides an easy way to allow scripts to be run automatically on various git hooks.

This project has a pre-commit hook in which the linter is run and a pre-push hook which runs tests.

