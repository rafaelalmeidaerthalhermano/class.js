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
    var _schema,
        copyTo,
        inherit,
        extend,
        ancestors = [],
        parts = {},
        that = this;

    if (!constructor || constructor.constructor !== Function) {
        throw 'Constructor must be a function';
    }

    /* @function copyTo
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Adiciona novo métodos a algum objeto
     * 
     * @param container: objeto que receberá novos métodos
     * @param parts: objeto que será inserido
     */
    copyTo = function (container, parts) {
        var property
        for (property in parts) {
            if (
                parts.hasOwnProperty(property) &&
                property !== 'ubber'           &&
                property !== 'instanceOf'      &&
                property !== 'inherit'         &&
                property !== 'extend'
            ) {
                container[property] = parts[property];
            }
        }
    }

    /* @function inherit
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Adiciona nova classe antepassada
     * 
     * @param ancestor: a classe que será herdada
     */
    inherit = function (ancestor) {

        if (ancestor.constructor.constructor !== Class) {
            throw 'Ancestor must be a class';
        }

        ancestors.push(ancestor)
    };

    /* @function extend
     *
     * @author: Rafael Almeida Erthal Hermano
     * @description: Adiciona novo métodos a classe
     * 
     * @param properties: objeto que será inserido
     */
    extend = function (properties) {
        copyTo(parts, properties);
    };

    _schema = function (params) {
        var _class = {},
            _instance = {},
            ancestor;

        /* @function inherit
         *
         * @author: Rafael Almeida Erthal Hermano
         * @description: Adiciona nova classe antepassada
         * 
         * @param ancestor: a classe que será herdada
         */
        _class.inherit = function (ancestor) {

            if (ancestor.constructor.constructor !== Class) {
                throw 'Ancestor must be a class';
            }

            inherit(ancestor);
            copyTo(_class, new ancestor(params));
        };

        /* @function extend
         *
         * @author: Rafael Almeida Erthal Hermano
         * @description: Adiciona novo métodos a classe
         * 
         * @param properties: objeto que será inserido
         */
        _class.extend = function (properties) {
            extend(properties);
            copyTo(_class, properties);
        };

        /* Métodos da instância */

        /* @function ubber
         *
         * @author: Rafael Almeida Erthal Hermano
         * @description: Executa o método implementado no pai
         */
        _instance.ubber = function () {
            var caller,
                i;
            for (i in this) {
                if (this[i] === arguments.callee.caller) {
                    caller = i;
                }
            }
            for (i in ancestors) {
                if (ancestors[i]().hasOwnProperty(caller)) {
                    return ancestors[i]()[caller].apply(this, arguments);
                }
            }
        };

        /* @function instanceOf
         *
         * @author: Rafael Almeida Erthal Hermano
         * @description: Verifica se o objeto é da classe ancestor
         * 
         * @param ancestor: classe que será verificada
         */
        _instance.instanceOf = function (ancestor) {
            var instanceOf = (ancestor.constructor === that);
            for (var i in ancestors) {
                if (ancestors[i].constructor === ancestor.constructor) {
                    instanceOf = true;
                }
            }
            return instanceOf;
        };

        /* @function extend
         *
         * @author: Rafael Almeida Erthal Hermano
         * @description: Adiciona novo métodos ao objeto
         * 
         * @param properties: objeto que será inserido
         */
        _instance.extend = function (properties) {
            copyTo(_instance, properties);
        };

        /* Colocando temporariamento os atributos na classe */
        copyTo(_class, parts);
        for (ancestor in ancestors) {
            copyTo(_class, new ancestors[ancestor](params));
        }
        constructor.apply(_class, [params]);

        /* Passando os atributos para a instância */
        copyTo(_instance, _class);

        return _instance;
    }

    /* Métodos da classe */
    _schema.inherit = inherit;
    _schema.extend = extend;
    _schema.constructor = that;

    return _schema;
};
