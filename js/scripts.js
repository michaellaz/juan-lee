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

    navigator.clipboard.writeText("https://michaellaz.netlify.app")
        .then(() => alert("Copied URL to clipboard."))
        .catch(() => alert("Failed to copy URL to clipboard."));
});
