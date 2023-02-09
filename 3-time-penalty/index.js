// Selected elements
const ulContestants = document.querySelector("ul#contestants");
const divEditor = document.querySelector("#contestant-editor");
const btnNew = document.querySelector("#btnNew");
const inputNew = document.querySelector("#inputNew");

// Data
let contestants = {
    "1": {
        id: "1",
        name: "Contestant 1",
        penalties: [
            {timestamp: Date.now(), duration: 60000},
            {timestamp: Date.now() - 2000, duration: 10000},
            {timestamp: Date.now() - 10000, duration: 30000},
        ],
    },
    "2": {
        id: "2",
        name: "Contestant 2",
        penalties: [
            {timestamp: Date.now(), duration: 10000},
            {timestamp: Date.now() - 5000, duration: 10000},
            {timestamp: Date.now() - 30000, duration: 30000},
        ],
    },
};
let selectedContestant = null;

// ========= Solution =========

function update() {

    for (const contObj in contestants) {

        let cont = contestants[contObj]
        let li = document.createElement('li')
        li.setAttribute("data-id", cont.id)

        let contName = cont.name
        let pen = cont.penalties
        let sumPen = new Date(sumBunti(pen)).getSeconds()

        if (sumPen > 0) {
            li.className = 'penalty'
        }

        li.innerHTML = `${contName} <span> ${sumPen}s </span>`


        ulContestants.appendChild(li)
    }
}

update()

function sumBunti(penalties) {
    let sumPen = 0

    penalties.forEach(pen => {
        if (Math.abs(new Date() - pen.timestamp) > 0) {
            sumPen += pen.duration
        }
    })

    return sumPen
}

divEditor.removeAttribute('hidden')
const h2 = divEditor.querySelector("h2")

ulContestants.addEventListener('click', selectContestant)

const editorUl = divEditor.querySelector("ul")

function selectContestant(e) {
    let id = e.target.getAttribute("data-id")

    selectedContestant = contestants[id]

    h2.innerText = selectedContestant.name

    while (editorUl.firstChild) {
        editorUl.removeChild(editorUl.firstChild)
    }

    selectedContestant.penalties.forEach(pen => {
        let li = document.createElement("li")
        li.innerHTML = `${new Date(pen.timestamp).toLocaleString()} + ${pen.duration / 1000} <progress value="${Math.abs(new Date() - pen.timestamp)}" max="${pen.duration}"></progress> (${Math.abs(new Date() - pen.timestamp)})s`
        editorUl.appendChild(li)
    })
}

let id = 2
btnNew.onclick = function () {
    let n = inputNew.value

    contestants[id] = {
        id: id,
        name: n,
        penalties: []
    }

    let cont = contestants[id]
    let li = document.createElement('li')
    li.setAttribute("data-id", cont.id)

    let contName = cont.name
    let pen = cont.penalties
    let sumPen = new Date(sumBunti(pen)).getSeconds()

    if (sumPen > 0) {
        li.className = 'penalty'
    }

    li.innerHTML = `${contName} <span> ${sumPen}s </span>`


    ulContestants.appendChild(li)

}
