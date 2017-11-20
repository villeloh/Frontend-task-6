'use strict';

showImages();

function showImages() {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
    ul.innerHTML = html;
	useModals(ul);
  });
};

function useModals(elem) { 

	const links = elem.querySelectorAll('a');	
	disableLinks(links);
	
	const modal = document.querySelector('#myModal');
	const modalImg = document.querySelector('#img01');
	const caption = document.querySelector("#caption");
	const closeBtn = document.querySelector(".closeBtn");
	
	links.forEach(function(link) {
		
		link.addEventListener("click", function(event){
		
			modalImg.src = link.href;	
			modal.classList.add("visible");
			modal.classList.remove("hidden");
			caption.innerHTML = link.parentElement.querySelector('figcaption h3').innerHTML;
		});
	});
	
	closeBtn.addEventListener("click", function(event){
	
		modal.classList.add("hidden");
		modal.classList.remove("visible");
	});
	
	
	
}

function disableLinks(linklist) {
	
	linklist.forEach(function(link) {
		link.addEventListener("click", function(event){
		
			event.preventDefault();
		});
	});
}














