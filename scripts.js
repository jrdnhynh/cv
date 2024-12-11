"use strict";

$(document).ready(() => {
    // fade in animation for the cv container 1.2 seconds
    $('.cv-container').fadeIn(1200);

    // mouse hover function
    $('.cv-content p, .cv-content h1, .cv-content h2, .cv-content li, .label, .course, .technologies, .grade').hover(
        function() {
            $(this).css('background-color', 'rgba(0, 0, 149, 0.2)'); // change background color to purple
        },
        function() {
            $(this).css('background-color', ''); // revert background color to original when mouse leaves
        });

    // click copy email button
    $('#copy-email').click(() => {
        // select the email text
        const emailText = document.getElementById('email');
        const range = document.createRange();
        range.selectNode(emailText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        // copy the email text
        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        // display copied message briefly
        emailText.innerText = 'Email copied!';
        setTimeout(() => {
            emailText.innerText = 'jrdnhynh@gmail.com';
        }, 1500);
    });

    //opacity change on hover for the linkedin and github icon
    $('.icons-container .linkedin-icon, .icons-container .github-icon, .copy-icon, .back-button').hover(
        function() {
            $(this).css('opacity', '0.5'); // change opacity on hover 50%
        },
        function() {
            $(this).css('opacity', ''); // revert opacity to original when mouse leaves
        }
    );
});
