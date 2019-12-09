const {min,max} = Math
const quad = ()=>new Float32Array([0,0, 0,1, 1,0, 1,0, 0,1, 1,1])
const bindQuad = (gl,location)=>{
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER,quad(),gl.STATIC_DRAW)
  gl.enableVertexAttribArray(location)
  gl.vertexAttribPointer(location,2,gl.FLOAT,false,0,0) }

const program = (gl,vertex,fragment)=>{
  const frag = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(frag,fragment)
  gl.compileShader(frag)
  const vert = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vert,vertex)
  gl.compileShader(vert)
  const prog = gl.createProgram()
  gl.attachShader(prog,vert)
  gl.attachShader(prog,frag)
  gl.linkProgram(prog)
  gl.useProgram(prog)
  return prog }

const vertex =`
  attribute vec4 a_position;
  uniform mat4 u_matrix;
  varying vec2 v_texcoord;
  void main() {
    gl_Position = u_matrix * a_position;
    v_texcoord = vec2(a_position); }`
const frag =`
  precision mediump float;
  varying vec2 v_texcoord;
  uniform sampler2D u_texture;
  uniform float u_alpha;
  void main() {
    gl_FragColor = texture2D(u_texture, v_texcoord)-vec4(0,0,0,u_alpha); }`

const texture = (gl,url)=>new Promise((res,rej)=>{
  const img = new Image()
  img.src = url
  img.onload=()=>{
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img)
    res({width:img.width,height:img.height,texture}) }
  img.onerror=()=>res() })

let m4 = new Float32Array(16)
const matrix = (w=1920,h=1080,x=0,y=0,sx=1,sy=1,r=0,ax=-0.5,ay=-0.5)=>{
  const c=Math.cos(r),s=Math.sin(r)
  m4[0]=sx*c*2/w, m4[1]=sx*s*2/-h,m4[4]=sy*-s*2/w,m4[5]=sy*c*2/-h
  m4[2]=m4[3]=m4[6]=m4[7]=m4[8]=m4[9]=m4[11]=m4[14]=0,m4[10]=-1,m4[15]=1
  m4[12]=m4[0]*ax+m4[4]*ay+2/w*x-1,m4[13]=m4[1]*ax+m4[5]*ay+2/-h*y+1
  return m4 }

const render = (gl,texture,matrix,alpha=1)=>{
  gl.bindTexture(gl.TEXTURE_2D,texture)
  gl.uniformMatrix4fv(gl.matrixLocation,0,matrix)
  gl.uniform1f(gl.alphaLocation,min(max(1-alpha,0),1))
  gl.drawArrays(gl.TRIANGLES,0,6) }

const init = canvas=>{
  const opts = {powerPreference:'high-performance',premultipliedAlpha:false,alpha:true}
  const gl = canvas.getContext('webgl',opts)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA)

  const prog = program(gl,vertex,frag)
  bindQuad(gl,gl.getAttribLocation(prog,'a_position'))
  gl.matrixLocation=gl.getUniformLocation(prog,'u_matrix')
  gl.alphaLocation=gl.getUniformLocation(prog,'u_alpha')
  return gl }

module.exports = {init,render,matrix,texture}
