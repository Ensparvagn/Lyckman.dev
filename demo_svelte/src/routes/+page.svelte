<script>
	import spinner from "./spinner.js"
	let spin = spinner()
	function oncomplete(angle){
		console.log(`Finished at angle ${angle%360}`) 
	}
</script>


<div class="banner">
	<h1 style="text-align: center; color:aliceblue; margin-top: 100px;" >Lorem ipsum dolor | sit amet </h1>
	<div class="description" style="text-align: center;"> 
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id congue magna. Praesent ac maximus justo. 
		Suspendisse porttitor condimentum ante, at euismod neque hendrerit non. Aliquam semper lobortis elit, vel ultricies massa posuere in. 
	</div>
	
	<!--<button onclick={()=>spin.start()} style="margin-top:px">Start</button>
	<button onclick={()=>spin.stop(oncomplete)}>Stop</button>
	<div class="face" style="transform: rotateX({$spin.x}rad) rotateY({$spin.y}rad) rotateZ({$spin.z}rad);"></div>-->
	<div class="grid-container" style="padding-top: 200px;"> <!--padding creates space inside the parent-->
		<div class="item-1" style="grid-area: box-1"></div>
		<div class="item-3" style="grid-area: box-2"></div>
		<div class="empty-item" style="grid-area: box-3"></div>
		<div class="empty-item" style="grid-area: box-4"></div>
	</div>

</div>


<style> 
	h1 {
	  font-family: 'Manrope', sans-serif;
	  font-weight: 800;
	  font-size: 3rem;
	  letter-spacing: -0.04em;
	}

	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

	.description {
  		font-family: 'Manrope', sans-serif;
  		font-size: 1.5rem;
  		line-height: 1.7;
  		letter-spacing: -0.01em;
  		color: #6b7280;
		max-width: 700px;
		text-align: center;
		margin: 0 auto;
	}


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

	.item-1 {
		background-image: url(https://static2.klipy.com/ii/f87f46a2c5aeaeed4c68910815f73eaf/0c/9d/MkZWWzPE.gif);
		background-size: cover;
		border-radius: 10px;
		
	}
	.empty-item {
		color: red;
		background-color: black;
		border-radius: 10px;
		
	} 
	.item-3 {
		background-image: url(https://static2.klipy.com/ii/935d7ab9d8c6202580a668421940ec81/ac/46/FVTkvNhH.gif);
		background-size: cover;
		border-radius: 10px;
		
	}

	.grid-container {
		margin-right: 200px;
		margin-left: 200px;
		display: grid;
		grid-template-columns: 4fr 4fr 4fr 3fr 3fr;
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