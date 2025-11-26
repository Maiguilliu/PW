"use strict"

import { GenusList} from './orchids/genus.js';
import { TypeList, Type} from './orchids/type.js';
import { LuminosityList, Luminosity} from './orchids/luminosity.js';
import { TemperatureList, Temperature} from './orchids/temperature.js';
import { HumidityList, Humidity} from './orchids/humidity.js';
import { SizeList, Size} from './orchids/size.js';
import { OrchidList, Orchid} from './orchids/orchid.js';

/**
 * @author Professor Rui Neves.
 * Creates, using the Node and HTMLElement interface, an HTML element
 * @param {string|Array} tag - HTML tag or an array to be converted to DOM
 * @param {Object|string} [attributes] - attributes of the element, if it is a string it will be "styles"
 * @param {Array.<HTMLElement|string>} children - children of the element
 * @returns {HTMLElement} HTML element created
 */
function toDom(tag, attributes = {}, ...children) {
    let result;
    if (Array.isArray(tag)) {
        result = toDom(...tag);
    } else {
        result = document.createElement(tag);
        if (typeof attributes === "string") {
            result.style.cssText = attributes;
        } else {
            let style = attributes.style || {};
            delete attributes.style;
            Object.assign(result, attributes);
            if (typeof style === "string") {
                result.style.cssText = style;
            } else {
                Object.assign(result.style, style);
            }
        }
        children.forEach((child) => child && result.append(Array.isArray(child) ? toDom(...child) : child));
    }
    return result;
}