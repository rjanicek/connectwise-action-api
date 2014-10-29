connectwise-action-api
======================

A thin Javascript layer for the ConnectWise XML Action API designed for Node.js.

usage
-----
```javascript
var cw = require('connectwise-action-api').configure(
	'SERVER HOST NAME',
	'COMPANY NAME',
	'INTEGRATOR LOGIN ID',
	'INTEGRATOR PASSWORD'
);

cw.action('GetTicketAction', {
	SrServiceRecid: 12345
}, function (error, result) {
	error && console.error(error);
	if (result) {
		var ticket = result.GetTicketAction.Ticket;
	    console.dir(ticket);
	}
});
```

tests
-----

See `tests` directory for documentation and examples of API actions.
Tests clean up after themselves.  
* Configure tests in `test-config.js`
* Run all tests: `node test`
* Run specific tests using file name pattern: `node test version`
```
d:\connectwise-action-api>node test version

get-connectwise-version.js
{ Version: 'v2014.4.23325', IsCloud: 'false' }
✔ get_connectwise_version

OK: 2 assertions (729ms)
```
* Clean up after tests: `npm run clean`

install
-------
```
npm install --save connectwise-action-api
```

docs
----

[available reports and fields](./available-reports.md)

ideas
-----
* convert from request to hyperquest
* make it work with Node.js and Browser