window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkbtn";
    button.textContent = "Dark Mode";
    document.querySelector("#center").prepend(button);
    button.addEventListener('click',enableDarkMode)
}

const enableDarkMode = () => {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = "white";
    document.getElementsByTagName('ytd-app')[0].style.color = "black !important";
}