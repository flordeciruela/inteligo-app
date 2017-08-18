/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
  html2canvas 0.4.1 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen

  Released under MIT License
*/

(function(window, document, undefined){

"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;

_html2canvas.Util = {};

_html2canvas.Util.log = function(a) {
  if (_html2canvas.logging && window.console && window.console.log) {
    window.console.log(a);
  }
};

_html2canvas.Util.trimText = (function(isNative){
  return function(input) {
    return isNative ? isNative.apply(input) : ((input || '') + '').replace( /^\s+|\s+$/g , '' );
  };
})(String.prototype.trim);

_html2canvas.Util.asFloat = function(v) {
  return parseFloat(v);
};

(function() {
  // TODO: support all possible length values
  var TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g;
  var TEXT_SHADOW_VALUES = /(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;
  _html2canvas.Util.parseTextShadows = function (value) {
    if (!value || value === 'none') {
      return [];
    }

    // find multiple shadow declarations
    var shadows = value.match(TEXT_SHADOW_PROPERTY),
      results = [];
    for (var i = 0; shadows && (i < shadows.length); i++) {
      var s = shadows[i].match(TEXT_SHADOW_VALUES);
      results.push({
        color: s[0],
        offsetX: s[1] ? s[1].replace('px', '') : 0,
        offsetY: s[2] ? s[2].replace('px', '') : 0,
        blur: s[3] ? s[3].replace('px', '') : 0
      });
    }
    return results;
  };
})();


_html2canvas.Util.parseBackgroundImage = function (value) {
    var whitespace = ' \r\n\t',
        method, definition, prefix, prefix_i, block, results = [],
        c, mode = 0, numParen = 0, quote, args;

    var appendResult = function(){
        if(method) {
            if(definition.substr( 0, 1 ) === '"') {
                definition = definition.substr( 1, definition.length - 2 );
            }
            if(definition) {
                args.push(definition);
            }
            if(method.substr( 0, 1 ) === '-' &&
                    (prefix_i = method.indexOf( '-', 1 ) + 1) > 0) {
                prefix = method.substr( 0, prefix_i);
                method = method.substr( prefix_i );
            }
            results.push({
                prefix: prefix,
                method: method.toLowerCase(),
                value: block,
                args: args
            });
        }
        args = []; //for some odd reason, setting .length = 0 didn't work in safari
        method =
            prefix =
            definition =
            block = '';
    };

    appendResult();
    for(var i = 0, ii = value.length; i<ii; i++) {
        c = value[i];
        if(mode === 0 && whitespace.indexOf( c ) > -1){
            continue;
        }
        switch(c) {
            case '"':
                if(!quote) {
                    quote = c;
                }
                else if(quote === c) {
                    quote = null;
                }
                break;

            case '(':
                if(quote) { break; }
                else if(mode === 0) {
                    mode = 1;
                    block += c;
                    continue;
                } else {
                    numParen++;
                }
                break;

            case ')':
                if(quote) { break; }
                else if(mode === 1) {
                    if(numParen === 0) {
                        mode = 0;
                        block += c;
                        appendResult();
                        continue;
                    } else {
                        numParen--;
                    }
                }
                break;

            case ',':
                if(quote) { break; }
                else if(mode === 0) {
                    appendResult();
                    continue;
                }
                else if (mode === 1) {
                    if(numParen === 0 && !method.match(/^url$/i)) {
                        args.push(definition);
                        definition = '';
                        block += c;
                        continue;
                    }
                }
                break;
        }

        block += c;
        if(mode === 0) { method += c; }
        else { definition += c; }
    }
    appendResult();

    return results;
};

_html2canvas.Util.Bounds = function (element) {
  var clientRect, bounds = {};

  if (element.getBoundingClientRect){
    clientRect = element.getBoundingClientRect();

    // TODO add scroll position to bounds, so no scrolling of window necessary
    bounds.top = clientRect.top;
    bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
    bounds.left = clientRect.left;

    bounds.width = element.offsetWidth;
    bounds.height = element.offsetHeight;
  }

  return bounds;
};

// TODO ideally, we'd want everything to go through this function instead of Util.Bounds,
// but would require further work to calculate the correct positions for elements with offsetParents
_html2canvas.Util.OffsetBounds = function (element) {
  var parent = element.offsetParent ? _html2canvas.Util.OffsetBounds(element.offsetParent) : {top: 0, left: 0};

  return {
    top: element.offsetTop + parent.top,
    bottom: element.offsetTop + element.offsetHeight + parent.top,
    left: element.offsetLeft + parent.left,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

function toPX(element, attribute, value ) {
    var rsLeft = element.runtimeStyle && element.runtimeStyle[attribute],
        left,
        style = element.style;

    // Check if we are not dealing with pixels, (Opera has issues with this)
    // Ported from jQuery css.js
    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels

    if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( value ) && /^-?\d/.test(value) ) {
        // Remember the original values
        left = style.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
            element.runtimeStyle.left = element.currentStyle.left;
        }
        style.left = attribute === "fontSize" ? "1em" : (value || 0);
        value = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
            element.runtimeStyle.left = rsLeft;
        }
    }

    if (!/^(thin|medium|thick)$/i.test(value)) {
        return Math.round(parseFloat(value)) + "px";
    }

    return value;
}

function asInt(val) {
    return parseInt(val, 10);
}

function parseBackgroundSizePosition(value, element, attribute, index) {
    value = (value || '').split(',');
    value = value[index || 0] || value[0] || 'auto';
    value = _html2canvas.Util.trimText(value).split(' ');

    if(attribute === 'backgroundSize' && (!value[0] || value[0].match(/cover|contain|auto/))) {
        //these values will be handled in the parent function
    } else {
        value[0] = (value[0].indexOf( "%" ) === -1) ? toPX(element, attribute + "X", value[0]) : value[0];
        if(value[1] === undefined) {
            if(attribute === 'backgroundSize') {
                value[1] = 'auto';
                return value;
            } else {
                // IE 9 doesn't return double digit always
                value[1] = value[0];
            }
        }
        value[1] = (value[1].indexOf("%") === -1) ? toPX(element, attribute + "Y", value[1]) : value[1];
    }
    return value;
}

_html2canvas.Util.getCSS = function (element, attribute, index) {
    if (previousElement !== element) {
      computedCSS = document.defaultView.getComputedStyle(element, null);
    }

    var value = computedCSS[attribute];

    if (/^background(Size|Position)$/.test(attribute)) {
        return parseBackgroundSizePosition(value, element, attribute, index);
    } else if (/border(Top|Bottom)(Left|Right)Radius/.test(attribute)) {
      var arr = value.split(" ");
      if (arr.length <= 1) {
          arr[1] = arr[0];
      }
      return arr.map(asInt);
    }

  return value;
};

_html2canvas.Util.resizeBounds = function( current_width, current_height, target_width, target_height, stretch_mode ){
  var target_ratio = target_width / target_height,
    current_ratio = current_width / current_height,
    output_width, output_height;

  if(!stretch_mode || stretch_mode === 'auto') {
    output_width = target_width;
    output_height = target_height;
  } else if(target_ratio < current_ratio ^ stretch_mode === 'contain') {
    output_height = target_height;
    output_width = target_height * current_ratio;
  } else {
    output_width = target_width;
    output_height = target_width / current_ratio;
  }

  return {
    width: output_width,
    height: output_height
  };
};

function backgroundBoundsFactory( prop, el, bounds, image, imageIndex, backgroundSize ) {
    var bgposition =  _html2canvas.Util.getCSS( el, prop, imageIndex ) ,
    topPos,
    left,
    percentage,
    val;

    if (bgposition.length === 1){
      val = bgposition[0];

      bgposition = [];

      bgposition[0] = val;
      bgposition[1] = val;
    }

    if (bgposition[0].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[0])/100);
      left = bounds.width * percentage;
      if(prop !== 'backgroundSize') {
        left -= (backgroundSize || image).width*percentage;
      }
    } else {
      if(prop === 'backgroundSize') {
        if(bgposition[0] === 'auto') {
          left = image.width;
        } else {
          if (/contain|cover/.test(bgposition[0])) {
            var resized = _html2canvas.Util.resizeBounds(image.width, image.height, bounds.width, bounds.height, bgposition[0]);
            left = resized.width;
            topPos = resized.height;
          } else {
            left = parseInt(bgposition[0], 10);
          }
        }
      } else {
        left = parseInt( bgposition[0], 10);
      }
    }


    if(bgposition[1] === 'auto') {
      topPos = left / image.width * image.height;
    } else if (bgposition[1].toString().indexOf("%") !== -1){
      percentage = (parseFloat(bgposition[1])/100);
      topPos =  bounds.height * percentage;
      if(prop !== 'backgroundSize') {
        topPos -= (backgroundSize || image).height * percentage;
      }

    } else {
      topPos = parseInt(bgposition[1],10);
    }

    return [left, topPos];
}

_html2canvas.Util.BackgroundPosition = function( el, bounds, image, imageIndex, backgroundSize ) {
    var result = backgroundBoundsFactory( 'backgroundPosition', el, bounds, image, imageIndex, backgroundSize );
    return { left: result[0], top: result[1] };
};

_html2canvas.Util.BackgroundSize = function( el, bounds, image, imageIndex ) {
    var result = backgroundBoundsFactory( 'backgroundSize', el, bounds, image, imageIndex );
    return { width: result[0], height: result[1] };
};

_html2canvas.Util.Extend = function (options, defaults) {
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      defaults[key] = options[key];
    }
  }
  return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {
  var children;
  try {
    children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ? elem.contentDocument || elem.contentWindow.document : (function(array) {
      var ret = [];
      if (array !== null) {
        (function(first, second ) {
          var i = first.length,
          j = 0;

          if (typeof second.length === "number") {
            for (var l = second.length; j < l; j++) {
              first[i++] = second[j];
            }
          } else {
            while (second[j] !== undefined) {
              first[i++] = second[j++];
            }
          }

          first.length = i;

          return first;
        })(ret, array);
      }
      return ret;
    })(elem.childNodes);

  } catch (ex) {
    _html2canvas.Util.log("html2canvas.Util.Children failed with exception: " + ex.message);
    children = [];
  }
  return children;
};

_html2canvas.Util.isTransparent = function(backgroundColor) {
  return (backgroundColor === "transparent" || backgroundColor === "rgba(0, 0, 0, 0)");
};
_html2canvas.Util.Font = (function () {

  var fontData = {};

  return function(font, fontSize, doc) {
    if (fontData[font + "-" + fontSize] !== undefined) {
      return fontData[font + "-" + fontSize];
    }

    var container = doc.createElement('div'),
    img = doc.createElement('img'),
    span = doc.createElement('span'),
    sampleText = 'Hidden Text',
    baseline,
    middle,
    metricsObj;

    container.style.visibility = "hidden";
    container.style.fontFamily = font;
    container.style.fontSize = fontSize;
    container.style.margin = 0;
    container.style.padding = 0;

    doc.body.appendChild(container);

    // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
    img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
    img.width = 1;
    img.height = 1;

    img.style.margin = 0;
    img.style.padding = 0;
    img.style.verticalAlign = "baseline";

    span.style.fontFamily = font;
    span.style.fontSize = fontSize;
    span.style.margin = 0;
    span.style.padding = 0;

    span.appendChild(doc.createTextNode(sampleText));
    container.appendChild(span);
    container.appendChild(img);
    baseline = (img.offsetTop - span.offsetTop) + 1;

    container.removeChild(span);
    container.appendChild(doc.createTextNode(sampleText));

    container.style.lineHeight = "normal";
    img.style.verticalAlign = "super";

    middle = (img.offsetTop-container.offsetTop) + 1;
    metricsObj = {
      baseline: baseline,
      lineWidth: 1,
      middle: middle
    };

    fontData[font + "-" + fontSize] = metricsObj;

    doc.body.removeChild(container);

    return metricsObj;
  };
})();

