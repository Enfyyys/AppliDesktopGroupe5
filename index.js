window.addEventListener("load", () => {
    hasNetwork(navigator.onLine);

    window.addEventListener("online", () => {
        // Set hasNetwork to online when they change to online.
        hasNetwork(true);
    });

    window.addEventListener("offline", () => {
        // Set hasNetwork to offline when they change to offline.
        hasNetwork(false);
    });
});

function hasNetwork(online) {
    const element = document.getElementById("internet_status");
    // Update the DOM to reflect the current status
    if (online) {
        element.textContent = "Online";
    } else {
        element.textContent = "Offline";
    }
}

document.getElementById("internet_status").textContent = hasNetwork();