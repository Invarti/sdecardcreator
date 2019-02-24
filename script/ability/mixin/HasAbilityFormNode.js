/**
 *   SDE Card Creator source file HasAbilityFormNode,
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
 * Ability Form Node mixin.
 * @mixin
 */
function HasAbilityFormNode(){
  this.formNode=undefined;

  /**
   * Get the ability form template.
   * @return {string} HTML form template.
   */
  this.getFormTemplate=function(){
    var template = ''+
    '<div id="ability-'+Ability.counter+'" data-ability="'+Ability.counter+'" class="ability  ability-'+Ability.counter+'">'+
 
 
    '<div class="col-9"><h4>Ability: '+Ability.counter+'</h3></div>'+
 
    '<a href="" class="closeAbility" title="Close"> '+
    ' <button type="button" class="btn btn-danger btn-sm "><i class="fa fa-times" aria-hidden="true"></i></button></a>'+
   
	
      '<div class="row" >'+
        '<div class="md-form col-12">'+
          '<select name="costType" class="displayInline browser-default custom-select">'+
              '<option value="" disabled selected>Select ability type</option>'+
              '<option value="attack">Attack</option>'+
              '<option value="support">Support</option>'+
              '<option value="offensePotion">Offense Potion</option>'+
              '<option value="supportPotion">Support Potion</option>'+
              '<option value="emergencyPotion">Emergency Potion</option>'+
              '<option value="special">Special</option>'+
              '<option class="arcade" disabled>───Arcade───</option>'+
              '<option class="arcade" value="attack signature">Signature Attack</option>'+
              '<option class="arcade" value="support signature">Signature Support</option>'+
              '<option class="arcade" value="attack overcharge">Overcharge Attack</option>'+
              '<option class="arcade" value="support overcharge">Overcharge Support</option>'+
              '<option disabled>──────────</option>'+
              '<option value="definitionOnly">Definition</option>'+
              '<option value="nameOnly">Name</option>'+
            '</select>'+
        '</div>'+
        '<div class="md-form col-12">'+
        '<input id="name" name="name" class="form-control name" value="Ability '+Ability.counter+'">'+
        '<label for="name" class="active">Name</label>'+
        '</div>'+

        '<div class="md-form col-6">'+
        '<input id="cost" name="cost" class="form-control number" type="number" value="1" min="0" max="99">'+
        '<label for="cost" class="active">Cost</label>'+
        '</div>'+

        '<div class="md-form col-12 form-group">'+
          '<label class="active" for="exampleFormControlTextarea1">Ability Definition</label>'+
          '<textarea class="form-control rounded-0" name="definition" rows="5"></textarea>'+
        '</div>'+

   
 
      '</div>'+
      '</div>';


    return template;
  };


  /**
   * Get form node.
   * @return {object} Form resolved to a jQuery selector.
   */
  this.getFormNode=function(){
    if(this.formNode===undefined){
      this.formNode = $(this.getFormTemplate());
      this.formNode.data('node',this);

      this._setupFormNode();
    }
    return this.formNode;
  };


  /**
   * Registers the form logic for the formNode.
   */
  this._setupFormNode=function(){
    this.formNode.find('.closeAbility').on('click',$.proxy(function(coreNode,event){
      event.preventDefault();
      coreNode.closeAbility();
    },null,this));

    this.formNode.find('select[name="costType"]').on('change',$.proxy(function(coreNode,event){
      coreNode.setCostType($(this).val());
    },null,this));

    this.formNode.find('input[name="cost"]').on('input',$.proxy(function(coreNode,event){
      coreNode.setCost($(this).val());
    },null,this));

    this.formNode.find('input[name="name"]').on('input',$.proxy(function(coreNode,event){
      coreNode.setName($(this).val());
    },null,this));

    this.formNode.find('textarea[name="definition"]').on('input',$.proxy(function(coreNode,event){
      coreNode.setDefinition($(this).val());
    },null,this));
  };

  this.syncForm=function(data){
    if(data.name !== undefined){
      this.setFormName(data.name);
    }

    if(data.costType !== undefined){
      this.setFormCostType(data.costType);
    }

    if(data.cost !== undefined){
      this.setFormCost(data.cost);
    }

    if(data.definition !== undefined){
      this.setFormDefinition(data.definition);
    }
  };


  /**
   *
   */
  this.setFormName=function(name){
    this.formNode.find('input[name="name"]').val(name);
  };

  /**
   *
   */
  this.setFormCostType=function(costType){
    this.formNode.find('select[name="costType"]').val(costType);
  };

  /**
   *
   */
  this.setFormCost=function(cost){
    this.formNode.find('input[name="cost"]').val(cost);
  };

  /**
   *
   */
  this.setFormDefinition=function(definition){
    this.formNode.find('textarea[name="definition"]').val(definition);
  };
}
