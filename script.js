document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".panel-header").forEach(button => {
        button.addEventListener("click", () => {
            const panelContainer = button.parentElement;
            panelContainer.classList.toggle("show");
        });
    });

    const presHoverImage = document.querySelector("#hover-pres");
    const presHeadshot = "imgs/anna-headshot.jpg";
    const presNamecard = "imgs/anna-namecard.jpg";

    const treasHoverImage = document.querySelector("#hover-treas");
    const treasHeadshot = "imgs/sean-headshot.jpg";
    const treasNamecard = "imgs/sean-namecard.jpg";

    presHoverImage.addEventListener("mouseover", () => {
        presHoverImage.src = presNamecard;
    });

    presHoverImage.addEventListener("mouseout", () => {
        presHoverImage.src = presHeadshot;
    });

    treasHoverImage.addEventListener("mouseover", () => {
        treasHoverImage.src = treasNamecard;
    });

    treasHoverImage.addEventListener("mouseout", () => {
        treasHoverImage.src = treasHeadshot;
    });
});
