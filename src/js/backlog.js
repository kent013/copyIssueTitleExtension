(function() {
    installCopyTitleButton(() => {
        return document.querySelector('.user-nav__list')
    }, () => {
        console.log('copy url and title')
        var object = document.querySelector('.ticket__key-number')
        if(!object){
            return
        }
        var key = object.textContent
        object = document.querySelector('.markdown-body')
        if(!object){
            return
        }
        var title = object.textContent
        object = document.querySelector("link[rel='canonical']")
        if(!object){
            return
        }
        var link = object.getAttribute('href')
        return key + ' ' + title + "\n" + link
    })
})()