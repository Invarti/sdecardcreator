/**
 *   SDE Card Creator source file CardModifierControl,
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
 * Card Modifier Control.
 * @mixin
 */
function CardModifierControl(){
  BaseControl.call(this);
  this.template=''+
  '<!-- Accordion card (HeaderControl.js) -->'+
  '<div class="card">'+
    '<div class="card-body cardModifier">'+
            '<div class="controlContent">'+
                '<div class="mb-3">'+
                    '<div class="mb-1">'+
                        '<a href="" class="duplicateCardButton cardModifier" data-action="duplicate"><button class="btn btn-secondary btn-block" type="submit"><i class="fas fa-copy mr-1"></i> Duplicate</button></a>'+
                    '</div>'+
                    '<div class="mb-1">'+
                        '<a href="" class="moveCardUpButton cardModifier" data-action="up"><button class="btn btn-info btn-block" type="submit"><i class="fas fa-chevron-up mr-1"></i> Move Up</button></a>'+
                    '</div>'+
                    '<div class="mb-1">'+
                        '<a href="" class="moveCardDownButton cardModifier" data-action="down"><button class="btn btn-info btn-block" type="submit"><i class="fas fa-chevron-down mr-1"></i> Move Down</button></a>'+
                    '</div>'+
                    '<div class="mb-1">'+
                        '<a href="" class="deletCardButton cardModifier" data-action="delete"><button class="btn btn-danger btn-block" type="submit"><i class="fas fa-trash-alt mr-1"></i> Delete</button></a>'+
                    '</div>'+
                '</div>'+
            '</div>'+
    '</div>'
  '</div>'+
  '<!-- Accordion card end -->';
  
;

  /**
   * Setup card modifier control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasCardModifierControl.call(this);
  };

  this._constructor();
}
