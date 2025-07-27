// This file is for LIFF-specific functionality, such as initialization
// and getting user profiles. The main initialization is in index.html.

// Example of a LIFF-specific function
function sendLiffMessage(message) {
    if (liff.isApiAvailable('shareTargetPicker')) {
        liff.shareTargetPicker([{
            type: 'text',
            text: message
        }]);
    }
}
