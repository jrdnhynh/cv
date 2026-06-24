"use strict";

// ui init
function initScripts() {

    // mouse hover function
    $('.cv-content p, .cv-content h1, .cv-content h2, .cv-content li, .label, .course, .technologies, .grade')
        .hover(
            function () {
                $(this).css('background-color', 'rgba(0, 0, 149, 0.2)');
            },
            function () {
                $(this).css('background-color', '');
            }
        );

    // click copy email button
    $('#copy-email').off('click').on('click', () => {
        const emailText = document.getElementById('email');

        const range = document.createRange();
        range.selectNode(emailText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        document.execCommand('copy');
        window.getSelection().removeAllRanges();

        emailText.innerText = 'Email copied!';
        setTimeout(() => {
            emailText.innerText = 'jrdnhynh@gmail.com';
        }, 1500);
    });

    // opacity change on hover for the linkedin and github icon
    $('.icons-container .linkedin-icon, .icons-container .github-icon, .copy-icon, .back-button')
        .hover(
            function () {
                $(this).css('opacity', '0.5');
            },
            function () {
                $(this).css('opacity', '');
            }
        );
}

// initial page load
$(document).ready(() => {
    initScripts();
});

// init barba (transitions between pages)

barba.init({
    transitions: [
        {
            name: "fade-blur",

            sync: true, // runs enter + leave at same time

            async leave(data) {
                const $el = $(data.current.container).find('.cv-container');

                return $el.animate(
                    { opacity: 0 },
                    {
                        duration: 180,
                        easing: "swing",
                        step: function (now) {
                            $(this).css({
                                filter: `blur(${(1 - now) * 6}px)`
                            });
                        }
                    }
                ).promise();
            },

            async enter(data) {
                const $container = $(data.next.container);
                const $el = $container.find('.cv-container');

                // stack new page ON TOP of old one
                $container.css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 2
                });

                $(data.current.container).css({
                    zIndex: 1
                });

                // start hidden
                $el.css({
                    opacity: 0,
                    filter: 'blur(6px)'
                });

                return $el.animate(
                    { opacity: 1 },
                    {
                        duration: 200,
                        easing: "swing",
                        step: function (now) {
                            $(this).css({
                                filter: `blur(${(1 - now) * 6}px)`
                            });
                        }
                    }
                ).promise();
            }
        }
    ]
});

// barba reinit
barba.hooks.afterEnter(() => {
    initScripts();
});
