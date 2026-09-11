<script>
	import spinner from "./spinner.js"
	let spin = spinner()
	function oncomplete(angle){
		console.log(`Finished at angle ${angle%360}`)
	}
</script>

<button on:click={()=>spin.start()}>Start</button>
<button on:click={()=>spin.stop(oncomplete)}>Stop</button>
<div style="transform: rotateX({$spin.x}rad) rotateY({$spin.y}rad) rotateZ({$spin.z}rad);">Wheel</div>
<div style="transform:rotate({$spin}deg);">Wheel</div>

<style>
	div {
		display:inline-block;
		height:100px;
		width:100px;
		background-color:red;
		display:flex;
		align-items:center;
		justify-content:center;
        background: transparent;
        border: 1px solid #35d6b0;
	}
</style>