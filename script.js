const presHoverImage = document.getElementById("hover-pres");

const presHeadshot = "imgs/anna-headshot.jpg";
const presNamecard = "imgs/anna-namecard.jpg";

presHoverImage.addEventListener("mouseover", () => {
    presHoverImage.src = presNamecard;
});

presHoverImage.addEventListener("mouseout", () => {
    presHoverImage.src = presHeadshot;
});

const treasHoverImage = document.getElementById("hover-treas");

const treasHeadshot = "imgs/sean-headshot.jpg";
const treasNamecard = "imgs/sean-namecard.jpg";

treasHoverImage.addEventListener("mouseover", () => {
    treasHoverImage.src = treasNamecard;
});

treasHoverImage.addEventListener("mouseout", () => {
    treasHoverImage.src = treasHeadshot;
});