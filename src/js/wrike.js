(function() {
    installCopyTitleButton(() => {
        return document.querySelector('.home-header__section--right')
    }, () => {
        console.log('copy url and title')
        var object = document.querySelector('.title__field')
        if(!object){
            return
        }
        var title = object.value
        object = document.querySelector('.task-author__task-id')
        if(!object){
            return
        }
        var id = object.textContent.replace(/[^0-9]/g, '')
        return title + "\n" + "https://www.wrike.com/open.htm?id=" + id
    })
})()
