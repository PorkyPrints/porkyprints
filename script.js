// Dynamic gradient color generator based on background image
window.addEventListener("load", () => {
    const img = new Image();
    img.src = "images/background.png";
    img.crossOrigin = "Anonymous";

    img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        // sample a few points to estimate dominant colors
        const sampleColors = [];
        for (let i = 0; i < 5; i++) {
            const x = Math.random() * img.width;
            const y = Math.random() * img.height;
            const pixel = ctx.getImageData(x, y, 1, 1).data;
            sampleColors.push(`rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, 0.6)`);
        }

        const hero = document.querySelector(".hero");
        if (hero && sampleColors.length >= 2) {
            hero.style.background = `linear-gradient(270deg, ${sampleColors.join(", ")})`;
            hero.style.backgroundSize = "800% 800%";
            hero.style.animation = "gradientShift 15s ease infinite";
        }
    };
});
