// alert("test");

const share = document.querySelector(".share");
const shareIcon = document.querySelector(".share-icon");
const media = document.querySelector(".media");

share.addEventListener("click", () => {
	media.classList.toggle("media-show");
});

media.addEventListener("mouseleave", () => {
	if (media.classList.contains("media-show")) {
		media.classList.remove("media-show");
	} else {
		return;
	}
});

media.addEventListener("click", () => {
	if (media.classList.contains("media-show")) {
		media.classList.remove("media-show");
	} else {
		return;
	}
});
