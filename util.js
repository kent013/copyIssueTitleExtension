function installCopyTitleButton(checkForCopyTitleButtonHeader, createCopyTitleText){
    /**
     * グローバルなガード変数をチェック、設定する。
     * コンテンツスクリプトが再び同じページに挿入された場合、
     * 次は何もしない。
     */
    if (window.hasCopyTitleRun) {
      return
    }
    window.hasCopyTitleRun = true
    
    var intervalId = setInterval(() => {
        headers = checkForCopyTitleButtonHeader()
        if(headers){
            clearInterval(intervalId)
            addCopyTitleButton(headers, () => {
                const text = createCopyTitleText()
                copyTextToClipBoard(text)
            })
        }
    }, 1000)
}

function addCopyTitleButton(parents, onclickFunction){
    if(document.getElementById('copy_title_text_button') != null){
        document.getElementById('copy_title_text_button').remove()
    }
    
    for(var i = 0; i < parents.length; i++){
        var parent = parents[i]
        var copyButton = document.createElement('button')
        copyButton.id = "copy_title_text_button"
        copyButton.onclick = onclickFunction
        parent.prepend(copyButton)
    }
}

function copyTextToClipBoard(str){
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
