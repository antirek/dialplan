
Value = (str)->
  "${" + str + "}"


Expression = ()->
  args = [].slice.call arguments, 0

  if args.length isnt 3
    throw new Error 'Check count args'
  
  '$[' + args[0] + args[1] + args[2] + ']'


Global = (str)->
  "__" + str


Condition = ->
  args = [].slice.call arguments, 0
  
  if args.length < 2 and args.length > 3
    throw new Error 'Check count args'

  str = args[0] + '?' + args[1]
  str += if args[2] then ':' + args[2] else ''
  str


module.exports = {
  $: Value,
  Expression: Expression,
  Global: Global,
  Condition: Condition
}