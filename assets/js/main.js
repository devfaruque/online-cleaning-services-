! function($) {
    "use strict";
    $(document).ready(function() {
        if (new WOW({
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0
            }).init(), $('[data-toggle="tooltip"]').tooltip(), $(".timer").countTo(), $(".fun-fact").appear(function() {
                $(".timer").countTo()
            }, {
                accY: -100
            }), $(".element").typed({
                strings: ["Cleaning Service", "Sanitization", "Dry Cleaning", "Pressure Washing", "Laundry"],
                typeSpeed: 10,
                loop: !0,
                backDelay: 2e3
            }), $("#review-grid,.blog-masonry").imagesLoaded(function() {
                $(".mix-item-menu").on("click", "button", function() {
                    var b = $(this).attr("data-filter");
                    a.isotope({
                        filter: b
                    })
                }), $(".mix-item-menu button").on("click", function(a) {
                    $(this).siblings(".active").removeClass("active"), $(this).addClass("active"), a.preventDefault()
                });
                var a = $("#review-grid").isotope({
                    itemSelector: ".single-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".single-item"
                    }
                });
                $(".blog-masonry").isotope({
                    itemSelector: ".blog-item",
                    percentPosition: !0,
                    masonry: {
                        columnWidth: ".blog-item"
                    }
                })
            }), $(".popup-link").magnificPopup({
                type: "image"
            }), $(".popup-gallery").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                }
            }), $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), $(".magnific-mix-gallery").each(function() {
                var a = $(this).find(".item"),
                    b = [];
                a.each(function() {
                    var a = $(this),
                        c = "image";
                    a.hasClass("magnific-iframe") && (c = "iframe");
                    var d = {
                        src: a.attr("href"),
                        type: c
                    };
                    d.title = a.data("title"), b.push(d)
                }), a.magnificPopup({
                    mainClass: "mfp-fade",
                    items: b,
                    gallery: {
                        enabled: !0,
                        tPrev: $(this).data("prev-text"),
                        tNext: $(this).data("next-text")
                    },
                    type: "image",
                    callbacks: {
                        beforeOpen: function() {
                            var b = a.index(this.st.el); - 1 !== b && this.goTo(b)
                        }
                    }
                })
            }), $(".plugins-carousel").owlCarousel({
                loop: !1,
                margin: 30,
                nav: !1,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                dots: !1,
                autoplay: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    500: {
                        items: 2
                    },
                    1e3: {
                        items: 3
                    }
                }
            }), $(".review-carousel").owlCarousel({
                loop: !1,
                margin: 30,
                nav: !1,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                dots: !1,
                autoplay: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    }
                }
            }), $(".custom-cursor").length) {
            var b = document.querySelector(".custom-cursor__cursor"),
                c = document.querySelector(".custom-cursor__cursor-two"),
                a = document.querySelectorAll("a");
            document.addEventListener("mousemove", function(a) {
                a.clientX, a.clientY, b.style.transform = `translate3d(calc(${a.clientX}px - 50%), calc(${a.clientY}px - 50%), 0)`
            }), document.addEventListener("mousemove", function(a) {
                var b = a.clientX,
                    d = a.clientY;
                c.style.left = b + "px", c.style.top = d + "px"
            }), document.addEventListener("mousedown", function() {
                b.classList.add("click"), c.classList.add("custom-cursor__innerhover")
            }), document.addEventListener("mouseup", function() {
                b.classList.remove("click"), c.classList.remove("custom-cursor__innerhover")
            }), a.forEach(a => {
                a.addEventListener("mouseover", () => {
                    b.classList.add("custom-cursor__hover")
                }), a.addEventListener("mouseleave", () => {
                    b.classList.remove("custom-cursor__hover")
                })
            })
        }
    })
}(jQuery)