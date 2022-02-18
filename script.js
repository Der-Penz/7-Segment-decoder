//left = least significant bit
//right = most significant bit
var segmentsChecked = [0, 0, 0, 0, 0, 0, 0, 0];
var highActive = 1;

$("#toggle-switch").on("change", function(){
    highActive = 1 - highActive;
    segClicked();  
})

$(".segment").click(segClicked);

$("#binCopy").click(() => {
    navigator.clipboard.writeText($("#bin").val());
});

$("#hexCopy").click(() => {
    navigator.clipboard.writeText($("#hex").val())
});

$("#decCopy").click(() => {
    navigator.clipboard.writeText($("#dec").val())
});
 
function segClicked(){
    $(this).toggleClass("segment-checked");
    $(this).children().toggleClass("segment-checked");

    let index = $(this).index();
    toggleValue(index);
    
    let binary = getBinaryValue();

    $("#bin").val(binary);
    $("#hex").val(getHexValue(binary));
    $("#dec").val(getDecimalValue(binary));
}

function toggleValue(i){
        segmentsChecked[i]++;
        segmentsChecked[i] %= 2;
}

function getBinaryValue(){
    let binary = '';
    for (let i = segmentsChecked.length; i > 0; i--) {
        if(highActive)
            binary += segmentsChecked[i - 1];
        else{
            binary += (1 - segmentsChecked[i - 1]);
        }
    }
    return binary;
}

function getHexValue(bin){
    return parseInt(bin, 2).toString(16);
}

function getDecimalValue(bin){
    return parseInt(bin, 2);
}
