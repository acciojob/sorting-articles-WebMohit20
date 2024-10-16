//your JS code here. If required.
let bands = ['The Plot in You',
			   'The Devil Wears Prada',
			   'Pierce the Veil',
			   'Norma Jean',
			   'The Bled',
			   'Say Anything',
			   'The Midway State',
			   'We Came as Romans',
			   'Counterparts',
			   'Oh, Sleeper',
			   'A Skylit Drive',
			   'Anywhere But Here',
			   'An Old Dog'];

function remove(art){
  let word = art.split(" ");
  if(word[0]=="The"||word[0]=="A"||word[0]=="An"){
    return word.splice(1).join(" ")
  }
  return word;
  
}

const arr = bands.sort((a,b)=>{
  a=remove(a);
  b=remove(b);
  if(a<b){
    return -1;
  }
  else if(a>b){
    return 1
  }
  return 0;
})
let ul= document.getElementById("bands");
arr.map(item=>{
	let li = document.createElement("li");
	li.innerHTML = item;
	console.log(li);
	ul.append(li);
})







