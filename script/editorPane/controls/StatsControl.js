/**
 *   SDE Card Creator source file StatsControl,
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
 * Stats Control.
 * 
 * 
 * 
 * 
 * @class
 */
function StatsControl(){
  BaseControl.call(this);
  this.template=''+
  '<!-- Accordion card (StatsControl.js) -->'+
  '<div class="card hero monster pet arcadeSolo stats">'+
      '<div class="cardOverall card-header" role="tab" id="headingOne1">'+
          '<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#collapseOne11" aria-expanded="false" aria-controls="collapseOne11">'+
          '<h5 class="mb-0">Card Stats <i class="fas fa-angle-down rotate-icon"></i></h5>'+
          '</a>'+
      '</div>'+
      '<!-- Card body -->'+
      '<div>'+
          '<div id="collapseOne11" class="controlContent collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionMain">'+
              '<div class="card-body">'+
                  '<div class="hero monster pet arcadeSolo stats">'+
                      '<div class="controlContent row">'+
                          '<div class="md-form col-6 hero monster pet arcadeSolo">'+
                              '<input type="text" id="STR" name="STR" class="form-control text" value="1sw 3b" min="0" max="9" >'+
                              '<label for="STR" class="active">Strength</label>'+
                          '</div>'+
                          '<div class="md-form col-6 hero monster pet arcadeSolo">'+
                              '<input type="text" id="ARM" name="ARM" class="form-control text" value="2b 1r sh" min="0" max="9" >'+
                              '<label for="ARM" class="active">Armor</label>'+
                          '</div>'+           
                          '<div class="md-form col-6 hero monster">'+
                              '<input type="text" id="WILL" name="WILL" class="form-control text" value="3b" min="0" max="9" >'+
                              '<label for="WILL" class="active">Willpower</label>'+
                          '</div>'+ 
                          '<div class="md-form col-6 hero monster">'+
                              '<input type="text" id="DEX" name="DEX" class="form-control text" value="3b" min="0" max="9" >'+
                              '<label for="DEX" class="active">Dexterity Points</label>'+
                          '</div>'+            
                          '<div class="md-form col-6 arcadeSolo">'+
                              '<input type="text" id="RNG" name="RNG" class="form-control text" value="6rg" min="0" max="9" >'+
                              '<label for="RNG" class="active">RNG</label>'+
                          '</div>'+  
                          '<div class="md-form col-6 hero monster pet arcadeSolo">'+
                              '<input type="number" id="potions" name="potions" class="form-control text" value="1" min="0" max="9" >'+
                              '<label for="potions" class="active">Potions</label>'+
                          '</div>'+
                          '<div class="md-form col-6 hero monster arcadeSolo">'+
                              '<input type="number" id="wounds" name="wounds" class="form-control text" value="3" min="0" max="9" >'+
                              '<label for="wounds" class="active">Wounds</label>'+
                          '</div>'+
                          '<div class="md-form col-6 monster">'+
                              '<input type="number" id="skull-points" name="skulls" class="form-control text" min="0" max="9" >'+
                              '<label for="skull-points" class="active">Skull Points</label>'+
                          '</div>'+
                          '<div class="col-12">'+
                              '<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#statsHelpModal">'+
                            	'<i class="fas fa-question-circle fa-lg"></i> Help'+
                              '</button>'+
                          '</div>'+
                    '</div>'+
                '</div>'
              '</div>'+
          '</div>'+
        '</div>'+
  '</div>'+
  '<!-- Accordion card end -->';



  /**
   * Setup stats control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasHelpButton.call(this);
    HasStatsControl.call(this);
  };


  /**
   * Sync stats from selected card.
   */
  this.sync=function(data){
    this.syncStats(data);
  };

  this._constructor();
}
