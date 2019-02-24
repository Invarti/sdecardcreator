/**
 *   SDE Card Creator source file KeywordControl,
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
 * Keyword Control.
 * @class
 */
function KeywordControl(){
  BaseControl.call(this);
	this.template=''+
	'<!-- Accordion card (KeywordControl.js) -->'+
  '<div class="card hero monster pet treasure wonder loot arcadeSolo keyword">'+
      '<div class="cardOverall card-header" role="tab" id="headingOne5">'+
          '<a class="collapsed" data-toggle="collapse" data-parent="#accordionMain" href="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5">'+
          '<h5 class="mb-0">Card Keywords <i class="fas fa-angle-down rotate-icon"></i></h5>'+
          '</a>'+
      '</div>'+
      '<!-- Card body -->'+
      '<div>'+
          '<div id="collapseOne5" class="controlContent collapse" role="tabpanel" aria-labelledby="headingOne5" data-parent="#accordionMain">'+
              '<div class="card-body">'+

							'<div class="hero monster pet treasure wonder loot arcadeSolo keyword">'+
									'<div class="controlContent">'+

									
											'<div class="md-form mb-6 hero monster arcadeSolo">'+
													'<select name="affinity" class="browser-default custom-select" id="cardTypeSelect">'+
													'<option disabled>Select affinity</option>'+
													'<option value="citrine">Citrine</option>'+
													'<option value="citrine amethyst">Citrine Amethyst</option>'+
													'<option value="citrine emerald">Citrine Emerald</option>'+
													'<option value="citrine ruby">Citrine Ruby</option>'+
													'<option value="citrine sapphire">Citrine Sapphire</option>'+
													'<option disabled>----------</option>'+
													'<option value="emerald">Emerald</option>'+
													'<option value="emerald amethyst">Emerald Amethyst</option>'+
													'<option value="emerald ruby">Emerald Ruby</option>'+
													'<option value="emerald sapphire">Emerald Sapphire</option>'+
													'<option disabled>----------</option>'+
													'<option value="ruby">Ruby</option>'+
													'<option value="ruby amethyst">Ruby Amethyst</option>'+
													'<option value="ruby sapphire">Ruby Sapphire</option>'+
													'<option disabled>----------</option>'+
													'<option value="sapphire">Sapphire</option>'+
													'<option value="sapphire amethyst">Sapphire Amethyst</option>'+
													'<option disabled>----------</option>'+
													'<option value="amethyst">Amethyst</option>'+
													'<option disabled>----------</option>'+
													'<option value="none">None</option>'+
													'<option value="all">All</option>'+
													'</select>'+
											'</div>'+

											'<div class="md-form mt-5 col-12 hero monster pet arcadeSolo">'+
                      '<input type="text" id="keywordsList" name="keywordsList" class="form-control text" maxlength="80">'+
                      '<label for="keywordsList" class="">Add keyword(s)</label>'+
                      '<small class="form-text text-muted">Max 40 characters</small>'+
                    	'</div>'+
											'<div class="mb-3">'+
													'<a href="" class="keywordSettings" data-action="delete">'+
															'<button class="btn btn-info btn-block"><i class="fas fa-edit mr-1"></i> Edit Keywords</button>'+
													'</a>'+
											'</div>'+
										
											'</div>'+
										'</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
  '</div>'+
	'<!-- Accordion card end -->';
	
	
	;


  /**
   * Setup keyword control.
   */
  this.setup=function(){
    HasToggleDisplay.call(this);
    HasAffinityControl.call(this);
    HasKeywordListControl.call(this);
  };

  /**
   * Sync keywords, and affinity from selected card.
   */
  this.sync=function(data){
    this.syncAffinity(data);
    this.syncKeywords(data);
  };

  this._constructor();
}
