chrome.contextMenus.create({
    title: "拡張機能です!!",
    onclick: function (info, tab) {
        if (localStorage["message"])
            window.alert(localStorage["message"]);
        else {
            window.alert('Hello,GoogleExtension!');
        }
    }
})