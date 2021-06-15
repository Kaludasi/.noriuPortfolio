const $ = require( "jquery" );

$('#email').on("hover", "#email", function () {
    this.innerText = 'a';
    document.getElementById('email').innerText = 'a';
})

$(`#phone`).on("hover", "#phone", function () {
    document.getElementById('email').innerText = 'b';
})

const scrollToRef = (id) => {
    setTimeout(() =>
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
        ,100)

}

export default scrollToRef;
