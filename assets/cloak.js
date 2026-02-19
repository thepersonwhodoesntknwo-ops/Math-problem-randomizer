// cloak.js - Mimicking OverCloaked stealth
(function() {
    const targetURL = "https://scramjet-runner--thepersonwhodoe.replit.app"; // Link to your Engine
    
    // Function to launch the cloaked window
    window.launchCloak = function() {
        const win = window.open('about:blank', '_blank');
        if (!win) {
            alert("Please allow popups for the Learning Lab to initialize.");
            return;
        }

        const doc = win.document;
        doc.title = "My Drive - Google Drive";
        
        // Add the Google Drive Favicon
        const link = doc.createElement('link');
        link.rel = 'icon';
        link.href = 'https://ssl.gstatic.com';
        doc.head.appendChild(link);

        // Inject the Iframe that pulls from your Replit
        const iframe = doc.createElement('iframe');
        iframe.style = "position:fixed; top:0; left:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden;";
        iframe.src = targetURL;
        
        doc.body.style.margin = "0";
        doc.body.appendChild(iframe);

        // Instant decoy for the original tab
        window.location.replace("https://drive.google.com");
    };

    // Emergency Panic Key (Esc)
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") window.location.replace("https://classroom.google.com");
    });
})();
