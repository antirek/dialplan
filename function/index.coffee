FunctionList = require './function.json'
functions = {}


DialplanFunction = (name, attrs)->
  attrsAsString = attrs.join(',')
  "#{name}(#{attrsAsString})";


append = (name)->
  functions[name] = ()->
    args = [].slice.call arguments, 0
    DialplanFunction name, args


for name of FunctionList
  append(name);


module.exports = functions