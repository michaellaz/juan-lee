const shareScreen = document.querySelector("#share-screen");
shareScreen.style.display = "none";
document.querySelector("#share-button").addEventListener("click", () => {
    if (shareScreen.style.display === "none") {
        shareScreen.style.display = "block"; 
    } else {
        shareScreen.style.display = "none"; 
    }
});


document.querySelector("#copy-to-clipboard").addEventListener("click", () => {
    if (!navigator.clipboard) {
        return; 
    }

    // navigator.clipboard.writeText("https://michaellaz.netlify.app")
    //     .then(() => alert("Copied URL to clipboard."))
    //     .catch(() => alert("Failed to copy URL to clipboard."));

    navigator.clipboard.writeText("https://michaellaz.netlify.app")
        .then((async () => {
            const copiedFloater = document.createElement("div");
            document.body.appendChild(copiedFloater);

            copiedFloater.innerHTML = "Copied URL";

            copiedFloater.style.position = "absolute";
            copiedFloater.style.top = "50%";
            copiedFloater.style.left = "50%";
            copiedFloater.style.transform = "translate(-50%, 0)";
            copiedFloater.style.background = "black";
            copiedFloater.style.color = "white";
            copiedFloater.style.borderRadius = "5px";
            copiedFloater.style.padding = "10px";
            copiedFloater.style.opacity = 0.75;

            await sleep(1000);

            document.body.removeChild(copiedFloater);
        })());
});

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
