let tab;
let tabContent;

window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show'); 
    }
}

document.getElementById('tabs').onclick = function (event) {
    let target = event.target;
    if (target.className == 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                showTabsContent(i);
                break;
            }
        }
    }
}
function generate1() {
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;

    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');

    let block = document.getElementById('block');
    let textarea = document.getElementById('completedCode');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;

    block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px';
    textarea.value = "border-radius: " + block.style.borderRadius+';'

}

function generateBoxShadow() {
    let offsetX = document.getElementById('offsetX').value;
    let offsetY = document.getElementById('offsetY').value;
    let blurRadius = document.getElementById('blurRadius').value;
    let spreadRadius = document.getElementById('spreadRadius').value;
    
    let offsetXValue = document.getElementById('offsetXValue');
    let offsetYValue = document.getElementById('offsetYValue');
    let blurRadiusValue = document.getElementById('blurRadiusValue');
    let spreadRadiusValue = document.getElementById('spreadRadiusValue');
    
    let box = document.getElementById('box');
    let boxShadowCode = document.getElementById('boxShadowCode');
    
    offsetXValue.value = offsetX;
    offsetYValue.value = offsetY;
    blurRadiusValue.value = blurRadius;
    spreadRadiusValue.value = spreadRadius;
    
    
    box.style.boxShadow = offsetX + 'px ' + offsetY + 'px ' + blurRadius + 'px ' + spreadRadius + 'px ' + '#25cc9a';
    
    boxShadowCode.value = 'box-shadow:' + box.style.boxShadow+';'
}

function generateBoxSizing() {
    let boxSizing = document.getElementById('box-sizing').value;
    let width = document.getElementById('width').value;
    let borderColor = document.getElementById('borderColor').value;
    let padding = document.getElementById('padding').value;
  
    let widthValue = document.getElementById('widthValue');
    let borderColorValue = document.getElementById('borderColorValue');
    let paddingValue = document.getElementById('paddingValue');
  
    let icon = document.getElementById('icon');
    let boxSizingCode = document.getElementById('boxSizingCode');
  
    icon.style.boxSizing = boxSizing
    icon.style.width = width + 'px';
    icon.style.border = borderColor + 'px solid #53b858';
    icon.style.padding = padding + 'px';
  
    widthValue.value = width;
    borderColorValue.value = borderColor;
    paddingValue.value = padding;

    boxSizingCode.value = 'box-sizing: ' + boxSizing + '; width: ' + width + 'px; border: ' + borderColor + 'px solid #5B6DCD; padding: ' + padding + 'px;';
  }


