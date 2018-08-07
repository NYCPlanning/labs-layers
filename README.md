[![CircleCI](https://circleci.com/gh/NYCPlanning/labs-layers/tree/develop.svg?style=svg)](https://circleci.com/gh/NYCPlanning/labs-layers/tree/develop)

# Labs Layers

An interactive map showcasing layer groups served by [Labs Layers API](https://github.com/NYCPlanning/labs-layers-api)

### What is a layer group?

- [explain the concept of layer groups]
- [explain why Labs uses layer groups]

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Local development

* Clone this repository: `git clone git@github.com:NYCPlanning/labs-layers.git`
* Navigate to the project directory: `cd labs-layers`
* Install dependencies: `yarn`
* Start the server: `ember s`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Deploying

This api is easily deployed with Dokku.

* Create a new remote: `git remote add dokku dokku@{host}:labs-layers`
* Deploy with a git push: `git push dokku master` (or alias another branch to master `git push dokku {other-branch}:master`)

## Contact us

You can find us on Twitter at [@nycplanninglabs](https://twitter.com/nycplanninglabs), or comment on issues and we'll follow up as soon as we can. If you'd like to send an email, use [labs_dl@planning.nyc.gov](mailto:labs_dl@planning.nyc.gov)
