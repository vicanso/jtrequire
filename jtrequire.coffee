GLOBAL_MODULES = window.GLOBAL_MODULES = {}

window.require = (name) ->
  moudle = GLOBAL_MODULES[name]
  if moudle
    moudle.exports
  else
    null