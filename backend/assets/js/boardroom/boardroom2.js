var tpj = jQuery;
                var revapi150;
                tpj(document).ready(function () {
                    if (tpj("#rev_slider_150_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#rev_slider_150_1");
                    } else {
                        revapi150 = tpj("#rev_slider_150_1").show().revolution({
                            sliderType: "hero",
                            jsFileLocation: "/plugins/slider-revolution/js/",
                            sliderLayout: "fullscreen",
                            dottedOverlay: "none",
                            /* delay:9000, */
                            navigation: {},
                            visibilityLevels: [1240, 1024, 778, 480],
                            gridwidth: 1240,
                            gridheight: 868,
                            lazyType: "none",
                            scrolleffect: {
                                fade: "on",
                                blur: "on",
                                on_layers: "on",
                                direction: "top",
                                multiplicator_layers: "2",
                                tilt: "10",
                                disable_on_mobile: "off",
                            },
                            parallax: {
                                type: "mouse",
                                origo: "enterpoint",
                                speed: 400,
                                levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                            },
                            shadow: 0,
                            spinner: "on",
                            autoHeight: "off",
                            fullScreenAutoWidth: "off",
                            fullScreenAlignForce: "off",
                            fullScreenOffsetContainer: "",
                            fullScreenOffset: "60px",
                            disableProgressBar: "on",
                            hideThumbsOnMobile: "off",
                            hideSliderAtLimit: 0,
                            hideCaptionAtLimit: 0,
                            hideAllCaptionAtLilmit: 0,
                            debugMode: false,
                            fallbacks: {
                                simplifyAll: "off",
                                disableFocusListener: false,
                            }
                        });
                    }
                });