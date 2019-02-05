<div class="text-xs-center" align="center" style="margin: 20px">
  <img src="./logo.png" height="255" alt="<%= name %>">
</div>

<div class="text-xs-center" align="center">

[![NPM version](https://img.shields.io/npm/v/<%= name %>.svg?style=flat)](https://npmjs.com/package/<% if (namespaced) { %>@znck/<%}%><%= name %>)
[![NPM downloads](https://img.shields.io/npm/dm/<% if (namespaced) { %>@znck/<%}%><%= name %>.svg?style=flat)](https://npmjs.com/package/<%= name %>)

</div>

## Introduction

<%= description %>

## Install

```bash
npm add <% if (namespaced) { %>@znck/<%}%><%= name %>
```

## Usage

```js
import S from '<% if (namespaced) { %>@znck/<%}%><%= name %>'

...
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/znck/prop-types/releases).

## Author

**<%= name %>** © [Rahul Kadyan](https://github.com/znck), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Rahul Kadyan with help from contributors ([list](https://github.com/znck/<%= name %>/contributors)).

> [znck.me](https://znck.me) · GitHub ([znck](https://github.com/znck)) · Twitter ([@znck0](https://twitter.com/@znck0))
