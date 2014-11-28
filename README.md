dialplan
========

generate asterisk dialplan on javascript / for use with node.js
> https://wiki.asterisk.org/wiki/display/AST/The+Asterisk+Dialplan

Install
=======

> $ npm install dialplan [--save]


Use
===
`````
var D = require('dialplan'),
    App = D.Application,
    Func = D.Function,
    H = D.Helper;

var array = [
    App.Verbose(0, H.$(Func.CDR('billsec'))),
    App.AGI('agi://127.0.0.1/agi', 'test', 12),
    App.AddQueueMember("Queue", "Member")
];

var exten = new D.Extension('_2XX');
exten.append(array);

var context = new D.Context('outgoing');
context.append(exten);

var dialplan = new D.Dialplan();
dialplan.append(context);

dialplan.save("/etc/asterisk/extensions_generated.conf", callback);

== Output extensions_generated.conf content ==
[outgoing]
exten=>_2XX,1,Verbose(0,${CDR(billsec)})
exten=>_2XX,2,AGI(agi://127.0.0.1/agi,test,12)
exten=>_2XX,3,AddQueueMember(Queue,Member)

`````

Tests
=====
> $ npm test

Coverage
========
> $ grunt coverage
