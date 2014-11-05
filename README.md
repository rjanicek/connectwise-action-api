connectwise-action-api
======================

A thin high performance JavaScript layer for the ConnectWise XML Action API designed for Node.js.

buffered usage
--------------
Buffer results and return with callback api. Optimized for smaller result sets. Entire response is buffered, then parsed into a JavaScript object.
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

streaming usage
---------------
Stream results using event emitter api. Optimized for large result sets. Uses less memory. Matches can be processed immediately and asynchronously. No need to depend on server paging. Fewer server round trips. Each xPath match is parsed into a JavaScript object and emitted as an event.
```javascript
var cw = require('connectwise-action-api').configure(
	'SERVER HOST NAME',
	'COMPANY NAME',
	'INTEGRATOR LOGIN ID',
	'INTEGRATOR PASSWORD'
);

cw.actionStream('RunReportQueryAction', '//Result', {
		ReportName: 'Schedule',
		Limit: 100000
	})
	.on('match', function (match) {
		console.dir(match);
	})
	.on('error', function (error) {
		console.error(error);
	})
	.on('end', function () {
		// all done
	});
```

tests
-----

See [`tests`](tests) directory for documentation and examples of API actions.
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
* make it work with Node.js and Browser
