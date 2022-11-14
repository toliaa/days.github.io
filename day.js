{   
const input = document.querySelector("input")
const button = document.querySelector("button")
const handleClick = () => {
  
  const value = input.value.trim()
  if (value) {
    
  alert(`Day: ${value}`)

  }if (value > 7 || value < 0 || value == 0){
  alert(`There is no such day. Try again`);
  }if (value == 1){
  alert('Monday');
}if (value == 2){
    alert('Tuesday');
}if (value == 3){
    alert('Wednesday');
}if (value == 4){
    alert('Thursday');
}if (value == 5){
    alert('Friday');
}if (value == 6){
    alert('Saturday');
}if (value == 7){
    alert('Sunday');
  }  
}

button.addEventListener("click", handleClick)
  
}

