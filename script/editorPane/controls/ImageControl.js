function ImageControl(){
  this.template='<div class="hero monster pet treasure wonder loot explore character command timeout">'+
    '<h2><a class="toggleDisplay" href="">Image</a></h2>'+
    '<div class="controlContent hide">'+
    '<div class="hero monster pet">Background'+
      '<select name="background">'+
        '<option value="pic1685577_md.jpg">Fae Wood</option>'+
        '<option value="character-background.png">Nether</option>'+
        '<option value="forgotten-king.png">Forgotten King</option>'+
        '<option value="roxors-cavern.png">Roxor\'s Cavern</option>'+
        '<option value="nas.png">Ninja All-Stars</option>'+

        '<option disabled>----------</option>'+

        '<option value="arctic.jpg">Arctic</option>'+
        '<option value="castle_room.jpg">Castle Room</option>'+
        '<option value="city_street.jpg">City Street</option>'+
        '<option value="desert.jpg">Desert</option>'+
        '<option value="dragons_hoard.jpg">Dragon Hoard</option>'+
        '<option value="dungeon.jpg">Dungeon</option>'+
        '<option value="fantasy_tower.jpg">Fantasy Tower</option>'+
        '<option value="forrest_stream.jpg">Forrest Stream</option>'+
        '<option value="icy_throne.jpg">Icy Throne</option>'+
        '<option value="kings_throne.jpg">King\'s Throne</option>'+

        '<option value="kitchen.jpg">Kitchen</option>'+
        '<option value="lonely_tower.jpg">Lonely Tower</option>'+
        '<option value="market.jpg">Market</option>'+
        '<option value="meadow.jpg">Meadow</option>'+
        '<option value="minotaurs_throne_room.jpg">Minotaur\'s Throne Room</option>'+
        '<option value="f8ebe365c206a57065d4970fb91b5d78.jpg">Pirates Cove</option>'+
        '<option value="prison_tower.jpg">Prison Tower</option>'+
        '<option value="queens_throne_room.jpg">Queen\'s Throne Room</option>'+
        '<option value="ruins.jpg">Ruins</option>'+
        '<option value="swamp.jpg">Swamp</option>'+

        '<option value="temple.jpg">Temple</option>'+
        '<option value="tundra.jpg">Tundra</option>'+
        '<option value="valley.jpg">Valley</option>'+
      '</select>'+

      '<input title="flip" type="checkbox" name="backgroundFlip" />'+
    '</div>'+

    '<div>'+
      'Avatar'+
      '<div class="hero monster pet loot treasure wonder explore command timeout"><input type="radio" name="imageSource" value="default" checked="checked">Default</div>'+
      '<div class="explore"><input type="radio" name="imageSource" value="creep" />Creep Spawn <input name="creepSpawn" class="number" type="number" min="0" max="99" value="3" /></div>'+
      '<div><input type="radio" name="imageSource" value="remote">Remote <input name="rCharacter" placeholder="http://" /></div>'+
      '<div><input type="radio" name="imageSource" value="local">Local <input type="file" name="character" /></div>'+
    '</div>'+
  '</div>'+
  '</div>';

  this.parent=undefined;
  this.node=undefined;

  this._constructor=function(){
    this.parent = $('.editForm').data('node');
    this.node=$(this.template).appendTo(this.parent.node);
    this.node.data('node',this);

    HasToggleDisplay.call(this);
  };

  this._constructor();
}
