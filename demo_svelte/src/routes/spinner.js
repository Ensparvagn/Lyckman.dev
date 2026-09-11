import {writable} from "svelte/store"
import {tweened} from "svelte/motion"
import {cubicInOut } from "svelte/easing"
import {get} from "svelte/store";


export default function spinner()
{
	let hej = Math.random()
	let velocity = tweened(0);//, {easing:cubicInOut , duration:3000}
	let rotation = writable( {
        x: hej, 
        y: hej,
        z: hej
    })
	let position = writable( {
		x: 0,
		y: 0 
	})

	

	//<!--x' =  xcos(a)-ysin(a), y' = xsin(a) + xcos(a)-->
	

	let running = false;
	let prev = undefined;
	function animate(time){
		if(!prev)prev = time;
		let duration = time - prev;
		prev = time;
		
        rotation.update(r => ({ x: (r.x * Math.cos(0.01) - r.y * Math.sin(0.01)),  y: r.y + 0.01 * get(velocity) * duration,  z: r.z + get(velocity) * duration}));
		position.update(p => ({x: p.x + 10, y: p.y + 1}));
		requestAnimationFrame(animate);
	}
	
	return {
		start:()=>{
			velocity.set(0.005)
			if(running)return;
			running = true;
			requestAnimationFrame(animate);
		},
		stop:async (onfinish=null)=>{
			await velocity.set(0)
			onfinish?.(get(rotation))
			running = false;
		},
		...rotation
	}
}