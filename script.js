console.log("loaded extention")

var l = setInterval(()=>{
    if (!location.href.includes("elearning")){return}
    console.log("executing")
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('i.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
    clearInterval(l)
    
},3000)
