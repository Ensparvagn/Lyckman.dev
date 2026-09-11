<script>
	import spinner from "./spinner.js"
	let spin = spinner()
	function oncomplete(angle){
		console.log(`Finished at angle ${angle%360}`) 
	}
</script>


<div class="banner">
	<h1 style="text-align: center; color:aliceblue; margin-top: 300px">bajs</h1>
	
	<button onclick={()=>spin.start()} style="margin-top:px">Start</button>
	<button onclick={()=>spin.stop(oncomplete)}>Stop</button>
	<div class="face" style="transform: rotateX({$spin.x}rad) rotateY({$spin.y}rad) rotateZ({$spin.z}rad);"></div>
	<div class="grid-container" style="padding-top: 400px;"> <!--padding creates space inside the parent-->
		<div class="item" style="grid-area: box-1"></div>
		<div class="item" style="grid-area: box-2"></div>
		<div class="item" style="grid-area: box-3"></div>
		<div class="item" style="grid-area: box-4"></div>
	</div>

</div>


<style> 


	.banner {
		position: relative;
	}

	.banner::before {
		content: "";
		position: fixed;
		inset: 0;
		z-index: -1;
		text-align: center;
		background-image: url(https://static2.klipy.com/ii/f87f46a2c5aeaeed4c68910815f73eaf/0c/9d/MkZWWzPE.gif);
		background-size: cover
	}

	

	.item {
		color: red;
		background-color: black;
		border-radius: 10px;
		
	}

	.grid-container {
		
		display: grid;
		grid-template-columns: 400px 400px 400px 300px 300px;
		grid-template-rows: 600px 600px;
		gap: 1em;
		justify-content: center;
		grid-template-areas: "box-1 box-1 box-1 box-2 box-2" "box-3 box-3 box-4 box-4 box-4";
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
</style>