(function() {
    installCopyTitleButton(() => {
        return document.querySelector('.pagehead-actions')
    }, () => {
        console.log('copy url and title')
        var object = document.querySelector('h1.gh-header-title span.markdown-title')
        if(!object){
            return
        }
        var title = object.textContent
        object = document.querySelector('h1.gh-header-title span.f1-light')
        if(!object){
            return
        }
        var key = object.textContent
        object = document.querySelector("meta[property='og:url']")
        if(!object){
            return
        }
        var url = object.getAttribute('content')
        return key + " " + title + "\n" + url
    })
})()