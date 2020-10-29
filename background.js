chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
        // Sort tabs according to their index in the window.
        tabs.sort((a, b) => { return a.index < b.index; });
        // let lastTab = tabs.length - 1;
        let newIndex = -1;
        switch (command) {
            case "alt1": newIndex = 0; break
            case "alt2": newIndex = 1; break
            case "alt3": newIndex = 2; break
            case "alt4": newIndex = 3; break
            case "alt5": newIndex = 4; break
            case "alt6": newIndex = 5; break
            case "alt7": newIndex = 6; break
            case "alt8": newIndex = 7; break
            case "alt9": newIndex = 8; break
        }
        chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true});
    });
});