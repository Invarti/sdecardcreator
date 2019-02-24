/**
 *   SDE Card Creator source file HeaderControl,
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
 * Header Control.
 * @class
 */
function HeaderControl(activeClass){
  BaseControl.call(this);
  this.template=''+
  '<!-- Accordion card (HeaderControl.js) -->'+
  '<div class="card">'+
      '<div class="cardOverall card-header" role="tab" id="headingOne1">'+
          '<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#collapseOne2" aria-expanded="false" aria-controls="collapseOne2">'+
          '<h5 class="mb-0">Card Header <i class="fas fa-angle-down rotate-icon"></i></h5>'+
          '</a>'+
      '</div>'+
      '<!-- Card body -->'+
      '<div>'+
          '<div id="collapseOne2" class="controlContent collapse" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionMain">'+
              '<div class="card-body">'+
                  '<div class="input-group mb-3">'+
                    '<div class="md-form col-12 hero monster pet treasure wonder loot explore command arcadeSolo timeout">'+
                      '<input type="text" id="title" name="title" class="form-control text" value="Title" required maxlength="30">'+
                      '<label for="title" class="active">Title</label>'+
                      '<small class="form-text text-muted">Max 30 characters</small>'+
                    '</div>'+
                    '<div class="md-form col-12 hero monster pet arcadeSolo">'+
                      '<input type="text" id="subTitle" name="subTitle" class="form-control text" value="Subtitle" maxlength="40">'+
                      '<label for="subTitle" class="active">SubTitle</label>'+
                      '<small class="form-text text-muted">Max 40 characters</small>'+
                    '</div>'+
                    '<div class="md-form col-6 hero monster pet arcadeSolo">'+
                      '<input type="number" id="move" name="move" class="form-control text" value="6" min="0" max="99" >'+
                      '<label for="move" class="active">Move</label>'+
                    '</div>'+
                    '<div class="md-form col-6 hero monster pet arcadeSolo">'+
                      '<input type="number" id="actions" name="actions" class="form-control text" value="3" min="0" max="99" >'+
                      '<label for="actions" class="active">Actions</label>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
  '</div>'+
  '<!-- Accordion card end -->';

  /**
   * Setup header control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasTitleControl.call(this);
    HasSubTitleControl.call(this);
    HasMoveControl.call(this);
    HasActionsControl.call(this);

    if(activeClass){
      this.node.find('.displayArrow').removeClass('active inactive').addClass(activeClass);
    }
  };

  /**
   * Sync title, subTitle, move, and actions from selected card.
   */
  this.sync=function(data){
    this.syncTitle(data);
    this.syncSubTitle(data);
    this.syncMove(data);
    this.syncActions(data);
  };

  this._constructor();
}
