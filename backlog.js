(function() {
    installCopyTitleButton(() => {
        var bars = document.getElementsByClassName('user-nav__list')
        if(bars.length == 0){
            return false
        }
        return bars
    }, () => {
        console.log('copy url and title')
        var objects = document.getElementsByClassName('ticket__key-number')
        if(objects.length == 0){
            return
        }
        var key = objects[0].textContent
        var objects = document.getElementsByClassName('markdown-body')
        if(objects.length == 0){
            return
        }
        var title = objects[0].textContent
        var objects = document.getElementsByTagName('link')
        if(objects.length == 0){
            return
        }
        var link = null;
        for(var i = 0; i < objects.length; i++){
            if(objects[i].hasAttribute('rel') && objects[i].getAttribute('rel') == 'canonical'){
                link = objects[i].getAttribute('href')
            }
        }
        if(!link){
            return
        }

        return key + ' ' + title + "\n" + link
    })
})()