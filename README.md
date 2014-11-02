dialplan
========

generate asterisk diaplan on javascript

Install
=======

> npm install dialplan [--save]


Use
===
`````
var extension = new D.Extension('130');
extension.append(new A.Answer(10));
extension.append('dial', new A.Dial('SIP/100'));

var context1 = new D.Context('innercalls');
context1.append(extension);

var dialplan = new D.Dialplan();
dialplan.append(context1);

dialplan.save('/etc/asterisk/extensions.conf',cb);
`````
