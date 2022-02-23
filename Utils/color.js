function color(r,g,b,a) {
    return {
        r: r,
        g: g,
        b: b,
        a: a
    }
}

function lerp(start, end, percent) {
    let r = start.r * (1 - percent) + end.r * percent
    let g = start.g * (1 - percent) + end.g * percent
    let b = start.b * (1 - percent) + end.b * percent
    let a = start.a * (1 - percent) + end.a * percent
    return color(r, g, b, a)
}

function parse(str) {
    if (str.startsWith('#')) str = str.substr(1)
    if (str.length === 6) {
        let r = parseInt(str.substr(0, 2), 16)
        let g = parseInt(str.substr(2, 2), 16)
        let b = parseInt(str.substr(4, 6), 16)
        let a = 255
        return color(r, g, b, a)
    } else if (str.length === 8) {
        let r = parseInt(str.substr(0, 2), 16)
        let g = parseInt(str.substr(2, 2), 16)
        let b = parseInt(str.substr(4, 2), 16)
        let a = parseInt(str.substr(6, 2), 16)
        return color(r, g, b, a)
    }
    alert("잘못된 색입니다")
}

function toHex(self) {
    let r = Math.round(self.r).toString(16).padStart(2, '0')
    let g = Math.round(self.g).toString(16).padStart(2, '0')
    let b = Math.round(self.b).toString(16).padStart(2, '0')
    let a = Math.round(self.a).toString(16).padStart(2, '0')
    if (a === 'ff') return r + g + b
    return r + g + b + a
}

function getGradient(start, end, text) {
    let length = text.length
	let l2 = length - 1.0
    let newtext = ""
    for (let i = 0; i < length; i++) {
        console.log(i / l2)
        let c = toHex(lerp(start, end, i / l2))
        newtext += "<color=#" + c + ">" + text[i] + "</color>"
    }
    
    return newtext
}


function getGradientS(start, end, text) {
    let length = text.length
	let l2 = length
    let newtext = ""
    for (let i = 0; i < length; i++) {
        console.log(i / l2)
        let c = toHex(lerp(start, end, i / l2))
        newtext += "<color=#" + c + ">" + text[i] + "</color>"
    }
    
    return newtext
}

function getGradientE(start, end, text) {
    let length = text.length
	let l2 = length
    let newtext = ""
    for (let i = 1; i < length + 1; i++) {
        console.log(i / l2)
        let c = toHex(lerp(start, end, i / l2))
        newtext += "<color=#" + c + ">" + text[i - 1] + "</color>"
    }
    
    return newtext
}


function checkGradient() {
    let start = document.getElementById("colorstart").value
    let end = document.getElementById("colorend").value
    let text = document.getElementById("colortext").value
    
    let output = document.getElementById("coloroutput")
    output.value = getGradient(parse(start), parse(end), text)
}


function checkAdofaiGradient() {
    let start = document.getElementById("adofaititlestart").value
    let end = document.getElementById("adofaititleend").value
    let artist = document.getElementById("adofaititleartist").value
    let song = document.getElementById("adofaititlesong").value
    let text = artist + '-' + song
	
	let alen = artist.length
	let slen = song.length
	let dash = lerp(parse(start), parse(end), alen * 1.0 / (alen + slen))
	
    let outputartist = document.getElementById("adofaititleartistoutput")
    let outputsong = document.getElementById("adofaititlesongoutput")
	let grad1 = getGradientS(parse(start), dash, artist) + "<color=#" + toHex(dash) + ">"
	let grad2 = "</color>" + getGradientE(dash, parse(end), song)
    outputartist.value = grad1
    outputsong.value = grad2
}

function copycontent(id) {
    let copyText = document.getElementById(id);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

   /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    alert("복사 완료!");
}