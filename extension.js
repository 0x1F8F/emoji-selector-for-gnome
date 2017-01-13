/* Import St because is the library that allow you to create UI elements */
const St = imports.gi.St;


/* Import Clutter because is the library that allow you to layout UI elements */
const Clutter = imports.gi.Clutter;

/*
Import Main because is the instance of the class that have all the UI elements
and we have to add to the Main instance our UI elements
*/
const Main = imports.ui.main;

/*
Import PanelMenu and PopupMenu 
See more info about these objects in REFERENCE.md
*/
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;

/*
Import Lang because we will write code in a Object Oriented Manner
*/
const Lang = imports.lang;

//------------------------------------------------

const Clipboard = St.Clipboard.get_default();
const CLIPBOARD_TYPE = St.ClipboardType.CLIPBOARD;

//------------------------------------------------

const EmojisMenu = new Lang.Class({
    Name: 'EmojisMenu',   // Class Name
    Extends: PanelMenu.Button,  // Parent Class

    // Constructor
    _init: function() {

        this.parent(0, 'EmojisMenu', false);

        let box = new St.BoxLayout();
        
        let toplabel = new St.Label({ text: '😐',
            y_expand: true,
            y_align: Clutter.ActorAlign.CENTER });

        box.add(toplabel);
        box.add(PopupMenu.arrowIcon(St.Side.BOTTOM));
        this.actor.add_child(box);
		
		//-------------------------------------------------
		
        let SmileysPeople = new PopupMenu.PopupSubMenuMenuItem('Smileys & People');
		let Nature = new PopupMenu.PopupSubMenuMenuItem('Nature');
		let FoodDrink = new PopupMenu.PopupSubMenuMenuItem('Food & Drink');
		let ActivitySports = new PopupMenu.PopupSubMenuMenuItem('Activities & Sports');
		let TravelPlaces = new PopupMenu.PopupSubMenuMenuItem('Travel & Places');
		let Objects = new PopupMenu.PopupSubMenuMenuItem('Objects');
		let Symbols = new PopupMenu.PopupSubMenuMenuItem('Symbols');
		let Flags = new PopupMenu.PopupSubMenuMenuItem('Flags');
		
		//-------------------------------------------------
		
		let smileys = ['😀','😃','😄','😁','😆','😅','😂','🤣','☺️','😊','😇','🙂','🙃','😉','😌','😍','😘','😗','😙','😚','😋','😜',
			'😝','😛','🤑','🤗','🤓','😎','🤡','🤠','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','😤','😠','😡','😶','😐','😑',
			'😯','😦','😧','😮','😲','😵','😳','😱','😨','😰','😢','😥','🤤','😭','😓','😪','😴','🙄','🤔','🤥','😬','🤐','🤢','🤧','😷',
			'🤒','🤕','😈','👿','👹','👺','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾',

			'👐','🙌','👏','🙏','🤝','👍','👎','👊','✊','🤛','🤜','🤞','✌️','🤘','👌','👈','👉','👆','👇','☝️','✋','🤚',
			'🖐','🖖','👋','🤙','💪','🖕','✍️','🤳','💅','🖖','💄','💋','👄','👅','👂','👃','👣','👁','👀',
		
			'🗣','👤','👥','👶','👦','👧','👨','👩','👱','👴','👵','👲','👳','👮','👷','💂','🕵️','🤶','🎅','👸','🤴','👰',
			'🤵','👼','🤰','🙇','💁','🙅','🙆','🙋','🤦‍','🤷‍','🙎','🙍','💇','💆','🕴','💃','🕺','👯','🚶','🏃','👫','👭','👬','💑','💏','👪',
		
			'👚','👕','👖','👔','👗','👙','👘','👠','👡','👢','👞','👟','👒','🎩','🎓','👑','⛑','🎒','👝','👛','👜','💼','👓',
			'🕶','🌂','☂️'];
		
		for (var i = 0; i < smileys.length; i++) {
			var item = new PopupMenu.PopupMenuItem(smileys[i]);
			
			SmileysPeople.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, smileys[arguments[2]] );
			}, i));
		}
		
		//--------------------------------------------------
		
		let nature = ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙊','🙉','🙊','🐒','🐔','🐧',
			'🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐚','🐞','🐜','🕷','🕸','🐢','🐍','🦎','🦂',
			'🦀','🦑','🐙','🦐','🐠','🐟','🐡','🐬','🦈','🐳','🐋','🐊','🐆','🐅','🐃','🐂','🐄','🦌','🐪','🐫','🐘','🦏','🦍','🐎','🐖',
			
			'🐐','🐏','🐑','🐕','🐩','🐈','🐓','🦃','🕊','🐇','🐁','🐀','🐿','🐾','🐉','🐲',
			
			'🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌻','🌼','🌸','🌺',
			
			'🌎','🌍','🌏','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌚','🌝','🌞','🌛','🌜','🌙','💫','⭐️','🌟','✨','⚡️','🔥',
			'💥','☄️','☀️','🌤','⛅️','🌥','🌦','🌈','☁️','🌧','⛈','🌩','🌨','☃️','⛄️','❄️','🌬','💨','🌪','🌫','🌊','💧','💦','☔️'];
			
			for (var i = 0; i < nature.length; i++) {
			var item = new PopupMenu.PopupMenuItem(nature[i]);
			
			Nature.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, nature[arguments[2]] );
			}, i));
		}
		
		//--------------------------------------------------
		
		let fooddrink = ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🍍','🥝','🥑','🍅','🍆','🥒','🥕','🌽','🌶','🥔',
			'🍠','🌰','🥜','🍯','🥐','🍞','🥖','🧀','🥚','🍳','🥓','🥞','🍤','🍗','🍖','🍕','🌭','🍔','🍟','🥙','🌮','🌯','🥗','🥘','🍝',
			'🍜','🍲','🍥','🍣','🍱','🍛','🍚','🍙','🍘','🍢','🍡','🍧','🍨','🍦','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🥛','🍼',
			'☕️','🍵','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🍾','🥄','🍴','🍽'];
		for (var i = 0; i < fooddrink.length; i++) {
			var item = new PopupMenu.PopupMenuItem(fooddrink[i]);
			
			FoodDrink.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, fooddrink[arguments[2]] );
			}, i));
		}
		
		//--------------------------------------------------
		
		let activities = ['⚽️','🏀','🏈','⚾️','🎾','🏐','🏉','🎱','🏓','🏸','🥅','🏒','🏑','🏏','⛳️','🏹','🎣','🥊','🥋','⛸','🎿','⛷','🏂','🏋️',
			'🤺','🤼‍','🤸‍','⛹️','🤾‍','🏌️','🏄','🏊','🤽‍','🚣','🏇','🚴','🚵','🎽','🏅','🎖','🥇','🥈','🥉','🏆','🏵','🎗','🎫','🎟','🎪','🤹‍','🎭',
			'🎨','🎬','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🎻','🎲','🎯','🎳','🎮','🎰'];
		for (var i = 0; i < activities.length; i++) {
			var item = new PopupMenu.PopupMenuItem(activities[i]);
			
			ActivitySports.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, activities[arguments[2]] );
			}, i));
		}
	
		//--------------------------------------------------
		
		let travelplaces = ['🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🛴','🚲','🛵','🏍','🚨','🚔','🚍','🚘','🚖',
			'🚡','🚠','🚟','🚃','🚋','🚞','🚝','🚄','🚅','🚈','🚂','🚆','🚇','🚊','🚉','🚁','🛩','✈️','🛫','🛬','🚀','🛰','💺','🛶','⛵️','🛥',
			'🚤','🛳','⛴','🚢','⚓️','🚧','⛽️','🚏','🚦','🚥','🗺','🗿','🗽','⛲️','🗼','🏰','🏯','🏟','🎡','🎢','🎠','⛱','🏖','🏝','⛰','🏔',
			'🗻','🌋','🏜','🏕','⛺️','🛤','🛣','🏗','🏭','🏠','🏡','🏘','🏚','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛','⛪️',
			'🕌','🕍','🕋','⛩','🗾','🎑','🏞','🌅','🌄','🌠','🎇','🎆','🌇','🌆','🏙','🌃','🌌','🌉','🌁'];
		for (var i = 0; i < travelplaces.length; i++) {
			var item = new PopupMenu.PopupMenuItem(travelplaces[i]);
			
			TravelPlaces.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, travelplaces[arguments[2]] );
			}, i));
		}
	
		//--------------------------------------------------
		
		let objects = ['⌚️','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞',
			'☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⌛️','⏳','📡','🔋','🔌','💡','🔦','🕯','🗑','🛢','💸','💵','💴','💶',
			'💷','💰','💳','💎','⚖️','🔧','🔨','⚒','🛠','⛏','🔩','⚙️','⛓','🔫','💣','🔪','🗡','⚔️','🛡','🚬','⚰️','⚱️','🏺','🔮','📿','💈','⚗️',
			'🔭','🔬','🕳','💊','💉','🌡','🚽','🚰','🚿','🛁','🛀','🛎','🔑','🗝','🚪','🛋','🛏','🛌','🖼','🛍','🛒','🎁','🎈','🎏','🎀','🎊',
			'🎉','🎎','🏮','🎐','✉️','📩','📨','📧','💌','📥','📤','📦','🏷','📪','📫','📬','📭','📮','📯','📜','📃','📄','📑','📊','📈','📉',
			'🗒','🗓','📆','📅','📇','🗃','🗳','🗄','📋','📁','📂','🗂','🗞','📰','📓','📔','📒','📕','📗','📘','📙','📚','📖','🔖','🔗','📎',
			'🖇','📐','📏','📌','📍','📌','🎌','🏳️','🏴','🏁','🏳️‍🌈','✂️','🖊','🖋','✒️','🖌','🖍','📝','✏️','🔍','🔎','🔏','🔐','🔒','🔓'];
			
		for (var i = 0; i < objects.length; i++) {
			var item = new PopupMenu.PopupMenuItem(objects[i]);
			
			Objects.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, objects[arguments[2]] );
			}, i));
		}
	
		//--------------------------------------------------

		let symbols = ['❤️','💛','💚','💙','💜','🖤','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟',
		
		'☮️','✝️','☪️','🕉','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈️','♉️','♊️','♋️','♌️','♍️','♎️','♏️','♐️','♑️','♒️','♓️',
		
		'🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚️','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘',
		'❌','⭕️','🛑','⛔️','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗️','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️',
		'🔰','♻️','✅','🈯️','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿️','🅿️','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮',
		'🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣','▶️',
		'⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','⏫','⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','↪️','↩️','⤴️','⤵️','🔀','🔁',
		'🔂','🔄','🔃','🎵','🎶','➕','➖','➗','✖️','💲','💱','™️','©️','®️','〰️','➰','➿','🔚','🔙','🔛','🔝','✔️','☑️','🔘','⚪️','⚫️','🔴','🔵','🔺',
		'🔻','🔸','🔹','🔶','🔷','🔳','🔲','▪️','▫️','◾️','◽️','◼️','◻️','⬛️','⬜️','🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','💬','💭','🗯','♠️','♣️','♥️',
		'♦️','🃏','🎴','🀄️',
		
		'🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦','🕧'];
	
		for (var i = 0; i < symbols.length; i++) {
			var item = new PopupMenu.PopupMenuItem(symbols[i]);
			
			Symbols.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, symbols[arguments[2]] );
			}, i));
		}
	
		//--------------------------------------------------
		
		let flags = ['🏳️','🏴','🏁','🚩','🇦🇫','🇦🇽','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧',
		'🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇮🇴','🇻🇬','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇮🇨','🇨🇻','🇧🇶','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳',
		'🇨🇽','🇨🇨','🇨🇴','🇰🇲','🇨🇬','🇨🇩','🇨🇰','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇼','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇪🇹','🇪🇺','🇫🇰',
		'🇫🇴','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇹🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇮','🇬🇷','🇬🇱','🇬🇩','🇬🇵','🇬🇺','🇬🇹','🇬🇬','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺',
		'🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇲','🇮🇱','🇮🇹','🇯🇲','🇯🇵','🎌','🇯🇪','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮',
		'🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇾🇹','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷',
		'🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇳🇫','🇰🇵','🇲🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇳','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇪',
		'🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇽','🇸🇰','🇸🇮','🇬🇸','🇸🇧','🇸🇴','🇿🇦','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇧🇱','🇸🇭','🇰🇳','🇱🇨','🇵🇲',
		'🇻🇨','🇸🇩','🇸🇷','🇸🇿','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇱','🇹🇬','🇹🇰','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇨','🇹🇻','🇻🇮','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸',
		'🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇼🇫','🇪🇭','🇾🇪','🇿🇲','🇿🇼'];
		
		for (var i = 0; i < flags.length; i++) {
			var item = new PopupMenu.PopupMenuItem(flags[i]);
			
			Flags.menu.addMenuItem(item);
			
			item.connect('activate', Lang.bind(this, function(i){
				Clipboard.set_text(CLIPBOARD_TYPE, flags[arguments[2]] );
			}, i));
		}
		
		//--------------------------------------------------
		
		this.menu.addMenuItem(SmileysPeople);
		this.menu.addMenuItem(Nature);
		this.menu.addMenuItem(FoodDrink);
		this.menu.addMenuItem(ActivitySports);
		this.menu.addMenuItem(TravelPlaces);
		this.menu.addMenuItem(Objects);
		this.menu.addMenuItem(Symbols);
		this.menu.addMenuItem(Flags);
		
		//--------------------------------------------------

    	this.menu.connect('open-state-changed', Lang.bind(this, function(){
			SmileysPeople.setSubmenuShown(true);
		}));
	
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			Nature.setSubmenuShown(false);
		}));
		
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			FoodDrink.setSubmenuShown(false);
		}));
		
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			ActivitySports.setSubmenuShown(false);
		}));
		
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			TravelPlaces.setSubmenuShown(false);
		}));
		
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			Objects.setSubmenuShown(false);
		}));
		
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			Symbols.setSubmenuShown(false);
		}));
		
		this.menu.connect('open-state-changed', Lang.bind(this, function(){
			Flags.setSubmenuShown(false);
		}));
		
		SmileysPeople.menu.box.style_class = 'EmojisItemStyle';
		Nature.menu.box.style_class = 'EmojisItemStyle';
		FoodDrink.menu.box.style_class = 'EmojisItemStyle';
		ActivitySports.menu.box.style_class = 'EmojisItemStyle';
		TravelPlaces.menu.box.style_class = 'EmojisItemStyle';
		Objects.menu.box.style_class = 'EmojisItemStyle';
		Symbols.menu.box.style_class = 'EmojisItemStyle';
		Flags.menu.box.style_class = 'EmojisItemStyle';	
		
    },

    destroy: function() {
        this.parent();
    }
});

/* Global variables for use as button to click */
let button;

function init() {}

function enable() {
    button = new EmojisMenu;

    /*
    - 0 is the position
    - `right` is the box where we want our button to be displayed (left/center/right)
     */
	Main.panel.addToStatusArea('EmojisMenu', button, 0, 'right');
}

function disable() {
	button.destroy();   
}


