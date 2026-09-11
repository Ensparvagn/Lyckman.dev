<script>
	import spinner from "./spinner.js"
	let spin = spinner()
	function oncomplete(angle){
		console.log(`Finished at angle ${angle%360}`) 
	}
</script>

<button onclick={()=>spin.start()} style="margin-top:px">Start</button>
<button onclick={()=>spin.stop(oncomplete)}>Stop</button>
<div class="face" style="transform: rotateX({$spin.x}rad) rotateY({$spin.y}rad) rotateZ({$spin.z}rad);"></div>



<style> 
	div {
		display:inline-block;
		height:500px;
		width:500px;
		background-color:red;
		align-items:center;
		justify-content:center;
		border: 1px solid #35d6b0;
		transform-style: preserve-3d;
	}

	.face {
  position: absolute;
  width: 500px;
  height: 500px;
  border: 2px solid white;
  line-height: 200px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-image: url(https://static2.klipy.com/ii/f87f46a2c5aeaeed4c68910815f73eaf/0c/9d/MkZWWzPE.gif);
  border: 1px solid #35d6b0;
  border-radius: 20%;
  background-size: cover;

}
.front { transform: rotateY( 0deg) translateZ(100px); }
.back { transform: rotateY(180deg) translateZ(100px); }
.left { transform: rotateY(-90deg) translateZ(100px); }
.right { transform: rotateY( 90deg) translateZ(100px); }
.top { transform: rotateX( 90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }
</style>