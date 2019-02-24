/**
 *   SDE Card Creator source file FlavorTextControl,
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
 * Flavor Text Control.
 * @class
 */
function FlavorTextControl(){
  BaseControl.call(this);
  this.template=''+
  '<!-- Accordion card (HeaderControl.js) -->'+
  '<div class="card hero monster loot treasure wonder explore arcadeSolo flavorText">'+
      '<div class="cardOverall card-header" role="tab" id="HeaderControl">'+
          '<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#HeaderControlBody" aria-expanded="false" aria-controls="HeaderControlBody">'+
          '<h5 class="mb-0">Card Flavor Text <i class="fas fa-angle-down rotate-icon"></i></h5>'+
          '</a>'+
      '</div>'+
      '<!-- Card body -->'+
      '<div>'+
          '<div id="HeaderControlBody" class="controlContent collapse" role="tabpanel" aria-labelledby="HeaderControl" data-parent="#accordionMain">'+
              '<div class="card-body">'+                
                '<div class="hero monster loot treasure wonder explore arcadeSolo flavorText">'+
                  '<div class="input-group md-form">'+
                    '<textarea name="flavorText" type="text" id="flavorText" class="md-textarea form-control" rows="3"></textarea>'+
                    '<label for="flavorText">Flavor Text</label>'+
                  '</div>'+
              '</div>'+
          '</div>'+
      '</div>'+
  '</div>'+
  '<!-- Accordion card end -->';




  /**
   * Setup flavor text control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasFlavorTextControl.call(this);
  };


  /**
   * Sync flavor text from selected card.
   */
  this.sync=function(data){
    this.syncFlavorText(data);
  };

  this._constructor();
}
