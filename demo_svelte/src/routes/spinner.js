import {writable} from "svelte/store"
import {tweened} from "svelte/motion"
import {cubicInOut } from "svelte/easing"
import {get} from "svelte/store";

export default function spinner()
{
	let velocity = tweened(0, {easing:cubicInOut , duration:3000});
	let rotation = writable( {
        x: 0,
        y: 0,
        z: 0
    })

	let running = false;
	let prev = undefined;
	function animate(time){
		if(!prev)prev = time;
		let duration = time - prev;
		prev = time;
        rotation.update(r => ({ x: r.x + get(velocity) * duration,  y: r.y + get(velocity) * duration,  z: r.z + get(velocity) * duration}));
		requestAnimationFrame(animate);
	}
	
	return {
		start:()=>{
			velocity.set(1)
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