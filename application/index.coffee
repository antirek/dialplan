AppList = require './application.json'
applications = {}


Application = (name, attrs)->
  attrsAsString = attrs.join(',')
  "#{name}(#{attrsAsString})";


validate = (name, args)->
  rules = AppList[name].validate
  if rules
    if rules['count']
      validateCount rules['count'], args


validateCount = (count, args)->
  if typeof count is 'number' and args.length isnt count
    throw new Error 'Check count args'
  
  if typeof count is 'object'
    if count['max'] and args.length > count['max']
      throw new Error 'So many args'

    if count['min'] and args.length < count['min']
      throw new Error 'Not enough args'


append = (name)->
  applications[name] = ->
    args = [].slice.call arguments, 0
    validate name, args
    Application name, args


for name of AppList
  append(name);


module.exports = applications