(function(){
  var Util = _html2canvas.Util,
    Generate = {};

  _html2canvas.Generate = Generate;

  var reGradients = [
  /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,
  /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
  /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,
  /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/
  ];

  /*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
  Generate.parseGradient = function(css, bounds) {
    var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3, tl,tr,br,bl;

    for(i = 0; i < len; i+=1){
      m1 = css.match(reGradients[i]);
      if(m1) {
        break;
      }
    }

    if(m1) {
      switch(m1[1]) {
        case '-webkit-linear-gradient':
        case '-o-linear-gradient':

          gradient = {
            type: 'linear',
            x0: null,
            y0: null,
            x1: null,
            y1: null,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/\w+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              switch(m2[i]) {
                case 'top':
                  gradient.y0 = 0;
                  gradient.y1 = bounds.height;
                  break;

                case 'right':
                  gradient.x0 = bounds.width;
                  gradient.x1 = 0;
                  break;

                case 'bottom':
                  gradient.y0 = bounds.height;
                  gradient.y1 = 0;
                  break;

                case 'left':
                  gradient.x0 = 0;
                  gradient.x1 = bounds.width;
                  break;
              }
            }
          }
          if(gradient.x0 === null && gradient.x1 === null){ // center
            gradient.x0 = gradient.x1 = bounds.width / 2;
          }
          if(gradient.y0 === null && gradient.y1 === null){ // center
            gradient.y0 = gradient.y1 = bounds.height / 2;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-gradient':

          gradient = {
            type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = (m2[3] * bounds.width) / 100;
            gradient.y1 = (m2[4] * bounds.height) / 100;
          }

          // get colors and stops
          m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
          if(m2){
            m2Len = m2.length;
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
              stop = parseFloat(m3[2]);
              if(m3[1] === 'from') {
                stop = 0.0;
              }
              if(m3[1] === 'to') {
                stop = 1.0;
              }
              gradient.colorStops.push({
                color: m3[3],
                stop: stop
              });
            }
          }
          break;

        case '-moz-linear-gradient':

          gradient = {
            type: 'linear',
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            colorStops: []
          };

          // get coordinates
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

          // m2[1] == 0%   -> left
          // m2[1] == 50%  -> center
          // m2[1] == 100% -> right

          // m2[2] == 0%   -> top
          // m2[2] == 50%  -> center
          // m2[2] == 100% -> bottom

          if(m2){
            gradient.x0 = (m2[1] * bounds.width) / 100;
            gradient.y0 = (m2[2] * bounds.height) / 100;
            gradient.x1 = bounds.width - gradient.x0;
            gradient.y1 = bounds.height - gradient.y0;
          }

          // get colors and stops
          m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3]){ // percentage
                  stop /= 100;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;

        case '-webkit-radial-gradient':
        case '-moz-radial-gradient':
        case '-o-radial-gradient':

          gradient = {
            type: 'circle',
            x0: 0,
            y0: 0,
            x1: bounds.width,
            y1: bounds.height,
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0,
            colorStops: []
          };

          // center
          m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
          if(m2){
            gradient.cx = (m2[1] * bounds.width) / 100;
            gradient.cy = (m2[2] * bounds.height) / 100;
          }

          // size
          m2 = m1[3].match(/\w+/);
          m3 = m1[4].match(/[a-z\-]*/);
          if(m2 && m3){
            switch(m3[0]){
              case 'farthest-corner':
              case 'cover': // is equivalent to farthest-corner
              case '': // mozilla removes "cover" from definition :(
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                break;
              case 'closest-corner':
                tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                break;
              case 'farthest-side':
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.max(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.max(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.max(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;
              case 'closest-side':
              case 'contain': // is equivalent to closest-side
                if(m2[0] === 'circle'){
                  gradient.rx = gradient.ry = Math.min(
                    gradient.cx,
                    gradient.cy,
                    gradient.x1 - gradient.cx,
                    gradient.y1 - gradient.cy
                    );
                } else { // ellipse

                  gradient.type = m2[0];

                  gradient.rx = Math.min(
                    gradient.cx,
                    gradient.x1 - gradient.cx
                    );
                  gradient.ry = Math.min(
                    gradient.cy,
                    gradient.y1 - gradient.cy
                    );
                }
                break;

            // TODO: add support for "30px 40px" sizes (webkit only)
            }
          }

          // color stops
          m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
          if(m2){
            m2Len = m2.length;
            step = 1 / Math.max(m2Len - 1, 1);
            for(i = 0; i < m2Len; i+=1){
              m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
              if(m3[2]){
                stop = parseFloat(m3[2]);
                if(m3[3] === '%'){
                  stop /= 100;
                } else { // px - stupid opera
                  stop /= bounds.width;
                }
              } else {
                stop = i * step;
              }
              gradient.colorStops.push({
                color: m3[1],
                stop: stop
              });
            }
          }
          break;
      }
    }

    return gradient;
  };

  function addScrollStops(grad) {
    return function(colorStop) {
      try {
        grad.addColorStop(colorStop.stop, colorStop.color);
      }
      catch(e) {
        Util.log(['failed to add color stop: ', e, '; tried to add: ', colorStop]);
      }
    };
  }

  Generate.Gradient = function(src, bounds) {
    if(bounds.width === 0 || bounds.height === 0) {
      return;
    }

    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    gradient, grad;

    canvas.width = bounds.width;
    canvas.height = bounds.height;

    // TODO: add support for multi defined background gradients
    gradient = _html2canvas.Generate.parseGradient(src, bounds);

    if(gradient) {
      switch(gradient.type) {
        case 'linear':
          grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'circle':
          grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);
          gradient.colorStops.forEach(addScrollStops(grad));
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, bounds.width, bounds.height);
          break;

        case 'ellipse':
          var canvasRadial = document.createElement('canvas'),
            ctxRadial = canvasRadial.getContext('2d'),
            ri = Math.max(gradient.rx, gradient.ry),
            di = ri * 2;

          canvasRadial.width = canvasRadial.height = di;

          grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);
          gradient.colorStops.forEach(addScrollStops(grad));

          ctxRadial.fillStyle = grad;
          ctxRadial.fillRect(0, 0, di, di);

          ctx.fillStyle = gradient.colorStops[gradient.colorStops.length - 1].color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(canvasRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);
          break;
      }
    }

    return canvas;
  };

  Generate.ListAlpha = function(number) {
    var tmp = "",
    modulus;

    do {
      modulus = number % 26;
      tmp = String.fromCharCode((modulus) + 64) + tmp;
      number = number / 26;
    }while((number*26) > 26);

    return tmp;
  };

  Generate.ListRoman = function(number) {
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = "",
    v,
    len = romanArray.length;

    if (number <= 0 || number >= 4000) {
      return number;
    }

    for (v=0; v < len; v+=1) {
      while (number >= decimal[v]) {
        number -= decimal[v];
        roman += romanArray[v];
      }
    }

    return roman;
  };
})();
function h2cRenderContext(width, height) {
  var storage = [];
  return {
    storage: storage,
    width: width,
    height: height,
    clip: function() {
      storage.push({
        type: "function",
        name: "clip",
        'arguments': arguments
      });
    },
    translate: function() {
      storage.push({
        type: "function",
        name: "translate",
        'arguments': arguments
      });
    },
    fill: function() {
      storage.push({
        type: "function",
        name: "fill",
        'arguments': arguments
      });
    },
    save: function() {
      storage.push({
        type: "function",
        name: "save",
        'arguments': arguments
      });
    },
    restore: function() {
      storage.push({
        type: "function",
        name: "restore",
        'arguments': arguments
      });
    },
    fillRect: function () {
      storage.push({
        type: "function",
        name: "fillRect",
        'arguments': arguments
      });
    },
    createPattern: function() {
      storage.push({
        type: "function",
        name: "createPattern",
        'arguments': arguments
      });
    },
    drawShape: function() {

      var shape = [];

      storage.push({
        type: "function",
        name: "drawShape",
        'arguments': shape
      });

      return {
        moveTo: function() {
          shape.push({
            name: "moveTo",
            'arguments': arguments
          });
        },
        lineTo: function() {
          shape.push({
            name: "lineTo",
            'arguments': arguments
          });
        },
        arcTo: function() {
          shape.push({
            name: "arcTo",
            'arguments': arguments
          });
        },
        bezierCurveTo: function() {
          shape.push({
            name: "bezierCurveTo",
            'arguments': arguments
          });
        },
        quadraticCurveTo: function() {
          shape.push({
            name: "quadraticCurveTo",
            'arguments': arguments
          });
        }
      };

    },
    drawImage: function () {
      storage.push({
        type: "function",
        name: "drawImage",
        'arguments': arguments
      });
    },
    fillText: function () {
      storage.push({
        type: "function",
        name: "fillText",
        'arguments': arguments
      });
    },
    setVariable: function (variable, value) {
      storage.push({
        type: "variable",
        name: variable,
        'arguments': value
      });
      return value;
    }
  };
}
_html2canvas.Parse = function (images, options) {
  window.scroll(0,0);

  var element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
  numDraws = 0,
  doc = element.ownerDocument,
  Util = _html2canvas.Util,
  support = Util.Support(options, doc),
  ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
  body = doc.body,
  getCSS = Util.getCSS,
  pseudoHide = "___html2canvas___pseudoelement",
  hidePseudoElements = doc.createElement('style');

  hidePseudoElements.innerHTML = '.' + pseudoHide + '-before:before { content: "" !important; display: none !important; }' +
  '.' + pseudoHide + '-after:after { content: "" !important; display: none !important; }';

  body.appendChild(hidePseudoElements);

  images = images || {};

  function documentWidth () {
    return Math.max(
      Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
      Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
      Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
      );
  }

  function documentHeight () {
    return Math.max(
      Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
      Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
      Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
      );
  }

  function getCSSInt(element, attribute) {
    var val = parseInt(getCSS(element, attribute), 10);
    return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
  }

  function renderRect (ctx, x, y, w, h, bgcolor) {
    if (bgcolor !== "transparent"){
      ctx.setVariable("fillStyle", bgcolor);
      ctx.fillRect(x, y, w, h);
      numDraws+=1;
    }
  }

  function capitalize(m, p1, p2) {
    if (m.length > 0) {
      return p1 + p2.toUpperCase();
    }
  }

  function textTransform (text, transform) {
    switch(transform){
      case "lowercase":
        return text.toLowerCase();
      case "capitalize":
        return text.replace( /(^|\s|:|-|\(|\))([a-z])/g, capitalize);
      case "uppercase":
        return text.toUpperCase();
      default:
        return text;
    }
  }

  function noLetterSpacing(letter_spacing) {
    return (/^(normal|none|0px)$/.test(letter_spacing));
  }

  function drawText(currentText, x, y, ctx){
    if (currentText !== null && Util.trimText(currentText).length > 0) {
      ctx.fillText(currentText, x, y);
      numDraws+=1;
    }
  }

  function setTextVariables(ctx, el, text_decoration, color) {
    var align = false,
    bold = getCSS(el, "fontWeight"),
    family = getCSS(el, "fontFamily"),
    size = getCSS(el, "fontSize"),
    shadows = Util.parseTextShadows(getCSS(el, "textShadow"));

    switch(parseInt(bold, 10)){
      case 401:
        bold = "bold";
        break;
      case 400:
        bold = "normal";
        break;
    }

    ctx.setVariable("fillStyle", color);
    ctx.setVariable("font", [getCSS(el, "fontStyle"), getCSS(el, "fontVariant"), bold, size, family].join(" "));
    ctx.setVariable("textAlign", (align) ? "right" : "left");

    if (shadows.length) {
      // TODO: support multiple text shadows
      // apply the first text shadow
      ctx.setVariable("shadowColor", shadows[0].color);
      ctx.setVariable("shadowOffsetX", shadows[0].offsetX);
      ctx.setVariable("shadowOffsetY", shadows[0].offsetY);
      ctx.setVariable("shadowBlur", shadows[0].blur);
    }

    if (text_decoration !== "none"){
      return Util.Font(family, size, doc);
    }
  }

  function renderTextDecoration(ctx, text_decoration, bounds, metrics, color) {
    switch(text_decoration) {
      case "underline":
        // Draws a line at the baseline of the font
        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
        break;
      case "overline":
        renderRect(ctx, bounds.left, Math.round(bounds.top), bounds.width, 1, color);
        break;
      case "line-through":
        // TODO try and find exact position for line-through
        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
        break;
    }
  }

  function getTextBounds(state, text, textDecoration, isLast, transform) {
    var bounds;
    if (support.rangeBounds && !transform) {
      if (textDecoration !== "none" || Util.trimText(text).length !== 0) {
        bounds = textRangeBounds(text, state.node, state.textOffset);
      }
      state.textOffset += text.length;
    } else if (state.node && typeof state.node.nodeValue === "string" ){
      var newTextNode = (isLast) ? state.node.splitText(text.length) : null;
      bounds = textWrapperBounds(state.node, transform);
      state.node = newTextNode;
    }
    return bounds;
  }

  function textRangeBounds(text, textNode, textOffset) {
    var range = doc.createRange();
    range.setStart(textNode, textOffset);
    range.setEnd(textNode, textOffset + text.length);
    return range.getBoundingClientRect();
  }

  function textWrapperBounds(oldTextNode, transform) {
    var parent = oldTextNode.parentNode,
    wrapElement = doc.createElement('wrapper'),
    backupText = oldTextNode.cloneNode(true);

    wrapElement.appendChild(oldTextNode.cloneNode(true));
    parent.replaceChild(wrapElement, oldTextNode);

    var bounds = transform ? Util.OffsetBounds(wrapElement) : Util.Bounds(wrapElement);
    parent.replaceChild(backupText, wrapElement);
    return bounds;
  }

  function renderText(el, textNode, stack) {
    var ctx = stack.ctx,
    color = getCSS(el, "color"),
    textDecoration = getCSS(el, "textDecoration"),
    textAlign = getCSS(el, "textAlign"),
    metrics,
    textList,
    state = {
      node: textNode,
      textOffset: 0
    };

    if (Util.trimText(textNode.nodeValue).length > 0) {
      textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
      textAlign = textAlign.replace(["-webkit-auto"],["auto"]);

      textList = (!options.letterRendering && /^(left|right|justify|auto)$/.test(textAlign) && noLetterSpacing(getCSS(el, "letterSpacing"))) ?
      textNode.nodeValue.split(/(\b| )/)
      : textNode.nodeValue.split("");

      metrics = setTextVariables(ctx, el, textDecoration, color);

      if (options.chinese) {
        textList.forEach(function(word, index) {
          if (/.*[\u4E00-\u9FA5].*$/.test(word)) {
            word = word.split("");
            word.unshift(index, 1);
            textList.splice.apply(textList, word);
          }
        });
      }

      textList.forEach(function(text, index) {
        var bounds = getTextBounds(state, text, textDecoration, (index < textList.length - 1), stack.transform.matrix);
        if (bounds) {
          drawText(text, bounds.left, bounds.bottom, ctx);
          renderTextDecoration(ctx, textDecoration, bounds, metrics, color);
        }
      });
    }
  }

  function listPosition (element, val) {
    var boundElement = doc.createElement( "boundelement" ),
    originalType,
    bounds;

    boundElement.style.display = "inline";

    originalType = element.style.listStyleType;
    element.style.listStyleType = "none";

    boundElement.appendChild(doc.createTextNode(val));

    element.insertBefore(boundElement, element.firstChild);

    bounds = Util.Bounds(boundElement);
    element.removeChild(boundElement);
    element.style.listStyleType = originalType;
    return bounds;
  }

  function elementIndex(el) {
    var i = -1,
    count = 1,
    childs = el.parentNode.childNodes;

    if (el.parentNode) {
      while(childs[++i] !== el) {
        if (childs[i].nodeType === 1) {
          count++;
        }
      }
      return count;
    } else {
      return -1;
    }
  }

  function listItemText(element, type) {
    var currentIndex = elementIndex(element), text;
    switch(type){
      case "decimal":
        text = currentIndex;
        break;
      case "decimal-leading-zero":
        text = (currentIndex.toString().length === 1) ? currentIndex = "0" + currentIndex.toString() : currentIndex.toString();
        break;
      case "upper-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex );
        break;
      case "lower-roman":
        text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
        break;
      case "lower-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
        break;
      case "upper-alpha":
        text = _html2canvas.Generate.ListAlpha( currentIndex );
        break;
    }

    return text + ". ";
  }

  function renderListItem(element, stack, elBounds) {
    var x,
    text,
    ctx = stack.ctx,
    type = getCSS(element, "listStyleType"),
    listBounds;

    if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {
      text = listItemText(element, type);
      listBounds = listPosition(element, text);
      setTextVariables(ctx, element, "none", getCSS(element, "color"));

      if (getCSS(element, "listStylePosition") === "inside") {
        ctx.setVariable("textAlign", "left");
        x = elBounds.left;
      } else {
        return;
      }

      drawText(text, x, listBounds.bottom, ctx);
    }
  }

  function loadImage (src){
    var img = images[src];
    return (img && img.succeeded === true) ? img.img : false;
  }

  function clipBounds(src, dst){
    var x = Math.max(src.left, dst.left),
    y = Math.max(src.top, dst.top),
    x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
    y2 = Math.min((src.top + src.height), (dst.top + dst.height));

    return {
      left:x,
      top:y,
      width:x2-x,
      height:y2-y
    };
  }

  function setZ(element, stack, parentStack){
    var newContext,
    isPositioned = stack.cssPosition !== 'static',
    zIndex = isPositioned ? getCSS(element, 'zIndex') : 'auto',
    opacity = getCSS(element, 'opacity'),
    isFloated = getCSS(element, 'cssFloat') !== 'none';

    // https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context
    // When a new stacking context should be created:
    // the root element (HTML),
    // positioned (absolutely or relatively) with a z-index value other than "auto",
    // elements with an opacity value less than 1. (See the specification for opacity),
    // on mobile WebKit and Chrome 22+, position: fixed always creates a new stacking context, even when z-index is "auto" (See this post)

    stack.zIndex = newContext = h2czContext(zIndex);
    newContext.isPositioned = isPositioned;
    newContext.isFloated = isFloated;
    newContext.opacity = opacity;
    newContext.ownStacking = (zIndex !== 'auto' || opacity < 1);

    if (parentStack) {
      parentStack.zIndex.children.push(stack);
    }
  }

  function renderImage(ctx, element, image, bounds, borders) {

    var paddingLeft = getCSSInt(element, 'paddingLeft'),
    paddingTop = getCSSInt(element, 'paddingTop'),
    paddingRight = getCSSInt(element, 'paddingRight'),
    paddingBottom = getCSSInt(element, 'paddingBottom');

    drawImage(
      ctx,
      image,
      0, //sx
      0, //sy
      image.width, //sw
      image.height, //sh
      bounds.left + paddingLeft + borders[3].width, //dx
      bounds.top + paddingTop + borders[0].width, // dy
      bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
      bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
      );
  }

  function getBorderData(element) {
    return ["Top", "Right", "Bottom", "Left"].map(function(side) {
      return {
        width: getCSSInt(element, 'border' + side + 'Width'),
        color: getCSS(element, 'border' + side + 'Color')
      };
    });
  }

  function getBorderRadiusData(element) {
    return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function(side) {
      return getCSS(element, 'border' + side + 'Radius');
    });
  }

  var getCurvePoints = (function(kappa) {

    return function(x, y, r1, r2) {
      var ox = (r1) * kappa, // control point offset horizontal
      oy = (r2) * kappa, // control point offset vertical
      xm = x + r1, // x-middle
      ym = y + r2; // y-middle
      return {
        topLeft: bezierCurve({
          x:x,
          y:ym
        }, {
          x:x,
          y:ym - oy
        }, {
          x:xm - ox,
          y:y
        }, {
          x:xm,
          y:y
        }),
        topRight: bezierCurve({
          x:x,
          y:y
        }, {
          x:x + ox,
          y:y
        }, {
          x:xm,
          y:ym - oy
        }, {
          x:xm,
          y:ym
        }),
        bottomRight: bezierCurve({
          x:xm,
          y:y
        }, {
          x:xm,
          y:y + oy
        }, {
          x:x + ox,
          y:ym
        }, {
          x:x,
          y:ym
        }),
        bottomLeft: bezierCurve({
          x:xm,
          y:ym
        }, {
          x:xm - ox,
          y:ym
        }, {
          x:x,
          y:y + oy
        }, {
          x:x,
          y:y
        })
      };
    };
  })(4 * ((Math.sqrt(2) - 1) / 3));

  function bezierCurve(start, startControl, endControl, end) {

    var lerp = function (a, b, t) {
      return {
        x:a.x + (b.x - a.x) * t,
        y:a.y + (b.y - a.y) * t
      };
    };

    return {
      start: start,
      startControl: startControl,
      endControl: endControl,
      end: end,
      subdivide: function(t) {
        var ab = lerp(start, startControl, t),
        bc = lerp(startControl, endControl, t),
        cd = lerp(endControl, end, t),
        abbc = lerp(ab, bc, t),
        bccd = lerp(bc, cd, t),
        dest = lerp(abbc, bccd, t);
        return [bezierCurve(start, ab, abbc, dest), bezierCurve(dest, bccd, cd, end)];
      },
      curveTo: function(borderArgs) {
        borderArgs.push(["bezierCurve", startControl.x, startControl.y, endControl.x, endControl.y, end.x, end.y]);
      },
      curveToReversed: function(borderArgs) {
        borderArgs.push(["bezierCurve", endControl.x, endControl.y, startControl.x, startControl.y, start.x, start.y]);
      }
    };
  }

  function parseCorner(borderArgs, radius1, radius2, corner1, corner2, x, y) {
    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", corner1[0].start.x, corner1[0].start.y]);
      corner1[0].curveTo(borderArgs);
      corner1[1].curveTo(borderArgs);
    } else {
      borderArgs.push(["line", x, y]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", corner2[0].start.x, corner2[0].start.y]);
    }
  }

  function drawSide(borderData, radius1, radius2, outer1, inner1, outer2, inner2) {
    var borderArgs = [];

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", outer1[1].start.x, outer1[1].start.y]);
      outer1[1].curveTo(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c1[0], borderData.c1[1]]);
    }

    if (radius2[0] > 0 || radius2[1] > 0) {
      borderArgs.push(["line", outer2[0].start.x, outer2[0].start.y]);
      outer2[0].curveTo(borderArgs);
      borderArgs.push(["line", inner2[0].end.x, inner2[0].end.y]);
      inner2[0].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c2[0], borderData.c2[1]]);
      borderArgs.push([ "line", borderData.c3[0], borderData.c3[1]]);
    }

    if (radius1[0] > 0 || radius1[1] > 0) {
      borderArgs.push(["line", inner1[1].end.x, inner1[1].end.y]);
      inner1[1].curveToReversed(borderArgs);
    } else {
      borderArgs.push([ "line", borderData.c4[0], borderData.c4[1]]);
    }

    return borderArgs;
  }

  function calculateCurvePoints(bounds, borderRadius, borders) {

    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,

    tlh = borderRadius[0][0],
    tlv = borderRadius[0][1],
    trh = borderRadius[1][0],
    trv = borderRadius[1][1],
    brh = borderRadius[2][0],
    brv = borderRadius[2][1],
    blh = borderRadius[3][0],
    blv = borderRadius[3][1],

    topWidth = width - trh,
    rightHeight = height - brv,
    bottomWidth = width - brh,
    leftHeight = height - blv;

    return {
      topLeftOuter: getCurvePoints(
        x,
        y,
        tlh,
        tlv
        ).topLeft.subdivide(0.5),

      topLeftInner: getCurvePoints(
        x + borders[3].width,
        y + borders[0].width,
        Math.max(0, tlh - borders[3].width),
        Math.max(0, tlv - borders[0].width)
        ).topLeft.subdivide(0.5),

      topRightOuter: getCurvePoints(
        x + topWidth,
        y,
        trh,
        trv
        ).topRight.subdivide(0.5),

      topRightInner: getCurvePoints(
        x + Math.min(topWidth, width + borders[3].width),
        y + borders[0].width,
        (topWidth > width + borders[3].width) ? 0 :trh - borders[3].width,
        trv - borders[0].width
        ).topRight.subdivide(0.5),

      bottomRightOuter: getCurvePoints(
        x + bottomWidth,
        y + rightHeight,
        brh,
        brv
        ).bottomRight.subdivide(0.5),

      bottomRightInner: getCurvePoints(
        x + Math.min(bottomWidth, width + borders[3].width),
        y + Math.min(rightHeight, height + borders[0].width),
        Math.max(0, brh - borders[1].width),
        Math.max(0, brv - borders[2].width)
        ).bottomRight.subdivide(0.5),

      bottomLeftOuter: getCurvePoints(
        x,
        y + leftHeight,
        blh,
        blv
        ).bottomLeft.subdivide(0.5),

      bottomLeftInner: getCurvePoints(
        x + borders[3].width,
        y + leftHeight,
        Math.max(0, blh - borders[3].width),
        Math.max(0, blv - borders[2].width)
        ).bottomLeft.subdivide(0.5)
    };
  }

  function getBorderClip(element, borderPoints, borders, radius, bounds) {
    var backgroundClip = getCSS(element, 'backgroundClip'),
    borderArgs = [];

    switch(backgroundClip) {
      case "content-box":
      case "padding-box":
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftInner, borderPoints.topRightInner, bounds.left + borders[3].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightInner, borderPoints.bottomRightInner, bounds.left + bounds.width - borders[1].width, bounds.top + borders[0].width);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightInner, borderPoints.bottomLeftInner, bounds.left + bounds.width - borders[1].width, bounds.top + bounds.height - borders[2].width);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftInner, borderPoints.topLeftInner, bounds.left + borders[3].width, bounds.top + bounds.height - borders[2].width);
        break;

      default:
        parseCorner(borderArgs, radius[0], radius[1], borderPoints.topLeftOuter, borderPoints.topRightOuter, bounds.left, bounds.top);
        parseCorner(borderArgs, radius[1], radius[2], borderPoints.topRightOuter, borderPoints.bottomRightOuter, bounds.left + bounds.width, bounds.top);
        parseCorner(borderArgs, radius[2], radius[3], borderPoints.bottomRightOuter, borderPoints.bottomLeftOuter, bounds.left + bounds.width, bounds.top + bounds.height);
        parseCorner(borderArgs, radius[3], radius[0], borderPoints.bottomLeftOuter, borderPoints.topLeftOuter, bounds.left, bounds.top + bounds.height);
        break;
    }

    return borderArgs;
  }

  function parseBorders(element, bounds, borders){
    var x = bounds.left,
    y = bounds.top,
    width = bounds.width,
    height = bounds.height,
    borderSide,
    bx,
    by,
    bw,
    bh,
    borderArgs,
    // http://www.w3.org/TR/css3-background/#the-border-radius
    borderRadius = getBorderRadiusData(element),
    borderPoints = calculateCurvePoints(bounds, borderRadius, borders),
    borderData = {
      clip: getBorderClip(element, borderPoints, borders, borderRadius, bounds),
      borders: []
    };

    for (borderSide = 0; borderSide < 4; borderSide++) {

      if (borders[borderSide].width > 0) {
        bx = x;
        by = y;
        bw = width;
        bh = height - (borders[2].width);

        switch(borderSide) {
          case 0:
            // top border
            bh = borders[0].width;

            borderArgs = drawSide({
              c1: [bx, by],
              c2: [bx + bw, by],
              c3: [bx + bw - borders[1].width, by + bh],
              c4: [bx + borders[3].width, by + bh]
            }, borderRadius[0], borderRadius[1],
            borderPoints.topLeftOuter, borderPoints.topLeftInner, borderPoints.topRightOuter, borderPoints.topRightInner);
            break;
          case 1:
            // right border
            bx = x + width - (borders[1].width);
            bw = borders[1].width;

            borderArgs = drawSide({
              c1: [bx + bw, by],
              c2: [bx + bw, by + bh + borders[2].width],
              c3: [bx, by + bh],
              c4: [bx, by + borders[0].width]
            }, borderRadius[1], borderRadius[2],
            borderPoints.topRightOuter, borderPoints.topRightInner, borderPoints.bottomRightOuter, borderPoints.bottomRightInner);
            break;
          case 2:
            // bottom border
            by = (by + height) - (borders[2].width);
            bh = borders[2].width;

            borderArgs = drawSide({
              c1: [bx + bw, by + bh],
              c2: [bx, by + bh],
              c3: [bx + borders[3].width, by],
              c4: [bx + bw - borders[3].width, by]
            }, borderRadius[2], borderRadius[3],
            borderPoints.bottomRightOuter, borderPoints.bottomRightInner, borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner);
            break;
          case 3:
            // left border
            bw = borders[3].width;

            borderArgs = drawSide({
              c1: [bx, by + bh + borders[2].width],
              c2: [bx, by],
              c3: [bx + bw, by + borders[0].width],
              c4: [bx + bw, by + bh]
            }, borderRadius[3], borderRadius[0],
            borderPoints.bottomLeftOuter, borderPoints.bottomLeftInner, borderPoints.topLeftOuter, borderPoints.topLeftInner);
            break;
        }

        borderData.borders.push({
          args: borderArgs,
          color: borders[borderSide].color
        });

      }
    }

    return borderData;
  }

  function createShape(ctx, args) {
    var shape = ctx.drawShape();
    args.forEach(function(border, index) {
      shape[(index === 0) ? "moveTo" : border[0] + "To" ].apply(null, border.slice(1));
    });
    return shape;
  }

  function renderBorders(ctx, borderArgs, color) {
    if (color !== "transparent") {
      ctx.setVariable( "fillStyle", color);
      createShape(ctx, borderArgs);
      ctx.fill();
      numDraws+=1;
    }
  }

  function renderFormValue (el, bounds, stack){

    var valueWrap = doc.createElement('valuewrap'),
    cssPropertyArray = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
    textValue,
    textNode;

    cssPropertyArray.forEach(function(property) {
      try {
        valueWrap.style[property] = getCSS(el, property);
      } catch(e) {
        // Older IE has issues with "border"
        Util.log("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
      }
    });

    valueWrap.style.borderColor = "black";
    valueWrap.style.borderStyle = "solid";
    valueWrap.style.display = "block";
    valueWrap.style.position = "absolute";

    if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
      valueWrap.style.lineHeight = getCSS(el, "height");
    }

    valueWrap.style.top = bounds.top + "px";
    valueWrap.style.left = bounds.left + "px";

    textValue = (el.nodeName === "SELECT") ? (el.options[el.selectedIndex] || 0).text : el.value;
    if(!textValue) {
      textValue = el.placeholder;
    }

    textNode = doc.createTextNode(textValue);

    valueWrap.appendChild(textNode);
    body.appendChild(valueWrap);

    renderText(el, textNode, stack);
    body.removeChild(valueWrap);
  }

  function drawImage (ctx) {
    ctx.drawImage.apply(ctx, Array.prototype.slice.call(arguments, 1));
    numDraws+=1;
  }

  function getPseudoElement(el, which) {
    var elStyle = window.getComputedStyle(el, which);
    if(!elStyle || !elStyle.content || elStyle.content === "none" || elStyle.content === "-moz-alt-content" || elStyle.display === "none") {
      return;
    }
    var content = elStyle.content + '',
    first = content.substr( 0, 1 );
    //strips quotes
    if(first === content.substr( content.length - 1 ) && first.match(/'|"/)) {
      content = content.substr( 1, content.length - 2 );
    }

    var isImage = content.substr( 0, 3 ) === 'url',
    elps = document.createElement( isImage ? 'img' : 'span' );

    elps.className = pseudoHide + "-before " + pseudoHide + "-after";

    Object.keys(elStyle).filter(indexedProperty).forEach(function(prop) {
      // Prevent assigning of read only CSS Rules, ex. length, parentRule
      try {
        elps.style[prop] = elStyle[prop];
      } catch (e) {
        Util.log(['Tried to assign readonly property ', prop, 'Error:', e]);
      }
    });

    if(isImage) {
      elps.src = Util.parseBackgroundImage(content)[0].args[0];
    } else {
      elps.innerHTML = content;
    }
    return elps;
  }

  function indexedProperty(property) {
    return (isNaN(window.parseInt(property, 10)));
  }

  function injectPseudoElements(el, stack) {
    var before = getPseudoElement(el, ':before'),
    after = getPseudoElement(el, ':after');
    if(!before && !after) {
      return;
    }

    if(before) {
      el.className += " " + pseudoHide + "-before";
      el.parentNode.insertBefore(before, el);
      parseElement(before, stack, true);
      el.parentNode.removeChild(before);
      el.className = el.className.replace(pseudoHide + "-before", "").trim();
    }

    if (after) {
      el.className += " " + pseudoHide + "-after";
      el.appendChild(after);
      parseElement(after, stack, true);
      el.removeChild(after);
      el.className = el.className.replace(pseudoHide + "-after", "").trim();
    }

  }

  function renderBackgroundRepeat(ctx, image, backgroundPosition, bounds) {
    var offsetX = Math.round(bounds.left + backgroundPosition.left),
    offsetY = Math.round(bounds.top + backgroundPosition.top);

    ctx.createPattern(image);
    ctx.translate(offsetX, offsetY);
    ctx.fill();
    ctx.translate(-offsetX, -offsetY);
  }

  function backgroundRepeatShape(ctx, image, backgroundPosition, bounds, left, top, width, height) {
    var args = [];
    args.push(["line", Math.round(left), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(top)]);
    args.push(["line", Math.round(left + width), Math.round(height + top)]);
    args.push(["line", Math.round(left), Math.round(height + top)]);
    createShape(ctx, args);
    ctx.save();
    ctx.clip();
    renderBackgroundRepeat(ctx, image, backgroundPosition, bounds);
    ctx.restore();
  }

  function renderBackgroundColor(ctx, backgroundBounds, bgcolor) {
    renderRect(
      ctx,
      backgroundBounds.left,
      backgroundBounds.top,
      backgroundBounds.width,
      backgroundBounds.height,
      bgcolor
      );
  }

  function renderBackgroundRepeating(el, bounds, ctx, image, imageIndex) {
    var backgroundSize = Util.BackgroundSize(el, bounds, image, imageIndex),
    backgroundPosition = Util.BackgroundPosition(el, bounds, image, imageIndex, backgroundSize),
    backgroundRepeat = getCSS(el, "backgroundRepeat").split(",").map(Util.trimText);

    image = resizeImage(image, backgroundSize);

    backgroundRepeat = backgroundRepeat[imageIndex] || backgroundRepeat[0];

    switch (backgroundRepeat) {
      case "repeat-x":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left, bounds.top + backgroundPosition.top, 99999, image.height);
        break;

      case "repeat-y":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top, image.width, 99999);
        break;

      case "no-repeat":
        backgroundRepeatShape(ctx, image, backgroundPosition, bounds,
          bounds.left + backgroundPosition.left, bounds.top + backgroundPosition.top, image.width, image.height);
        break;

      default:
        renderBackgroundRepeat(ctx, image, backgroundPosition, {
          top: bounds.top,
          left: bounds.left,
          width: image.width,
          height: image.height
        });
        break;
    }
  }

  function renderBackgroundImage(element, bounds, ctx) {
    var backgroundImage = getCSS(element, "backgroundImage"),
    backgroundImages = Util.parseBackgroundImage(backgroundImage),
    image,
    imageIndex = backgroundImages.length;

    while(imageIndex--) {
      backgroundImage = backgroundImages[imageIndex];

      if (!backgroundImage.args || backgroundImage.args.length === 0) {
        continue;
      }

      var key = backgroundImage.method === 'url' ?
      backgroundImage.args[0] :
      backgroundImage.value;

      image = loadImage(key);

      // TODO add support for background-origin
      if (image) {
        renderBackgroundRepeating(element, bounds, ctx, image, imageIndex);
      } else {
        Util.log("html2canvas: Error loading background:", backgroundImage);
      }
    }
  }

  function resizeImage(image, bounds) {
    if(image.width === bounds.width && image.height === bounds.height) {
      return image;
    }

    var ctx, canvas = doc.createElement('canvas');
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    ctx = canvas.getContext("2d");
    drawImage(ctx, image, 0, 0, image.width, image.height, 0, 0, bounds.width, bounds.height );
    return canvas;
  }

  function setOpacity(ctx, element, parentStack) {
    return ctx.setVariable("globalAlpha", getCSS(element, "opacity") * ((parentStack) ? parentStack.opacity : 1));
  }

  function removePx(str) {
    return str.replace("px", "");
  }

  var transformRegExp = /(matrix)\((.+)\)/;

  function getTransform(element, parentStack) {
    var transform = getCSS(element, "transform") || getCSS(element, "-webkit-transform") || getCSS(element, "-moz-transform") || getCSS(element, "-ms-transform") || getCSS(element, "-o-transform");
    var transformOrigin = getCSS(element, "transform-origin") || getCSS(element, "-webkit-transform-origin") || getCSS(element, "-moz-transform-origin") || getCSS(element, "-ms-transform-origin") || getCSS(element, "-o-transform-origin") || "0px 0px";

    transformOrigin = transformOrigin.split(" ").map(removePx).map(Util.asFloat);

    var matrix;
    if (transform && transform !== "none") {
      var match = transform.match(transformRegExp);
      if (match) {
        switch(match[1]) {
          case "matrix":
            matrix = match[2].split(",").map(Util.trimText).map(Util.asFloat);
            break;
        }
      }
    }

    return {
      origin: transformOrigin,
      matrix: matrix
    };
  }

  function createStack(element, parentStack, bounds, transform) {
    var ctx = h2cRenderContext((!parentStack) ? documentWidth() : bounds.width , (!parentStack) ? documentHeight() : bounds.height),
    stack = {
      ctx: ctx,
      opacity: setOpacity(ctx, element, parentStack),
      cssPosition: getCSS(element, "position"),
      borders: getBorderData(element),
      transform: transform,
      clip: (parentStack && parentStack.clip) ? Util.Extend( {}, parentStack.clip ) : null
    };

    setZ(element, stack, parentStack);

    // TODO correct overflow for absolute content residing under a static position
    if (options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(element, "overflow")) === true && /(BODY)/i.test(element.nodeName) === false){
      stack.clip = (stack.clip) ? clipBounds(stack.clip, bounds) : bounds;
    }

    return stack;
  }

  function getBackgroundBounds(borders, bounds, clip) {
    var backgroundBounds = {
      left: bounds.left + borders[3].width,
      top: bounds.top + borders[0].width,
      width: bounds.width - (borders[1].width + borders[3].width),
      height: bounds.height - (borders[0].width + borders[2].width)
    };

    if (clip) {
      backgroundBounds = clipBounds(backgroundBounds, clip);
    }

    return backgroundBounds;
  }

  function getBounds(element, transform) {
    var bounds = (transform.matrix) ? Util.OffsetBounds(element) : Util.Bounds(element);
    transform.origin[0] += bounds.left;
    transform.origin[1] += bounds.top;
    return bounds;
  }

  function renderElement(element, parentStack, pseudoElement, ignoreBackground) {
    var transform = getTransform(element, parentStack),
    bounds = getBounds(element, transform),
    image,
    stack = createStack(element, parentStack, bounds, transform),
    borders = stack.borders,
    ctx = stack.ctx,
    backgroundBounds = getBackgroundBounds(borders, bounds, stack.clip),
    borderData = parseBorders(element, bounds, borders),
    backgroundColor = (ignoreElementsRegExp.test(element.nodeName)) ? "#efefef" : getCSS(element, "backgroundColor");


    createShape(ctx, borderData.clip);

    ctx.save();
    ctx.clip();

    if (backgroundBounds.height > 0 && backgroundBounds.width > 0 && !ignoreBackground) {
      renderBackgroundColor(ctx, bounds, backgroundColor);
      renderBackgroundImage(element, backgroundBounds, ctx);
    } else if (ignoreBackground) {
      stack.backgroundColor =  backgroundColor;
    }

    ctx.restore();

    borderData.borders.forEach(function(border) {
      renderBorders(ctx, border.args, border.color);
    });

    if (!pseudoElement) {
      injectPseudoElements(element, stack);
    }

    switch(element.nodeName){
      case "IMG":
        if ((image = loadImage(element.getAttribute('src')))) {
          renderImage(ctx, element, image, bounds, borders);
        } else {
          Util.log("html2canvas: Error loading <img>:" + element.getAttribute('src'));
        }
        break;
      case "INPUT":
        // TODO add all relevant type's, i.e. HTML5 new stuff
        // todo add support for placeholder attribute for browsers which support it
        if (/^(text|url|email|submit|button|reset)$/.test(element.type) && (element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "TEXTAREA":
        if ((element.value || element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "SELECT":
        if ((element.options||element.placeholder || "").length > 0){
          renderFormValue(element, bounds, stack);
        }
        break;
      case "LI":
        renderListItem(element, stack, backgroundBounds);
        break;
      case "CANVAS":
        renderImage(ctx, element, element, bounds, borders);
        break;
    }

    return stack;
  }

  function isElementVisible(element) {
    return (getCSS(element, 'display') !== "none" && getCSS(element, 'visibility') !== "hidden" && !element.hasAttribute("data-html2canvas-ignore"));
  }

  function parseElement (element, stack, pseudoElement) {
    if (isElementVisible(element)) {
      stack = renderElement(element, stack, pseudoElement, false) || stack;
      if (!ignoreElementsRegExp.test(element.nodeName)) {
        parseChildren(element, stack, pseudoElement);
      }
    }
  }

  function parseChildren(element, stack, pseudoElement) {
    Util.Children(element).forEach(function(node) {
      if (node.nodeType === node.ELEMENT_NODE) {
        parseElement(node, stack, pseudoElement);
      } else if (node.nodeType === node.TEXT_NODE) {
        renderText(element, node, stack);
      }
    });
  }

  function init() {
    var background = getCSS(document.documentElement, "backgroundColor"),
      transparentBackground = (Util.isTransparent(background) && element === document.body),
      stack = renderElement(element, null, false, transparentBackground);
    parseChildren(element, stack);

    if (transparentBackground) {
      background = stack.backgroundColor;
    }

    body.removeChild(hidePseudoElements);
    return {
      backgroundColor: background,
      stack: stack
    };
  }

  return init();
};

function h2czContext(zindex) {
  return {
    zindex: zindex,
    children: []
  };
}

_html2canvas.Preload = function( options ) {

  var images = {
    numLoaded: 0,   // also failed are counted here
    numFailed: 0,
    numTotal: 0,
    cleanupDone: false
  },
  pageOrigin,
  Util = _html2canvas.Util,
  methods,
  i,
  count = 0,
  element = options.elements[0] || document.body,
  doc = element.ownerDocument,
  domImages = element.getElementsByTagName('img'), // Fetch images of the present element only
  imgLen = domImages.length,
  link = doc.createElement("a"),
  supportCORS = (function( img ){
    return (img.crossOrigin !== undefined);
  })(new Image()),
  timeoutTimer;

  link.href = window.location.href;
  pageOrigin  = link.protocol + link.host;

  function isSameOrigin(url){
    link.href = url;
    link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
    var origin = link.protocol + link.host;
    return (origin === pageOrigin);
  }

  function start(){
    Util.log("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
    if (!images.firstRun && images.numLoaded >= images.numTotal){
      Util.log("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

      if (typeof options.complete === "function"){
        options.complete(images);
      }

    }
  }

  // TODO modify proxy to serve images with CORS enabled, where available
  function proxyGetImage(url, img, imageObj){
    var callback_name,
    scriptUrl = options.proxy,
    script;

    link.href = url;
    url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

    callback_name = 'html2canvas_' + (count++);
    imageObj.callbackname = callback_name;

    if (scriptUrl.indexOf("?") > -1) {
      scriptUrl += "&";
    } else {
      scriptUrl += "?";
    }
    scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
    script = doc.createElement("script");

    window[callback_name] = function(a){
      if (a.substring(0,6) === "error:"){
        imageObj.succeeded = false;
        images.numLoaded++;
        images.numFailed++;
        start();
      } else {
        setImageLoadHandlers(img, imageObj);
        img.src = a;
      }
      window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
      try {
        delete window[callback_name];  // for all browser that support this
      } catch(ex) {}
      script.parentNode.removeChild(script);
      script = null;
      delete imageObj.script;
      delete imageObj.callbackname;
    };

    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", scriptUrl);
    imageObj.script = script;
    window.document.body.appendChild(script);

  }

  function loadPseudoElement(element, type) {
    var style = window.getComputedStyle(element, type),
    content = style.content;
    if (content.substr(0, 3) === 'url') {
      methods.loadImage(_html2canvas.Util.parseBackgroundImage(content)[0].args[0]);
    }
    loadBackgroundImages(style.backgroundImage, element);
  }

  function loadPseudoElementImages(element) {
    loadPseudoElement(element, ":before");
    loadPseudoElement(element, ":after");
  }

  function loadGradientImage(backgroundImage, bounds) {
    var img = _html2canvas.Generate.Gradient(backgroundImage, bounds);

    if (img !== undefined){
      images[backgroundImage] = {
        img: img,
        succeeded: true
      };
      images.numTotal++;
      images.numLoaded++;
      start();
    }
  }

  function invalidBackgrounds(background_image) {
    return (background_image && background_image.method && background_image.args && background_image.args.length > 0 );
  }

  function loadBackgroundImages(background_image, el) {
    var bounds;

    _html2canvas.Util.parseBackgroundImage(background_image).filter(invalidBackgrounds).forEach(function(background_image) {
      if (background_image.method === 'url') {
        methods.loadImage(background_image.args[0]);
      } else if(background_image.method.match(/\-?gradient$/)) {
        if(bounds === undefined) {
          bounds = _html2canvas.Util.Bounds(el);
        }
        loadGradientImage(background_image.value, bounds);
      }
    });
  }

  function getImages (el) {
    var elNodeType = false;

    // Firefox fails with permission denied on pages with iframes
    try {
      Util.Children(el).forEach(getImages);
    }
    catch( e ) {}

    try {
      elNodeType = el.nodeType;
    } catch (ex) {
      elNodeType = false;
      Util.log("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
    }

    if (elNodeType === 1 || elNodeType === undefined) {
      loadPseudoElementImages(el);
      try {
        loadBackgroundImages(Util.getCSS(el, 'backgroundImage'), el);
      } catch(e) {
        Util.log("html2canvas: failed to get background-image - Exception: " + e.message);
      }
      loadBackgroundImages(el);
    }
  }

  function setImageLoadHandlers(img, imageObj) {
    img.onload = function() {
      if ( imageObj.timer !== undefined ) {
        // CORS succeeded
        window.clearTimeout( imageObj.timer );
      }

      images.numLoaded++;
      imageObj.succeeded = true;
      img.onerror = img.onload = null;
      start();
    };
    img.onerror = function() {
      if (img.crossOrigin === "anonymous") {
        // CORS failed
        window.clearTimeout( imageObj.timer );

        // let's try with proxy instead
        if ( options.proxy ) {
          var src = img.src;
          img = new Image();
          imageObj.img = img;
          img.src = src;

          proxyGetImage( img.src, img, imageObj );
          return;
        }
      }

      images.numLoaded++;
      images.numFailed++;
      imageObj.succeeded = false;
      img.onerror = img.onload = null;
      start();
    };
  }

  methods = {
    loadImage: function( src ) {
      var img, imageObj;
      if ( src && images[src] === undefined ) {
        img = new Image();
        if ( src.match(/data:image\/.*;base64,/i) ) {
          img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
        } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( supportCORS && !options.allowTaint && options.useCORS ) {
          // attempt to load with CORS

          img.crossOrigin = "anonymous";
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          setImageLoadHandlers(img, imageObj);
          img.src = src;
        } else if ( options.proxy ) {
          imageObj = images[src] = {
            img: img
          };
          images.numTotal++;
          proxyGetImage( src, img, imageObj );
        }
      }

    },
    cleanupDOM: function(cause) {
      var img, src;
      if (!images.cleanupDone) {
        if (cause && typeof cause === "string") {
          Util.log("html2canvas: Cleanup because: " + cause);
        } else {
          Util.log("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
        }

        for (src in images) {
          if (images.hasOwnProperty(src)) {
            img = images[src];
            if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
              // cancel proxy image request
              window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
              try {
                delete window[img.callbackname];  // for all browser that support this
              } catch(ex) {}
              if (img.script && img.script.parentNode) {
                img.script.setAttribute("src", "about:blank");  // try to cancel running request
                img.script.parentNode.removeChild(img.script);
              }
              images.numLoaded++;
              images.numFailed++;
              Util.log("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
            }
          }
        }

        // cancel any pending requests
        if(window.stop !== undefined) {
          window.stop();
        } else if(document.execCommand !== undefined) {
          document.execCommand("Stop", false);
        }
        if (document.close !== undefined) {
          document.close();
        }
        images.cleanupDone = true;
        if (!(cause && typeof cause === "string")) {
          start();
        }
      }
    },

    renderingDone: function() {
      if (timeoutTimer) {
        window.clearTimeout(timeoutTimer);
      }
    }
  };

  if (options.timeout > 0) {
    timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
  }

  Util.log('html2canvas: Preload starts: finding background-images');
  images.firstRun = true;

  getImages(element);

  Util.log('html2canvas: Preload: Finding images');
  // load <img> images
  for (i = 0; i < imgLen; i+=1){
    methods.loadImage( domImages[i].getAttribute( "src" ) );
  }

  images.firstRun = false;
  Util.log('html2canvas: Preload: Done.');
  if (images.numTotal === images.numLoaded) {
    start();
  }

  return methods;
};

_html2canvas.Renderer = function(parseQueue, options){

  // http://www.w3.org/TR/CSS21/zindex.html
  function createRenderQueue(parseQueue) {
    var queue = [],
    rootContext;

    rootContext = (function buildStackingContext(rootNode) {
      var rootContext = {};
      function insert(context, node, specialParent) {
        var zi = (node.zIndex.zindex === 'auto') ? 0 : Number(node.zIndex.zindex),
        contextForChildren = context, // the stacking context for children
        isPositioned = node.zIndex.isPositioned,
        isFloated = node.zIndex.isFloated,
        stub = {node: node},
        childrenDest = specialParent; // where children without z-index should be pushed into

        if (node.zIndex.ownStacking) {
          // '!' comes before numbers in sorted array
          contextForChildren = stub.context = { '!': [{node:node, children: []}]};
          childrenDest = undefined;
        } else if (isPositioned || isFloated) {
          childrenDest = stub.children = [];
        }

        if (zi === 0 && specialParent) {
          specialParent.push(stub);
        } else {
          if (!context[zi]) { context[zi] = []; }
          context[zi].push(stub);
        }

        node.zIndex.children.forEach(function(childNode) {
          insert(contextForChildren, childNode, childrenDest);
        });
      }
      insert(rootContext, rootNode);
      return rootContext;
    })(parseQueue);

    function sortZ(context) {
      Object.keys(context).sort().forEach(function(zi) {
        var nonPositioned = [],
        floated = [],
        positioned = [],
        list = [];

        // positioned after static
        context[zi].forEach(function(v) {
          if (v.node.zIndex.isPositioned || v.node.zIndex.opacity < 1) {
            // http://www.w3.org/TR/css3-color/#transparency
            // non-positioned element with opactiy < 1 should be stacked as if it were a positioned element with ‘z-index: 0’ and ‘opacity: 1’.
            positioned.push(v);
          } else if (v.node.zIndex.isFloated) {
            floated.push(v);
          } else {
            nonPositioned.push(v);
          }
        });

        (function walk(arr) {
          arr.forEach(function(v) {
            list.push(v);
            if (v.children) { walk(v.children); }
          });
        })(nonPositioned.concat(floated, positioned));

        list.forEach(function(v) {
          if (v.context) {
            sortZ(v.context);
          } else {
            queue.push(v.node);
          }
        });
      });
    }

    sortZ(rootContext);

    return queue;
  }

  function getRenderer(rendererName) {
    var renderer;

    if (typeof options.renderer === "string" && _html2canvas.Renderer[rendererName] !== undefined) {
      renderer = _html2canvas.Renderer[rendererName](options);
    } else if (typeof rendererName === "function") {
      renderer = rendererName(options);
    } else {
      throw new Error("Unknown renderer");
    }

    if ( typeof renderer !== "function" ) {
      throw new Error("Invalid renderer defined");
    }
    return renderer;
  }

  return getRenderer(options.renderer)(parseQueue, options, document, createRenderQueue(parseQueue.stack), _html2canvas);
};

_html2canvas.Util.Support = function (options, doc) {

  function supportSVGRendering() {
    var img = new Image(),
    canvas = doc.createElement("canvas"),
    ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
    if (ctx === false) {
      return false;
    }
    canvas.width = canvas.height = 10;
    img.src = [
    "data:image/svg+xml,",
    "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
    "<foreignObject width='10' height='10'>",
    "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
    "sup",
    "</div>",
    "</foreignObject>",
    "</svg>"
    ].join("");
    try {
      ctx.drawImage(img, 0, 0);
      canvas.toDataURL();
    } catch(e) {
      return false;
    }
    _html2canvas.Util.log('html2canvas: Parse: SVG powered rendering available');
    return true;
  }

  // Test whether we can use ranges to measure bounding boxes
  // Opera doesn't provide valid bounds.height/bottom even though it supports the method.

  function supportRangeBounds() {
    var r, testElement, rangeBounds, rangeHeight, support = false;

    if (doc.createRange) {
      r = doc.createRange();
      if (r.getBoundingClientRect) {
        testElement = doc.createElement('boundtest');
        testElement.style.height = "123px";
        testElement.style.display = "block";
        doc.body.appendChild(testElement);

        r.selectNode(testElement);
        rangeBounds = r.getBoundingClientRect();
        rangeHeight = rangeBounds.height;

        if (rangeHeight === 123) {
          support = true;
        }
        doc.body.removeChild(testElement);
      }
    }

    return support;
  }

  return {
    rangeBounds: supportRangeBounds(),
    svgRendering: options.svgRendering && supportSVGRendering()
  };
};
window.html2canvas = function(elements, opts) {
  elements = (elements.length) ? elements : [elements];
  var queue,
  canvas,
  options = {
    // general
    logging: false,
    elements: elements,
    background: "#fff",

    // preload options
    proxy: null,
    timeout: 0,    // no timeout
    useCORS: false, // try to load images as CORS (where available), before falling back to proxy
    allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

    // parse options
    svgRendering: false, // use svg powered rendering where available (FF11+)
    ignoreElements: "IFRAME|OBJECT|PARAM",
    useOverflow: true,
    letterRendering: false,
    chinese: false,

    // render options

    width: null,
    height: null,
    taintTest: true, // do a taint test with all images before applying to canvas
    renderer: "Canvas"
  };

  options = _html2canvas.Util.Extend(opts, options);

  _html2canvas.logging = options.logging;
  options.complete = function( images ) {

    if (typeof options.onpreloaded === "function") {
      if ( options.onpreloaded( images ) === false ) {
        return;
      }
    }
    queue = _html2canvas.Parse( images, options );

    if (typeof options.onparsed === "function") {
      if ( options.onparsed( queue ) === false ) {
        return;
      }
    }

    canvas = _html2canvas.Renderer( queue, options );

    if (typeof options.onrendered === "function") {
      options.onrendered( canvas );
    }


  };

  // for pages without images, we still want this to be async, i.e. return methods before executing
  window.setTimeout( function(){
    _html2canvas.Preload( options );
  }, 0 );

  return {
    render: function( queue, opts ) {
      return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
    },
    parse: function( images, opts ) {
      return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
    },
    preload: function( opts ) {
      return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
    },
    log: _html2canvas.Util.log
  };
};

window.html2canvas.log = _html2canvas.Util.log; // for renderers
window.html2canvas.Renderer = {
  Canvas: undefined // We are assuming this will be used
};
_html2canvas.Renderer.Canvas = function(options) {
  options = options || {};

  var doc = document,
  safeImages = [],
  testCanvas = document.createElement("canvas"),
  testctx = testCanvas.getContext("2d"),
  Util = _html2canvas.Util,
  canvas = options.canvas || doc.createElement('canvas');

  function createShape(ctx, args) {
    ctx.beginPath();
    args.forEach(function(arg) {
      ctx[arg.name].apply(ctx, arg['arguments']);
    });
    ctx.closePath();
  }

  function safeImage(item) {
    if (safeImages.indexOf(item['arguments'][0].src ) === -1) {
      testctx.drawImage(item['arguments'][0], 0, 0);
      try {
        testctx.getImageData(0, 0, 1, 1);
      } catch(e) {
        testCanvas = doc.createElement("canvas");
        testctx = testCanvas.getContext("2d");
        return false;
      }
      safeImages.push(item['arguments'][0].src);
    }
    return true;
  }

  function renderItem(ctx, item) {
    switch(item.type){
      case "variable":
        ctx[item.name] = item['arguments'];
        break;
      case "function":
        switch(item.name) {
          case "createPattern":
            if (item['arguments'][0].width > 0 && item['arguments'][0].height > 0) {
              try {
                ctx.fillStyle = ctx.createPattern(item['arguments'][0], "repeat");
              }
              catch(e) {
                Util.log("html2canvas: Renderer: Error creating pattern", e.message);
              }
            }
            break;
          case "drawShape":
            createShape(ctx, item['arguments']);
            break;
          case "drawImage":
            if (item['arguments'][8] > 0 && item['arguments'][7] > 0) {
              if (!options.taintTest || (options.taintTest && safeImage(item))) {
                ctx.drawImage.apply( ctx, item['arguments'] );
              }
            }
            break;
          default:
            ctx[item.name].apply(ctx, item['arguments']);
        }
        break;
    }
  }

  return function(parsedData, options, document, queue, _html2canvas) {
    var ctx = canvas.getContext("2d"),
    newCanvas,
    bounds,
    fstyle,
    zStack = parsedData.stack;

    canvas.width = canvas.style.width =  options.width || zStack.ctx.width;
    canvas.height = canvas.style.height = options.height || zStack.ctx.height;

    fstyle = ctx.fillStyle;
    ctx.fillStyle = (Util.isTransparent(zStack.backgroundColor) && options.background !== undefined) ? options.background : parsedData.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fstyle;

    queue.forEach(function(storageContext) {
      // set common settings for canvas
      ctx.textBaseline = "bottom";
      ctx.save();

      if (storageContext.transform.matrix) {
        ctx.translate(storageContext.transform.origin[0], storageContext.transform.origin[1]);
        ctx.transform.apply(ctx, storageContext.transform.matrix);
        ctx.translate(-storageContext.transform.origin[0], -storageContext.transform.origin[1]);
      }

      if (storageContext.clip){
        ctx.beginPath();
        ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
        ctx.clip();
      }

      if (storageContext.ctx.storage) {
        storageContext.ctx.storage.forEach(function(item) {
          renderItem(ctx, item);
        });
      }

      ctx.restore();
    });

    Util.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

    if (options.elements.length === 1) {
      if (typeof options.elements[0] === "object" && options.elements[0].nodeName !== "BODY") {
        // crop image to the bounds of selected (single) element
        bounds = _html2canvas.Util.Bounds(options.elements[0]);
        newCanvas = document.createElement('canvas');
        newCanvas.width = Math.ceil(bounds.width);
        newCanvas.height = Math.ceil(bounds.height);
        ctx = newCanvas.getContext("2d");

        ctx.drawImage(canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height);
        canvas = null;
        return newCanvas;
      }
    }

    return canvas;
  };
};
})(window,document);
var perfilesData = [{
        perfil: 'Defensivo',
        descripcion: "",
        retorno_result: "",
        retorno_texto: "Para inversionistas que buscan la seguridad en sus inversiones.",
        retorno_anual: "1,5%",
        retorno_mejor: "5,4%",
        retorno_peor: "0,2%",
        grafico: "data:image/jpeg;base64,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" +
            "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" +
            "13onw60O5vNO+E3wtt7uR9E8E+GjMwgLwqwhvPEOoxhLjWdVZDJPcMYoitvHGtf27wZwdl3B2VwweFjGpi6qjPHY1xXtMRWtqk940oO6pw2S1erZ+Z5jmNbMa7qVG4043VKkn7sI/rJ9WfmhX2B54UAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH7hf8ABF3/AILGfEj/AIJlfGG20PxLeat4t/Za8f6raQfE3wCJpLlvD7zSJB/wnXhC2kcpba3pkbeZe2kPlprFkj20n74QOv5x4hcAYTjHAOpRjToZ1hYSeDxVkvapK/1au1rKnN6Rk7+zlZrS6PYyjNqmXVUpNzw02vaU/wCX+/HzXVdUf6lHwp+KngH43fDnwb8Wfhd4m0zxj8P/AB9oNh4k8K+JNIuEubHVNK1GFZoJo3QnZKmWhubeQLPa3Mc1tPHHNFIi/wAW47BYrLsXiMDjaM8PisLVlRr0aitKE4OzTT6PdNaNNNaM/SKVWFanCrTkpwnFSjJappnoNcpoFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAZet61pHhvRtV8Q6/qVno+h6Fp17q+satqNxHa2GmaXp1vJd39/e3MzLFb2tpawyzzzSMqRxIzMQBV06dStUhSpQlUq1Zxp04QTlKc5tRjGKWrlKTSSW7Ym1FOUmlFJtt6JJatt9kf5b/8AwXo/4K5a5/wUa/aGvfAXw21i7tv2UPgvrWo6V8NNOjZ4E8e61CTY6r8TNYg+Ut/ajRPB4atJt50/QxHMyxXmoXkSf2h4ZcCUuEsqjicZTjLPMwpwnjJtJvC0370MHTf9y960lbnqaaxhFv8AN87zR4+u6dN/7LRk1TS+29nUfr9ntHs2z8CK/UDxAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/rF/4Nsf+CxU/wCy/wDE7TP2Jf2hPFHlfs9fFjXWj+GniTV7kC2+FXxN1iSKK3sZ7iZgLbwh40uRFZ3WXEGka5Ja6hsS1vNTmj/DvF3gBZzg58R5VR/4VcDSvjKNOPvY7B07tySXxYjDxvKOl6lJShe8YJ/T8P5s8PUWDry/cVZfu5N/w6j6N/yTe/aWuzZ/oyqwYBlIZWAZWUghgRkEEcEEcgjgiv5NPvRaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/je/wCDp/8A4KkyfCj4f6f/AME9fgt4mltfiB8U9It/EX7QOqaRdAS+Hvhfe+cmj/D+4lg+e31Px3NF/aWsWpljmh8KWttBc201l4phkX9/8FeC1jsVPirMaKlhcFUdLK4VI/xcbG3tMUk94YZPkpys068pOMlKg0/k+Jcy9nTWBoz/AHlVc1dr7NJ7Qb7zau1uorXSR/n61/Uh8OFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQA5HeN0kjZkkjZXR1JDI6kMrKRyGUgEEcgjNJq6s9U9GB/pzf8G4X/AAVHb9uL9l7/AIUZ8V/Ej6l+0j+zdpemaLrF3qlyH1T4gfDXAsPC3jJWk2zX2oaQsUPh3xRODcSC5GkaleTefrmxf458W+C/9W86/tLA0eTKM3nOpTjBe5hcZ8VfD9VGNS7rUVore0hFctM/RMgzL65hvYVJXxGHSTvvOntCd+rXwy+Tb1P6Q6/Iz6AKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPmP9sr9qLwP+xh+zF8ZP2mfiE6P4e+FPg6/16LTDcx2s3iLxBKY9P8K+FbKeUMkV94n8SXml6Hayupiglvlnn2wRSMvs8P5LieIc5y/J8Iv3uOxEaTnZyVGkrzr15JauNGjGdSSWrUbLVo5sXiYYTDVcRU+GlBytezlLaMU3peUrJep/js/tF/Hv4i/tQ/HD4nftAfFjWJdc8f8AxV8W6r4t8QXrtIYYZtQnJtdL0+KWSU2mkaLYra6Ro9gsjRWGl2VpZw4ihQV/fOU5XhMly3BZXgaap4XA0KdClHS7UF705tJc1SpLmqVJWvKcpSerPymvXqYmtUr1XedSblJ+r2XZJaJdEkjxavRMgoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD7l/4JyftseOf+Cf/wC1z8KP2kPBc9zLZ+Gdcg07x54dhuDBb+Mfh3rEsdl4u8NXYLrAftulPNJYT3CTJp2qwWOqRxNcWUOPmuLeHcNxTkOOyjEKKlWpueFqtXeHxdNOWHrR6+7NJSSa54OUG7SZ2ZfjJ4HFUsRDaLtOPSdN6Si/VbPo7Pof7Bvwy+IvhP4vfDrwL8VPAmqwa54L+IvhLw/418K6vbNuh1HQfEul2ur6XdJ3XzbO7iZkbDxvuRwGUgfwVjMJXwGLxOCxMHTxGEr1cPXpy3hVozlTnF+kovXrufqtOpGrThVg+aFSEZxfeMkmn9zO5rmLCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP4K/+DuL9vq51z4gfCz/gnv4A1tf7C8EabZ/GP48pZzBvtPjPxBDJB8MvB940TxzQS+HPCrap4t1OxmWez1CLx14VugEutIGz+m/ArheNPC43irFU/wB7iZyy/LOZbYek08ZiI3umqtfkoQkrSg8NXj8NTX4nijHc06WBpy0glVr2/nl/Dg/8Mbya2fPB9D+Kiv6IPkQoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP9Ef/AINPP29v+Fxfs2+Nv2JvHWuLcePf2c7iXxb8NYry4DX2q/BrxVqYOpWdsjNJcXEXgXxrqHl3N1PIqxWXjXQdNtIlt9O+T+UfHDhj6hm+H4iw1O2GzZKhjHFe7DMKMPdk3ol9Zw8fdilrLD1Zyd5n3nDOO9rh54Ob9/D+9Tu9ZUZPVL/r3N6vtOKWx/XJX4UfUBQAUAFABQAUAFABQAUAFABQAUAFABQAUAcn488b+Gfhn4H8ZfEfxrqttoXg7wB4V8Q+NfFmt3jFLTR/DXhbSbvXNc1S5YBitvYaZY3V1MVVmEcTYUnAO+Fw1bGYnD4" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "jOnVpycKkJJ7SjJOLXdH7Df8ABGT9l/xz8Q/2l/D3xvn0e/sPh78ImudTbX5ojHa3/ie+srqx07R7bzFHnH7HLqFzdMhBtwLTOftC1+B/SC4zy3KuD8Vw5DEUqua57yUfqsZXnSwdKpCpVrztfl/eRpQgn8f7z+Rn7x4A8HZjmnF2F4ilh6lPK8j56zxMlaFTGVac6dKhC+sv3bqzm18P7t/bR/RL/wAFEvgxqfx8+Cvw3+HNn4W1/wAX6Veftafsfaz410zw1qGtaPqtr8O/Dn7Rvw61rx7riaz4c1HSfEGi2ugeFrPU9Wv9Z0bUrHUdKsrSe/trq3e3EqfwKf3kfPOv/sCfDn9nv45+Evjh4B+G3xF+NnwrvZNF8PeMvhD4g+L/AMb/AIj6h8M9bgluYvD/AMW/APhTxd8SNa8NePNDFxezad8R/AHjfw74s1M3l34Q+JHgrxN4Htfhp4g0LxqAeE+P/wBnT4Z+Cf2qv2w/Hv7Qn7Mn7Xfxif48fGHwb8S/hb4m/Zl1P4+3fha2+Hmk/s9fBb4VzaX4stfhJ8TPA+g6X40h8efDnxrcTWep6bea5J4cufDl7NqL6ddaba2oB9hfBP4K+Ivh/wDtO/s1XWk/BZ/hD8Mvh5/wTn174PJ4V0bXbnxv4Q+F/iK3+KPwQu9D+FFr49ngt38TXej+H/DmpR2Oqzwx3OtWOi3OpupLOxAPknxn8NvjB4AvPi58Q5fgp8WPF2nab/wWk8K/tD2mh+A/B134m8WeI/g3p/7N3wy8JXfjvwxoNvLDPrOixeI9P1DSjcQSKv2qwu0z+5Y0Aei/Hubxx8Y/idqknxm/Zy/al+JHw617wp4E1H9kT4XfC6++Inwg8J2+seL/AAH4a1DXL79rPx74D8Q6Z4l+FfxH0r4naj4g8CajLrOqXXgbwP8ADaBNevfAeq6/Z3uvXoB9Vf8ABMD4deOPhL+wP+zL8OfiV4R1fwF458J+A7jTfEng7XZZZ9X8PXx8Ta9dDTr65mZ5buWO3uIGF5IzPeRulyxJlNAHgWhfsf8Aj2x/a3h+HMs9wP2JPA/xLb9tHwF4H/sOdfC2n/F7xJeWurL4FtfE320+IrnxJ4W/ab0n4gfta3d5f6vc6RdSfF2w8Fp4cXQfD1kIAD5w/bJ8A/Ff4yQ/tU+Evip+zX+0d8bvjPfaV8VvDv7Kek/C/wAT/EH4ZfsweHvhj/Y+t/8ACF6zrXxC8G69Y2mofFDxRocces+O/DPxE/4TPR9Y8Z6PoHgrwfofgu18T6jBegH1P+x38Ifid4I/aX0PxP4t8D+IfD/h63/4JTfsC/CGbWdSsHg0+L4nfDjx/wDtO6h468Dvc5MY8Q+F7Hxb4butWsM77eDWbGTLLLwAeYf8If8AtC+A/gN468Nv8PvilD8L/G//AAUF/bQ8TftCaf8ACvSNSm/aL1T9nXx38dvi94w8A3HwNsbS4Sea2+K3iO++HXh7x1rWn2kviHTPgJ4v+IfiLwLrPgrxtp/h7xz4aAPjv/hmb4oP4X/4Kq6h8F/2Tfjf4D8I/GP4B/sL6f8AADwf8TvGXjnxb47+KOt/Dr4mftFat40iupviRrnirxF4G1jTf7f0ZNW8FXurahB4e0q80nxJjb4jaBQD9Hk1n4n/ALS/7WP7HnjG4+APxZ+EK/sv6n8btX+M9x8R9Am0zwZ/a3j/AODWufDa20r4T+OZIray+LGn2vjG7KW+v6Xpukwan4aFv4mjs7a2ultUAPgHwL+yfqvhr4Lf8Ez/ABZ+0n+zx+0J428J/BX9jf41fBHxv8OPgrL8TtN+MfhH4w/Enx/+z34u8I3Ot6D8LfF3gnxU3g+28K/CT4iWevXV5rE+hWOvX/hGC80241DUNJurIA/XD9hn4c/D7wF4F+Il/wDDL9njx7+z14V8ffEuXxdBZfFnxX438Q/Fb4h3lv4K8G+ELvxz490n4iax4k8WeCr+J/Cy+DdF8O6j4i1ZLrwt4U0PxRaPZ2viGKxtwD7coAKACgAoAKAPzC/4KM/8Elv2T/8Agpl4f0C1+Oeg6hpfjfwe11/wiHxL8KT/AGDxVosN9FHDeadNKrRrquj3IgtpZNKvXazN1aWt0EE8Ebj7LhLjnPOD6tWWW1YTw2I5frGDrrmoVHFtxmlryVFeSU4+9yycdm0edj8swuYxiq0Wpw+CpHSavuvNPTR9Uux+TfwC/wCDTT9hL4U+OrPxd8SviL8Tvj3pOnX0d/Z+C/FdppHh3QJGhlSWK11RNCnZtYsTsMdxaXqPFdRuySgivuc08ceJsdhpUMHhMHldSceWWIoSnVqq6s3D2q/dy7Si7xex5dDhjBUqinUqVK6TuoTSjF+T5d15M/qP0fR9L8P6Xp+iaJp9ppWkaVaQ2Om6bYwpb2djZ26COC2toIwscMMMahI40AVVAAGK/F6lSdWcqlSUp1Jycpzk7ylJ6ttvVtvdn0iSikkkklZJbJdkeFfH39kr9mT9qeLwtD+0f8Cfhh8bofBEmsy+EIviV4S0rxXF4bl8RLpaa7Jo8eq2862UmqromkrevCFaddPtQ5IiUVAz0WL4T/DSD4Ux/AyHwN4Zh+DsPw9T4TxfDWLSrWPwdF8NI/DY8Hx+Bo9DRBZJ4ZTwsBoCaUsYtV0sC0CCIBaAPkHxh+xZ4P8AhV8MLLwb+w98BP2XfhZrVw/j3wjez69oOqeDdI8K/Dj40aZ4ftfjHfeC28A+HtTvD4x8TXnw8+FlxNYXkNlomtr4O0w6xfxnSdPRgDvtU/YU/Zm8ffAr4F/AL48fCbwD+0J4T+APgjwf4O8GSfFbwhoviLypvCXg7SvBf/CQw2F5BcWmnarq2m6VE18bMBB5jQoxiVaAPpfwl4F8G+A4NatfBfhnRfC9t4j8Sax4x12DRLCDT4tW8U6/LHNrWvX0duiLPqepyxRNd3TgyS+XGCdqKAAdXQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHjHjj9nL4AfE3V01/4i/Bb4XeOdcjZHj1fxZ4G8N6/qSPFjy2W91PTrm4DRgAIRJlQABgAV9DlvFnFGT0Hhcp4hzrLcM006GBzLF4Wi1Ldezo1YQs+umvU+fzHhThjOK6xOa8P5NmWITTV" +
            "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" +
            "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" +
            "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" +
            "Ull/wjMn9jgA4u3/4J3fscWngn4r/AA+tvg3DD4b+OmkfDnR/i80fjr4mDxL8QU+E2uan4l8A6v4k8cf8Jn/wm954u0XX9Y1DVp/HI8Qp40129lil8Ra9qxtLPyAD1r4WfsyfBf4M65beJ/APhrWrbxRbfDzT/hSPE/if4g/Ef4ieJbnwBpPjbxj8RdN8P6lr/wARPFvirV9WWy8YeP8AxZqlvqWqXl5rCQ6nHpA1D+xdM0nTrAA7Pwz8IPhp4Q0Dxv4W0LwfpUPhv4k+KvHnjTx3oWoC513SvFHiL4naheap49u9Wsddn1K3ntfE97qF6+o6OETRvJuZbO30+GzbyKAPm/Qv+Cdn7H/h/wAVeGfG1v8AC7VtX8T+B/G2hfELwDqnjL4s/Gfx+3w78UeHJ7u40yb4c2njn4h+IrD4faKz3ax6p4T8G2uh+E9etdM8PWWu6JqVn4Y8OwaWAfbFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAP/Z",
        tabla: ""

    },
    {
        perfil: 'Altamente conservador',
        descripcion: "El inversionista con este perfil tiene alta aversión al riesgo. Su objetivo principal es la" +
            "\npreservación de capital acompañada de la generación de ingresos corrientes. La rentabilidad de las" +
            "\ninversiones pueden ser muy bajas, a cambio de un alto grado de liquidez en el corto plazo y un" +
            "\nriesgo mínimo de perdida de capital en términos reales.",
        retorno_result: "2,76386174410896 %",
        retorno_texto: "Para inversionistas que buscan la seguridad en sus inversiones y en menor medida, \nla generación de ingresos corrientes.",
        retorno_anual: "3,0%",
        retorno_mejor: "17,5%",
        retorno_peor: "-6,5%",
        grafico: "data:image/jpeg;base64,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" +
            "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" +
            "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" +
            "+GNUWy+KX7Sv9rfD7w6IpkjvtP8E20Nn/AMLJ1+BGG5hDpWqaf4aWSFkuLS68VWl9Cwa1JH719Hvgj/WvjWlmeKo+0ynhj2OY4m6bp1MdKU/7Mw8unvVaVTFWknGcMJOnJe+fE8d5z/ZmUSw9KXLisy58PTs7SjQSX1movSEo07rVOqn0P89ckkkk5J5JPJJPc1/o0fgQlABQAUAFABQAUAFABQAUAFABQAUAfQXi3/lGZ+0x/wBly+Bv/ozUa/GvED/ksOFv+xbm/wD7Yfb8Mf8AIuzP/r9hf/bj8R64z2AoAKACgAoAKACgAoAKACgAoAKACgD/AEHv+DTT9vwfE74JePP2EPHWtLP4y+BqXfxE+FEN1OrXl98J9c1e1tvE2m28W3zGtfB3jLWbCZriaViU8a2lnCiQWKKP5Y8ceF/qWY4XibDU7YfMnHCY5xWkcdTpydGbe18Rh6clZLfDuTu5M+54Yx3tKM8FOXv0bzpJvV0pP3kvKE3f/t+2x/YbX4GfVhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH+ct/wAF0v2pZf2lv+CgPxN03S9Re88CfAM/8KP8IxKxW2Oo+E7q5PxA1EQK7wNdXHj2413Sv7QieT+0dH0LQ5S4ijhhh/0s8A+E1wv4d5VVq0lDMOIf+F7GNq8vZ4yEf7Op8zSkoRy+OHq+zaXsq2Irq13KUv5643zP+0s+xMYyvQwH+xUl05qTf1iVtruu5w5l8UKcOiSX451+0HyIUAFABQAUAFABQAUAFABQAUAFABQB9BeLf+UZn7TH/Zcvgb/6M1GvxrxA/wCSw4W/7Fub/wDth9vwx/yLsz/6/YX/ANuPxHrjPYCgAoAKACgAoAKACgAoAKACgAoAKAPv7/glz+17e/sM/t4fs6ftF/2hPY+FPDPjuw0H4nrEsk0d38KPGZ/4Rf4giaxjZRqUuleHtTuvEWk2UhVW1/RNInSSCa3iuIvl+M8hjxJwzm2U8ilXrYadTB3snHHYf99hbSfwKdWEaM5L/l1UqKzTafdluKeCxuHxF7RjNKp50p+7U062i3JL+ZI/2JrW5gvbW2vLWVJra7ghubeaJ0lilgnjWWKWOSJnjkSSN1dHjdkdSGRmUgn+BZRcZOMk04txaaaaadmmnZpp9Hqfqy11WzJ6QBQAUAFABQAUAFABQAUAFABQAUAFABQB82ftifHW0/Zm/Za+PXx4uWsvO+GXwx8U+I9Gt9QXfZ6l4oi06W18I6LMuRuXW/E9zpOkAHcA16CyOoKn6fgvIJ8U8WcP8Px5+XNc1wmGrypu06WEdVTxleL70MLGtW/7c3W552b45ZblmOxz5b4bDVakFLaVVRapQf8AjqOEPmf5VF/f3uq317qmpXdxf6jqV3c39/fXcrz3V5e3kz3F1d3M8rNJNcXE8kk00sjM8kjs7sWJNf6106cKVOFKlCNOlShGnTpwSjCEIRUYQhFWUYxilGKSskkkfy9KUpSlKTcpSblKTd25N3bbe7b1b7lSqEFABQAUAFABQAUAFABQAUAFAH0H8Af2VP2h/wBqLxDH4Z+A/wAJ/FnxEvzcJbXN3pVkttoOmyyAsq6t4l1OWy0DS2KBnSO91KGaZVIgilchT87xFxdw3wphniuIM3weW0+VyjCtNyxFVLf2OFpKpiKqT0bp0pRjf3mlqd+AyvMMzqezwOFq4iV7NxjanF/36knGnHTW0pJvomfu/wDBb/g2N/aj8ZWltf8Axk+NHw0+EMdzbx3I07Q9J1f4lavb7wCbO+j+2eC9Pt7xPuyG11DUbZDyk844P4Bnn0puFMDOdPJcjzTOXCTj7XEVqOV0ZW+3TfJjakoPdc9OlJ9YxPuMH4bZnWipYzGYbCXSfLCEsTNX6SXNRimutpSXZs+79R/4NnNC1L9mH4kfs7z/ALUWsLN8QvGngrxjL4oi8A2KR6fP4NNwYrSPSn1qVpYr0zneWvt8QX5WYmvx/iD6QtbPM6yzNv8AVylh45bh8Xh40Prs6jqLFWvKVT2MUnC3SFn2PsMr4Jjl2GxND6/Kq8ROlNz9ioqPs76KPO73v/MfkT8bP+DPb9pfwxp0t/8AAj9qT4W/FO8CSyrofjrwbr3wwkjEal1t11jTdY+IMV5NJjZHIdLsY3kKh1hTLj08u8e8nrTUczyXG4KN0vaYbEUsYtdOb2c6eEcUt2ueTttdl1uFcRFXo4mlUfacJU/xTqXfyR/Ob+1p/wAE4f20f2ItUuLL9oz4EeL/AAbpEUyRW/jaygi8SeAb4TOyWrxeLtAkv9Is5LzYWttP1ebTNWZMF9PjJxX61kfFvD3EcIyynM8PiJtNvDSbo4qNleSeHqqNSSjfWdNTp9ps8DFYDF4NtYijOC/ntzQfb3ldK/ROz8j4gr6M4woAKACgAoAKAJYIJ7qeG1tYZbm5uZY4Le3gjeaeeeZxHDDDDGGklllkZUjjRWd3YKoLECk2opyk0kk223ZJLVtt6JJatvYDt/Dvwr+KHi/x43ws8JfDfx74o+JyX2s6W/w58O+D/EOt+PF1Pw5Fe3HiHTm8Iabp1z4gW+0GDTNRm1m0OnC40uLT72S+jgS0naPmrY7BYfC/Xa+LwtDBctOf1utiKVPC8lZxVKf1ic40uWq5wVOXPabnFRb5le40qk5+zjTnKpdr2cYSc7xvzLkS5rxs7q2lnfYk0L4TfFTxR8QZvhL4Z+GfxA8RfFS21LXNGuPhnoXgzxHq/wAQYNX8MR30viXSpvBmn6bceI4tS8PRaXqcmuWL6at1pMenXz38VutpcGMq47A0MKsdWxmFo4Fwp1FjKuIo08K6dZxVGaxE5qi4VXOCpyU+Wo5x5W+ZXI0qsqnso06kqqck6cYSdS8b8y5Eua8bPmVrqzvsZF34G8bafe+NNNv/AAf4pstR+G7XC/ESwu/D+rW174Ca08R2Hg66XxpazWiT+FmtvF2q6X4VuBrkdiYfEepWGhybdTvLe1kuOJw044eccRQlDF2+qSjVpuOK5qMsRH6vJSar81CE669m5XowlUXuRcknCac04STp/wAROLvC0lB86t7tptR963vNR3djlq3JCgD/AFo/+CCv7Tz/ALVX/BLP9l/xdqd/De+L/" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "+UTXBgt1itYYIIv4SzzOcZn+a4zNsdNzxGMrSqON24UobU6NNPanSgowguyu7ybb/UcLhqeEoU6FJWhTil5yfWUu8pPV/5H0VXknQFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfEn7fn7EHw0/b0/Z+8R/B3x3a21jr0aS6x8N/HMdrFLrHgTxlbwutjqljK22SXTbvIstf0hpUttW06RkZre9g0/ULH7rw847zTw+4iw2dZfKVTDtqjmeAc2qOYYKTXPSqLVKrD+Jh6yTnRqJNc0JVKdTxc+yXDZ7gKmDrpRqfHh66V50Ky+GUXpeL2nC6U472ajJf5rH7R37OvxT/ZW+L/i/wCCfxh8OXfh3xj4R1CS2kWaKQWOtaY7M2meIdDumUR6homs2nl3mn3cJZWik8uQRzxSxJ/p5wzxLlPFuTYLPclxMMTgsZTUlyte0oVUrVcNXhvTr0J3hUhK1mrq8Wm/5zzHL8VleLrYLF03TrUpW1Xuzj9mpB/ahNaxa6aPVNHhle8cQUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfTf7P3j/wJJY+MP2efj19tvP2bvjvFYaN49+xF31b4f+JtPkkfwR8ZPCA3eXD4o+H2rzi9eGRHtde8PT634a1JG0/V7jb8Dx5wvWzrB0c0ymNOHEmSe0r5XOdlDF0ppfW8qxLtd4bHU48l01KjXjRrwvKkk/eyHNVgMQ6OJcnl+L5YYmK3ptP93iaa29pRk79pQc4Oyldfk/8AtHfs/wDjz9mP4weLfg98QrRE1Tw/cx3Wia5ZvHcaB448GatGNQ8H+P8AwpqNvLPa6p4X8Y6DNZ63o95bzyFIblrG9W21OzvrO3/PcszGhmmDp4ujzRbcqVehNONbCYqjJ08Tg8RCSUqdfDVoypVISS1jzRvCUZP7WtSlRm4NpqylCcXeFSnNc1OpBrRwnFqUWujs9U0eHV3mYUAd58L/AIX+P/jT8QfCPwr+FvhXWPG/xB8d65Y+HfCvhfQbSS91PV9W1GZYbe3ghjB2oCxkuLiUpb2tuktzcyxQRSSLy43G4XLsLXxuNr08NhcNTlVr1qslGFOEVdtt9eiSu5NpJNtIunTnWqQpU4uc5yUYxirtt/18j/VO/wCCK3/BJ3wV/wAEw/2dYbHWbTSvEH7SnxPttP1n40+P44IZp7aZYhNY/Dzw1dkPJaeEvDLyujiGQP4g1fz9a1A7BpWn6R/FHiHxxiOMs2cqcqlLJ8G5U8uwrbSavaWKrR0Uq9a11dfuqdqcPtzqfpWUZZDLsPZ2liKlnWnbbtTj2jH/AMmer6JftDX56euFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB+Yv/BTn/gmh8MP+Ch/wkbSb+LTvCnxu8HWl1P8K/iitpuvNOnYPNJ4V8RPBtm1PwdrFxg3FrJ502kXbf2rpQSZr231D9T8LPFDNfDfOFWpuri8ixs4RzbKXO0KsVaKxeG5rxpY2jH4Zq0a0F7GtePJKn81xLw5huIMJySUaWNopvC4m2sXq/ZVLayoze6d3B+9HXmUv8679oH9nv4s/swfFLxJ8HvjP4T1Dwj408NXTxT2t3Gxs9TsvMkS01rQ74KLfVdF1BYzLZahaO8MgDRsUnjliT/SXh3iPJ+Kspw2dZHjKeMwOKgnGcGuelOyc6Fenfmo16bdp05pSWjV4tN/z7j8vxeWYqphMZSlRrU3ZqS0lHpOEtpQlvGS0+d0eK17hxhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB9Xah4Fh/bv8A2frX4HG3gvP2sPgPpuqax+zTrd1dC0v/AIofDOET6x4y/Z2u7t1+z6hrNg4vfF/wlTU3WYau2s+FbG9tovETRt+Jcb5O+Gc1nxXhIuORZlKnS4moU4c0cFjHalhc+jFe9GlJcmFzJwTSpqjiZx/cyZ91w9mH16gsqryviqKlLL5yf8SmlzVMG295LWdC7+Lmpr4kfhBcW89pPPa3UE1tdW00lvc21xG8M9vPC7RzQTwyKskU0UitHJHIqujqysoYEVkmpJSi000mmndNPVNNaNNaprc9Vq2j0a0afQ7b4Y/DD4gfGfx74X+F/wALfCWt+OfH3jPVbbRfDPhbw9Yzahquq6hdNhIoYIVYrFEgee6uZSltZ2sc11dSxW8Uki82MxuFy/C1sbja9PDYXDwdStWqyUIQgurb6vaKWsm0km2kXTpzqzjTpxc5zdoxirtv+t3slqz/AE1P+CGn/BEPwX/wTd8BxfGH4w2Oh+M/2w/HmjRx6zr6xJf6d8H9Bv4Q914F8D3Mm6P+0bpWWLxZ4ogjjudRKNpGnSxaKLo6r/HfiT4jYji7FPAYCVTD5BhajdOldxnj6sXpicSl9iO9Ci24wv7SadTl5P0PJsnhl8Pa1lGeLmtZbqlF/Yh5/wA8lvsna9/6HK/Kj3goAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/P79vP/gnH+z9+334BuPD/AMTdETSvHWmWN0vgb4naNDDD4n8K6hIgaI+ftxqWkTTRxLqOk3nmW9xCuY/JuY4J4v0Tw/8AEviLw9zGOIyuu6uAq1IfX8rrtywuLpp66f8ALqtFN+zrQtKL3vFyi/Bz3h7AZ9QdPEw5a8Yv2GJgkqtKXTX7UG170Ho12aTX+fp+3N/wT4+P/wCwV8Rbjwh8V9AmvfCt/cynwX8S9ItbmTwl4tsNztAYbtkKafrCRIft2jXUn2i3kSQwPdWwS5f/AET4C8ReHvEHLY43KMRGGLpxX17K604rGYOptK8E71KLf8OvBcsk1zKErxX4LneQY/IsQ6OKpuVKT/c4mCfsqselpbRn/NBu6s7XVmfC1feniBQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAG54Z8S654O8QaN4q8M6nd6N4g8P6jaato+qWMzwXdjf2MyT21xBLGQyPHIing4IypyCRWGKwuHxuGr4TFUoV8NiaU6NalUipQqU6kXGUZJ6NNNl0qk6NSFWlJwqU5KcJRdnGUXdNPyZ9c+Pf+CcXxH/4KZ+NfAPxy/Ys8D6IPGHxN8U2v" +
            "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" +
            "jl4W5i0qXFeEoSdtMfQxeXpN9ObGYejB22upNeZ4NfgziSgm5ZZVml/z5nSr3+VKc396Pm3Vv+CfX7dGg7/7Y/ZA/aR05Y87pLr4NePoosD+JZW0IRsh7OrFWHIJFfT0fEbgHEW9jxnwxUb6QzvLnL7liL37q111R5s8hzuHx5TmMfXB11/7Zr8jhH/ZK/ajiuBaSfs7/GlLonAt3+Gni9ZifQRnSd5/KvQXGHCjjzriTI3D+ZZpguX7/bWMP7KzNOzy/GJ9vq1Xp/24djpP7A/7b2vbf7F/ZH/aO1UPjabD4OePboHPTBh0Jxjvn05rireIXAmHv7fjHhmjbdVM7y6DVvKWIRtHIs6n8GU5jL/Dg67/ACgfQngT/gjX/wAFLPiHs/sf9lH4g6OHx83jg6N8PQvT758bapoO0jPIbBBBGMjFfOZh41+F+W39txdl1a3TAKvmL+X1GliLnoUOD+I8R8GV4iH/AF/5MP8A+npQPvL4Uf8ABtH+3H4yFnd/Ebxb8HPhFZPKq31jqniXUfFXiKCEkb5LW08IaTq2hXMic4jm8RWisR8smCDX5/m/0oOA8FzwyzB51nNRRfs6lHC08JhpS6Kc8ZWo4iKfeOGm11R7mF8OM6rWeIrYPCR05oyqSq1F3sqUJQdvOovI/W34Bf8ABsv+y54Flt9R+O3xU8d/Gu/gmhnGl6LY2/w48NvtwZbS+gh1DxLq1/bscoJYNT0qUr821DwPx/iL6UfFeYKVLh/KcBkVOScXVr1JZnil2nTlKnhaNOXW0qVZeqPq8B4b5ZQtLHYqvjZJp8sEsNT81JKVSUl6Sgz9vfgN+xd+yv8AsyWcNr8Dvgb4A8BTwBlXWrDRYb3xO6yKEkSbxTq32/xDNE/JaGTUmi3EkIO34RxBxvxZxTOU8+z7McwjK16FSvKGFundNYSl7PDJruqSdup9rgcnyzLUlgsFh6DW04wTqaqzvVlzVGvJysfT4GOBwBwAK+VPSCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAAkAEk4A5JPQD1NAHxr8Sf+Cg/wCxr8I/EcvhPx98ePC+k6/BcmyuLGw03xT4mW2u0cxyW9zeeFdB1qwt5YZA0c6TXUZgkR45gjo6j9Ayjws8QM9wkcdlfDONr4WUPaQq1a2CwfPBq6nCnjcVh6k4yTTi4wfMmnG6aZ8Dm/ihwDkWLlgcz4lwdDFRm6c6VOljMXyVE7OE54LDYinCUXpJSmuVpqVmml9GfDn4p/Dv4u+HofFfw08YaH4z0CcJt1DRbtZxC0ilkivLZxHeWE7KCRb3tvbz4BzHwcfJ5tkubZFi5YHOMBicvxUb3pYiny8yTs5U5q9OrG/26cpR8z6vKs5yrPMLHG5Rj8Pj8LK1quHqKSi2rqM4u06crfYqRjLyO+ryz0woAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/iY/4OAP+C+vxu+AXxr1H9jn9jHxPF4H1nwSrL8YPilZ28M2vQ65IJ7ZfBfhy4kczaRc6TNC95qupwLbXBZrG2t3nhlugn9FeF3hhl2aZdDiDiGi8TTxFvqGCk2qTpqz+sVla1SM01GEHdfE2k1E+PzzO61Cs8JhJcjh/FqL4r/yR7W3b0ex/O38Af+C/v/BUf4GePLTxje/tO/ED4xaYt8lxqngv4wa/qPjXw5qNmZVe4sIINXmuv7JEqKY47qyQT2wYtFzkH9XzTwu4LzLDSw8cmwuXz5bQxGApQw1aEraSbgl7Sz1alpLqeDQzzMqM1N4mpVV1eFWTnFrtre1+6P8ATS/YW/a58F/tz/sufCr9pnwLbSadpPxE0KO7v9EnZHufDniC2Cw674eu3imuImutHv8AzLOdo55kLxkrI45r+O+JcixHDedY3J8S1OphKjjGor2q0nrTqxuk+WpG0ldLR7H6JgsVDG4aliIJpVFdp7xkviWjez0OG8b/AB3/AGlviV8QfHngX9jPwZ8FNZsvgh4mPgD4yeN/2iPEXjbwv4fPxLu/DvhrxlB4C+H+meANH8ReKNUvvDfg3xT4a8R+K/EWt6NpnhG5i8a+HdK8J61rutaR41sfDvhHUeheG/2mT4W+GPjLxN+0x4U1X4MeLPhPfaP4V8dodG17UvBPj7xbrTWmneF5f2dNcgs7ub4xWvxW1u90zTfhd4H8MLqfxauvEXiPw78MvEngrR/ivdS+DowDP8F/tq/CL4k23jiw8PW3xR8AeMfCvgPxH4+03wx+0Z8APj1+zlq3irw/4YtlPiHxD4L8P/GX4c+CPE3xG8N+Cr2+8OWvxF1H4c6V4n/4QaTxh4KtvES6be+NvCUGsAGVd/tx/CDwp8Pvgx4h8TXPjLx/4u+LPwn8E/Fa28Jfs3/BH48fHzxEnhXxdolrfWvjuT4efDf4d+KPij4T+Gmram93pnhzxR8QPCXhuG8vreTQ7lovEVrfabbgH0X8J/i54F+Nng628cfD/U7y90mS8vNK1HTta0TWvCfi3wt4g0x1i1fwn458EeKLDSPF3gTxlosrpFrng/xfoui+JdFmkji1TS7SV1QgHpVABQAUAFABQAUAFABQAUAFABQAUAFABQB+dP8AwVO+OXiz4Bfse+NvFfgm4ew8ReINU0vwLZarDn7Vo/8Awkdtqe/VLMgFVurUWQ8p5FeNd5LKSAR+seCvDeB4n49y7A5jBVcJhaNbMqlCXwV/qk6NqNTq4T9p7yTTdrXPyrxm4jxvDHAmY43L5ulisVWo5bTrx+PD/W4Vv31Popw9n7raaV9j+Ge4uLi7nmuruea6urmWSe4ubiV5p7ieZ2kmmmmkZpJZZZGaSSR2Z3dmZiWJNf6RwhCnGMIRjCEIqMIQioxjGKtGMYpJRjFJJJJJJWWh/nNOcqkpTnKU5zk5TnNuUpSk7ylKTbcpSbbbbbbd2frD/wAEcPjp4z+HH7X/AIL+HWm6jdTeD/i8bvw1r2hSSyPp4vLSxvNU03WooQcQ3tktteWwkQrHLFfOLhJWitzF+H+P3DWX5twHmGbVqUI4/IeTGYXEqKVX2dSpTo1sPKVvep1O" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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",
        tabla: "data:image/png;base64,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"
    },
    {
        perfil: 'Conservador',
        descripcion: "El inversionista con este perfil está dispuesto a asumir cierto riesgo de pérdida de capital a" +
            "\ncambio de generar ingresos corrientes. Este objetivo es más importante que la generación de" +
            "\nganancia de capital. Los inversionistas con este perfil buscan complementar sus ganancias" +
            "\ncon ingresos corrientes generados por su portafolio para cubrir sus gastos.",
        retorno_result: "4,24%",
        retorno_texto: "Para inversionistas de largo plazo que buscan crecimiento en su inversión a un \nnivel medio de riesgo y que podrían requerir generación de ingresos corrientes.",
        retorno_anual: "4,3%",
        retorno_mejor: "27,6%",
        retorno_peor: "-16,6%",
        grafico: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAE8CAYAAADt+is0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFLjSURBVHgB7b0HYBzlmf//tXrvvVvFsmTLveIONmB6bwkQIBC4FHL3P5LcXZIrIY387y7JkVBCaAnYVFNNM2Dcu2WrWJLVe28raSWtJP/e5xVjxstKWkmzq92d55Ms1s7Ozs7OznzneZ/neZ9nFlyMcwIwDKNLZgngQriBYRiGcUhYoBmGYRwUFmiGYRgHhQWaYRjGQfEAwzgYIyMjGB4epoAP3Nzc5HOTyQSDwYDe3j709BjkMqPRiLa2NgwOmhASEoL4hBSUVXWirLwRAf4+CAjwQVCAL4KD/RAo/vUXz/39vOHv6w1PT3fxGefk53h6esDDww0uFl9iXAAWaGbGIJElSGhbW1tRU1ODqqpqNDY2orS0FF1dBvT19UoRnYj58+djzdrNePujEvz9lT0Tru8lRDk8LACxMaFIiA9DVmYicuYlY15mHGKjw+Dv733+BsG6zcwULNCMzaHMR7KABwYG0NTUhLKycpSUlKC8vFxYwO3o6OiAvRk0DaGhqVM+TpyqwDs7j1/wur+wwFNTorFyWTpWL5+DhfOTkZIcBXe3WdLidndn7yBje1igGZtAVm9/fz9Onz6N3bv3CkEullays9Db24+8gir5eOaFT88vT50djRVL0nD5lsXYuCYbYaEBwj3izu4RxiawQDOaQO6K9vZ2nDlThP3798t/6bmrUV7RJB/b3zggn8dEh2Lzxhxcf/UKrFyaISxvL3h7ebJgM5rAAs1MCbKQ6UG+4t27d+PUqTzU19dDbzQ2dUift+L3zsyIww1Xr8TVW5cia048hoaGpbuEBZuZCizQjNUY+ofg7+2B2nYjBrpa8PN/+xf09PSA+Yris/X49f/skA9yf2zeuAB33rYeF6+fL/3ePt6eYBhrYYFmxmVwaDTToqK1D68frcc7uY1wE9bgjvszZeCPGZv2jh68uuOAfIQE++Obt67DfXddgjQRfKQ0P4aZCBZoxiI9wlruF+L8Xm4TXjpUK61mNdVdI7juumvxyiuvgpmYzq5ePP70h/IxOzkK//yDa3D9VStkOh+l/DGMJThXiDmPoX8YQ8PnsL+' +
            '0Hf+4LR/rfrUPv9159mviTOwr78GiJcvATJ6KqmZ89/97BnGZD+Cu7zyOYyfLhD9/BAxjDt+6GfQM0ESQc9hxvBHP76tGQ1f/hO85WN6JWxcmgJkeb79/VD4S4sPx65/fjisuXQJ3D3d4e/GlybBA65r+wWEYhDi/sL8G2w7Xom9g4hl7Ck1CxJv6ZuH666/Hjh07wEyP2ro23Cms6aBAX/zT967GfXduQnCQn5wUw+gXdnHokAHhW27qHsCTuytx919OYPskxZkwCnE/XtOH+QsWgtGOboMR//On97Dlukfxxyc/QEtrF4aG2P2hV/j2rCNImNt7B/HSwVrsKmhFsxBpo2lywqxgNI3gYFknLr00Goy2dHf3ycdv//ct/O2VPbj9xjW455sbERYaJIs6MfqBBVoH9Asx7TYOSWH+KL9ZWM/9ctl0GB45h6q2PvSOeGLTpk34/PPPwWiLobdf5lX/7v/exbY39uObt67Ht+7YKKvzeXpwmp4e4NuxCzMwPCInl7ywvxr3/PUE/nagRorqdMVZods4jCPVvbho7VowtqP3S6Emi/rS6x/FM8/vgqHHKCe+MK4NC7SLQp1z9xS14v7ncvH07iqUt/RN2Z0xFv1DwzhY3oWY6FgwtqdHCPWZ4lr8+29ew013/jc+3Z0nKwVyn2TXhV0cLsbg8DmUNvXgmS8qkVvdLXzOJul7tgVDX37WgFsc1goret++fWBsj0EEEvccOIOS0no5lfx739mKrMx4nvDigvAv6iIMCncGzf57cX8NPiloEX7mQfQNDtvcuqLJLUerjVi3fh0LtJ1pbO7CduGbPnqyDLfftAYPfGszAgP94MG1ql0G/iVdAJLgL4pb8dCLp/HKkXpUtxnROzBkl6Fvv4ncHB2IiYsHY3+GxI2Z/NO/Ef7pO779R+w7VMQuDxeCLWgnpndgGC2GATy3txoHStvF34M2c2eMhUm4OUqaejHiHo+VK1fi8OHDYOxPf78Ju/cWoLyiEddftRI//IcrZUsvnuji3LAF7aSQjfRhXjP+aVsBPhD/1ncO2F2cFbr7hnCstg8bNqwHM7NU17bhz3/9GHc9+LgQ7EK2pp0cvr06GVRhrqNnEK8eq8O7J5rQ0jOAwaGZvQjlpJXyLnx/dRKYmcdkGsJeEUSsrGrGjdeuwsMPXYHQYH94cy1qp4MtaCeCsiZOVXfhP94qxksH6tDQNfPiTJiEH/RMfQ/cvX2xdOlSMI5BTV0b/vSXj/DzR7ejo6sXbEw7HyzQTgIVzn/tWD1+' +
            '+34pjlR0yAkoIw50xXUZTThe289uDgfD388byUlRaOsy4ZP9lRgc1DYXnrEt7OJwcCivubnbiOf31WJXYQvaRCBwaMTxTKH+L90c31k+G4zjkDknHmvXLsFftufheF4TDq6tx3235CAq3B9enmyfOTr8CzkwJM4nqzvxi3fO4u0TjbK4kSOKM0EWfn6dAd6+/liwIAfMzLNgfjK+e/9WHC9sxUd7KlHf0os3PyrBf/7xAE4XNWPQxFXyHB0WaAfmw9NN+O8PynCkvAM9Mq8ZDk1Xnwm59eTm2ABn5tXn/lGK21ivFR37vXwkJ0Z87fWPdvzbmK/TMnuRlBCBW29Yg/DIKLz6fhEGTKOTlgy9Juw/Xo9f/fkwPvyiHIxjwy4OB0MYzegTYrztUC12CKu5rsMoc42dAXJzHKjsxj2L0uGskACvW5uN4L98aPG1/xPLq2ta5POn//gdPPCDp1BV0yqfkzg/+rs3Lb5O4nzZ9Y/CHlC2xqKcZCxbPh8vv1OClvYLO+T0i/OroLQVf3jhBOqbe/HNa7OEr9oLs2aBcTDYgnYgyH3R0NWH//moTFaeq2l3HnEmKA/7VFU3/AICkJU1F87GY7/45gUCrEYR57z8Kim49CDxJRFWLOXkxEj5XuV1eq5AfytCbmsWzEvG3XdeLizlRuw5WmsxF9okbqbVdd147o08PPaXo6htMKC/nwOIjgYLtINA4lzd2ofH3i+TnbTbxFB02EH9zeNB2RyFjYNYv965sjlInE8L8SUBpg7c5gSH+Ml/O7v7zi8zF+GxIMt67rKHYQ+yMhPwwD1bYDC64dWdxdJaHgs6v1qFdf3WJ2fxyz8fRFF5K4z9XMLUkWAXhwNA4lxYb8CL+2uxv6QdfSbntWSopOn+8m7cPj8LzsSvhGuCUAuwVtjLeo6ODMbVW5ciLS0Zv336GLoMAxO+h6zrHmEM7D1Wh17jEL5/1xIsyIqEjxc3BHAE2IKeYciKOV7ZgT9/VolPC5udWpyJATF0PlbZhaCgQCEUaXAWSJinK87kYyaXhxIkvF/ln7YHqbOjsXH9UrzxcRkKy9on9V6ynI/lNeKpbbk4Lv41cYaHQ8AW9AwyLKyXg+JCenZPDU5UdQgfrmtM9aJsjjMtJmzcuBFlZWXQC4pfWv2c3Bv3f7lMncUxd9kPoSVLF6Xi4e9ei4KyLny0t3JKjWYHBsXo53id/HdInItrlsXDw50jhzMJC/QMQbMA9xW34a97qpFb2wWTi4gzQW6Og2UG3JiVDb1hbjErgUPzLA56rpVIp8+' +
            'OwV23bYSbZwD+9tYh9Iob5FSh3OijZEGL83Hk3Ag2rEiEmxuL9EzBLo4ZgILqXxS14andVcitcS1xJijd7nBFB0JDgpGYmAi9oljPSjBRye6wNrhoDcFBfli/Nhvzc+bIoGBrhxHThdwbuYVN+PPfc/H5oRquiDeDsEDbGTrXdxe14ukvqpBX1+1UaXSToVNYcWfbh7Bp00boFcV6tiVz58TjumvW4cO91cKH3KTZZCYTpUwWteDPL53EZwdYpGcKFmg7IsW5uBV/EeKcL8R5yEXFmTAKP+aBUgOy5i+AK3Dr3f+Lnz5ywwUzDNUWsjnjvaYVC+Yl4bsPXIG65kG8vatU+o61hPzYeeJ8ffLlXHx2sAYjTpj26eywD9pOkDjvET7nZ4XPOc/FxZmgGtH7RQD0nhVpCA8PR1tbG5wZyvAgkX7lhX88754gAaa6y5Ywt54pD/rCIOH08qITE8JxC03ljorCU08cgaF3ELaARPpUcQue3nZKPt+wMoF7HtoRFmg7QAHBg6XteH5fNU4Jn7Ori7NCZ+8QyjuHsXr1Srz33k44CyTEllBEOjh4dNLKeNYxBQTVr9Pf6iDhdCxrdyGQC+alYPny+dj2Xikqa7thS0ikc88049nXTsuA4dpl8fD0YJG2ByzQNoZ8d8cqOuUklOPVnS7rc7YE5XTvL+3GsrnzACcS6PHyoa3Nl7YkwFq5O6KjQnDf3ZfhYG4z9hyxj+uBfNLH8pvg5ZUPH293rFgQK24UnN1ha1igbQhZzjVtRtlp+3B5u8tla0zEaMfvTlxxSTiCgoLQ3W1bS08PRIQH4d/++UYYBtzxyntFMA7Yb2o2ZXccPFEvBNoDvl4eWJgdiVlcYcmm8DjFRpDlTF223z3VhM/OtLjMJJTJQH73lp5B9MwKEG6OVWCmB3VHuWbrUmxcvwDb3y1CpxVTubWG8qR3H6rB9p1FaG6ffkofMz4s0DaAhKnbOCS7bj+3t1rmBeuVvoFh5DcPIXvefDDTIzQ0QLg2LseLO4pQcHbmgq6ULfLep2X4YHcFevpsE5xkRmGBtgFDIyM4XtWJlw/Vok/nPeBGC0H1Ijw8DL6+vmCmRkCAD379H99EbXM/3v2sTPqEZ5K+/iG8/mEx9h6tm/F9cWVYoG3AmYZePLOnCrU8BJQdv2s7+tHv7o/ly5eBmTy+Pl744UNXYu7cFPzh+ePo6OqHI1Bc3oFtwtVCvQ4Z28ACrSFU/KiosQfPCnEuqDOA8/q/8kMXdwALFi4CMzkopW7l8nTccuN6PL09D5V1jhNoHRY33+' +
            'N5DXjl/SLkFjY7Zf1yR4ezODSCxLleWIrvnmzE3pI2DNohKPgvV2Zgx4kGFDX0WHxtbmzg+ef/+noh6jq/srx+dVMW4kN8Lb72wreX4O5nTkArOnpNyK/vQ86cSHh4uGNoiDt3WEtQoB/+9Z9vwa4DtfjsYLXD9aU0ihgDBQ2jwn0R4OeFlIRg8RtzZodWsAWtEcaBEew72443jzfYxe9855pEXL80FoG+X7/HkjifEaL9+GcV8hEf5nPB6yTOR8o7z7/+3c2zhViPrkPiTMu0ZEAIcnV7P0yeAcLNsRyMdfj7e+PX/34HhuGNZ1/PR5/RMbuddPUMCL94OXYfroGhd8Dhmxs7EyzQGkBDO6pK98K+GlkkyNaQOAf5eKCu4+u+SEWcPy1swVHhI6THv7x+5gIRXpEaev41etBzhRWpIXKZltAF22oYRGnHLCxevBjMxFDj17tv24g1a+bjDy+cRFuHY8czGlt6Zeusw6ca2dWhISzQ04QmoxQ1GPDC/moRFNS+XZI5iji/uL9GpvKZQy4PEmeDqrecuQiPBVnWdz1zEragXdy48hv7ERkVBWZ8aPIHNaK9567NePHNMygosW1FPK0oruiQIn2yoIkLK2kEC/Q0IEuhtq1fTkah6dz2mMVNYkvibBijuSf5ow1TbPypWNa2oF+4fSrbxA3MJwjLli0FMzZBgb747X/djdMlXXj70zKnqd1CQcMDJ+rx+SFhrDQauESpBnCQcBrIwvRC0N4+0Wi3ySiWAoITQZbx47sqzgcCv3J5jAYJ1a/ZCpnN0W1Ceacbli5dimPHjoP5On6+3vjpIzciIjIc//Xk5zD0ONdEkJ7e0dKnCTFBuG5Luvg+LDHTgY/eFCHboFhYCduP1NnF7zwdyDL+066vAn/mVjI9V0ScoEChgqbZHH2DyGscwNXJsWC+jqenO668fAmuuWoVfv77Q8Kva3uXmS1oaO7FO5+eRXJ8INYsjQczdVigpwCl1JU29eK1ow042zR5i9aeUNDQkoVsLtKKiJtncWiZckdF/CvajHCfG4RFixYhNzcXzFdQSt0PHrwGr+w8iyOn6uHMnC5qwSf7KxEV7of05BAuqjRF2Ac9BWRjTeFz3lXQ7NDlQ5WMjrdE4HA81C4QJYvjqwyPEGgFxY2aDQOoMJCbYwmYC/nDb+9BU4dJFkLqH3DuXHHaf6rVceBEneadXvQEC/QUqO0w4s3j9ehx4ItInW43EbYMDprTIXyq+Q0DiI3noa+ah+7dgqysNPzvsyccZir3dGlpN+' +
            'L9z8tR3WAAMzVYoCcBBbqaugbxUX6LdHE4KmpxniijwzyAaGtoEk9ZqxFe/iHIyeEKd0RWZjy+/+CVeGr7aVTUdsGVoJ6G739Whloh0pwfPXnYBz0JqDJbcWM3Xj1a77CuDRJnmmG4oqMf1y+5MBhnPqWbMA8gUh60OkiodV40XaMt0s3hLtwcy5CXlw+989h/3Y2jBR349ECVy6WmkXtj+3tFWDA3EpERfnB3cwdjPSzQVkLXTbWw/F4/1oCWbvsXSrfEr98v+dpsQpqosuuM5dZKlqxkSrlTLydXx+Oq123h+mjvMaGwaRCbExKgd37zH3cgKiYS//kfnzrsVO7pQq6O1z8oQVJcEAcMJwkLtJX0CkvgeFUHDpS2w1GwlBM92TxpSwJsa380HcvS5j5clR4q/K5zceZMEfTITdetxq03rsVPfncAdY2OnQ00XfYdq8OGFYmIjQpAgJ8nGOtgH7SVKL0Fe508uu4I0DTgpu5+VPe4YdkyfdaIDg72x48evg7b3juLQ7kNcHV6jSa8/G4hahpcy8dua1igJ0AGBoVL4+OCZofPeXYmOvpMKGgyISEpGXrkT///t9HYNoSX3jmDQZM+bvpF5eRnr0GLcMvxLHDrYIGeAIo8Nwsf7emabofOeXY2evqHcVa4OQKCQ5GRkQE98ZN/uh6LFmTgN08fQXuna6TUWcPQ0AheFjeksqp2WWSMmRgW6HGgk4hyUvu7jHhwUwq+sz4JYf5eYKbPsHRzDKC210NXxZM2rs3GQ/dtweN/z0VFjf6G+1SW9IMvKlDPxZSsggV6HOiOX3C2FY8+fghvvnEaWcFe+PVNWbhtBU+y0IL23iEUNJuQnDIbeuHf/+VWvLe7Brv2V0Gv0OSV0qpOcX2xQE8EC/QY0N2dZkDt+LgE+SUteP+zcvz5+RPY93kZNiQH4lc3zsUl2ZFgpo6h34Tixj4EhoYhNTUVrs6f/vt+wMMPf9l+SgbN9Aq5dajiXVV9N9eNngAW6DEwmUaEr6wDuw/VyoBGDwW1hDX9+s5iPPHscTQI0b5pQRR+dlWGpvUq9ITi5mg0eskSpK7MA/duwaWbF+O3Tx5BU6tzVqnTks8P16CkokNcZ5wVNR6cB22BUeu5G+9+WgZD71f1eOlu39ndjxOFTWhs7cWcvEasWZGE+9ckYU1aGD7Ib55SvWY9095rkm6O5WlpcFVmJ0Xhhw9egb++WoC8klYwkHWud4rRaHpSCNJSQuDuxpNXLMEWtAVMwvdcVt2FvUfrLL4+PHwONcL9ceBEA/7+' +
            'Rh5e3p6LEJMJj1yahgfWJyM2xAeMdXSJoX5hQy+ChZsjMTEJrsgjP7weucXdsh0UD+m/Ys+xOpTXdHKX93FggTaDMjeqhW/sg93lF1jPljAKH2q5iMTvO1qL57fnYceOfKT7u+M/r5uLW5bHwceDD+9EjLo5BtEy6IXly13PzfGP370SS5fMwe+fP4Yug3N1R7E11H3lwy8qhLHTw2l3Y8AuDjPIOq6uM8gW8tZC/uniijbh9uhBeXUnFufEYPWSeKxKm4tPClrxQV4zmLFpFxdqfvMQFqe7Vj70lk2LcPcdG/HcjhLU1HPJTUvsPlKDa7akIzk+CG4e7OYwh008FXQTJ9fFJ/ur0D3JXnD03k4R8Dpd3IJ3xVD2xW2nUJLbgCuzwvCTK9KxICEIjGW6KABb34vQ8AhEuUjXb38/H/zD/Zfh4OkOfLy3Eoxl6Drbfagajc09nBdtARZoFXSCNDT14ON9lZgqZIFT9a4TBY147f0i/H3bafj29uN7G5LwvYtnIz3KH8yFUBnXJjH8bzV5IycnB67Az398EwKCw7Dt7UJ542bGZqdwc9Q1GcDu+a/DLo4vUSzgfcfrNOloQW2x6oXYt3caUVnbhcXZ0di0LgU/viwNe0vb8UlhCxq6+MJVaBOWVGHLEJJSnL82x313XYxLL1mCR584hrNVnWDGh/KiD59uQlpyKCJC/cDVSL+CBVrFgIgm7zqg7Qwv6s1WVdeNVmFV55e0YvmCGGwUQr06PRM7xUn5eVEbegZcsw7wZKDO6KfrejEvNQLh4eFoa2uDM7J0USoeuvcyvP1pJY7mNYKxDgrKb1qVKAWa+Qp2cXzJ8PAICoSAVtmo5RDNHCut6sB7n5XhT88ew9H9lbgyMwz/df0crEkPg94ZEq6hZjGCMXmFOLWb4+GHrkJpbT/e2lUmJzsx1kHZUAUlbRgcZGNFDQu0gFxfnYZ+fLKvSgqFLaHUPZqR+M6uUrzxzhm0V3fiupxI/MOmFGTHBUDPtIlj03XOD/EJzlnr5IcPXYHY+Ghse/eMyzR+tRdU92bP0RpxHQ5ysFAFuzgE50R0gvxgnx2wTwEbCiTWNRqE26MPRcIfvWR+FJYtjsM9qxJwss6APcVtqNVRGUqFjl4TzraZsDI6Gv7+/ujtddzGvOZcddkS3HrTOrz4dinyz7bppsazlhw6UY82EbOJDPNlP/SXsAWN0ZmDJwqaxclhX1Gkhpql1cLt8XkZXnz1NI4fqMSSCF9Z1vSaRdGIDNRXaVOqt13d3g/PoEhkZs6Bs5AQF47vCL/zodPt2HesXk5gYiZPlwgUHxAiTal3bEWPwgKN0RPj7U9KMVNQs1CyunZ8fBYvv5GH6sJGbEwOxnc3JWPjnHAE+uhnoFMrgqktJl8h0JlwFh5+' +
            '6EoMzfIRbqsyWauFtWXqUK3o3j6+wSnoXqBpqnF9YzdOFbVgpiHL4aCwIF7bWYw33y5AR2U7rhX+6e9vno1FicHwcHf9cR91GC9rH0JMTAx8fBy/psm3774YK1Zkyd6CFXXdNo9huDpFpW1oaO7BCMdXJboXaLpbU9GWfgdKdaNylJ8drMZ2EUT86MMSuLX34valMXhoYwoyolw7Dcko3D7Vbf3wCY7EnDmOPfV7/UVZuPeblwirrxq5hc0Y4HTJaWMUx/DzQ9XCWBngkQhYoKW/cOfn5XA06OSsrjeIi78cf38jH4f3lCN6ZBh3i0DiPWsSkRzuC1dETrcXbo7WYX9kZWXBUfHy9sSD912GwvIe7DpQI+uxMNpAM3mN8mbHCq3rLA7Kfa6qM8gcTEdlUFiUxRUdqG3qQWFZG5Zkx2DhwhikC5HeV96JvWdpootrZQxQBktZ5zByYqLh6ekJk8nxxO+Bb21BSFg4XvzbaTS393FQS0Oo00qtME6iw/3h7g5do2uBppzkz8RwinIwHR1yxZw60yJnJRaWtmLx/BjcsDoJK1ND8FF+K3JrO4V7wDUcd73CeqoSbo4Vc6Jlx+/CwsKvrRMaGorAwEAp4FFRkUhNTUN4eAgy02Oxfk2WcDcMo629G41Nnejp1TY755orlmHr5iXY9n4pSso7eEKKxlCvws8OVyN9dihCg3x0nXKnW4Emg6fPOIzPD1TDmaB6IYdPNchC5wUlzdiwOhnfXhuP0pYw7DjZKP7tdfpAlXRztBrRkRaO7OxslJeXIy0tVWZ2BAYGieChtxRoDw8PuLnNQkhICAICAuDh6Y2AoHAsmJciYgqD4qbWL2++hp4+NDR1CdEexJniOhw9UYau7qm1ncqcE4e7btuAM5W9OHq68cuhOKM1n4nr8s7rsoVAe4tn+lVoHQv0ObS09aFSWKTOCFXMa2mvQ1lVFxbPi8Sm1Sn44SWzUdhowEuH62XxIWemu38I3UMe2LBhPaKjoxAZGYmkpET4+flJq9nLy0uI76g4zhImlpubmxT24OAgYXnFYOTcqFXr7eUp+96RIBuFQJeWNaKqphnd3UYcOlqCvYeK0dlp/YSYu27biIERH3xxtFQWnGdsA7keG1v6EBMZAB0kL42JbgWaJolQb0GTk7fbqW/uQXNbL4rKOrB8YaywqBPxk8vTcLq+B+/lNqLDiYJX1JcuKcwXy8XQNjs+EPPjApAkHvHxcSAryt3dTQqxAlnQamgo7OUmlnleuF0PD3f4+' +
            'nrJ1kqxUSFYu2quCA4PYuniNFxx2RK0t/fgw12ncORkKQbGmWRy750XY152Kt75vBbFwrUxzPUxbQZdlwdP1CE1MRghwoqepVM/h24FWvqfD9pnaretIZdGWXWnFOu8ohasWhSLi1YlYF5MGg5XdGJnXjMGHNjP7ilMpEQhzGsywrE0JViItB9SInxl3jcJslqUpwMJNT0ILy8PrFyWgVXi0W3ox+IFqfh8bx7e/ygXpRUNXyvac/GG+bjx2tXYe6IdxwuaJ2yHxkyffcfrcfUl6VKg9YouBZqGwnSBUdDNlTAKtwAVYqKO5LlnmrFmaTwuF4/5sQH4rKQdR6jNvYP5p2k6++bsSKxMC5Opg+nR/tIy9bZxP0eyxulBhIp/KbCYmhKFi9fPxzvvH8few2dwtrRRjLRMiBZW9523rUdF/ehU5Jb2qfmvmclRKM5lOqfpjNWrl0OXAj00PCKL6Ltq7iq1tD+e34QK8R2pJvHmNSm4d00CLkoPxXunmlDS1Dvjw/MAHw+sSBHuhjlhyEkIEi6NIAyKYa2HcHPQw54oVnVCfDiSEiMQEhyArZcvxvN/342PPjuF+4Rrwz8gDO99WCFbonFGnX2g65NGhqlJIfDyZBeHbqDazHuP1cHVoQp9NHW8VohKTn4jNq5Mwj9dmoq82m5sO1KPVlmUBnYnJtgHW3MisX5OBOYnBkpBJk328ZzZpFfFop6THou5bnEIC/GXro2M9ATs+LRWpjf2D3KVOntyOLdBuuzCQvRZ4U53Ak161CfuzIdz66EXyOqrbTTgbEU7ViyIxZoVCfjJ1nTk1fXglaN1cnq1PfDxdJPW8qXzo0QgMASzI/yEn9kNbg524fn5ecsbV052ElJnx6Krx4Tevkp5Y2fsy5G8BtWsQv0ptP4EWgztyf9cWeuc6XVThQTnbGWn8E8bkFfSipULY7B6RRLStqbJGtTvC9fHgA0nXJBLY21GGG5eFo8FiQFSmL08HLfSgMwI8fKEm7u7TNV74PYFctk+MfLi3Gf7QROz9Hxj1J1Ak//5bGWHTLPTIzTD7nRRi/TBnypqxarFcdi6NA45IpC4v7QTu2wQOA3x88SmzAjcvCIOi5KCnWqoSjcSD183LJ0fA9+7PeAvvgt13mFr2j7Q+Vpd343UxBB4erAF7dIonbtPFDRB71Bp0yM0I1EEYU4WNmHtknjcsSwOCxIC8XFhC/KFVa0FZCVfnBWJW4Q4zxeBQGf1I9J+z00Px/23LhBC4SbrFnOBJPtwIr8FqxfHy+' +
            'OuN3Qm0Odkcfy8YufsGG0LWjuM2HukVja0nUcZH2tT8EMRSMyt7MJrJxrRNI3eep7C+lwn3Bq3roxDdmwg3J38+qKJNBmzw3DvLQtASTDvfFrKdTjswImCRlmLxt/XU3eBQl0JtJyNJP5fIoJlzIU0NPXKBwUUl86LxpqVCfjpVRk4WdWJ5/bXTDrbgyaZLEsJxoObUjBXiLOrNBug75GRHIoHbluAxpZeWRfFGYptOTNFZW2yqqMe0dWYYUSoTKewCHkW2NgUl7fjtQ+K8cy2Uzi+rwLLY/zx82vm4JblcVZvgyzN9KgAfH9LKrLiglyuEwxNbEwXIv2P9yzDnJQw+X0Z22HoNaG9q1+XJV11JdBk6dDkDWZ8qInuyYJmvPzOGTzz95NoLmrGZXPC8G9b02WK3EQEeLvjgY1JWJgQ5PRujbGgwdii7Ajcf1sOAvz11dx3JqAJKyYdjlR0JdCDpmHkl7SCsQ4aadDU5r+/VYi/CqHur+/EbUtj8IjwUS9OCrb4Hsp1vm5xHJYkh8hSoK4M1QhZsTAWN16eAR9vXZdWtzmni1vQP6i/9EZdCbRRBAhpCM9MDgokfn6wGi+8WYC/vZQLr24jHlifjO+IR3LEV623yJWxNDkY1y+LQbCvPgQrLMQHN1+RieULo+GhwywDe0GTrKh+u968HLq67VMJw7KaTjBTo66pRz4oj3xpTjRWLU3AI5en42hZB9442Sir0t29NhnxYT4zPm3bXniL75maEIJv37wABcVt0lfKaE9FbTeGh/UXKNSNQNOdd0C4ONo6+AKaLuQPrGsyoLy6C0vmRWGRGOZnXpkhp4xniqCij4e+Gsl5CrdOVlo4Llufgjc/OqvbSVC2pLWj78uURn1N+dbNmIwyOLoMg5wSpRH9A8OyYt6rO4uxfUcBDDUduGpxDIKEa8NDh1kNgQGe+NaN8xAfG6jb4vK2hPoUdvUM6M7FoRuBpg7ejc09YLSD0p7kzEwh1NT+aVgEcfTi2jDH28sDkeF+2LImmQOGNqK5tU93XWx0I9BkOTtr/0FHhozFiDBfbN2QAl8vfQuTj/j+N2+dg5gIP7aibQBNotJbqp1uBJpS7Mh3ymiLt5c71i5LQJCfN3x8dC7QwnKOElb0GhE8pePCaEt5TZfsK6kndCPQVEqzqdX67s2MdVB9hI0rE8GMQtXvLl2bJKveMdpS12gQAVi2oF0OCiyYhAXd3GoEox0kRikJQZiXHo5gHTf2VENW9Py5kZid4HpT3Gcaqn1CzXz1FCjUhUCTO/DcyOiEC0Y7fLzdZRlIWTOZJ2mch6r40XHRu8tHayjVzsF6Htsc3VxV58T/urlIkqb4CgHauCoRfjycvwAv4X/esCIBvt58XLSEWo+' +
            'd4ywO14OGRIPCB02pdow2UAW36Ah/zE4MlkLNfAUVlk9JDEG0CBhypTvtoOuXgv2jk1X0gU4E+hz6uY+cpnh6uiMrLQwjOrNorIWOS3Z6mDxOjHYY+4egp1NOFwJNswi5h5y2UBrZ/MxI9j2PgY+3G+aJ48PpdtrSJwT6nI4GwvoQaHHL7eX+cZri5emGnMwImWbHfB06LnR8vNiC1pS+fpOMJ+kF3figuYuKtpDwpAk/q4erVuSfJjSTMDUpRN7IGO0wipGwntxqurGgDT0s0FoSHOjFwcEJoFKkdJzceNq3Zhj7h3XV+ko3As0pdtoSFe6vyxZEk4H8pRFhfnD3YIHWCuMAT1RxOeiO28dBQk0JDfZhgZ6AkaFz4jj5ytZYjDYMsEC7HvSDch1obQnw88QQ55WPyyxxdQX5e8KdXRya0S+nerOLw/XgdF1NodKaerpQpgLNKJS1oVmfNYMmnOnprNOHQM8atWYY7XCjQkCsz+NCtUooy4UNaO2gtldsQbsg7uwH1JRhqlrDwjMhwyMjumvTZEtkuQb2QbsWpCOcr6stA8IXyF1DxmdwcHi0xAALtGa408hNR6edTsqNzpL+QEY7enpNbEBPwNDwaHrnMJvQmuHn66krw0A39aC9vNiC1pL2biNb0BPg5jYLHZ0DGBnhbBetIIHW08Qf3VjQ3GlZW6jDso8Pj0rGg6Z5N7f3YniILWitoBonegon6caCZoHWlq6eQeGH1lcDz8lCKWHdhkFZTZHRBn92cbge9IP6cd0ITaEejxU1XWDGpr65Bya2njVFujh01ARBFwJNP6gfl8XUFLIOC8+28QzNMaB0sLziFpnJwWgHzWCdpaPwtG5cHIHcN09TyL1BAsTTvS0zIEYYx043yqnJjHb4sQ/a9aCob4C/FxjtIBcHWdDD3PLKIjTCKBDHx2RiC1pLqMStnpKHdOPi8PZ2hztPVtEMEubG1j6UVXVyTQ4zaHRRXt2JJnF8+AamHXT9esoWa+zicClIP8iKDmIrWlOM/SZ8fqiGsznMoMamuw/XwDjAJW61JDhAf25K/ZiU4qYbEeoLRjv6B4ax/3gtd0w3g+qUHDxRj/5+Pi5aEhHqh9F581wsyaUgn5W3lweiIligtYQChBU13SJY2Cp8rmxFE3TTyi9tRWVdt5zqzWhHZJivcHHoa3KUbixoHy93JMYGgdGWXuMg3v6kFFwRSOEc3hXHg7vIa098TKCccMYTVVwQCi5Ql2VGW8j/fLygCTX1Bl11W7YEtVUrqezAsfxG9svbgNTEEN3NCNaNQHsIgU6KDQSjLRSAbWk34tUPSqCvXhdfh779azuLxfHo58wWG5AUHyiuY30V6NJVwX7qsMxoD2UtfHqgWvqj9eqLphmDDc09OHyygYOmNiIq3E93qbK6+baUCx0S6CUtaUZbyFqsazTgudfyZJ1oPWIQ3/v51/NRI44DW8/a4yks59Agb+ioDIdEV2rl6emO8FAfMNpDPteP91Ui/2yr7upzULbGmbI2fLi3kn3PNiI81E9ev3pDNwJNgV9PTzekJXKg0FZ09wzir6/moaq+WzciPTR0DjUN3Xjm1dPy+' +
            'zO2YXZCEDyo3ZXO+vjoyoIO8PVEdno4GNtAokwFgt4QAcMeoz7EqqtnAK+/X4yjpxq5sp8NyUgJhZ+Pp+46pOtKoKkv4cKsKDC2wygCZNvfL8KhE/Uun3ZHruZDJ+uwTXxfIwcGbcq8jAh467CvqK4Emjp7J8fzZBVbYxBD/cf/dhInC5vktGdXhLqknChoxhMvnZLfl7EtaUkh7IN2dWQmR5APArlokk2hCm4llZ34/XPHke+CNaNpZFBQ0iq+3zE5MYUr1tmWQH9PhIX66s69Qegu54y6e8/PjABjW8gfe0T4o//8Ui5KKjpcRqQpY4PqYP/trULx/RrY72wHMmeH6yw0+BW6E2hqOrlqUSwY22MyjeCLI7V44Y18KdLO7pMmS7ngbAteeqdQTsyh78fYngVzIxEYQKNe/cm07jqpegs/Fv3gjH2gmYU7d1fI5qn33TIfc0Q0noJrXk4W8KHJJ7nC50wBUBLnzu5+MPZhaU6UdEvq0cWhO4GmqaLx0QEyIsyTCuxDr9GEj/ZWoLd3EPfcPB8JsYGICPGFjxN0WqcgJ03dPlHQhFeFOO85WgdDLwcF7YW3t4cskjSaA60/dCfQNEry9/XC7MQgFJV1gLEPVK/jiyM1aGjrw61b52DRvGhpTbuLC8/NQefvkjg3NBuw92gt3t5VhlMi4DkwwDd1e5ISH/RlUJ8FWhfQz+zr64FVC+NYoO3MoAio5Ze0oK6xGzdcNgeXrUvB3NQweAm3kyO5PKjw0YhwL1PX8n3Ha/HWJ6WoaTCAsT8rF8bCz09/E1QU9GdBYzRQuHpJPJ5/swCMnRH+546uAbz8zhmUlHfgqktSkTMnAunJoTIjYibdHuQvp1x5Sp0jcaa+godONrBLYwZZuzROXq96RZcCTcNqcnEE+HvqtvraTEMuj73HanGqqBlbN6Ri85pkxEb5S7cHpeTZszC7SdwYqIplXWMPisrbcfBkPT7eW4lm4Y5hZg66PlN07H8mdCnQox2+vbEoKwr7jtWBmTmowNDrHxZj/4k6bFyZKFMgE0UQMT05TA5ryT/t5al9NqhJWMvDw2TQn0N1fTcq67pw6kwLPtlXpatiT45MzpxI+PuR9cwCrTuCAr2w+aIkFmgHgIJxtcLHS26PA8frsFKIdHZ6BOKi/ZEUF4T46EB5jVIs0Wsa031pkgnlYiv1q6mxa0NzLwpLW3E4twHVYh9YmB2HDSsSEBSgz/Q6Bd0KNF3olElAXYJNQxyZdwRIPMtruuQjONAbmWlhyMmIQEpCEEKDfBAd6S8b/442XnDHsIjk0XsUS5tGRtRQdEQsV6ZfUycdkzCVuw2DaGzpFY8+tHb0oUJ8Rv7ZFhko7jIMgHEsqO7G8oUxuutBaI5uvz1d0NER/mIoHYwzZe1gHAsSzSPCqqUHBYkod5riBinxwYiNDEBggKcM6NGFTC4QuuFSvW8KQlJ+' +
            'e5/wcVNK3JAQZypm1Cj8ydW1Qvxru2VGBjV4ZRwXqv9M16feOqiYo+vbE134l62fzQLt4NBEl2IRvKMHQRYz1QYOEVZ2gBgC+wkry9PLXS6nWYomEuiBISnMnULojeL9XM7IuaCgMf3GevY/E7oWaF9xYV+0NF6WxmTfo/NAIkyiTQ80g3ExqP8gBYwDde5/JnTdQZXS7RKiA8RwKhgMwzgGaUlhMjjsrnf/BnQu0ISvD7k5UsAwjGNw9cWpup6cokb3Ah3g5yHTefQeLWYYR4DcjquF29HXCQpp2QPdC7SbmxtiowIwfw43k2WYmWZhdqR0OzpqAS17o3uBpiBxgJ8nrrw4DQzDzCzXb8n4sjg/Q+heoOk+HeDnhdWLYhEe4gOGYWaGiFBfLM6OtsnUfmeFj4RglhhOhYf6YcuaFDAMMzOsEb7nsBBv6D33WQ0LNEZPh+BAL1yzJU02lWUYxr54e7tjw8pEBAX66D73WQ2r0ZfQtOGM5FBkpXGwkGHsDdUET0sKlnMTmK9ggVZBwYmrNnGwkGHsDZVciIsOYOeGGSzQKqiyXU5mhAxWMAxjH8JDfTAvIwKhwRykN4cFWgX5vmiK6TWb2YpmGHtx1cVpSIxl69kSLNBmkPW8blmCrEfMMIxtoetsw/IkRIf7y1rezIWwQJvhJoKFSfFBuGR1EhiGsS10naXEB3JwcAxYoM2gGabUYunS9SkI9OcZTQxjKwL9RwuVxcYEsPU8BizQFqCUu7SkEJmXyTCMbVi3PAGzE4NFcJ5laCz4yFjATRwV6n139SWp7ItmGBtAo1NKaU2MCZK9JBnLsECPgYfH6MSVSy5iXzTDaM3GlQlISw4Z7SPJjAkfnTGQvuiYQHmXD+MiSgyjGSFB3ti6MU2mtHJZ0fFhgR4Hd+GLTk8JkXmaDMNow6XrZiM9OVjGepjx4SM0DnRzj4vyx2VrUxAV7g+GYaZHVLifGJWmIiU+hFPrrIAFegJmzXKTvrLbr54LD08+oRhmqnh4zMJt4jpKF9eTmzsYK2CBngAKMEeKu/7mNUnITAkFwzBTIys1HFvWJiMm0p8zN6yEBdoK6FSiySs3XzFXtsdiGGZy0HVzxzVZSI4LBmM9LNBWEhTghZULY7FmSTwYhpkca5cmYOn8aPj7crfuycACbSWUDpSSEIzrL89AZBiXI2UYa6HA4C1XZSJJXD88pXtysEBPAgpyzE0Nwy1XZMLbi6McDDMRNI2bAuxz08LgwVkbk4YFehK4u7nJ5PqrL0nH/DkRYBhmfDJEYH3rhlTERHBgcCqwQE8BKkd69SVpcujGMIxlqN7GLVfORWJsIJipwQI9Bbw83XGRCBZesXG27EbMMMyFUI2Nretni+skDl7sDpwyLNBTgGYYUrL9JRelYNHcKDAMcyFzZofJwCBdJ+' +
            '5cb2PKsEBPg8XzInHdlnTERweAYZhRqPnrt26Yh6z0cDDTgwV6Gvj5eGLtigQh0hncfYVhBD7eHrj1ikysFi5AH3ZtTBsW6GkSF+mPTasSsWZZvEzDYxi94uY+CysWxuKKTamIifTjnGcNYIGeJnQSLsyKklZ05mwe0jH6JTkuCPfdMl+6NjilThtYoDWAyiauXhyLW67MRBz7oxkdEiL8zvfdkoPF2dEcFNQQFmiNIB80tce64dIMhARxBxZGP/j5ekq/84bliSIuw7U2tIQFWkNihT/60nUpUqh9vflEZVwfL0832V/wms3piIny5xZWGsMCrSHkj6Yp4DdeloGlOVHcMYJxaUiMczIjcP9tC5CVFsauDRvAAm0DlsyPwW1XZclkfYZxVZJiA/EP31yMeelcl8ZWsEDbABr2rVuegNuvmosErkPAuCARob74/l1LsGpRHDw8WEZsBR9ZG0FBw8uEP/q2KzMRHMiTWBjXgTI2bhZBwYsp1sJBQZvCAm1DqJfhFZtm49K1KQjw51ZZjPND5/EVG2bLbKWgAG8wtoUF2sZQD7brL5uDZcIvTRW+GMZZofOXzuOrLknD7MRg8FwU28PjExtDmR3Lc6IxMDhfPIZxLL8RJtMIGMaZUMT5nptzsCInhtPp7AQLtB1wdxdBw2XxGBkZwdDQCE6eaZb/MowzQG2rqKzut2/NwZolcSzOdoQF2k7QSb1hRRLOCV1+4qVcnCpuYZG2E9SRfSx/aXfPgHgMnn+eEPNV1k1to+Fr64/3Or1m6T3ODGVoLMiMxHduXyjO30QWZzvDAm1H3IQLetPqJPn3n4VIn2aRtgs/+NYSGahVowj2I7/ZjU/2VX25zAsPi3VXLoqVz//w/Am88WHJ+feQAKtff+Q3X+BwbsP51x77yQb8SCxzFZEmyzlHiPODdyzCxlUszjOByx3xcwI4OLSHuw9Vnxdp9knbn98JMT0kxFURYBLnn31vNV4XzxXRffn3VwmRPj7m8z3bb8MdP3xfCrL6b1eAfM5kOT/0DSHOK51HnGe5WI1TtqBnADqFNqxMkn88te0UThY2sUjbERJjgtwbCmRlf7yv8rz4ToZR10YPXAUSZ6pK953bF7BbY4ZhgZ4hyN2xYUUCPEQA8antp3DsdAMGWaTtAlnKZD0rrg3i0ccPXbCO2tc8ES///kqXsZ69Pd2xbEGMrK+xdikHBGcaFugZhE7+i5bECl/fLPzlFXccOFmHgYFhMLbDkvWsRhFm8icnxFxY27tOCDC9Xhczai27ktVMULuqtcvj8e1bFmDpvChxfnLe/kzDAj3DUArespwYeAnLhWrpfiZ808b+ITC2wZL1rMY8SKh2eVBQkHzXtA5BVjOhCPVEGSCODPXXXLEwBj+4azGy0sLlecnMPCzQDgClMi0SPr8f3usN08gIDh6vQ0/fEJwg3ulykAgrkBgT6kwO9euEEhwk1Fa3OsPDkaGYmr+' +
            'fB9YvS8D37l6CjOQQFmcHgn8JB4FGk2lJIfiPH6zGdVvmIDLUl+vrzjAksjdePue8RW2OOjhIfmhKsVt/23b5+J0Ua8euZEjnV0SYj+yn+a/fXcXi7ICwBe1gxEQE4CcPrkBslB9e+6BEDpU5w0MbxvM/f/XaIKzFmYODlKlBN5Cbt2bim9dlIcCPKy46Iny7dECohCNNDvjenaP+QB9un6UJ4/mf6TWyltXIgOAY4uvMqXXUjm1eRgQeFi6NB+9YyOLswPCV78BcfXEaoiJ88fT2PJwsaEIv+6VtRpewqu+5ab60oBXfMQUD1RNX1JjPGiSxjldlfTiieJO/OUD4m1cuisODty9CzlzuhOLo8ExCB4cq4NU39+C51/Ol5dfWaeTp4VPkp99bJcV2rAwOgnzHlqZyW1qPsjzU7g2aaagECR3N9UGBaOqCcvmG2Xjg1gWIDPNzyZ6ZrjaTkAXaCSBBJqF+8+OzeOW9YpTXdKJ/gFPxGOsgF1l6cjDuuCoLN2ydI1M6XRUWaAfHFQVaYdA0jCOnGvDXV/NlydJuwwAYZixoIlSAvxdWLIiR1egWZkXKmauuDAu0g+PKAk30Dwyjvbsfr7xbhNd2FqOxtRcMY463lzuiwv2wYWUivn/XYoQF++gihY4F2sFxdYFW88EX5XhGWNP5JVwRjxll1Gr2REp8ML59Sw6uEoFmPcEC7eDoSaDJL93c1ocXRABx554KNLawNa1nyNccFeaLtcvi8dA3FiMy3Nel/c2WYIF2cPQk0Ar0lSkz4ZlX84Q13coBRJ3h4UHpc95ITQyWufPrqbg+9AkLtIOjR4EmjEKUDT2DeOW9Iry9qwxVdV0YHuGcaVdG1tHw9UB0hL9Mn7v35hwEBXjCXcdV6FigHRy9CrTCgBDqM+Ud+NuOAuw7VouWdiMY18Pb2x3hwb5YPC8KD35jIeakhMkWVXqHBdrB0btAE6OW8znsOVKLv2w/jTzh9ujtM4FxDfz9PJGRHIoHbluAS4XlzLL8FSzQDg4L9FdQZseAaRjb3z2DV3eWyLoSRvZPOy1UQyMuOgA3XJqBb1yXDS8vN/h4cbUGNSzQDg4L9NehbA+q4Pb8mwUyNa+xuY8DiU4EZWfERvpjq7CW775hnpx8QgW1mK/DAu3gsECPDYky1fJ4cUchPtlXiabWPu7e4sCQCMdE+GHLuhQpzKHC5+zjpa+0ucnCAu3gsEBPTJ8Q5fYOI7a9W4SP9lagub0PPb3so3YUyMccLYR567rZwpVBwuwtZwYyE8MC7eCwQFsPCbXRaMJbn5TitQ+K0dxmhEG4Qjg9z/64f1k3g6ZnU4eTm6+YgwAh1FwLfHKwQDs4LNCTh3zUpMn7jtTiye25qG3ogaF3kP3UdoAEmIQ4MS4Q37wmG5cKdwZpjJ8vC/NUYIF2cFigpw4dOTp8p4ta8Le3CmT3EUrP6xNW9tAwH1at8HCnRq1eUoRXLYzFHddmY1F2pMy6YYt5erBAOzgs0NrQI4TZ2G/Cy++' +
            'cwZsfnUVNg/P13XNUEmMDccc1WbLFFqXOkc+Z0QYWaAeHBVpbaPo4NRgtqejAtveK8MHuCotNV5nxoaa0Wzek4s7rspGeEiIvPE+dFTKyByzQDg4LtO0gvzT5S08JF8gLbxbgi8M16OxmsR6LkEBvrFuegGs2p2HT6iT09JgQFMgNWm0JC7SDwwJtH/oHhzBLHOliYVnvFFb1pwerUFbVCb2TlhiCi9ckCWs5BXNTw2UANtDfS9ZpZmwPC7SDwwJtX+hom4aGMSgCXBRQ3HesDp8drMaJ/EY0tfXB1YkK98XS+TGyMP6KhTHw8/GEl3AJ6aF7iSPCAu3gsEDPLCMj50SAcVB2kSb3x4n8JuzaV4XTxS2orOuGs5McH4QFmRFYtyJRFsZXWkmRhcw28szDAu3gsEA7FvRrDAh3COVZjwyP4GxlB04UNiO/uA0lle2oFqLda3S8WYyUApdCYjw3CssWxGBeegSS4gJBpZbdxH+o+aprSYFrwALt4LBAOz5DQqh7RMCRzj5vTw/5d02jAeXVXSgub5d/Nzb3yFoh7cIKN5mGoTWUQREW7C2L3cdE+iMpNhCZqWHISg9HXFSATH2ji8OdhdipYIF2cFignRuaZk6CTK4SslTd3cnHPYLunkH5IDGniTOjedpDMlg5ODiCIbEOCf+I+PnppKb3UrEhyqSgWhbB4t8gf28EBIxOEKHi9nSmDIv3kHuCXDJurMRODwu0g8MCzTD6xdUEmkPNDMMwDgoLNMMwjIPCAs0wDOOgsEAzDMM4KCzQDMMwDgoLNMMwDMMwDMNMhlmcN8wwDOOYsIuDYRjGQWGBZhiGcVBYoBmGYRwUbiHM6J7m7gHsKWlDfk03Slt60WIYlMtjg30wNyYAazLCkJMYhBBu7srYGQ4SMrrFNDyCU1Vd2HakDg1dA2gSj+5+E3oHRsub+nm5I9zfC7GhPpgfF4iNmeFYlhoKhrEXbEEzuqSzz4Tihh68sL8GXxS3gqwUc1OFhLp3wIiaDiPONvagvKUPft4eSInwlf+ORV1dHV5//fVxP//GG29EQkICbMEnn3yCoKAgrFy5Es7Ac889hy1btkzqeBw+fBjd3d3yfRNte9WqVcjKyoIzMiWBbm7twoFDxTiVX42yyka0thrk8ujoYGTMjsG6NdmYn52I0GB/MIyjQTWna9uNeCe3EZ8XtU64Pgl3e69Jrpsa5YcblsQhOcId7mM0gq2pqcEf//jHcQWSxIgqY8bHx0NrSKBpu84i0CS2k93XQ4cOoba2dkKBfv755+XNShcCPTg4hMPHz+Ivz+9CTV0b6urb0dnVh55eo3w9IMAXkWGB2HvoDJYsnI3LNy/GutXOeWAY18XQP4TjlV1SoCcLWdzz4wMRE+ItXSBjQQL58ssvj/n6HXfcIQXm4Ycfht558sknwVjGaoFu7+' +
            'jB6YIqPP7Uh/hg10nZ8cIcg8EoHxXVLcgvrEVxSQMC/H2QkRorxNvHqs+hIQkNXdRM9SQ+c+YMCgsL5XCSYRQOlXXgYGk7hoYnH36h9+wqaEVimB/mCaHWkg0bNkjRVlNWVnb+7zfeeEM+SPjT0tLOL7/hhhvwu9/97mvbICtevY0f/ehH8v1qXnrpJekCsMQf/vAHad1autHQZ9BnffHFF3I0QOsqn6fw2GOPXXDt0T7T57355ptyP+gmtmfPHrmd3/72txfsh/r7EWRhj7cfCj/4wQ8m1AvzbSv74YhYJdDUFqiiqhnb39iP9z8+MeH6FHdsbeuW62ZmxOKu2zciPTVmwlb0NGyh4Zml5fPmzUNg4OQuCPrxWKAZc0qbelDa3IOpUlDXjVbDgPhLG4Gm8/Qb3/iGFClzPyyJD4maspwEUxFGBVpGFjkJGK376KOPStG55557zq9Dr9N1QAKmhkSbDBn1upPlwQcflC4E9T4RJNh0/f3sZz87v+yhhx7CT3/606/thwJd6z/+8Y+/ti1L33vXrl3S369eRsL/yCOPnL9hqVGOs/m2FZFXH2dHwSqBbm7txuf78vHSK3sxWf741AfIyIhHZGQwwkIs+6QNBgMKCgrkD2PpINHBox/00ksvvUCkza0NQv1euiObWwf0WV1dXRcsCw4OnrT4M85Lp3FIPqZKS+8gega0bWRL5zKdu+bnvvk5TkJIYqpej8RLWY+Wk8+VHup1vvWtbyE7O9uiAJmPWBXoeiPMBY8+j4KgZCHTtUPbpn+t2TatS9bwWEJI+0jXuqXjYM2xIEi0x0I5zpaWOyJWCfTBw8XYd6BYNuWcLNTM8/Mv8rAgO0kI9GyL65A40518rGEG3fEs+ezobjjekPDjjz8+PyRUePbZZyccijGuTb9pWD6m/P7BYZmiNx5kCJi7E9SQSJEYqaHzlYRuPEh4p3KuKmJL4kVWqsJY4kyQAJIxQ9eLWqDpmiORVpYpRpD5tmk98yDoeOJMqL8fHQ86jsq2zKFtTxQktIT57zLeMZhprBJo8j3nFVZjqhw5XioCim0ycDhV1CJr7v9SQ/4lS8sJEnk6QdQiTtDNgQM2+sHDzQ1eHm4wDk7e4CC8PNzhOYG7ji56tRDQcxIwJZuAhvnmAk2+WRIoNXS+TiTa1qKk/5G4qpeNB3027YPiZqTvQdeKedaFIs7q72xJoK2FtkUZGApaiqilG6eWx1lLrBLozs5etLUbMFWaW7rR2zsAraCTeCr+IroozC8ARn+E+nkgyMdTCPTUzslwf0/4eI4v0OZZHOoA31hQNoMtfaAUyKP4kHofyGgZD7qhKEFJJcBH2zD38SrCr942GT5TnQen+IqV40GCTcu0YLzfwNGwSqAHBoeEq2LqQ8KBQROGR6ZmrViCRFYZVtHwi/JOrUGxWBQfmgI9ZxeHfsiMDcTcmB40dU9NoBcmBiMm2LqsJAU6v0i0SejMR3D2QInj2OI8V0amWgifIsQzcYwcEauKJfn7e8t0uakSFOQHby/t6xhQSh7doZXgijXWB4kxnQTq97BVrS/mxvgjJykIblMoFUaejaWzRUAsdPLXAxkIZIWSoFF2gzUosRdbQNumDA5roP1WUuOscQVSYNFSRtZUoGuWMlMsLacMkulC7hNbHufpYJUFHREehNjoUHR192EqJMSFISTED9OBTmjyESk+LSUlz9yXZx4ANN8GvY8EWZ1WNJEfjnEtYkJ8ZW2N1Wlh2H+' +
            '2fVLv3Tg3AtlxQfD3nvwkXGXkR8JC5y4FwMjypOVk3WrpG6XPIJcGQYJK2RMkQMoyZdvWihLtN11b9K+5IURWufm2aZ2p+J8TExPlsVBviyBXi/nNRJkhaL7uWKME5Tibr084tQ96flYicjNiUVxah8m6lGbNAlYsSUdszNhFZpQUnfFSYChgoKTVqPMZlfUtpc+ZQ3dh+iHU4kzbovfZYsot45iQ/zg7PhB3rIxH38Awcmu6xj+vxTkc5uuJ5Ag/fOuiRCSH+8LDfdaYq5PIjJddQIKpnpBFwkHLfvGLX3wtGKb29dK5bmlKNC1Xfx6tQyNLtfjSOU83AHWWBW3bPB1vPOgzLF0nJIh0w6GsC4Wf//znX9suTaixNFrdvHnz+eWKhU4WuALdFG666aYL3qOkDNI+0XFToGwV9bGgbSv7rBxn9baV5epcbUfCqmp2NIvwpdf24l//82WZNjcZPD3d8fwT38VllyyCv5/3mOtNlJmhnvFkaV11EEFZbh6YUXxl6iGaMvPKmhlIjGtBxZCoUNL/fFSGbuOQTJ0bHD53PrBFtTY8xCPA2x0pkX64fWUCrlgQDYaxF1ZZ0GGhAbhcCOxAvwk/++UrmAx/+M09uGhF5rjiTJCgUmBgoumuY62rpM+ZT+NUQ0JNwxv1OiTm47lFGNfFXwgvCe7ipGDsKmzFkfIOFDcaZOlRIiGMXCFB2DIvAktTQhAe4AWGsSdWO9LIB33V1qVob+/B/z39gczKGMv2niWsjqT4cNxw1Ups3bJYCry10HTXqayr+I8mSr+j4Zh6mEjrkn+OA4X6JTLIGzctj8WVC6NkrY2hL+vMkPVMrgxfr4nznhnGFkyqYD9Vs6uuacEHn+bi6PEylFY0iuet6Ozqla9HRgQhMUFYG4tSsTgnWVrO6WmxmCmsyT1lGIZxVKbUUYWyOUpK61FV3YrG5k5ZwY4ICfGXlvbcOXFCqMOFW2PqqXnTQR2AIQuZc5wZhnFGXLLlFeVGKt0WplOli2EYZibhnoQMwzAOCkc+GIZhHBQWaIZhGAeFBZphGMZBYYFmGIZxUFigGYZhHJTJl+RiGBdjZGQEfX19GB4ehslkks8Jd3d3eHh4wMfHB15eXpg1axYYxp6wQDO6p62tDQcPHkZ+fh4qKirQ0tIql8fERCM9PR2rV6/GvHnZCAkJAcPYkynlQTe19WH3oWqcLmpBaWUHmttHZxLGRfljblo41i1PwKKsSIQEzcxMQoaxBqPRiL179+KJJ56S1vNYl4KbmxsSEuJx7bXXnG++' +
            'yjD2YHK1OEzD2He8Dk++lIvWjn50GQbQZzTJ5YSPtwcC/D0RFuyDOalhuHZzOi5elQSGcTRaWlpw5MhRvPTSy+jp6RFLzo1d/Et6NmYhICAADz30HSxatAiBgYFjbptK3/74xz/GeDzxxBNfaxqrFVT3nGog23MWLZVXoIYYSv1qKu1Lnz+Vrtv2gGYbm9eGd8R9ttrF0Sys5lPCYn5qWy5OFjRbPJmN/UPy0dJmRHW9AXWNBvj7emJ+RgT8/cZueUWdEp599tlxP59qNduqoSYVVKJqdlr+MEpRcKoDQr5LKmauFAWn8qbUfMBRT15Xp7+/H0VFxdi161PZ6GEiRs/1c3Ld99/fifDwCGRkpMPTc+xzmkoNULefsSBBMy8urxX02ePdQGyB0rVcgf7WshO31tC+me8fVbVUuq47ClYJ9ODgMMpruvDeZ2U4kd9szVukUNO6Oz4qQahwdaQlhYigi+UgC3U02bVrl+x+MBYkonRC2+IAUnsgsji0uFiU9vPjYe+Lh7kQqiFO1l55eTkmy5kzRTh9+hQiIsIRFRU15nr0G49XpIvOZ9oH9TmnLvKloG4iQYYMvYe2q27bRJa4sh3FklW3oFK2QV1PzHsh0rasMXzM20SZt41ToP1Xvgd9ntIlSTkW9L3N673fe++9568Jun6oobO66wx9P3ooy9XbsLQfyjbUqI8RfRfl/fS3sg16H3XDIT2g1y39fsr3U46p0uNUjZY6ZZVAN7f3Yd+xWuzcPfkT+o2PzmJ+ZiRCg70RGTZ2X0L6gcxbuatR2sOrvzidbOYntNJ1hSCLhw40vUd9EKl2tLId5WQmT4+yjrIN+sHMO4bPmzdvTIGl9clSpiEm1aUm6AenE0DtSbLU/2yi78Jox9mzZ1FScvZ8tsZkoPfk5eUjJydnXIGeDIqYWWokqxgmdM7R64pQWuolSAJEy5XzSL0OnZck8Obvm8jwUQwOS5+n3jc1yrpkeKnfpwir+bZo35Tt0PVGI0wSdeV40N/q5ebbUO+HchMbq9eicoxIG+g40d9KLXhqq0d/0zIS3rEEmvaDBHqsY0rLaT1L7ckmi1UCfTy/SQYEh4cnX1eJ3rPnaC3mpUeMK9CThQ4KCaF5w1d1wX46UHS3e/LJJy/wCa5YseK8y4S2QQeZHkeOHJGvU5cV2j79EPRDqaHWWJZOSuXzlO4syufRMJd+LLqw9uzZI5cpvRGVu7A134XRjubmFuGDtm4kaIn6+nohPtoN3+n8+NGPfjRmuzc6V5TzjYSFzjFaV4EEivrykfiQG43WMe++' +
            'TeJDVqJ5WzdLho/5vpl/HqG0nVPvG0ECR4YWvUZ9BNUiR9+RzmnzfaB1aX/VBgl9pvr8V4wnWk6NOtTXjno/aD26ZumaV6M+RrR/ltrfqb+Dsm3176EYfMoyGvXTcTM3LOl7kgVvN4EurezE2aoOTJWisnYRVDRCKybqX6heTsJL66rbZtGPRT8QCSYV86cDan5CU39DEuPHHnvsgu0r7dkt/bB0AdAPpjS0VX/eVL+Luhcjow1k2U1HYNvbO6Qfeyag82sqDSim2rSCPs9cnO3BWJ850b7QNTjd4KhyHZvrBhlgakPLXBtsgVUC3dZpRFvH1E/IptZe9BoHMRPQXWwqB5KE0R5tsEiULYkz49zQaGi8/piWbrwkCLaGjAUySNRYa+mRcWI+opwsSmNne2B+/C11JNcCdcNqBepgrgVWCfTIyDlMp2w0vX9kgrfT8EEZblnCvJcgYX6ijcVUxE95D52Q6gAJWeRaDF0sfRa5Y8gXydgWSpcLDAwSVnQnpgJNWKHZheNBN3dKpVOg84h+WyWzw1KKHRkSlkREq5u3EkBU4iMEudasga5NugZpVEnQ9UqpapOFvr8ld4qWKYd0jZI7Q/096fiPN5K1tD/0fvretM/0fjp2Tz311AXr0TZJoNWfRe4krbBKoCm3OcDPE12GqVnBlMXh4+U+4Xpqf5VyQJThComi+YlKWR/mwTbahvmyqaIENdT7ZR7N1go6oeiiNj8GjPbExsYgOjpqygKdnJwszrHxR1fkD1VbyMq5S+fUWMFwS+e4VqjPL/V+TTRKVFJgFQNJ2b+xgnATQeJsS5edEmw1/57m8Z2JoONC7yfLmPzwdBwI9c2F/OFkuFJMSv1Zb775JrTqg2KVQMdGBiBGPLoM7ZgKCbGBCPQfv2W9eVoSnQjKlxwrXYkOjK1OaPI3macIEZO5C1uDEsFXWnSpf2hrRwjM5MjIyEB1dQ1KS0snnclBswqzs+ciMjJyUu+j84iCZhQ8opv8ZNLb1GloU4UCWmT9qs8vJd1svBEh+etJcNQ3FRIr8zS26UCWPZ37WlzLJM5k2KhjRHR90fU8FeiYKWm45lY+Wc507MxTJWkf7Jpml54SinkZ4SipaMdkbww0C2vh3Agp0pOBvjjdxejOTwdnvPQ2NXTQrF13PH75y1/KH0ctzrRtrZPvLUXwafhYUFAAxjbExcUhNTVVTt8moZ4M9BtlZmYiNDQUk0UJRNOwmbZDE5gUlwad75ZS0EgcSKAnC21HnTaqCIY63ZS2PdFEHRqN0r6Zv0+' +
            'xKK3ZByWtlbZjaZ4ACahWbkMlDU/9GbR9Sxa0+TGyhPJ7kQ6Yz5NQBNv8s7TUCKsEelF2JBqae2S6XGv75LIxwkN9sWpxvLDC/TFZlIg1BU/M09uUH8IcSm8jf9BkBVrJiVS2rVw46s+gbdNzrWd/mX8X+nuiqcLM1PHz88OiRQsxODh4fqr3RENSb29vWdHutttukS6O8WYRkiCNZw0qmUN0zpELj9alZSQE5kKizlogg8WSS4KWqT+PnpNQqNNGKe2M/M1KGqiynPZjPDeH+hpUINci+cvVgTHzfaPrhyxvetA26POV723uulOn04117MY7purlJKQknGr/OPmQ6Zol61b9HtoPOkZKih/9a+lY0LqWltN2aZvqa5W+C/mgtXJxWF2Lo6K2Cx/tqcBjTx/FZPj1I+uwaVUSosLHzoGmOxD9cEr6iiUs5S3SSWMu0ubpdPQwTzGiZep0GfpstetC2Yal5ePlTyrfhU5c8/1Qf95E34Veo33mNDvbwsWSGEfHaoE2mUbQ0d2PNz8uwX8/c+zLzI4xNircGjS1+4bLM3DntfPg5ekuLI7xewOYJ4Wbowwb1HcySxa0ehvKfHvz7ZovN5+XP95yS/sx0Xcx/zxLAm3+XRSreiyridEOKpzE5UYZR2TS1ew6uwdwLK8RR083oqC0DdV1XWjrHM2RjgzzRUpCCFYtisXieVHInB02ruWsVyaywhn7Qq4O8sWSq4MmoFDRfoLcGr6+vtJd5u/vL4v3M4w9mVI9aEPvIMqqO1HbYJA+aUPfaPpdcIC3FOT0lBDERQfCz4dPaAWlyIoCuS20zqdmGMa1mJKCUsrcoqwo+WCsR3FjUGDIVrWAGYZxHaZkQTMMwzC2h7t6MwzDOCgs0AzDMA4KCzTDMIyDwgLNMAzjoPw/XXDB2aYNeAsAAAAASUVORK5CYII=',
        tabla: "data:image/png;base64,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"
    },
    {
        perfil: 'Moderado',
        descripcion: "El inversionista con este perfil está dispuesto a asumir riesgo de perdida del capital " +
            "\na cambio de la generación de ingresos corrientes y la apreciación de capital mediante la " +
            "\nreinversión de las ganancias de su portafolio.Esta estrategia es para inversionistas que tienen" +
            "\n un horizonte de inversión largo y buscan hacer crecer su portafolio mediante las ganancias de" +
            "\n capital y la reinversión de ingresos, para satisfacer necesidades futuras. ",
        retorno_result: "7,63738624480951 %",
        retorno_texto: "Para inversionistas de largo plazo que buscan crecimiento moderado en su \ninversión a un nivel medio - alto de riesgo, y que no requieren ingresos corrientes.",
        retorno_anual: "5,0%",
        retorno_mejor: "36,0%",
        retorno_peor: "-27,5%",
        grafico: "data:image/jpeg;base64,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" +
            "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" +
            "v9sbxbpXib4+eLNI8MzibwV8MLbRvg54H2KqQjwz8L9Ng8Jw3ECp8nlatqVhqeubkAWSTVJJQPnr9K8PsqnlPCeV068eXF42nPNcb3eKzKTxUlL+9TpzpUXfVezt0Phc/xaxma4qpF3pUpLDUeyp0F7NW8nJSkv8AEfL1fZnjhQAUAFABQB+hf/BPv/go18b/ANgL4nWPiXwPq13rfw41O+t18ffDDULqWTQfEOmmRFubmzgdxHp2vQwBjZ6jB5bFgIrjfGQU/OfEXw0yLxDyqphcfRhQzOlTl/Z+a04pYjDVbPljOSV6uHlL46cr6axs9/fyDiHG5DiY1KE3PDSkvb4aT/d1I3V2l9maW0lbzP8ARa/ZU/aq+D37Yvwe8O/Gf4MeI4Na8P6zCkWp6a7xprfhXXEjRr/w74isAzS2Gp2MjFcOPKuofLurV5YJUc/5r8W8JZzwXnWJyTO8NKhiaEm6VVJuhi6Db9nicNU2qUqi1utYu8JpSTR/QeV5phM3wlPGYOop05q0o/bpT+1TqR+zKP3NaptH0hXzJ6IUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHzf+1X+018P/wBk34O+Ifiz4+vEEdihsfDehRun9p+K/E1zFIdM0LS4C6vNNO6NNdSjEVjYQ3N9cvFbwSSL9bwTwdmnHGf4XI8rpvmqP2uLxMk/Y4HBwkvbYmvKzUYxTUYR1lUqyhTgpSkkfJ8acX5XwTkOKzvM6iUaa9nhMMmvbY3GTT9jhqMW05Sk05Te1OnGdSbUItn8LP7SX7SHxL/ak+KGtfFH4matLe6jqErw6RpMcsn9k+GdFSRjZ6Jo9sx2QWtshHmOFEl1OZLictI5x/pRwhwjk/BeS4fJcnoRp0qSUq9dxXt8ZiGl7TEYia1lOb2V7QjaEbJH+cPFvFmb8ZZziM5zevKpVqycaFBN+xwmHTfs8PQhtGEFu0k5yvOWrNT4b+OvAvjbwRc/s6/tAo118LdYubq68E+NVha68RfBHxjfLiLxH4fmAedvC2o3i23/AAmPh5Vlgu7RZb+0t11BXM/5r4weEuG44wU83ymnTocUYOj+7mrQhmdGnqsLidNa0Ypxw1VtNNqnNuHLy/pPhD4sYngjGwynNak6/DOMrfvYu855ZWqaPFYdX0pOVniKSumk6kVz35vzp+N/wU8Z/ATx9qXgLxnbwtPbrFfaLrenyC60LxT4fvVE+k+I/D+oR7oNQ0nVbRo7m2uIXYbX2PtkVlH8C4vCYnAYmvg8ZQqYbE4apOjXoVYuFSnUg3GUZRaTTTXz3R/e+DxmGx+GoYzB16eIw2Jpwq0a1KSnTqU5pSjKMldNNM8hrmOkKAPav2eviZpPwg+K+h+P9bsNR1PTdK0Px9pstlpQtjeyz+K/h74q8I2Dp9rntoBDBf67a3F2zSh1s4p2hjmmEcMieqA9W/Zi8efs1fDzTfF+t/FhvjPZfFG4eGw+HniX4beFvAPifTfBmmS25XVtbjtPGPjDw03/AAl87SPaaVerDcW+iW6G9tzLfXA+yDTYHj3iS4+CyfFnTL3w9efFTxT8I21zw9feJJ/Glj4c0P4l6tpr3drceM4ootG8Qa/okeo3UR1CPR7yXWXMsskFxfGBzIFNbAfXXh39r/4ea/qVzqXxY0vx3Zt4H+O9l8ffg/ZfD7SvDdzpkmpaHpOg6LoHw98UWGteIdIg8LeELaz8I6H5l54UXVZ4Zb/WHtdIVY7ZJlbt2sB8C+K9ek8U+KPEnieW3Szl8R6/rGvSWkchljtZNX1G41B7dJWVGlSBrgxLIyIXChiqk4FAYFAG/wDtv/8AKO/9nP8A7OS+J3/qJWlf0J4Cf75n/wD2DYb/ANOs+R4r/h4T/HU/9JR+Jdf0ufFBQB+pP/BLTQIPD3xB+Mv7TWpw2jWP7M3wc8Q+JvDr3iybD8U/GxXwL8MltmC+W11b6/q5vyhcOsFpJKiNsJXxczw0s2x2Q8PQ5ms5zWjHFqNrrLcF/tmPb/uulS5drNySe5Uq6weExuNbSeHw8/ZX616v7ujbzUpX+RnySSSyPLK7yyyu0kkkjM8kkjsWd3diWd3YlmZiWZiSSSa/otJJJJJJJJJKySWiSS0SS2R+Xb6vcZQAUAFABQAUAFAH6F/8E5f+ChHxS/4J/fGzTfHHha+vdV+G+v3VlYfFT4eNMzab4o8PiYCW6trd5FgtvEWlxtJPpGortdZA1tMzW08iV+c+JfhzlPiJkVXAYunCjmeHhOplOZKKVXC4i2kJSScpYaq0o1qburWmkpRTPf4ez/FZDjY1qUpSw02o4rD392pTvq0tlUjvCXfR6M/0i/gN8c/hv+0l8J/Bvxn+E/iC28SeCPG2lw6lpd9bsPNt5CAt5peo2+fMsdV0y5ElnqNjOEntbmJ45EBAz/mVxBkOZ8M5vjckzfDywuPwNWVKrTltJbwq05bVKVWNp06kbxnFppn9E4HHYfMcLRxmFqKpQrRUoyXR/ajJbxlF3UovVNWZ6/XjHWFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAc/4s8VeH/A/hnXvGPivVLXRPDXhjSr7W9c1a9kEVpp2l6dA9zeXdxIeFjhhjZj3OMAEkCurA4LFZljMLl+CozxGMxlelhsNQprmnVrVpqFOEV1cpNI5cbjcLl2ExOPxtaGHwmDoVMRia9R8sKVGlFzqTk+ijFNn8MP8AwUH/AG0/Ev7ZXxr1PX0u76z+FfhS5vdI+F3heZ2SOz0fzQk2vX9srtAdd8QGGO6vZF3fZ7dbPTkkmSz8+b/Sbws8PMH4f8O0cK4U6mdY6FOvnWMirupiLXjhqUmub6thVJwpp25589Vxi6nJH/OTxQ8QcXx9xDWxSnUp5Lgp1KGT4OUmowoc1niasE+X6ziuVTqNX5IclJSkqfNL4Jr9NPzQKAPoHwxqfgf42eCbP9n/AOOOrR6JY2jXP/Cmfi7dxvPP8KPEd6zOmheI5Y1kurv4UeIL1lXWbdEnm8J3kp8QaZCbf+07Wf8An3xn8I6XFuErcQZBh4Q4jwtNzr0KaUf7WoU1dxVtHjYRX7u+tde5f2nKp/v/AINeLVXhPF0sgz3" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "oAKACgAoAKACgAoAlggmuZoba3iknuLiWOCCCJGklmmlcRxRRRqCzySOyoiKCzMQACTSlKMIylJqMYpylJuyjFK7bb0SSV23sgSbaSV23ZJbtvZI/1Pv2FPgBF+y5+yB+z38Cfs0VrqfgL4aaBa+KVgYPDN441eA+IPHd3E2BmK98Yarrd3FnkRzKDyK/yb4+4ifFfGfEef8APKdLMM0xE8I5K0o4CjL6vl8Gu9PBUaEH5xZ/T2R4BZZlOX4G1pUMNTVW2q9tNe0rteTrTm/mfWVfIHqhQAUAFABQAUAFABQAUAFABQAUAFABQBT1HT7PVtPvtL1G2hvLDUbS5sb20uY1mt7m0u4XguIJ4nBSSKaKR45EYbXVip4NaUqtShVp1qU5U6tGpCrTqQbjKFSElKEoyWqlGSTTWzRnVpU61KpRqwjOlVhOnUhJc0ZwnFxnGSejjKLaae6dj/Pk/a3+Bd9+zb+0b8Wfg1dxzLaeEfFd4vhyafJkvfB+rLHrXhC+aTAWSW48O6hprXTR5RbwXEQOYzj/AFM4F4lp8XcJZHxBBxdTHYGn9bjHanj6F8Pj6aW6jDF0qvJfV0+SXU/y+444cqcJcV55kE1JU8Djaiwkpb1MBXtiMDUb2cpYWrS52tFU549D5yr60+UCgAoAKACgAoAKACgAoAKACgAoAX9ufULjw58Bf2TvhuZ4mOraf4/+LOp28R+ZJPEGtxaV4fkmXqZG0e1mG4jG3hCRmvk+F1DGcWcY5koythp5ZktKUtv9mw7rYlR8vbzj89z+oeDMLLA8DZDRmoqeNq47M5W3lTrVVTw7l3apxkvLofl7X6Ge4FABQAUAFABQAUAFABQAUAFABQAUAFAH6x/8EVf2VpP2qf2/PhLpepacb3wJ8Irhvjd4+aSISWrab4DvLCbw5ptwsimCeLWfHN54X067spCDcaTLqjIGELCvyHxx4tXCXh5nFWlV9nmGcxWRZdZ2mquYQqRxNWNnzRdDAQxdWE1pGsqSfxI+q4Nyv+1M+wkZRvQwj+u19NOWhKLpxfRqdd0otPeLl2P9JEAKAqgAAAAAYAA4AAHAAHAA6V/mSf0SLQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAH85//AAXg/ZXfW/D/AIN/au8L2LveeFLa3+H/AMSlt4XcvoF3fvceENduPKjEcUel6rfano95dzu8051vRbcEQ2ahf6x+jPxqsNisw4IxtRKnjpyzTKOeSVsVTpKOPw0Lu8nWoUqOIhCKUYLDYidnKoz+VPpJ8GPEYXAca4Om3UwUI5ZmyjFu+GqVXPA4mXLG0VRr1K1CpUk3KX1jDw0jTR/L3X9mH8dBQAUAFABQAUAFABQAUAFABQA9EeV0jjVnkkZUREBZndyFVVUZLMzEBQBkkgChtJNtpJJtt6JJatt9kCTbSSbbaSSV229Eklu30R5v/wAFI9Vtf+GirfwJp4eOw+Enwy+HPw5jt2dm8q603w9DquoMwblZpLrWGM2fm3KA3Ir5rw7jOpkWIzOq1KpnWcZrmbkkvehUxMqNK1t0oUFy9LPQ/sJ4angMHlOW0rqnl+UZfh0ne6k6Ea0731vzVXc+A6+8MgoAKACgAoAKACgAoAKACgAoAKACgAoA/wBAH/g3v/Yzk/Zy/ZB/4XL4t0o2XxI/aZuLDxi4uYZIr7TPhrp0c8PgLTWSeMNCNViutQ8Vu9u/lXtprWlGUM9lEy/54fSM42XEvGX9iYOtz5ZwvGpglySThVzSq4vMKt4u0vZOFPCJSV4ToVraTZ+8cA5O8uyn65VjbEZk41tV70MNG6oR1257yqu2klOF/hR++lfz0fdhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHD/Ev4d+Fvi14A8X/DXxrp6an4W8baDqPh7WrRhHvaz1G3eBprZ5EkEF7aOyXVjdKhktLyGC5iKyxIw9LJ82xuRZpgM4y6q6ONy7E0sVh6ibsqlKSlyzSa5qc0nCpBu06cpQldNo87N8qwed5ZjsozCkq2DzDDVcLiIO1/Z1YOLlBtPlqQbU6c0uaFSMZxtKKZ/n//ALTvwC8UfsyfHHx/8GPFatLd+EdZlh0zVBC0Nvr/AIeuwt5oGvWiF5dsGq6VPa3XlmR5LeV5LafbPDIi/wConBvFGC4x4cyviHAtKnjsPGVajzc0sLi4Xp4rC1HaN5UK8ZwvZKcUpxvGSb/zG4w4ZxnB/EWZ5BjbyqYHESjRrcrjDE4WdqmFxME2/drUZQna7cG3CVpRkl4HX058yFABQAUAFABQAUAFABQAUAetfAfw23i74zfDLQA0Sx3njPQ57ppuYlsNNvI9U1FnHQqLCyuTg8HoxAya8LifGrL+Hs5xbv8AusuxKhy7+0q03RpW/wC4tSH6Hv8ACuAnmfEmR4Gmk5V8zwiaaunCFaNWpdLp7OEj81P2l/Gs3xE/aC+M3jOaYXH9u/EfxXPbzBtwksLbV7mx01g3p/Z9ragAcAAAEgCvX4XwKy3h3JMEly+wy3CKa7VJ0Y1Kv/lWcz+qswqqtjsVUXwuvUULbKEZOEEvJQijw+vdOMKACgAoAKACgAoAKACgAoAKACgAoA/Sj/glL+xFqH7dP7Xngb4c39rcj4X+EpovH/xh1SNJVig8D6Bd20k+iJcxyRNb6j4uv3s/DWnyRtJLavqMmomCW2sLjb+Y+LnHdPgHg3H5lTnH+1cYnl2S0m1eWPxEJKNdxafNTwdNTxVROykqSp8ylUjf6PhbJZZ3m1DDyi/qtJqvjJa2VCm03C62lWlanHquZytaLP8ATA03TrDR9PsNJ0qzttO0vS7O207TtPsoY7azsbGyhS2tLO0t4VSKC2treOOGCGJVjiiRURQqgV/l5Vq1K1SpWrTnVq1ZzqVak5OU6lSpJynOcndylOTcpSbbbbb1P6PjGMIxhFKMYpRjGKsoxSskktEktEi7UDCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD8Z/+Cw/7EK/tD/CD/hdXgPTEl+Lvwa0m8uriC3iU3vjP4eRNJe6roCgL5lxqXh+WS617QYUkDTLLrenQW15f6nYJF/QPgH4jf6qZ9/q9mdZxyLiCvThGU5NU8vz" +
            "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" +
            "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" +
            "0VFWXLTqSksRSSiuWEY1fZQ0tT0sfmHFXhDwPxXz1cVlcMBjp3bx+V8uErSk7u9SnGLw9RuWs5Spe0lrep1X4e/HX/gg58bfCsl5qXwN8ceHfibpSsTa6JrbJ4U8TkHLlc3c0uhPHEv7sSNq6TzOMi3XcoP8AR/DX0meHMbGnR4ky3F5NXa9/EYZPHYK+1/3cY4lNvW3sHGK3lpc/nXiT6NfEOCc6vDmY4XOKK+DD4hrBYzXW3vyeGaitLuupSf2Vex+SHxZ/ZY/aE+BtzJB8UvhP4y8JxLM8MWoX+j3X9lXbIxUtY6lHG1peR5GBLbyOjdmNfumR8a8LcSQUslzzL8dJxUnSpYiHt4Jq9qlFtVKcu8ZJNdj8PzvgzinhyTjnOSZhgVzOMatXDz9jNp2bp1UnCor/AGotrzOdsb6LwT+y1+1z46njuINRvfCHgr4RaRPiSIJN8R/E7X+pop+UecLHweqsCCVhnYHaJPm5c9vjeJeCssg4ypf2hjs6rx0d45VhFTot7+77THOz6yj5H6D4P4SManE+ZzjJTw2W4fAUXZpc2Y4huqu3MoYWPmk/PX8YK/ST9VCgAoAKACgCaGCe5cRW8Ms8h6RwxvK5+iIGY/gKUpRirykorvJpL72NJvRJt+SufavwB/4Jy/tq/tNtYTfCD9n3x7rui6i5SDxZqGmN4e8HqV+95/ibXDY6RDjk4e6BIBwDXw3EPiXwNwt7SOc8R5fh69JXlg6VVYnGu/8ALhcP7StL5RPYwHD2c5nyvCYCvUhLarKPs6Pzqz5YL7z95v2aP+DYTx/q76drn7VXxr0bwfYMbW4uvA3wvtz4j8QMh+a606/8S6ilpoenTDhEu9Li1+LO5gpGM/z/AMUfSoy6iqtDhLI6+NqLnjDH5rL6th7/AGKlPC0nOvUj1cKrw76H3WW+GlefLPNMbCjHRujhl7SpbrF1JWhF9LxU11P6Pf2Vf+CZn7GX7HdrYS/CH4O6C/i2yVN3xG8YQxeLPHk9wqlftcWtanC8ejzsjMjHw/Z6SjIzKyEM2f5n4t8UuNuNJVI5znWIWDm3bLMFKWEy+MW78kqFKSdeKev+0TrO+tz9DyvhvJ8oSeEwdP2q/wCYislVrt91OS9x/wDXtQPvfpwK/PT3QoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCG4tre7ieG6t4bmGRGjkiuIo5onRxtdHjkVlZHXhlIIYcEEVUJzpyUoTlCSaalCTjJNapppppp6p9CZQjNOM4xnFppxklJNPRppppp9U9GfMfxU/Yo/ZQ+NPhPVvA/xF+Avw61fwzr2q22uazp+m6FF4Vk1PWLOOSK01S91Dwm2h6lPf20U0scF3JeGeFJGEci5r6vK+POMcmxdDHYDiPNaeJw1GeHw86+KnjI0aFRpzpUqWN+sUoU5yinKEYKMmrtM8SXDHD0oV6ccmy6jHE1I1cR9WwtLCSr1IJqNSrPDRpTqTim0pSk2lotD83/H3/BvP/wTV8ZknRPAHj/4aFs5/wCEH+I+tzKN3dR43XxkQw/hyzKO6NgV+lZd9I7xPwP8fMcuzS3/AEH5ZQj9/wBReC0+5+Z49fgDhyt8GHr4b/rxiZv/ANPe2PnrVv8Ag2I/YkuNx0T4tftGaXnO0ahr/gLVwvpkQ+AtILAfVTjv3r6Oj9KfjqNvb5Pw1V7+zw+YUb/+BZhW/U8+fhrkr+DF5jH/ABVKE/yoQOPT/g13/ZeE+6T9oP40PbZ4hXS/CKS49DcG1dfx+zj6V2v6VnFfLZcOZGpfzOrjHH/wHnT/APJjL/iGeWX1zDGW7clH87fod1pH/BsZ+wza7W1n4oftIaqy4JFp4n8BaVE5HZkb4eajJsPcLMrY6ODzXBW+lNx7O6o5VwzRX9/CZhVa+azKmr/9u28mbw8NckXx4nMZ+lWhBP8A8t5P8T6W8Bf8G/3/AATM8FxRLq3wj8UfEa4iIYXfjf4j+LhIzLggtB4Q1DwnaMMjJR7do2yQyleK+XzH6RHijjm/Y5xhcti9OTA5Zg7W7KWMp4ya9VK63TuejQ4D4bopc2Eq4hrrWxFX8qUqSfzVj7++FP7Dn7HvwQaxn+Fv7NXwa8JalpoAsdetfAmhX3iiDHQr4q1a01DxGT3y2qMd2G6gGvzzN+PONM99pHNuKM7xlKr8eHnmGIp4WXrhKM6eG+6ke9hclyjBWeFy3B0pR2mqFOVRf9xZqVT/AMmPqhVVQFUBVUYCqAAAOgAHAHsK+S33PUFoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/n9/4LA/8F6PhN/wTF1TRfhN4X8Hw/GT9oXX7D+2ZfCTaqLLQPBWgyJILHWPFktpKt9IdTuo2tbDS7eexuplhvLpZmjs5Eb9R4C8MsdxlCpjq2IeX5VSn7P2/JzVcRVVuanQUk4rki+aU2pRV4q15Jnh5rndLLmqUYe2ryV+W9owXRytrq9loz8QfgD/AMHhvj+58eWlp+0z+zF8P7P4d3d8kFxq3wfvfFdt4j0eyklVTfz2vijxB4httTNtFueS0tILaScgLE6Hr+j5p4B4VYaUsnznFSxcY3UMfGg6NSSXwqVCjScOZ6JybS63PGocV1OdLEYemqba1pOSkl1dpSlf0R/b38Jfiv4C+OXw38G/Fv4X+IbHxV4B8faDp/iXwtr+nTRT2mp6RqdulzZ3MUkMksf7yGRWKh22k4Jr+csdgcVluLxGBxtKVDFYWrKjWpTTUoVIO0k00no12PsaVWnWpwq0pKcJxUoyTummeIfG79sb4efBTxdaeAI/A3xs+NPjk6PF4h8QeEP2d/hbrnxi8QeBNBvru5sNA1f4gad4ZZ5vCVj4svdN1618KS6oIjrsvhrxELJXXSblhyGh7D8JfjJ4D+NPgW18f+C9TkOmb73T/EGk6zCNI8TeBPE+iSyWXivwN4/0K4kN14T8b+CdYt77w/4" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "8dNO+Il94t8MWi+G/FdzrWiSTWEgB7z8JfhL8O/gV8OfCfwj+E3hi18GfDnwNpzaR4T8LWN1qN5Z6JprXdze/YrW41a81DUHgW5u53jW4u5vKVxDEUhjjjQA+Y/iJ/wTg/Yy+K9/44u/iD8H5/EemfEay1+y8V+B5viX8XLH4UXMvinTbjTvEGtaT8HNK8e2Pwp8LeLdUe9v9duPGvhXwbovi8eM9S1Tx7FrcfjbVNQ8QXIB6L8QP2OP2cfijp3xb0vxv8O31S1+Olj8I9P+KL2fjLx/4ev/ABFb/AjVl134SSW2q+G/FOkap4avvBerpHqFhqfhS80PUru5iifVbu/8qMKAct4j/YK/Zj8VaB4M8Pat4Y+IqL4D0efw7oXiXRv2hv2i/DXxGu/D0usat4gh0Dxd8VvDfxX0n4m/ELQ9K1nXtc1Hw9pHj7xb4l0/wzcazqp8PW2mLqF2swB6T4f/AGXvgR4Xg+C8Gh/D+0sz+z74m8SeNfhTdvrXia81TQ/GfjPwV4w+HvjDxfrWsX+tXOq+O/FPi3wt4/8AGVv4n8Q/EC98Uax4g1XxBfeJ9WvLzxR5OsxAHeaP8LfAWgfErxz8YNI8PRWfxH+JXhf4f+DPG/iVb3U5Zte8NfCy88dah4C0yXT572XSLRfD938SvG0sV1p2n2d9fDXHj1S5vorHS0sgDx7WP2Mv2bdb+H0nwxufh7cWHhY/ED4gfFK0n8N+OfiL4R8ZaJ49+KvjfW/iJ8R/EPhf4leFfFujfEfwnL4z8V+I9du9fsvDPivSdMvtM1S78NSWX/CMyf2OADi7f/gnd+xxaeCfiv8AD62+DcMPhv46aR8OdH+LzR+OviYPEvxBT4Ta5qfiXwDq/iTxx/wmf/Cb3ni7Rdf1jUNWn8cjxCnjTXb2WKXxFr2rG0s/IAPWvhZ+zJ8F/gzrlt4n8A+GtatvFFt8PNP+FI8T+J/iD8R/iJ4lufAGk+NvGPxF03w/qWv/ABE8W+KtX1ZbLxh4/wDFmqW+papeXmsJDqcekDUP7F0zSdOsADs/DPwg+GnhDQPG/hbQvB+lQ+G/iT4q8eeNPHehagLnXdK8UeIvidqF5qnj271ax12fUree18T3uoXr6jo4RNG8m5ls7fT4bNvIoA+b9C/4J2fsf+H/ABV4Z8bW/wALtW1fxP4H8baF8QvAOqeMviz8Z/H7fDvxR4cnu7jTJvhzaeOfiH4isPh9orPdrHqnhPwba6H4T1610zw9Za7ompWfhjw7BpYB9sUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAA/9k=",
        tabla: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABsCAYAAAC2EsxOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+mSURBVHgB7d3Prt1GHcBx++QWBRBSF1RkRxa0LJBQeYKWN8gGqQoswiP0CXiEqk+QLhCq1E0eIYgHaIEV3AXZUSksKiGhSEmuOb6pG2fu/PuNf/PP/n6kKOcc2zPjmZ99f2fsez0ODrd//NGH43i6N4zjB+e3d4dxeHuYhm/Or5+cX78/AAAAHNDPf3Zn+Mc///3pi+H5Z8+ffvGVbZ3R/OD2nY/uDtOth+cFHw5AJdPL/w7jrR8NOA7GHBLEC1pxNU2PxtPVx8++/vzJ+vPT+s3td+4/GK9ufUlyBQAAEHYax3tz7nT7zv0Hb3y+vLhOrk7jw+tLgQAAAIhzzp3GaXy4TrKuE6z5suA4jp8MAAAASDJejZ9c32o1fJtgTVenT5i5AgAA2OB6JuvWw+uXP3znN+9fnb735dCp/339x+9e/+DO724sMz8rSaP+VsooLfcNrL4+Se0vrbFy0YzvFmNCMua2fsp1/K/LKd1v2vXtKb6k54g9xYyrzK1j5tLLz4+WzmvT+PLXF1fDWw+GTpmd2WMi4bPsj3S/zPX31CclpPaXRizGlkFMhH84xu5jqC9r9pV23UePr73EjHZy5Ss3VgsJeUtxN7483Tt9+3euumMbkCUZAfaOpPkmjn89R4mvPcUM54TGnHOr+R6su8OO+IJsPpCWf1rLXOtK609hK295HfrMto5m23rm6jtbf9m28/W3Rh9LY9UXE6ll9iBmH2OOF1+fhOoL1R9aFluGK05THDm+eomZGnHhqyumTyTbutY1l7nqlJSRMe7uXhzl5va5E13T46nLfHXYBlpyCWm93HaZ0PXetm6ItG1HYxtXV3wsy2LHa0tbbG1LiQmt+G+ZtG8kx3lMf2j0sSSmiK/tWo4ZyXqSul3JRmoMpMZP7D642ispw/ZexTm3urh+/M0BkixJ52ldC/YNvraYNq8DudcflDXYEqhaSsTxEeIitI++5Vrnh5RlqWXmKEOjnT3FWssxo7WdtA5Jn+QYa8nP2eJxd86tLob52YLDMZ4t6MvO18tsWXjO+l3rhWbB0JfScYTXQsc4XisdX63GMzFz09Y+kYx17rgoEHdPzjNY05+HcdxNgiWZRl3zTRdqHVhbv0nwg7VvGnEUimO4+Y5xvFI6vlqPZ2LmptQ+kY51zr4uEnfn3Oo03bp6NHTINjUoubbtey/ZNpWrHN8++KZDJdOknCjq04ijUBmpdfSatIXugWlJ6N6RFpSOrxr7vZeY6a0N0nI0YqZ03L0Ynn928ezrzx9//ye/fTx0+IBnyXTlel3bdq5yUuvY0tYYMZc1Y+vQblsvbGOlue/rMdDq49Q4NtvjKtPcruXY8M1CmzSPl9i+iq0/to9LjEXN+PL1n5a9xEzKetJ2mnXE1BU7QRCaINGImZpxdzVNj54//eKrcX5z/SzCq1tf8rgctCL3X3JHexhzSBAvmEkS3SKm8Zvp9OJX58mrJ9fPIpxfTKfp4wEAAKBRLVwq9Zmmq4/nnGp+Pa4X3L5z/8H8JGhmslAb306PhzGHBPFyXE3etjDPXM3J1dM/fbZ8NJrrvLpceDonWeO9AaiEk+fxMOaQIF7QimkYHg/jy98vM1eL0bXBW+/cf/9imB4M4+mD82p3h3F6e87QzkU9OW91iL+bhXo4eR4PYw4J4gU1/fIXPx3+9vd/fTpN06Nn//n8sW2dcUhwLnAaAAAADma+LPnXv/xheO+997w5FAkWAACA0HjmW34aAAAAoIoECwAAQBkJFgAAgDISLAAAAGUXgwLXfV6174UPtWtebntdsl21+ihmzEr2SS7mfvr2x7duqJxlue1zrT4MlRWz3LSOf9vn5rY5929vXH0T02etxyLq8h3LoXWJpXJUEqxZ6okkZGsZvm3Xy0omV1pJTI6+2dOBY9sXyQ+95bNQOTGvtwr8skpw+UK677Gv8SbXeMSMU+uxiDbEjCexVBeXCAuyBeYS6OhLyRNMjRMaJ9B0W2auZvQ9sA9qM1gxXJfG1hn1etny3jbrYysnpT2urFxSx9b2uKZlzWVmP60/C22rwdcuU6k2tUozKYqJv1Cirp2k8S3WzdUvNW8HYKz2o+Z4EksyxRKs0KUxW7Jjm8YMvbfVu5YyreqrQ9qerXWHkkLNtsS2S9KGkgeoLemIrduWrLgSRduXgxbF3m9hLutl/8BYHUXqeU2CWNpOLcEKzWKExK4rHWiNGSWtdTVoz0LElt/jARa6x2DNTMZiZgrNJMS2LPcJSpKwxt5vYXtfa/8g/1LCWO1f7HlNsx5iSS7LTe6+exA0aJWjVUeJ9uQgPThC+1lydioHX9tT9suXwKzX2VJHrFDZufYP22j1K2O1H7XHjliKl+USoe3S3vL5VrZv2tokdWi0p4cgDe0nB9orW2YbUupa/59Sf0qdjHMZ2rcbAKmIpTTVfotQIzHqbSbLvOy0bNNb4PY6Y+fT47gs9yku/5bPbPY4ZnvGDzS4cCz3I9tN7uYslu0el1iucmwJiwZJHdL2hPpB2k9afRzi20/bTEqJNoVMgZvcY/suVI6tPHO7Gj8sffu3fBZa5irP3I5kYBvb/S22MWGssOW8tl6XWMovKTuZdtirfGMEAACxxsCMCn9oFAAAQFnRPzTaIqY6AQCAtsMnWCRWAABAG5cIAQAAlJFgAQAACFxeXgbX4bcIAQAAhPgtQgAAgMJIsAAAAJSRYAEAACgjwQIAAFCm8newXPd51b4XPtQu8/lfudvb2uN4Ysatt0cIhZ7R5VqmWY7rj9dq9KVtzGKeHxYqp5X92xuzT/YQg6jL9txKk+Sh766yiKnt1P7QaMpJPsbWMnzbmg+wPKJc41aDrd3LZ75lmuXEvN4q5gHgoeUt799emOOwpxhEHTFJUGiMpfEW+xo3cYkQuxGbTGuXvQecJPOjj4FjKfqonHX2bbsMZU5BLu990+xbTlq+TFxSh2Z7bOXYvrmu+ypX/0jbaCrVptZpfcuLKcc8lkrgW+xNNcbBhzHqXyimYm4L0IwBYiqsWIJlSwJc75fXruTB995W71pMQEjqkLYntU7fFK2knC18ZUvGKPeB6UvmcifOti8KmlLiOaasVvYP2zFGcEk9fxBTadQSrNAMRohkoCVSgiFHu7eW41q+9VuyZNx6ObB8yVyJxNmXGJvLpWLvkwhpdf/2ILYvc37RYIz2RWt2ynf+kGxLTMXJcpO778ZNDVrlaNXR036ZpAdFqI25Z6dKyXFpNZQIhWaUNNtUY//wWo0+YoyOLdeMOjHlluUSoe3S3vL5VrZv3tokdWi1p8R+bRVqIwfYm6T9oXG5bz0mJS7FMt5vihmHkv3GGPUvFFOlx5iYilf0Jvc1jUFiJqteItZDAhi7rBe+fdgy9Q89oXFgXCCldWwTe+VlS7DMWazl/Xp5LFc5ZplaJHVI2+O650mrzi39HOKr1/YtS2PsU9u3/iy0bOaLVUk5tvLM7VL3P7Zumx72b+9sx8jMNhPBGEEDMVVXUnYy7bAne87u+WYCAEBZY2BGhT802qEWL88BAIDXqt2D1YoepzdLXXIDAABpDp9g9ZqckFQBANAuLhECAAAoI8ECAAAQuLy8DK7DbxECAAAI8VuEAAAAhZFgAQAAKCPBAgAAUEaCBQAAoEzl72C57vOqeS986PEx0sfLxK6/9wcO9yL03EHXMkk55nq2h7LatkmJgxL7EypHc3/2jLGCNkksmMtTyyGmtlP7Q6MxD4ZM0crgEUD9cCU75gPIfeuHyjE/823reh2rxP6EytHcnz1jrKAtJm5Sv/wTU3nt9hLhEjQ2BMW+ScdWsn6NuKkVqxwjcr4+az3O0CZioV9FE6w5sVn+mZ+vl9s+jyknV5vW/4e2M5en1I1+SJL1vSX2fFHpB2O1TzXHlZgKK/YsQnMwfO+X17apy9D7tdD2qWWn7Iu0DOS1TmpD/S5Zd72e656FVDHtkCTrrkubtjpy7M+e+caqx9hDfa5YMI/jHGNOTKVRS7BGwY12NpKTh5ZQWb7EbUu5KGtLkp6SPC9825nLY9jKW5/4lnVcSVZo3VC/aO/PnqX0o7SclPoZq365xjR0f1bu+okptyw3uftmbTRIylnPYrlu5MvdhpxlwM825jkS/5T2rONyS31a+5NStyThRF2M1f7UHkNiyi/LJUJXMqPR+bZv2aXL0moDwZhXzgPedm9e7OVgU29xwIm0H4wVtBFT8ar9FmHJGSBXwpdSltZ2ucrBK7lPAsvlueXf8lkOvtgwl4Uud8auizSSsUotB8eiFVMoL2l0JuOsLLmRe1WGdz3f9d31Z7E/JHxttJXla1Nou7WYMsz1sI3vHiTb8tgxMtc164ydvbLFdEiozbbPbfWH1nXV4SpvvR0x/ErsWNmWSdZ1LXOVt96OseoLMdWmMZDhqiRYAAAARxJKsHgWIQAAgDISLAAAAGUkWAAAAMpIsAAAAJSRYAEAAAhcXl4G1+G3CAEAAIT4LUIAAIDCSLAAAACUkWABAAAoI8ECAABQdjEoaOGhsS20wUbyjLqaWu0/Lb5naC0kDwOXPMPL9awuSZ/33v4j0h6z9fqM2TERU31RSbBa0HJyFQrAGgFq1rn35Mr2WeyJwrduqJyY13tv/xFtHbOFdDxjX6M/xFR/uESIXev9BCBpv2s9ToBlucaMcUAqYqpP6gnWkmXP/68zbjP7NpeZ65tlxa4rKdP1jSBlWSrbPvrqMtdP2R9Xv7raEWpTaFlNLc9sxui9/Uek0TfafcyY9Y2Y6lOWS4SSKURzue99aN2tZWrUbVvuu0xoW7blfUybfe2J2Z/YevZi6S/zM+m2Ofpk3a4c5edu/xHFjlmrMYd+EVNlZUmwQomE1jf41IHWCJCaQWbWrXlpyDVOkrL2dgCOo/w+hzVfYmou39Ku2DZJE+Bc7T+q2DFrMebQtlCMEFNlNXGTe+xlJXMmIfeMQGrdvsttsW2O7ZNS5fjKKjEue2ObAZT2YUo/a80u+mYwsV2ucxtjtl/S5Eq7TmLqpiYSLI1v0yXaIqnbdelSox2xbDMcucrKPS57UOMEKKk/9/YojzE7hpLjTEzFK/pbhDGXB31JgOZsTIx1fbF1h6b8U/ZBY7+lyZ1vP2wzc2gbJ8X6JMcJxxRiSW4NQFnVZ7Akl0Zi1029ZOXbLrXMWLab4rfWZd6YuOWSpa+s3H2TwxS4cd03Hut1Q+XYyjO323KvnPmZrT7XJet5ea32H1HvMYf2+I7t5XNiqp6klHaiJwEAwIGNgWlB/tAoAACAMhIsAAAAZSRYAAAAykiwAAAAlJFgAQAACFxeXgbXIcFCk2KCF/vCmEOCeEEtc+y9++67wfVIsAAAAJT9HwAcyrY0NqFSAAAAAElFTkSuQmCC"
    },
    {
        perfil: 'Agresivo',
        descripcion: "El inversionista con este perfil está dispuesto a asumir un riesgo alto en su portafolio" +
            "\na cambio de una rentablidad superior al promedio. Tiene como objetivo la apreciación de" +
            "\ncapital en el largo plazo a través de las ganancias de capital. ",
        retorno_result: "6,54 %",
        retorno_texto: "Para inversionistas de largo plazo que buscan un significativo crecimiento en su \ninversión a un nivel alto de riesgo, y que no requieren ingresos corrientes.",
        retorno_anual: "5,8%",
        retorno_mejor: "41,9%",
        retorno_peor: "-35,4%",
        grafico: "data:image/jpeg;base64,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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "xh7SrhFKVDH0I8zg5VsBiI0sXCnzxlBVvZOhOUZeyqzSufnOZZLmmUT5cwwdWgm7Rq2U6E3a9oVqblScrNNw5udJrmij5Sr608sKACgAoAKACgAoAKACgAoAKALdhf3ulX1lqem3dxYajp13bX9hfWkrwXVle2cyXFrd208ZWSG4t5445oZY2V45EV1IYA1NSnCrTnSqwjUpVYSp1Kc0pQnCcXGcJRekoyi3GSejTaY4ycZKUW4yi1KMk7NNO6afRp6pn+qt+xz8d7L9pz9lj4CfHqzew874m/DDwr4h1y20wqbHS/Fx06Ky8a6FBtwAugeLrPWtFK4Uq1gylExtH+SnGvD8+FeLOIeHpqpy5XmuLw2HlV/iVcH7V1MDiJeeIwc6Fe+t1U3Z/UOUY6OZZXgccuW+Jw1KpNR2jV5VGtBf4KqnD/t0+lK+YPRCgAoAKACgAoAKACgAoAKACgAoAKACgD8Pf+C8XxYbwj+yt4T+F9je+Tf/ABb+JOlJqdnj/j88JeCLa48S3p3d/I8VR+DJNoyO7FT5Yf8Ao76M2RrHca47OalPmpZFlFd0an/PvHZjOODp/wDgWCeYL8r62/nb6SedvA8F4LJ6dTlq55m1BVqf/PzA5dCWLqf+A41YB2+/pf8AkNr+7z+GDofC/i3xX4H1q08SeC/E3iHwh4isCWsde8L61qXh/WrJiQS1pqmk3NpfW5JVSTDOhJA9BXLjcDgsyw88JmODwuPwlVWq4XG4ejisPUXadGvCpTmtftRZ1YPHY3LsRDF5fjMVgcVS1p4nB4irhcRTfeFahOFSH/bske76r+0pcfEhTb/tH/CX4R/tIRypZwXHiXx14Yfwt8XBbWUhlhWL42/C+88EfEzUJY3Zyi+Ltf8AFmnMJJY7nTLmCR4W/HeIvAHw+z11K2FweJ4fxc25urlNdxw8p2tFTwOJVfDwpLT91g1g72VpLc/YOHfHvxAyNQpYrG4fPsJBKCpZtQUq8YXvJwxuGdCvKq/+fuLeLtd+61oeZ6v+z9+xp8Slln8A/E74n/s0+I5k1GaLw38Y9Hi+NPwsa+ncSadZQ/E/4Z6N4e+I3hnSLZi9oftvwX+IOoLatDPc6vdXFtO17+C8R/Rq4uy5Tq8P4/AcRUYq8aMpLKsxm76pUcVUlgeVR6/2ipSkrKmlLT944d+klwnmLp0s/wABj+H60naVeKeaZfBW0bq4anHG8zl0/s/ljF61Hy6+TeL/APgn7+0zoen3/iPwN4U0j9oLwTYGIzeNP2b/ABHpvxlsLe3lgE5vdc8L+Fnm+JPgi0hO6CeT4g+B/CbRThFaPZcWj3H4ZnXDPEHDlf6vnmTZjldRynGDxmErUKdb2avKWHqzgqVenypyVSjOcGlJqXuyt+4ZLxNw/wARUPrGR5xl2Z01GEprCYqjWqUfaO0Y16UJupQqXsnTqxhNNxvH3o3+LZYpIZJIZo3hmhd4pYpUaOSKSNijxyI4DI6MCrowDKwIIBBFeGe6MoAKACgAoAKAP6df+CVf/BDL/hbmi+G/2jP2x7HVtH8B6gbPWPh/8Ef9I0rVvGmmOontvEPxCukMOo6N4bvIykuk+GrCSz1jWVeK/wBXvbDSYjo+vRKdtF94H9fng7wZ4R+HnhjRvBXgPwzoXg3wf4ds10/QPC/hnS7PRNA0WwV3kSy0rSdPht7KwtEeR2S3toYokLHagzWQzpaACgAoA5Xxr4F8F/Ejw1rHgz4g+E/Dvjbwj4hsZNL17wz4q0ew17Qda0yaWCebTtU0rU4Lmyv7Gea1tpJrS5hlgmeCIyRt5a468Dj8dlmKo47LsZicDjMNUVXD4rCVqmHxFCrFSjGpSrUpRnTqRjOSjOElJKTs1dmVahRxFOdHEUqdalUi4zp1YRnCcW03GUZJqUW0rpqzsrn8Z3/BWf8A4IKTfBzRPFP7Sn7GFhqmt/D7Tpr/AFvx/wDAyP7VquseCNGVftM/iH4fXEjXGpaz4csE85tY8M3st7q2kRQvqekX17pdx/YXh7+2fCD6QUc6r4ThjjepSoZjVVOhl2fPko0cfXb5Y4bMYrlpUMTUfKqOKpxp0azapVoQqx9vifx/irgV4OFXMsnjKeHi5Tr4HWU6MN3Uw7d5Tpx156TbnBLmg5RfJT/llr+sD8xCgAoAKACgAoAKACgAoAKACgD+8L/g2e+Nknjz9iHxt8INR1FLjUvgR8YdctNI08Y8zTvA3xIsrbxnpTMOpW88bSfEaVTjqjDcei/wB9KLIll/HeBzmnTcaXEGS0J1qnSpj8sqSwVZLzhgVlifqfuPhvjHXyWthJSvLA4yahH+WhiIqtH76zxDP6M6/mo/QgoAKACgAoAKACgAoAKACgAoAKACgAoA/lF/4OBPHk+qfHr4H/DYurWngz4V6p4vjVTny7z4g+KbrSrtX5+WU23w805ymM+U8L5IcY/t36LmWRo8McR5va1TMM7o4B3608rwUK8Gu6581qq/8ykuh/FP0nsylW4l4dym94ZfktbHK3SpmmNnRmn2fJldJ27OL6n4C1/UB/MoUAFABQBq6Jrmt+GtUs9c8Oaxqmga1p0wuNP1jRNQu9K1SwnUELPZ6hYzQXdrMoJAkgmRwCcNWOIw2HxlGphsXh6OKw9WPLVw+IpU69GrF/ZqUqsZQnHylFo2w+JxGErU8ThK9bC4ilLmpV8PVnRrU5fzU6tOUZwl5xkmfQmoftQ+KfHtuunftCeB/hj+05p/2SPTzqPxm8Ki8+JNvYrL5rpp3xx8IXvhL42W02795CLnx/f2Ec+ZJdOuEmvIbr8i4i8CfDviDnq08qnkWKm0/rGRVfqlO8VaEXgKkK+XwpLaUMPhaE5R932kXGnKH61w745+IeQclOpmsM8wsE19Xzyl9bqWk7zn9ehOjmE6r3jKvia8Iy9505c1RT881X4K/sSfFB3m8OeJ/i7+yt4iuZppjpviiztf2hPhAjNFthtbXXNCg8E/FjwnpwuNsoN14d+LupRWzSxPc3k0Uctx+C8R/Rm4lwPtK3DebYHPKMVKUcLil/ZWPk73jTh7SdbAztH3ZVKmLw3NJKSpxUmofvHDv0l+HMbyUeI8px2SVZOKlicK/wC08DFWtKpPkhRxs" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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",
        tabla: "data:image/png;base64,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"
    }
]
function getJSON(url, cb) {

  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status !== 200) {
      return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
    }cb(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};

//variable a reemplazar por objeto local que almacene toda la data del cliente
var nombre = 'Ingrid';
var indexPerfil = null;

var switchPerfil = function() {
    switch (perfil) {
        case 'defensivo':
            indexPerfil = 0;
            break;
        case 'altamente conservador':
            indexPerfil = 1;
            break;
        case 'conservador':
            indexPerfil = 2;
            break;
        case 'moderado':
            indexPerfil = 3;
            break;
        case 'agresivo':
            indexPerfil = 4;
            break;
    }
}

$(function() {

    $('#cmd').click(function() {
        sector = sector.toString();
        identificadorCliente = identificadorCliente.toString();
        //Todos los campos se identifican con 'pdf-[nombre-de-id]'
        //Llenar con text los campos vacíos antes de generar PDF

        //Código para incluir imagen (no es necesario tag de img en el html)
        var logotipo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAyCAMAAABCiTbWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFaoHFen6GQl2t0tnsfZHKxsjPwcPKRVmS9vf4gYKFsrrR4eXu0tbkbnympK7JXWqNqrbd6ertTGWtaHKKZnGLJUSc3d7iq7PLjJ7Td3yHc3mIK0ieHj6bq7jfJUKZmajWkKHU2NzoNU6V5ujtQ1eT3+HnOVGVRmCtOVeqhpnOP1qp1dnml6fWJEaooa7XsLzgo7HZ+Pn6usHWhIWEW3S7ZHzD1NXbTV6RYXm8v8TRYnOkRGG2ME6lVmWPU2uxdovFdovKYGyMz9bp9PT2IkCajJzN7/D0jqDTLkiXJEWnxc7o7u/xtbvOb3aJkqHNW3K1V3G8g4SE8vT38PL2foGFUGCQUWGQOVizXnW2UmqwusXlK0eYUGu7eY7Me3+GWGeO0NfuzdLhKEWYKEad5ObttcDhSl2RanOKOlWlPVqwnavTM0yWW2iN4eLlTWavw8znfoCGU2y0P1WTXXfA5ufqZW+LYm2MLU2lHDybPlSUYnrCVW63MEuXNFKpIkOhTl+QSWOvR1qSJkSZkJ/Mx8/mWXCzSWSx5ejwIkKfSV2WO1q0zM7TID+aIECagYmjfIWhgYOFqrDAMFCu9fb3NVKnrbbPdoCfJEOcIkGaxs7lGzyblqHCxs7mKUmjgI60+vr7doWwgJPJf4KF6+3zjZm7bHWJ8fHz8/T4eIWtLUugjJzLnafD4+fyVWidL1Cv7OzvX2+e+/z9y83UMlGo8vP3fYCGJUaiLk6ugJPOytLq+fn7cHeJbnWJKkaYmKC3UGiv297obXaJKUebnKvYVGOP2uDwN1ayI0KZkqPSk6TVlKTRcYW+x9DqxsvbcYbCcIbIkZy84ePo4+ToP12zaX/A/P39N0+W+/v8z9HWTGazQ1+vycvSzM/WboO99/j5PVin1tjd2tvf6+zvTGi5JEKa5+nwgJTOX2uN2dzizdXseY3Gg5XKn6nEhJbMsLbI7e/0uL3LK0qlgpPGME2hv8nm8PH18PH28vP1HT2bh5O1iZnJZ3/ETmiygIKFIUCa////+Om3OwAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAfFSURBVHja5Jl5QJRFFMABD1gx8QByacWidUElNVHRFJS8qESkFrRILUzQ1jJQNJJCUDnq29pS8xM8SiW7TZOyiLKszC47LTusbAvtLjvsmNne++5j15a++KPd9wfMvDffN/PbN/PmzXwhD648tXTVaR70BIaETI05lTzXekinmxoo6Cuob3G6G1Mn6LQrggDdmdncuJ8GJXpBnMtGgxDdQtlosoQNQvSTVkuG3avTAx3dkpdQaSdxbPChW6yVmaGEPE+DDf2kxVa6P8pFTI5gQ78+3GZ2lDcR0sQGGXp9ha1ogSXKREgWDS70+lxrmr2gBZxO0tqIvrWmpuZJoQzFGo1ZUGErvcBzT3pRcw+iYau2s92g3K3RXdll26ZN3brUeB/eWV1Qanyi16emHQptZXJdgJ7bRvSx1dXVHYQyFKunqM2oElrpBZ7r4EXNPYiGsdrOhoByiIr73uKwpKUbN65Jqn7kAd3YvnhjWWISimzUoJ8s7JVfmpPAZAE5yWsjejoY1wtlbJi0V2VGldBKL/Dcei9q7kE0pGs7ux+U98vVvad98Jj01E2PLjtd3fr3w0t1RjW6xWG2lW0xs/n2f4O+CowrFZx02SVtQV/pCx0Nq7SdrVCNZO3hm9QPJt29XW67/Z0fNUYdOlMel8tmmdKcVtN/gk6/8oIeMl2QGKifECvHecKY6WrxE71bEtfd6OFnghx8HMvrRkaK1tUjOevlM8E4nDd+rUWfEG12FxJSQvOQvM1rXY8e85IefUQnQXpCfZBYuYcn7NlJLf6hT+HIb+izK3Y1yFudh7yI9SsE6853sDZt8IgeYIzt3PsMHFh/NXp9WkoJE0dcBXQJh55mGJ2eMUWHLkk21M9X1JEw29t7/wm9Zj72dCBWNnYKobTvJKEyGTve86k0By77HNlHKdEtZfasCTZCQhlaxKEvMYiOP+/8Yz7Rlc19EvqD3h+K7Nz3lNZrDiZvFmP7fWD+8iKF8aNPcHEckdGdLXEpZZZSQhop7cWhmy3G0Lvjn0UR7Y1+1Qko9tWYzxbJuR8me4fK+DOGmcEyOhOVk8UWQGgvEtFd+cbQuV5px/ZG3welxM2+BjX+hGLZizITdMUSOmMjrkrGCqnMAhGdhBtE/20RVTjEH/QZ/wL9UnShz3T1Qm8PvwmnkzkSOvuUq6mFRgFwqoSewRhD9xwbjRHlB//R592qkH7+oc+BzWq8T/SrceV5zb5EdMaaQqItFjMAz6ZCmCOhVQbRPaNwVb3dz290eo5CFvqFfhTnu6QedbssnOIVML+gG+ofCnQ2jpBKmp8DwNGUcz4udqvTILpnELfjbvYbXSkr/UJ/QrVOht8hi+Tf1bqhTpXRGWsORjUr4dELeXSMeAbRPR2x1L8dvf6EKh1I12bBqDhyKnS2mdvLKpA3jqE2l8DucBpFP3cYFvv4u9ZvU4h/a72HasJ/fgEvUmcfQ6GDbqg/yei2FEKiKJ2NuDnxNL6JJze1MkbRPXsx15qzsP0iPIY5aUo/fScv88TOMMxdrXtlTwmdwcy1kNJoDjiBMkKcI00JhtE932FWl9iv3fb1Z7xtbjPEzhZ6O/EudsPGw6NzXi4RI3slpXnCjHeVMobRPX2x8uf49kJPxmOPdnfLFjvbDnks+6rGOg7jA49egqQ2cT/PcNJyu+B2l40xjO4Zi7XJ7ZbIYpI+ebN+RvOlb6G0vIcuzaFzOXQnd1JzSLk7Sy1CUkNMT8UbRx8/TRV02+P4QvepdrDjkE+wQjaP622ckn3XANAcXs2hu2chJSvl7rDArWKMT6lgDKN7uib5ie7z0Jp9CvRfPsBXnzlCskV8iE4foGhJZ74vGo9ehinmuqH8odXBcTJimCOzGVplFtCJPYExjO5Ze59/6Nfeohbvhs80VxWv3cjdwnTvdM2OiIjFsZ0PTMf6IPHF3CXNaLDeE7EjtjOXaKy7W7iqCOcY3VIWZ3ZTJlV0u6uogDGM7nk5xi/0mJvV4t0Qor2g+obzO304ZE9y8rhF53CVYdKLLx4mWHsn7+GNj3UUL6jSOMZyyqc0QFsGQT9UdHtKGmsc3fM6bXMiq7yWVEm67lryyuKN6iZLRyou6XePXKq+lrxXupYs5RAhwlcKtL1gq68Q0SGVZ/xCL66trd0glKFYqzJ+/5dWpWyOsqFWL94NxaCcCP8nKp7elDimVhxh7Zjl29RD2yZba8cc7iJfRjdyhOBqh0lwdCalVXEiuqlJtdx9ot9VV1fXVShDsU5tHahVKZtzsbBOL94Nd+ElLPzvpnxdZMNDiQPWgIQtP6/hV+3YIhvqwtCYFPZQw7uKTxB82vo8pRYhgcWklrFukdxuzmf+D9/cJg1cCxK507s1Eo1DI9UfnnhfwzldPKgTO7j9ZJFLYo9uYQLzcyPP9yyUcsU5njGB0nIp0pGc6AJnAKO7YHfLFBPYnASMdHaZPSPeGbjoGOeYZpG1GX4INprI7BVuZwCiC85dAMU8aXnD+Y1mmmX2lNSqAEQXnAvHFtoizXFzPkyCkusUfl8SH7DoJljfzlJpN18AvwQzW17uxJXhDjh0Ma7j9nbILidxeH9TukXB3uoONPRwAW0W+Nkph7ZZBXiB00gU7M0FAYaeKaLhlyabTNoL57cjVMFOshwBg/63AAMA4i2Hicz8f7IAAAAASUVORK5CYII='
        var doc = new jsPDF();

        doc.addImage(logotipo, 'PNG', 20, 21, 50, 9); //Logo

        //Reporte del perfil
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(35, 62, 153);
        doc.text(140, 25, 'Reporte del perfil inversor');

        //Codigo cliente
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(35, 62, 153);
        doc.text(157, 30, 'Cliente:');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.text(176, 30, identificadorCliente);

        //Perfil del inversor
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(35, 62, 153);
        doc.text(20, 45, 'Estimado cliente');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 50, 'Basándonos en los objetivos de riesgo y rentabilidad que usted nos ha especificado, hemos \ndeterminado que su perfil es:');

        //Perfil del inversionista
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(35, 62, 153);
        doc.text(20, 63, 'Perfil del inversionista:');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(70, 63, perfilesData[indexPerfil].perfil);

        //Descripción del perfil
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(35, 62, 153);
        doc.text(20, 71, 'Descripción del perfil');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 76, perfilesData[indexPerfil].retorno_texto);

        //Descripción estratégica de activos
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(35, 62, 153);
        doc.text(20, 102, 'Distribución Estratégica de Activos');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 107, 'Tomando en cuenta su perfil de inversión, le sugerimos la siguiente distribución estratégica \npor cada clase de activos:');

        //Grafico
        doc.addImage(perfilesData[indexPerfil].grafico, 'PNG', 70, 113, 70, 60);

        //Retorno anual
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 187, 'Retorno promedio anual esperado: (1)');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(100, 187, perfilesData[indexPerfil].retorno_anual);

        //Mejor año
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 192, 'Mejor año: (2)');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(100, 192, perfilesData[indexPerfil].retorno_mejor);

        //Peor año
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 197, 'Peor año: (2)');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        doc.text(100, 197, perfilesData[indexPerfil].retorno_peor);

        //(1)
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 202, '(1) Sobre la base de rentabilidades de largo plazo para las categorías de activo que componen los portafolios \nde cada perfil.');

        //(2)
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 210, '(2) Sobre la base de un back test aplicado a los perfiles para los últimos años.');

        //Firma
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 265, 'Firma:');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(100, 265, "____________________________________");

        //Código de asesor
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 273, 'Código de asesor:');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text(100, 273, sector);

        //Fecha
        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(20, 281, 'Fecha:');

        doc.setFont('Arial');
        doc.setFontType('normal');
        doc.setFontSize(11.5);
        doc.setTextColor(0, 0, 0);
        doc.text(100, 281, "____________________________________");

        doc.save('sample-file.pdf');

    });
});
/*
function Modal() {
  var modal = $('<div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"></div>');
  var modalDialog = $('<div class="modal-dialog modal-lg" role="document"></div>');
  var modalContent = $('<div class="modal-content col-xs-12 center-block text-center"></div>');
  var title = $('<h3 class="">Has digitado el número</h3>');
  var number = $('<h3 class="blue" id="id-cliente"></h3>');
  var div = $('<div></div>');
  var btnIniciar = $('<button type="button" class="btn btn-lg init" data-toggle="modal" data-target=".bs-example-modal-lg">Es Correcto</button>');
  var btnEditar = $('<button type="button" class="btn btn-lg editar" data-toggle="modal" data-target=".bs-example-modal-lg">Editar</button>');

  modal.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(title);
  modalContent.append(number);
  modalContent.append(div);
  div.append(btnIniciar);
  div.append(btnEditar);
  return modal;
}
*/
function SeleccionarCliente(update) {

  var container = $('<div class="vertical-center" id="form"></div>');
  var row = $('<div class="row"></div>');
  var h1 = $('<h1 class="col-xs-12 text-center">Vas a empezar a perfilar a:</h1>');
  var containerCards = $('<div class="col-xs-6 col-xs-offset-3 items-container text-center"></div>');
  var cliente = $('<div class="card"></div>')
  var imgCliente = $('<img class="card-img-top" src="assets/img/Vector.svg">');
  var titleCliente = $('<div class="card-block"><h3 class="card-title">Cliente</h3></div>');
  var prospecto = $('<div class="card"></div>');
  var imgProspecto = $('<img class="card-img-top" src="assets/img/Vector1.svg">');
  var titleProspecto = $('<div class="card-block"><h3 class="card-title">Prospecto</h3></div>');
  var inputGroup = $('<div class="col-xs-6 col-xs-offset-3 hidden-on input-group"></div>');
  var input = $('<input id="documento" type="text" class="text-center" maxlength="8">');
  var linkSubmit = $('<a href="#" class=""><img src="assets/img/circle-arrow.svg"></a>');
  var spanError = $('<span class="col-xs-12 hidden-on text-center">Este campo es obligatorio</span>');

  container.append(row);
  row.append(h1);
  row.append(containerCards);
  containerCards.append(cliente);
  containerCards.append(prospecto);
  cliente.append(imgCliente);
  cliente.append(titleCliente);
  prospecto.append(imgProspecto);
  prospecto.append(titleProspecto);

  row.append(inputGroup);
  inputGroup.append(input);
  inputGroup.append(linkSubmit);
  inputGroup.append(spanError);

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    input.attr("placeholder", "Ingrese número de documento");
  });

  linkSubmit.on('click', function(e) {

    if (input.val().length != 0) {
      $('#id-cliente').text(input.val());
      linkSubmit.attr("data-toggle", "modal");
      linkSubmit.attr("data-target", ".bs-example-modal-lg");
      spanError.removeClass("hidden-off");
      spanError.addClass("hidden-on");
    } else if (input.val().length == 0) {
      linkSubmit.removeAttr("data-toggle");
      linkSubmit.removeAttr("data-target");
      spanError.removeClass("hidden-on");
      spanError.addClass("hidden-off");
    }

  });

  $('button.init').on('click', function(e) {
    if (state.cliente == "cliente") {
      codigoCliente = input.val();
    } else if (state.cliente == "prospecto") {
      documento = input.val();
    }
    tipoUsuario = state.cliente;
    state.screenView = "Iniciar formulario";
    console.log(state.screenView);

    update();
  });


  jQuery.fn.NumberOnly = function() {
    return this.each(function() {
        $(this).keydown(function(e) {
            const key = e.charCode || e.keyCode || 0;
            return (
                key == 8 || key == 9 ||
                key == 110 || key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
  };
  input.NumberOnly();

  return container;
}

function Description(update) {
  var container = $('<div class="container"></div>');
  var h1= $('<h1>'+perfil+'</h1>')
  var div1 = $('<div class="grafico"><img src="https://d500.epimg.net/cincodias/imagenes/2016/08/19/mercados/1471614030_865280_1471702913_noticia_normal.jpg"></img></div>');
  var p1=$('<p>Puede tolerar el riesgo, pero valora su dinero, le gusta saber con certeza cuanto genera su inversion.</p>');
  var btn = $('<button type="button" class="btn btn-primary">Hágase cliente nuestro</button>');

  div1.append(p1);
  div1.append(btn);
  container.append(h1);
  container.append(div1);

  btn.on('click', function(e) {
    state.screenView = "register";
    update();
  });
  return container;
}

function Profile(update) {
  prueba();
  switchPerfil();
  var container = $('<div class="container"></div>');
  var div1 = $('<div class="profile"></div>');
  var h1= $('<h1>El perfil del cliente: </h1>')
  var h2= $('<h2>Su perfil es: '+ perfil +' </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: </h3>')
  var div3 = $('<div class="informacion"></div>');
  //var img = $('<img src="assets/img/chartpie.jpg">')
  var span1=$('<span class="texto"><i></i>  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto"><i></i> Mejor Año:27% </span>');
  var span3=$('<span class="texto"><i></i>Peor Año:16.09%</span>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary" id="reviewPerfil">Review perfil</button>');
  var btnRegister = $('<button type="button" class="btn btn-primary" id="enviarMail">Generar pdf</button>');

  container.append(div1);
  container.append(div3);
  div1.append(h1);
  div1.append(h2);
  div1.append(h3);
  //div1.append(img);
  div3.append(span1);
  div3.append(span2);
  div3.append(span3);

  div3.append(btnReviewPerfil);
  div3.append(btnRegister);

  btnRegister.on('click', function(e) {
        //console.log(state.cliente);
    var doc = new jsPDF();
    doc.text(documento, 10, 10);
    doc.text(perfil, 10, 20);
    doc.save('perfil-cliente.pdf');
  });

  btnReviewPerfil.on('click', function(e) {
    state.screenView = "question-1";
    update();
  });

  return container;
}


function Home(update) {

	var container = $('<div class="text-center vertical-center" id="home"></div>');
	var row = $('<div class="row"></div>');
	var img = $('<img src="assets/img/secundaria-vertical.jpg" class="img-inicio col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1" alt="Logo inicio">');
	var h1 = $('<h1 class="col-xs-12">Perfila a tu cliente</h1>');
	var inputGroup = $('<div class="col-xs-6 col-xs-offset-3 hidden-on input-group"></div>');
  var input = $('<input id="sector" type="text" class="text-center" placeholder="Ingresa tu sector">');
  var linkSubmit = $('<a href="#"><img src="assets/img/circle-arrow.svg" class="icon-svg"></a>');
	var spanError = $('<span class="col-xs-12 hidden-on text-center">Este campo es obligatorio</span>');

	container.append(row);
	row.append(img);
	row.append(h1);
	row.append(inputGroup);
	inputGroup.append(input);
	inputGroup.append(linkSubmit);
	inputGroup.append(spanError);

	setTimeout(function(){
		inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
	}, 2000);

	linkSubmit.on('click', function(e) {
		if (input.val().length != 0) {
			spanError.removeClass("hidden-off");
			spanError.addClass("hidden-on");
			sector = input.val();
			state.screenView = "Seleccionar cliente";
			update();
		} else if (input.val().length == 0) {
			spanError.removeClass("hidden-on");
			spanError.addClass("hidden-off");
		}

  });

	jQuery.fn.NumberOnly = function() {
		return this.each(function() {
				$(this).keydown(function(e) {
						const key = e.charCode || e.keyCode || 0;
						return (
								key == 8 || key == 9 ||
								key == 110 || key == 190 ||
								(key >= 35 && key <= 40) ||
								(key >= 48 && key <= 57) ||
								(key >= 96 && key <= 105));
				});
		});
	};
	input.NumberOnly();

	return container;
}

function InicioForm(update) {
	var container = $('<div class="text-center vertical-center"></div>');
  var row = $('<div class="row"></div>');
  var img = $('<img src="assets/img/Group.png" class="col-xs-10 col-sm-6 col-sm-offset-3 col-xs-offset-1">');
	var h3 = $('<h3 class="col-xs-12 col-sm-6 col-sm-offset-3">Es momento de compartir el dispositivo con tu cliente</h3>');
	var btnIniciar = $('<div class="col-xs-12"><button type="button" class="btn col-md-2 col-md-offset-5 btn-lg btn-blue">Iniciar</button></div>');

  container.append(row);
  row.append(img);
  row.append(h3);
	row.append(btnIniciar);

	btnIniciar.on('click', function(e) {
		state.screenView = "question-1";
		update();
	});
	return container;
}

var documento = "";
var codigoCliente =  "";
var identificadorCliente = 6565;
var tipoUsuario = "";
var sector = null;
var fechaEvaluacion = "fecha";
var sumaX = 0;
var sumaY = 0;
var pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8 = 0;
var option1,option2,option3,option4,option5,option6,option7,option8 = "";
var idChecked1, idChecked2,idChecked3,idChecked4,idChecked5,idChecked6,idChecked7,idChecked8 ="";

var perfil;
var matrizLength = 4*8;
var matriz=new Array(matrizLength);

  function prueba(id) {
    for (i = 0; i < matrizLength; i++) {
      matriz[i] = new Array(3);
    }
    for (i = 0; i < matrizLength; i++) {
      for (e=0; e < matrizLength; e++) {
        matriz[i][e] = i +","+ e;
      }
    }
    comparar(0,7,0,4, "defensivo",id);
    comparar(0,5,5,12, "defensivo",id);
    comparar(0,3,13,20, "defensivo");

    comparar(8,17,0,4, "altamente conservador",id);
    comparar(6,15,5,12, "altamente conservador",id);
    comparar(4,13,14,20, "altamente conservador",id);
    comparar(0,11,22,28, "altamente conservador",id);
    comparar(0,9,30,32, "altamente conservador",id);

    comparar(19,31,0,4, "conservador",id);
    comparar(17,31,6,12, "conservador",id);
    comparar(15,25,14,20, "conservador",id);
    comparar(13,23,22,28, "conservador",id);
    comparar(11,21,30,32, "conservador",id);

    comparar(27,31,14,20, "moderado",id);
    comparar(25,27,22,28, "moderado",id);
    comparar(23,25,30,32, "moderado",id);

    comparar(29,31,22,28, "agresivo",id);
    comparar(27,31,30,32, "agresivo",id);
  }

  function comparar(valorxInicial,valorxFinal,valoryInicial,valoryFinal, parametroPerfil,id) {
    for (i = valorxInicial; i <= valorxFinal; i++) {
      for (e = valoryInicial; e <= valoryFinal; e++) {
        var valor = sumaX + "," + sumaY
        if(matriz[i][e] == valor){
          perfil = parametroPerfil;
        }
      }
    }
  }

function Nav(update) {
	var header = $('<header></header>');
  var nav = $('<nav class="navbar navbar-default navbar-fixed-top">');
  var container = $('<div class="container">');
  var navHeader = $('<div class="navbar-header">');
  var button = $('<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">');
  var span1 = $('<span class="icon-bar"></span>');
  var span2 = $('<span class="icon-bar"></span>');
  var span3 = $('<span class="icon-bar"></span>');

  header.append(nav);
  nav.append(container);
  container.append(navHeader);
  navHeader.append(button);
  navHeader.append(span1);
  navHeader.append(span2);
  navHeader.append(span3);

  var navbarCollapse = $('<div class="navbar-collapse" id="myNavbar">');
  var ul = $('<ul class="nav navbar-nav navbar-right text-uppercase">');
  var li1 = $('<li><a href="#">acerca de inteligo sab</a></li>');
  var li2 = $('<li><a href="#">productos y servicios</a></li>');
  var li3 = $('<li><a href="#">mercado al día</a></li>');
  var li4 = $('<li><a href="#">servicio al cliente</a></li>');

  container.append(navbarCollapse);
  navbarCollapse.append(ul);
  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  ul.append(li4);

  // <header>
	// 		<nav class="navbar navbar-default navbar-fixed-top">
	// 			<div class="container">
	// 				<div class="navbar-header">
	// 					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
	// 						<span class="icon-bar"></span>
	// 						<span class="icon-bar"></span>
	// 						<span class="icon-bar"></span>
	// 					</button>
	// 				</div>
	// 				<div class="navbar-collapse" id="myNavbar">
	// 					<ul class="nav navbar-nav navbar-right text-uppercase">
	// 						<li><a href="#">acerca de inteligo sab</a></li>
	// 						<li><a href="#">productos y servicios</a></li>
	// 						<li><a href="#">mercado al día</a></li>
	// 						<li><a href="#">servicio al cliente</a></li>
	// 					</ul>
	// 				</div>
	// 			</div>
	// 		</nav>
	// 	</header>

	return header;
}

function Question1(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:0%"><span class="sr-only">80% Complete</span></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+ state.questions.pregunta1.pregunta +'</h3>');

	var anchorA = $('<a href="#collapse" data-toggle="collapse"></a>');
	var divA = $('<div class=""></div>');
	var labelA = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" id="question1-a" data-option="a" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.a.valor +'">');
	var collapseA = $('<div id="collapse" class="collapse">Seguridad </div>');

	var divB = $('<div class=""></div>');
	var labelB = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" id="question1-a" data-option="b" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.b.valor +'">');

	var divC = $('<div class=""></div>');
	var labelC = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" id="question1-b" data-option="c" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.c.valor +'">');

	var divD = $('<div class=""></div>');
	var labelD = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.d.texto+'</label>');
	var inputD = $('<input type="radio" id="question1-c" data-option="d" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.d.valor +'">');

	var divE = $('<div class=""></div>');
	var labelE = $('<label class="lbl-question">'+state.questions.pregunta1.opciones.e.texto+'</label>');
	var inputE = $('<input type="radio" id="question1-d" data-option="e" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.e.valor +'">');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);
	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)
	form.append(divD);
	divD.append(inputD,labelD);
	form.append(divE);
	divE.append(inputE,labelE);

	form.append(btn);

	$(function(){
	  	$('form input[type=radio]').change(function() {
	  			btn.prop('disabled', false);
	  	});
	  });

	btn.on('click', function(e) {
		 pregunta1 = $("input[name='option-1']:checked").val();
		 option1 = $("input[name='option-1']:checked").attr('data-option');
		 idChecked1 = $("input[name='option-1']:checked").attr("id");

		 //option1 = option.slice(-1);
			if(pregunta1){
				sumaX += parseInt(pregunta1);
				console.log(sumaX);
			}
			state.screenView = "question-2";
			update();
	});
	return container;
}

function Question2(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:12.3%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta2.pregunta +'</h3>');

	var divA = $('<div class=""></div>');
	var radioA = $('<label><input type="radio" data-option="a" id="question2-a" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.a.valor +'">'+state.questions.pregunta2.opciones.a.texto+'</label>');
	var divB = $('<div class=""></div>');
	var radioB = $('<label><input type="radio" data-option="b" id="question2-b" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.b.valor +'">'+state.questions.pregunta2.opciones.b.texto+'</label>');
	var divC = $('<div class=""></div>');
	var radioC = $('<label><input type="radio" data-option="c" id="question2-c" name="option-2"  class="option-input radio" value="'+ state.questions.pregunta2.opciones.c.valor +'">'+state.questions.pregunta2.opciones.c.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);
	console.log(option1);
	console.log(idChecked1);
	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		 pregunta2 = $("input[name='option-2']:checked").val();
		 option2 = $("input[name='option-2']:checked").attr('data-option');
		 //option2 = option.slice(-1);
			if(pregunta2){
				sumaX += parseInt(pregunta2);
				console.log(sumaX);
			}
			state.screenView = "question-3";
			update();
	});

	return container;
}

function Question3(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:24.6%"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var h3 = $('<h3>'+state.questions.pregunta3.pregunta +'</h3>');

  var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" data-option="a" id="question3-a" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.a.valor +'">'+ state.questions.pregunta3.opciones.a.texto +'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" data-option="b" id="question3-b" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.b.valor +'">'+ state.questions.pregunta3.opciones.b.texto +'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio"  data-option="c" id="question3-c" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.c.valor +'">'+ state.questions.pregunta3.opciones.c.texto +'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio"  data-option="d" id="question3-d" name="option-3"  class="option-input radio" value="'+ state.questions.pregunta3.opciones.d.valor +'">'+ state.questions.pregunta3.opciones.d.texto +'</label>');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta3 = $("input[name='option-3']:checked").val();
		option3 = $("input[name='option-3']:checked").attr('data-option');
		// option3 = option.slice(-1);
      if(pregunta3){
				sumaX += parseInt(pregunta3);
				console.log(sumaX);
      }
		state.screenView = "question-4";
		update();
	});

	return container;
}

function Question4(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:36.9%"></div>');

	var h3 = $('<h3>' + state.questions.pregunta4.pregunta +'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
  var divA = $('<div class=""></div>');
	var radioA = $('<label><input type="radio" id="question4-a" data-option="a" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.a.valor +'">'+ state.questions.pregunta4.opciones.a.texto +'</label>');
	var divB = $('<div class=""></div>');
	var radioB = $('<label><input type="radio" id="question4-b" data-option="b" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.b.valor +'">'+ state.questions.pregunta4.opciones.b.texto +'</label>');
	var divC = $('<div class=""></div>');
	var radioC = $('<label><input type="radio" id="question4-c" data-option="c" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.c.valor +'">'+ state.questions.pregunta4.opciones.c.texto +'</label>');
	var divD = $('<div class=""></div>');
	var radioD = $('<label><input type="radio" id="question4-d" data-option="d" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.d.valor +'">'+ state.questions.pregunta4.opciones.d.texto +'</label>');
	var divE = $('<div class=""></div>');
	var radioE = $('<label><input type="radio"  data-option="e" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.e.valor +'">'+ state.questions.pregunta4.opciones.e.texto +'</label>');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	container.append(form);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta4 = $("input[name='option-4']:checked").val();
		option4 = $("input[name='option-4']:checked").attr('data-option');
		// option4 = option.slice(-1);
      if(pregunta4){
				sumaX += parseInt(pregunta4);
				console.log(sumaX);
      }
		state.screenView = "question-5";
		update();
	});

	return container;
}

function Question5(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:48.2%"></div>');

	var h3 = $('<h3>'+state.questions.pregunta5.pregunta +'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
  var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" id="question5-a" data-option="a" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.a.valor +'">'+ state.questions.pregunta5.opciones.a.texto +'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" id="question5-b" data-option="b" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.b.valor +'">'+ state.questions.pregunta5.opciones.b.texto +'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" id="question5-c" data-option="c" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.c.valor +'">'+ state.questions.pregunta5.opciones.c.texto +'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" id="question5-d" data-option="d" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.d.valor +'">'+ state.questions.pregunta5.opciones.d.texto +'</label>');
  var divE = $('<div class=""></div>');
	var radioE = $('<label><input type="radio" id="question5-e" data-option="e" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.e.valor +'">'+ state.questions.pregunta5.opciones.e.texto +'</label>');
	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');

	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta5 = $("input[name='option-5']:checked").val();
		option5 = $("input[name='option-5']:checked").attr('data-option');
		// option5 = option.slice(-1);
      if(pregunta5){
					sumaY += parseInt(pregunta5);
					console.log(sumaY);
      }
		state.screenView = "question-6";
		update();
	});
	return container;
}

function Question6(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:60.5%"></div>');

	var h3 = $('<h3>'+state.questions.pregunta6.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
	var radioA = $('<label><input type="radio" id="question6-a" data-option="a" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.a.valor +'">'+state.questions.pregunta6.opciones.a.texto+'</label>');
	var divB = $('<div class=""></div>');
	var radioB = $('<label><input type="radio" id="question6-b" data-option="b" name="option-6"  class="option-input radio" value="'+ state.questions.pregunta6.opciones.b.valor +'">'+state.questions.pregunta6.opciones.b.texto+'</label>');
	var divC = $('<div class=""></div>');
	var radioC = $('<label><input type="radio" id="question6-c" data-option="c" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.c.valor +'">'+state.questions.pregunta6.opciones.c.texto+'</label>');
	var divD = $('<div class=""></div>');
	var radioD = $('<label><input type="radio" id="question6-d" data-option="d" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.d.valor +'">'+state.questions.pregunta6.opciones.d.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta6 = $("input[name='option-6']:checked").val();
		option6 = $("input[name='option-6']:checked").attr('data-option');
		// option6 = option.slice(-1);

			if(pregunta6){
				sumaY += parseInt(pregunta6);
				console.log(sumaY);
			}
		state.screenView = "question-7";
		update();
	});

	return container;
}

function Question7(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:72.9%"></div>');


	var h3 = $('<h3>'+state.questions.pregunta7.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" id="question7-a" data-option="a" name="option-7" class="option-input radio" value="'+ state.questions.pregunta7.opciones.a.valor +'">'+state.questions.pregunta7.opciones.a.texto+'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" id="question7-b" data-option="b" name="option-7" class="option-input radio" value="'+ state.questions.pregunta7.opciones.b.valor +'">'+state.questions.pregunta7.opciones.b.texto+'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" id="question7-c" data-option="c" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.c.valor +'">'+state.questions.pregunta7.opciones.c.texto+'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" id="question7-d" data-option="d" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.d.valor +'">'+state.questions.pregunta7.opciones.d.texto+'</label>');
  var divE = $('<div class=""></div>');
  var radioE = $('<label><input type="radio" id="question7-e" data-option="e" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.e.valor +'">'+state.questions.pregunta7.opciones.e.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta7 = $("input[name='option-7]:checked").val();
		option7 = $("input[name='option-7']:checked").attr('data-option');
		// option7 = option.slice(-1);
			if(pregunta7){
				sumaY += parseInt(pregunta7);
				console.log(sumaY);
			}
		state.screenView = "question-8";
		update();
	});

	return container;
}

function Question8(update) {
	var container = $('<div class="container-fluid question"></div>');
	var divAzul = $('<div class="helper hidden-xs "></div>');
	var logoDiv = $('<div class="logo-div"></div>');
	var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
	var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

	var divLoad = $('<div class="loading-div"></div>');
	var loading = $('<div class="progress "></div>');
	var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:86.2%"><span class="sr-only">100% Complete</span></div>');

	var h3 = $('<h3>'+state.questions.pregunta8.pregunta+'</h3>');
	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');
	var divA = $('<div class=""></div>');
  var radioA = $('<label><input type="radio" id="question8-a" data-option="a" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.a.valor +'">'+state.questions.pregunta8.opciones.a.texto+'</label>');
  var divB = $('<div class=""></div>');
  var radioB = $('<label><input type="radio" id="question8-b" data-option="b" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.b.valor +'">'+state.questions.pregunta8.opciones.b.texto+'</label>');
  var divC = $('<div class=""></div>');
  var radioC = $('<label><input type="radio" id="question8-c" data-option="c" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.c.valor +'">'+state.questions.pregunta8.opciones.c.texto+'</label>');
  var divD = $('<div class=""></div>');
  var radioD = $('<label><input type="radio" id="question8-d" data-option="d" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.d.valor +'">'+state.questions.pregunta8.opciones.d.texto+'</label>');
  var divE = $('<div class=""></div>');
  var radioE = $('<label><input type="radio" id="question8-e" data-option="e" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.e.valor +'">'+state.questions.pregunta8.opciones.e.texto+'</label>');

	var btn = $('<button type="button" class="btn btn-primary btn-lg">Siguiente</button>');
	btn.prop('disabled', true);

	container.append(divAzul);
	divAzul.append(logoDiv);

	divAzul.append(divLoad);
	divLoad.append(loading);
	loading.append(loadingBase);
	logoDiv.append(img,h2);
	container.append(form);

	form.append(h3);
	form.append(divA);
	divA.append(radioA);
	form.append(divB);
	divB.append(radioB);
	form.append(divC);
	divC.append(radioC)
	form.append(divD);
	divD.append(radioD);
  form.append(divE);
  divE.append(radioE);
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta8 = $("input[name='option-8']:checked").val();
		option8 = $("input[name='option-8']:checked").attr('data-option');
		

		// option8 = option.slice(-1);
      if(pregunta8){
					sumaY += parseInt(pregunta8);
					console.log(sumaY);
      }
		state.screenView = "profile";
		update();
	});

	return container;
}

function Register(update) {
  var container = $('<div class="form-group"></div>');
  var div1 = $('<div class="profile"></div>');
  var input1=$('<input type="text" name="name" placeholder="Ingrese su nombre" id="nombre"><br>');
  var input2=$('<input type="text" name="lastname" placeholder="Ingrese sus apellidos" id="apellidos"><br>');
  var birthday=$('<input type="date" name="birthday" placeholder="Ingrese su fecha de nacimiento" id="nac"><br>')
  var radioF = $('<label><input type="radio" name="gender">Femenino</label><br>');
  var radioM = $('<label><input type="radio" name="gender">Masculino</label><br>');
  var checkbox=$('<label><input type="checkbox" name="email" value="enviarEmail" id="terminos">Acepto los <a>Terminos y Condiciones</a></label><br>')
  var input3=$('<input type="email" name="email" placeholder="Ingrese su email" id="email-reg"><br>');
  var btn = $('<button type="button" class="btn btn-primary" id="registrarse">ACEPTAR</button><br>');

  container.append(div1);
  div1.append(input1);
  div1.append(input2);
  div1.append(birthday);
  div1.append(radioF);
  div1.append(radioM);
  div1.append(checkbox);
  div1.append(input3);
  div1.append(btn);


  btn.on('click', function(e) {
    alert('Registro exitoso')
      //state.screenView = null;
      //update();
    });

  return container;
}

function Result(update) {
	var container = $('<div class="nav text-center"></div>');
	var h3 = $('<h3>¿Quieres saber como invertir?</h3>');
  var p = $('<p id = "#resultado"></p>');
	var btn = $('<button type="button" class="btn btn-primary">conozca su perfil</button>');

	container.append(h3);
	container.append(btn);
  alert('llegue hasta aqui ');
  // console.log(p.id);
  prueba();
	// btn.on('click', function(e) {
	// 	state.screenView = "question-1";
	// 	update();
	// });
	return container;
}

var render = function(root) {
  root.empty();
  var wrapper = $('<div class="wrapper"></div>');
  //wrapper.append(Nav(_ => render(root)));
	switch(state.screenView) {
	case null:
		wrapper.append(Home(_ => render(root)));
		break;
  case "Seleccionar cliente":
		wrapper.append(SeleccionarCliente(_ => render(root)));
		break;
  case "Iniciar formulario":
		wrapper.append(InicioForm(_ => render(root)));
		break;
	case "question-1":
		wrapper.append(Question1(_ => render(root)));
		break;
	case "question-2":
		wrapper.append(Question2(_ => render(root)));
		break;
  case "question-3":
    wrapper.append(Question3(_ => render(root)));
    break;
  case "question-4":
    wrapper.append(Question4(_ => render(root)));
    break;
  case "question-5":
    wrapper.append(Question5(_ => render(root)));
    break;
  case "question-6":
    wrapper.append(Question6(_ => render(root)));
    break;
  case "question-7":
    wrapper.append(Question7(_ => render(root)));
    break;
  case "question-8":
    wrapper.append(Question8(_ => render(root)));
    break;
  case "profile":
    wrapper.append(Profile(_ => render(root)));
    break;
  case "description":
    wrapper.append(Description(_ => render(root)));
    break;
  case "register":
    wrapper.append(Register(_ => render(root)));
    break;
	}
  root.append(wrapper);
}

var state = {
  cliente: null,
	questions: null,
	screenView: null,
  perfil: ""
}

$(document).ready(function() {
  getJSON('/api/preguntas', (err, json) => {
  state.questions = json;
  var root = $('.root');
  render(root);
  });

	$('.collapse').collapse({
  toggle: true
	})
});
