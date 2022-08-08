//show NAV
function showNav(){
 menu_btn.style.display = "none";
 cancel_btn.style.display = "block";
 nav_opener.style.display = "block";
 console.log('Nav Opened...');
}
//hide NAV
function hideNav(){
 cancel_btn.style.display = "none";
 menu_btn.style.display = "block"; 
 nav_opener.style.display = "none";
 console.log('Nav closed...');
}