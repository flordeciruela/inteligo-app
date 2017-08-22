/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
var perfilesData = [{
        perfil: 'Defensivo',
        descripcion: "",
        retorno_result: "",
        retorno_texto: "Para inversionistas que buscan la seguridad en sus inversiones.",
        retorno_anual: "1,5%",
        retorno_mejor: "5,4%",
        retorno_peor: "0,2%",
        grafico: "data:image/png;base64,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" +
            "5/92bFVXtzerw7gXABCBD8nIDu/+bPRU9f/udy1YsUFAOGh5aRV1alVPzerTLgLgX7R0kWQ2CNmqebY2Dwg3tgPcroJ5c+j25nW88FeqcF4BgJ9Q4UOi2BFm73/zqz76drLWbdkpIJJcWr2s7rq+gW6+IuFrjgAgElHhQ4L8vWKjXv/i5+jjsYBIZMfy2fXE28P0wI2NvJllObJmEgC4igof4uXHKfP15qBx+nn6QgGuyZIpgzq0qKOH2zah3QvASVT4EKeDh49q4PdT1WfweO/Qe8BVNi7ona8neJdt8ujS7nI1qF5GAOAKAh/OsGn7HvWNeuD7YNiv2r57vwA/CWzysFM8urRronZXXSwAiHS0dBFt/ZZdevHTH/Xe0IkCcFKxArnVvcPV8T6bFADCUWrB9zZu2637ew9WkaufIOwBp1mzaYfuevELlWjeTR99+5sAIBIR+HzMgt4Dvb9SoSu76t0hEwUgbqs3blfnF75QyRbd9PF3kwUAkYTA50MW9B567WuVatFdfYdMEID4W7Vhu+58/nPv/mMDxwEgEhD4fGTLjr16+PUh3gPV21+N16EjRwUgcVZu2KZOzw307k+fjpwiAAhnBD4fsPEqPfuN8lpRfQb/QtADkpEFvw7Pfqby1/fQqElzBQDhiLEsjhswaoq6vzdCG7buEoDgWbx6s1p0edc7tu3dJ2/WhaUKCQDCBRU+R02fv1KVbnxGdzzzGWEPCCE7sq1im2e8DR62jAIAwgGBzzG2oPz6rh/okttf1vzlGwQgZdgIl/NbPaWXPv1RAJDSCHyO2HvgkB576xtvnd7w8bMFIOXZ/bLbu995M/y+HvunACClEPgcYDP0bKfg61/8LADhx2b43dTtI6/ybsstACDUCHwR7K8la1X5pme9UzK27donAOHNwp6FvrtfHORV/wAgVAh8EcjGrDzeZ5iqtX1e85atF4DI0m/4JJW7roe+nzxPABAKBL4I89vsparQuqde+3ysAEQuO/Gm2cN9dcMT/djNCyDoCHwRYve+g95w1wZ3vuatBwLghm9+maVy1/fQJyM5pg1A8BD4IsDQcTO99g/HNwFu2rX3gDo+O9B7Qrdi/TYBQHIj8IWxzTv2eC2fNk9+6L0OwG22ZKN0y+7qPXCMACA5EfjClJ3JWf76nizqBnzoibeHq26H3izfAJBsCHxhZt+Bw95xaHYmp7V5APjTlLnLVenGZ/X5D9MEAElF4Asjf/y9ShVvfEYDRrFWD8DJkzra9/jUOy6RJ4AAkoLAFyaeem+EarV/iRYOgDPYcYk2jmnSrKUCgMQg8KUw25FXvd3zeuGTHwQAcdm0fY8u7fyaHn1zqAAgoQh8KeiDYZNUKaqFO3vxWgFAfLwxaJwuuKGXFq7cKACILwJfCth/8LBadnlP97w0SAcOHREAJISFvertXlD/EQxrBhA/BL4QW7pmi6pFtXBHTpojAEisQ0eOqtNzA9Xuqf4CgHMh8IWQhTwLexb6ACA5fPnTDFW+6Vmt2bRDABAXAl+IPPz6EK+Na+1cAEhO85at90LfuBkLBQCxIfAFme2su/i2l9Rn8C8CgGDZve+gLr/3LfX6cJQA4HQEviCySfn2rHvGglUCgFB45sPRXvCzAAgAAQS+IHnt87HeWZhbd+4VAISStXbtyaa1egHAEPiC4OZuH+vxPsMEACnFNnHY6T12SgcAEPiSkbVQ6nd6VV+N/UMAkNJsdIudw9t74BgB8DcCXzKxI9Ls2fTkv5YJAMLJE28P1209PxUA/yLwJYPp81fqoltf0JI1mwUA4Wjg99PU6O43tO8Ao6EAPyLwJZGtj7nk9pe1c88BAUA4m/DnYl18+0tav2WXAPgLgS8JXvzkR299DABEir9XbFSNW17QzIWrBcA/CHyJZOthur/3nQAg0mzesUf1Or6q0b/NFQB/IPAlkO3EtXUwth4GACKV7eBt/si7evPLcQLgPgJfAmzfvV91OrzirYMBABd0eWMoc0MBHyDwxdOWHXtV+46XvfUvAOASOxmo8wtfCIC7CHzxYBPrbSfu0jVbBAAu+ujb35jVBziMwHcOKzdsi6rsveK9BACX2dpkOxoSgHsIfGdh7Vur7G3YyswqAP5gR0M2e7ivALiFwBeHuUvXqW7H3t7aPQDwk+8nz1PT+97SwcNHBcANBL5YTJu3QvU7vapdezk9A4A//Tx9oZrc8yZHsQGOIPCd5vc5y9Xk3re0Z/8hAYCfTZm7XI3veUN7D/D7EIh0BL4YrI175QN9tP8gz2gBwMxYsEpX3v+2N6gZQOQi8P1r4cqNanjXG7QvAOA0Vulr2eU9AYhcBD6dHL1yaefXtWPPfgEAzjR22t/eUWwAIpPvA9/azTt16Z2vaetOduMCwNmM/m2u2nZnTh8QiXwd+DZu2+2FPQt9AIBzGzzmD93xzGcCEFl8G/isfXtp59c4QQMAEmjAqCl6+PUhAhA5fBn4du876G3Q4GxcAEicPoN/UY8PRgpAZPBl4Lvygbe9ESwAgMR77uPv9f43vwpA+PNd4Lup20feSRoAgKS79+Uvvc0cAMKbrwKftR++HvunAADJp82TH9I1AcKcbwLfZ6Oneu0HAEDyOnj4qK64v4/WbWHiARCufBH4Js1aqtt7DRAAIDg2bd+jpvf14RxyIEw5H/gWrdqk5o/0FQAguOyIyhacxgGEJacD3+Yde9Tk3jd5xgkAIfLrrCVq91R/AQgvzga+/QcP6/J739L6LbsEAAidL3+aoef7/yAA4cPZwNfq0fc1b9l6AQBC7+n3R3jBD0B4cDLwPfnOcI2bsVAAgJRjrd2ZC1cLQMpzLvB9P3meXvlsjAAAKa/lo+9p++79ApCynAp8y9dt9U7SAACEB1tH3brrBwKQspwJfAcOHVGzh/tq34HDAgCEj4kzl3hr+gCkHGcC3609PvFm7gEAwo/t2h01iTN3gZTiROB7+6vxGj5+tgAA4avtUx9r9cbtAhB6ER/4ps1boYde+1oAgPBmS25adHlPAEIvogPflh17vR1gAIDIMHfpOm8JDoDQiujAZ2HPQh8AIHJ88cN0vf/NrwIQOhEb+GzHl7VzAQCR596Xv+Q0JCCEIjLwWdDjnEYAiGw3PNFPAEIj4gLf/oOH" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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",
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
        grafico: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvMAAAHhCAYAAADj8zHaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAFClSURBVHgB7d0HeFRl2sbxGwi9BQIh9BIm9N57U0SpCqirYpddu669l7Xrqquon6hYACsoKigKSO899ITeewkQOnzzHpgYQoBkMjM5c87/d13vNcnMZDLJruGeZ573eXOc8hKAgNq6fa82bNylDZt2WpfrN3ovN3k/ty53atfuAwq00jXaK9AKF8yjqGL5FRWZT9FRBRRTsqBKlShoXcaUKJDycd48uQQA8M+aDfv01U9LNGXOJq3blKTjJ04qsnBe1a5WQt06xurqK6ops8aOHas///wz5fNKlSrp1ltvVb58+TL09UOHDrUur7/+egXLvn379MEHH2jv3r3n3Gae5+23364KFSooK9avX68hQ4bohhtuyNJjBepxDPO/zbZt27L8ux04cKD69++vCAHIlCNHjmm9L5ifCelnhXVveD967LicYP/Bo9Zau3HfBe9XrEg+lSrpDfvecF/qTNCvFVdCtT0lrLAPAEjfmCnrdNdzY3XCG+BT27v/iBXuzZowY4M+fPGSDD3e4cOHNWjQIOvjF198MSW8m3D+9ttv6+6771bRokUv+jjBDPGpmed3zz33ZDkgn4953CeffFJORpgHLuDQoaOat3C1d605vRasVsKqLcLZ9iQdttbyVbvPuc1U9k2orxUXdeayhMqXLiwAcLuDh47p8TcnnRPk0xo9aY3e/XyuHrilkS5mypQp1mXaKnzv3r2tkD979mxdcsklKaF/7dq1Kffp3LmzdZuRujJ/sfv6+Crt3bt3V506dazrzNd+/fXX1n39Dexpv3+PHj00a9Ys9enTx3phkvZ7msp3QkKC9TvYvn27VVG/+uqrrXcq4uLiznre5ucsVaqUdd2iRYs0ePDglNsiIyPP++In7bsK9erVS3kBZL6/qeSb5+17zr7fV+p3TMxj+P53Sn192nclLnSbQZgHzjh69PiZ0L465XLZik1C1uzac0gTZ22wlk8R8/axJyqlel+3eklVLFtEAOAmP/2RqD37Dmfovt/8uvyiYd6ERxNiTWBN205jPr/rrrtS7mfCsQmpb7zxhnWdCYyTJk2yvjZ1UMzMfc19KlasqPj4+JRgbcK0ER0dLX8NHz7cujTvNBjm+aTXmnMhefLksZ6v+f20bt3a+n2YMG3aXdq0aWMF+R9++CHlXQJfWB85cuQ571KkfdHi+x2Z34vvhcLy5cvVr18/63fue+zULyRSt9n4Xnz43kkx9zcvQMwLCfOiwLxweeqpp6zfb+rbfAjzcKUTJ096q+xrzqq6L166XgiNJO/bx9PmbbaWT7Gi+VS/RrTq14xWg5qnLwsVyC0AcKp5S7Zl+L47didr9YZ9qlL+/C0yR44csUKuqTRfSOpg72OCpgmNWbmvUbduXf36669W4DXh04RUE47P16tvgvCAAQPOud7X429+pnXr1lnB2fcYJnybcJxZvudtXmCY52SCsnlM80LDfO57AWL4Xpikx7y7YW7z3d88Rrdu3TRs2DA1adIk5fl7PB7rY9/Pb34naZnrzIsf8y6D7+czj2uuM98n7f+W5rbUz9MgzMMVFnmD+qw5K1PC+4JFawV7MdWp8TPWW8unasXIs8J9jdgoAYBTbNuVnKn77/S+03mhMO8P02aycOFC6+OLbY7NyH1NgDXtKSYom9Bpwqov4KbnYj3zvsp+6lYXc1/zPTLLhHbzdb4XGCYwp30XwzzvTz/91HqRYZj2mbRMVd38Hny/Cx9/npP5/ZgXYOm9oDGtOb7f58svv2xdZ6r9hHm4wvYd+zRhylKNHR+vMRPitXVb5t6Ogz2sXLfXWsN+T7A+N1NzTLBv36y82jevoLjKxQQAOC1v3rxW8DNhM23gS8sXzE0F2bR3+HrLs3pfE4xNQJ48ebJVVTahOCstNoHke24mzJt3EHwtNkbqEO8LzL59A+lJ3SMfiOd1ock9vndGzPMxPf2++/sQ5uEIx4+f0NQZK7wBfokV3ufOXy04z5GjJzRjwRZrvfbxLJWJLuQN9eXVunFZNa1XWsWLZmzkGgDYQamoApm6f4li+S94e+qw6usLT80XTk1LiAmyGZki4+srz8zEGV87i1km0Gd0HGZ6fBX51C0q5mNf5TyzUj83X4uNYX5n1apVy1BANz+Tub95Dln52Yz0fr7zMc/Nt5HZfH+fnALCVPyS9fq/QX/q2lveVSnPHerS+2W99s4IgryLbN5+QF//skx3PTtWjXsO1o0P/6aPhi7Q3MUZ70MFgOzSsFapDN+3ZPECGWqxMSHeMIEvdeA1QX7FihUplWhzmy9AmktTaT9fQM7MfQ1fO4sJzCY8Z4UJu02bNrUq/eZ7mmU2pfq+v+/dCNMy43t+5+vnT/3czAZe89ipw3jqFwlmU2raNhof0zZkWmN8k4N89//www8z/SLD9/P59hn4nscrr7xibXY1y3zsu828K2K+d+rfK5V5hI2Nm3dZ1fepM1doorcCn7CSEZE4m28ms1GhTBFvtT5GLRqUsSr35h9CALCTKy/z6J3P52Zoos0/uldXRvg2rJrw/uyzz6Zcb1pkzLx1X3g1G0p9YxjNdX379rUCpa+f3MeEzYzeN/VzMC8aTAC/WIvN+TbAGr5xjmaZdwd8P0/16tVTfg7f5lPTIvPoo49aQb1t27Yp4T6952aCsBkZaVptfMyLIPPz+L6HaaMx39+8MEhbNTe/E3N4lPmevpGRmTmUy3x/82LChHQzlcb38/n64o3UvfHmZ0l7W+rfew5OgIWdjRkffybAL9eU6cuF8wvGCbBOkT9vhFp5A70J9a0blVWVCpnfpAQAwXC+Q6NS69K2coYPjQqU1PPX/WEqyiaEBuPwqUCexhrOOAEWtjV3wWqNHD1Xv3rXkmUbBGTVoSPHNXbqOmsZzeuXPh3uG5VTvRolBQDZ5dLWFfXnF3301U9LrHcW121K0nFvsI8053FUK6FuHWN19RXVFEq+tpqLjbi8EBPkU1e+ETyEedjC+o079evvc60QbzaxA" +
            "sHk20T730/nqJYnyhvsy1kVe1O5B4BQq1y+qJ67r2XK5ydPnVLOHDmUHXxTXUy7yIVGSl7s681m0otN1EFg0GaDbJN86KgV3keOnmNV4Q8fPib4jzabrDNz7c3b2WbV9DDTHgBgX6bNpkOHDlTmEXrjJy22wrsJ8hs27RJgF2am/YDB863VsUUFXWYF+0oqXDCPAACwG3OoFGEeIWFOYLX64H+fq/nxawTY3V/T11vr7c/mWIHeVOub1S8tAADshDCPoDGnrvoq8H/+tVBAONq286C+/HGJtZrUjTnThlNJpaMLCQCA7EaYR8DNmJ2or76dqOE/z1DS/kMCnGJ2/FZrmWq9mTDR5/I4Nart/7QHAACyijCPgBk7YZG++maifhgxXYCTHTx0TN+NWm6tK9pXsUJ9+2blBQBAqBHmkWU/j5pthfjfxswX4Da/TVhtrbZNylmh3lTsAQAIFcI8/Db0+8lWiJ80bZkAt5s0e6O1Ph++WH26VPOuOOXOnVMAAAQTYR6ZcujwUSvAmzVvIVNpgLTmL9lurS+8ob63N9Cban3xovkEAEAwEOaRITt2JZ0J8ZOUsHKzAFxY4to9eu3/Zlqh3hzFfk3X6iodXVAAAAQSYR4XtHbddn317SR96Q3ym7fsFoDM2brjoN77cp6G/rxU13SrboX68qULCwDO5+TJU8qZM4eAjCDMI12Ll26wxkuaavy+pGQByJpdew/rwyELvKF+mTfQn67UVy5fVACQuGqL/m/QGGsq3Oq123T8+AkViyykhvUqq2+v5rrpuvYZfqyxY8fqzz//POf6fPny6fbbb1eFChWUVYcPH9agQYPUpk0b1alTR5m1aNEiDR48ON3bOnfurCZNmuiDDz5Q9+7drccfOnSoddv1118vnIswj7Mkrt6qAQN/12df/aUTJ04KQGDt239EA7+N1xBvqL/WhHpvtd5TqZgAuJM5XPG6W9/V8TT/5u7Ze0DjJi6y1uixC/TNoAcy/Jj16tU7J/iakD9kyBDdfffdKlo0+wsJlSpV0q233mq9yEjPk08+mfIxIf7CCPOw7D9wyBviR1tr954DAhBcyYeOadCwxVaov6bb6Up9zapRAuAeBw4e1p0PfnJOkE9rxKjZ+s+bw/XMI73lL1PtnjVrltavX59STU9dxU9buTfVcHPdihUrtHfvXuu6fv36yePxWFX5tWvXWstU0i+55JJzqu2RkZF+v3DYt2/feSvzvncFzPf28T0HtyLMQ4OGjLeq8ctWbBKA0Dp67IQG/7T0TPtNdd10VS3FVaZSD7jB199P0a7d+zN0X/OOeVbCfFomyCckJOjFF1+0QrsJ42kr9wsXLkwJ+Ob+v/76q3W7qainbrMxX/vDDz/onnvuse7rC+MjR44MaFXdF+TN83vjjTdSfo5JkyYpLi4uIC1E4Ygw72Kj/pxnVeInTF4iANnLbHj75tdl+mXsSt3Sp7a1ijHSEnC0GXMSMnzfbdv3KmHlFsVVLS1/zJ4927r0he34+Hj16dMnpc3FhHJznbmfr8pdrVq1lIBswrKp7JuvjY6OPuuxzdem7p03YbtixYoXfD6msv7ss8+edV167UGpmed61113nXWd73m5GWHeheYuWG2F+G+HTxUAezl46JgGDJ6vkX+t0i1966hfr5oC4Exbtu7N1P2379yXoTBvKupmpZa67cW02pjWmQEDBpzztaZlxV/mcT/99FOrgm6YcH4+F+uZvxjTeuP7Gf19DKcgzLvIxs27Uvri2dwK2NvaTUl67t2pp0O9t0rfpW1lAUBGpK5w+wJ206ZNz+pfD+R0m9Qh3vTVp+5zDzRfiDcvBkyL0Pbt2632IDcjzLuAGXH1/pkQz6x4ILzMjt9qrSvaV7FCfaPapQTAGUrHRGbq/tElMr+Z1IT1vn37WptTS5UqZQVtX6g3LTOBYHrvTUtOsKfOmOe7bdu2lN58nJZTcLRvhk1Ruyue05MvfE2QB8LYbxNWq+89v+iF96Zp/eaMbZgDYG/NG8dl+L6loiP97pc3Ad5U680mVVNFN2HeVOrNhlZfoDeXr7zyirWZ1R/m633tNWZTato2n0Ax3yP1czZVed/3dSsq8w7116TFViX+9zHzBcA5vvxxiUb+tVr//Edd3X5NXQEIX9dd3VovvjEsQxNtbruxo7Kid+/e1iQY38Qas8nVVLlffvnllPv4WmQuxrTomI2nptpvXiSYxzbVed+GVnOd6b33bZgN1Fx78zhmXKVvBKZ5HuZdB/OixHx/N1brExMTleOUl+AY6zbs0GvvjNAXQycI7lK6RnvBXVo2LKO7bmhgXQIIT+c7NCq1Xl2bZOrQKKcxffKmRcjNs+TTM3DgQPXv35/KvJMM/m6SXn7zRyvQA3C+afM2W8tU6O+6vr4ii+QVgPDSvUsjzZv8hv5v0BiNnbBIq9dus/a6FYsspIb1Kqtvr+a66br2citfW40J80gfYd4BTHg3Id6EeQDu8+l38Zo4c4MV6HteWlUAwosntrT++/KNKZ+bcydy5swht/NNyTHtNOYEW6SPNpswRzUePrTZwDBh3oR6TyVOkQUAJ6PNJsxRjQeQnp/HrEyp0rNBFgCcj9GUYcgE+MuufJkgDyBde5OO6JWPZuqGf4/SnEVbBQBwLirzYYRqPIDMMJtj5yzapkf7N9GtfS8+bg4AEH4I82GC3ngA/jh67IRe+mCGFi7foUfvaKqyMYUEAHAOwrzNUY0HEAi/jluleBPo+zfV5e0qCwDgDPTM2xi98QACad2mJN393Fi9/vEsa/QdACD8UZm3IarxAILp428WWlX6R+5oovo1owUACF9U5m1m5Oi5uqLPqwR5AEE1ff5m3fDQb/rqxyUCAIQvwryNvP7uz+p709vWUc4AEGzJh47p+fem6eFXJ2jPvsMCAIQfwrwNbNm2Rzf9a4Cef/V7AUCo/fhHom5+dDQz6QEgDBHms9m4iYvU45rX9f1P0wUA2WXRih26xRvovx+1QgCA8EGYz0bvf/y7unuD/OJlGwQA2e3goWN6/M1JevX/ZgoAEB4I89lgX1Ky/vXgJ3r02SE6dYrxcADs5ZNv43XHk39o/eYkAQDsjTAfYtNmrfBW41/Tl19PEADY1bhp660++vEzeOcQAOyMMB" +
            "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" +
            "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" +
            "y5M6V7n1N3/2kmRtVqVwRlSiWXw+9MsHaPGs20aaedJPd6JsHEAwZCvPzFxLm3eyyTvV0y/UdBMB/bZqUU/dOsYLUqHYpVShTWEPf7mpV0K/uWk0FC+S2Kukm6Jv++PSYTbFbdx486zpz/7x5IqzNsibwHzl2wrpP6rYcuyDMAwgGwjwuik2vQGD060V13rjh379ZLTK+ZaroB5OP6fE3J1ltN2azaOECedSzU1Xr/qZC37ZZOasnPnUfvdGlbWXN8IZkc70J8Hm91XuzGfZClfzsQpsNgGC4aJifu2C1du05ILiTqci3b11LALKucZ0YXX0FJydfjNnEunD5dqtibyr3poJvpG3LMZV8047jG2FpXgjs3HNI/32yvdVeM2jYIlttiD158pTmLt4mAAikiIvdYfa8VYJ79bvWPhvIACe4wVudHzY6wQp2OM1U5M1KzVTvM/J1aV128zDZmanOmzYjAAiUi1bm53kr83AnczhUi6YceAMEUu24ElaghzvRagMg0C4e5plk41r9rm0nAIFnJtsUyJ9bcJ/Z8RweBSCwLhjmk5KStWTZBsF9Lu1Q15piAyDwqlaMZDOsSx1IPqZlq3YJAALlgmF+9nz65d2KXnkguEx1Pioyv+A+tNoACKQLh3k2v7pSs8Ye9e3VQgCCp2xMId3Qq4bgPoR5AIF0wTA/h8q8K1GVB0Kja4dY5cyZQ3AXwjyAQLpgmOewKPepEVdW/a4hzAOhYHrnu3aoIrjL9l3JWrcpSQAQCOcN89u279PmrXsEdzFV+Tx5Lnr8AIAA6eatzsN9qM4DCJTzhvkFi6jKu03Z0sUZRwmE2KWtK1qz5+Eu8St2CACyKjEx8QJhPn6t4C5X9WimElGFBSC0aLVxn4Q1vPMNIOs8Hs/5w/z8RWsFd+nWpZEAhJ5pteEQKXdJJMwDCBAq87A0bhCrti0ZkwdkBzOmshvVeVfZk3RYO3YnCwCyKt0wv2fvAa3bQD+fm1CVB7IXrTbuQ6sNgEBIN8zPpyrvOt26NBSA7NOmSTk1rhMjuAdhHkAgpBvmabFxl8s61Vet6uUFIHvRauMuCWsJ8wCyLv0wz1hKV6EqD9hD145VVKRQHsEd2AQLIBBos3G5IoUL0C8P2ERUZH41q1dacIeENbsFAFl1Tpg/fOSYVq7mZDq3MFX5mOhIAbCHZvUJ825xIPmYNm8/IADIinPC/Lr1TLFxE6rygL00b1BGcA82wQLIqnPC/FrCvGtUrhhNmAdspmbVKFWrUlxwB8I8gKyiMu9ibVrWUO6IXAJgL/TNu8f6zUkCgKw4tzK/YbvgDo0bMAYPsCMzcx7usGHLfgFAVtBm42KN68cKgP10bFFeBfJFCM63cSthHkDW0GbjUuXKRqlBvcoCYD85cuRQU6bauMJGKvMAsojKvEs1rk+LDWBnHZtXEJzv2PGT2rrzoADAX2eF+f0HDmn3HmbeukHjBrTYAHbWsQVh3i2ozgPIirPCPFV592jdoroA2FeZUoUYUekS9M0DyIqzwjz98u5QpHB+NWvsEQB7q18zWnC+DVt4RxyA/6jMuxAtNkB4qFU1SnA+KvMA/JWYmHh2mN+8dbfgfLTYAOGhpocw7wb0zAPwl8fjOTvM79jJSXRu0KZFDQGwv1qeEoLzbaAyDyALCPMuRGUeCA958+RSbMVIwdmozAPICsK8y3hiOYgGCCf0zbtD0oGjAgB/EOZdxlMlRgDCR01abVwhaf8RAYA/CPMuU5XKPBBWarEJ1hX2UZkH4KeUMG9Ofz185JjgbJ5YKvNAOGGijTskHaAyD8A/KWGeqrw70DMPhJdiRfKpTHQhwdnomQfgL8K8y9AzD4QfqvPOR888AH8R5l2kYIG8KlO6uACEF/rmnY/KPAB/EeZdhM2vQHiKiswvOBs98wD8RZh3EVpsgPAUVYww73RMswHgr7Om2cDZ2PwKhKeoyHyCsyXtJ8wD8E9KmD94iLf4nI6xlEB4os3G+WizAeCvlDCfnExVwOkqli8pAOGneDEq8053IJlzXgD4J1WYpyrgdJFFCwpA+DGz5nPmzCE41/HjJwUA/iDMu0hk0QICEJ5otXG2Y8dPCAD8Qc+8ixSlMg+ErShabRztGJV5AH6iMu8SuXNHWIdGAQhPVOadjTAPwF+EeZegxQYIb4yndDZ65gH4IzExkTYbt2DzKxDeODjK2Y4dI8wDyDyPx0Nl3i2ozAPhrXDBPIJz0WYDwF/MmXeJokWozAPhjLDnbLTZAPAXlXmXoDIPhDfCvLMxmhKAv1LCfA4OJHE0euaB8Ebl1tl4sQbAXylhPnfuXIJzUZkHwhuVW2cjzAPwV6owHyEAgD0R9gAA6UkJ83mozDva3n3JAhC+GF3obBG5cgoA/EFl3iX27jsoAOGLnnlni8jFvjUA/qFn3iWozAPhjTYbZ4uIoDIPwD9/h/kIKvNOti+JyjwQzgjzzkabDQB/0TPvElTmgfB2nGk2jpaLyjwAP9Ez7xL0zAPhjcq8s1GZB+AveuZdgso8EN6SDhwVnIsNsAD8RWXeJY4dO66DyUcEIDxt3cG7a07GBlgA/qJn3kX20WoDhKXjJ05q555DgnPRZgPAXyl/PSKLFhScjVYbIDxt28l/u05HmAfgr5S/HkWLFhCcjU2wQHiixcb5IiLomQfgHyrzLrJuww4BCD/bdhLmnY7KPAB/pQrzVOadLnHVVgEIP1TmnY8wD8AfiYmJVObdJHHVFgEIP1vpmXe8vHmZKAcg8zweT6qe+SJU5p0ucTWVeSAcbaMy73gliuUXAPiDyryLrKQyD4SlrfTMO16J4oR5AP6hZ95FzKFRm7fsFoDwwgZY56MyD8BfVOZdhlYbIPxs3UHPvNMR5gH4K9WcecK8G7AJFggv6zYl6eixE4KzEeYB+Is2G5dhPCUQXpau3CU4XxRhHoCfUsJ8oYL5lDcPo7Gcjk2wQHhZRph3BSrzAPx11ikVZUoXF5yNnnkgvFCZdwfCPAB/pQnzxQRno2ceCC+EeecrVjSfcuXKIQDwB5V5F5o2c4UA2N+W7Qe0lQOjHI+qPICsOCvMl40hzLvBtFkJAmB/y1dzLoQbsPkVQFbQZuNC06nMA2FhBWHeFajMA8gK2mxciMo8EB6WryLMuwFhHkB" +
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
        grafico: "data:image/png;base64,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" +
            "fpUN25zJc3jwAgO13cvrrGfdxTn3632Dlb6bpN+3TMF9xLRhdSw7pl1e3CWrrmsrrKSf62l7ONgDwTC+qpK9fIPoR15LoTJ06kBPSZM2c5gd0vcfU8Nby4ixZtoRcdWWdnExz+U4KzxVYp4au0/x7aWzTM/C8sADibGlVL6JkH2qZ8f+LESeXNpWKBfyqKtXOcaeTi2e5vizXPNpEGoUEbDHLNypWrfCF9tmbMmOF8nZFKF9+p+K1ZW43tZrTBZF2rxhWcFpkuHWJVtWK0AADIbbTBIFfs3r3bqZ5bQLdqeiAOrvcF0YLBH/0DgZq1YKuzvfLBTCe0O60yvqp74UL8EwkAyF38JkKOmD59hhPQ7fLAgQNB3XdPwizVu7Cjlm07LCA7JSef0JhfVjtb5ZhiKaH93GaVBABAbiCsI9tYFX3ixIn65ZdJzgilzMp7Illl8+zzfcUZK5FzNm07oI+/WeRsTc8p/0fFvbpqVQv+dNMAAGQWYR0ht3LlSl9In+QL6RO1b98+hcLRTYulfE0F5Ibflmx3tlcGzHSmNvTybSxKBQBkt4SEBMI6Qsd60a2SPnnyFIXazuUzVev887RqB60wyF3+ky9dflEtJ7S3a1FZAABkh7i4OMI6ssZmtVoV3UL64sVLlF3yHT+smPwHtEr5BISDkRNWOZu1x1hov6itd0/cAQDIPoR1ZMrmzVv+6EefqK1btyonJG9d5vuzgYBwMm7KWmfr2KqKE9q7dqopAABChbCOoCxatDglpCclJSknbV86XdXbtdS6XbTCIPzEz9robHaWQutr73FpHQEAkFWEdQRk1qzZGjt2rNOXnlvyJx9QuUKHtE6cIh7hyz+z/dPvljih3bYCBfIKAIDMIKzjjObOnacffhir6dOnKxyc2J7g+5OKJcLfwuU7nM1fabctulhBAcCJEyeVNy+FJwSGsI50zZ8/3wnpU6dOUzjZuniaKrVprM17jwiIBAlr9+iFd6efEtrLlYkSAO9IWLVF7w36SeMnLtTqtdt07NhxlSpZTM2b1FCvK8/VzddfEPBjjR8/XuPGjTvt+sKFC+uOO+5QtWpZX+xuwyMGDRqkDh06qFGjRgrWwoULNXjw4HRv69Kli1q1aqV33nlH3bt3dx7/s88+c27r3bu3cDrCOk6xcOEip90lPn6ywlGBpERVKHLUF9YFRJQNW/brvx/O1mcjl+rmqxs4W+FC/BMMuN2osXN0/e2v+wL6iVOu37P3gCZMWuhsY8f/ps8HPRTwYzZp0uS0YGshfsiQIbr33ntVokQJ5bbY2FjddtttzkFEep588smUrwnpZ8ZvCjiWLFniVNJtDGO4y7N7te/PGgIi0dYdB/Xy+zM14qeVurlHA13btZ4AuNOBg0d098MfnBbU0xo+Zpaee/UbPf1oD2WWVatnzpyp9evXp1TDU1fh01berZpt1y1fvlx79/5eAbvxxhudud5WVbczj9tmlfDOnTufVi0vWbJkpg8MEhMTM6ys+6v6qc987n8NXkVY97hly5Y7lfQJE35WpNi8cIrKNq+rnQdydhoNEErLVu/WE69O1nBfaL/l6oa6pGOsALjL0K+maNfu/QHt++GnP2cprKdlQX3FihXq37+/E8otbKetvFvLqz/A2/6jRo1ybreKeOo2GLvvsGHDdN999zn7+sP26NGjQ1oV9wd1e32vvPJKys8RHx+vOnXqhKTFJxIR1j3KTl/7ww8/6qefflKkKXh0t8pHH/eFdQERb8ZvW5zNwvrNvtB+btOKAuAO02evCHjfbdv3asXKLapTO3P/Bsya9fu0Nn+YXrBggXr27JnShmKh266z/fxV6rp166YEYAvDVpm3+5YvX/6Ux7b7pu5dtzBdvXr1M74eq4z369fvlOvSa99JzV7rPffcc8p1/tflZYR1j9m5c6e++eZb39HwGEWy/InrfH9WEeAWP8avdTZri7H2mHo1SwtAZNuyNbgFVtt3JgYU1q0ibltqqdtSrBXGWlvefvvt0+5rLSWZZY87cOBApwJuLHxn5Gw962djrTH+nzGzj+EWhHUPGTPmeyeo79ixQ5Fu6+Kpiq7fW/uPHBPgJl+OWaYR41emLEKtUK6oACC11BVqf4Bu3br1Kf3joZwOkzqkW1976j7zUPOHdAv71sKzfft2p33HywjrHmAfe1lIt5npbpH/wFbVLinN2yrAdY4cPab3P59/SmhncgwQeSpWKBnU/uXLBr9Y08J4r169nMWfMTExTpD2h3ZraQkF6323lpnsntpir3fbtm0pvfH4HafVc7Hdu/fogw8+VN++T7sqqPsVOrBRgJv5J8dcffcIp+IOILKc2zLwk/jFlC+Z6X51C+hWbbdFoFYFt7BulXZbMOoP7Hb54osvOotFM8Pu729/sUWfadtwQsWeI/Vrtqq6/3m9ilKNS40d+6NTTd+61b2l5x3LpqtQjat1NPmEstvoh9qoVvk/2xGSj5/QwEnr9eb41Xqgc03dcX41FciXV9v2HdXjw5Zo+qo9zn4f3d7Mubz1Q/cdLCHnMDkGiEzXX9Ne/V/5OqCJMLffdKGyokePHs4kFf/EF1tEalXqF154IWUffwvL2VgLjS3stGq9HQTYY1t13b9g1K6z3nf/gtRQzXW3x7Fxjv4RkfY67FMDO+iw5/dqtT3PSR/BNRYvXuyE9FmzZssLoi7+hxZsTVZ2urxZBT1ySS299uMqjUyn78aC/I79SXp/4lq91OscrdlxyAnndr8+51fX86NWpIT37FCvXJTmj8hcpQSRqceldfTgLc1VpUK0AIQ356RIt72uY8czLixd2bVVUCdFchvrU7cWHi/PUk/PgAED1KdPHyrrbmFHthbSv/tuuLwk6tAW359llZ1iy0Qp6dgJbfdVzdM6t1YpFSucX7+tT3QC+YEjx1QuuqBzmwV1//VAKH0zdoUz7tECuwV3AOGr+6UtNHfyK3pv0E8aP3GhVq/dpmPHjqtUyWJq3qSGel15rm6+/gJ5lb/txcI60kdYdwGblW5BfdOmzfKa3QmzlKfCX5Sdnw+VL15Q0b5A7m9pSd0C4w/olUsVSQnuVlm31piC+fNq9PxtArLDxq379ehLkzTdF9rvvbGZYisXF4DwFFerov77wk0p3584cVJ58+aR1/mn" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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nrBfLn81XXOwkIpX37Dumhxz/WHfe/pyXLNgre9Nrbo51q+idDJwkItRuu7SAAyE05EtaNhfVz6lYREGqffTVZ51/2jNPLbtNj4A3+lpe+z33Of3dki8u6NPNtzQUAuSUhISHnwnqhQgV0K9V1ZJMDB484veznX/as3htEa4yb0fKCnHL7jay3ApC74uLici6sm9tu7KS6cZUEZJdVa7bq4Sc+VufL+2v4mFmCu9DygpxCVR1AuMjRsB5VpBC968gRU2cs13W3va7ef3tT02dRfY10Nme/3SVP0/KCHENVHUC4yNGwbm694ULVrllBQE74duQMder2L/2976das267EFlsPcIFXZ91zmDLqE7kFKrqAMJJjof16GKFmbuOHPfuwB+dRajP/vsrJazaIoS3r76bpouvfM6Z9DNjdoKAnERVHUA4yfGwbqx3vWZsjICctGPnPr38+gi1vvBJ3f/oh7THhKFvR83UZT1f1M13vaMpvy4TkNOoqgMIN7kS1ksUj2IyDHLNkSNJGvjpz057zHW3v6HRP84VcteosXN0xXUvq/cdb+iXyYsF5Baq6gDCTX7lEltoOvCTCVq3YYeA3DJ89Exn69C2vnpf08HZ8ufLlWNYz0ncd+j393/MLI0d/5uA3EZVHUA4yrWwXrpUMSewP/PvrwTktsnTljrbm+99/3to79VBMeVLCKEXP3WJE9CHj56lLdv2CAgXVNUBhKM8J32US3bu2qfzLn5KGzftEhB" +
            "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" +
            "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" +
            "Wk2zbI/d2c76fOHmxfvFtE6csdoI83KH9efXUqlkttWxe21koGlO+hAAAcDvCOlzngg4NnM0cPHTUCe/x05Y6wX3W3JU6fpyFqpGgY9v6voBeX62a13K2MqWjBQCA1xDW4WpFowqp6yXNnc3PxkP6g7td0vMeHiycd/BtdmnVczubKAAAXkdYh+f4x0PefXsX5/tdu/f7gvsqJ7g7my/E79/PGVWzS2y18mpQv4oa1Kvqu/Rt9ao4lwAA4HSEdXietVf453D7bdy0SytWbVHCyi3Opf/rdRt2CIEpV7b4H2G86inh3D7tAAAAgSGsA+moUrmMs13YseEp1x9NOuYL7ZtPCfLWRrNpy25t2rxbXjohcIEC+VWjWjnFVi/vq5b/eVnDVzmPrV5OJUsUFQAAyBrCOhCEQgXzO6epz+hU9Zu37tHmP4K7E+BTfe2/3gJ/uLM55VYZP2UrU1w1nED+exivXLG0AABA9iKsAyFUqUIpZ2vZrFaG+9jZV/cmHlJi4kHf5UHna7u0+fCnfP/HZVLycSUnH/Ntv1863x9L8/0ft1tlPyqqkNNq4t+iogr/+X3RQn/c/vt16YZy35Yvb14BAIDc9/+xUlAChMsGjQAAAABJRU5ErkJggg==",
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
        grafico: "data:image/png;base64,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" +
            "2pByW8o3r/vb0HheK4ChcGjfAjzIDSEWSCyYIP9o38pZ4pGlWrFyY677NDujti67qLUTUNq3TRYAAKFEKAE8wlbNcqsiDKsXHqEkeyl1S2nCN1/m6z5dOzXXddecp1+nb/HxxQUAQLARSoAIsj5XtyJiA+sIHkJJ9prXTtOY0ZNVEI0aVHOCyXU9z3e+BgAgWAglQARYELG1uS2MHD9+XAg+Qkn2yh5boSVL16kwrFrihJP0zaooAAAUFqEECCMLInYiQ1vOF6FFKDldw1qlNHlM/lq38kJrFwAgGAglQIjZPzELIraxlG/4EEpO16z2MY0dPUmh4LZ29bmus+rWriwAAPKDUAKEiJ3Q0A0jDK6HH6HkdBW0Wj8vWq1QKl+uVHow6aQ+v+6kFs1i9yRgAID8IZQAQZaamqpNmzY5YcQG2REZhJJT1atRSlPHBbd1KzdxcXEZ4aTDuU0EAEBuOHkiECSHDh3KqIxYMAG8pFSx/Qon+7zrgyHfO9uV3ds6AcXOGA8AQHaolACFtH///owwcuzYMcEbqJScqnLRtZq/YKUiqWvHZk44ub5XBwEAkBmhBCiggwcPasOGDdq4caPgPYSSX9SuXkozvgtf61Ze2rSqr9/c2k233NBFAPzv+PETKlIkTkBuCCVAPtmciAUR26iMeBeh5BfN6pzQ2G+/l9ecf06KfnPbRbr26nMFwD+Wrdik/w4Yo7ET5mvl6i1KSzumCuVLOx9I9L6qfb4+kBg7dqxGjx592vUJCQm6/fbbVadO4RfUsL/rAwYMUMeOHdWiRQvl1/z58/Xhhx9me9vFF1+stm3b6vXXX9fll1/uPP6gQYOc22688UbhF4QSIEBHjx7NCCPMjHgfoeQXSSU2aO7cZfKqbl1b6rfplZMel54lANFt5DezdEPfl5V2LOcTA1/Vva2GDLhPgbBQsmXLltMO4O36GTNm6O6771a5cuVUGMEIJZMmTVLfvn2dsISCYdAdyIOdcd2CiLVqsZoWok31pFKa/b13A4kZO36es11x2dn6bXrl5ALOEg9Epf0HDuvOP76TayAxn385U8/8c7gef6inCsqqDxZK1q5dmxEkMldVslZSrDph1y1ZskS7d+92ruvTp4+Sk5OdQLJ69Wpns8pGt27dTqt+lC9fvsABaM+ePTlWStxAZM/tcl9DrCGUALmwpX0tjHCeEUSrCvEHFS2++OpHZ7uu5/np4aSb2rdtLADRY/DHk7Vj576A9u3/wXeFCiVZWSBZunSpnn76aSd8WKgYOHDgKUFi7ty5GUHF9h85cqRzu1U4MldK7L6ffPKJ7rnnHmdfN1SMGjUqqC1XbiCx1/fCCy9k/BwTJ05U48aNg9KaFk0IJUA2rFRs1RHOwI5ot2tb9C3EMHT4FGfre1NX3fu7y5SSXEMAvG/aj0sD3nfL1t1aunyTGjeqroKYOXOmc+mGhnnz5qlXr14Z7VMWLuw628+tOqSkpGQc6NtBv1Va7L5JSUmnPLbdN3Mbl4WGunXr5vp6rNLxxBNPnHJdq1atcg0x9lrvuuuuU65zX1csIpQAmWzfvt0JI7t27RIQ7SpVKKnZPyxRtBowcLw+GzVDf7yrh+67q7uKFy8qAN61afPufO2/dfuegEKJVThsyyxzO5W1cFlL1muvvXbafa0VqqDscfv165fRum0hIyf16tUr1EyJtXS5P2OszqUQSoB01p5lv3y2bt0qwC+SSkf/DNSu3Qf0xHMfacRXM/XHu7ur5xXtBSC2ZK44uEGhXbt2p8x3BHM1rsxhxOZOMs+BBJsbRizUWOuZHYdY21ksIpQg5tkvn3Xr1iktLU2An+zdsVl+MWvOSt10x3+cmROrmrRuWV8AvKV6tfL52j+pcv6Hxi109O7d2xlCr1q1qhMY3HBirVjBYLMp1uoV6iV77fVau7g7uxLrigiIUTt27NCcOXO0atUqAgkC9se+Z2nJmP/Tygl3ZGzfvtcr43b72r3+Hw91yrj+6ouT9cOwG5zLcChbuoR+mhO9rVs5+fizqera46/66z8+0Z690TPED8SC9mcHvjhF1aTyBZ4nsSBi1RMbRrcPFi2UWOXEBtfdYGKXzz33nDO0XhB2f7dty4bPs7aPBYs9R+bXbFWSWF3pk0oJYs6RI0ecX2KciR0FcVbzqpo5f5Nuuv+r026zwFK5Qkk98NwEndOqurp3baDpczfps9HL1PPSZE2cvt75Ohyql0/TkjyW5YxWR44c1T9e+jyjatLnuk4CEHk3XNtBT78wLKAVuP7v5gtUGD179nRWrnJX2LJhdqs6PPvssxn7uK1XebHWLxswt+qLhR17bKuWuIPrdp3NpriD8YU9L4rLHseWCXaXHrbXYVUgC1f2/LFWPeHkiYgpFkQskFgwgb+F6uSJVgn5aeFW/fmfE0+7zSojnc6p5YSS9mdWV99eLTRg2MlP6a7slqxH/jVRU2eHJwzXKr1dM2cuUCy4/Fdn6dEHrtGZLeoJQGQF++SJfmRzJNZ6FovnIskN7VuICfbJxoIFC7Rs2TICCQrs3DY1FF+imFMBya51a8uOA4ovXlTVKpdS1UqlnOtWr9+rSzvV17SfNoYtkCTEF9P8+YEvzRntRn49Sxdf/Te98uZXAhBZl196lmZPekF33X6JGjeqoWLFTq6aV6F8aV3YuYX++9IdMR1IMrdr4VS0b8HXbFbEhtitOgIUloWNSuUT9OX4lRmVEquOWDC55NZhemnALKe969+PdnFu+/jLJapXq6wTZEaMW65wqV35hFYdTlUs2bfvkP781CBNmLzQqZq0bdNQACIjuWF1/fvZmzO+P378hIoUiVOsc1f1sjYtOyM9TkX7FnzLltWzXwCcjT02hap9KyubI3HbtCyUZOW2e5lru6c4l8tW73JCTKjUKbtT06fPU6wqmVAiPZhcrQfvvUIAgOhA+xZ85+jRo86A2KJFiwgkCDlrz0o9eizb29zVt6xKYrMmVjmxeZMaSaVPWZkrmOzTyJ8XhmeY3qsOpVeJHn/2I/W49h+aOiN22tgAIJoRSuArO3fu1Lx587Rp0yYBwWZBYv5Xt56yrK+1ZxkLJ5nZ/En71jX0zcRVTtuXzZrYzMnm7Qe072DoWqsaVCuiffsPCdK47+fr4que0d9f/EwAAG8jlMA3" +
            "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" +
            "E/3e6hWrVoqWrSoc32ZMqXVuvWZ6R/C/Z5AgmzRvoWwsJKqVUgQGHfFLat23HzzzXnud8stt2SszGWVEguAbdq0OW1/CyLu+uTuPrmFGHhT+bLxWjQ98mvK4xejv5urdl0f0YzxfxcQ62rWrKHf/OaX6qE15cTFxQnIDZUShJzNPBBIAmfVDFsO2PpNcwskxmZGLLhkXpnLXSLYHbjL/LgHDx50rneDiP23cUMMokf5+P2C98z/ea1qnfE7ATgVgQSBIJQgpGy536xnFEXurJphLVY2rOeuqGXbiy++6AQIa4HLvMKWG1zc/WxG5YYbbjhlPsTuZ6uUWJXEvb5r164aOnSoLrnkkny3iCGydm+jdcurduzcp5JVbxQAIH8YdEfI2IpRa9asEYLPlvOzuRCW9M2ZXwfdE0sW14rZYwTvO7Ql8JOjAUCso1KCkLBP+gkkoWFtWLacMoEkNiWVjt2ltKMNFRMACByD7gg6a9fK7WR/KBxbOji75YMRG/bu4N9WNLFgQsUEAPJGpQRBtWjRIgIJECLFixXRwoUrhOhCxQQA8kYoQdC89NLLmjJligCERo0KR4XoRDABgNwRShAU/fr113ffjdeIESO1bNlyAQi+A7s2C9GLYAIAOSOUoNCGDv0oPYx8kfG9fb18OcEECLb585cJ0Y1gAgDZI5SgUL788isNGjT4tOs//5xgAgRTncqs3u4XFercKgDAqQglKLDvv5+o//73rRxvPxlMGMoFguHwXlq3/OLwkaM68/yHBAD4BSdPRIH8+OMs/fWvTwe079VXX6mGDRsKCCe/nTxx29JJSjt2TPCPiy5oqS+G/EmA39i5tDZs2KBdu3Y5X9uhZrFixVSmTBklJSWpWrVqAT/W2LFjNXr06NOuT0hI0O233646deqosA4fPqwBAwaoY8eOatGihQrKfZzdu3fr7rvvVrly5TJuW7t2rQYOHKibbrrJeQ+C8XwFtWfPHvXv31+9evVy3r/Mry0Y72dBcZ4S5NuiRYv1z3/+K+D9P/tsBMEEKITalaVNiwgkfjPmu3n6/cMD9J8X+grwi+3bt+vnn39W1s+809LSnJBi244dO9SsWbOAH7NVq1a68cZT57EsrNiBdNaD/0hatmyZE0wsMM2cOVPdunVTNLAg8uijjyrSCCXIl7Vr1+nf/35RBw8ezNf9TgaTq9KDSQMByJ/U/VsFf+r3/jjVqFZBj9x/tYBodyy9mmsnUM6rCceCy+rVq1WvXj0VVNu2bTVjxgznU3632pC5qpK1kjJo0CDnuiVLljiVDNOnTx8lJyc7VQt7PbZdfPHFTpiYP3++Pvzww4znK1++fJ4BaN68eWrZsqXztb0PHTp0cJ4zs9TU1Gyfz6oXr7/+esZryxzE7Ge0n80sXrzYuc39GbP+PO57Yffp16+fE5Iyvx/2+t3nee2115z72HUW8K699lrn/WvcuPEpgcreu6pVqxb4fQkUMyUI2I4dO/XSSy9py5YtKojPPvtcK1euFID8WbKYRSP87Onnh+mVN78SEO3s+ODo0cDOpxTsEy3bQbsFgaefflovvPCCevfu7Rxo28G+a+7cuU6Lkt1uYWDkyJE6cuSI+vbt6wQkO0B3D7w/+eQT3XPPPc6+jz32mHP/UaNG5fj8FgLWrFnjHNDbtnnzZqdyklWJEiVOez43kFx++eXO89nPYNe5QcRYgLGAZbe7YSW7n8fu5wYSew/cx7OWOXv98fHxToiw7+3ny9w+Zq/NXru9j26Yscez/652fUHel/wglCAg9n/Ol19+pdCD659+SjAB8qNmpTgdOpQq+Nufnxqkd94bKyCa7d27N+B9rWKQ366LzKw9ytiBuh04W5WiR48eGZUJO9iuW7duxn4mJSUlo3JiB9kmc2hx2X3tQN7d16oA9li5sQN5qxrYvIjdz57LXlOgP4s9vhsQ7Gewn8Xu774+u859zXn9PHadvf7Mj5f1vjmx/ayKsnXryQq9BRy7v/1cBXlf8oP2LQTk5Zdf1Zw5cxQMFkyuueZqNWhQXwByd/wQrVux4t4/vavExHjdeG1HAdHIqg75EWhVxSoCtmWWuW3IDpzddqSsrIJQUFlboNy2qawsCFgrmVU63FBkbVxWVbDHyGt43CoROf2MhZG1JSyQdjkLH/a8FrLsdVswsqCSuQ0t0PclvwglyNN//vOapkyZomD69NPP1LPn1apfn2AC5Gb5slVC7Lj99/9VqVIJuqp7WwE4Ket8hR0Qt2vX7pQ5hmCuxpX5oNud07C5itz2twP/zLMWLvfgPi/ZDfO7sqvm5CZzGHFnVtz2try4VRXb14KVBSZbJczk933JL0IJcjVgwLsaPXqMQmH4cAsm16QHk3oCcLpqFYrop0UFb29AdPpDesWkTq3KatOKD20QXWxeIT+KFy+u/LIDfJuVsABgw9d2YOyGk/wevOfEDsitNSqnkJCZHaBPmjQpxxXCrIJiQ/m5sZ/DnePIOhhfEBYerNpx//33F+jxLJTY67bNbd0y+XlfCoKZEuRo+PBPneH0UD/HqlWrBeB0RY9uF2LP1m17nGCyfcc+AdGkbNmyAe9rQ9WJiYkqCAsiFgLc9igLJVY5cQe9jV0+99xzznB2Qdj93fYkCxdZW6tcNnthFQm3mpCZHdzbY9hrzI2FFnuMyZMnZ1xnz/nGG29kvIb8ssdz2+nsPcjuXC85cVu4Jk6c6Ly3mYNNoO9LQRBKkK1p06brvffeVzhYMLFVJQCcatWK1UJs+vGnFfrDn98VEE3sE/9Aqx/Vq1dXYfTs2dNZQcpdYctalGzo+tlnn9XDDz/sXNqMRyAnJ3Rblqz6Yu1ItpSveeKJJ5zHshYma4Oy1bWyVmOsSmLPm12LljvwbvvYYH9Oz2cH/raKloUAez7brCphq3QVpNLhDvm774U9vy33ayuCWYiy57P/VjaDk3mFr6yvz7hLHJv8vC8FwRndcZp169brqaf+mrHyQrj06tVT9eoFbxUHxLZoP6N7Uvkimjv1OyG23XdXd/39yRsERIucTp6YWeXKlfN18kTEBiolOMXx48f1zjvvhD2QmGHDhqdXTNYIgFTi+C4BL7/xpd7sH3jbBRBpFjisHalmzZpOe1ZcXJxzfbFixVShQgWnckAgQXaolOAUb731tka" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "XfysAiBWEEuTot7/9jdq1aycgFMqUrSQAp2vUoJq+GvaoACCWEEqQq8cff0z169cTEGxxRUoJwKkSEkro28/+IgCINYQS5OnVV19RqVIcQCK4DhwqKgCnGvnRn1SjWgUBQKwhlCAgQ4cOFhBMm7cdFoBfvPXKb9ShfRMBQCwilCBgBBME06q1ewXgpD/dd5Vuvq6zACBWEUoQMGvh6t//HQGFlZCQoPWb9giA1Puqc/XUI70FALGMUIJ8SUpK0iuvvCygMCpWqioA0llnNtAHb90jAIh1hBLkW4MG9fXcc88KKKiixcsIiHUVypfS5G+fEQCAUIICatGiuR57jHX0UTCHU0sIiGXFihXVxiVvCwBwEqEEBda+/Tm6774/CMiv7TuPCIhVZUqX1L4NHwgA8AtCCQrlwgsv0B133C4gP9ZuOCAgFlWpXFZbV/QTAOBUhBIU2hVXXK7rr79OQKCWrtwhINbUqVVZaxe+KQDA6QglCIobbrieYIKAVK1WQydOnBAQSxo3qqEls14RACB7hBIEDcEEgYhPKCcglrRqXldzp/xTAICcEUoQVAQT5OXosQQBseKcs5M1bdxzAgDkjlCCoCOYIDe79qYJiAVdOjTThC+fEgAgb4QShATBBDnZuPmgAL+7tNuZ+no453ICgEARShAyBBNkZ/nq3QL87Ooe7fTZoIcEAAgcoQQhRTBBZhUrVtLefZw4Ef51fa8OGtyfk8oCQH4RShByBBO4ypSrLMCv+t7UVQNev1MAgPwjlCAsLJg8/DDtDLEu7Tgrb8Gf7rr9Er3+79sFACgYQgnCpmPHDnrxxX8JsWvfAU6aCP954J7L9e9nbxYAoOAIJQir5ORkvfXWm0pMTBRiz5ZthwX4yWMPXqO/PU57KgAUVtyJdALCbM+ePXr66b9p6dKlQuz4eW01bdy8X4AfjPzoz+rWpYUAAIVHKEHEHD2appdffkUTJ04U/K9UqVIaMT5OQLQrX66U5k/9typXKiMAQHDQvoWIKV68mB566AH96leXCv5XqXI1AdHOToq4aenbBBIACDJCCSLurrvuVK9ePQV/K1qstIBo9tQjvTkpIgCESDEBHnDLLTercuXK6tevv9LS0gT/2bufTlFEr+EfPqDLLm4jAEBoMFMCT5k7d54TTFavXi34y4kSTTRu8noB0aRypbL6etgjat60jgAAoUMogefs3LnTCSaTJk0W/GPN9tpatnKXgGjR49Kz1P8/v1PZsixhDgChRiiBZw0ePERDhgwVol9cXJzGziglftsgWjz8hyv110evFQAgPJgpgWfdcMP1ql27tlM1seoJoleNmrXSAwlVEkSH1/71f/q/PhcIABA+hBJ4WseOHdKDSS0nmNi8CaJTycQK6f9LKIG3Va9aQW+98htd1LWlAADhxZLA8Lx69erpqaeeVPfulwnR6cAhAZ7WuUNTfT38UQIJAEQIoQRRoVixYvrd736ru+++S6VLlxKiy45dRwV4VZ/rOjnnH0lJriEAQGQw6I6os3z5cr333vu0c0WR7Qfqac7C7QK85rEHr9FfHuLkrQAQaYQSRCX7v60Fk08//UzwvukLK2jfAaol8I5zzk7WE3/qpQs6NRcAIPIIJYhqdi4TCydbt24VvCkpqaoGjzogwCv+eFd3J5AkJJQQAMAbWH0LUc1W52rYsKHef/99/fDDVMF7ypWvkv6/hBJEXvMzauuJP/fW5ZeeJQCAtzDojqhXo0Z1PfLIn9Wnz02C96Sm8dkHIu83t3bTN58+RiABAI/iaAG+ce21vZ2qyQcffKCVK1cJ3rBzN7MkiJz6dZOcVq3rep4vAIB3MVMC3zlw4ICGDv1In38+Qoi8A8caauqsLQLC7cbeHZx2rTq1KgsA4G2EEvjWzJkzNWTIR1q2bJkQOQvXJGnTloMCwiWpSjmnOvJ/fS4QACA6EErga0eOHEkPJkM1fPinQviVLVtWn449LiBcrure1gkkZ6TUEgAgehBKEBNmz/5JQ4cO1aJFi4XwadgoRW8N3iAg1EolxqeHkd6693e/EgAg+jDojpjQpk1rtWzZwpk1+eijj4UwiUsQEGoXdW3pVEfObt1QAIDoRKUEMWfevHnOrMmCBQuE0Eqq0VKDP18pIFQsjDxy/9UCAEQ3Qgli1ogRXzjbtm3bhNA4VixZ43/YJCDYru/VQXf+38Vq24bqCAD4AaEEMW3nzp1OMPnii5FKS0sTgmvNthpatmqvgGD51UWtnTBiLVsAAP8glADpli9f4YSTCRMmCMFRrFgxjZker2PH4gQU1rltG+vO2y9W76vOFQDAfwglQCYzZsxMr5p8oblz5wmFU69eA/X7eKuAwmjSuKbuSq+M3HFrNwEA/IvVt4BM2rVr62zffPOtE07WrVsvFEzx+FICCqpa1fLpYeQSpzpSuhSruAGA31EpAXJw4MABp6Xrm2++0a5du4X8qV2vld79eIWA/EhIKK4708OIVUdq1awkAEBsIJQAedi+fbu+/vobZ9u3b58QmJJlm2rk2LUCAnXbTV2dIfYWTesIABBbCCVAgLZs2fK/cPK1Dh48JORu2/46mvvzTgF5ubpHO6dNq+O5ZwgAEJsIJUA+bdiwIaNykpqaKmRv+sKy2nfguICcdO3YzGnVuvxXZwkAENsIJUABrV27NiOcHDt2TPhFjRo19MHnnJ8E2TvrzAb67W0Xqc91nQQAgCGUAIW0cuVKJ5iMGTOWcPI/yY2b6s2BzJPgVN0vaeOcib3nFecIAIDMCCVAkKxZs0bjxn2nsWPHxfxAfINGZ+rtwcsFJCbGpweR850wcv45KQIAIDuEEiDIbLUuCyYWUDZv3qxYVKlqC300cpUQuxrUq+qEkRt6d3C+BgAgN4QSIEQOHjzoBJNx48ZpxYqViiWHTjTQlJmczT0WWTXEqiIWSKxKAgBAIAglQBh89521dX2n+fPnKxYsWF1Jm7ceEWKHzYlYGLG5EQAA8otQAoTRtGnTNWHC95oyZYr8qkKFCho+5qiOsxqw71WsUDqjKmIragEAUFCEEiACbCh+8uQpmjRpsnPeEz9p2DBZbw3ZJPhXsya1MsJIjeoVBQBAYRFKgAiyJYQtnEyePNmpovhBcuOWenNgbM3QxIoLO7fIWEmrSJE4AQAQLIQSwCNsGN7C" +
            "iYWUaF61q2adVnp/2ArBH5o3raPLLmqtyy5urXPOThYAAKFAKAE8JjU11QknkyZN0axZsxRt/0SLJabomwn+akmLNfXrJaUHkTZOELmgU3MBABBqhBLAw6xiMnv2T+nb7PSAMltpaWnyujXbqmnZqv1CdKlapZx+lR5CTlZF2qho0SICACBcCCVAlNi2bbsTTtyQcvjwYXlNfHy8xkwrptSjzBtEg9KlEvSr/7VmWRgpWzZRAABEAqEEiEK7du3KCCd2uX+/NyoTderU1YBhOwTvikvPi7/6X2uWBZHq1SoIAIBII5QAUW7fvn366ac5mjdvXvo2X5s2RW453uTGzfTmwDWC93Tu0DRjTqRRg2oCAMBLCCWAzyxYsMAJJxZSFi78WeFUr+GZ6jdkuRB5tmRv2zaNdMmFrZwZkVbN6woAAK8ilAA+tmHDxowKil3u3btXoVSucnMN/2q1EH6JifHpIaSh2qUHEbu0QFKtankBABANCCVAjDh06JATTqySsmzZsvRtubP8cDDtPVJPM+ZuF0KvUsUy/wsf6UHkrGSdd05jJZaMFwAA0YhQAsSogwcPavHiJVq6dGlGSLEB+sKYtqC09h8UQqBmjYpO9aN92/QA0i7FCSMAAPgFoQRAhrVr1zpBZcmSJc6lfR+oqlWratDIA0Jw2DC6hQ+rgJx3ToqSG1YXAAB+RSgBkCNr+Vq6dJlTSXEvt2/Pvj2rUaMU/XcwZ3IviPp1k9SkcU1ns5kQCyJJVcoJAIBYUUwAkIOSJUuqVauWzuayzzFsVa+ffz65WUXlwIH0CkmRBCF3Kck1dMb/wkfGln5dfHxxAQAQy6iUAAiKIR+PVtrxBG3cvEub3G3Lrozvjx+PjV81xYsXSw8eNbIED7usobg4znQPAEB2CCUAQm73noPauGmnNti28eSlfZ8RYLbs1tZtexQNypQuqXJlE09u5RLVoF5SpuBRUw3rVxUAAMgfQgkATzh4KPVkcPlfaLHtwIHDSj2aptTU/22Zv876fQBf2y+7jECRKVjkdl35LNcVKVJEAAAguOLeeustQgkAAACAiPl/HoD0d9TIcAUAAAAASUVORK5CYII=",
        tabla: "data:image/png;base64,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"
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
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "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" +
            "G0bxJ8KfDXi/4tnxrYzeFvHHxM8P65oeoeG7PSvh94v8AAmiSeNPAlj8S/iN8PrmT4lj4VmK4txFGGYZvSyujW4SyatmWHzfOZZjOlmdJ5LiMRhM7xmAyL+zqkcbluT4rDYmljKlfNMBmeJWX5nUyfKc1gsn/ALbMNwph608BlNXM61HivOKOXV8pyeOXQq5bVWc4fD4vJcJjs8/tCnLBZjm+FxOGq4SnRyvHZbh3mGW083zbK5vN/wCxTw1+zjo2u+BPDWoXXj/U7D4neP8A4Q/Fn48+AvCEHgm1v/Al18NfgxJ8WR4wj8X/ABGk8a6f4g8NeOLuH4FfE1/Dfh3Rvhb4y0DUJD4Ei1Txnoa+JvEE3ggxnFuIw2Z4ylDK6NXJsrz7I+Gczx8sxnSzOGb8QrI/qDwGUrLquFxmW05cS5OsZi8RnWX4qkv7TlRy/EvB4WOZGE4Uw+Jy3CVZ5nWpZxmeRZ3xLlmBjl0KuWzyjh9539fWOzV5hSxWEzGceG84eEwmHybH4aq/7NjWzDDLGYqWXeQfFX4d/wDCq/Edj4Mv9Y/tLxbZeGfD+oeP9LTT/sUPgjxjrtiut3vw7mkmvpdTuPE3gbTNQ0nw78SLHWtG8L6p4Q+Kll45+H8uj3tv4QtvFPiP3ckzb+2sJVzClh/Y4GpjMVSyus6vtJZjl+GqvDU82io01Rjg8yrUq+Lyiph8RjaOPySpluaRxFOWPngsJ4WdZV/YuLp5fVr+1x1PB4WrmdFUvZxy7H4mmsRUyqTlUdaWMy6jVoYXNqeIw+DrYHOqeY5XKhUjgYY3F+aV7B5AUAFABQAUAFABQAUAFABQAUAFAH6nf8E1P+Cc/iT9sjxvD4y8bWepaH+zv4P1NB4p11TNY3PjjU7UxzHwL4Wul2Sl5laP/hJNZs2H9h6dL5MFxDrF7p5j/FvF/wAWcHwBl0svy6pRxPFePov6lhny1YZbRneP9pY2DvG0Wn9Uw9Rf7TVXNKEsPTqp/s3hH4VYvj3MY4/MadXDcK4CsvruJXNTnmNaFpf2bgpq0ryTX1vEU3/s9J8sZRr1KVv7S/DXhvQPB3h7RPCfhXR9O8P+GvDelWOh6BoWkWkNjpekaRpltHZ6fp2n2duiQW1paW0UcEEMSKkcaKqgAV/npjMZiswxWJx2NxFXFYzF16mJxWJrzlUrV69abqVatWpJuU51JycpSk2222z/AECwmEw2AwuHwWCoUsLhMJRp4fDYahCNOjQoUYKFKlSpxSjCEIRUYxikklZG3XMdAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHKeOPA/hH4leEfEHgPx54f0zxV4P8U6bPpOv6BrFut1YajY3AAeKWNsMkkbhJ7a5haO5s7qKG7tJobmGKVO3Lcyx+UY7C5nlmKrYLH4KtGvhcVh5uFWlVhs4taNNXjOEk4VIOUJxlCUovizHLsDm+BxWW5lhaONwGNoyoYnDV4KdKrTnumt007ShOLU6c1GcJRnGMl/HT/wAFGf8Aglx44/ZL1XUviZ8L7XV/HH7Ot9cmU6mEa+1/4XzXMwSHR/GYhTzLjQpJJEt9F8YrEtrJIU0rXxY6o+mXPiD++/Cbxoy3jmhRyfOZ0Mt4spw5fY3VLC5zGEbyxGX8ztHEpJzxGAbc0r18L7Wiq0ML/Bvit4N5jwRWrZvk0K+Y8K1JuXtrOpicmlOVo4fMOVXnhm2o4fHpcjdqOK9nWdGeK/Iyv3U/DgoAKACgD9QPEXiX9p7xnH8TfF37WfxG8cfFz9mbxN4H+MOu+F/iP4h1jxJrPwE8V/FjVfAni29+BWofAE6lZ6Xp2geOI/jBN4Ws5vA3w20Dwp8Qfhz4Mtfin4B+K/gvwV8NvDXx28KaP+NYTB8G5e8nwHA2U5bkXGGDzLIMNjcpwuHweH4nwOR0MzwNPiWlxR7GpWq4rLXkEcbUjmWb4rHZVm2YTyXNMjzDMc3xnDOOxH7FisXxhmCzfHcb5tmOecIYzLs+xODzbFV8XiOGcbndbLcdU4bq8Me1p0aWGzFZ7LBU5ZblOGwWaZVl8M5yzO8vy/KcJxJgqB4R0XWdT/aV/Zg/ar0/SdTvP2cfhbpn7EmpfEn4ywWF1J4E8BSfs8/C34LeFPit4f8AF+tCLyfD3jjSfEHw/wBc03w38PNVFr47+JEmpeBJfhp4c8X23xR+Gk3i0x+Iw9HhDjLgmrXo0+Lc6reItHKOH5VYLM8zXFedcQ47JMVgMPzc2Ky2vhc0w1bGZrQ58syhUczjnGLwE8lziOBMDh8RW4u4O40pUK1ThTJqPh5WzbP40pvLcsfC2TcP4LOsLjsRy8uFzGhisrxNLCZXW5MyzZ1stllGEx0M5yiWO8O/Zr+I3i2a11jQ/Fl5pmo/Az4Q+B/E3jr4hQz+GvDH/CdyfDWfWbXSrj4G+EPjDa6O/wAcPhl4H/aE+JXj3Sfg54ks/hj4mg0DQI/jj478d+JPCmp+HNR+JLap9JxflOBjOhicDTrUeJM+zLB5blUo4zGf2Ys3jh5148SY/IJ4hcOZxmXCuT5ZXz/B1M5wcsVinw3lmWYPHUcXRyhUfnOEs2x0oV8NjqlGrw5kWXYzMs0jLCYP+0nlEsRCjLhzA59Cg+Isoy7ijN8zoZDi6eT4yOGwy4izLMsXgq2Eq5s63r3xv8B6X4s+HPxM+Mfij4fbf7f+Gnwq+N/h39q7d4xsP+F9ftJ/GDXfhFrHxx+EP28a2n7P+r/8IXq3xI+Pa/8ACAfCf4e+FPHvhH/hR32fxBq1z/whHxNHiDweHMzrYHNsnyDBZrf6rnGd8OYvgi2X1f8AVnhDIcNntDhvPvZfV3xTQ/tChlHDD/tTPM1x2WY//WTnwtCH9pZP9V93iLLaONyrN8+xmV2+tZRkvEWF41vj6X+svFue4nI6/EeRe1+sLhiv/Z9fNuJl/ZmSZXgszwP+rnJiq8/7Ozj61+aVfr5+RhQAUAFABQAUAFABQAUAFABQB+tX/BOz/gl34+/a31XTfiR8R7bVfAv7O1heJJLrUsbWWu/Et7Wcrc6L4IjmXzE0pXie21fxe8ZsLaTzNO0Y6jqsOoHRvw3xX8Z8r4FoVsoyidDMuK6tNpYeL" +
            "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" +
            "AiS8/4W18EfiL4MsbCQRXPiC98OXt74R8wjIS38Z6QmoeE7xsYJFnrM+Ayk4DqT+55FxxwhxMqf8AYfEeU5hVqq8MLTxdOnj7d5ZfXdLHU/8AuJh46p9mfiGecE8XcNup/bnDua5fTpO08VUwlSpgb9o5hQVXA1H/ANe8RK113R89V9UfLBQAUAFABQAUAFAH0J8I/wBk/wDaU+O8tkPhL8EviJ4zstQkMVtr9l4dvbLwj5igkpceM9XTT/Cdm2AzD7ZrUGVVyMhGI+Vz3jjhDhlVP7c4jynL6lJc08LUxdOpj7PrHL6Dq46p/wBw8PLdd0fUZHwTxbxJKn/YnD2a5hTqvlhiaeFqU8DftLMK6pYGnpd/vMRHRN9Gfrn8Cf8Aggh8a/FLWOrfH74k+FfhZpMgtp5/DHhFG8d+MyhfN1p97fB9N8JaLciPiG/sNT8YW4k+/aOo5/CuJfpO8O4L2lDhfKMbnVdc8Y4zHv8AszL729yrTpNVsdiIX+KlVo4Cdtppn7jw39GjiHGOnX4nzbBZLQahKWDwK/tLMLX9+lUqXo4HDzt8NWlWx8E94NH7n/s0/wDBN39kz9ltrDVfA/w5tfE3jqwKSRfEr4im38XeM4bmIyiO90qa5tINE8LXnlTPBLceENE0CS4iJS4Mqkiv5s4v8XOOeNFVoZlm08HltW6eUZTz4DL5QfLenXjCcsTjafNFSjDH4jFKEtYcrP6O4R8JuCODXSr5dlMMZmVKzjm+a8mOx8ZrmtUoSnCOHwVTlk4uWBw+Gco6T5j7uAAGBwBwAOgFfmh+khQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFACMqsCrAMp6hgCD9QeDRttoG++p81/EL9jb9lL4qyX1z4//AGePhF4h1LU9327XZPA2hWHiWcvncx8T6TZ2HiFHJJYSRamjhyZAwclj9flXiBxvkipwyvivPsLRo29nhlmWJq4ONtl9Tr1KuFa6WdFpqyatofI5pwFwVnTqTzPhbIsVVrX9piXl2GpYuV+v1yhTpYpPrdVk763ufGnjD/giv+wR4mjYaP4B8Y+AZmZma48I/EjxZcsWbOcQeNL/AMX2ka5OVjht4o0wFVRGNlfoGA+kN4nYNr2+aZfmkUklHHZRgYaL+9l9LATb6NylJvdu+p8Dj/o++GeMT9hlmPyyT158Dm2Om7v+7mFTHU0uqUYpLZK2h4XqX/BAT9lGYMdK+Kv7QVg7ZKi81z4dalChPZUj+G2nSlB0UPcM+B80jH5q+lpfSh43jb2+ScLVUt/Z4bNqMn85ZvWjd+UUuyWx85V+jJwVK/sc64opN7e0xOVVYr5LKaUresm/M5iP/g34+AgkJm+OvxeeLccJHp3gyKQLngGRtJmUsBwW8oAnnaOldr+lLxPb3eGshTtu6uYSV+9lXi7eXN8zjX0YOGb+9xJnrXZUsvi7eroSX/kvyOo0/wD4ICfsoQ7TqfxU/aDviuCVtdd+HOnxuR2ZZPhrfyBD0YJMj4yFkU4YcVX6UPG8r+xyThalfrPDZtVa9LZvSV+14td0zspfRk4Kjb22dcUVLdIYnKqSfqnlFR272knbZp6nunhH/gix+wP4ahjTVvh/4w8eTxkN9q8W/EjxbbyMwOQWg8GX/hGxdQesb2rRsPlkR1JB+ax/0hvE/GSboZpgMsi9OTA5RgZpLylmFLH1E/NTTW6aZ9Jgfo++GeEilXyvH5lJa8+OzbHRba7xwFXA036ODT2aaPsf4bfsafspfCJ7G5+Hn7Pnwn8PapppzZeIB4M0bU/FMDHqy+KtZttQ8RZPU51MjOMAbVx8Bm/iBxvnyqwzXinPMVRrfxML/aGIo4KS7PBYedLCfdR/U+9yngHgrI3TnlfC+SYWtS/h4r+z8PWxkX3WNxEKuK/8rfkj6XChQFUBQOgAAA+gHAr4/fV6s+u220FoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgDy7xZ8cfgr4C1JdG8c/GD4XeC9YdkRNK8WfEDwn4c1JnkAMarY6xq1ndMzhgUUREsCCAcivawPDfEOZ0XiMtyHOswoJNuvgcrx2LopLduph6FSFl197Q8bG8RcP5ZVWHzLPcmy+u2kqONzPBYSq27WSp169ObburLl1uj0DSdY0jX9PttW0LVNO1rSryMS2ep6TfW2o6fdxNyslte2cs1tPGRyHikZT2NeXXw9fC1Z0MTRrYevTfLUo16c6NWElup06kYzi/KSTPUoV6GJpQr4atSxFGouaFahUhVpTT2cKlNyhJeabRo1iahQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB/Kh/wAFxv8Ag4P1j9gr4gW37Mn7Leh+GfFXxvhsV1Tx/wCMPEUR1TQ/h9aXKzRadpdlpxRrDUPE815DM15a3yXdvYWdu63MEM91asf23w38K6fE+Fec51UrUMtcuTC4ek+Spi5KznOU7qUKKi1yyi4uUno2oyPmc5z14Kp9Xw0YyrWvUlLWME9kls5X73SPwJ+AP/B11/wUU8DePLTVPjr/AMK9+OHgGW+T+0/C8fgXwp4F1K2015VMw0fVvCWlaRM99FEGFs2ozS27OR56sOR+n5p4IcJ4nDShln1rLcUo+5WeJr4mEppae0p16k0ot/FyJO2x4lDibHwmnW5K0Lq8eSMGl1s4pa+p/oV/sxftGfDj9rP4FfDj9oP4TaidS8C/Evw7Y+IdGeUNHeWi3kKSy6dqMEkcUtrqNi7/AGe9tZoopoJ1aOSNGBFfytnOU4vI8yxeVY6HJicHVlSqJaxlyuynBptOEt4tNprVM+6w2Ip4qjTr0neFSKkujV+jv1R5N8U/2rPHWm+N9Z+H37Nn7Ofin9qnX/Ak66f8Xbvwz4+8C/DPwt8M/EF9Z2Op6J4NvvF/xHu9L8PeIvHd3ot7D4h1vwZ4dvr3xB4N8Oap4Q13xRZadp3jrwnPqfmG56L8M/2m/h/438B+OvFfi6eP4ReIPgtY3T/tD+B/iBqFppOqfA" +
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
  var input = $('<input id="documento" type="text" class="text-center" maxlength="11">');
  var linkSubmit = $('<a href="#" class=""><img src="assets/img/circle-arrow.svg"></a>');
  var spanError = $('<span class="col-xs-12 hidden-on text-center">Completar todos los campos</span>');
  var divOptions =$('<form class="text-center hidden-on"></form>');
  var opDni = $('<label><input type="radio" name="opt-radio" value="DNI">DNI</label>');
  var opCe = $('<label><input type="radio" name="opt-radio" value="CE">CE</label>');
  var opPasaporte = $('<label><input type="radio" name="opt-radio" value="Pasaporte">Pasaporte</label>');
  var opRuc = $('<label><input type="radio" name="opt-radio" value="RUC">RUC</label>');
//input debe aceptar letras
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
  inputGroup.append(divOptions);

  divOptions.append(opDni);
  divOptions.append(opCe);
  divOptions.append(opPasaporte);
  divOptions.append(opRuc);

  cliente.on('click', function(e) {
    state.cliente = "cliente";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    divOptions.removeClass("hidden-off");
    divOptions.addClass("hidden-on");
    input.attr("placeholder", "Ingrese código de cliente");
  });

  prospecto.on('click', function(e) {
    state.cliente = "prospecto";
    inputGroup.removeClass("hidden-on");
    inputGroup.addClass("hidden-off");
    divOptions.removeClass("hidden-on");
    divOptions.addClass("hidden-off");
    input.attr("placeholder", "Ingrese número de documento");
  });

  var validarIdentificador = "vacio";
  var validarTipoId = "";
  linkSubmit.on('click', function(e) {

    if (input.val().length != 0) {
      validarIdentificador = "validado";
    } else if (input.val().length == 0) {
      validarIdentificador = "Completar todos los campos";
    }
/*
    $('input[type=radio]').on('change', function(e) {
        validarTipoId = "validado";
    });
*/
    if (state.cliente == "cliente") {

      if (input.val().length != 0) {
        $('#id-cliente').text(input.val());
        linkSubmit.attr("data-toggle", "modal");
        linkSubmit.attr("data-target", ".bs-example-modal-lg");
        spanError.removeClass("hidden-off");
        spanError.addClass("hidden-on");
      } else {
        linkSubmit.removeAttr("data-toggle");
        linkSubmit.removeAttr("data-target");
        spanError.removeClass("hidden-on");
        spanError.addClass("hidden-off");
      }

    } else if (state.cliente = "prospecto") {
      if (validarIdentificador == "validado" || validarTipoId == "validado") {
        $('#id-cliente').text(input.val());
        linkSubmit.attr("data-toggle", "modal");
        linkSubmit.attr("data-target", ".bs-example-modal-lg");
        spanError.removeClass("hidden-off");
        spanError.addClass("hidden-on");
      } else if (validarIdentificador != validarTipoId ) {
        linkSubmit.removeAttr("data-toggle");
        linkSubmit.removeAttr("data-target");
        spanError.removeClass("hidden-on");
        spanError.addClass("hidden-off");
      }
    }

  });

  $('button.init').on('click', function(e) {
    identificadorCliente = input.val();
    if (state.cliente == "cliente") {
      codigoCliente = input.val();
    } else if (state.cliente == "prospecto") {
      documento = input.val();
      tipoDoc();
    }

    tipoUsuario = state.cliente;
    state.screenView = "Iniciar formulario";
    console.log(tipoDocumento);
    update();
  });

  function tipoDoc() {
    switch ($('input:radio[name=opt-radio]:checked').val()) {
        case 'DNI':
            tipoDocumento = "01";
            break;
        case 'CE':
            tipoDocumento = "02";
            break;
        case 'Pasaporte':
            tipoDocumento = "03";
            break;
        case 'RUC':
            tipoDocumento = "04";
            break;
    }
  }

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
  var h1= $('<h1>Basandonos en la respuesta que usted nos ha especificado, hemos determinado que su perfil es: </h1>')
  var h2= $('<h2>Su perfil es: '+ perfil +' </h2>')
  var h3=$('<h3>Te sugerimos este plan de inversión: </h3>')
  var div3 = $('<div class="informacion"></div>');
  var img = $('<img src="assets/img/chartpie.jpg">')
  var span1=$('<span class="texto"><i></i>  Rentabilidad:4.3%  </span>');
  var span2=$('<span class="texto"><i></i> Mejor Año:27% </span>');
  var span3=$('<span class="texto"><i></i>Peor Año:16.09%</span>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary" id="reviewPerfil">Review perfil</button>');

  var btnRegister = $('<button type="button" class="btn btn-primary" id="enviarMail">Generar pdf</button>');
  var btnEnviarDatos = $('<button type="button" class="btn btn-primary" id="saveData">Guardar Datos</button>');
  var btnReviewPerfil = $('<button type="button" class="btn btn-primary">Revisar Perfil</button>');

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
  div3.append(btnEnviarDatos);

  btnEnviarDatos.on('click',function (e) {
    var client = {
          vchCodCliente: codigoCliente,
          vchrTipoDoc: tipoUsuario,
          vchDocIdentidad: documento,
          dtmFecha:"hoy",
          vchSector: "opcional",
          intResultadoPerfil: 5,
          vchrPortafolio: "opcional",
          chrResp01: option1,
          chrResp02: option2,
          chrResp03: option3,
          chrResp04: option4,
          chrResp05: option5,
          chrResp06: option6,
          chrResp07: option7,
          chrResp08: option8,
          vchNomPDF: "perfil"
        }

    $.ajax({
          type: "POST",
           url: "/registrarCliente",
           dataType: "json",
           success: function (msg) {
               if (msg) {
                   console.log("Somebody" + name + " was added in list !");
                   location.reload(true);
               } else {
                   console.log("Cannot add to list !");
               }
           },

           data: client
        });
  });

  btnRegister.on('click', function(e) {
    impPDF();
  });

  btnReviewPerfil.on('click', function(e) {
    sumaX = 0;
    sumaY = 0;
    pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8 = 0;
    option1,option2,option3,option4,option5,option6,option7,option8 = "";
    state.screenView = "question-1";
    update();
  });

  

  return container;
}
 

function Home(update) {

	var container = $('<div class="text-center vertical-center" id="home"></div>');
	var row = $('<div class="row"></div>');
	var img = $('<img src="assets/img/logo-inteligo-h.svg" class="img-inicio col-xs-10 col-sm-8 col-sm-offset-2 col-xs-offset-1" alt="Logo inicio">');
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

function Loading(update) {
  var container = $('<div class="container-fluid question" id=loading></div>');
  var divAzul = $('<div class="helper hidden-xs"></div>');
  var logoDiv = $('<div class="logo-div"></div>');
  var img = $('<img class="" src="assets/img/I Complementarias Fondo azul.jpg" alt="logo Inteligo">');
  var h2 = $('<h2 class=""> Conociendo su perfil</h2>');

  var divLoad = $('<div class="loading-div"></div>');
  var loading = $('<div class="progress "></div>');
  var loadingBase = $('<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width:100%"><span class="sr-only">100% Complete</span></div>');
  var containerGif = $('<div class="container-gif text-center"></div>');
  var loadingGif = $('<img src="assets/img/loading.gif" id="gif">');

  container.append(divAzul);
  divAzul.append(logoDiv);
  divAzul.append(divLoad);
  divAzul.append(containerGif);
  divLoad.append(loading);
  loading.append(loadingBase);
  logoDiv.append(img,h2);
  containerGif.append(loadingGif);

  setTimeout(function(){
    state.screenView = "profile";
    update();
  }, 2000);

  return container;
}

var documento = "";
var tipoDocumento = "";
var codigoCliente =  "";
var identificadorCliente = "";
var tipoUsuario = "";
var sector = null;
var fechaEvaluacion = "";
var sumaX = 0;
var sumaY = 0;
var pregunta1,pregunta2,pregunta3,pregunta4,pregunta5,pregunta6,pregunta7,pregunta8 = 0;
var option1,option2,option3,option4,option5,option6,option7,option8 = "";
var idChecked1,idChecked2,idChecked3,idChecked4,idChecked5,idChecked6,idChecked7,idChecked8 ="";

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

	var divA = $('<div class="content_txt_radio"></div>');
	var labelA = $('<a href="#collapseidA" data-toggle="collapse"><label class="lbl-question">Seguridad</label></a>');
	var inputA = $('<input type="radio" id="question1-a" data-option="a" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.a.valor +'">');
	var collapseA = $('<div id="collapseidA" class="collapse">'+state.questions.pregunta1.opciones.a.texto+'</div>');

	var divB = $('<div class="content_txt_radio"></div>');
	var labelB = $('<a href="#collapseidB" data-toggle="collapse"><label class="lbl-question">Protección a la inflación</label></a>');
	var inputB = $('<input type="radio" id="question1-a" data-option="b" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.b.valor +'">');
	var collapseB = $('<div id="collapseidB" class="collapse">'+state.questions.pregunta1.opciones.b.texto+'</div>');

	var divC = $('<div class="content_txt_radio"></div>');
	var labelC = $('<a href="#collapseidC" data-toggle="collapse"><label class="lbl-question">Crecimiento y Seguridad</label></a>');
	var inputC = $('<input type="radio" id="question1-b" data-option="c" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.c.valor +'">');
	var collapseC = $('<div id="collapseidC" class="collapse">'+state.questions.pregunta1.opciones.c.texto+'</div>');

	var divD = $('<div class="content_txt_radio"></div>');
	var labelD = $('<a href="#collapseidD" data-toggle="collapse"><label class="lbl-question">Crecimiento</label></a>');
	var inputD = $('<input type="radio" id="question1-c" data-option="d" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.d.valor +'">');
	var collapseD = $('<div id="collapseidD" class="collapse">'+state.questions.pregunta1.opciones.d.texto+'</div>');

	var divE = $('<div class="content_txt_radio"></div>');
	var labelE = $('<a href="#collapseidE" data-toggle="collapse"><label class="lbl-question">Máximo Crecimiento</label></a>');
	var inputE = $('<input type="radio" id="question1-d" data-option="e" class="option-input radio" name="option-1" value="'+ state.questions.pregunta1.opciones.e.valor +'">');
	var collapseE = $('<div id="collapseidE" class="collapse">'+state.questions.pregunta1.opciones.e.texto+'</div>');

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
	
	console.log(inputA[0].id);

	divA.append(inputA);
	divA.append(labelA,collapseA);
	form.append(divB);
	divB.append(inputB);
	divB.append(labelB,collapseB);
	form.append(divC);
	divC.append(inputC);
	divC.append(labelC,collapseC);
	form.append(divD);
	divD.append(inputD);
	divD.append(labelD,collapseD);
	form.append(divE);
	divE.append(inputE);
	divE.append(labelE,collapseE);

	
	if (inputA[0].id == idChecked1) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked1) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked1) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked1) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked1) {
		inputE[0].checked = true;
		btn.prop('disabled', false);
	} 

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

	var divA = $('<div class="content_txt_radio"></div>');
	var labelA = $('<label>'+state.questions.pregunta2.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" data-option="a" id="question2-a" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.a.valor +'">');
	
	var divB = $('<div class="content_txt_radio"></div>');
	var labelB = $('<label>'+state.questions.pregunta2.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" data-option="b" id="question2-b" name="option-2" class="option-input radio" value="'+ state.questions.pregunta2.opciones.b.valor +'">');
	
	var divC = $('<div class="content_txt_radio"></div>');
	var labelC = $('<label>'+state.questions.pregunta2.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" data-option="c" id="question2-c" name="option-2"  class="option-input radio" value="'+ state.questions.pregunta2.opciones.c.valor +'">');

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

	form.append(h3);
	form.append(divA);
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)

	if (inputA[0].id == idChecked2) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked2) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked2) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	}


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		 pregunta2 = $("input[name='option-2']:checked").val();
		 option2 = $("input[name='option-2']:checked").attr('data-option');
		 idChecked2 = $("input[name='option-2']:checked").attr("id");
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

	var divA = $('<div class="lbl-question"></div>');
	var labelA = $('<label>'+ state.questions.pregunta3.opciones.a.texto +'</label>');
	var inputA = $('<input type="radio" data-option="a" id="question3-a" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.a.valor +'">');
	
	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+ state.questions.pregunta3.opciones.b.texto +'</label>');
	var inputB = $('<input type="radio" data-option="b" id="question3-b" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.b.valor +'">');
	
	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+ state.questions.pregunta3.opciones.c.texto +'</label>');
	var inputC = $('<input type="radio"  data-option="c" id="question3-c" name="option-3" class="option-input radio" value="'+ state.questions.pregunta3.opciones.c.valor +'">');
	
	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+ state.questions.pregunta3.opciones.d.texto +'</label>');
	var inputD = $('<input type="radio"  data-option="d" id="question3-d" name="option-3"  class="option-input radio" value="'+ state.questions.pregunta3.opciones.d.valor +'">');
	
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

	if (inputA[0].id == idChecked3) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked3) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked3) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked3) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	}  

	
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta3 = $("input[name='option-3']:checked").val();
		option3 = $("input[name='option-3']:checked").attr('data-option');
		idChecked3 = $("input[name='option-3']:checked").attr("id");
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

  	var divA = $('<div class="lbl-question"></div>');
  	var labelA = $('<label>'+ state.questions.pregunta4.opciones.a.texto +'</label>');
	var inputA = $('<input type="radio" id="question4-a" data-option="a" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.a.valor +'">');
	
	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+ state.questions.pregunta4.opciones.b.texto +'</label>');
	var inputB = $('<input type="radio" id="question4-b" data-option="b" name="option-4" class="option-input radio" value="'+ state.questions.pregunta4.opciones.b.valor +'">');
	
	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+ state.questions.pregunta4.opciones.c.texto +'</label>');
	var inputC = $('<input type="radio" id="question4-c" data-option="c" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.c.valor +'">');
	
	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+ state.questions.pregunta4.opciones.d.texto +'</label>');
	var inputD = $('<input type="radio" id="question4-d" data-option="d" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.d.valor +'">');
	
	var divE = $('<div class="lbl-question"></div>');
	var labelE = $('<label>'+ state.questions.pregunta4.opciones.e.texto +'</label>');
	var inputE = $('<input type="radio"   id="question4-e" data-option="e" name="option-4"  class="option-input radio"value="'+ state.questions.pregunta4.opciones.e.valor +'">');
	
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
	divA.append(inputA,labelA);
	form.append(divB);
	divB.append(inputB,labelB);
	form.append(divC);
	divC.append(inputC,labelC)
	form.append(divD);
	divD.append(inputD,labelD);
	form.append(divE);
	divE.append(inputE,labelE);

	if (inputA[0].id == idChecked4) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked4) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked4) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked4) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked4) {
		inputE[0].checked = true;
		btn.prop('disabled', false);
	} 

	
	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta4 = $("input[name='option-4']:checked").val();
		option4 = $("input[name='option-4']:checked").attr('data-option');
		idChecked4 = $("input[name='option-4']:checked").attr("id");
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
	var divChart = $(' <div id="chartQuestion5" style="width:200; height:300"></div>');

	var form = $('<form class="col-xs-12 col-sm-12 col-md-12"></form>');

	var divA = $('<div class="lbl-question"></div>');
	var labelA = $('<label>'+ state.questions.pregunta5.opciones.a.texto +'</label>');
	var inputA = $('<input type="radio" id="question5-a" data-option="a" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.a.valor +'">');

	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+ state.questions.pregunta5.opciones.b.texto +'</label>');
	var inputB = $('<input type="radio" id="question5-b" data-option="b" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.b.valor +'">');

	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+ state.questions.pregunta5.opciones.c.texto +'</label>');
	var inputC = $('<input type="radio" id="question5-c" data-option="c" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.c.valor +'">');

	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+ state.questions.pregunta5.opciones.d.texto +'</label>');
	var inputD = $('<input type="radio" id="question5-d" data-option="d" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.d.valor +'">');

	var divE = $('<div class="lbl-question"></div>');
	var labelE = $('<label>'+ state.questions.pregunta5.opciones.e.texto +'</label>');
	var inputE = $('<input type="radio" id="question5-e" data-option="e" name="option-5" class="option-input radio" value="'+ state.questions.pregunta5.opciones.e.valor +'">');

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
	form.append(divChart);

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

	if (inputA[0].id == idChecked5) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked5) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked5) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked5) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked5) {
		inputE[0].checked = true;
		btn.prop('disabled', false);
	}


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta5 = $("input[name='option-5']:checked").val();
		option5 = $("input[name='option-5']:checked").attr('data-option');
		idChecked5 = $("input[name='option-5']:checked").attr("id");
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

	var divA = $('<div class="lbl-question"></div>');
	var labelA = $('<label>'+state.questions.pregunta6.opciones.a.texto+'</label>');
	var inputA = $('<input type="radio" id="question6-a" data-option="a" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.a.valor +'">');
	
	var divB = $('<div class="lbl-question"></div>');
	var labelB = $('<label>'+state.questions.pregunta6.opciones.b.texto+'</label>');
	var inputB = $('<input type="radio" id="question6-b" data-option="b" name="option-6"  class="option-input radio" value="'+ state.questions.pregunta6.opciones.b.valor +'">');
	
	var divC = $('<div class="lbl-question"></div>');
	var labelC = $('<label>'+state.questions.pregunta6.opciones.c.texto+'</label>');
	var inputC = $('<input type="radio" id="question6-c" data-option="c" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.c.valor +'">');
	
	var divD = $('<div class="lbl-question"></div>');
	var labelD = $('<label>'+state.questions.pregunta6.opciones.d.texto+'</label>');
	var inputD = $('<input type="radio" id="question6-d" data-option="d" name="option-6" class="option-input radio" value="'+ state.questions.pregunta6.opciones.d.valor +'">');

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

	if (inputA[0].id == idChecked6) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked6) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked6) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked6) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} 


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta6 = $("input[name='option-6']:checked").val();
		option6 = $("input[name='option-6']:checked").attr('data-option');
		idChecked6 = $("input[name='option-6']:checked").attr("id");
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
	var labelA = $('<label>'+state.questions.pregunta7.opciones.a.texto+'</label>');
  	var inputA = $('<input type="radio" id="question7-a" data-option="a" name="option-7" class="option-input radio" value="'+ state.questions.pregunta7.opciones.a.valor +'">');
  	
  	var divB = $('<div class=""></div>');
  	var labelB = $('<label>'+state.questions.pregunta7.opciones.b.texto+'</label>');
  	var inputB = $('<input type="radio" id="question7-b" data-option="b" name="option-7" class="option-input radio" value="'+ state.questions.pregunta7.opciones.b.valor +'">');
  	
  	var divC = $('<div class=""></div>');
  	var labelC = $('<label>'+state.questions.pregunta7.opciones.c.texto+'</label>');
  	var inputC = $('<input type="radio" id="question7-c" data-option="c" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.c.valor +'">');
  	
  	var divD = $('<div class=""></div>');
  	var labelD = $('<label>'+state.questions.pregunta7.opciones.d.texto+'</label>');
  	var inputD = $('<input type="radio" id="question7-d" data-option="d" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.d.valor +'">');
  	
  	var divE = $('<div class=""></div>');
  	var labelE = $('<label>'+state.questions.pregunta7.opciones.e.texto+'</label>');
  	var inputE = $('<input type="radio" id="question7-e" data-option="e" name="option-7"  class="option-input radio" value="'+ state.questions.pregunta7.opciones.e.valor +'">');

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
	
	if (inputA[0].id == idChecked7) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked7) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked7) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked7) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked7) {
		inputE[0].checked = true;
		btn.prop('disabled', false);
	} 


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta7 = $("input[name='option-7]:checked").val();
		option7 = $("input[name='option-7']:checked").attr('data-option');
		idChecked7 = $("input[name='option-7']:checked").attr("id");
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
  	var labelA = $('<label>'+state.questions.pregunta8.opciones.a.texto+'</label>');
  	var inputA = $('<input type="radio" id="question8-a" data-option="a" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.a.valor +'">');
  	
  	var divB = $('<div class=""></div>');
  	var labelB = $('<label>'+state.questions.pregunta8.opciones.b.texto+'</label>');
  	var inputB = $('<input type="radio" id="question8-b" data-option="b" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.b.valor +'">');
  	
  	var divC = $('<div class=""></div>');
  	var labelC = $('<label>'+state.questions.pregunta8.opciones.c.texto+'</label>');
  	var inputC = $('<input type="radio" id="question8-c" data-option="c" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.c.valor +'">');
  	
  	var divD = $('<div class=""></div>');
  	var labelD = $('<label>'+state.questions.pregunta8.opciones.d.texto+'</label>');
  	var inputD = $('<input type="radio" id="question8-d" data-option="d" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.d.valor +'">');
  	
  	var divE = $('<div class=""></div>');
  	var labelE = $('<label>'+state.questions.pregunta8.opciones.e.texto+'</label>');
  	var inputE = $('<input type="radio" id="question8-e" data-option="e" name="option-8" class="option-input radio" value="'+ state.questions.pregunta8.opciones.e.valor +'">');

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

	if (inputA[0].id == idChecked8) {
		inputA[0].checked = true;
		btn.prop('disabled', false);
	}else if (inputB[0].id == idChecked8) {
		inputB[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputC[0].id == idChecked8) {
		inputC[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputD[0].id == idChecked8) {
		inputD[0].checked = true;
		btn.prop('disabled', false);
	} else if (inputE[0].id == idChecked8) {
		inputE[0].checked = true;
		btn.prop('disabled', false);
	} 


	form.append(btn);

	$(function(){
			$('form input[type=radio]').change(function() {
					btn.prop('disabled', false);
			});
		});

	btn.on('click', function(e) {
		pregunta8 = $("input[name='option-8']:checked").val();
		option8 = $("input[name='option-8']:checked").attr('data-option');
		idChecked8 = $("input[name='option-8']:checked").attr("id");
		// option8 = option.slice(-1);
      if(pregunta8){
					sumaY += parseInt(pregunta8);
					console.log(sumaY);
      }
		state.screenView = "Loading";
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
  case "Loading":
    wrapper.append(Loading(_ => render(root)));
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
