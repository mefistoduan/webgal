function displayText(content,fn){
    $(".chat .content").lbyl({
        content: content,
        speed: 100,
        type: 'show',
    },fn);
}
