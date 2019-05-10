# no-pollution

Prevent prototype pollution by sanitizing all string inputs to the JSON parser. This will prevent prototype pollution from happening even if you have a vulnerable library like [hoek <4.2.1](https://snyk.io/vuln/npm:hoek:20180212) merge operation or [jQuery <3.4.0](https://snyk.io/vuln/SNYK-JS-JQUERY-174006) extend operation.

A much needed prototype pollution fix for projects that were stuck with the vulnerable package and unable to upgrade the patched version of the package such as [this scenario](https://stackoverflow.com/q/50564246/5597641)

### Installation
```sh
npm i -S no-pollution
```
or
```sh
yarn add no-pollution
```

### Usage
To use the package, simply do a `require` on the entry point of your javascript project.
```js
require('no-pollution')
```

### Working
```js
// An object created with vulnerable merge operation and a payload from the attacker
var someObject = merge({}, JSON.parse('{"foo": "bar", "__proto__": {"polluted": true}}'));
console.log({}.polluted) // will print `true`

// After importing the no-pollution package
require('no-pollution');
var someObject = merge({}, JSON.parse('{"foo": "bar", "__proto__": {"polluted": true}}'));
console.log({}.polluted) // will print `undefined`

// You can also retrieve the pollutants that were sent by the attacker
console.log(someObject.__pollutants__); // will print { polluted: true }
```

### Usage with the browser
Currently there is no CDN available yet. But you can directly load the javascript file in your browser before you load other js files
```html
<script src="./path-to-your-js-folder/no-pollution/index.js"></script>
```

# Important
While no-pollution works with most of the known vulnerabilities, it will not work against vulnerabilities introduced by path-value assignment operations since the operation doesn't use a JSON parser. One such vulnerability is found in [mpath](https://snyk.io/vuln/SNYK-JS-MPATH-72672) (luckily it has been patched already). Do check what kind of vulnerability you are affected by using [npm-audit](https://docs.npmjs.com/cli/audit) before using no-pollution.

### TODO
- [ ] Detailed documentation.
- [ ] CDN for the js file
