(function() {
    installCopyTitleButton(() => {
        var bars = document.getElementsByClassName('home-header__section--right')
        if(bars.length == 0){
            return false
        }
        return bars
    }, () => {
        console.log('copy url and title')
        var titles = document.getElementsByClassName('title__field')
        if(titles.length == 0){
            return
        }
        var ids = document.getElementsByClassName('task-author__task-id')
        if(ids.length == 0){
            return
        }
        var wrikeTitle = titles[0].value
        var wrikeId = ids[0].textContent.replace(/[^0-9]/g, '')
        return wrikeTitle + "\n" + "https://www.wrike.com/open.htm?id=" + wrikeId
    })
})()