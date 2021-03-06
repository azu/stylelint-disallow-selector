# stylelint-disallow-selector [![Build Status](https://travis-ci.org/azu/stylelint-disallow-selector.svg?branch=master)](https://travis-ci.org/azu/stylelint-disallow-selector)

stylelint rule disallow specific selector

## Install

Install with [npm](https://www.npmjs.com/):

    npm install stylelint-disallow-selector

## Usage

```
// .stylelintrc
{
  "plugins": [
    "stylelint-disallow-selector"
  ],
  "rules": {
   "azu/disallow-selector": [".dis-selector"]
  }
}
```

NG `.dis-selector{}`
OK: `.not-dis-selector{}`

## Changelog

See [Releases page](https://github.com/azu/stylelint-disallow-selector/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/stylelint-disallow-selector/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
