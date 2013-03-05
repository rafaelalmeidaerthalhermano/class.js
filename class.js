/**
 * Copyright (C) 2013 Rafael Almeida Erthal Hermano
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by 
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

/* @class: Class
 *
 * @author: Rafael Almeida Erthal Hermano
 * @description: Construtor de uma classe
 * 
 * @param constructor: função a ser executada
 */
var Class = function (constructor) {

    if (!constructor || constructor.constructor !== Function) {
        throw 'Constructor must be a function';
    }
    
    /* @function inherit
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Adiciona nova classe antepassada
     * 
     * @param ancestor: a classe que será herdada
     */    
    constructor.prototype.inherit = function (ancestor) {
        var property,
            temp = {};
            
        if (!this.ancestors) {
            this.ancestors = [];
        }
        
        ancestor.apply(temp , arguments.callee.caller.arguments);
        this.ancestors.push(temp);
        
        for (property in temp) {
            if (!this.hasOwnProperty(property)) {
                this[property] = temp[property];
            }
        }
        
        for (property in ancestor.prototype) {
            if (!this.hasOwnProperty(property)) {
                this[property] = ancestor.prototype[property];
            }
        }
    };

    /* @function extend
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Adiciona novos atributos ao objeto
     * 
     * @param obj: atributos que serão inseridos
     */    
    constructor.prototype.extend = function (obj) {
        var property;

        for (property in obj) {
            this[property] = obj[property];
        }
    };
    
    /* @function ubber
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Executa o método implementado no pai
     */
    constructor.prototype.ubber = function () {
        var property,
            ancestor;

        for (property in this) {
            if (this[property] === arguments.callee.caller) {
                for (ancestor in this.ancestors) {
                    if (this.ancestors[ancestor].hasOwnProperty(property)) {
                        return this.ancestors[ancestor][property].apply(this, arguments.callee.caller.arguments);
                    }
                }
            }
        }
    };
    
    /* @function instanceOf
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Verifica se o objeto é da classe ancestor
     *
     * @param obj: classe que será verificada
     */
    constructor.prototype.instanceOf = function (obj) {
        return this.constructor === obj;
    };

    /* @function extend
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Adiciona novos atributos à classe
     * 
     * @param obj: atributos que serão inseridos
     */    
    constructor.extend = function (obj) {
        var property;

        for (property in obj) {
            constructor.prototype[property] = obj[property];
        }
    };
    
    return constructor
};
