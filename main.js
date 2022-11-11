
const topNav = document.querySelector("#topNavStatic")
const menuBtn = document.querySelector("#menuBtn")
const closeDropDown = document.querySelector("#closeDropDown")

menuBtn.addEventListener('click', 
function (){
        topNav.setAttribute('class', 'dropDown');
        closeDropDown.setAttribute('class', 'displayCloseDropdown')
        console.log('down');
});
closeDropDown.addEventListener('click', 
function (){
    topNav.setAttribute('class', 'topNav')
    closeDropDown.setAttribute('class', 'crossNoDisplay')
    console.log('up')
});
