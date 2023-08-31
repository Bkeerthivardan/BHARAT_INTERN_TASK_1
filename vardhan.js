function addContent() {
    const headElem = document.getElementById('head');
    const bodyElem = document.getElementById('body');
    const picElem = document.getElementById('pic');
    const clipElem = document.getElementById('clip');
    const contentShowcase = document.getElementById('contentShowcase');

    let contentHTML = `
        <div class="content-box">
            <h2>${headElem.value}</h2>
            <p>${bodyElem.value}</p>
    `;

    if (picElem.files[0]) {
        const picURL = URL.createObjectURL(picElem.files[0]);
        contentHTML += `<img src="${picURL}" alt="User Image">`;
    }

    if (clipElem.files[0]) {
        const clipURL = URL.createObjectURL(clipElem.files[0]);
        contentHTML += `<video src="${clipURL}" controls></video>`;
    }

    contentHTML += `</div>`;

    contentShowcase.innerHTML += contentHTML;

    document.getElementById('contentForm').reset();
}
