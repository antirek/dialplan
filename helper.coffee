  
Value = (str)->
  "${" + str + "}"


Expression = ()->
  args = [].slice.call arguments, 0
  if args.length isnt 3
    throw new Error 'Check count args'
  '$[' + args[0] + args[1] + args[2] + ']'


Global = (str)->
  "__" + str


module.exports = {
  $: Value,
  Expression: Expression,
  Global: Global
}