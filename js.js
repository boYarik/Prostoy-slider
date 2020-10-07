function myFunc() {

	img = document.getElementById("img");
	img.innerHTML = `<img src="http://pro.radiomayak.ru/wp-content/uploads/2019/12/shayrma.jpg" >`
	  
	///let	img1 = '<img src="http://pro.radiomayak.ru/wp-content/uploads/2019/12/shayrma.jpg" height="200">'
	///let	img2 = '<img src="https://worldofmeat.ru/wp-content/uploads/2020/07/shavuha-s-kuritsej.jpg" height="200">'

	let a ={
		1: '<img src="http://pro.radiomayak.ru/wp-content/uploads/2019/12/shayrma.jpg" >',
		2: '<img src="https://worldofmeat.ru/wp-content/uploads/2020/07/shavuha-s-kuritsej.jpg" >',
		3: '<img src="https://comp-pro.ru/wp-content/uploads/2019/02/shaurma-1024x652.jpg" >',
		4: '<img src="https://cdn1.flamp.ru/ac92694291a99f08e2780b5c7248b4e1.JPG" >'
	}

	i = 1
	indicator = document.getElementById("indicator");
	indicator.innerHTML = `<p class="ind">${i}</p>`
	

	let btnleft = document.getElementById("btn1")
	let btnright = document.getElementById("btn2")

	function slideLeft(){
		if (i == 1){
			i = 4
			img.innerHTML = `${a[i]}`
		}
		else{
			i--
			img.innerHTML = `${a[i]}`
		}
		indicator.innerHTML = `<p class="ind">${i}</p>`
	}

	function slideRight(){
		if (i == 4){
			i = 1
			img.innerHTML = `${a[i]}`
		}
		else{
			i++
			img.innerHTML = `${a[i]}`
		}
		indicator.innerHTML = `<p class="ind">${i}</p>`
	}

	btnleft.addEventListener('click', slideLeft)
	btnright.addEventListener('click', slideRight)
}