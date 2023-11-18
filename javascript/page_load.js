(function(){
    window.addEventListener('load', outputInfoAboutDownload);
})();

function outputInfoAboutDownload() {
    const pageEnd = performance.mark('pageEnd');
    const pageloadtime = pageEnd.startTime / 1000;

    let newElemLoad = document.createElement('p');
    let newTextLoad = document.createTextNode(`Page load time is ${pageloadtime.toFixed(3)} seconds.`);
    newElemLoad.appendChild(newTextLoad);
    newElemLoad.style.padding = "10px 0px";
    newElemLoad.setAttribute('align', 'center');

    let footerElem = document.getElementsByClassName('footer-container__contacts')[0].parentNode;
    footerElem.appendChild(newElemLoad);
}