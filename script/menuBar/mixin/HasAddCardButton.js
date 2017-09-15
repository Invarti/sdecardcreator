/**
 *   SDE Card Creator source file HasAddCardButton,
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
 * Add Card Control.
 * @mixin
 */
function HasAddCardButton(){
  this.addCardbutton = this.node.find('.addCard');


  /**
   *
   */
  this.addCardbutton.click($.proxy(function(event){
    event.preventDefault();
    this.addCard();
  },this));


  /**
   *
   */
  this.addCard=function(){
    console.log('add card');

    //deselect existing cards
    var cards = $('.cardGroup');
    for(var i=0,card;(card=cards[i]);i++){
      if($(card).hasClass('selected')){
        $(card).removeClass('selected');
      }
    }

    new Card();
  };
}
