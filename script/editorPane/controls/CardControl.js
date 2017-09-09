function CardControl(){
  this.template='<div class="cardOverall">'+
  '<h2><a class="toggleDisplay" href="">Card</a></h2>'+
  '<div class="controlContent hide">'+
  	'Type <select name="cardType">'+
  		'<option value="hero">Hero</option>'+
  		'<option value="monster">Monster</option>'+
  		'<option value="pet">Pet</option>'+
  		'<option disabled>----------</option>'+
  		'<option value="loot">Loot</option>'+
  		'<option value="treasure">Treasure</option>'+
  		'<option value="wonder">Wonder</option>'+
      '<option value="explore">Explore</option>'+
  		'<option disabled>----------</option>'+
  		'<option value="timeout">Timeout</option>'+
  		'<option disabled>-Experimental-</option>'+
  		'<option value="arcade">Arcade</option>'+
  		'<option value="command">Command</option>'+
  	'</select>'+

  	'<div class="cardScale">'+
  		'Scale <input class="number" name="cardScale" value="1.0" type="number" step="0.1" min="0.1" />'+
  	'</div>'+

  	'<div class="monster timeout">'+
  		'Color '+
  		'<select name="region">'+
  			'<option value="red">Red</option>'+
  			'<option value="green">Green</option>'+
  			'<option value="purple">Purple</option>'+
  			'<option value="yellow">Yellow</option>'+
  		'</select>'+
  	'</div>'+

  	'<div class="treasure loot">'+
  		'Orientation '+
  		'<select name="orientation">'+
  			'<option value="ruby">Top</option>'+
  			'<option value="emerald">Right</option>'+
  			'<option value="sapphire">Bottom</option>'+
  			'<option value="citrine">Left</option>'+
  		'</select>'+
  	'</div>'+
    '</div>'+
  '</div>';

  this.node=undefined;

  this._constructor=function(){
    var form = $('.editForm').data('node');
    this.node=$(this.template).appendTo(form.node);
    this.node.data('node',this);

    HasToggleDisplay.call(this);
  };

  this._constructor();
}
