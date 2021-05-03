
function openBook(index) {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = "/prove02/viewBook";
    const hiddenField = document.createElement('input');
    hiddenField.type = 'hidden';
    hiddenField.name = 'index';
    hiddenField.value = index;
    form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
}

function deleteBook() {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = "/prove02/deleteBook";
    const hiddenField = document.getElementById('index');
    form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
}

function listBooks() {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = "/prove02/list";
    document.body.appendChild(form);
    form.submit();
}

function toInput() {
    const form = document.createElement('form');
    form.method = 'GET';
    form.action = "/prove02/input";
    document.body.appendChild(form);
    form.submit();
}