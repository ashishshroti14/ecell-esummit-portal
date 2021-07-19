
				var revapi92,
					tpj;
				(function () {
					if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad);
					else onLoad();

					function onLoad() {
						if (tpj === undefined) {
							tpj = jQuery;
							if ("off" == "on") tpj.noConflict();
						}
						if (tpj("#rev_slider_92_1").revolution == undefined) {
							revslider_showDoubleJqueryError("#rev_slider_92_1");
						} else {
							revapi92 = tpj("#rev_slider_92_1").show().revolution({
								sliderType: "hero",
								jsFileLocation: "plugins/slider-revolution/js/",
								sliderLayout: "fullwidth",
								dottedOverlay: "none",
								delay: 9000,
								viewPort: {
									enable: true,
									outof: "wait",
									visible_area: "80%",
									presize: true
								},
								responsiveLevels: [1240, 1024, 778, 778],
								visibilityLevels: [1240, 1024, 778, 778],
								gridwidth: [1240, 1024, 778, 778],
								gridheight: [900, 900, 800, 800],
								lazyType: "none",
								parallax: {
									type: "scroll",
									origo: "slidercenter",
									speed: 400,
									speedbg: 0,
									speedls: 1000,
									levels: [3, 6, 9, 12, 15, 18, 21, -3, -6, -9, -12, -15, -18, -21, -16, 55],
								},
								shadow: 0,
								spinner: "off",
								autoHeight: "off",
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
						}; /* END OF revapi call */
						RsTypewriterAddOn(tpj, revapi92);
					}; /* END OF ON LOAD FUNCTION */
				}()); 
		