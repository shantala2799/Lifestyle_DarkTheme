const changeMode = () => {
    let icon=document.getElementById('icon')
    icon.onclick = () =>{
        document.body.classList.toggle('mydark')
    if( document.body.classList.contains('mydark')){
        icon.src="Images/dark/sun.png" 
        icon.title="Light Mode"
    }else{
        icon.src="Images/dark/moon.png"
        icon.title="Dark Mode"
    }
    }
}