if (!location.href.includes("elearning")){
    location.href = location.href.match(/.+\.org\//) + "elearning"
}
var s = document.createElement('script')
s.src = chrome.runtime.getURL('inject.js')
s.onload = function() {
    this.remove()
}
(document.head || document.documentElement).appendChild(s)