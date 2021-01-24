
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","HeadNode":"resource/eui_skins/game/HeadNode.exml","CommonShareUI":"resource/eui_skins/game/CommonShareUI.exml"};generateEUI.paths['resource/eui_skins/game/CommonShareUI.exml'] = window.CommonShareUISkin = (function (_super) {
	__extends(CommonShareUISkin, _super);
	function CommonShareUISkin() {
		_super.call(this);
		this.skinParts = ["img_bg","node_head"];
		
		this.height = 315;
		this.width = 600;
		this.elementsContent = [this.img_bg_i(),this._Group1_i()];
	}
	var _proto = CommonShareUISkin.prototype;

	_proto.img_bg_i = function () {
		var t = new eui.Image();
		this.img_bg = t;
		t.source = "img_share_invite_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 185;
		t.right = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.top = 0;
		t.width = 185;
		t.elementsContent = [this.node_head_i(),this._Image1_i()];
		return t;
	};
	_proto.node_head_i = function () {
		var t = new HeadNode();
		this.node_head = t;
		t.currentState = "cycle";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 185;
		t.scaleY = 1;
		t.source = "share_head_big_bolder_png";
		t.width = 185;
		return t;
	};
	return CommonShareUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HeadNode.exml'] = window.HeadNodeSkin = (function (_super) {
	__extends(HeadNodeSkin, _super);
	function HeadNodeSkin() {
		_super.call(this);
		this.skinParts = ["img_icon","img_mask","gp_content"];
		
		this.currentState = "square";
		this.elementsContent = [this.gp_content_i()];
		this.states = [
			new eui.State ("cycle",
				[
					new eui.SetProperty("img_mask","source","head_cycle_mask_png"),
					new eui.SetProperty("gp_content","width",160),
					new eui.SetProperty("gp_content","height",160)
				])
			,
			new eui.State ("square",
				[
					new eui.SetProperty("img_mask","source","head_square_mask_png"),
					new eui.SetProperty("img_mask","scale9Grid",new egret.Rectangle(13,15,40,38)),
					new eui.SetProperty("gp_content","width",69),
					new eui.SetProperty("gp_content","height",69)
				])
			,
			new eui.State ("square_big",
				[
					new eui.SetProperty("img_mask","source","head_square_mask_png"),
					new eui.SetProperty("img_mask","scale9Grid",new egret.Rectangle(13,15,40,38)),
					new eui.SetProperty("gp_content","width",145),
					new eui.SetProperty("gp_content","height",145)
				])
			,
			new eui.State ("cycle_share",
				[
					new eui.SetProperty("img_mask","source","head_cycle_mask_png"),
					new eui.SetProperty("gp_content","width",135),
					new eui.SetProperty("gp_content","height",135)
				])
			,
			new eui.State ("cycle_share_big",
				[
					new eui.SetProperty("img_mask","source","head_cycle_mask_png"),
					new eui.SetProperty("gp_content","width",195),
					new eui.SetProperty("gp_content","height",195)
				])
			,
			new eui.State ("square_medium",
				[
					new eui.SetProperty("img_mask","source","head_square_mask_png"),
					new eui.SetProperty("img_mask","scale9Grid",new egret.Rectangle(13,15,40,38)),
					new eui.SetProperty("gp_content","width",80),
					new eui.SetProperty("gp_content","height",80)
				])
			,
			new eui.State ("square_m",
				[
					new eui.SetProperty("img_mask","source","head_square_mask_png"),
					new eui.SetProperty("img_mask","scale9Grid",new egret.Rectangle(13,15,40,38)),
					new eui.SetProperty("gp_content","width",137),
					new eui.SetProperty("gp_content","height",137)
				])
			,
			new eui.State ("cycle_mini",
				[
					new eui.SetProperty("img_mask","source","head_cycle_mask_png"),
					new eui.SetProperty("gp_content","width",65),
					new eui.SetProperty("gp_content","height",65)
				])
		];
	}
	var _proto = HeadNodeSkin.prototype;

	_proto.gp_content_i = function () {
		var t = new eui.Group();
		this.gp_content = t;
		t.height = 72;
		t.width = 72;
		t.elementsContent = [this.img_icon_i(),this.img_mask_i()];
		return t;
	};
	_proto.img_icon_i = function () {
		var t = new eui.Image();
		this.img_icon = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.source = "default-portrait_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.img_mask_i = function () {
		var t = new eui.Image();
		this.img_mask = t;
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	return HeadNodeSkin;
})(eui.Skin);