tier_map = {
    'nr': '/assets/img/solvedac_icon/nr.svg',
    'unrated': '/assets/img/solvedac_icon/0.svg',
    'b5': '/assets/img/solvedac_icon/1.svg',
    'b4': '/assets/img/solvedac_icon/2.svg',
    'b3': '/assets/img/solvedac_icon/3.svg',
    'b2': '/assets/img/solvedac_icon/4.svg',
    'b1': '/assets/img/solvedac_icon/5.svg',
    's5': '/assets/img/solvedac_icon/6.svg',
    's4': '/assets/img/solvedac_icon/7.svg',
    's3': '/assets/img/solvedac_icon/8.svg',
    's2': '/assets/img/solvedac_icon/9.svg',
    's1': '/assets/img/solvedac_icon/10.svg',
    'g5': '/assets/img/solvedac_icon/11.svg',
    'g4': '/assets/img/solvedac_icon/12.svg',
    'g3': '/assets/img/solvedac_icon/13.svg',
    'g2': '/assets/img/solvedac_icon/14.svg',
    'g1': '/assets/img/solvedac_icon/15.svg',
    'p5': '/assets/img/solvedac_icon/16.svg',
    'p4': '/assets/img/solvedac_icon/17.svg',
    'p3': '/assets/img/solvedac_icon/18.svg',
    'p2': '/assets/img/solvedac_icon/19.svg',
    'p1': '/assets/img/solvedac_icon/20.svg',
    'd5': '/assets/img/solvedac_icon/21.svg',
    'd4': '/assets/img/solvedac_icon/22.svg',
    'd3': '/assets/img/solvedac_icon/23.svg',
    'd2': '/assets/img/solvedac_icon/24.svg',
    'd1': '/assets/img/solvedac_icon/25.svg',
    'r5': '/assets/img/solvedac_icon/26.svg',
    'r4': '/assets/img/solvedac_icon/27.svg',
    'r3': '/assets/img/solvedac_icon/28.svg',
    'r2': '/assets/img/solvedac_icon/29.svg',
    'r1': '/assets/img/solvedac_icon/30.svg',
    'master': '/assets/img/solvedac_icon/31.svg',
    'sprout5': '/assets/img/solvedac_icon/s1.svg',
    'sprout4': '/assets/img/solvedac_icon/s2.svg',
    'sprout3': '/assets/img/solvedac_icon/s3.svg',
    'sprout2': '/assets/img/solvedac_icon/s4.svg',
    'sprout1': '/assets/img/solvedac_icon/s5.svg',
    'sprout+': '/assets/img/solvedac_icon/s5p.svg',
}

class bojProblem extends HTMLElement {
    connectedCallback() {
        let tier = this.getAttribute('tier')
        let id = this.getAttribute('id')
        let name = this.getAttribute('name')
        if (name == null) name = id
        const img = document.createElement('img')
        img.src = tier_map[tier]
        img.alt = tier
        const label = document.createElement('span')
        label.innerHTML = name
        const link = document.createElement('a')
        link.href = `https://boj.kr/${id}`
        link.appendChild(img)
        link.appendChild(label)

        this.appendChild(link)
        console.log(`${tier} ${id} ${name}`)
    }
}

class tierIcon extends HTMLElement {
    connectedCallback() {
        let tier = this.getAttribute('tier')
        const img = document.createElement('img')
        img.src = tier_map[tier]
        img.alt = tier
        this.appendChild(img)
    }
}

customElements.define('boj-problem', bojProblem)
customElements.define('tier-icon', tierIcon)
