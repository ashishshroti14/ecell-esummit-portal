var revapi349,
					tpj = jQuery;
				tpj(document).ready(function () {
					if (tpj("#rev_slider_349_2").revolution == undefined) {
						revslider_showDoubleJqueryError("#rev_slider_349_2");
					} else {
						revapi349 = tpj("#rev_slider_349_2").show().revolution({
							sliderType: "standard",
							jsFileLocation: "/plugins/slider-revolution/js/",
							sliderLayout: "fullscreen",
							dottedOverlay: "none",
							delay: 9000,
							navigation: {
								keyboardNavigation: "off",
								keyboard_direction: "horizontal",
								mouseScrollNavigation: "off",
								mouseScrollReverse: "default",
								onHoverStop: "off",
//								arrows: {
//									style: "new-bullet-bar",
//									enable: true,
//									hide_onmobile: true,
//									hide_under: 778,
//									hide_onleave: false,
//									tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div> </div>',
//									left: {
//										h_align: "left",
//										v_align: "center",
//										h_offset: 30,
//										v_offset: 0
//									},
//									right: {
//										h_align: "right",
//										v_align: "center",
//										h_offset: 30,
//										v_offset: 0
//									}
//								}
							},
							responsiveLevels: [1240, 1024, 778, 480],
							visibilityLevels: [1240, 1024, 778, 480],
							gridwidth: [1240, 1024, 778, 480],
							gridheight: [900, 768, 960, 720],
							lazyType: "none",
							parallax: {
								type: "scroll",
								origo: "slidercenter",
								speed: 1000,
								speedbg: 0,
								speedls: 1000,
								levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 30],
							},
							shadow: 0,
							spinner: "off",
							stopLoop: "off",
							stopAfterLoops: -1,
							stopAtSlide: -1,
							shuffle: "off",
							autoHeight: "off",
							fullScreenAutoWidth: "off",
							fullScreenAlignForce: "off",
							fullScreenOffsetContainer: "",
							fullScreenOffset: "",
							hideThumbsOnMobile: "off",
							hideSliderAtLimit: 0,
							hideCaptionAtLimit: 0,
							hideAllCaptionAtLilmit: 0,
							debugMode: false,
							fallbacks: {
								simplifyAll: "off",
								nextSlideOnWindowFocus: "off",
								disableFocusListener: false,
							}
						});
					}
				}); /*ready*/