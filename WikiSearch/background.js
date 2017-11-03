chrome.contextMenus.create({
	title: "WikiSearch",
	contexts: ["selection"],
	onclick : myFunction
});

function myFunction(selectedText){
	chrome.tabs.create({url: "https://en.wikipedia.org/wiki/"+selectedText.selectionText})
}