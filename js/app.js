// console.log('it is working');
showNotes()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// if user adds a note add it to the locakl storage

let addbtn = document.getElementById('addBtn')
addbtn.addEventListener('click', function addnotes() {

    let addtxt = document.getElementById('addTxt')
    let notes = localStorage.getItem('notes')
    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    noteObj.push(addtxt.value)
    localStorage.setItem('notes', JSON.stringify(noteObj));
    addtxt.value = '';
    console.log(noteObj);
    showNotes()
})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// to show notes

function showNotes() {
    let notes = localStorage.getItem('notes')

    if (notes == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(notes);
    }
    let html = ''
    noteObj.forEach(function (element, index) {
        html +=
            `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Tasks-${index + 1}</h5>
        <p class="card-text">${element}</p>
        <a id= '${index}' onclick= 'deleteNote(this.id)' class="btn btn-primary">Delete Tasks</a>
        </div>
        </div>`
    });
    let notesElm = document.getElementById('Notes')
    if (noteObj.length != 0) {
        notesElm.innerHTML = html
    }
    else {
        notesElm.innerHTML = `<b>nothing to show use "Add Tasks" in above</b>`
    }


}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function to delete a note

function deleteNote(index) {
    let confir = confirm('are you sure you want to delete this note')
    if (confir == true) {

        let notes = localStorage.getItem('notes')

        if (notes == null) {
            noteObj = [];
        }
        else {
            noteObj = JSON.parse(notes);
        }
        noteObj.splice(index, 1)
        localStorage.setItem('notes', JSON.stringify(noteObj));
        showNotes()
    }
    else {
        showNotes()
    }

}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// searching words in the notes
let search = document.getElementById('searchTxt')
search.addEventListener('input', function () {
    let inpval = search.value
    let notecard = document.getElementsByClassName('notecard')
    Array.from(notecard).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('p')[0].innerText.toLowerCase()
        if (cardtxt.includes(inpval)) {
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none'

        }
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


