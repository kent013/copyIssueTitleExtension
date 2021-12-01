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
        console.log('hogehoge')
        header = checkForCopyTitleButtonHeader()
        if(header == null){
            return
        }
        clearInterval(intervalId)
        addCopyTitleButton(header, () => {
            const text = createCopyTitleText()
            if(text === undefined){
                return
            }
            copyTextToClipBoard(text)
        })
    }, 1000)
}

function addCopyTitleButton(parent, onclickFunction){
    document.querySelectorAll('#copy_title_text_button').forEach(e => e.remove());
    
    var copyButton = document.createElement('button')
    copyButton.id = "copy_title_text_button"
    copyButton.onclick = onclickFunction
    parent.prepend(copyButton)
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
