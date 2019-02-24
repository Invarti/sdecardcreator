/**
 *   SDE Card Creator source file CardControl,
 *   Copyright (C) 2017  James M Adams
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Card Control.
 * @class
 * 
 * <select class="browser-default custom-select">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 * 
 */
function CardControl(){
  BaseControl.call(this);
  this.template=''+
  '<!-- Accordion card (CardControl.js) -->'+
  '<div class="card">'+
      '<div class="cardOverall card-header" role="tab" id="headingOne1">'+
          '<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">'+
          '<h5 class="mb-0">Card Type <i class="fas fa-angle-down rotate-icon"></i></h5>'+
          '</a>'+
      '</div>'+
      '<!-- Card body -->'+
      '<div>'+
          '<div id="collapseOne1" class="controlContent collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionMain">'+
              '<div class="card-body">'+
                  '<div class="md-form mb-3">'+
                    '<select name="cardType" class="browser-default custom-select" id="cardTypeSelect">'+
                        '<option value="" disabled selected>Select card type</option>'+
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
                        '<option disabled>----------</option>'+
                        '<option value="command">Command</option>'+
                        '<option disabled>-- Experimental --</option>'+
                        '<option value="arcadeSolo">Arcade Solo</option>'+
                        '<option value="arcadeGang">Arcade Gang</option>'+
                    '</select>'+
                  '</div>'+
                  '<!-- Card  Scale Input -->'+
                  '<div class="mb-4">'+
                    '<label for="cardScale">Card Scale</label>'+
                    '<input name="cardScale" id="cardScale" type="range" value="1.0 min="0.25" max="2" step="0.25" class="custom-range">'+
                    '<small class="form-text text-muted">Use the slider to increase or decrease card size</small>'+
                  '</div>'+
                  '<div class="md-form mb-3">'+
                    '<input type="text" id="author" name="author" class="form-control text">'+
                    '<label for="author">Author</label>'+
                  '</div>'+
                  '<div class="monster timeout md-form mb-3">'+
                    '<select name="region" class="browser-default custom-select" id="regionSelect">'+
                        '<option value="" disabled selected>Select card colour</option>'+
                        '<option value="red">Red</option>'+
                        '<option value="green">Green</option>'+
                        '<option value="purple">Purple</option>'+
                        '<option value="yellow">Yellow</option>'+
                    '</select>'+
                  '</div>'+   
                  '<div class="treasure loot md-form mb-3">'+
                    '<select name="orientation" class="browser-default custom-select" id="orientationSelect">'+
                        '<option value="" disabled selected>Select card Orientation</option>'+
                        '<option value="ruby">Top</option>'+
                        '<option value="emerald">Right</option>'+
                        '<option value="sapphire">Bottom</option>'+
                        '<option value="citrine">Left</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
  '</div>'+
  '<!-- Accordion card end -->';


  /**
   * Setup card control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasCardTypeControl.call(this);
    HasScaleControl.call(this);
    HasRegionControl.call(this);
    HasOrientationControl.call(this);
  };

  /**
   * Sync card type, scale, region, and orientation from selected card.
   */
  this.sync=function(data){
    this.syncCardType(data);
    this.syncScale(data);
    this.syncAuthor(data);
    this.syncRegion(data);
    this.syncOrientation(data);
  };

  this._constructor();
}
