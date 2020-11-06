const {sqrt,pow,cos,sin,PI,abs} = Math

const backInOut=t=>{
  var s = 1.70158 * 1.525
  return (t*=2)<1?.5*(t*t*((s + 1)*t-s)):.5*((t-=2)*t*((s+1)*t+s)+2)}
const backIn=t=>t*t*((1.70158+1)*t-1.70158)
const backOut=t=>--t*t*((1.70158+1)*t+1.70158)+1

const bounceInOut=t=>t<0.5?0.5*(1-bounceOut(1-t*2)):.5*bounceOut(t*2-1)+.5
const bounceIn=t=>1-bounceOut(1-t)
const bounceOut=t=>{
  var a = 4 / 11
  var b = 8 / 11
  var c = 9 / 10
  var ca = 4356 / 361
  var cb = 35442 / 1805
  var cc = 16061 / 1805
  var t2 = t * t
  return t < a
    ? 7.5625 * t2
    : t < b
      ? 9.075 * t2 - 9.9 * t + 3.4
      : t < c
        ? ca * t2 - cb * t + cc
        : 10.8 * t * t - 20.52 * t + 10.72}

const circInOut=t=>(t*=2)<1?-.5*(sqrt(1-t*t)-1):.5*(sqrt(1-(t-=2)*t)+1)
const circIn=t=>1-sqrt(1-t*t)
const circOut=t=>sqrt(1-(--t*t))

const cubicInOut=t=>t<.5?4*t**3:.5*pow(2*t-2,3)+1
const cubicIn=t=>t**3
const cubicOut=t=>(t-1)**3 + 1

const elasticInOut=t=>t<.5?
  .5*sin(+13*PI/2*2*t)*pow(2,10*(2*t-1)):
  .5*sin(-13*PI/2*((2*t-1)+1))*pow(2,-10*(2*t-1))+1

const elasticIn=t=>sin(13*t*PI/2)*pow(2,10*(t-1))
const elasticOut=t=>sin(-13*(t+1)*PI/2)*pow(2,-10*t)+1
const expoInOut=t=>(t===0||t===1)?t:t<.5?+.5*pow(2,(20*t)-10):-.5*pow(2,10-(t*20))+1
const expoIn=t=>t===0?t:pow(2,10*(t-1))
const expoOut=t=>t===1?t:1-pow(2,-10*t)
const linear=t=>t
const quadInOut=t=>{
    t/=.5
    if(t<1) return .5*t*t
    t--
    return -.5*(t*(t-2)-1)}
const quadIn=t=>t**2
const quadOut=t=>-t*(t-2)
const quarticInOut=t=>t<.5?8*pow(t,4):-8*pow(t-1,4)+1
const quarticIn=t=>t**4
const quarticOut=t=>(t-1)**3*(1-t)+1
const qinticInOut=t=>{
    if ( ( t *= 2 ) < 1 ) return .5 * t * t * t * t * t
    return .5 * ( ( t -= 2 ) * t * t * t * t + 2 ) }
const qinticIn=t=>t**5
const qinticOut=t=>--t**5+1
const sineInOut=t=>-.5*(cos(PI*t)-1)
const sineIn=t=>(abs(cos(t*PI*.5))<1e-14)?1:1-cos(t*PI*.5)
const sineOut=t=>sin(t*PI/2)

module.exports = {backInOut,backIn,backOut,bounceInOut,bounceIn,
  bounceOut,circInOut,circIn,circOut,cubicInOut,cubicIn,cubicOut,
  elasticInOut,elasticIn,elasticOut,expoInOut,expoIn,expoOut,linear,
  quadInOut,quadIn,quadOut,quarticInOut,quarticIn,quarticOut,
  qinticInOut,qinticIn,qinticOut,sineInOut,sineIn,sineOut}
