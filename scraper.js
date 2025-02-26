(function(){
    const element = document.querySelector('.yt-emoji-picker-category-renderer[aria-label="YouTube"]');
    let result = {};
    for(const child of element.children){
        if(!child.src){
            continue;
        }
        result[child.ariaLabel] = child.src.replace('w48', 'w500').replace('h48', 'h500');
    }
    console.log(JSON.stringify(result, null, 2));
}());