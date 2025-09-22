//your JS code here. If required.
const container = document.querySelector(".container")
const offscreen = document.createDocumentFragment()
for(let i = 1;i<=800;i++){
	createsquare()
}
container.appendChild(offscreen)
function createsquare(){
	const square = document.createElement("div")
	square.classList.add("square")
	square.addEventListener("mouseover",addcolor)
	square.addEventListener("mouseout",removecolor)
	offscreen.appendChild(square)
}
function addcolor(e){
	const square = e.target;
	const radndomcolor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0")
	square.style.backgroundColor = radndomcolor;	
}
function removecolor(e){
	setTimeout(()=>{
		e.target.style.backgroundColor = "";
		
	},1000);
}