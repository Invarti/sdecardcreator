/**
 *   SDE Card Creator source file ItemStatsControl,
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
 * Item Stats Control.
 * @class
 */
function ItemStatsControl(){
  BaseControl.call(this);
  this.template=''+
  '<!-- Accordion card (ItemStatsControl.js) -->'+
  '<div class="card loot treasure explore stats">'+
      '<div class="cardOverall card-header" role="tab" id="ItemStatsControl">'+
          '<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#ItemStatsControlBody" aria-expanded="false" aria-controls="ItemStatsControlBody">'+
          '<h5 class="mb-0">Card Stats <i class="fas fa-angle-down rotate-icon"></i></h5>'+
          '</a>'+
      '</div>'+
      '<!-- Card body -->'+
      '<div>'+
          '<div id="ItemStatsControlBody" class="controlContent collapse" role="tabpanel" aria-labelledby="ItemStatsControl" data-parent="#accordionMain">'+
              '<div class="card-body">'+

                '<div class="md-form col-12">'+
                '<input type="text" id="itemStats" name="itemStats" class="form-control text"  value="+1st">'+
                '<label for="itemStats" class="active">Item Stats</label>'+
                '</div>'+

                '<div class="col-12">'+
                '<button type="button" class="btn btn-danger " data-toggle="modal" data-target="#statsHelpModal">'+
                '<i class="fas fa-question-circle fa-lg"></i> Help'+
                '</button>'+
                '</div>'+

              '</div>'+    
          '</div>'+ 
      '</div>'+
  '</div>'+
  '<!-- Accordion card end -->';


  /**
   * Setup item stats control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasHelpButton.call(this);
    HasItemStatsControl.call(this);
  };

  /**
   * Sync stats from selected card.
   */
  this.sync=function(data){
    this.syncItemStats(data);
  };

  this._constructor();
}
