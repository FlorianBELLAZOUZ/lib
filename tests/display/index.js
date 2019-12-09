const {display,texture,render,matrix} =  require('../..')

const times = (count,func)=>Array.from(new Array(count)).map((e,i)=>func(i))
const rand = (min,max)=>Math.floor(Math.random()*(max-min))+min
const point = ()=>({x:rand(0,1920),y:rand(0,1080)})
const raf = requestAnimationFrame
const {assign} = Object

const main = async ()=>{
  const gl = display(document.querySelector('canvas'))
  const cat = await texture(gl,'cat.png')
  const rabbit = await texture(gl,'rabbit.png')
  const texts = [cat,rabbit]

  const sprites = times(5000,point).map(s=>
    assign(s,texts[rand(0,texts.length)],{m:new Float32Array(16),r:0,
      vx:10*((rand(0,200)/100)-1),vr:(rand(0,200)/100-1)/10,sx:1,a:rand(0,1000)/1000,va:-0.04}))

  draw(gl,sprites) }

const draw = (gl,sprites)=>{
  gl.clear(gl.COLOR_BUFFER_BIT)
  sprites.forEach(s=>{
    update(s)
    render(gl,s.texture,matrix(1920,1080,s.x,s.y,s.width*s.sx,s.height,s.r))})
  raf(()=>draw(gl,sprites)) }

const update = s=>{
  if(s.x>1920) s.vx=-10, s.sx=1
  if(s.x<0) s.vx=10, s.sx=-1
  s.va=s.a<=0?0.04:s.a>=1?-0.04:s.va
  s.a+=s.va
  s.r+=s.vr
  s.x+=s.vx }

main()
