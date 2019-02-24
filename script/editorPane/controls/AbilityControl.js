/**
 *   SDE Card Creator source file AbilityControl,
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
 * Ability Control.
 * @class
 */
function AbilityControl(){
  BaseControl.call(this);
	this.template=''+
  '<!-- Accordion card (CardControl.js) -->'+
	'<div class="card hero monster pet loot treasure explore wonder command timeout arcadeSolo abilitySection">'+
	
    '<div class="cardOverall card-header" role="tab" id="abilityControl">'+
     	'<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#abilityControlContent" aria-expanded="false" aria-controls="abilityControlContent">'+
      '<h5 class="mb-0">Card Ability <i class="fas fa-angle-down rotate-icon"></i></h5>'+
      '</a>'+
		'</div>'+
		
		'<!-- Card body -->'+
		
    '<div>'+
			'<div id="abilityControlContent" class="controlContent collapse" role="tabpanel" aria-labelledby="abilityControl" data-parent="#accordionMain">'+
				'<div class="card-body cardModifier">'+
					'<div class="abilities">'+
					'</div>'+


          '<hr class="featurette-divider">'+
          '<div class=" btn-group" role="group">'+
          '<a href="" class="addAbility" title="Add New"> <button class="btn btn-info mr-2">Add New</button></a>'+

          '<button type="button" class="btn btn-danger mr-2" data-toggle="modal" data-target="#abilityHelpModal"><i class="fas fa-question-circle fa-lg"></i> Help</button>'+

					'</div>'+
				'</div>'+
			'</div>'+

		'</div>'+
	'</div>'+
  '<!-- Accordion card end -->';


  /**
   * Setup ability control
   */
  this.setup=function(){
    //HasToggleDisplay.call(this);
    //HasHelpButton.call(this);

    HasAddAbilityControl.call(this);
  };


  /**
   * Sync abilities from selected card.
   */
  this.sync=function(abilities){
    this.syncAbilities(abilities);
  };

  this._constructor();
}
