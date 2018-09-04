var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
var dot1 = false,
    dot2 = false,
    dot3 = false;
var dot1Mob = false,
    dot2Mob = false,
    dot3Mob = false;

function point1() {
    canvas1 = document.getElementById("canvas_point1");
    anim_container = document.getElementById("animation_container_point1");
    dom_overlay_container = document.getElementById("dom_overlay_container_point1");
    var comp=AdobeAn.getComposition("point");
    var lib=comp.getLibrary();
    handleCompleteP1({},comp);
}
function point2() {
    canvas2 = document.getElementById("canvas_point2");
    anim_container = document.getElementById("animation_container_point2");
    dom_overlay_container = document.getElementById("dom_overlay_container_point2");
    var comp=AdobeAn.getComposition("point");
    var lib=comp.getLibrary();
    handleCompleteP2({},comp);
}
function point3() {
    canvas3 = document.getElementById("canvas_point3");
    anim_container = document.getElementById("animation_container_point3");
    dom_overlay_container = document.getElementById("dom_overlay_container_point3");
    var comp=AdobeAn.getComposition("point");
    var lib=comp.getLibrary();
    handleCompleteP3({},comp);
}
function handleCompleteP1(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib._Point1();
    stage = new lib.Stage(canvas1);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    function handleClick(event) {
        $(".scr1_item_1--hover").fadeIn();
        $(".scr1 .btn1").fadeIn();
        dot1 = true;
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas1.width = w*pRatio*sRatio;
            canvas1.height = h*pRatio*sRatio;
            canvas1.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas1.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function handleCompleteP2(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib._Point1();
    stage = new lib.Stage(canvas2);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    function handleClick(event) {
        $(".scr1_item_2--hover").fadeIn();
        $(".scr1 .btn2").fadeIn();
        dot2 = true;
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas2.width = w*pRatio*sRatio;
            canvas2.height = h*pRatio*sRatio;
            canvas2.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas2.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function handleCompleteP3(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib._Point1();
    stage = new lib.Stage(canvas3);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    function handleClick(event) {
        $(".scr1_item_3--hover").fadeIn();
        $(".scr1 .btn3").fadeIn();
        dot3 = true
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas3.width = w*pRatio*sRatio;
            canvas3.height = h*pRatio*sRatio;
            canvas3.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas3.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function scr2BtnInit() {
	canvas = document.getElementById("canvas_button");
	anim_container = document.getElementById("animation_container_button");
	dom_overlay_container = document.getElementById("dom_overlay_container_button");
	var comp=AdobeAn.getComposition("scr2Button");
	var lib=comp.getLibrary();
	scr2BtnHandleComplete({},comp);
}
function scr2BtnHandleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.Desktop_Scr2_Button();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    // TRANSITION TO SCREEN 2
    function handleClick(event) {
		$(".content").addClass("content-scr2");
		$(".main-block").addClass("main-block-scr2");
        $(".scr1").fadeOut();
        $("#animation_container_formula").hide();
        $("#animation_container_button").hide();
        scr3Init();
        $(".scr2").show();
        setTimeout(function () {
            $(".scr2_item_4").show();
        }, 1000);
        setTimeout(function () {
            $(".scr2_item_1").fadeIn(2000, function () {
                setTimeout(function () {
                    $(".scr2_item_2").fadeIn(1000, function () {
                        setTimeout(function () {
                            $(".scr2_item_3").fadeIn(1000, function () {});
                        }, 1000);
                    });
                }, 1000)
            });
        }, 1000);
    }
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
            }			
            sRatio = 0.5;
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function scr2FormulaInit() {
	canvas = document.getElementById("canvas_formula");
	anim_container = document.getElementById("animation_container_formula");
	dom_overlay_container = document.getElementById("dom_overlay_container_formula");
	var comp=AdobeAn.getComposition("scr2Formula");
	var lib=comp.getLibrary();
	scr2FormulaHandleComplete({},comp);
}
function scr2FormulaHandleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.Desktop_Scr2_Formula();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
            }			
            sRatio = 0.5;
			canvas.width = w*pRatio*sRatio;			
            canvas.height = h*pRatio*sRatio;

			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function scr3Init() {
	canvas = document.getElementById("canvas_scr3");
	anim_container = document.getElementById("animation_container_scr3");
	dom_overlay_container = document.getElementById("dom_overlay_container_scr3");
	var comp=AdobeAn.getComposition("scr3");
	var lib=comp.getLibrary();
	scr3HandleComplete({},comp);
}
function scr3HandleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.Desktop_Scr3();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);
				}			
            }			
            sRatio = 0.5;
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px'

			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function scr4Init() {
	canvas = document.getElementById("canvas_scr4");
	anim_container = document.getElementById("animation_container_scr4");
	dom_overlay_container = document.getElementById("dom_overlay_container_scr4");
	var comp=AdobeAn.getComposition("scr4");
	var lib=comp.getLibrary();
	scr4HandleComplete({},comp);
}
function scr4HandleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.Desktop_Scr45();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
            }			
            sRatio = 0.5;
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function scr6Init() {
	canvas = document.getElementById("canvas_scr6");
	anim_container = document.getElementById("animation_container_scr6");
	dom_overlay_container = document.getElementById("dom_overlay_container_scr6");
	var comp=AdobeAn.getComposition("F36272FA03167E4E96E6D02511D9334E");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.Desktop_Scr6();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function point1_mob() {
    canvas1 = document.getElementById("canvas_point1_mob");
    anim_container = document.getElementById("animation_container_point1_mob");
    dom_overlay_container = document.getElementById("dom_overlay_container_point1_mob");
    var comp=AdobeAn.getComposition("point");
    var lib=comp.getLibrary();
    handleCompleteMob1({},comp);
}
function point2_mob() {
    canvas2 = document.getElementById("canvas_point2_mob");
    anim_container = document.getElementById("animation_container_point2_mob");
    dom_overlay_container = document.getElementById("dom_overlay_container_point2_mob");
    var comp=AdobeAn.getComposition("point");
    var lib=comp.getLibrary();
    handleCompleteMob2({},comp);
}
function point3_mob() {
    canvas3 = document.getElementById("canvas_point3_mob");
    anim_container = document.getElementById("animation_container_point3_mob");
    dom_overlay_container = document.getElementById("dom_overlay_container_point3_mob");
    var comp=AdobeAn.getComposition("point");
    var lib=comp.getLibrary();
    handleCompleteMob3({},comp);
}
function handleCompleteMob1(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib._Point1();
    stage = new lib.Stage(canvas1);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    function handleClick(event) {
    	$("#" + canvas1.id + "_hover").fadeIn();
        $(".scr1_item_1_btn").fadeIn();
        dot1Mob = true;
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas1.width = w*pRatio*sRatio;
            canvas1.height = h*pRatio*sRatio;
            canvas1.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas1.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function handleCompleteMob2(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib._Point1();
    stage = new lib.Stage(canvas2);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    function handleClick(event) {
        $("#" + canvas2.id + "_hover").fadeIn();
        $(".scr1_item_2_btn").fadeIn();
        dot2Mob = true;
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas2.width = w*pRatio*sRatio;
            canvas2.height = h*pRatio*sRatio;
            canvas2.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas2.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function handleCompleteMob3(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib._Point1();
    stage = new lib.Stage(canvas3);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    var helper = new createjs.ButtonHelper(stage, "out", "over", "down", false, stage, "hit");
    stage.addEventListener("click", handleClick);
    stage.enableMouseOver();
    function handleClick(event) {
        $("#" + canvas3.id + "_hover").fadeIn();
        $(".scr1_item_3_btn").fadeIn();
        dot3Mob = true;
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas3.width = w*pRatio*sRatio;
            canvas3.height = h*pRatio*sRatio;
            canvas3.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas3.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function scr2FormulaMobInit() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("formula_mob");
    var lib=comp.getLibrary();
    handleCompleteFormulaMob({},comp);
}
function handleCompleteFormulaMob(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib.Mobile_Scr2_Formula();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function scr3Mob() {
    canvas = document.getElementById("canvas_scr3_mob");
    anim_container = document.getElementById("animation_container_scr3_mob");
    dom_overlay_container = document.getElementById("dom_overlay_container_scr3_mob");
    var comp=AdobeAn.getComposition("scr3_mob");
    var lib=comp.getLibrary();
    handleCompleteScr3Mob({},comp);
}
function handleCompleteScr3Mob(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib.Mobile_Scr3();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function scr4Mob() {
    canvas = document.getElementById("canvas_scr4_mob");
    anim_container = document.getElementById("animation_container_scr4_mob");
    dom_overlay_container = document.getElementById("dom_overlay_container_scr4_mob");
    var comp=AdobeAn.getComposition("scr4Mob");
    var lib=comp.getLibrary();
    handleScr4MobComplete({},comp);
}
function handleScr4MobComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot = new lib.Mobile_Scr456();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio=0.5;
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}
function scr5Mob() {
    canvas = document.getElementById("canvas_scr5_mob");
    anim_container = document.getElementById("animation_container_scr5_mob");
    dom_overlay_container = document.getElementById("dom_overlay_container_scr5_mob");
    var comp=AdobeAn.getComposition("scr5");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoadScr5(evt,comp)});
    loader.addEventListener("complete", function(evt){handleCompleteScr5(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoadScr5(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleCompleteScr5(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.Mobile_Scr7();
    stage = new lib.Stage(canvas);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        stage.addChild(exportRoot);
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            sRatio = 0.5;
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}