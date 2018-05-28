const {clone} = require('./object')
const {uniq} = require('./array')

// map :: Tag:String => Object => Function => Object
const map = tag=>object=>func=>{
  object = clone(object)
  const _map = p=>c=>{
    c = func(c,p)
    if(c[tag]) recursive(c)
    return c }
  const recursive = obj=>{
    obj[tag] = obj[tag].map(_map(obj))
    return obj }
  return recursive(object) }

// forEach :: Tag:String => Object => Function => undefined
const forEach = tag=>object=>func=>{
  const each = p=>c=>{func(c,p);if(c[tag]) recursive(c);}
  const recursive = obj=>obj[tag].forEach(each(obj))
  recursive(object) }

// reduce :: Tag:String => Object => Function => initial => *
const reduce = tag=>object=>func=>initial=>{
  let out=initial
  const reduce=child=>out=func(out)(child)
  forEach(tag)(object)(reduce)
  return out }

// filter :: tag:String => Object => Function => Array
const filter = tag=>object=>func=>{
  const test = array=>child=>{
    if(func(child))array.push(child)
    return array }
  return reduce(tag)(object)(test)([]) }

// query :: tree:Object => name:String =>  => Array
const query = tree=>name=>queryKey('children')(tree)(name)

// queryOne :: tree:Object => name:String => Array
const queryOne = tree=>name=>query(tree)(name)[0]

const queryKey = key=>tree=>name=>{
  const query = name.trim().replace(/ +/,' ').split(' ')
  return query.reduce((children,name)=>{
    const regExp = new RegExp('\\b'+name+'\\b')
    const test = child=>child.name?child.name.match(regExp):false
    children = children.filter(child=>key in child)
    return uniq(filter(key)({[key]:children})(test))
  },tree[key]) }

module.exports = {map,forEach,reduce,filter,query,queryOne,queryKey}
