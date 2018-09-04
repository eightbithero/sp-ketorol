(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Desktop_Scr6_atlas_", frames: [[0,0,1270,397],[0,399,1120,383],[0,784,1043,368]]}
];


// symbols:



(lib.D_tetx1 = function() {
	this.spriteSheet = ss["Desktop_Scr6_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.D_tetx2 = function() {
	this.spriteSheet = ss["Desktop_Scr6_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.D_tetx3 = function() {
	this.spriteSheet = ss["Desktop_Scr6_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.D_tetx3();
	this.instance.parent = this;
	this.instance.setTransform(-521.5,-184);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t33, new cjs.Rectangle(-521.5,-184,1043,368), null);


(lib.t22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.D_tetx2();
	this.instance.parent = this;
	this.instance.setTransform(-560,-191.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t22, new cjs.Rectangle(-560,-191.5,1120,383), null);


(lib.t11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.D_tetx1();
	this.instance.parent = this;
	this.instance.setTransform(-635,-198.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.t11, new cjs.Rectangle(-635,-198.5,1270,397), null);


(lib.Text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_72 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(72).call(this.frame_72).wait(1));

	// D_tetx1.png
	this.instance = new lib.t11();
	this.instance.parent = this;
	this.instance.setTransform(-235,64.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:90.4,y:12.4,alpha:1},8).to({x:11,y:24.5},3).wait(62));

	// D_tetx2.png
	this.instance_1 = new lib.t22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(369.1,173.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({x:132,y:212.5},7).to({x:188,y:203.5},3).wait(51));

	// D_tetx3.png
	this.instance_2 = new lib.t33();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.5,372.2,1.502,1.502,0,0,0,0,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).to({regY:0,scaleX:0.98,scaleY:0.98,y:372},5).to({scaleX:1,scaleY:1},2).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-870,-133.9,1270,397);


// stage content:
(lib.Desktop_Scr6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.Text();
	this.instance.parent = this;
	this.instance.setTransform(763.5,331.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(883.5,817.6,1270,397);
// library properties:
lib.properties = {
	id: 'F36272FA03167E4E96E6D02511D9334E',
	width: 1980,
	height: 1240,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"assets/js/images/Desktop_Scr6_atlas_.png", id:"Desktop_Scr6_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F36272FA03167E4E96E6D02511D9334E'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;