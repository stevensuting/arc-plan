var dynaHVversion = "8.6.1.7086";
var arcScripting = false;
var arcdbgbreak = true;
var arcScriptObj=null;
var arcScriptWind=null;
var arcCGISite = "\\Scripts/arcCGI.exe";
var arcPrint=3;
var arcTitleBar=0;
var dynaDocHref ="";
var E_HTMLCLIENT = 1001;
var E_MOBILE_HTMLCLIENT = 1003;
var arcBase;
var dynaStrings= [];
dynaStrings[1]="Only 2 concurrent users are allowed with the evaluation version";
dynaStrings[3]="The version of the HTML Viewer is too old to access the arcplan server.";
dynaStrings[4]="The version of the arcplan server is too old";
dynaStrings[5]="While connecting to the arcplan server an error has occured. The server returned no data.";
dynaStrings[6]="No arcplan server available to run the application.";
dynaStrings[7]="The connection was not used for some time. It was therefore terminated by the server. Please refresh the page.";
var dynaApp = "";
var dynaDir = "";
var dynaDoc = "";
var m_PlatForm = new Object();
m_PlatForm.type = E_MOBILE_HTMLCLIENT; //1001: E_HTMLCLIENT, 1003: E_MOBILE_HTMLCLIENT
m_PlatForm.name = "";
m_PlatForm.os = "";
m_PlatForm.browser;
m_PlatForm.lang;
m_PlatForm.vers = "";
m_PlatForm.versNr = 0;
m_PlatForm.touchScroll = false; //Support for "webkit-overflow-scrolling"
var arcautoLanguageDetection=0;
var arcUserLang = "0";
var dynaWholeDoc=false;
var dynaStillLoading=false;
var dynaTimeoutCounter=0;
var dynaWSnames=new Array();
var dynaImageUpdateNr=0;
var dynamakeUpdate=false;
var dynaImageUpdateID=new Array();
var dynaUpdatePatterns=false;
var dynaDialogType=0;
var dynaDialogValue = new Array();
var dynaDialogHwnd=null;
var dynaDialogParam=null;
var dynaLastKey=0;
var dynaLastCol=0;
var dynaLastRow=0;
var dynaLastScrollx=0;
var dynaLastScrolly=0;
var dynaLastx=0;
var dynaLasty=0;
var dynaNextCol=0;
var dynaNextRow=0;
var dynaTextInput=null;
var dynaParentTagname="CITE";
var dynasWidth=800;
var dynasHeight=400;
var dynaRequestInProgress=true;
var dynaUrlHeader="";
var dynaFirstDispatcher="";
var dynaSessionID=null;
var dynaMaxObjects=0;
var dynabgImage=null;
var dynaOldbgColor='transparent';
var dynaOldtxtColor='black';
var dynaLastObj=null;
var dynaCurrObj=null;
var dynaPrintDoc= new Array();
var dynaNextInputObject = null;
var dynaNextInputObjectID = null;
var dynaLinkArray=null;
var dynaLinkOpener = null;
var dynaPopupObject = null;
var dynaPopupIndex=0;
var arcUserParam=null;
var dynaState=-1;
var dynaCountRek=0;
var dynaCountSRek=0;
var dynaLeftMargin=0;
var dynaTopMargin=0;

var DynaObj = new Array();

var dynaPrintObjectList = new Array();
var dynaMaxDocs=0;
var dynacurrentDoc=0;
var DynaDocs = new Array();
var dynaUrl=new Array();
var dynaUrlNr=0;
var dynaContact=false;
var dynaFirstDoc=true;
var dynaScrollObj=null;
var dynaevObj=new dynaevObject();
var dynaStatusMsg="contacting arcplan Server";

var dynaPopupobjects=new Array();
var dynaLastPop;
var dynaPopEventsDefined=false;

var mytestvar=0,mytestvar2=null;
var docname=null;
var dynaStartTime=0;
var dynaContactTime=0;
//5 Minuten
var dynaKeepAliveTime=300000; 
var dynaKeepAlive;
//referenz aufs Top-Window. muss auf self gersetzt werden wenn die Session direkt im Frame laufen soll
var arcTop=self; 
var dynaClient;
var dynaChangePassword=false;
var dynaInputHighlightBackColor = '#3399FF';
var dynaInputHighlightForeColor = 'white';
var dynaJSParams = new Array();
var dynaDocIsLoading = false;
var dynaHandlePass = false;
var dynaDoScroll = false;
var dynaDoSlider = true;
var dynaSpace = "                             ";
var dynaCookiesAllowed = true;
var dynaDialogheight = 120;
var dynaCommunicationFrame = null;
var dynaBlank = "";

var lastwait = false;
var dynaDoKeypress = false;

var localDBSupported = false;
var localStorageSupported = false;

var keyChain = '';

var JSON;
if (!JSON) {
    JSON = {};
}

if (!window.Node) {
    var Node = { //I.E. hat kein Node Objekt
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
    };
}

// A var storing all useful keys for easy access
if (!window.Key || !window.Key.Enter) {
    var Key = {
        'Backspace': 8,
        'Tab': 9,
        'Linefeed': 10, //Pseudo Key
        'Enter': 13,
        'Shift': 16,
        'Ctrl': 17,
        'Alt': 18,
        'Pause': 19,
        'Capslock': 20,
        'Esc': 27,
        'Pageup': 33,
        'Pagedown': 34,
        'End': 35,
        'Home': 36,
        'Leftarrow': 37,
        'Uparrow': 38,
        'Rightarrow': 39,
        'Downarrow': 40,
        'Insert': 45,
        'Delete': 46,
        '0': 48,
        '1': 49,
        '2': 50,
        '3': 51,
        '4': 52,
        '5': 53,
        '6': 54,
        '7': 55,
        '8': 56,
        '9': 57,
        'a': 65,
        'b': 66,
        'c': 67,
        'd': 68,
        'e': 69,
        'f': 70,
        'g': 71,
        'h': 72,
        'i': 73,
        'j': 74,
        'k': 75,
        'l': 76,
        'm': 77,
        'n': 78,
        'o': 79,
        'p': 80,
        'q': 81,
        'r': 82,
        's': 83,
        't': 84,
        'u': 85,
        'v': 86,
        'w': 87,
        'x': 88,
        'y': 89,
        'z': 90,
        'Windowsleft': 91,
        'Windowsright': 92,
        'Select': 93,
        '0numpad': 96,
        '1numpad': 97,
        '2numpad': 98,
        '3numpad': 99,
        '4numpad': 100,
        '5numpad': 101,
        '6numpad': 102,
        '7numpad': 103,
        '8numpad': 104,
        '9numpad': 105,
        'Multiply': 106,
        'Plus': 107,
        'Minut': 109,
        'Dot': 110,
        'Slash1': 111,
        'F1': 112,
        'F2': 113,
        'F3': 114,
        'F4': 115,
        'F5': 116,
        'F6': 117,
        'F7': 118,
        'F8': 119,
        'F9': 120,
        'F10': 121,
        'F11': 122,
        'F12': 123,
        'equal': 187,
        'Coma': 188,
        'Slash': 191,
        'Backslash': 220,
        'Numlock': 144,
        'Scrolllock': 145,
        'XF86Eject': 173, //Lautsprecher aus
        'XF86AudioLowerVolume': 174,
        'XF86AudioHigherVolume': 175
    }
}

(function () { // json.js
    /// <remarks>Das Modul wurde bis auf die auskommentierte Zuordnung zum Object.prototype
    /// unver�ndert aus json.js von Douglas Crockford �bernommen. Es dient dazu,
    /// die Abh�ngigkeit des folgenden Moduls (jStorage) von jQuery.JSON aufzuheben.</remarks>
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                this.getUTCFullYear() + '-' +
                f(this.getUTCMonth() + 1) + '-' +
                f(this.getUTCDate()) + 'T' +
                f(this.getUTCHours()) + ':' +
                f(this.getUTCMinutes()) + ':' +
                f(this.getUTCSeconds()) + 'Z' : null;
        };

        String.prototype.toJSON =
            Number.prototype.toJSON =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string' ? c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

        // Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

        // If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

        // If we were called with a replacer function, then call the replacer to
        // obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

        // What happens next depends on the value's type.

        switch (typeof value) {
            case 'string':
                return quote(value);

            case 'number':

                // JSON numbers must be finite. Encode non-finite numbers as null.

                return isFinite(value) ? String(value) : 'null';

            case 'boolean':
            case 'null':

                // If the value is a boolean or null, convert it to a string. Note:
                // typeof null does not produce 'null'. The case is included here in
                // the remote chance that this gets fixed someday.

                return String(value);

                // If the type is 'object', we might be dealing with an object or an array or
                // null.

            case 'object':

                // Due to a specification blunder in ECMAScript, typeof null is 'object',
                // so watch out for that case.

                if (!value) {
                    return 'null';
                }

                // Make an array to hold the partial results of stringifying this object value.

                gap += indent;
                partial = [];

                // Is the value an array?

                if (Object.prototype.toString.apply(value) === '[object Array]') {

                    // The value is an array. Stringify every element. Use null as a placeholder
                    // for non-JSON values.

                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || 'null';
                    }

                    // Join all of the elements together, separated with commas, and wrap them in
                    // brackets.

                    v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                    gap = mind;
                    return v;
                }

                // If the replacer is an array, use it to select the members to be stringified.

                if (rep && typeof rep === 'object') {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        k = rep[i];
                        if (typeof k === 'string') {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                } else {

                    // Otherwise, iterate through all of the keys in the object.

                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ': ' : ':') + v);
                            }
                        }
                    }
                }

                // Join all of the member texts together, separated with commas,
                // and wrap them in braces.

                v = partial.length === 0 ? '{}' : gap ?
                '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                '{' + partial.join(',') + '}';
                gap = mind;
                return v;
        }
    }

    // If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

            // The stringify method takes a value and an optional replacer, and an optional
            // space parameter, and returns a JSON text. The replacer can be a function
            // that can replace values, or an array of strings that will select the keys.
            // A default replacer method can be provided. Use of the space parameter can
            // produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

            // If the space parameter is a number, make an indent string containing that
            // many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

                // If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

            // If there is a replacer, it must be a function or an array.
            // Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            // Make a fake root object containing our value under the key of ''.
            // Return the result of stringifying the value.

            return str('', { '': value });
        };
    }


    // If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

            // The parse method takes a text and an optional reviver function, and returns
            // a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

                // The walk method is used to recursively walk the resulting structure so
                // that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


            // Parsing happens in four stages. In the first stage, we replace certain
            // Unicode characters with escape sequences. JavaScript handles many characters
            // incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

            // In the second stage, we run the text against regular expressions that look
            // for non-JSON patterns. We are especially concerned with '()' and 'new'
            // because they can cause invocation, and '=' because it can cause mutation.
            // But just to be safe, we want to reject all unexpected forms.

            // We split the second stage into 4 regexp operations in order to work around
            // crippling inefficiencies in IE's and Safari's regexp engines. First we
            // replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
            // replace all simple value tokens with ']' characters. Third, we delete all
            // open brackets that follow a colon or comma or that begin the text. Finally,
            // we look to see that the remaining characters are only whitespace or ']' or
            // ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

                // In the third stage we use the eval function to compile the text into a
                // JavaScript structure. The '{' operator is subject to a syntactic ambiguity
                // in JavaScript: it can begin a block or an object literal. We wrap the text
                // in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

                // In the optional fourth stage, we recursively walk the new structure, passing
                // each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({ '': j }, '') : j;
            }

            // If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }

    // Augment the basic prototypes if they have not already been augmented.
    // These forms are obsolete. It is recommended that JSON.stringify and
    // JSON.parse be used instead.

    // [UW] Proptoyp-Versionen werden nicht ben�tigt.

    /* 
    if (!Object.prototype.toJSONString) {
    Object.prototype.toJSONString = function (filter) {
    return JSON.stringify(this, filter);
    };
    Object.prototype.parseJSON = function (filter) {
    return JSON.parse(this, filter);
    };
    }
    */
} ()); // json.js

(function (window) { // jStorage.js
    /// <remarks>�bernommen von http://www.jstorage.info und f�r die Verwendung des voranstehenden
    /// json.js-Moduls angepasst.</remarks>

    if (!JSON.stringify) {
        throw new Error("JSON.stringify needs to be loaded before jStorage!");
    }

    var 
    /* This is the object, that holds the cached values */
        _storage = {},

    /* Actual browser storage (localStorage or globalStorage['domain']) */
        _storage_service = { jStorage: "{}" },

    /* DOM element for older IE versions, holds userData behavior */
        _storage_elm = null,

    /* How much space does the storage take */
        _storage_size = 0,

    /* function to encode objects to JSON strings */
        json_encode = JSON.stringify,

    /* function to decode objects from JSON strings */
        json_decode = JSON.parse,

    /* which backend is currently used */
        _backend = false,

    /* Next check for TTL */
        _ttl_timeout,

    /**
    * XML encoding and decoding as XML nodes can't be JSON'ized
    * XML nodes are encoded and decoded if the node is the value to be saved
    * but not if it's as a property of another object
    * Eg. -
    *   window.jStorage.set("key", xmlNode);        // IS OK
    *   window.jStorage.set("key", {xml: xmlNode}); // NOT OK
    */
        _XMLService = {

            /**
            * Validates a XML node to be XML
            * based on jQuery.isXML function
            */
            isXML: function (elm) {
                var documentElement = (elm ? elm.ownerDocument || elm : 0).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            },

            /**
            * Encodes a XML node to string
            * based on http://www.mercurytide.co.uk/news/article/issues-when-working-ajax/
            */
            encode: function (xmlNode) {
                if (!this.isXML(xmlNode)) {
                    return false;
                }
                try { // Mozilla, Webkit, Opera
                    return new XMLSerializer().serializeToString(xmlNode);
                } catch (E1) {
                    try {  // IE
                        return xmlNode.xml;
                    } catch (E2) { }
                }
                return false;
            },

            /**
            * Decodes a XML node from string
            * loosely based on http://outwestmedia.com/jquery-plugins/xmldom/
            */
            decode: function (xmlString) {
                var dom_parser = ("DOMParser" in window && (new DOMParser()).parseFromString) ||
                        (window.ActiveXObject && function (_xmlString) {
                            var xml_doc = new ActiveXObject('Microsoft.XMLDOM');
                            xml_doc.async = 'false';
                            xml_doc.loadXML(_xmlString);
                            return xml_doc;
                        }),
                resultXML;
                if (!dom_parser) {
                    return false;
                }
                resultXML = dom_parser.call("DOMParser" in window && (new DOMParser()) || window, xmlString, 'text/xml');
                return this.isXML(resultXML) ? resultXML : false;
            }
        };

    ////////////////////////// PRIVATE METHODS ////////////////////////

    /**
    * Initialization function. Detects if the browser supports DOM Storage
    * or userData behavior and behaves accordingly.
    * @returns undefined
    */
    function _init() {
        /* Check if browser supports localStorage */
        var localStorageReallyWorks = false;
        if ("localStorage" in window) {
            try {
                window.localStorage.setItem('_tmptest', 'tmpval');
                localStorageReallyWorks = true;
                window.localStorage.removeItem('_tmptest');
            } catch (BogusQuotaExceededErrorOnIos5) {
                // Thanks be to iOS5 Private Browsing mode which throws
                // QUOTA_EXCEEDED_ERRROR DOM Exception 22.
            }
        }
        if (localStorageReallyWorks) {
            try {
                if (window.localStorage) {
                    _storage_service = window.localStorage;
                    _backend = "localStorage";
                }
            } catch (E3) { /* Firefox fails when touching localStorage and cookies are disabled */ }
        }
        /* Check if browser supports globalStorage */
        else if ("globalStorage" in window) {
            try {
                if (window.globalStorage) {
                    _storage_service = window.globalStorage[window.location.hostname];
                    _backend = "globalStorage";
                }
            } catch (E4) { /* Firefox fails when touching localStorage and cookies are disabled */ }
        }
        /* Check if browser supports userData behavior */
        else {
            _storage_elm = document.createElement('link');
            if (_storage_elm.addBehavior) {

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                var data = "{}";
                try {
                    data = _storage_elm.getAttribute("jStorage");
                } catch (E5) { }
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            } else {
                _storage_elm = null;
                return;
            }
        }

        _load_storage();

        // remove dead keys
        _handleTTL();
    }

    /**
    * Loads the data from the storage based on the supported mechanism
    * @returns undefined
    */
    function _load_storage() {
        /* if jStorage string is retrieved, then decode it */
        if (_storage_service.jStorage) {
            try {
                _storage = json_decode(String(_storage_service.jStorage));
            } catch (E6) { _storage_service.jStorage = "{}"; }
        } else {
            _storage_service.jStorage = "{}";
        }
        _storage_size = _storage_service.jStorage ? String(_storage_service.jStorage).length : 0;
    }

    /**
    * This functions provides the "save" mechanism to store the jStorage object
    * @returns undefined
    */
    function _save() {
        try {
            _storage_service.jStorage = json_encode(_storage);
            // If userData is used as the storage engine, additional
            if (_storage_elm) {
                _storage_elm.setAttribute("jStorage", _storage_service.jStorage);
                _storage_elm.save("jStorage");
            }
            _storage_size = _storage_service.jStorage ? String(_storage_service.jStorage).length : 0;
        } catch (E7) { /* probably cache is full, nothing is saved this way*/ }
    }

    /**
    * Function checks if a key is set and is string or numberic
    */
    function _checkKey(key) {
        if (!key || (typeof key != "string" && typeof key != "number")) {
            throw new TypeError('Key name must be string or numeric');
        }
        if (key == "__jstorage_meta") {
            throw new TypeError('Reserved key name');
        }
        return true;
    }

    /**
    * Removes expired keys
    */
    function _handleTTL() {
        var curtime, i, TTL, nextExpire = Infinity, changed = false;

        clearTimeout(_ttl_timeout);

        if (!_storage.__jstorage_meta || typeof _storage.__jstorage_meta.TTL != "object") {
            // nothing to do here
            return;
        }

        curtime = +new Date();
        TTL = _storage.__jstorage_meta.TTL;
        for (i in TTL) {
            if (TTL.hasOwnProperty(i)) {
                if (TTL[i] <= curtime) {
                    delete TTL[i];
                    delete _storage[i];
                    changed = true;
                } else if (TTL[i] < nextExpire) {
                    nextExpire = TTL[i];
                }
            }
        }

        // set next check
        if (nextExpire != Infinity) {
            _ttl_timeout = setTimeout(_handleTTL, nextExpire - curtime);
        }

        // save changes
        if (changed) {
            _save();
        }
    }

    ////////////////////////// PUBLIC INTERFACE /////////////////////////

    window.jStorage = {
        /* Version number */
        version: "8.6.1.7086",

        set: function (key, value) {
            /// <summary>Sets a key's value.</summary>
            /// <param name="key" type=String"">Key to set. If this value is not set or not
            /// a string an exception is raised.</param>
            /// <param name="value" type="mixed">Value to set. This can be any value that is JSON
            /// compatible (Numbers, Strings, Objects etc.).</param>
            /// <returns type="mixed">the used value</returns>
            _checkKey(key);
            if (_XMLService.isXML(value)) {
                value = { _is_xml: true, xml: _XMLService.encode(value) };
            } else if (typeof value == "function") {
                value = null; // functions can't be saved!
            } else if (value && typeof value == "object") {
                // clone the object before saving to _storage tree
                value = json_decode(json_encode(value));
            }
            _storage[key] = value;
            _save();
            return value;
        },

        get: function (key, def) {
            /// <summary>
            /// Looks up a key in cache
            /// </summary>
            /// <param name="key" type="String">Key to look up.</param>
            /// <param name="def" type="mixed">Default value to return, if key didn't exist.</param>
            /// <returns type="mixed">the key value, default value or <null></returns>
            _checkKey(key);
            if (key in _storage) {
                if (_storage[key] && typeof _storage[key] == "object" &&
                        _storage[key]._is_xml &&
                            _storage[key]._is_xml) {
                    return _XMLService.decode(_storage[key].xml);
                } else {
                    return _storage[key];
                }
            }
            return typeof (def) == 'undefined' ? null : def;
        },

        deleteKey: function (key) {
            /// <summary>Deletes a key from cache.</summary>
            /// <param name="key" type="String">Key to delete.</param>
            /// <returns type="bool">true if key existed or false if it didn't</returns>
            _checkKey(key);
            if (key in _storage) {
                delete _storage[key];
                // remove from TTL list
                if (_storage.__jstorage_meta &&
                  typeof _storage.__jstorage_meta.TTL == "object" &&
                  key in _storage.__jstorage_meta.TTL) {
                    delete _storage.__jstorage_meta.TTL[key];
                }
                _save();
                return true;
            }
            return false;
        },

        setTTL: function (key, ttl) {
            /// <summary>Sets a TTL for a key, or remove it if ttl value is 0 or below</summary>
            /// <param name="key" type="String">key to set the TTL for</param>
            /// <param name="ttl" type="Number">TTL timeout in milliseconds</param>
            /// <returns type="bool">true if key existed or false if it didn't</returns>
            var curtime = +new Date();
            _checkKey(key);
            ttl = Number(ttl) || 0;
            if (key in _storage) {

                if (!_storage.__jstorage_meta) {
                    _storage.__jstorage_meta = {};
                }
                if (!_storage.__jstorage_meta.TTL) {
                    _storage.__jstorage_meta.TTL = {};
                }

                // Set TTL value for the key
                if (ttl > 0) {
                    _storage.__jstorage_meta.TTL[key] = curtime + ttl;
                } else {
                    delete _storage.__jstorage_meta.TTL[key];
                }

                _save();

                _handleTTL();
                return true;
            }
            return false;
        },

        flush: function () {
            /// <summary></summary>
            /// <returns type="bool">true</returns>
            _storage = {};
            _save();
            return true;
        },

        storageObj: function () {
            /// <summary>Returns a read-only copy of _storage</summary>
            /// <returns type="Object" />
            function F() { }
            F.prototype = _storage;
            return new F();
        },

        index: function () {
            /// <summary>Returns an index of all used keys as an array
            /// ['key1', 'key2',..'keyN']</summary>
            /// <returns type="Array" />
            var index = [], i;
            for (i in _storage) {
                if (_storage.hasOwnProperty(i) && i != "__jstorage_meta") {
                    index.push(i);
                }
            }
            return index;
        },

        storageSize: function () {
            /// <summary>How much space in bytes does the storage take?</summary>
            /// <returns type="Number" />
            return _storage_size;
        },

        currentBackend: function () {
            /// <summary>Which backend is currently in use?</summary>
            /// <returns type="String" />
            return _backend;
        },

        storageAvailable: function () {
            /// <summary>Test if storage is available</summary>
            /// <returns type="Boolean" />
            return !!_backend;
        },

        reInit: function () {
            /// <summary>Test if storage is available</summary>
            /// <returns type="undefined" />
            var new_storage_elm, data;
            if (_storage_elm && _storage_elm.addBehavior) {
                new_storage_elm = document.createElement('link');

                _storage_elm.parentNode.replaceChild(new_storage_elm, _storage_elm);
                _storage_elm = new_storage_elm;

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                data = "{}";
                try {
                    data = _storage_elm.getAttribute("jStorage");
                } catch (E5) { }
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }

            _load_storage();
        }
    };

    // Initialize jStorage
    _init();

})(window); // jStorage.js

var arcKeychainDb = { // arcKeychainDb

    db: null,

    databaseSupported: function () {
        return (window.openDatabase != null);
    },
    ////////////////////////////////////////////////////////////////////////////
    // INIT DATABASE
    ////////////////////////////////////////////////////////////////////////////
    initDatabase: function () {
        var success = true;
        try {
            if (!window.openDatabase) {
                success = false;
            }
            else {
                var shortName = 'arcKeyChain';
                var version = '1.0';
                var displayName = 'arcplan Mobile KeyChain';
                var maxSize = 65535;
                this.db = openDatabase(shortName, version, displayName, maxSize);
            }
        }
        catch (e) {
            if (e == 2) {
                // Version number mismatch
                console.error("Invalid database version.");
            }
            else {
                console.error("Unknown error " + e + ".");
            }
            success = false;
        }
        return success;
    },

    createTables: function () { },
    createEntry: function (application, username, key, successHandler, errorHandler) { },
    updateEntryById: function (id, application, username, key) { },
    updateEntryByKey: function (oldkey, application, username, newkey) { },
    deleteEntriesByUsername: function (username) { },
    deleteEntriesByKey: function (key) { },
    deleteEntriesById: function (id) { },
    deleteEntriesByApplication: function (application) { },
    deleteAllEntries: function () { },

    dropTable: function () {
        if (this.db == null) {
            return;
        }
        this.db.transaction(function (transaction) {
            transaction.executeSql(
					'DROP TABLE keychain',
					[],
					arcKeychainDb.nullDataHandler,
					arcKeychainDb.errorHandler
				);
        });
    },

    selectByUsername: function (username, dataSelectHandler, errorHandler) { },
    selectById: function (id, dataSelectHandler, errorHandler) { },
    selectByKey: function (key, dataSelectHandler, errorHandler) { },
    selectByApplication: function (application, dataSelectHandler, errorHandler) { },

    selectAll: function (dataSelectHandler, errorHandler) {
        if (this.db == null) {
            return;
        }
        this.db.transaction(function (transaction) {
            transaction.executeSql(
					'SELECT id, application, username, key FROM keychain',
					[],
					dataSelectHandler,
					(errorHandler != null) ? errorHandler : arcKeychainDb.errorHandler
				);
        });
    },

    getEntryCount: function (dataSelectHandler, errorHanlder) { },

    ////////////////////////////////////////////////////////////////////////////
    // EVENT HANDLER
    ////////////////////////////////////////////////////////////////////////////
    errorHandler: function (transaction, error) {
        console.error('Error: ' + error.message + ' (Code ' + error.code + ')');
        return true; // bedeutet Abbruch der Transaktion. (false hie�e: weitermachen)
    },

    nullDataHandler: function () {
        if (arcScripting === true) {
            console.log("SQL query succeeded");
        }
    }
};  // arcKeychainDb

(function (window, undefined) {
    /// <summary>Modul arcKeychainStorage</summary>

    // private

    var dbSupported,
        nextId = 1;

    function getEmptyResult() {
        return { 
            rows: (function () {
                var theRows = [],
                    rowIds = [],
                    numRows = 0;

                function getArrayElement(arr, idx) {
                    /// <summary>Gets an array element by its index</summary>
                    /// <returns type="mixed" />
                    var ret = undefined;
                    if ((idx >= 0) && (idx < arr.length)) {
                        ret = arr[idx];
                    }
                    return ret;
                }

                return {
                    length: 0,
                    rowCount: function () {
                        return theRows.length;
                    },
                    item: function (idx) {
                        return getArrayElement(theRows, idx);
                    },
                    id: function (idx) {
                        return getArrayElement(rowIds, idx);
                    },
                    push: function (id, element) {
                        rowIds.push(id);
                        theRows.push(element);
                        numRows += 1;
                        this.length = numRows;
                    }
                }
            })()
        }
    }

    function databaseSupported() {
        /// <summary>Checks if the local storage is supported</summary>
        /// <returns type="boolean" />
        if (dbSupported === undefined) {
            dbSupported = (window.jStorage) ? window.jStorage.storageAvailable() : false;
        }
        return dbSupported;
    }

    function makeStorageObject(application, username, key) {
        /// <summary>Generates an object for storage</summary>
        /// <param name="application" type="String">Application name</param>
        /// <param name="username" type="String">Username</param>
        /// <param name="key" type="String">Value of key</param>
        /// <returns type="Object" />
        return { application: application, user: username, key: key };
    }

    function deleteFromStorage(resultset) {
        /// <summary>Deletes the keys in the resultset from local storage</summary>
        /// <param name="resultset" type="Object">Result from select-Functions</param>
        var result_length,
            i,
            id;

        if (resultset && resultset.rows) {
            result_length = resultset.rows.rowCount();
            for (i = 0; i < result_length; i += 1) {
                id = resultset.rows.id(i);
                window.jStorage.deleteKey(id.toString());
            }
        }
    }

    function selectEntries(compareFunction) {
        /// <summary>Selects a set of local storage entries</summary>
        /// <param name="compareFunction" type="Function">Callback to select single entry 
        /// (function(entry) returning true if entry is in result set)</param>
        /// <returns type="Object" />
        var result = getEmptyResult(),
            keys = window.jStorage.index(),
            keys_count = keys.length,
            id, i, value, okToStore;

        for (i = 0; i < keys_count; i += 1) {
            id = keys[i];
            value = window.jStorage.get(id.toString());
            okToStore = true;
            if (compareFunction && typeof compareFunction === "function") {
                okToStore = compareFunction(value);
            }
            if (okToStore) {
                result.rows.push(id, value);
            }
        }

        return result;
    }

    // public 

    window.arcKeychainStorage = {
        /// <summary>Handle user credential key entries in local file storage of the browser</summary>
        /// <remarks>Appends arcKeychainStore to window-Oject</remarks>

        version: "1.0",

        databaseSupported: function () {
            /// <summary>Checks if the local storage is supported</summary>
            /// <returns type="boolean" />
            return databaseSupported();
        },

        initDatabase: function () {
            /// <summary>Initializes the local storage interface</summary>
            var keys,
                max;

            if (!databaseSupported()) {
                return;
            }

            keys = window.jStorage.index();
            max = Math.max.apply(Math, keys);
            nextId = (max < 0) ? 0 : 1 * max + 1;
        },

        createTables: function () {
            /// <summary>Empty function to keep compatibility with former versions</summary>
        },

        fillData: function (newData) {
            /// <summary>Initializes the local storage with new data</summary>
            /// <param name="newData" type="Object">Dataset as given by the select-Functions</param>
            /// <remarks>For migration purposes</remarks>
            var len, i, entry;
            if (!databaseSupported()) {
                return;
            }
            if (newData && typeof newData === "object" && newData.rows && typeof newData.rows === "object") {
                window.jStorage.flush();
                len = newData.rows.length;
                for (i = 0; i < len; i += 1) {
                    entry = newData.rows.item(i);
                    this.createEntry(entry.application, entry.username, entry.key);
                }
            }
        },

        createEntry: function (application, username, key, successHandler, errorHandler) {
            /// <summary>Stores a new entry to the local storage</summary>
            /// <param name="application" type="String">Application name</param>
            /// <param name="username" type="String">Username</param>
            /// <param name="key" type="String">Value of key</param>
            /// <param name="successHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            if (!databaseSupported()) {
                return;
            }
            this.updateEntryById(nextId, application, username, key);
            nextId += 1;
            if (successHandler) {
                successHandler();
            }   
        },

        updateEntryById: function (id, application, username, key) {
            /// <summary>Updates an entry to the local storage identified by its storage key</summary>
            /// <param name="id" type="String">The entry id in the local storage</param>
            /// <param name="application" type="String">Application name</param>
            /// <param name="username" type="String">Username</param>
            /// <param name="key" type="String">Value of key</param>
            if (!databaseSupported()) {
                return;
            }
            window.jStorage.set(id.toString(), makeStorageObject(application, username, key));
        },

        updateEntryByKey: function (oldkey, application, username, newkey) {
            /// <summary>Updates an entry to the local storage identified by the entry's key</summary>
            /// <param name="oldkey" type="String">The entry's old key</param>
            /// <param name="application" type="String">Application name</param>
            /// <param name="username" type="String">Username</param>
            /// <param name="newkey" type="String">The entry's new key</param>
            if (!databaseSupported()) {
                return;
            }
            var result = this.selectByKey(oldkey);
            if (result.rows.rowCount() > 0) {
                window.jStorage.set(result.rows.id(0).toString(),
                        makeStorageObject(application, username, newkey));
            }
        },

        deleteEntriesByUsername: function (username) {
            /// <summary>Deletes all entries with a given username</summary>
            /// <param name="username" type="String">Username of the entries to delete</param>
            if (!databaseSupported()) {
                return;
            }
            var result = this.selectByUsername(username);
            deleteFromStorage(result);
        },

        deleteEntriesByKey: function (key) {
            /// <summary>Deletes all entries with a given entry key</summary>
            /// <param name="key" type="String">Key of the entries to delete</param>
            if (!databaseSupported()) {
                return;
            }
            var result = this.selectByKey(key);
            deleteFromStorage(result);
        },

        deleteEntriesById: function (id) {
            /// <summary>Deletes all entries with a given storage id</summary>
            /// <param name="id" type="String">Storage id of the entry to delete</param>
            if (!databaseSupported()) {
                return;
            }
            var result = this.selectById(id);
            deleteFromStorage(result);
        },

        deleteEntriesByApplication: function (application) {
            /// <summary>Deletes all entries for a given application</summary>
            /// <param name="application" type="String">Application name of the entries to delete</param>
            if (!databaseSupported()) {
                return;
            }
            var result = this.selectByApplication(application);
            deleteFromStorage(result);
        },

        deleteAllEntries: function () {
            /// <summary>Deletes all entries in the local storage</summary>
            if (!databaseSupported()) {
                return;
            }
            var result = this.selectAll();
            deleteFromStorage(result);
        },

        selectByUsername: function (username, dataSelectHandler, errorHandler) {
            /// <summary>Get all entries for a username</summary>
            /// <param name="username" type="String">Username to search for</param>
            /// <param name="dataSelectHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            /// <returns type="Object" />
            if (!databaseSupported()) {
                return getEmptyResult();
            }
            var result = selectEntries(function (value) {
                return (value.username === username);
            });

            if (dataSelectHandler) {
                dataSelectHandler({}, result);
            }

            return result;
        },

        selectById: function (id, dataSelectHandler, errorHandler) {
            /// <summary>Get the entry for a local storage key</summary>
            /// <param name="id" type="String">ID to search for</param>
            /// <param name="dataSelectHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            /// <returns type="Object" />
            var result = getEmptyResult();
            if (databaseSupported()) {
                result.rows.push(id, window.jStorage.get(id.toString()));
            }
            return result;
        },

        selectByKey: function (key, dataSelectHandler, errorHandler) {
            /// <summary>Get all entries for a key</summary>
            /// <param name="key" type="String">Key to search for</param>
            /// <param name="dataSelectHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            /// <returns type="Object" />
            var result = getEmptyResult();
            if (databaseSupported()) {
                result = selectEntries(function (value) {
                    return value.key === key;
                });

                if (dataSelectHandler) {
                    dataSelectHandler({}, result);
                }
            }
            return result;
        },

        selectByApplication: function (application, dataSelectHandler, errorHandler) {
            /// <summary>Get all entries for an application</summary>
            /// <param name="application" type="String">Application name to search for</param>
            /// <param name="dataSelectHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            /// <returns type="Object" />
            var result = getEmptyResult();
            if (databaseSupported()) {
                result = selectEntries(function (value) {
                    return value.application === application;
                });

                if (dataSelectHandler) {
                    dataSelectHandler({}, result);
                }
            }
            return result;
        },

        selectAll: function (dataSelectHandler, errorHandler) {
            /// <summary>Get all entries from the local storage</summary>
            /// <param name="dataSelectHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            /// <returns type="Object" />
            var result = getEmptyResult();
                if (databaseSupported()) {
                result = selectEntries(function (value) {
                    return true;
                });

                if (dataSelectHandler) {
                    dataSelectHandler({}, result);
                }
            }
            return result;
        },

        getEntryCount: function (dataSelectHandler, errorHandler) {
            /// <summary>Get the number of entries in the local storage</summary>
            /// <param name="dataSelectHandler" type="Function">Callback on success (can be undefined)</param>
            /// <param name="errorHandler" type="Function">Callback on error (can be undefined)</param>
            /// <returns type="number" />
            var result = this.selectAll();
            return result.rows.length;
        }
    };

    if (window.arcKeychainStorage.databaseSupported()) {
        window.arcKeychainStorage.initDatabase();
    }

})(window); // arcKeychainStore

(function () {
    /// <summary>Check for local data support and migrate from localDB to local storage</summary>

    try {
        localDBSupported = arcKeychainDb.databaseSupported();
        if (localDBSupported) {
            arcKeychainDb.initDatabase();
        }
    }
    catch (e) {
        if (arcScripting === true) {
            console.log("localDBSupport: " + e);
        }
    }

    try {
        localStorageSupported = window.arcKeychainStorage.databaseSupported();
        if (localStorageSupported) {
            window.arcKeychainStorage.initDatabase();
            arcKeychain = window.arcKeychainStorage;
        }
    }
    catch (e) {
        if (arcScripting === true) {
            console.log("localStorageSupport: " + e);
        }
    }

    // migration der credentials, falls erforderlich
    if (localStorageSupported && localDBSupported) {
        window.arcKeychainDb.selectAll(function (transaction, result) {
            if (result.rows.length > 0) {
                window.arcKeychainStorage.fillData(result);
                arcKeychainDb.dropTable();
            }
        }, 
        function (transaction, error) {
            return true; // bedeutet Abbruch der Transaktion. (false hie�e: weitermachen)
        });
    }
})(); // check and migration local storage

function getScrollLeft() {
	return getBestScrollValue (
		window.pageXOffset ? window.pageXOffset : 0,
		document.documentElement ? document.documentElement.scrollLeft : 0,
		document.body ? document.body.scrollLeft : 0
	);
}
function getScrollTop() {
	return getBestScrollValue (
		window.pageYOffset ? window.pageYOffset : 0,
		document.documentElement ? document.documentElement.scrollTop : 0,
		document.body ? document.body.scrollTop : 0
	);
}
function getBestScrollValue(i_pageOffset, i_elemScroll, i_bodyScroll) {
//alert(i_pageOffset + "  "+ i_elemScroll+ " " + i_bodyScroll)
	var result = i_pageOffset ? i_pageOffset : 0;
	if (i_elemScroll && (!result || (result > i_elemScroll)))
		result = i_elemScroll;
	return i_bodyScroll && (!result || (result > i_bodyScroll)) ? i_bodyScroll : result;
}

function StateChanged(iswait) {
    var sheet = document.styleSheets[0],
        waitDiv = document.getElementById("waitdiv"),
        waitCursor = document.getElementById("waitcursor"),
        pHeight = window.innerHeight,
        pWidth = window.innerWidth,
        imgWidth = Math.sqrt(Math.max(pWidth, pHeight)) * 1.4,
        scrollY = getScrollTop(),
        scrollX = getScrollLeft();

    if (!sheet) {
        debugMsg("Warning: StateChanged with no styleSheets " + iswait);
        return;
    }
    if (iswait) {
        document.body.className = "wait";
        if (sheet.addRule) { // Internet Explorer
            sheet.addRule("html", "cursor:wait !important;", 0);
        } else if (sheet.insertRule) {
            //Opera, Google Chrome and Safari
            if (m_PlatForm.browser != "ff") {
                sheet.insertRule("html {cursor:wait !important;}", 0);
            }
        }
        if (waitCursor) {
            waitCursor.className = "arcWaiting";
            waitCursor.style.visibility = "visible";
	        waitCursor.style.width = imgWidth + "px"; 
            waitCursor.style.top = pHeight/2 - imgWidth/2 + scrollY + "px";
            waitCursor.style.left = pWidth/2 - imgWidth/2 + scrollX + "px";
        }
        if (waitDiv) {
            waitDiv.style.visibility = "visible";
        }
    } else {
        document.body.className = "";
        if (sheet.removeRule) { // Internet Explorer
            if (sheet.rules.length > 0) {
                sheet.removeRule(0);
            }
        }
        else if (sheet.deleteRule && sheet.cssRules &&  (sheet.cssRules.length > 0)) {
            //Opera, Google Chrome and Safari
            if (m_PlatForm.browser != "ff") {
                sheet.deleteRule(0);
            }
        }
        if (waitCursor) {
            waitCursor.style.visibility = "hidden";
            waitCursor.className = "";
        }
        if (waitDiv) {
            waitDiv.style.visibility = "hidden";
        } 
    }
}
var dynaStateFuncName = StateChanged;

function DocLoaded(doc) {
}
var dynaDocLoadedFuncName = DocLoaded;

function ChangeState(iswait) {
	if (lastwait != iswait) {
        lastwait = iswait;
        dynaStateFuncName(iswait);
    }
}

function dynaInitVar() {
	dynaWholeDoc=false;
	dynaImageUpdateNr=0;
	dynamakeUpdate=false;
	dynaLastKey=0;
	dynaTextInput=null;
	dynaMaxObjects=0;
	dynabgImage=null;
	dynaLastObj=null;
	dynaCurrObj=null;
	dynaNextInputObject = null;
	dynaNextInputObjectID = null;
	dynaPopupObject=null;
	arcUserParam=null;
	dynaCountRek=0;
	dynaMaxDocs=0;
	dynacurrentDoc=0;
	dynaFirstDoc=true;
	dynaFirstDispatcher="";
	dynaDialogParam=null;
}

//*******
function arcCheckCookie(name) {
    var idx, entries;
    if (arcTop.document.cookie) {
        entries = arcTop.document.cookie.split(";");
        for (idx = 0; idx < entries.length; idx++) {
            if (entries[idx] && ((entries[idx].indexOf(name + "=") === 0)
                || (entries[idx].indexOf(" " + name + "=") === 0))) {
                return true;
            }
        }
    }
    return false;
}

function arcSetCookie(name, value, expires, path, domain, secure) {
	arcTop.document.cookie = name + "=" + dynaEscape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
	dynaCookiesAllowed = arcCheckCookie(name);
    if (!dynaCookiesAllowed) {
        debugMsg("Warning: cookies are disabled! " + name);
    }
}

// Mobile scrolling
var dynaIsMoving = false;
function dynaTouchHandler() {
	this.target = null;
	this.startX = 0;
	this.startY = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.maxY = 0;
	this.yImg = null;
	this.direction = null;


	this.InitTouch = function (e, horiId, vertId) {
	    //debugMsg("InitTouch " + horiId + " " + vertId);
	    var target,
			parentX,
			parentY,
			ref,
			doc,
			child;
	    this.targetX = null;
	    this.targetY = null;
	    this.origX = 0;
	    this.startX = 0;
	    this.origY = 0;
	    this.startY = 0;
	    this.scaleX = 1;
	    this.scaleY = 1;
	    this.direction = null;

	    if (e.changedTouches.length == 1) {
	        this.startX = this.origX = e.changedTouches[0].pageX;
	        this.startY = this.origY = e.changedTouches[0].pageY;
	        target = e.changedTouches[0].target;

	        parentX = dynaGetMainParent(target);
	        parentY = parentX;
	        target = dynaFirstChild(parentX);
	        if (target && target.tagName == "IMG") {
	            this.yImg = target;
	            target = dynaNextChild(target);
	        }


	        doc = dynaGetDoc(parentX);
	        if (horiId) {
	            ref = document.getElementById('OBJ' + horiId + ':' + doc);
	            this.targetX = dynaGetMainChild(ref);
	        }
	        if (vertId) {
	            ref = document.getElementById('OBJ' + vertId + ':' + doc);
	            this.targetY = dynaGetMainChild(ref);
	        }
	        child = dynaGetMainChild(this.targetX);
	        if (child && parentX.style.width && child.style.width) {
	            this.scaleX = dynaConv(child.style.width) / dynaConv(parentX.style.width);
	        }
	        child = dynaGetMainChild(this.targetY);
	        if (child && parentY.style.height && child.style.height) {
	            this.maxY = dynaConv(child.style.height) - dynaConv(parentY.style.height) - 2;
	            this.scaleY = dynaConv(child.style.height) / dynaConv(parentY.style.height);
	        }
	    }
	}

	this.HandleTouch = function (e) {
	    var done = false;
	    if (!dynaIsMoving && e.changedTouches.length == 1) { //Falls mehrere Events doch gleichzeitig reinkommen
	        //debugMsg("HandleTouch " + this.targetX + " " + this.targetY.id);
	        dynaIsMoving = true;
	        var xdiff = this.scaleX * (e.changedTouches[0].pageX - this.startX),
                xabs = Math.abs(e.changedTouches[0].pageX - this.origX),
                ydiff = this.scaleY * (e.changedTouches[0].pageY - this.startY),
                yabs = Math.abs(e.changedTouches[0].pageY - this.origY);
	        if (this.direction === null) {
	            if (xabs > yabs + 10) {
	                this.direction = "hori";
	            }
	            if (yabs > xabs + 10) {
	                this.direction = "vert";
	            }
	            //debugMsg("HandleTouch " + done + " direction " + this.direction + " x:" + xdiff + " y:" + ydiff);
	        }
	        if ((xdiff != 0) && this.targetX && (this.direction === "hori")) {
	            this.targetX.scrollLeft -= xdiff;
	            done = dynascrollEx(this.targetX, e);
                this.startX = e.changedTouches[0].pageX;
            }
	        if ((ydiff != 0) && this.targetY && (this.direction === "vert")) {
	            this.targetY.scrollTop -= ydiff;
	            done = dynascrollEx(this.targetY, e);
                this.startY = e.changedTouches[0].pageY;
            }
	        dynaIsMoving = false;
	        if (done) {
	            e.cancelBubble = true;
	        }
	    }
	    return done;
	}
}
var m_Move = new dynaTouchHandler();

function dynaTouchMove(e) {
    if (!m_PlatForm.touchScroll) {
        if (e.changedTouches.length == 1) { // Only deal with one finger
            if ((m_Move.targetX != null) || (m_Move.targetY != null)) {
                m_Move.HandleTouch(e);
                e.preventDefault();
            }
		}
	}
	return e;
}
function dynaTouchStart(e, vertId, horiId) {
    m_Move.InitTouch(e, vertId, horiId);
}

function dynaTouchStop(e) {
    m_Move.direction = null;
}

function dynaGetBase() {
	var oBase = document.getElementById('arcBase');
	if (oBase && oBase.href) 	return(oBase.href.substring(0,oBase.href.lastIndexOf("/")+1));
	else return null;
}

//Sendet regelm�ssig das KeepAlive. Wird gestartet sobald die Session erzeugt wurde 
//also dynainitpresfinish aufgerufen wurde
function dynaKeepAliveThread() {
	this.stopped=false;
	this.timeOut=null;
	this.lastTime=dynaGetCurrentTimeLong();
	this.checkContactTime=dynaKeepAliveTime/10;
	
	function dynaKeepContact() {

		var pTime,time;
		var doit=true;
	
		this.timeOut=null;
		if ((arcTop.dynaContact==false) && (dynaDialogType==0)) {
			time=dynaGetCurrentTimeLong();
			pTime=dynaGetpreviousContactTime();
			
//			debugMsg("time: "+time+"  pTime: "+pTime);
			if ((pTime>0) && (time>pTime+dynaKeepAliveTime) && (time>this.lastTime+dynaKeepAliveTime)) {
//				debugMsg("keepalive: time: "+time+"  >  lastProcessTime: "+pTime+"  dynaRequestInProgress: "+arcTop.dynaRequestInProgress);
				if (!arcTop.dynaRequestInProgress) {
					dynaMakeKeepAliveContact();
					this.lastTime=dynaGetCurrentTimeLong();
				}
			}
		}
		if (!this.stopped) {
//			debugMsg(".",true);
			this.timeOut=setTimeout("dynaKeepAlive.dynaKeepContact()",this.checkContactTime);
		}

	}
	this.dynaKeepContact=dynaKeepContact;
	
	function dynaStopThread() {
		this.stopped=true;
		if (this.timeOut) clearTimeout(this.timeOut);
	}
	this.dynaStopThread=dynaStopThread;
}

function dynaMakeKeepAliveContact() {
	var Ptime = new Date();
	var url;
	url = "DYN=KEEPALIVE&PARAM1="+dynaSessionID+"&SPACE=\""+Ptime.getTime()+"\" ";
debugMsg("dynaMakeKeepAliveContact "+url);
	dynaLoadUrl(url);
}

function dynaGetCurrentTimeLong() {
	var Ptime = new Date();
	
	return Ptime.getTime()-dynaStartTime;
}

function dynaSetpreviousContactTime() {
	var Ptime = new Date();
	arcTop.dynaContactTime=Ptime.getTime()-dynaStartTime;
}
function dynaGetpreviousContactTime() {
	return arcTop.dynaContactTime;
}

function dynaDoUnicode(str) {
	if (!str) return false;
	if (str.indexOf("+") >= 0) return true;
	if (str.indexOf("%25") >= 0) return true; //Prozent Zeichen
	if (str.indexOf("%u")>=0) return true;
	if (str.indexOf("%F")>=0) return true;
	if (str.indexOf("%E")>=0) return true;
	if (str.indexOf("%D")>=0) return true;
	if (str.indexOf("%B")>=0) return true;
	if (str.indexOf("%A")>=0) return true;
	if (str.indexOf("%9")>=0) return true;
	if (str.indexOf("%8")>=0) return true;
	return false;
}
//*******
function dynaEscape(str,uni) {
	if (!str) return "";
	return encodeURIComponent(str);
}

function arcEncode(i_Str)
{
    var s64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var bits;
    var dual;
    var i = 0;
    var encOut = '';
    while(i_Str.length >= i + 3) {
        bits = (i_Str.charCodeAt(i++) & 0xff) <<16 
                | (i_Str.charCodeAt(i++) & 0xff) <<8  
                | i_Str.charCodeAt(i++) & 0xff;
        encOut += s64.charAt((bits & 0x00fc0000) >>18) 
                + s64.charAt((bits & 0x0003f000) >>12) 
                + s64.charAt((bits & 0x00000fc0) >> 6) 
                + s64.charAt((bits & 0x0000003f));
    }
    if(i_Str.length -i > 0 && i_Str.length -i < 3) {
        dual = Boolean(i_Str.length -i -1);
        bits = ((i_Str.charCodeAt(i++) & 0xff) <<16) 
                | (dual ? (i_Str.charCodeAt(i) & 0xff) <<8 : 0);
        encOut += s64.charAt((bits & 0x00fc0000) >>18) 
                + s64.charAt((bits & 0x0003f000) >>12) 
                + (dual ? s64.charAt((bits & 0x00000fc0) >>6) : '=') 
                + '=';
    }
    return(encOut);
}

//*******
function dynaremoveIsExt(Name) {
	if ( Name && (Name.indexOf(".apd")>0) ) {
		return Name.substring(0,Name.indexOf(".apd"));
	}
	else return Name;
}

function dynaStartScript() {
	if (arcScripting && !HasDebugConsole()) {
		++dynaCountSRek;
		if (!arcTop.arcScriptWind) {
			arcTop.arcScriptWind=arcTop.open(arcBase+"arcScriptWind.html","","height=293px,width=500px, help=no,resizable=yes,status=no");
		}
		if (!arcTop.arcScriptObj) {
			if (arcTop.arcScriptWind && arcTop.arcScriptWind.document && arcTop.arcScriptWind.document.body && (arcTop.arcScriptWind.document.body.id=="arcScriptWind"))	arcTop.arcScriptObj=arcTop.arcScriptWind.document.getElementById('arcScriptObj');
			else if (dynaCountSRek<10) setTimeout("dynaStartScript()",500);
		}
		else dynaCountSRek=0;
		arcScriptObj=arcTop.arcScriptObj;
	}
}
//*******
function arcInit() {
    dynaCommunicationFrame = self.arcBufferFrame;
	dynaBrowserCheck();

    if (top.Start) {
        top.Start();
    }

    ChangeState(true);
    arcBase=dynaGetBase();
    dynaBlank = arcBase + "blank.html";
	if (arcTop.arcScripting) arcScripting=true;
	dynaStartScript();
	
	var Ptime = new Date();
	dynaStartTime=Ptime.getTime();

	debugMsg("arcInit " + dynaHVversion + " ");

	var i;
	var l=location.href;
	debugMsg("arcBase=" + arcBase);
	if (!arcBase) {
		if (l.lastIndexOf("/")>0)
			dynaDocHref=l.substring(0,l.lastIndexOf("/")+1);	
		debugMsg("DocHref=",dynaDocHref);
	}
	try {
		if (typeof dynaCommunicationFrame !== "object") {
			debugMsg("no dynaCommunicationFrame");
			return;
		}
	} catch (e) {
		return;
	}
	if (!m_PlatForm.browser) return;
	
	if (docname)  {
		dynaDoc=docname;
	}

	debugMsg("dynaSessionID="+dynaSessionID);
	if (dynaSessionID!=null) {
		if ((arcTop==self) && (arcTop.dynaState==-1)) {
			dynaSessionID=null;
		}
	}
	if (dynaSessionID==null) {
		dynaparsedoc();
		if ((dynaMaxObjects>0) || (dynaWholeDoc)) {
			dynaLoadInitpresentation();
		}
	}
	else if ( (dynaSessionID) && (dynaMaxObjects==0) && (parseInt(dynaSessionID)>0) ) {
		dynaparsedoc();
		if (dynaMaxObjects>0) {
			if (dynaCommunicationFrame) {
				dynacurrentDoc=0;
				dynaLoadObjects();
			}
			else alert("please insert arcBufferFrame");;
		}
		else if (dynaWholeDoc) {
			dynaLoad();
		}
		else {
			dynaSessionID="-2";
		}
    }
}

//*******
function dynaparsedoc() {
debugMsg("dynaparsedoc");
	var i,j,ind;
	var found = false;
	var str;
	var list=document.getElementsByTagName("CITE");
	var myCites=new Array(list.length);
	var oi,	ai,	di,	si, lm=0, tm=0;
	dynaMaxDocs=0;
	for (i=0; i<list.length; i++) myCites[i]=list[i];

	for (i=0; i<myCites.length; i++) {
		obj=myCites[i];
		if (obj) {
			if (m_PlatForm.browser=="ie") { str=obj.innerHTML;
			}
			else {
				str=obj.firstChild.nodeValue;
				dynaDeleteObject(obj);
				myobj=obj.parentNode;
				myElem=document.createElement("DIV");
				myobj1=myobj.insertBefore(myElem,obj);
				myobj.removeChild(obj);
				obj=myobj1;
			}

			if (str && (str.indexOf("ARCPLANINCLUDE ")>=0)) {
				oi = str.indexOf("OBJECTNR=\"")+10;
				ai = str.indexOf("APPLICATION=\"")+13;
				di = str.indexOf("DOCUMENT=\"")+10;
				si = str.indexOf("SET=\"")+5;
				lm = str.indexOf("LEFTMARGIN=")+11;
				tm = str.indexOf("TOPMARGIN=")+10;
				if ((oi>10) && (ai>13) && (di>10)) {
					stro=str.substring(oi,oi+str.substring(oi,str.length).indexOf("\""));
					if (stro.toUpperCase()=="ALL") {
						dynaWholeDoc=true;
						dynaApp=str.substring(ai,ai+str.substring(ai,str.length).indexOf("\""));
						dynaDir=dynaApp+"\\";
						if (!dynaDoc || dynaDoc.length==0) {
							dynaDoc=dynaremoveIsExt(str.substring(di,di+str.substring(di,str.length).indexOf("\"")));
						}
						else {
							di=dynaDoc.indexOf("\\");
							if (di>=0) {
								++di;
								dynaDoc=dynaremoveIsExt(dynaDoc.substring(di,dynaDoc.length));
							}
						}
						DynaDocs[0]=dynaDoc;
						dynaMaxObjects=0;
						DynaDocs[0]=dynaDoc;
						dynaMaxDocs=1;
						if (lm>0) dynaLeftMargin=parseInt(str.substring(lm,str.length));
						if (tm>0) dynaTopMargin=parseInt(str.substring(tm,str.length));
						if (dynaLeftMargin==NaN) dynaLeftMargin=0;
						if (dynaTopMargin==NaN) dynaTopMargin=0;
					}
					else if (parseInt(stro)!=NaN) {
						DynaObj[dynaMaxObjects]=new dynaObj();
						DynaObj[dynaMaxObjects].OBJnr=stro;
						DynaObj[dynaMaxObjects].App=str.substring(ai,ai+str.substring(ai,str.length).indexOf("\""));
						DynaObj[dynaMaxObjects].Doc=dynaremoveIsExt(str.substring(di,di+str.substring(di,str.length).indexOf("\"")));
						DynaObj[dynaMaxObjects].SetList="";
						DynaObj[dynaMaxObjects].hScroll=null;
						DynaObj[dynaMaxObjects].vScroll=null;
						
						if (dynaMaxDocs==0)  {
								DynaDocs[0]=DynaObj[dynaMaxObjects].Doc;
							dynaMaxDocs++;
						}
						else {
							found = false;
							for (j=0; j<dynaMaxDocs; j++) {
									if (DynaDocs[j]==DynaObj[dynaMaxObjects].Doc) {
									found =true;
									break;
								}
							}
							if (found==false) {
								DynaDocs[dynaMaxDocs]=DynaObj[dynaMaxObjects].Doc;
								dynaMaxDocs++;
							}
						}
                        DynaObj[dynaMaxObjects].ParentID = getContainerID(
                            DynaObj[dynaMaxObjects].OBJnr, DynaObj[dynaMaxObjects].Doc);
						
						if (si>5) DynaObj[dynaMaxObjects].SetList=str.substring(si,si+str.substring(si,str.length).indexOf("\""));
						DynaObj[dynaMaxObjects].ParentRef=obj;
						DynaObj[dynaMaxObjects].ID="OBJ"+DynaObj[dynaMaxObjects].OBJnr+":"+DynaObj[dynaMaxObjects].Doc;
						if ( (DynaObj[dynaMaxObjects].App.length>0) && (DynaObj[dynaMaxObjects].Doc.length>0) && (DynaObj[dynaMaxObjects].ParentID.length>0) ) {
							obj.id=DynaObj[dynaMaxObjects].ParentID;
							dynaMaxObjects++;
						}
						else alert("invalid paramter in [OBJ"+stro+"]");
					}
					else alert("NaN");
				}
			}
		}
		if (dynaWholeDoc) break;
	}
	
	if (m_PlatForm.browser!="ie") dynaParentTagname="DIV";
	if ((!dynaWholeDoc) &&(dynaMaxObjects>0)) {
		dynaApp=DynaObj[0].App;
		dynaDir=dynaApp+"\\";
		dynaDoc=DynaDocs[dynacurrentDoc];
	}
}

//*******
function dynaLoadInitpresentation() {
	debugMsg("dynaLoadInitpresentation");
	dynaStillLoading=true;
	
	var Ptime = new Date();
	var url="";
	
	if (m_PlatForm.browser=="ie") {
		arcTop.attachEvent('onbeforeunload',arcTop.arcbeforeUnload);
	}
	else {
		document.body.addEventListener("unload",arcbeforeUnload,false);
	}
	dynaUrlHeader=arcCGISite +"?ISINIT=\""+dynaFirstDispatcher+"\"&";

	var client = arcTop.dynaClient;
    if (!client) {
        client = "";
    }
    var type = m_PlatForm.type;
    if (type == E_MOBILE_HTMLCLIENT) {
        if (typeof parent.jQuery == 'undefined') {
            if (dynaHVversion.substring(0, 3) === "7.1") { //DT15722 nur in der 7.1
                debugMsg("map mobile device to html client");
                type = E_HTMLCLIENT;
            }
        }
        else {
            debugMsg("mobile Frameset detected");
        }
    }

    url = "DYN=initpresentation&PARAM1=" + type + "&PARAM2=\"" + dynaEncDoc() + ".apd\"&PARAM3=\"" + dynaHVversion + "\"&PARAM4=" + arcUserLang;
	url+="&PARAM5=\""+client+"\"";
	url += "&PARAM6=\"" + dynaEscape(dynaApp) + "\"";
	url += "&PARAM7=\"" + m_PlatForm.browser + "\"";
	url += "&PARAM8=\"" + dynaEscape(m_PlatForm.name) + "\"";
	url += "&SPACE=\"" + Ptime.getTime() + "                                         \" ";



	arcTop.dynaState=0;
	dynaLoadUrl(url);
}

//*******
function dynainitpresfinish() {
	debugMsg("dynainitpresfinish");
	var id;
	arcTop.dynaContact=false;
		--dynaUrlNr;

		arcTop.dynaRequestInProgress=false;
		if (dynaSessionID<=0 ) {
			FBody=dynaCommunicationFrame.document.body;

			if ((!FBody.id) || (FBody.id!="init") || (FBody.title=="Error")){
				if ( (FBody.id=="Error") || (FBody.title=="Error")) {
					alert(FBody.innerHTML);
				}
				return;
			}

			id=parseInt(FBody.title);
			if ( (FBody.title.length==0) || (parseInt(FBody.title)==NaN) || (id<=0) ) {
			    debugMsg("unexpected result: " + FBody.title);
			}
			else if (FBody.id=="init") {
debugMsg(" id Ok",true);
				dynaSessionID=FBody.title;
				FBody=dynaCommunicationFrame.document.getElementById('dynaISINIT');
				if ( (FBody) && (FBody.title) && (FBody.title.length>0) ) {
					dynaFirstDispatcher = FBody.title;
					//Platzhalter f�r Server & Session ID anpassen
					var idstr = " " + dynaSessionID;
					while ( (dynaSpace.length * 3) < dynaFirstDispatcher.length + idstr.length + 10) {
						dynaSpace += "     ";
					}

					dynaStillLoading = false;
					arcSetCookie("arcSessionToken", dynaFirstDispatcher + "|" + dynaSessionID, null, '/', null);
					dynaLoadUrl(null);
					dynacurrentDoc=0;
					dynaSendProp();
				}
				else {
					alert("ERROR: no FirstDispatcher");
				}

			}
		}
		if (!arcScripting) status=window.defaultStatus; 
	
	dynaKeepAlive=new dynaKeepAliveThread();
	dynaKeepAlive.dynaKeepContact();
}

function encodeStringParam(index, param) {
	var uni = "",
		p = escape(param)
		str = param;

	if (dynaDoUnicode(p)) {
		str = dynaEscape(param, true);
		uni = "u";
	}
	return "&PARAM" + index + uni + '="' + str + '"';
}

//*******
function dynaSendUserParam() {
debugMsg("dynaSendUserParam start");
	if (arcTop.dynaState>0) dynaDeActivate(true);
	var Ptime = new Date();
	var url;
	var str="";
	var i,ii,index=7,index1=8;
	
	if (arcUserParam) {
		for (i=0; i<arcUserParam.length; i++) {
			if (arcUserParam[i]) {
				ii=i;
				str+="&PARAM"+index+"=\""+ii+"\"" + encodeStringParam(index1, arcUserParam[i]);
				index+=2;
				index1+=2;
			}
		}
		ii=(index-7)/2;
		if (arcUserParam.length>0) debugMsg("  NumUserParams:"+ii,true);
	}

	if (index>7 && dynaSessionID) {
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4=0"+"&PARAM5=103"+"&PARAM6=" + m_PlatForm.type + str + "&SPACE=\""+Ptime.getTime()+"\" ";
		dynaLoadUrl(url);
	}
	else if (arcTop.dynaState==0){
		++arcTop.dynaState;
		//if (dynaWholeDoc) dynaLoadOpenDoc();
		//else dynaLoadObjects();
		dynaLoadOpenDoc();
	}
debugMsg("dynaSendUserParam stop");
}
function dynaUserParamFinish() {
	++arcTop.dynaState;
	arcTop.dynaContact=false;
	dynaLoadOpenDoc();
}
//*******
function dynaSendProp() {
debugMsg("dynaSendProp");
	dynaDeActivate(true);
	var Ptime = new Date();
	var url;
	if (dynaFirstDispatcher && dynaSessionID) {
debugMsg(" arcPrint:"+arcPrint,true);
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4=0&PARAM5=107&PARAM6=" + m_PlatForm.type + "&PARAM7="+arcPrint+"&PARAM8="+arcTitleBar+"&SPACE=\""+Ptime.getTime()+"\"                           ";
		dynaLoadUrl(url);
	}
}
function dynaPropFinish() {
debugMsg("dynaPropFinish");
	arcTop.dynaContact=false;
	if (dynaWholeDoc) {
		dynaLoadOpenDoc();
	}
	else dynaLoadObjects();
}

//*******
function dynaLoadOpenDoc() {
	if (!dynaWholeDoc) {
		dynaLoadObjects();
		return;
	}
debugMsg("dynaLoadOpenDoc");
	dynaDeActivate(true);
	var Ptime = new Date();
	var url;
	if (dynaFirstDispatcher && dynaSessionID) {
		if (arcTop.dynaState==0) dynaSendUserParam();
		else {

		    url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4=0"+"&PARAM5=100"+"&PARAM6=" + m_PlatForm.type + "&PARAM7=\"" + m_PlatForm.browser+"\""+"&PARAM8="+dynaLeftMargin+"&PARAM9="+dynaTopMargin+"&SPACE=\""+Ptime.getTime()+"\"                           ";
			debugMsg(" contacting Server...",true);
			dynaLoadUrl(url);
		}
	}
	else alert("ERROR: no FirstDispatcher or SessionID");
}

//*******
function dynaAttachMainEvents() {
try {
		if ( m_PlatForm.browser=="ie") {
			document.detachEvent('onclick',ShowContent);
			self.detachEvent('onbeforeprint',dynaBeforePrint);
			self.detachEvent('onafterprint',dynaAfterPrint);

			document.attachEvent('onclick',ShowContent);
			self.attachEvent('onbeforeprint',dynaBeforePrint);
			self.attachEvent('onafterprint',dynaAfterPrint);
		}
		else {
			removeEventListener('click',ShowContent,false);
			removeEventListener('click',dynaClick,false);

			removeEventListener('keydown',dynaKeyDown,false);

			if (arcScripting) addEventListener('click',ShowContent,false);
			addEventListener('click',dynaClick,false);

			addEventListener('keydown',dynaKeyDown,false);
		}
	} catch (e) {
	    debugMsg("exception in dynaAttachMainEvents!");
	}
}
//*******
function dynaLoad() {
	setTimeout("dynaStartScript()",2000);
	if (arcScripting) arcScriptObj=arcTop.arcScriptObj;
debugMsg("dynaLoad");

	if (dynaSessionID!="")	{
	    dynaDocIsLoading=true;
	    dynaDeActivate(true);
		dynaAttachMainEvents();
		var Ptime = new Date();
		var url;
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=OpenDoc"+"&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+dynasWidth+"&PARAM5="+dynasHeight+"&PARAM6=0"+"&SPACE=\""+Ptime.getTime()+"                                 \"            ";
		arcTop.dynaFirstDoc=false;
		dynaStillLoading=true;
		if (dynaSessionID) {
			dynaLoadUrl(url);
		}
	}
}

//*******
function dynaLoadObjects() {
	if (dynaFirstDispatcher && dynaSessionID) {
		if (arcTop.dynaState==0) dynaSendUserParam();
		else if (dynaSessionID!="") {
			var ParamStr;
			var str,ParamStr1="";
			var i,j;
			var url, uni="";
			var unicode=false;
			
debugMsg("dynaLoadObjects ");
			dynaStillLoading=true;
			dynaDeActivate(true);
			dynaAttachMainEvents();

			for (i=0; i<dynaMaxObjects; i++) {
				if (DynaDocs[dynacurrentDoc].toUpperCase()==DynaObj[i].Doc.toUpperCase()) {
					ParamStr1+=DynaObj[i].OBJnr;
					ParamStr1+="!";
					str=escape(DynaObj[i].SetList);
					if (dynaDoUnicode(str)) {
						unicode=true;
						uni="u";
					}
					ParamStr1+=DynaObj[i].SetList;
					ParamStr1+=".";
				}
			}
			ParamStr="&PARAM7"+uni+"=\"";
			if (unicode) ParamStr+=dynaEscape(ParamStr1,unicode);
			else ParamStr+=ParamStr1;
			ParamStr+="\"";
			var Ptime = new Date();
			url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEscape(dynaDir)+dynaEscape(DynaDocs[dynacurrentDoc])+"\"&PARAM4=0"+"&PARAM5=110"+"&PARAM6=" + m_PlatForm.type + ParamStr+"&PARAM8=\"" + m_PlatForm.browser+"\"&PARAM9="+dynasWidth+"&PARAM10="+dynasHeight+"&SPACE=\""+Ptime.getTime()+"\"   ";
			arcTop.dynaFirstDoc=false;
			if (dynaSessionID) {
				dynaLoadUrl(url);
			}
		}
	}
}


//*******
function dynamyloadfinish() {
//debugMsg("dynamyloadfinish start "+dynaLastRow+">"+dynaNextRow+" & "+dynaLastCol+">"+dynaNextCol);
//debugMsg("ID:"+dynaSessionID)
arcTop.dynaContact=false;
	dynaUpdatePatterns=true;
	--dynaUrlNr;

	var i=0;
	var j=0;
	var k=0;
	var w,h,sx,sy;
	var zIndex=0;
	var objID="";
	var str="",str1,str2="";
	var childNumber;
	var Ptime = new Date();
	var CurrDiv,BBody,MDiv,obj,to,to1,to2,to3,to4,myApp;
	var content;
	var anzahl,Nr;
	var doit=false;
	var loadDoc=false,getImages;
	var doselect=true;
	var Prop;
	var Data;
	var objfound;

	dynaSetpreviousContactTime();
	if (dynaCommunicationFrame.document) {
	    BBody = dynaCommunicationFrame.document.body;
	    objID = BBody.id;
	}
	else {
	    debugMsg("IDdynamyloadfinish BODY not found")
	}
	if (objID!="KEEPALIVE") {
		dynaDeActivate(true);
	}
	if (dynaDocIsLoading) {
	    dynaDocLoadedFuncName(dynaDoc);
	}
	dynaDocIsLoading = false;

	str=BBody.lang;
	if (str) {
	    str1 = str.split(";");
	    //DT12373 str1[1] war fr�her das Druckdokument
		if ((str2[0]=="UserParams")&&(arcTop.dynaState==0)) {
			arcTop.dynaState=1;
			dynaLoadUrl(null);
			dynaLoad();
			loadDoc=true;
		}
    }
    if (objID == "FILEDIALOG") {
        debugMsg("Download File");
        dynaDeActivate(false);
        ChangeState(false); //Kontakt ist fertig
        dynaLoadUrl(null);
        dynaUrlNr = 0;
        var dummyAray = new Array();
        dynaReply(2, dummyAray);
        setTimeout("dynaReply(2, dynaDialogValue, false);", 1000);
    }
    else if (objID == "FILE") {
	    debugMsg("Download File in new Window");
	    dynaDeActivate(false);
	    ChangeState(false); //Kontakt ist fertig
	    dynaLoadUrl(null);
	    dynaUrlNr = 0;
	    var dummyAray = new Array();
	    dynaReply(2, dummyAray, true);
	    setTimeout("dynaReply(2, dynaDialogValue, false);", 1000);
	}
	else if (objID == "ERROR") {
		debugMsg("ERROR: Server returned no Data");
		arcTop.dynaRequestInProgress = false;
		str = BBody.innerHTML;
		if (typeof str.trim === "function") {
			str = str.trim();
		}
		if (str === "") { //DT20467 Kein Fehlertext. Dann gibt es die Session nicht mehr
			if (dynaKeepAlive) {
				dynaKeepAlive.dynaStopThread();
			}
			alert(dynaStrings[7]);
		}
		ChangeState(false);
	}
	else if (objID=="KEEPALIVE") {
	debugMsg("KEEPALIVE");
	    ChangeState(false);
	}
	else if (objID=="UpdateWS"){
		str=BBody.title.split(";");

		dynaLoadUrl(null);
		anzahl=0+dynaWSnames.length;
		for (i=0; i<str.length-1; i++) {
			if (str[i]) {
				dynaWSnames[i+anzahl]=str[i];
			}
		}
		anzahl+=str.length-1;

        //+".apd"
		dynaDoc=dynaWSnames[anzahl-1];  

		arcTop.dynaRequestInProgress=false;
		dynaSetNextInputObject(dynaCommunicationFrame.document.getElementById("dynaNextInputObject"));
		dynaLoad();
		loadDoc=true;
	}
	else if (objID == "document") {
    	document.body.scrollTop = 0;
		for (j=0; j<dynaMaxObjects; j++)  {
			myobj=document.getElementById(DynaObj[j].ParentID);
			if (myobj) {
				myobj.innerHTML="";
				myobj.parentNode.removeChild(myobj);
			}
		}
		dynaMaxObjects=0;
		if (m_PlatForm.browser=="ie") document.body.style.cssText=dynaCommunicationFrame.document.body.style.cssText;
		else {
			document.body.style.backgroundColor=dynaCommunicationFrame.document.body.style.backgroundColor;
		}

		MDiv = dynaCommunicationFrame.document.getElementById("MainDiv");
		debugMsg("MDiv.lang " + MDiv.lang);
		if (MDiv.lang.indexOf("BGimg") >= 0) {
			var parts = MDiv.lang.split('*');
			if (parts.length > 1) {
				dynabgImage = parts[1];
			}
		}
		else {
			dynabgImage=null;
			document.body.background="";
		}
		for (j=0; j<MDiv.childNodes.length; j++) {
			CurrDiv=MDiv.childNodes[j];
			if ((CurrDiv.tagName==dynaParentTagname)&&(CurrDiv.style.display!='none')) {
				obj=dynaGetMainChild(CurrDiv);
				if (obj) {
					obj.style.position='absolute';
					if (DynaObj[dynaMaxObjects]==null) DynaObj[dynaMaxObjects]=new dynaObj();
					DynaObj[dynaMaxObjects].ScrollY=0;
					DynaObj[dynaMaxObjects].ScrollX=0;
					DynaObj[dynaMaxObjects].Obj=null;
					DynaObj[dynaMaxObjects].ID=obj.id;
					DynaObj[dynaMaxObjects].OBJnr=obj.id.substring(3,obj.id.indexOf(":"));
					DynaObj[dynaMaxObjects].Doc=dynaGetDoc(obj);
					DynaObj[dynaMaxObjects].App=dynaApp;
					DynaObj[dynaMaxObjects].ParentID = getContainerID(
                        DynaObj[dynaMaxObjects].OBJnr,
                        DynaObj[dynaMaxObjects].Doc);
					DynaObj[dynaMaxObjects].SetList="";
					DynaObj[dynaMaxObjects].ObjType=null;
					DynaObj[dynaMaxObjects].hScroll=null;
					DynaObj[dynaMaxObjects].vScroll=null;
                    DynaObj[dynaMaxObjects].patternRef=null;

						
					to=document.createElement(dynaParentTagname);
					if (to) {
						myNewElem=document.body.appendChild(to);
						if (myNewElem) {
							DynaObj[dynaMaxObjects].ParentRef=myNewElem;
							myNewElem.id=DynaObj[dynaMaxObjects].ParentID;
							myNewElem.innerHTML=CurrDiv.innerHTML;
							if (obj.style.zIndex) myNewElem.style.zIndex=obj.style.zIndex;
							obj=dynaGetMainChild(CurrDiv);
							if (obj) { 
								dynaGetObjectType(obj,dynaMaxObjects);
							}
							to1=dynaGetMainChild(myNewElem);
							if (to1) {
								DynaObj[dynaMaxObjects].state=0;
								str1=to1.lang.split("*");
								if (str1 && str1[0]) {
									str1=str1[0].split(":");
									if (str1 && str1[3]) {
										if (str1[3].indexOf("1")>=0)  DynaObj[dynaMaxObjects].state=1;
										else if (str1[3].indexOf("2")>=0)  DynaObj[dynaMaxObjects].state=2;
									}
								}				
//debugMsg("LoadObjects: id:"+to1.id+"   lang:"+to1.lang+"    state:"+DynaObj[i].state);
								
								to3=dynaGetContent(to1);
								DynaObj[dynaMaxObjects].Obj=to1;
								DynaObj[dynaMaxObjects].ObjC=to3;
								DynaObj[dynaMaxObjects].ObjGl=dynaGetMainChild(to1);
								if (m_PlatForm.browser!="ie") {
									if (DynaObj[dynaMaxObjects].ObjType=="TEXTAREA") {
										str=dynaGetContent(obj).value;
										to3.value=str;
									}
									dynaAttachEvents(to1,DynaObj[dynaMaxObjects].ObjType);
								}
							}
							dynaCheckScroll(DynaObj[dynaMaxObjects]);
							++dynaMaxObjects;
						}
					}

				}
			}
		}
		if (dynaHandlePass) {
		    dynaHandleFields();
		}
		if (dynaNextInputObjectID) {
		    dynaNextInputObject = document.getElementById(dynaNextInputObjectID);
		}
		else {
		    dynaNextInputObject = null;
		}
		dynaNextInputObjectID = null;

		dynaLoadUrl(null);
		dynaImageUpdateNr=0;
		dynamakeUpdate=false;
		dynaDeActivate(true);
        dynaLoadImages();
	}
	else {
		dynamakeUpdate=false;
		getImages = true;
		dynaNextInputObjectID = null;

		if (objID=="UpdateObjects"){
		    for (i=0; i<dynaMaxObjects; i++) {
                DynaObj[i].updated = false;
            }
			Nr=dynaImageUpdateID.length;
			childNumber=BBody.childNodes.length;
			for (j=0; j<childNumber; j++) {
				objfound=false;
				CurrDiv=BBody.childNodes[j];
				if (CurrDiv.lang) {
					if (CurrDiv.lang.indexOf("P")>=0) Prop=true;
					else Prop=false;
					if (CurrDiv.lang.indexOf("D")>=0) Data=true;
					else Data=false;
				}
				CurrDiv=dynaGetMainChild(CurrDiv);
				if (CurrDiv ) {
				for (i=0; i<dynaMaxObjects; i++) {

					doit=false;
					
					
//alert(CurrDiv.id+"  "+dynaGetDoc(CurrDiv).toUpperCase()+"   "+DynaObj[i].Doc.toUpperCase())
					if ((dynaGetID(CurrDiv)==DynaObj[i].OBJnr) && (dynaGetDoc(CurrDiv).toUpperCase()==DynaObj[i].Doc.toUpperCase())) {
                        if (!DynaObj[i].updated) {
			    			DynaObj[i].Doc=dynaGetDoc(CurrDiv);
				    		DynaObj[i].ID=CurrDiv.id;
				    		doit=true;
                        }
					}
					if (doit){
					    DynaObj[i].Scrolledy = false;
					    DynaObj[i].Scrolledx = false;
						objfound=true;
						dynaGetObjectType(CurrDiv,i,j);
						DynaObj[i].ParentRef = document.getElementById(DynaObj[i].ParentID); //Sicherheitshalber nochmal holen
							to=DynaObj[i].ParentRef;
							if (to) {
								DynaObj[i].state=0;
								str1=CurrDiv.lang.split("*");
//debugMsg("UpdateObjects: "+CurrDiv.id+"   lang:"+CurrDiv.lang+"     Data:"+Data+"    Prop:"+Prop);
								if (str1 && str1[0]) {
									str1=str1[0].split(":");
									if (str1 && str1[3]) {
										if (str1[3].indexOf("1")>=0)  DynaObj[i].state=1;
										else if (str1[3].indexOf("2")>=0)  DynaObj[i].state=2;
									}
								}				
								
								if ((dynaWholeDoc) && (CurrDiv.style)) {
									CurrDiv.style.position='absolute';
									CurrDiv.style.zIndex=to.style.zIndex;
								}
								else {
									CurrDiv.style.position='relative';
									CurrDiv.style.left='0px';
									CurrDiv.style.top='0px';
								}
								{
									to1=null;
									to1=dynaGetMainChild(to);
									to3=dynaGetContent(to1);
									if ( (DynaObj[i].ObjType=="SELECT") || (DynaObj[i].ObjType=="BCHierPopup")) {
//debugMsg("update SELECT:"+DynaObj[i].ID);
										if (to.innerHTML!=CurrDiv.parentNode.innerHTML)	 {										
										    var bWasOpen = false;
											if (dynaPopupObject && (dynaPopupObject.id==CurrDiv.id)) {
												dynaPopupstate(CurrDiv,"visible",false,false);
												bWasOpen = true;
											}
											to.innerHTML=CurrDiv.parentNode.innerHTML;
											if (bWasOpen) {
												dynaPopupObject=dynaGetMainChild(to);
												dynaPopupstate(dynaPopupObject,"visible",true,true);
											}
											to1=dynaGetMainChild(to);
											dynaAttachEvents(to1,DynaObj[i].ObjType);
										}
                                        else debugMsg("  content unchanged!",true);
                                        dynaMakeVisible(to);
									}
									else if ((DynaObj[i].ObjType=="IMG") || (DynaObj[i].ObjType=="CHART")) {
										to2 = dynaGetContent(CurrDiv);
										if (to1 && Data && !Prop) {
											if (to2 && to3 && (to2.tagName == "IMG") || (to2.tagName == "EMBED")) { 
											    //keine neuen Props!
												debugMsg("  swapping IMG content: "+DynaObj[i].ID);
												to3.name = to2.name;
												to3.lang = to2.lang;
											}
											else {
												to1.innerHTML = CurrDiv.innerHTML;
											}
										}
										else {
										    to.innerHTML=CurrDiv.parentNode.innerHTML;
										}
										if (!dynaWholeDoc)
											dynaMakeVisible(to);
									}
									else if (DynaObj[i].ObjType=="TABLE") {
								        if (to1 && Data && !Prop) {
								            if (dynaScrollbarHasChanged(DynaObj[i], CurrDiv.parentNode)) {
								                Prop = true;
								            }
								        }
										if (to1 && Data && !Prop) {
											to2=dynaGetContent(CurrDiv);
											if (to2 && to3 && (to2.tagName=="TABLE")) { 
											    //keine neuen Props!
                                                to3.parentNode.style.width=to2.parentNode.style.width;
                                                to3.parentNode.style.height=to2.parentNode.style.height;
												to3.parentNode.innerHTML=to2.parentNode.innerHTML;
											}
										}
										else if (Prop) {
									        to.innerHTML=CurrDiv.parentNode.innerHTML;
									        to1=dynaGetMainChild(to);
										}
										else if (to1) {
										    to1.innerHTML=CurrDiv.innerHTML;
										}
                                        else if (to && to.tagName=="CITE") {
									        to.innerHTML = CurrDiv.parentNode.innerHTML;
								            to1=dynaGetMainChild(to);
								        }
									    if (!dynaWholeDoc)
									        dynaMakeVisible(to);
									}
									else {
										if (m_PlatForm.browser=="ie") {
											if (to1 && Data && !Prop) to1.innerHTML=CurrDiv.innerHTML;
											else to.innerHTML=CurrDiv.parentNode.innerHTML;
										}
										else {
											dynaDeleteObject(to);
											to.innerHTML=CurrDiv.parentNode.innerHTML;

											obj=document.getElementById(DynaObj[i].ID);
											if (DynaObj[i].ObjType=="TEXTAREA") {
												content = dynaGetContent(CurrDiv);
												if (content !== null) {
													str=content.value;
													dynaGetContent(obj).value=str;
												}
											}
											dynaAttachEvents(obj,DynaObj[i].ObjType);
										}
										if (to3) to4=to3.parentNode;
										else to4=null;
										if (dynaWholeDoc) {
											if (to4 && to4.childNodes.length>1) {
												to1=null;
												zIndex=0;
												if (DynaObj[i].ObjType=="BCHierPopup") {
													to2=dynaGetHierPopObj(to4);
													if (to2) zIndex=to2.style.zIndex;
												}

												for (k=0; k<to4.childNodes.length; k++) {
													if (to4.childNodes[k]) if (to4.childNodes[k].tagName=="BUTTON") to1=to4.childNodes[k];
												}
												if (to1) to1.style.zIndex=zIndex+1;
											}

										}
										if (!dynaWholeDoc)
										        dynaMakeVisible(to);
										
										to1=dynaGetMainChild(to);
									}
									DynaObj[i].Obj=to1;
									DynaObj[i].ObjC=dynaGetContent(to1);
									DynaObj[i].ObjGl=dynaGetMainChild(to1);
									dynaCheckScroll(DynaObj[i]);

									dynaImageUpdateID[Nr] = CurrDiv.id;

									Nr++;
								}
							    DynaObj[i].updated = true;
							}
							if (dynaWholeDoc) break;
					}
				}
				if (!objfound) {
					debugMsg("UpdateObjects: Object ");
					if (CurrDiv) debugMsg(" "+CurrDiv.id,true);
					else debugMsg(" NULL", true);
					debugMsg(" not found",true);
				}
			}
			}
			to=null;
			if (dynaCommunicationFrame.document) {
			    to1 = dynaCommunicationFrame.document.getElementById("dynaNextInputObject");
                if (to1) {
			        doselect = dynaSetNextInputObject(to1);
                }
                else {
                    if (dynaNextInputObject && dynaFirstChild(dynaNextInputObject)) {
                        dynaStillLoading = false;
                        dynaLastRow = 0;
                        dynaLastCol = 0;
					    dynaGotoObject(dynaGetContent(dynaNextInputObject));
                    }
                    dynaNextInputObject = null;
                }
				dynaSetLinkObjects(dynaCommunicationFrame.document.getElementById("dynaOpenLinkObject"));
				dynaLoadUrl(null);
			}

			if (dynacurrentDoc<dynaMaxDocs-1) {
				dynacurrentDoc++;
				dynaLoadObjects();
				return;
			}
			dynacurrentDoc=dynaMaxDocs;

			dynaImageUpdateNr=0;
			dynamakeUpdate=true;
			getImages=false;
			dynaImageUpdateNr = 0;
			dynaLoadImages();
			if (dynaHandlePass) {
			    dynaHandleFields();
			}
		}
		else if (objID=="IsFinish") { 
		    //BEENDEN
			getImages=false;
			dynaLoadUrl(null);
			dynaWSnames.length=0;
			objID="WSClose";
		}
		if (objID=="WSClose"){
			getImages=false;
			dynaLoadUrl(null);
			for (i=0; i<dynaWSnames.length; i++) {
				if (dynaWSnames[i]==dynaDoc) {
					dynaWSnames[i]=null;
				}
			}
			while ((dynaWSnames.length>1) && (dynaWSnames[dynaWSnames.length-1]==null)) {
				dynaWSnames=dynaWSnames.slice(0,-1);
			}

			if ((dynaWSnames.length==1) && (dynaWSnames[dynaWSnames.length-1]==null)) {
				dynaWSnames=dynaWSnames.slice(0,0);
			}
			if (dynaWSnames.length>0) {
				dynaDoc=dynaWSnames[dynaWSnames.length-1];     
				//+".apd"
				dynaLoadUrl(null);
				arcTop.dynaRequestInProgress=false;
				dynaLoad();
				loadDoc=true;
			}
			else {
				if (document.MainDiv) document.MainDiv.innerHTML="";
				if (document.body) {
					document.body.style.backgroundImage="";
					document.body.style.cssText="";
				}
				else if (dynaWholeDoc) {
					dynaLoadUrl(null);
					self.history.back();
				}

			}
		}
		else if (objID=="UserFunction") {
			var Params=new Array(8);
			for (i=0; i<8; i++) Params[i]=null;
			for (i=0; i<dynaCommunicationFrame.NumVars; i++) {
				Params[i]=dynaCommunicationFrame.Params[i];
			}
			dynaDialogValue[0]=UserFunction(Params[0],Params[1],Params[2],Params[3],Params[4],Params[5],Params[6],Params[7]);
			if (dynaDialogValue[0]) dynaDialogValue[0]='"'+dynaDialogValue[0]+'"';
			dynaReply(14,dynaDialogValue);
		}
		else if (objID=="GetUserInfo") {
			dynaDialogValue[0]='""';
			dynaReply(6,dynaDialogValue);
		}
		if ((getImages)&&(objID!="StopTracing")) {
			dynaDeActivate(true);
            dynaLoadImages();
		}
		else {
			if ((objID=="StopTracing")&&(BBody.title=="noDoc")) {
				++arcTop.dynaState;
				dynaLoadUrl(null);
				arcTop.dynaRequestInProgress=false;
				dynaLoadOpenDoc();
				loadDoc=true;
			}
			else {
				if ((objID=="StopTracing") && dynaNextInputObject && dynaFirstChild(dynaNextInputObject)) {
						dynaStillLoading=false;
						dynaGotoObject(dynaGetContent(dynaNextInputObject));
						dynaNextInputObject=null;
				}
				if (dynaUrlNr>=0) {
					dynaReplace(dynaUrl[dynaUrlNr]); 
				}
				else {
					if ( (!dynamakeUpdate) && (!loadDoc) ) dynaDeActivate(false);
					if (dynaPrintDoc.length>0)  dynaStartPrint();
				}
			}
		}
	}
		
	if (doselect) dynaSelect(true);
	
	if (!loadDoc) {
		dynaStillLoading=false;
		arcTop.dynaRequestInProgress=false;
	}
	dynaHandlePass = false;
//debugMsg("dynamyloadfinish stop")
}

//*******
function dynaGetObjectType(myto,i) {
	var to,str0,str,to1;
	if (myto==null) return;
	if (DynaObj[i].ObjType==null) {
	    if (myto.tagName == "SELECT") {
	        DynaObj[i].ObjType = "SELECT";
	    }
		else if ( ((myto.tagName=="SPAN")||(myto.tagName=="DIV")) && (myto.hasChildNodes())  ) {
			to=dynaFirstChild(myto);
			to=dynaFirstChild(to);
			if (to && (to.tagName!="BUTTON")) to=dynaFirstChild(to);
			if (to)
				if ((to.tagName == "IMG") || (to.tagName == "EMBED")) {
					if (to.className == "dynaChart") {
						DynaObj[i].ObjType = "CHART";
					}
					else {
						DynaObj[i].ObjType = "IMG";
					}
				}
				else if (to.tagName=="BUTTON") {
					DynaObj[i].ObjType="BUTTON";
					to1=dynaNextChild(to);
					if (to.className=="dynaVHo") DynaObj[i].ObjType="BCHierPopup";
					if (to1 && to1.tagName=="DIV" && (to1.lang=="BCPopup")) DynaObj[i].ObjType = "SELECT";
				}
				else if (to.tagName=="TEXTAREA") DynaObj[i].ObjType="TEXTAREA";
				else if (to.tagName=="TABLE") {
					if (to.lang) {
						str=to.lang.split(":");
						if (str) {
							if (str[0]=="oldHier") DynaObj[i].ObjType="OLDHIER";
							else if (str[0]=="RADIO") DynaObj[i].ObjType="RADIO";
							else if (str[0]=="CHECKBOX") DynaObj[i].ObjType="CHECKBOX";
							DynaObj[i].Rows=dynaConv(str[1]);
							DynaObj[i].Cols=dynaConv(str[2]);
							DynaObj[i].Conth = dynaConv(to.style.height);
							DynaObj[i].Contw = dynaConv(to.style.width);
							to1 = dynaFirstChild(to);
							if (to1 && to1.tagName == "COLGROUP") {
								DynaObj[i].colArray = new Array();
								for (var cc = 0; cc < to1.childNodes.length; cc++) {
									if (to1.childNodes[cc].tagName == "COL") {
										DynaObj[i].colArray[cc]=dynaConv(to1.childNodes[cc].width);
									}
								}
							}
						}
					}
					if (!DynaObj[i].ObjType)
						if (to.className=="dynaVHo") DynaObj[i].ObjType="BCHierVertObject";
						else if (to.className=="dynaHHo") DynaObj[i].ObjType="BCHierHoriObject";
						else {
							DynaObj[i].ObjType="TABLE";
						}
				}
				else DynaObj[i].ObjType="undefined";
		}
	}
}
//*******
function ShowContent(e) {
	var sElem,obj,ev;

	if (m_PlatForm.browser!="ie") ev=e;
	else ev=event;


	if (ev)
	if (arcScripting && (!ev.shiftKey) && (ev.ctrlKey || ev.altKey) ) {
		if (m_PlatForm.browser=="ie") sElem = document.elementFromPoint(ev.clientX, ev.clientY);
		else sElem = ev.target;
		if (!sElem) return;
		if (sElem.tagName=="HTML") {
			sElem=document.body;
		}
		else {
			while (sElem.tagName && (sElem.tagName!="BODY")) {
				if (((sElem.tagName=="SPAN") || (sElem.tagName=="DIV")) && sElem.id) break;
				if (sElem.parentNode && (sElem.parentNode.nodeType == Node.ELEMENT_NODE)) sElem = sElem.parentNode;
				else break;
			}
			sElem=sElem.parentNode;
		}

		if (ev.ctrlKey) {
			if ((!ev.ctrlLeft)&& arcScripting) {
				obj=arcScriptObj;
				if (obj && obj.tagName=="TEXTAREA") {
					obj.value=sElem.innerHTML;
				}
				else alert(sElem.innerHTML);
			}
			else alert(sElem.innerHTML);
		}
		else if (ev.altKey) window.prompt("please copy text",sElem.innerHTML);
	}
	else if (ev.altKey && ev.ctrlKey && ev.shiftKey) {
		if (!arcScripting) {
			arcScripting=true;
			dynaStartScript();
		}
		else {
			arcScripting=false;
			arcScriptObj=null;
			try {
				if (arcTop.arcScriptWind) arcTop.arcScriptWind.close();
			} catch (e) {
			}
			arcTop.arcScriptWind=null;
		}
	}

}


function dynaPlatformCheck(i_uA) {
    var str = navigator.userAgent;

    if (str.match(/iPhone/i)) {
        i_uA.name = "iPhone";
        i_uA.os = "iOS";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/iPod/i)) {
        i_uA.name = "iPod";
        i_uA.os = "iOS";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/iPad/i)) {
        i_uA.name = "iPad";
        i_uA.os = "iOS";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/android/i)) {
        i_uA.name = "android";
        i_uA.os = "android";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/opera mini/i)) {
        i_uA.name = "opera mini";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/blackberry/i)) {
        i_uA.name = "BlackBerry";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Nokia/i)) {
        i_uA.name = "Nokia";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Symbian/i)) {
        i_uA.name = "Symbian";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/SonyEricsson/i)) {
        i_uA.name = "SonyEricsson";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Motorola/i)) {
        i_uA.name = "Motorola";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Windows CE/i)) {
        i_uA.name = "Windows CE";
        i_uA.os = "Windows";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Windows Phone/i)) {
        i_uA.name = "Windows Phone";
        i_uA.os = "Windows";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Windows 95/i)) {
        i_uA.name = "Windows Desktop";
        i_uA.os = "Windows";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/Windows 98/i)) {
        i_uA.os = "Windows";
        if (str.match(/Palm/i)) {
            i_uA.name = "Palm";
            i_uA.type = E_MOBILE_HTMLCLIENT;
        }
        else {
            i_uA.name = "Windows Desktop";
            i_uA.type = E_HTMLCLIENT;
        }
    }
    else if (str.match(/Windows;/i)) {
        if (str.match(/Plucker/i)) {
            i_uA.name = "Plucker";
            i_uA.type = E_MOBILE_HTMLCLIENT;
        }
        else {
            i_uA.name = "Windows Desktop";
            i_uA.type = E_HTMLCLIENT;
        }
    }
    else if (str.match(/Mac/i)) {
        i_uA.name = "Mac Desktop";
        i_uA.type = E_HTMLCLIENT;
    }
    else if (str.match(/Windows NT/i)) {
        var ua = navigator.userAgent;
        if (str.match(/HTC/i) || str.match(/XV6850/i)) {
            i_uA.name = "HTC";
            i_uA.type = E_MOBILE_HTMLCLIENT;
        }
        else if (str.match(/Plucker/i)) {
            i_uA.name = "Plucker";
            i_uA.type = E_MOBILE_HTMLCLIENT;
        }
        else if (str.match(/RegKing/i)) {
            i_uA.name = "Windows CE";
            i_uA.type = E_MOBILE_HTMLCLIENT;
        }
        else {
            i_uA.name = "Windows Desktop";
            i_uA.type = E_HTMLCLIENT;
        }
    }
    else if (str.match(/palm/i)) {
        i_uA.name = "palm";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    else if (str.match(/LG/i)) {
        i_uA.name = "LG";
        i_uA.type = E_MOBILE_HTMLCLIENT;
    }
    if (i_uA.name == "") {
        str = navigator.userAgent;
        str.replace('"', ' ');
        str.replace("'", ' ');
        i_uA.name = str;
    }
}

//*******
function dynaBrowserCheck() {

    var b = navigator.appName,
		ua = navigator.userAgent,
		msie = ua.indexOf("MSIE "),
		ns = ua.indexOf("Netscape"),
		sf = ua.indexOf("Safari"),

		op = ua.indexOf("Opera"),
		ff = ua.indexOf("Firefox"),
		gc = ua.indexOf("Google");

	if (sf < 0) {
	    sf = ua.indexOf("AppleWebKit");
	}

	m_PlatForm.lang = navigator.language;
	if (b == "Microsoft Internet Explorer") {
	    m_PlatForm.browser = "ie";
	    m_PlatForm.lang = navigator.userLanguage;
	}
	else {
	    if (b == "Netscape") m_PlatForm.browser = "ns";
        else if ((b.indexOf("WebView") >= 0) && (ua.indexOf("compatible; MSIE") >= 0)) {
	        m_PlatForm.browser = "ie";
	        m_PlatForm.lang = navigator.userLanguage;
        }
	    else m_PlatForm.browser = b;
	}
	dynaPlatformCheck(m_PlatForm);

	m_PlatForm.vers = navigator.appVersion;
	
	if (op >= 0) {
		m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( op+6, navigator.userAgent.length) );
		m_PlatForm.browser="op";
	}
	else if ( msie > 0 )  m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( msie+5, navigator.userAgent.length) )
	else if (ns>0) {
		m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( ns+10, navigator.userAgent.length) );
		if (m_PlatForm.versNr<4) m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( ns+9, navigator.userAgent.length) );
		m_PlatForm.browser = "ns";
	}
	else if (sf>0) {
		m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( sf+8, navigator.userAgent.length) );
		m_PlatForm.browser = "sf";
	}
	else if (ff>0) {
		m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( ff+8, navigator.userAgent.length) );
		m_PlatForm.versNr*=10;
		m_PlatForm.browser="ff";
	}
	else if ( (ua.indexOf("Trident/") > 0) &&  (ua.indexOf("; rv:") > 0) ) {
		m_PlatForm.browser = "ie11";
		m_PlatForm.versNr= parseFloat ( navigator.userAgent.substring ( ua.indexOf("; rv:") + 5, navigator.userAgent.length) );
	}

    debugMsg(navigator.userAgent);
    debugMsg("browser: " + m_PlatForm.browser + " name: " + m_PlatForm.name +
            " type: " + m_PlatForm.type + " versNr: " + m_PlatForm.versNr);

	dynaSetWindowSize();
	if (arcautoLanguageDetection==1) {
	    if (m_PlatForm.lang.indexOf("de") != -1) arcUserLang = "2";
	    if (m_PlatForm.lang.indexOf("en") != -1) arcUserLang = "1";
	}
	if ((m_PlatForm.browser === "sf") && (m_PlatForm.os === "iOS")) {
	    if (m_PlatForm.vers.indexOf(" CPU OS 5_") != -1) {
            debugMsg("Native touch scrolling enabled");
            m_PlatForm.touchScroll = true;
        }
    }
}

//*******
function dynaSetWindowSize() {
	if (m_PlatForm.browser=="ie") {
		var w,h;
		w=dynaConv(document.body.clientWidth);
		h=dynaConv(document.body.clientHeight);
		if (w>0) dynasWidth=w;
		if (h>0) dynasHeight=h;
	}
	else {
		dynasWidth=dynaConv(self.innerWidth);
		dynasHeight=dynaConv(self.innerHeight);
	}
	if (dynaWholeDoc && (""+arcTitleBar=="1")) dynasHeight-=20;
}

//*******
function dynaDeActivate(State) {
	var i, j, k, l, St;
	var to,to1,to2;
	var MDiv, CurrDiv, waitDiv = document.getElementById("waitdiv") ;
	if (State) dynaStillLoading=true;

	for (i=0; i<dynaMaxObjects; i++) {
	    if (waitDiv && (m_PlatForm.browser != "ie")) { //DT15758
	        break; //Dann pasiert das deaktivieren �bers div
	    }
	    St = State;
		MDiv=DynaObj[i].ParentRef;
		if (DynaObj[i].state==1) St=true;
//debugMsg("dynaDeActivate State:"+State+"   ID:"+DynaObj[i].ID+"    state:"+DynaObj[i].state)
		if ((MDiv) && (MDiv.hasChildNodes())) {
			if (dynaTextInput) to1=document.getElementById(dynaTextInput.id);
			if (to1) to1.deactivate=St;
			CurrDiv=dynaGetMainChild(MDiv);
			if (CurrDiv) {

				if ( ((CurrDiv.tagName=="SPAN")||(CurrDiv.tagName=="DIV")) && (CurrDiv.hasChildNodes())  ) CurrDiv=dynaFirstChild(CurrDiv);
				CurrDiv=dynaFirstChild(CurrDiv);
				if ((DynaObj[i].ObjType!="BCHierPopup")&&(DynaObj[i].ObjType!="SELECT")) CurrDiv=dynaFirstChild(CurrDiv);
				if (CurrDiv)
				if (DynaObj[i].ObjType=="SELECT") CurrDiv.disabled=St;
				else if (DynaObj[i].ObjType=="BUTTON") {
					CurrDiv.disabled=St;

				}
				else if (DynaObj[i].ObjType=="BCHierPopup") CurrDiv.disabled=St;
				else if ((DynaObj[i].ObjType=="OLDHIER") || (DynaObj[i].ObjType=="BCHierVertObject") || (DynaObj[i].ObjType=="BCHierHoriObject")) CurrDiv.disabled=St;
				else if (DynaObj[i].ObjType=="RADIO") {
					if ((CurrDiv.hasChildNodes())  && (CurrDiv.childNodes[0].hasChildNodes()) && (CurrDiv.childNodes[0].childNodes[0].hasChildNodes()) ) {
						to=CurrDiv.childNodes[0]; //tbody
						for (k=0; k<to.childNodes.length; k++) { //tr
							for (l=0; l<to.childNodes[k].childNodes.length; l++) { //td
								for (j=0; j<to.childNodes[k].childNodes[l].childNodes.length; j++) { //nobr, input
									to2=to.childNodes[k].childNodes[l].childNodes[j];
									if (to2 && (to2.tagName=="NOBR")) to2=dynaFirstChild(to2);
									if (to2 && (to2.tagName=="INPUT")) to2.disabled=St;
								}
							}
						}
					}
				}
				else if (DynaObj[i].ObjType=="CHECKBOX") {
					to = dynaFirstChild(CurrDiv); //TBODY
					for (j=0; j<to.childNodes.length; j++) {
						for (k=0; k<to.childNodes[j].childNodes.length; k++) {
							if ( (to.childNodes[j].childNodes[k].childNodes[0]) && (to.childNodes[j].childNodes[k].childNodes[0].tagName=="INPUT")) to.childNodes[j].childNodes[k].childNodes[0].disabled=St;
						}
					}
				}
			}
		}
	}
	if (!State) dynaStillLoading=false;
	ChangeState(State);
}


//*******
function dynaReply(Type, Var, inNewWindow) {
	var myparamNr=0;
	dynaStillLoading=true;
	var Ptime = new Date();
	var myObj;
	var myOpt=null;
	var doIt=true,newWind=false;
	var url;
//status=Type;
debugMsg("dynaReply Type:"+Type+"");
	url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=Reply&PARAM3="+Type;
	if ((Type==2)||(Type==6)||(Type==14)) {
	    if (Var && Var[0]) {
	        url += "&PARAM4=" + Var[0];
	    }
	}
	if ((Type == 4) || (Type == 20)) {
	    for (var i = 0; i < Var.length; i++) {
			myparamNr=i+4;
			url+="&PARAM"+myparamNr+"=\""+Var[i]+"\"";
		}
	}
	if ((Type==5)||(Type==8)) {
		myObj=document.getElementById('dynaPopupParent');
		if (myObj) {
			dynaPopEvents(false);
			if (Var) {
//debugMsg("dynaReply Type:"+Type+" Var:"+Var[0]+" myObj:"+myObj.outerHTML);
				if (Type==8) {
					Var[0]=1;
					if (dynaFirstChild(myObj)) myOpt=dynaFirstChild(myObj).options;
					if (myOpt) {
						for (var j = 0; j < myOpt.length; j++) {
							if (myOpt[j].selected) {
								Var[0]=j+1;
								if (Type==8) {
									Var[0]='"'+myOpt[j].innerHTML+'"';
									newWind=true;
								}
								if (myOpt[j].lang=="CANCEL") Var[0]=0; 
								break;
							}
						}
					}
				}
				
				url+="&PARAM4="+Var[0];
			}
			else url+="&PARAM4=0";
			myObj.parentNode.removeChild(myObj);

//DT2559			
			dynaPopupObject = null;
		}
		else doIt=false;
		if (dynaLastObj && dynaLastObj.parentNode) {
			dynaSetCurrent(dynaLastObj);
			dynaFocus(dynaLastObj);
		}
	}
	if (Type == 21) { // GetKeychain
		url += "&PARAM4=" + dynaEscape(Var);
	}
	if (Type == 22) { // SetKey
		url += "&PARAM4=" + Var;
	}
	url+="&SPACE=\""+Ptime.getTime()+"\" ";

	if (inNewWindow) {
	    var fullUrl = dynaUrlHeader + url;
	    debugMsg("Window Url: " + fullUrl);
	    window.open(fullUrl,"");
	}
	else if (!newWind || (Type==8)) {
		dynaDeActivate(doIt);
		if (doIt)  {
debugMsg("dynaReply:"+url);
			dynaLoadUrl(url);
		}
	}
	dynaDialogType=0;
}

function arcShowLoginDialog() {
    dynaDeActivate(true);

    var obj1, inputObj, str, left, top, height = 118, width = 330;
    obj1 = document.getElementById("arcDialogObj");
    if (!obj1) {
        obj1 = document.createElement("DIV");
        obj1.id = "arcDialogObj";
        document.body.appendChild(obj1);
        obj1 = document.getElementById("arcDialogObj");
    }
    dynaSetWindowSize();
    top = Math.max(0, (dynasHeight - height) / 2);
    left = Math.max(0, (dynasWidth - width) / 2);

    str = "<div class='arcDialogTitle' style='top:" + top + "px; left:" + left + "px;" +
        "height:" + height + "px; width:" + width + "px; '>"+
        "<div class='arcDialogClose' >X </div>" +
        "</div>";
    obj1.innerHTML = str;
    dynaFirstChild(obj1).innerHTML = dynaCommunicationFrame.document.body.innerHTML;

    inputObj = document.getElementById("TA1"); //Pr�fen obs ein NT dialog mit Domaene ist
    if (inputObj && (inputObj.tagName == "INPUT")) {
        dynaFirstChild(obj1).style.height = "156px";
    }
    inputObj = document.getElementById("TA3"); //Pr�fen obs ein Dialog mit Language Feld ist
    if (inputObj && (inputObj.tagName == "INPUT")) {
        dynaFirstChild(obj1).style.height = "186px";
    }
    dynaInitLoginDialog(self);

    if (parent.documentLoaded && (typeof parent.documentLoaded === "function")) {
        //DT17044: Das Mobile Framework blendet sonst die Seite nicht ein
        parent.documentLoaded(); 
    }

    ChangeState(false);
}

function dynaCloseDialog() {
    var obj = document.getElementById("arcDialogObj");
    if (obj) {
        obj.innerHTML = "";
    }
    if (dynaDialogHwnd) dynaDialogHwnd.close();
    dynaDialogHwnd = null;
    dynaDeActivate(false);
}

function dynaInitLoginDialog(w) {
    with (w) {
        returnValue = true;
        cancel = true;
        myTA8 = "dynaCPWButton";
        myTA9 = "dynaEncButton";
        myTA20 = "passwords don't match";

        myTA0 = document.getElementById("TA0");
        myTA1 = document.getElementById("TA1");
        myTA2 = document.getElementById("TA2");
        myTA3 = document.getElementById("TA3");
        myTA4 = document.getElementById("TA4");
        myTA10 = document.getElementById("TA10");
        myTA11 = document.getElementById("TA11");
        myTA12 = document.getElementById("TA12");
        myTA30 = document.getElementById("TA30");

        if (myTA0) myTA0.tabIndex = 1;
        if (myTA1) myTA1.tabIndex = 1;
        if ((myTA2) && (myTA2.size > 1)) myTA2.tabIndex = 2;
        if ((myTA3) && (myTA3.size > 1)) myTA3.tabIndex = 2;
        if ((myTA4) && (myTA4.size > 1)) {
            dynaDialogheight = (dynaConv(dynaDialogheight) + 40) + "px";
            myTA4.tabIndex = 1;
        }

        if ((myTA30) && (myTA30.size > 1)) {
            if (localStorageSupported) {
                dynaDialogheight = (dynaConv(dynaDialogheight) + 40) + "px";
            }
            else {
                document.getElementById("TA30div").style.visibility = "hidden";
            }
        }

        cpwButton = document.getElementById("dynaO7");
        if (cpwButton) {
            if (dynaChangePassword) cpwButton.style.visibility = "visible";
            else {
                cpwButton.style.visibility = "hidden";

            }
        }
        for (var i = 0; i < document.getElementById('PARAM').options.length; i++) {
            if (document.getElementById('PARAM').options[i].id == 'DRIVER') driver = document.getElementById('PARAM').options[i].value;
            if (document.getElementById('PARAM').options[i].id == 'USERNAME') {
                if (myTA4) {
                    myStrA = document.getElementById('PARAM').options[i].value.split('\\');
                    if ((myStrA) && (myStrA.length > 1)) {
                        document.getElementById('PARAM').options[i].value = myStrA[1];
                        document.getElementById("TA4").value = myStrA[0];
                    }
                }
                document.getElementById("TA0").value = document.getElementById('PARAM').options[i].value;
            }
            if (document.getElementById('PARAM').options[i].id == 'CLIENT') document.getElementById("TA2").value = document.getElementById('PARAM').options[i].value;
            if (document.getElementById('PARAM').options[i].id == 'LANGUAGE') document.getElementById("TA3").value = document.getElementById('PARAM').options[i].value;
        }

        if (!((myTA4) && (myTA4.size > 1)) && (driver.length > 3) && (driver.substring(0, 3) == "SAP")) {
            dynaDialogheight = (dynaConv(dynaDialogheight) + 80) + "px";
        }

        if (document.getElementById("TA0")) {
            dynaFocus(document.getElementById("TA0"));
        }
    }
}
//*******
function dynainitdialog(w) {
	if (!w)  {
		if (arcScripting) alert("No Dialog Window");
		return;
	}

	var title=dynaCommunicationFrame.document.body.title;
	var driver="";
	var myStrA = new Array();
	w.document.body.innerHTML=dynaCommunicationFrame.document.body.innerHTML;
	w.document.body.id=dynaCommunicationFrame.document.body.id;
	w.dynaDialogheight = 120;

	dynaLoadUrl(null);

	if (w.document.body.id=="logindialog") {
	    w.document.body.style.backgroundColor = '#D3D3D3';
	    dynaInitLoginDialog(w);
	}
	else if ( w.document.body.id=="Dialog" ) {
		if ((title.length>3) && (title.substring ( 0, 3)=="SAP")) {
			w.document.body.style.backgroundColor='#D3D3D3';
			var list=w.document.getElementsByTagName("SELECT");
			var maxdisp=list.length;
			if (list.length>6) maxdisp=6;
			w.dynaDialogheight = (maxdisp * 30 + 40) + "px";
		}
	}
}

//*******
function dynaShowCPWdialog(logdoc) {
	var obj,obj1,i,str;
	if (logdoc) 	with (logdoc) {
		obj=getElementById("TA0");
		if (obj && obj.value && obj.value.length>0) {
			for (i=1; i<10; i++) {
				str="dynaO"+i;
				obj=getElementById(str);
				if (obj) obj.style.visibility="hidden";
				str="dynaO1"+i;
				obj=getElementById(str);
				if (obj) obj.style.visibility="visible";
			}
			obj=getElementById("TA1");
			obj1=getElementById("TA10");
			if (obj1) dynaFocus(obj1);
			if (obj && obj1 && obj.value) {
				obj1.value=obj.value;
				obj=getElementById("TA11");
				if (obj) dynaFocus(obj);
			}
		}
		else if (obj) {
			dynaFocus(obj);
		}
	}
}

//*******
function dynaopendialogfinish() {
debugMsg("dynaopendialogfinish");
	arcTop.dynaContact=false;
--dynaUrlNr;
	var params=new Array();
	params[0]=window.self;
	var myid=dynaCommunicationFrame.document.body.id;
	var title=dynaCommunicationFrame.document.body.title;
	var ok=false;
	var doit=false;
	var myElem,myNewElem,oldElem;
	var str,str1 = "";
	dynaDialogValue[0]="0";
	dynaDialogType=3;
	var left=0,top=0;
	if (m_PlatForm.browser!="ie") {
		left=innerWidth/2;
		top=innerHeight/2;
	}
	str="left="+left+",top="+top+",location=no,menubar=no,resizable=no,status=no,toolbar=no,scrollbars=no,directories=no";

	dynaSetpreviousContactTime();
	dynaStillLoading=false;
	dynaUnselect();
	ChangeState(false);

	if (myid=="Dialog") {
debugMsg(": "+title,true);
		if (title=="Message") {
			dynaDialogType=3;
			str1 = dynaHTMLtoStr(dynaCommunicationFrame.document.body.innerHTML);
			alert(str1);
		}
		else if (title=="Question") {
			dynaDialogType=2;
			str1 = dynaHTMLtoStr(dynaCommunicationFrame.document.body.innerHTML);
			ok=confirm(str1);
			if (ok) dynaDialogValue[0]="1";
			else dynaDialogValue[0]="0";
		}
		else if (title=="Textentry") {
			dynaDialogType=6;
			window.prompt(BBody.innerHTML,DialogValue[0]);
		}
		else if (title=="SAPVariable") {
			dynaDialogType=4;
			str+=",height=120,width=320";
			if (m_PlatForm.browser=="ie") doit=showModalDialog(arcBase+"dialog.htm",params,"dialogHeight: 120px;dialogWidth: 320px;help:no;resizable:no;status:no");
			else dynaDialogHwnd=open(arcBase+"dialog.htm","SAPVariable Dialog",str);
		}
		else if ((title=="Popupmenu")||(title=="UserPrinter")) {
			dynaDialogType=5;
			dynaDialogValue[0]=0;
			if (title=="UserPrinter") dynaDialogType=8;

			myElem=document.createElement("DIV");

			myElem.id='dynaPopupParent';
			myElem.style.position='absolute';
			myElem.style.zIndex=100000;
			oldElem = dynaCommunicationFrame.document.getElementById("dynaPopup");
			left = dynaConv(oldElem.style.left);
			top = dynaConv(oldElem.style.top);
			if ((left > 0) && (top > 0)) {
				debugMsg("popup x:"+left+"  y:"+top); //DT20914 Offset ist schon im HTML
				left = 0;
				top = 0;
			}
			else {
				debugMsg("popup x:"+dynaLastx+"  y:"+dynaLasty);
				top=dynaLasty-5;
				left=dynaLastx-5;
			}
			myElem.style.top = top+"px";
			myElem.style.left = left+"px";

			myElem.innerHTML=dynaCommunicationFrame.document.body.innerHTML;
//prompt("",myElem.outerHTML)			
			myNewElem=document.body.appendChild(myElem);
			dynaPopEvents(true);
			if (dynaFirstChild(myNewElem)) {
dynaPopupObject=dynaFirstChild(myNewElem);
				dynaLastObj=dynaCurrObj;
				dynaSetCurrent(null);
				dynaFocus(dynaFirstChild(myNewElem));
			}
		}
		else {
			str+=",height=120,width=200";
			if (m_PlatForm.browser=="ie") doit=showModalDialog(arcBase+"dialog.htm",params,"dialogHeight: 120px;dialogWidth: 200px;help:no;resizable:no;status:no");
			else dynaDialogHwnd=open(arcBase+"dialog.htm","Dialog",str);
		}
	}
	else {
debugMsg(": -7",true);
		dynaDialogType=-7;
		str+=",height=155,width=312";
        arcShowLoginDialog();

		if (dynaDialogHwnd) doit=true;
	}
	if (myid=="logindialog") {
debugMsg(": logindialog",true);
		if (doit) { dynaUserLogin('','','','','',true);}
	}
	else {
debugMsg(": "+dynaDialogType,true);
		if ((dynaDialogType!=5)&&(dynaDialogType!=8)) {
			if ((m_PlatForm.browser=="ie")||(dynaDialogType!=4)) {
				 dynaReply(dynaDialogType,dynaDialogValue);
			}
		}
	}
	if (!arcScripting) status=window.defaultStatus; 
}

function dynaUserLoginCancel() {
	if (dynaDialogType == -7) {
		dynaUserLogin('','','','','',true);
	}
	else {
		if (dynaDialogType!=5) dynaReply(dynaDialogType,dynaDialogValue);
    }
    dynaCloseDialog();
	dynaDialogType=0;
}
//*******
function dynaUserLogin(username,password,password1,client,language,domain,cancel,storecred) {
	var Ptime = new Date();
	var url;
	var Lclient="";
	var Llanguage="";
	var p,p1=null;
	var storecr=storecred? "1": "0";

	if (client) Lclient=client;
	if (language) Llanguage=language;

	if (cancel==false) {
		if (username==null) username="";
		username=dynaEscape(username);
		if (domain==null) domain="";
		if (domain.length>0) username=domain+'\\'+username;
		
		if (password!=null) {
		    password = arcEncode(password);
		    p=dynaEscape(password);
		}
		else p="";

		if (password1) {
		    password1 = arcEncode(password1);
		    p1=dynaEscape(password1);
		}
		
		if (p1) url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=UserLogin&PARAM3=\""+username+"\"&PARAM4=\""+p+"\"&PARAM5=\""+Lclient+"\""+"&PARAM6=\""+Llanguage+"\""+"&PARAM7=\""+p1+"\""+"&PARAM8="+storecr+" ";
		else url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=UserLogin&PARAM3=\""+username+"\"&PARAM4=\""+p+"\"&PARAM5=\""+Lclient+"\""+"&PARAM6=\""+Llanguage+"\""+"&PARAM7=\"\""+"&PARAM8="+storecr+" ";
		p="";
		p1=null;
	}
	else {
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=UserLogin&PARAM3=\"UserLoginCancel"+"\"&PARAM4=\"UserLoginCancel"+"\"&PARAM5=\"\""+"&PARAM6=\"\""+"&PARAM7=\"\""+"&PARAM8="+storecr+" ";
	}

	dynaDeActivate(true);
	dynaLoadUrl(url);

	dynaCloseDialog();

	if (username) username=null;
	if (client) client=null;
	if (language) language=null;
	if (password) password=null;
	dynaDialogType=0;
}

function dynaIsdynaImg(obj) {
    var parts;
	if (obj && obj.lang && 
        ((obj.lang.indexOf("dynaIMG") != -1) || (obj.lang.indexOf("OBJ") != -1))) {
        parts = obj.lang.split(':');
		if ((parts) && (parts.length > 1)) {
		    parts = obj.name.split("*");
            if ((parts) && (parts.length == 3)) {
		        return true;
            }
        }
	}
	return false;
}

function dynaGetHash(obj) {
	var hash = '';
	if (dynaIsdynaImg(obj)) {
		var strA = obj.lang.split(':');
		if ((strA) && (strA.length > 1)) {
			hash = strA[1];
		}
	}
	return hash;
}

function dynaCreateOldPictRequest(doc, objNr, zeile, spalte) {
    debugMsg("Warning dynaOldPictRequest: " + doc + " " + objNr);
	var url = dynaUrlHeader;
	url += "DYN=Presentation&PARAM1=" + dynaSessionID;
	url += "&PARAM2=GETOBJECTPICT&PARAM3=%22" + dynaEncDoc(doc) + "%22&PARAM4=" + objNr + "&PARAM5=" + zeile + "&PARAM6=" + spalte + "&PARAM7=007";
	return url;
}

function dynaOldPictRequest(obj) {
	if (obj && obj.name) {
debugMsg("dynaOldPictRequest: " + obj.name);
		var str = obj.name.split("*");
		if (str.length == 3) {
			var zeile = str[1];
			var spalte = str[2];
			var container = document.getElementById(str[0]);
			var objNr = dynaGetID(container);
			var url = dynaCreateOldPictRequest(null, objNr, zeile, spalte);
			var pos = obj.src.indexOf("&SPACE=");
			if (pos > 0) {
				var sUrl = obj.src.substring(0, pos);
				if (sUrl == url) {
					return; //Identische Url klappt auch nicht...
				}
			}
			//alert("reloading IMG SRC "+objNr)
			var Ptime = new Date();
			url += "&SPACE=\"" + Ptime.getTime() + "\" ";
			obj.src = url;
		}
	}
}

function dynaCreatePictRequest(hash) {
    var url, dispatcher = "", sId = 0;
    if (!dynaCookiesAllowed) {
        dispatcher = dynaFirstDispatcher;
        sId = dynaSessionID;
    }
    url = arcCGISite + "?ISINIT=%22" + dispatcher + "%22&";
    url += "DYN=Presentation&PARAM1=0&PARAM2=GETOBJECTPICTFROMCACHE";
    url += "&PARAM3=" + sId + "&PARAM4=%22" + hash;
	url += "%22&SPACE=%22" + dynaSpace.replace(/ /g, "%20") + "%22%20";
	arcSetCookie("arcSessionToken", dynaFirstDispatcher + "|" + dynaSessionID, null, '/', null);
	return url;
}

function dynaLoadThisImage(i_type, i_Obj) {
    var str, url, obj;

    str = i_Obj.name.split("*");
	if (str.length==3) {
	    str = dynaGetHash(i_Obj);
        if (str) {
            url = dynaCreatePictRequest(str);
			debugMsg("dynaLoadThisImage " + str);
			arcTop.dynaContact = true;
			i_Obj.src = url;
			if (i_type === "embeds") { //Hack to enforce a refesh
				i_Obj.type = "image/svg+xml";
				obj = i_Obj.parentNode;
				str = obj.innerHTML;
				obj.innerHTML = "";
				obj.innerHTML = str;
            }
            return true;
        }
    }
    return false;
}

function dynaLoadImages() {
    var srcList = { "images": document.images, "embeds": document.embeds },
        idx, iType, currList, currObj, str, url, doItAgain = false;

    if (!dynaSessionID) return;

    ++dynaImageUpdateNr;

    for (iType in srcList) {
        if (srcList.hasOwnProperty(iType)) {
            currList = srcList[iType];
            if (currList) {
                for (idx = 0; idx < currList.length; idx += 1) {
                    currObj = currList[idx];
                    if (currObj) {
                        if (currObj.name && (dynaIsdynaImg(currObj)
                            || (currObj.lang == "dynaSVG")))
			            {
                        	str = dynaGetHash(currObj);
                        	if (str) {
                        		url = dynaCreatePictRequest(str);
                        	}
				            if (!currObj.src || (currObj.src === "")
					            || (currObj.src !== url) || (currObj.src === "about:blank"))
				            {
					            if (dynaLoadThisImage(iType, currObj)) {
						            doItAgain = true;
					            }
				            }
                        }
                    }
                }
            }
        }
    }
    if (doItAgain) { //Loop nochmal durchlaufen f�r neue Pictures
        if (dynaImageUpdateNr < 2) {
            dynaLoadImages();
        }
        else {
            doItAgain = false;
            arcTop.dynaContact = false;
            debugMsg("Aborting dynaLoadImages");
        }
    }
    if (!doItAgain) {
        arcTop.dynaContact = false;
        //Images fertig abgearbeitet
        dynaLoadPatterns();
    }
}

function dynaGetPattern(obj) {
	var str = null;
	if (obj && obj.lang && (obj.style.backgroundImage == "")) {
		var parts = obj.lang.split("*");
		if ((parts.length > 1) && parts[1]) {
			str = parts[1];
			debugMsg("Pattern Hash: " + str);
		}
	}
	return str;
}

function dynaReLoadPattern(i_obj) {
	if (i_obj.alt) {
		var str = i_obj.alt.split("|");
		if (str.length >= 3) {
			debugMsg("dynaReLoadPattern [" + str[0] + ";" + str[1] + "]");
			var shortUrl = dynaCreateOldPictRequest(str[0], str[1], 0, 0);
			shortUrl += "&SPACE=\"                          \"";
			var url = "url('" + shortUrl + "')";
			var obj = document.getElementById(str[2]);
			if (obj) {
				obj.style.backgroundImage = url;
			}
		}
	}
}

function dynaSetPatternFromIMG(i_obj) {
    var str,
        refObj;
	if (i_obj && i_obj.alt) {
		str = i_obj.alt.split("|");
		if (str.length >= 4) {
			debugMsg("dynaSetPatternFromIMG [" +str[0] + ";" + str[1]+"] " + str[3]);
			refObj = document.getElementById(str[2]);
			if (refObj) {
				refObj.style.backgroundImage = "url('" + dynaCreatePictRequest(str[3]) + "')";
			}
		}
	}
}

//*******
function dynaLoadPatterns() {
	var Ptime = new Date();
	var MainDivObj,DivObj,str;
	var l=0,idNr;

	debugMsg("dynaLoadPatterns " + dynaWholeDoc + " " + dynabgImage);
	dynaUpdatePatterns=false;
	if ((dynaWholeDoc) &&(dynabgImage)) {
		if (dynaSessionID) {
			url = dynaCreatePictRequest(dynabgImage);
			document.body.background = url;
			dynabgImage = null;
		}
	}
	for (l=0; l<dynaMaxObjects; l++) {
		DivObj=DynaObj[l].Obj;
		if (DivObj) {
			idNr=DynaObj[l].OBJnr;
			dynaDoc=DynaObj[l].Doc;
			if (idNr != 0) {
				str = dynaGetPattern(DivObj);
				if (str && dynaSessionID) {
					var shortUrl = dynaCreatePictRequest(str);
                    if (m_PlatForm.type == E_MOBILE_HTMLCLIENT) {
                        //Der trick mit "new Image" funktioniert f�r patterns auf Mobile devices leider nicht
						//-> Der Cache wird nicht korrekt vom Browser genutzt
                        debugMsg("Background set " + DivObj.id +" > " + shortUrl);
                        DivObj.style.backgroundImage = "url('" + shortUrl + "')";
                    }
                    else {
					    var img = new Image();
					    img.alt = dynaDoc + "|" + idNr + "|" + DivObj.id + "|" + str;
					    img.onload = function () { dynaSetPatternFromIMG(this); };
					    img.onerror = function () { dynaReLoadPattern(this); };
					    arcSetCookie("arcSessionToken", dynaFirstDispatcher + "|" + dynaSessionID, null, '/', null);
					    img.src = shortUrl;
					    debugMsg("Image added " + DivObj.id +" > " + img.alt);
                        DynaObj[l].patternRef = img; //Verzweiflungs hack damit das img Objekt garantiert nicht out of scope geht
                    }
				}
			}
		}
	}
	dynaDeActivate(false);
	arcTop.dynaRequestInProgress=false;
	if (dynaPrintDoc.length>0) dynaStartPrint();
	if (dynaNextInputObject && dynaFirstChild(dynaNextInputObject)) {
		dynaGotoObject(dynaGetContent(document.getElementById(dynaNextInputObject.id)));
	}
	dynaNextInputObject = null;
	setTimeout("dynaOpenLinks();", 100);
	if (!arcScripting) status=window.defaultStatus;
}

//*******
function dynaSetNextInputObject(opt) {

	var i, row = 0,col = 0;
	var str = "";
	var obj = null;
	dynaNextInputObjectID = null;
	if (opt && opt.options) {
		opt=opt.options;
		for (i=0; i<opt.length; i++) {
			if (opt[i].value=="id") str=opt[i].innerHTML;
			if (opt[i].value=="row") row=opt[i].innerHTML;
			if (opt[i].value=="col") col=opt[i].innerHTML;
        }
        dynaNextInputObjectID = str;
		obj=document.getElementById(str);
		if (obj) {
		    if (dynaCurrObj) {
		        var obj1 = dynaGetMainParent(dynaCurrObj);
		        if (obj1 != obj) {
                    dynaUnselect();
                }
            }
		}
	}
    dynaLastRow = row;
    dynaLastCol = col;
    dynaNextInputObject = obj;
    return (dynaNextInputObject == null);
}
//*******
function dynaGetNextInputObject(obj) {
	if (!obj || !dynaWholeDoc) return null;
	var Dobj,NextObj=null,to,type,to1,xo=0,yo=0,i,Cok,Nok=true,CDist,NDist=0,useIt;
	obj=dynaGetMainParent(obj);
	Dobj=dynaGetDynaObj(obj);
	if (obj.style) {
		x=dynaConv(obj.style.left)+dynaConv(obj.style.width)/2;
		y=dynaConv(obj.style.top)+dynaConv(obj.style.height)/2;
	}
	for (i=0;i<dynaMaxObjects; i++) {
		to=DynaObj[i];
		type=DynaObj[i].ObjType;
		if (to&&(to.ID!=Dobj.ID)&&(type=="TABLE")) {
			Cok=false;
			to1=DynaObj[i].Obj;
			if (to1 && to1.style) {
				xo=dynaConv(to1.style.left)+dynaConv(to1.style.width)/2;
				yo=dynaConv(to1.style.top)+dynaConv(to1.style.height)/2;
				if (yo>y) Cok=true;
				CDist=Math.pow(xo-x,2)+Math.pow(yo-y,2);
				useIt=false;
				if (!NextObj)
					useIt=true;
				else if ((!Nok) && (Cok))
						useIt=true;
					else if ((!Nok) || (Cok)) {
							if (CDist<NDist) useIt=true;
						}
		
				if (useIt) {
					NextObj=to1;
					NDist=CDist;
					Nok=Cok;
				}
			}
		}
	}
	if (NextObj) {
		dynaNextInputObject=NextObj;
		dynaTextInput=null;
		debugMsg("NextObj"+dynaNextInputObject.id);
	}
}
//*******
function dynaSetLinkObjects(obj) {
	var i,ind=0;

	if (obj && (obj.tagName=="FORM") && obj.hasChildNodes()) {
		for (i=0; i<obj.childNodes.length; i++) {
			dynaLinkArray=new Array();
			if (obj.childNodes[i]) {
				dynaLinkArray[ind] = new dynaOpenLinkObject();
				dynaLinkArray[ind].type = obj.childNodes[i].lang;
				dynaLinkArray[ind].href = obj.childNodes[i].value;
				++ind;
			}
		}
	}
}

function dynaOpenLinkObject() {
	this.type=0;
	this.href="";
}

function dynaOpenLinks() {
	if (!dynaLinkArray) return;
	for (var i = 0; i < dynaLinkArray.length; i++) {
		debugMsg("dynaOpenLinks Index:" + i + " Type:" + dynaLinkArray[i].type + " Adress:" + dynaLinkArray[i].href);

		if ((m_PlatForm.browser != "ie") && (dynaLinkArray[i].href.indexOf("mailto:") == 0)) {
			if (!dynaLinkOpener) { //DT14700
				dynaLinkOpener = document.createElement("a");
				dynaLinkOpener.id = "dynaLinkOpener"
				dynaLinkOpener.style.visibility = "hidden";
			}
			dynaLinkOpener.href = dynaLinkArray[i].href;
			if (document.createEvent) {
				debugMsg("createEvent")
				var evObj = null;
				evObj = document.createEvent("MouseEvents");
				evObj.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				dynaLinkOpener.dispatchEvent(evObj);
			}
		}
		else {
			if (dynaLinkArray[i].type == "171") self.open(dynaLinkArray[i].href) //NEWWINDOW
			else if (dynaLinkArray[i].type == "172") self.location.href = dynaLinkArray[i].href; //THISWINDOW
		}
	}
	dynaLinkArray = null;
}

function dynaChangeOption(i_obj) {
  if (!dynaStillLoading)
	if (i_obj && i_obj.id) {
		dynaStillLoading=true;
		var Ptime = new Date();
		var	ObjNr;
		var OBJ;
		var valStr;
		var url;
		
		ObjNr=dynaGetID(i_obj);
		dynaDoc=dynaGetDoc(i_obj);
		if (!i_obj.value) debugMsg("ERROR OBJ" + ObjNr + " has no value");
		valStr = i_obj.value;
//debugMsg("["+dynaDoc+";"+ObjNr+"] = "+valStr);
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=1"+"&PARAM6="+valStr+"&SPACE="+Ptime.getTime()+" ";

		dynaDeActivate(true);
		dynaLoadUrl(url);
	}
	else debugMsg("ERROR: no i_obj or firstChild");
}

//*******
function dynaChangeRadio(OBJECT, target) {
    var ObjNr,
		OBJ,
		Ptime = new Date(),
		url, str, uni = "",
		unicode = false;

    if ((typeof OBJECT === "object") && (typeof target === "string")) {
        OBJ = OBJECT.parentNode;
        for (idx = 0; idx < OBJ.childNodes.length; idx++) {
            if (OBJ.childNodes[idx] && (OBJ.childNodes[idx].id === target)) {
                OBJ.childNodes[idx].checked = true;
                dynaChangeRadio(OBJ.childNodes[idx]);
                OBJECT = null;
                break;
            }
        }
    }
    if (dynaStillLoading) {
        if (document.event) {
            document.event.cancelBubble = true;
        }
	}
	else if (OBJECT && OBJECT.value) {
debugMsg("dynaChangeRadio "+OBJECT);
		dynaStillLoading=true;


		str=escape(OBJECT.value);
		if (dynaDoUnicode(str)) {
			unicode=true;
			uni="u";
		}

		if (unicode) value=dynaEscape(OBJECT.value,unicode);
		else value=OBJECT.value;
		if (!value) debugMsg("ERROR OBJECT has no value");
		OBJ=dynaGetMainParent(OBJECT);
		ObjNr=dynaGetID(OBJ);
		dynaDoc=dynaGetDoc(OBJ);
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=1"+"&PARAM6"+uni+"=\""+value+"\""+"&SPACE="+Ptime.getTime()+" ";
		dynaDeActivate(true);
		dynaLoadUrl(url);
	}
	else debugMsg("ERROR: no OBJECT or value");
}

function dynaBlur(obj) {
    dynaDoKeypress = false;
	var	ObjNr,obj1,str="", str1;
	var Ptime = new Date();
	var url,uni="";
	var unicode=false;
	
	obj=dynaGetMainParent(obj);
	if (!obj) return;
	if (obj==dynaTextInput) {
//debugMsg("dynaBlur "+obj+"  "+dynaTextInput)
		dynaTextInput=null;
		ObjNr=dynaGetID(obj);
		obj1=dynaGetContent(obj);
		if (obj1) {
			str1 = obj1.value.replace(/"/g,"'"); //DT21709
			str=escape(str1);
			if (dynaDoUnicode(str)) {
				unicode=true;
				uni="u";
			}

			if (unicode) {
				str=dynaEscape(str1, unicode);
			}
			else {
				str=str1;
			}
debugMsg("dynaBlur "+str1+" "+unicode+"  "+str);
			if (m_PlatForm.browser=="ie") obj1.style.overflow="hidden";
			url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=5"+"&PARAM6"+uni+"=\""+str+"\""+"&PARAM7=0"+"&PARAM8=0"+"&PARAM9=0"+"&SPACE="+Ptime.getTime()+" ";
			dynaDeActivate(true);
			dynaLoadUrl(url);
		}
	}
	else {
debugMsg("dynaBlur no dynaTextInput");
	}

}

//*******
function dynaObjectClick(OBJECT,Type,e) {
	var ObjNr,obj1,dOBJ,pos,y,srcObj;
	var str, param6="\"null\"";
	var isButton=false;
	var url;
	if (m_PlatForm.browser=="ie") {
		ev=event;
		if (ev) srcObj=ev.srcElement;
	}
	else {
		if (m_PlatForm.browser == "sf") {
			ev = event;
		}
		else {
			ev = e;
		}
		if (!ev) ev = e;
		if (ev) srcObj=ev.target;
		if (ev && (ev.target.tagName=="INPUT") &&(ev.target.id=="dynaText")) return;
	}
//debugMsg("dynaObjectClick "+Type+"  "+srcObj.tagName+"  "+OBJECT.tagName)
	if ((OBJECT.tagName!="DIV") && (OBJECT.tagName!="SPAN")) obj1=dynaGetMainParent(OBJECT);
	else obj1=dynaGetMainParent(OBJECT.firstChild);
	dOBJ=dynaGetDynaObj(obj1);
	if (dynaStillLoading) {
debugMsg("dynaObjectClick still loading! "+OBJECT.tagName );	
		dynaNextInputObject = obj1;
		if (ev) ev.cancelBubble=true;
	}
	else {
	    if (ev) {
	       ev.cancelBubble = true;
	    }
debugMsg("dynaObjectClick " + OBJECT + " Type " + Type + " Event: " + ev);
		if (dOBJ && (dOBJ.state==1)) {
			ev.cancelBubble=true;
			return;
		}
		if (OBJECT.tagName=="BUTTON" && OBJECT.lang!="BCPopup" && OBJECT.lang != "BCHierPopup") {
			isButton=true;
			if (Type==2) param6="\"\"";
			else {
				param6=0;
				if (OBJECT && (OBJECT.lang=="x1")) param6=1;
			}
			OBJECT=dynaGetMainParent(OBJECT);
		}
		else if ((OBJECT.tagName=="TEXTAREA") || (OBJECT.tagName == "INPUT")) {
			debugMsg("dynaTextInput "+dynaTextInput);
			if (m_PlatForm.browser=="ie") OBJECT.style.overflow = "auto";
			OBJECT=dynaGetMainParent(OBJECT);
			dynaTextInput=OBJECT;
			if (ev) ev.cancelBubble=true;
			return;
		}
        else if ((OBJECT.tagName !="SELECT") || (m_PlatForm.os != "iOS")) {
			debugMsg("dynaObjectClick " + OBJECT.tagName + " " + OBJECT.id);
		}
        else {
            debugMsg("dynaObjectClick canceled" + srcObj);
            return;
        }
		if (OBJECT.id) {
            //DT2559
            if (dynaPopupObject) {
                dOBJ = dynaGetMainParent(dynaPopupObject);
                if (dOBJ && (dOBJ.id=="dynaPopupParent")) {
                    debugMsg("dynaPopupObject still open! Event cancelled for "+OBJECT.id);
	                return;
               } 
            }
	        if (ev) {
	        	var sElem = dynagetEventSource(ev);
	        	if (m_PlatForm.browser == "ie") {
					if (ev.srcElement && (ev.srcElement.tagName=="INPUT")) return;
					dynaLastx=ev.clientX;
					dynaLasty=ev.clientY;
				}
				else {
					dynaLastx=ev.pageX;
					dynaLasty=ev.pageY;
				}
				if (isSvgElement(sElem)) {
					dynaLasty += dynaConv(obj1.style.top);
					dynaLastx += dynaConv(obj1.style.left);
				}
			}

			dynaStillLoading=true;

			var pos=new Array(3);
			if (isButton) {
				pos[0]=0;
				pos[1]=0;
			}
			else dynaGetPoint(OBJECT,pos, ev);
			if (dOBJ && dOBJ.ObjType == "CHART") {
				debugMsg("dynaObjectClick " + dOBJ.ObjType + " " +pos[0] + " " +pos[1]);
			}
			var Ptime = new Date();
			ObjNr=dynaGetID(OBJECT);
			dynaDoc=dynaGetDoc(OBJECT);
			if ((Type==2) || (Type==1)) {
				url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5="+Type+"&PARAM6="+param6+"&PARAM7="+pos[0]+"&PARAM8="+pos[1]+"&SPACE="+Ptime.getTime()+" ";
				dynaDeActivate(true);
				dynaLoadUrl(url);
			}
			if ((Type==0) && (pos[2])) {
				ev.cancelBubble=true;
				str=pos[2].innerHTML;
				fontstr=dynaGetFont(pos[2]);
				pos[2].innerHTML="<INPUT TYPE=TEXT ROWS=1 onblur='dynaRemoveInputFocus(this)' STYLE='border:none;"+fontstr+"'>"+str+"</INPUT>";
				dynaStillLoading=false;
			}

		}
		else  if (Type==6) {
			OBJECT=OBJECT.parentNode;
			for (var i=0; i<OBJECT.childNodes.length; i++) {
				obj1=OBJECT.childNodes[i];
				if (obj1 && ((obj1.tagName=="DIV")))  {
					if (ev) ev.cancelBubble=true;
					pos=new Array;
					pos[0]=5;
					pos[1]=10;
					dynaGetPoint(obj1,pos,e);
					dynaLastx=pos[1]+10;
					dynaLasty=pos[0]+10;
					obj1 = dynaGetMainParent(obj1);
					if (dynaPopupObject && (dynaPopupObject != obj1)) { //DT25912 altes Popup entfernen
						dynaPopupstate(dynaPopupObject,"hidden",true,true);
					}
					dynaPopupObject = obj1;
					dynaPopupstate(dynaPopupObject,"visible",true,true);
				}
			}
		}
		else debugMsg("ERROR: no OBJECT or ID");
	}
}

//*******
function dynaGetPoint(Obj,pos,e) {
	var ev=null;
	var obj1,obj2;
	if (m_PlatForm.browser!="ff") ev=event;
	if (!ev) ev = e;
	if (ev) {
		var x=-1;
		var y=-1;
		var sElem = null;
		var myElem = null;
		var lastElem = null;
		if (m_PlatForm.browser=="ie") sElem = document.elementFromPoint(ev.clientX, ev.clientY);
		else if (ev.target) {
			if (ev.type != "blur") {
				sElem = ev.target;
				if (sElem.nodeType == Node.TEXT_NODE) sElem = sElem.parentNode;
			}
		}
		pos[2]=sElem;
		if (sElem) {
		    if (sElem.tagName == "NOBR") {
		        if (sElem.parentNode) {
		            sElem = sElem.parentNode;
		        }
		        else {
		            debugMsg("Warning no parentNode for NOBR");
		        }
			}
			if (sElem.tagName=="IMG") {
				obj1=dynaGetMainParent(sElem);
				obj2=dynaGetDynaObj(obj1);
				if (obj2 && (obj2.ObjType!="CHART")) {
					sElem=sElem.parentNode;
				}
			}
			if ((sElem.tagName == "IMG") || isSvgElement(sElem) || (sElem.tagName == "SELECT")) {
				if ((m_PlatForm.browser == "ie") || (m_PlatForm.browser == "op")) {
					pos[0]=ev.offsetY;
					pos[1]=ev.offsetX;
				}
				else {
					pos[0]=ev.layerY;
					pos[1]=ev.layerX;
				}
			}
			else {
				myElem=sElem;
				lastElem=myElem;
				while ((myElem!=null) && (myElem.tagName=="TD")) {
					x=x+1;
					lastElem=myElem;
					myElem=myElem.previousSibling;
				}
				lastElem=lastElem.parentNode;
				while ( (lastElem!=null) && (lastElem.tagName=="TR")) {
					y++;
					lastElem=lastElem.previousSibling;
				}
				pos[0]=y;
				pos[1]=x;
			}
		}
	}
}

//*******
function dynaMouseEvent(obj,Type) {
	var Ptime = new Date();
	var url,myobj = null;
	if ((!dynaStillLoading)) {

debugMsg("dynaMouseEvent "+obj+"  Type: "+Type);
        //Korrektur f�r falsche events
		if (Type==8) myobj=event.toElement;	
		if (Type==7) myobj=event.fromElement;
		if (myobj==obj) return;
		while (myobj && myobj.parentNode &&(myobj.parentNode!=obj)) myobj=myobj.parentNode;
		if (!myobj || (myobj.parentNode==obj)) return;

		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+dynaGetID(obj)+"&PARAM5="+Type+"&PARAM6=\"0\""+"&PARAM7=\"0\"+&SPACE="+Ptime.getTime()+" ";
		if (m_PlatForm.browser=="ie") {
			dynaDeActivate(true);
			dynaLoadUrl(url);
		}
	}
}

//*******
function dynaSwitch(obj) {
	if (obj && obj.style)
		if (obj.style.borderStyle=='inset') obj.style.borderStyle='outset';
		else obj.style.borderStyle='inset';
}


//*******
function dynaChangeCheckbox(OBJECT) {
debugMsg("dynaChangeCheckbox");
	if (dynaStillLoading) {
		if (m_PlatForm.browser=="ie")  self.event.cancelBubble=true;
	}
	else if (OBJECT && (OBJECT.tagName === "INPUT")) {
		dynaStillLoading=true;
		var Ptime = new Date();
		var col,row,ObjNr;
		var OBJ;
		var url;
		if (OBJECT.checked) checked="1";
		else checked="0";
		col=dynaCellIndex(OBJECT.parentNode);
		row=dynaRowIndex(OBJECT.parentNode);
		OBJ=dynaGetMainParent(OBJECT);
		ObjNr=dynaGetID(OBJ);
		dynaDoc=dynaGetDoc(OBJ);
		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=5"+"&PARAM6=\""+checked+"\""+"&PARAM7="+row+"&PARAM8="+col+"&SPACE="+Ptime.getTime()+" ";

		dynaDeActivate(true);
		dynaLoadUrl(url);
	}
	else debugMsg("ERROR: no OBJECT");
}


//*******
function dynaConv(Value) {
    var Val = Value + "";
    var rVal;
    var pos;
    if (Val == "") return 0;
    pos = Val.indexOf('px');
    if (pos <= 0) pos = Val.indexOf('pt');
    if (pos >= 0) {
        rVal = Val.substring(0, pos);
    }
    else {
        rVal=Val;
    }
    if (rVal != "") return Math.round(parseFloat(rVal));
    else return Math.round(parseFloat(rVal));
}

//*******
function dynaUnselect(current, i_removeCurrentObj) {
    debugMsg("dynaUnselect " + current);
    if (!current) current = dynaCurrObj;
	if (!current) return;
	
	current.style.color=dynaOldtxtColor;
	current.style.backgroundColor=dynaOldbgColor;
	if (m_PlatForm.browser=="ie") {
		current.detachEvent("onblur",dynaTOUT);
		current.detachEvent("onkeydown",dynaKCheck);
	}
	else {
		current.removeEventListener("blur",dynaTOUT,true);
	}
	dynaLastObj=current;
    if (i_removeCurrentObj === true) {
        dynaCurrObj = null;
    }
}

//*******
function dynaSelect(onlydiff) {
//debugMsg("dynaSelect: "+dynaLastRow+">"+dynaNextRow+" & "+dynaLastCol+">"+dynaNextCol)
	var obj,Dobj;
	if (dynaTextInput) {
		if (onlydiff &&(dynaLastRow==dynaNextRow) && (dynaLastCol==dynaNextCol)) return;
		id=dynaTextInput.id;
		Dobj=dynaGetObjectById(id);
		if (!Dobj) return;
		obj=Dobj.ObjC;
		if (obj) {
			if (obj.tagName=="TABLE") {
				obj=dynaGetCell(obj,dynaNextRow,dynaNextCol);
				if (obj) dynaTIN(obj);
			}
		}
		dynaTextInput=null;

	}
}

// Schneidet f�r die Eingabe vorne und hinten die Blanks ab
// Und ersetzt im Rest das &nbsp; gegen ein Leerzeichen
function dynaConvertHTMLPrePostfixBlanks(i_str) {

    var str;
    str = i_str.replace(/&nbsp;/g, ""); //echte &nbsp; entfernen (Franzoesich)
    return str;
}

//*******
function dynaTIN(obj,state, ffev) {
debugMsg("dynaTIN "+obj+"  "+state+" r:"+dynaLastRow+"  c:"+dynaLastCol+"  "+dynaStillLoading);
	var obj1,str,str1,h,w,mpobj,fontstr,hidden=null;
	var ok;

	if (dynaStillLoading) return;
	if (m_PlatForm.browser!="ie") {
	    if (m_PlatForm.browser == "ff") {
			dynaevObj.init(ffev);
		}
		else {
			dynaevObj.init(event);

        }
        if (!obj || (dynaevObj.srcElement && (dynaevObj.srcElement.tagName != "INPUT")
                    && (dynaevObj.srcElement.tagName != "BODY"))) 
        {
            obj = dynaevObj.srcElement;
        }
    }
	else {
		if ((obj)&& (obj.type) && (obj.srcElement)) obj=obj.srcElement;
		if (!obj) obj=event.srcElement;
	}
	if (!obj) return;
	if (obj.tagName == "TABLE") {
	    obj = dynaGetCell(obj, dynaLastRow, dynaLastCol);
	}
	else if (obj.nodeType == Node.TEXT_NODE) {
	    obj = obj.parentNode;
	}
    if (obj && (obj.tagName == "NOBR")) {
        obj = obj.parentNode;
    }
	if (obj && (obj.tagName=="INPUT")) {
//debugMsg(obj.tagName+" return!")
		return;
	}
    else if (obj && (obj.tagName == "TD")) {
	    dynaLastCol = dynaCellIndex(obj);
	    dynaLastRow = dynaRowIndex(obj);
	}

	obj1=dynaGetContent(dynaGetMainParent(obj));
	if (obj1) {
		str=dynaGetAttribute(obj1,"onclick");
		if (str=="dynaTIN(null,2,event)") state=2;
		else if (str=="dynaTIN(null,-2,event)") state=-2;
		else if (str=="dynaTIN(null,1,event)") state=1;
		else if (str=="dynaTIN(null,-1,event)") state=-1;
		else if (str=="dynaTIN(null,-10,event)") state=-10;
	}
	if (obj && obj.tagName=="INPUT" && obj.type=="PASSWORD") {
		hidden=obj;
		obj=obj.parentNode;
	}
	
	if (obj && (obj.tagName=="TD")) {
	 if ((obj!=dynaCurrObj)||(state!=-10)) {
		if (obj==dynaCurrObj) {
	        h = obj.offsetHeight - 2;
	        w = obj.offsetWidth - 2;
	        obj.style.padding = 0;
	        obj.style.margin = 0;

	        for (var idx=0; idx <obj.childNodes.length; ++idx) {
                if (obj.childNodes[idx].className == "dynaPass") {
                    hidden = obj.childNodes[idx];
                }
                if (obj.childNodes[idx].nodeType == Node.TEXT_NODE) mpobj = obj.childNodes[idx];
            }
            if (hidden && mpobj) {
                obj.removeChild(mpobj);
            }
			dynaUnselect();
			dynaLastObj=obj;
			if (!hidden && (obj.firstChild)
                && ((obj.tagName != "TD") && (obj.firstChild.nodeType != Node.TEXT_NODE)))
            {
			    debugMsg("dynaTIN invalid Cell " + obj.tagName);
			    return;
			}
			if (hidden) str = hidden.value;
			else {
			    str = obj.innerHTML;
			    str = str.replace(/^<NOBR>/i, "");
			    str = str.replace(/<\/NOBR>$/i, "");
			}
			fontstr=dynaGetFont(obj1);
			var fsize = dynaConv(obj1.style.fontSize);
			if (fsize > 0) {
			    fontstr+=" font-size:"+fsize+"pt;";
			}

			str1="";
			str1="onblur='dynaTOUT(this)' onkeydown='dynaKCheck()'";
			if (state && ((state==1)||(state==-1))) {
			    if (hidden) {
			        hidden.style.visibility = 'visible';
			        hidden.style.position = 'relative';
			        str = hidden.value;
			        hidden.id = 'dynaText';
			    }
			    else {
			        fontstr += " height:" + h + "px;line-height:" + h + "px;width:" + w + "px;"; 
			        obj.innerHTML = "<INPUT onkeypress=dynaSetBBcursor(this) STYLE='overflow:visible; border:medium none; text-align:left;" + fontstr + "' " + str1 + "  ID=dynaText TYPE=PASSWORD lang='" + state + "' VALUE=''>" + "</INPUT>";
			        dynaFirstChild(obj).value = "";
			    }
			}
			else {
				str = dynaConvertHTMLPrePostfixBlanks(str);
			    fontstr += " width:" + w + "px;height:" + h + "px;line-height:"+ h +"px;";
			    obj.innerHTML = "<INPUT onkeypress=dynaSetBBcursor(this) STYLE='" + fontstr + "' " + str1 + " ID=dynaText TYPE=TEXT lang='" + state + "' ROWS=1 WRAP=off>" + "</INPUT>";
				dynaFirstChild(obj).value=str;
			}
            str = "";
            obj1 = dynaFirstChild(obj);
			obj=dynaGetMainParent(obj);
			dynaTextInput=obj;
			dynaFocus(obj1);
			dynaFocus(obj1);
			if (obj && (obj.lang) && (obj.lang.length>2)) {
				var str0,str2;
				var Ptime = new Date();
				var url;
				str0=obj.lang.split("*");
				str2=str0[0].split(":");
				if ((str2.length>2)&&(str2[2]=='14')) {
					dynaGetCuR(dynaLastObj);
					url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+dynaGetID(obj)+"&PARAM5=14"+"&PARAM6=\"\""+"&PARAM7="+dynaLastRow+"&PARAM8="+dynaLastCol+"&SPACE="+Ptime.getTime()+" ";
					dynaLoadUrl(url);
				}
			}
		}
		else {
		    if (m_PlatForm.browser != "ie") {
		        dynaTOUT(dynaLastObj);
		    }		
			dynaLastObj=dynaCurrObj;
			dynaSetCurrent(obj);

			if (!dynaCurrObj.style) {
				dynaCurrObj.setAttribute("STYLE","background-color:transparent;",0);
			}
			if (dynaCurrObj.style.backgroundColor) dynaOldbgColor=dynaCurrObj.style.backgroundColor;
			else dynaOldbgColor="";
			if (dynaCurrObj.style.color) dynaOldtxtColor=dynaCurrObj.style.color;
			else dynaOldtxtColor="";
			if (dynaInputHighlightForeColor) {
			    dynaCurrObj.style.color = dynaInputHighlightForeColor;
			}
			if (dynaInputHighlightBackColor) {
			    dynaCurrObj.style.backgroundColor = dynaInputHighlightBackColor;
			}
			if (m_PlatForm.browser=="ie") {
				dynaCurrObj.detachEvent("onblur",dynaTOUT);
				dynaCurrObj.detachEvent("onkeydown",dynaKCheck);
				ok=dynaCurrObj.attachEvent("onblur",dynaTOUT);
				ok=dynaCurrObj.attachEvent("onkeydown",dynaKCheck);
			}
			else {
				dynaCurrObj.removeEventListener("blur",dynaTOUT,true);
			}
			dynaFocus(dynaCurrObj);
			
		}
	 }
	 else if (dynaLastObj && (dynaLastObj != dynaCurrObj)) {
	     dynaUnselect(dynaLastObj);
	 }
   }
}

//*******
function dynaGetFont(obj) {
	var OBJ=obj;
	var str=null;
	while (OBJ && !str) {
		if (OBJ.style && OBJ.style.fontFamily) str=OBJ.style.fontFamily;
		OBJ=OBJ.parentNode;
	}
	if (str) return " font-family:"+str+";"; 
	else return "";
}

//*******
function dynaTOUT(obj) {
    debugMsg("dynaTOUT " + obj + " " + dynaCurrObj);
    var current = dynaCurrObj;
    dynaSetCurrent(null);
	var str,str0,str1,str2,i,delay=false;
	var sobj,myobj,obj;
	var count;
	var ObjNr;
	var Ptime = new Date();
	var unicode=false;
	var url, uni="";

//var bb=false;
//if (dynaLastObj==dynaCurrObj) bb=true;
//debugMsg("dynaTOUT: "+dynaTextInput+"  "+dynaCurrObj+"  "+dynaLastObj+"  "+bb)
//		if (dynaTextInput && (!dynaCurrObj || (dynaLastObj!=dynaCurrObj))) dynaTextInput=null;
	if (current && (dynaLastObj==current)) {
		if (m_PlatForm.browser=="ie") {
			current.detachEvent("onblur",dynaTOUT);
			current.detachEvent("onkeydown",dynaKCheck);
			if ((obj)&& (obj.type) && (obj.type=="blur")) obj=obj.srcElemen;
		}
		else {
			current.removeEventListener("blur",dynaTOUT,true);
			if (current.onblur) current.onblur="undefined";
			myobj=dynaFirstChild(current);
			if (myobj) {
				myobj.removeEventListener("blur",dynaTOUT,true);
			}
		}
        obj1 = obj;
        if (obj && (obj.tagName == "TD")) obj1 = dynaFirstChild(obj);
		dynaStillLoading=true;

		if (obj1) {
		    str0 = "";
		    str = "";
		    if (obj1.value) { //DT15744 Leere Zelle
		        str0 = obj1.value;
		        str = escape(obj1.value);
		    }
			if (dynaDoUnicode(str)) {
				unicode=true;
				uni="u";
			}
			if (unicode) str=dynaEscape(str0, unicode);
		}
		else {
			str="null";
		}
		if (str) str='\"'+str+'\"';
		else str='\"\"';
//DTV2808 sonst klappen leere Eingaben nicht

debugMsg(" Input Value: "+str);
		sobj=dynaGetCuR(obj);
		if (!sobj) return
		ObjNr=dynaGetID(sobj);
		if (ObjNr==0) return;

		dynaDoc=dynaGetDoc(sobj);
		if (obj1 && ((obj1.tagName=="TEXTAREA")||(obj1.tagName=="INPUT")))myobj=obj1.parentNode;
		else myobj=obj;

		url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=5"+"&PARAM6"+uni+"="+str+"&PARAM7="+dynaLastRow+"&PARAM8="+dynaLastCol+"&PARAM9="+dynaLastKey+"&SPACE="+Ptime.getTime()+" ";
		str1="";
		if (obj1 && (obj1.tagName=="INPUT") && ((obj1.type=="PASSWORD") || (obj1.type=="password"))) {
			for (i=0; i<str0.length; i++) str1+="*";
		}
		else if (str0) {
		    str1=str0;
        }
		if (str1 || str1=="") {
		    myobj.innerHTML=str1;
		}
		else {
		    dynaUnselect(current);
		}
		if (!delay) {
			dynaDeActivate(true);
		}
		dynaLoadUrl(url,delay);
	}
	else {
//if (dynaLastObj && dynaCurrObj) debugMsg(dynaLastObj.tagName+"  "+dynaCurrObj.tagName,true)
	    dynaUnselect(current);
        dynaSetCurrent(null);

	}

}

//*******
function dynaKCheck(e) {
	var ev=null,sobj,pobj,mpobj,str,Input=false;
	var count;
	if (dynaStillLoading) return;
	if (m_PlatForm.browser=="ie") {
		ev=event;
		obj=ev.srcElement;
	}
	else {
	    ev = e;
	    if (m_PlatForm.browser != "ff") {
	        if (event) ev = event;
	    }
	    if (ev) {
	        obj = ev.srcElement;
	        if (!obj) obj = ev.target;
	    }
	}
	if (!ev || !obj) return;

debugMsg("dynaKCheck: "+ev.keyCode);

	dynaLastKey=ev.keyCode;
	if ((obj.tagName=="TEXTAREA")||(obj.tagName=="INPUT")) Input=true;
	else if (((obj.tagName == "BODY") || (obj.tagName == "HTML")) && dynaCurrObj) {
	    obj = dynaCurrObj;
	}

	if (Input) sobj=obj.parentNode;
	else sobj=obj;
	if (!sobj) return;
	count=dynaCellIndex(sobj);
	pobj=sobj.parentNode;
	if (!pobj) return;
	dynaLastCol=dynaCellIndex(sobj);
	dynaLastRow=dynaRowIndex(pobj);
	dynaNextCol=dynaLastCol;
	dynaNextRow=dynaLastRow;
	if (Input) dynaSetCurrent(obj.parentNode);
	else dynaSetCurrent(obj);
	if (ev.keyCode == Key.Enter) {
		dynaLastKey = Key.Linefeed;
		dynaTextInput=dynaGetCuR(obj);
		dynaNextCol=dynaLastCol;
		dynaNextRow=dynaLastRow+1;
debugMsg("Enter:"+dynaNextRow+" "+dynaNextCol+"  "+pobj.nextSibling);
		if (pobj.nextSibling) {
			pobj=pobj.nextSibling;
			if (pobj.childNodes[count]) {
			    if (Input) dynaSetCurrent(obj.parentNode);
			    else dynaSetCurrent(obj);
			}
		}
		else {
			dynaGetNextInputObject(pobj);
        }
		dynaLastObj=dynaCurrObj;
	}
	else if (ev.keyCode == Key.Tab) {
		dynaTextInput=dynaGetCuR(obj);
		if (sobj.nextSibling) {
			dynaNextCol=dynaLastCol+1;
			dynaNextRow=dynaLastRow;
		}
		else {
			if (pobj.nextSibling) {
				dynaNextCol=0;
				dynaNextRow=dynaLastRow+1;
			}
			else {
				dynaNextCol=0;
				dynaNextRow=0;
			}
		}
	}
	else if (ev.keyCode == Key.Leftarrow) {
		if (!Input) {
			dynaTextInput=dynaGetCuR(obj);
			dynaNextCol=dynaLastCol-1;
			dynaNextRow=dynaLastRow;
		}
	}
    else if ((ev.keyCode == Key.Uparrow) || (ev.keyCode == Key.Pageup)) {
		if (!Input) {
			dynaTextInput=dynaGetCuR(obj);
			dynaNextCol=dynaLastCol;
			dynaNextRow=dynaLastRow-1;
		}
	}
	else if (ev.keyCode == Key.Rightarrow) {
		if (!Input) {
			dynaTextInput=dynaGetCuR(obj);
			dynaNextCol=dynaLastCol+1;
			dynaNextRow=dynaLastRow;
		}
	}
    else if ((ev.keyCode == Key.Downarrow) || (ev.keyCode == Key.Pagedown)) {
		if (!Input) {
			dynaTextInput=dynaGetCuR(obj);
			dynaNextCol=dynaLastCol;
			dynaNextRow=dynaLastRow+1;
		}
	}
	else {

	    if (!Input) {
	        switch (ev.keyCode) {
	            case Key.Shift:
	            case Key.Ctrl:
	            case Key.Alt:
	            case Key.Pause: case Key.Capslock:
	            case Key.End: case Key.Home:
                case Key.Insert: case Key.Delete:
	            case Key.Windowsleft: case Key.Windowsright:
	            case Key.Select:
	            case Key.F1: case Key.F2: case Key.F3: case Key.F4: case Key.F5: case Key.F6:
                case Key.F7: case Key.F8: case Key.F9: case Key.F10: case Key.F11: case Key.F12:
                case Key.Numlock:
                case Key.Scrolllock:
                case Key.XF86Eject: case Key.XF86AudioLowerVolume: case Key.XF86AudioHigherVolume:
	                //Bei Spezial Keys keine Eingabe
                    break;
                case Key.Esc: //Escape
                    dynaTOUT(obj);
                    break;
	            default:
	                mpobj = dynaGetMainParent(obj);
	                mpobj = dynaGetContent(mpobj);
	                if (mpobj) str = dynaGetAttribute(mpobj, "onclick");
	                if (str != "dynaTIN(null,-10,event)") obj.innerHTML = "";
	                if (str == "dynaTIN(null,2,event)") dynaTIN(obj, 2, e);
	                else if (str == "dynaTIN(null,-2,event)") dynaTIN(obj, -2, e);
	                else if (str == "dynaTIN(null,1,event)") dynaTIN(obj, 1, e);
	                else if (str == "dynaTIN(null,-1,event)") dynaTIN(obj, -1, e);
	                else if (str == "dynaTIN(null,-10,event)") dynaTIN(obj, -10, e);
	                else dynaTIN(obj, 0, e);
	                break;
	        }
		}
	}
	if ((dynaNextCol!=dynaLastCol)||(dynaNextRow!=dynaLastRow)) {
		if ((pobj.parentNode) && (pobj.parentNode.parentNode)) {
			tobj=pobj.parentNode.parentNode;
			if (tobj.tagName=="TABLE") {
				if (dynaNextRow>=tobj.rows.length) {
					dynaNextRow=0;
					dynaNextCol=dynaLastCol+1;
					if (dynaNextCol>=pobj.cells.length) {
						dynaNextCol=0;
					}
				}
				else if (dynaNextCol>=pobj.cells.length) {
					dynaNextCol=0;
				}
				if (dynaNextRow<0) {
					dynaNextRow=tobj.rows.length-1;
					if (dynaNextCol<0) {
						dynaNextCol=pobj.cells.length-1;
					}
				}
				else if (dynaNextCol<0) {
					dynaNextCol=pobj.cells.length-1;
				}
				
			}
            if ((tobj.tagName == "TABLE") && 
                (((ev.keyCode >= Key.Leftarrow) && (ev.keyCode <= Key.Downarrow)) ||
                    (ev.keyCode == Key.Pageup) || (ev.keyCode == Key.Pagedown)))
            {
			    dynaTOUT(obj);
			    mpobj = dynaGetCell(tobj, dynaNextRow, dynaNextCol);
			    if (mpobj) {
			        dynaTIN(mpobj, 0, e);
			    }
			}
			else {
			    if (!Input) {
			        dynaLastObj = null;
			        dynaTOUT(obj);
			    }
			    else {
			        obj.blur();
			    }
			}
		}
    }
    else if (dynaNextInputObject) { //Springe zu naechstem Objekt
        if (!Input) {
            dynaLastObj = null;
            dynaTOUT(obj);
        }
        else {
            obj.blur();
        } 
    }
}

//*******
function dynaGetCuR(obj) {
	dynaLastCol=0;
	dynaLastRow=0;
	dynaLastScrollx=0;
	dynaLastScrolly=0;
	if (obj && ((obj.tagName=="TEXTAREA") || (obj.tagName=="INPUT"))) obj=obj.parentNode;
	if (obj && (obj.tagName=="TD"))  {
		dynaLastCol=dynaCellIndex(obj);
		obj=obj.parentNode;
	}
	if (obj && (obj.tagName=="TR"))  {
		dynaLastRow=dynaRowIndex(obj);
		obj=obj.parentNode;
	}
	else dynaLastRow=0;

	if (obj && (obj.tagName=="TBODY"))  obj=obj.parentNode;
	if (obj && (obj.tagName=="TABLE"))  {
		obj=obj.parentNode;
	} 
	if (obj && ((obj.tagName=="SPAN")||(obj.tagName=="DIV")))  {
		dynaLastScrollx=obj.scrollLeft;
		dynaLastScrolly=obj.scrollTop;
		if (!obj.id) obj=dynaGetMainParent(obj);
		return obj;
	}
	return null;
}

function dynaCellIndex(obj) {
	var i;
	i=dynaGetIndex(obj,"TD");
	return i;
}
function dynaRowIndex(obj) {
	var i;
	i=dynaGetIndex(obj,"TR");
	return i;
}
function dynaGetIndex(obj,type) {
	var i=0;
	if (!obj) return 0;
	if (obj.nodeType != Node.ELEMENT_NODE) obj = obj.parentNode;
	if ((type=="TR") && (obj.tagName=="TD")) obj=obj.parentNode;
	if (obj.tagName!=type) return 0;
	if (m_PlatForm.browser=="ie") {
		if (type=="TD")i=obj.cellIndex;
		if (type=="TR")i=obj.rowIndex;
	}
	else {
		while (obj.previousSibling) {
			obj=obj.previousSibling;
			if (obj.tagName==type)	++i;
		}
	}
	return i;
}

//*******
function dynaGetCell(obj,Row,Col) {
	var i,j,k, rowind,colind;
	var myObj=null,obj1,obj2;
	rowind=0;
	colind=0;
	if (!obj || !obj.rows) return null;
	obj2=obj.rows[Row];
	if (obj2 && obj2.childNodes) {
		for (k=0; k<obj2.childNodes.length;k++) {
			if (obj2.childNodes[k] &&(obj2.childNodes[k].tagName=="TD" )) {
				if (colind==Col) {
					myObj=obj2.childNodes[k];
					break;
				}
				++colind;
			}
		}
	}
	return myObj;
}

//*******
function dynaGetID(obj) {
	if (!obj) return 0;
	var parts = new Array();
	var ObjNr=0;
	var str=obj.id;
	if (str) {
		parts=str.split(":");
		if (parts.length>0) {
			if (parts[0].substring(0,3)!="OBJ") return 0;
			ObjNr=parts[0].substring(3,parts[0].length);
			return ObjNr;
		}
	}
	return 0;
}

//*******
function dynaGetDoc(obj) {
	if (!obj) return "";
	var parts = new Array();
	var str=obj.id;
	if (str) {
		parts=str.split(":");
		if (parts.length>1) if (parts[1]!="") return parts[1];
	}
	return "";
}

//*******
function dynaFirstChild(Parent) {
	var Child=null;
	var k;
	if (!Parent || !Parent.childNodes) return null;
	for (k=0; k<Parent.childNodes.length; k++) {
	    if ((Parent.childNodes[k]) && (Parent.childNodes[k].nodeType == Node.ELEMENT_NODE)) {
	        if (Parent.childNodes[k] && Parent.childNodes[k].tagName != "NOBR") {
	            Child = Parent.childNodes[k];
	        }
			break;
		}
	}
	return Child;
}

//*******
function dynaNextChild(brother) {
	if (!brother) return null;
	if (brother.nextSibling) return brother.nextSibling;
	else return null;
}

//*******
function dynaGetMainChild(Parent) {
	var Child=null;
	var k;
	if (!Parent || !Parent.childNodes) return null;
	for (k=0; k<Parent.childNodes.length; k++) {
	    if ((Parent.childNodes[k]) && ((Parent.childNodes[k].tagName == "SPAN") || (Parent.childNodes[k].tagName == "DIV")
		                                ||(Parent.childNodes[k].tagName=="SELECT"))) {
			Child=Parent.childNodes[k];
			break;
		}
	}
	return Child;
}

//*******
function dynaGetContent(Parent) {
	var Child=null;
	var k,to,to1;
	if (!Parent) return null;
	if (Parent.tagName == "SELECT") {
	    return Parent;
	}
	for (k=0; k<Parent.childNodes.length; k++) {
		to=Parent.childNodes[k];
		if ((to) && (to.nodeType == Node.ELEMENT_NODE)) {
			if ((to.tagName!="SPAN")&&(to.tagName!="DIV")) {
				Child=to;
				to1=Child.nextSibling;
				if (Child.tagName=="SELECT") {
					while (to1) {
						if (to1.tagName=="DIV") {
							Child=dynaGetContent(to1);
							break;
						}
						else to1=to1.nextSibling;
					}
				}
				break;
			}
			else {
				Child=dynaGetContent(to);
				if (Child) break;
			}
		}
	}
	return Child;
}

//*******
function dynaGetMainParent(obj) {
	var obj,obj1;
	if (obj) {
		while (obj.parentNode) {
			obj=obj.parentNode;
			if ((obj.nodeType == Node.ELEMENT_NODE) && (obj.tagName != "BODY") && (obj.tagName != "HTML")) {
				if (((obj.tagName=="DIV")||(obj.tagName=="SPAN"))&&obj.id) return obj;
			}
			else return null;
		}
	}
	else return null;
}

//*******
function dynaGetDynaObj(obj) {
	var i;
	for (i=0; i<dynaMaxObjects; i++) {
		if (typeof obj == 'string') {
			if (DynaObj[i].ID==obj) return DynaObj[i];
		}
		else if (DynaObj[i].Obj==obj) return DynaObj[i];
	}
	return null;
}

//*******
function dynaPrintObject() {
debugMsg("dynaPrintObject ");
	this.Obj=null;
	this.Color=null;
	this.BkColor=null;
}
function dynaBeforePrint() {
debugMsg("dynaBeforePrint ");
	var MDiv,CurrDiv,str0;
	var ind=0;
	dynaPrintObjectList.length=0; 
	for (i=0; i<dynaMaxObjects; i++) {
			CurrDiv=DynaObj[i].Obj;
			if (CurrDiv) {
				str0=CurrDiv.lang.split("*");
				if (str0 && str0[2] && (str0[3]=="N")) {
					CurrDiv.style.display="none";
					dynaPrintObjectList[ind]= new dynaPrintObject();
					dynaPrintObjectList[ind].Obj=CurrDiv;
					++ind;
				}
				else {
					if ( ((CurrDiv.tagName=="SPAN")||(CurrDiv.tagName=="DIV")) && (CurrDiv.hasChildNodes())  ) CurrDiv=CurrDiv.childNodes[0];
					if ((DynaObj[i].ObjType=="SELECT") || (DynaObj[i].ObjType=="BCHierPopup")) {
						if (CurrDiv && CurrDiv.style.color=="#ffffff") {
							dynaPrintObjectList[ind]= new dynaPrintObject();
							dynaPrintObjectList[ind].Obj=CurrDiv;
							dynaPrintObjectList[ind].Color=CurrDiv.style.color;
							dynaPrintObjectList[ind].BkColor=CurrDiv.style.backgroundColor;
							++ind;
							CurrDiv.style.color="#000000";
						}
					}
				}
			}
	}
}
function dynaAfterPrint() {
debugMsg("dynaAfterPrint ");
	for (i=0; i<dynaPrintObjectList.length; i++) {
		if (dynaPrintObjectList[i].Obj) {
			if (dynaPrintObjectList[i].Obj.tagName=="SELECT") {
				dynaPrintObjectList[i].Obj.style.color=dynaPrintObjectList[i].Color;
				dynaPrintObjectList[i].Obj.style.backgroundColor=dynaPrintObjectList[i].BkColor;
			}
			else {
				dynaPrintObjectList[i].Obj.style.display="inline";
			}
		}
	}
	dynaPrintObjectList.length=0; 
}
function dynaStartPrint() {
debugMsg("dynaStartPrint");
	var i,index,url;
	var Param;
	var printDoc=null;

	dynaLoadUrl(null);
	for (i=0; i<dynaPrintDoc.length; i++) {
		if (dynaPrintDoc[i]) {
			printDoc=dynaPrintDoc[i];
			index=i;
			break;
		}
	}
	if (printDoc) {
debugMsg(": "+printDoc,true);
		if (arcPrint==3) {
			self.print();
			printDoc=null;
		}
		else if (arcPrint==4) {
debugMsg("  (4)",true);
			dynaCountSRek=0;
			Param=arcCGISite+"?ISINIT=\""+dynaFirstDispatcher+"\"&DYN=Presentation&PARAM1=0&PARAM2=DownloadFile&PARAM3=\""+printDoc+"\"";
			//DT1932
			dynaDialogHwnd=open(Param,"","status=0,location=0,toolbar=0,menubar=0,resizable=1");
			dynaDialogHwnd.name=Param;
			dynaPrintDoc[index]=null;
			if (dynaPrintDoc.length > index + 1) {
			    setTimeout("dynaStartPrint();", 2000);
			}
			else {
			    printDoc = null;
			}
        }
	}

	if (!printDoc) {
		dynaPrintDoc.length=0;
		dynaDeActivate(false);
	}
}


//*******
function dynaEventOnButtonClick(obj) {
debugMsg("dynaEventOnButtonClick "+obj);
	if (dynaStillLoading) {
		if (document.event) document.event.cancelBubble=true;
	}
	else {
		dynaStillLoading=true;
		var OBJECT;
		var ObjNr=null;
		var Ptime = new Date();
		var url;
		OBJECT=obj.parentNode;
		if (window.event) {
			dynaLastx=window.event.clientX;
			dynaLasty=window.event.clientY;
		}

	 	if (OBJECT && OBJECT.id) {
			for (i=0; i<dynaMaxObjects; i++) {
				if (OBJECT.id==DynaObj[i].ParentID) {
					ObjNr=DynaObj[i].OBJnr;
					dynaDoc=DynaObj[i].Doc;
					break;
				}
			}
		}
		if (ObjNr) {
			url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=110"+"&PARAM6=null"+"&PARAM7=0"+"&PARAM8=0"+"&SPACE="+Ptime.getTime()+" ";
			dynaDeActivate(true);
			dynaLoadUrl(url);
		}
		else dynaStillLoading=false;
	}
}

function dynaremoveHierPopup(obj) {
	var	pos=new Array;
	var obj1,obj2;
	
debugMsg("dynaremoveHierPopup "+obj);
	if (obj) {
		pos[0]=-1;
		pos[1]=-1;
		dynaGetPoint(obj,pos);
		obj1=dynaGetMainParent(obj);
		obj2=dynaGetMainParent(pos[2]);
		if (obj1!=obj2)	{
			if (dynaPopupObject && (obj1 == dynaPopupObject) && (m_PlatForm.browser== "ie11") ) {
				debugMsg("Skipping hidden state for I.E. 11 " + dynaPopupObject.id); //DT25912 aktuelles Popup noch nicht entfernen
			}
			else {
				dynaPopupstate(dynaPopupObject,"hidden",false,false);
			}
		}
		else dynaPopupstate(dynaPopupObject,"visible",true,false);
	}
	else {
		if (dynaPopupObject) dynaPopupstate(dynaPopupObject,"hidden",false,false);
	}
}

//function dynaGetPopupContent(obj) {
//    var obj0, obj1, k;
//    var retObj = null;
//	if (!obj) return null;
//	obj0=dynaFirstChild(obj);
//	if (obj0) for (k=0; k<obj0.childNodes.length; k++) {
//		obj1=obj0.childNodes[k];
//		if (obj1&&((obj1.tagName=="DIV")&&((obj1.lang=="BCHierPopup")||(obj1.lang=="BCPopup")))) {
//		    retObj = obj1;
//		    break;
//		}
//    }
//    return retObj;
//}

//Diese Funktion macht den Inhalt der Men�s und Hierarchiemen�s und der POPUP Funktion
//Sichtbar/Unsichtbar. Auch die Gr��e des Inhalts wird an den Bildschirm angepasst wenn
//resize True ist. Die Gr��e darf initial nicht ausreichned sein, da dann eventuell
//vom Browser unerw�nschte Rollbalken f�r einen Unsichtbaren Inhalt erzeugt werden
function dynaPopupstate(obj,state,focus,resize) {
debugMsg("dynaPopupstate " + state);
	var obj1,obj2,obj3,obj4,obj5,i,x,y,h,w,sh=30,j,jj;
	if (obj) obj3=dynaGetDynaObj(obj.id);
	obj=dynaFirstChild(obj);
	if (obj) for (k=0; k<obj.childNodes.length; k++) {
		obj1=obj.childNodes[k];
		if (obj1&&((obj1.tagName=="DIV")&&((obj1.lang=="BCHierPopup")||(obj1.lang=="BCPopup")))) {
		    obj2 = dynaFirstChild(obj1);
		    if (obj2) {
		        obj2.style.visibility = state;
		    }
			obj1.style.visibility=state;
			if (state=="visible") {
				if (dynaPopupIndex==0) {
					dynaPopupIndex=dynaPopupObject.style.zIndex;
				}
				dynaPopupObject.style.zIndex=100000;
				if (resize) {
					dynaSetWindowSize();
					var objHeight = dynaConv(obj.style.height);
					if (objHeight > 0) {
					    sh = objHeight;
					}
					x = dynaConv(dynaPopupObject.style.left);
					if (dynaWholeDoc) {
					    y=dynaConv(dynaPopupObject.style.top);
					}
					else {
					    y=dynaConv(dynaPopupObject.offsetTop);
					}
					y=y-dynaConv(document.body.scrollTop);
					h=dynaConv(obj1.style.height);
					w=dynaConv(obj1.style.width);
					dynaLastx=0;
					for (i=0; i<obj1.childNodes.length; i++) {
						obj2=obj1.childNodes[i];
						if (obj2&&(obj2.tagName=="BUTTON")) {
							sh=dynaConv(obj2.style.height);
						}
						else if (obj2&&(obj2.tagName=="TABLE")) {
							if (obj2.lang) j=dynaConv(obj2.lang);
							if (!j) j=0;
							h=dynaConv(obj2.style.height)+parseInt(1.6*j);
							break;
						}
					}
					y+=sh
					if (h>dynasHeight) h=dynasHeight;
					if (h+y>=dynasHeight-10) {
						if (dynasHeight-y<dynasHeight/4) {
							h=Math.min(h,dynasHeight/2);
							sh=-h;
						}
						else {
							h=dynasHeight-y-10;
						}
					}
//debugMsg("resize "+obj2.lang+"  "+obj1.style.height+"  h="+h);
					h+=4;
					obj1.style.height=h+"px";
					dynaLasty=sh;
					obj1.style.left=dynaLastx+"px";
					obj1.style.top=dynaLasty+"px";
					if (m_PlatForm.browser=="ie") obj1.scrollTop=obj3.ScrollY;
				}
				if (focus) {
					dynaFocus(obj1);
				}
			}
			else {
				if (m_PlatForm.browser=="ie") obj3.ScrollY=obj1.scrollTop;
				dynaLastx=0;
				dynaLasty=0;
				dynaPopupObject.style.zIndex=dynaPopupIndex;
				dynaPopupIndex=0;
				dynaPopupObject=null;
			}
		}
	}

}

//Hottracking
function dynaHot(i_obj, i_backcolor, i_forecolor) {
    if (i_obj) {
        if (i_backcolor) {
            i_obj.style.backgroundColor = i_backcolor;
        }
        else {
            i_obj.style.backgroundColor = '';
        }
        if (i_forecolor) {
            i_obj.style.color = i_forecolor;
        }
        else {
            i_obj.style.color = '';
        }
    }
}

function dynaSK(obj, e) {
    var dOBJ, obj1, obj2, obj3, str, str1, row = 0, col = 0, dim = 1,
        i,Selected=false, type=11, doSelect, key = "0",
	    ptime = new Date(),
	    url, ev;

debugMsg("dynaSK "+obj);
	if (!dynaStillLoading) {
		if (!obj.lang) return;
		str = obj.lang.split(',');
		if (str && str[0]) col = str[0]
		if (str && str[1]) row=str[1]
        if (str && str[2]) dim = str[2]
		obj1=dynaGetMainParent(obj);
		dOBJ=dynaGetDynaObj(obj1);
		if (dOBJ.state==1) {
			return;
		}
		obj2=dynaGetContent(obj1);
		if (m_PlatForm.browser == "ff") {
		   ev = e;
		} else {
		   ev = event;
		}
		doSelect=dynaUnselectKnots(obj2,dOBJ, ev);
		if (ev) {
		    if (ev.shiftKey) {
		        key = "1";
		    }
			ev.cancelBubble=true;
		}
		dynaDoc=dynaGetDoc(obj1);
		if (obj.tagName=="DIV") {
			str1=null;
			for (i=0; i<obj.childNodes.length; i++) {
				obj2=obj.childNodes[i];
				if (obj2 && ((obj2.tagName=="DIV") || (obj2.tagName=="NOBR"))) {
					if (dynaFirstChild(obj2) &&(dynaFirstChild(obj2).tagName=="NOBR")) {
						obj2=dynaFirstChild(obj2);
						for (i=0; i<obj2.childNodes.length; i++) {
							obj3=obj2.childNodes[i];
							if (obj3.nodeType == Node.TEXT_NODE) {
								obj2=obj3;
								break;
							}
						}
					}
				}
                if (obj2.nodeType == Node.TEXT_NODE) {
					str1=obj2.nodeValue;
					break;
				}
			}
			if (str1) {
				obj2=dynaFirstChild(obj1);
				if (obj2 && obj2.tagName=="SELECT") {
					obj2=obj2.options[0];
					obj2.innerHTML=str1;
					obj2.value=str1;
					obj2.selected=true;
				}
			}
		}
		if (dynaPopupObject) type=6;

		url = "DYN=Presentation&PARAM1=" + dynaSessionID + "&PARAM2=SendEvent&PARAM3=\"" +
            dynaEncDoc() + "\"&PARAM4=" + dynaGetID(obj1) + "&PARAM5=" + type +
            "&PARAM6=\"" + row + "\"" + "&PARAM7=" + dim + "&PARAM8=" + col + "&PARAM9=" + key +
            "&SPACE=" + ptime.getTime()+" ";
		dynaDeActivate(true);
		dynaLoadUrl(url);
		if (!dynaPopupObject && (doSelect!=2) && (obj.tagName=="DIV")) {
			obj2=null;
			if (dOBJ.ObjType=="BCHierVertObject") {
				for (i=0; i<obj.childNodes.length; i++) {
					obj1=obj.childNodes[i];
//debugMsg("dynaSK "+obj1.tagName+"  "+obj1.className+"  "+obj1.innerHTML);
					if (obj1 && obj1.className=="kns") {
						Selected=true;
						obj2=obj1;
					}
					else if (!obj1.className && (obj1.tagName=="DIV")) {
						obj2=obj1;
					}
                    else if (obj1.nodeType == Node.TEXT_NODE) {
						obj2=obj1;
					}
					if (obj2) break;
				}
			}
			else {
				obj2=obj.parentNode;
				if (obj2.className=="kns") Selected=true;
			}
			if (!obj2) return;
			if (!Selected) {
			    if (obj2.nodeType == Node.TEXT_NODE) {
					obj1=document.createElement("DIV");
					obj1.className="kns";
					obj1.innerHTML=obj2.nodeValue;
					obj2.parentNode.replaceChild(obj1,obj2);
				}
				else {
					obj2.lang=obj2.className;
					obj2.className="kns";
				}
			}
			else if (doSelect==0 && key) {
				if (dOBJ.ObjType=="BCHierVertObject") obj2.className="";
				else obj2.className=obj2.lang;
			}
		}
		dynaremoveHierPopup(null);
	}
}

function dynaUnselectKnots(obj,dOBJ, ev) {
	var str, rows,cols, h,i,j,k, obj1, obj2, obj3, sel=0, key=false, vert=true;
	if (!obj || !obj.lang) return 2;
	if (ev) key=ev.shiftKey;
	str=obj.lang.split(":");
	if (str && str[1] && str[3]) {
		rows=parseInt(str[1])
		cols=parseInt(str[2])
		sel=parseInt(str[3]);
	}
	if (dOBJ && dOBJ.ObjType=="BCHierHoriObject") vert=false;
	else cols=1;
//debugMsg("dynaUnselectKnots  lang:"+obj.lang+"cols:"+cols+" rows:"+rows+"   ");
	if (rows && ((sel==1) || ((sel==0) && !key))) {
		for (h=0; h<cols; h++) {
			for (i=0; i<rows; i++) {
				if (vert) obj1=dynaGetCell(obj,i,h);
				else obj1=dynaGetCell(obj,h,i);
				if (obj1) {
					if (vert) {
						for (j=0; j<obj1.childNodes.length; j++) {
							obj2=obj1.childNodes[j];
							if (obj2 && obj2.tagName=="DIV") {
								for (k=0; k<obj2.childNodes.length; k++) {
									obj3=obj2.childNodes[k];
									if (obj3 && obj3.className=="kns") {
										obj3.className="";
									}
								}
							}
						}
					}
					else {
						if (obj1.className=="kns") {
							obj1.className=obj1.lang;
							obj1.lang="";
						}
					}
				}
			}
		}
		return sel;
	}
	return sel;
}

function dynaCK(obj,state) {
	var i,obj1,obj2,obj3=null,str=null,row,col,dim=1;
	var Ptime = new Date();
	var url;
debugMsg("dynaCK "+obj+"  state: "+state);
	if (!dynaStillLoading) {
		if (state==11) {
		    if (obj.nodeType == Node.TEXT_NODE) obj = obj.parentNode;
			obj1=obj;
			obj2=obj;
			if (obj.tagName=="TR") {
				for (i=0; i<obj.childNodes.length; i++) {
					obj1=obj.childNodes[i];
					if (obj1.tagName=="TD") break;
				}
			}
			if (obj1.tagName=="TD") {
				for (i=0; i<obj1.childNodes.length; i++) {
					obj2=obj1.childNodes[i];
					if (obj2.name && (obj2.tagName=="A")) break;
				}
			}
			if (obj2.name) str=obj2.name.split(',');
		}
		else {
			if ((state<3) || (!obj.nextSibling) || (!obj.nextSibling.lang)) return;
			str=obj.nextSibling.lang.split(',');
		}
		if (str) {
			if (str[0]) col=str[0];
			if (str[1]) row=str[1];
			if (str[2]) dim=str[2];
			if (row && col) {
				obj1=dynaGetMainParent(obj);
				if (obj1) obj3=dynaGetDynaObj(obj1.id);
				if (obj3 && obj3.state==1) return;
				if (m_PlatForm.browser=="ie") {
					if (obj3 && (obj3.ObjType=="BCHierPopup")) obj3.ScrollY=obj3.ObjC.parentNode.scrollTop;
				}
				dynaDoc=dynaGetDoc(obj1);
				if (state==11) {
					url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+dynaGetID(obj1)+"&PARAM5="+state+"&PARAM6=0&PARAM7="+row+"&PARAM8="+col+"&SPACE="+Ptime.getTime()+" "
				}
				else {
					url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+dynaGetID(obj1)+"&PARAM5="+state+"&PARAM6="+row+"&PARAM7="+dim+"&PARAM8="+col+"&PARAM9=42"+"&SPACE="+Ptime.getTime()+" "
				}
				dynaDeActivate(true)
				dynaLoadUrl(url);
			}
		}
	}
}

function dynaSE(obj) {
	var str, valStr, obj1, url, ObjNr;
	var unicode=false;
	var uni="";
	var Ptime = new Date();
debugMsg("dynaSE "+obj);
	if (!dynaStillLoading) {
		obj1=dynaGetMainParent(obj);
		dynaDoc=dynaGetDoc(obj1);
		ObjNr=dynaGetID(obj1);
		str=obj.name;
		if (str && (obj.tagName=="A")) {
			url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEncDoc()+"\"&PARAM4="+ObjNr+"&PARAM5=1"+"&PARAM6="+str+"&SPACE="+Ptime.getTime()+" ";
			dynaDeActivate(true);
			dynaLoadUrl(url);
		}
		dynaremoveHierPopup(null);
	}
}

//*******
function dynaEncDoc(docname) {
	var doc;
	if (docname) doc=docname;
	else doc=dynaDoc;
	if (arcTop.dynaFirstDoc==true)	return dynaEscape(dynaDir)+dynaEscape(doc);
	else return dynaEscape(doc);
}
//*******
function dynaFocus(obj) {
	if (!obj || obj.target) {
		self.document.focus;
		return;
	}
	if (m_PlatForm.browser=="ie") obj.focus()
	else {
		try {
			obj.focus();

        } catch (e) {
            LogException("dynaFocus", e);
		}
	}
}
//*******
function dynaGotoObject(obj) {
    if (!obj) return;
    if (m_PlatForm.browser == "ie") {
        dynaTIN(obj, 2);
    }
    else {
        dynaLastRow = 0;
        dynaLastCol = 0;
        dynaLastObj = dynaCurrObj;
        dynaCurrObj = null;
        dynaevObj.srcElement = null;
        dynaTIN(obj, 2);
        return;
    }
}

//*******
function dynaClick(e) {
	var ev=null,obj=null,obj1,obj2,obj3=null,att,att1;
	var evType=-1;
debugMsg("dynaClick "+e);
	if (m_PlatForm.browser!="ie") {
		if (e && ((e.button==0)||(e.button==1)) && e.target) {
			obj=e.target;
			ev=e;
			obj3=document.getElementById('dynaPopup')
			if (obj3) {
				ev.cancelBubble=true;
				obj2=dynaGetMainParent(obj);
				if (dynaGetMainParent(obj)!=obj3) dynaReply(dynaDialogType);
				else dynaReply(dynaDialogType,dynaDialogValue);
				return;
			}
			dynaevObj.init(e);
		}
	}
	else {
		obj=event.srcElement
		ev=event;
	}
	if (!obj || !ev) return;
	if (obj.nodeType == Node.TEXT_NODE) {
		obj=obj.parentNode;
	}
	if (!obj) return;
	obj1=dynaGetMainParent(obj);
	obj2=obj1;
	if (obj1) obj1=dynaGetDynaObj(obj1);
	if (dynaPopupObject &&(!obj1 || (obj1.Obj!=dynaPopupObject))) {
		dynaremoveHierPopup(null);
	}
	if (!obj1) {
	    if (dynaCurrObj && (m_PlatForm.browser != "ie")) {
            if (dynaLastObj != dynaCurrObj) {
                dynaTOUT(dynaCurrObj);
            }
	    }
	    return;
	}
	if (m_PlatForm.browser!="ie") {
		dynaLastx=ev.pageX;
		dynaLasty=ev.pageY;
	}
	if (obj1.ObjType=="OLDHIER") {
		ev.cancelBubble=true;
		dynaCK(obj,11);
	}
	else if (obj1.ObjType=="BUTTON") {
		if (obj.name=="taste") {
			ev.cancelBubble=true;
			dynaSwitch(obj);
			if (m_PlatForm.browser!="ie") dynaObjectClick(obj,1);
		}
		else if (obj.name=="button") {
			ev.cancelBubble=true;
			dynaObjectClick(obj,2);
		}
	}
	else if (obj1.ObjType=="RADIO") {
		ev.cancelBubble=true;
		dynaChangeRadio(obj);
	}
	else if (obj1.ObjType=="CHECKBOX") {
		ev.cancelBubble=true;
		dynaChangeCheckbox(obj);
	}
	else if (obj1.ObjType=="IMG") {
		ev.cancelBubble=true;
	}
	else if (obj1.ObjType == "CHART") {
		ev.cancelBubble = true;
	}
	else if ((obj1.ObjType=="TABLE") && (m_PlatForm.browser!="ie")) {
			att=dynaGetAttribute(obj1.ObjC,"onclick");
	        if (!att && dynaCurrObj) {
	            dynaTOUT(dynaCurrObj);
	        }
			att1=dynaGetAttribute(obj1.Obj,"onclick");
			if (att1=="dynaObjectClick(this,2)") dynaObjectClick(obj1.Obj,2,ev);
	}
	else if (obj.tagName=="IMG") {
		if (obj.name=="ko") evType=4;
		else if (obj.name=="kc") evType=3;
		if (evType>0) dynaCK(obj,evType);
		if (obj.name=="sel") dynaObjectClick(obj.parentNode,6);
	}
	else if (obj1.ObjType=="TEXTAREA") {
		if ((m_PlatForm.browser!="ie")&&(obj.id!='dynaText')) dynaObjectClick(obj,2,ev);
	}
	else if (obj.name && (obj.tagName=="A")) {
		if ((obj1.ObjType=="BCHierPopup") || (obj1.ObjType=="BCHierVertObject") || (obj1.ObjType=="BCHierHoriObject")) {
			dynaSK(obj);
			ev.cancelBubble=true;
		}
		else if (obj1.ObjType=="SELECT") {
			dynaSE(obj);
			ev.cancelBubble=true;
		}
	}
	else if ((obj.tagName=="BUTTON") && ((obj.lang=="BCHierPopup")||(obj.lang=="BCPopup"))) {
	    //weil blur in NS (noch?) nicht klappt
		obj.style.display="none"	
		obj.style.display="inline"
		dynaObjectClick(obj,6)
	}
	else {
		debugMsg("dynaClick: tagName="+obj.tagName+"  name="+obj.name+"  type="+obj.type+" lang="+obj.lang);
	}
	
}
function dynaDeleteObject(Dobj) {
	var obj=Dobj;
	while (Dobj.hasChildNodes()) {
		if (obj.hasChildNodes()) {
			if (obj.lastChild.hasChildNodes()) obj=obj.lastChild;
       			else obj.removeChild(obj.lastChild);
		}
		else {
			if (obj!=Dobj) obj=obj.parentNode;
		}
	}
}

function dynablur() {
	dynaBlur(this.parentNode);
}

function dynaAttachEvents(obj,type) {

	var myobj=null;
	var  xobj,yobj;
	var h,i,j,k,l
	var str0,str;
	var cont=dynaGetContent(obj)
	if (!cont) return;

obj=cont;
	if ((type=="SELECT")||(type=="TEXTAREA")) {
		debugMsg("dynaAttachEvents ");
		if (obj.attributes) {
			for (i=0; i<obj.attributes.length; i++) {
				if (obj.attributes[i]) {
//					if ((type=="SELECT") && (obj.attributes[i].name=="onchange")){
//						if (obj.attributes[i].value=="dynaChangeOption(this.parentNode.parentNode.parentNode)") {
//							obj.onchange=dynachange;
//						}
//					}
					if ((type=="TEXTAREA") && (obj.attributes[i].name=="onblur")){
						if (obj.attributes[i].value=="dynaBlur(this.parentNode)") {
							obj.onblur=dynablur;
						}
					}
				}
			}
		}
	}
return;	

}

//*******
function dynaGetObjectById(id) {
var i,Obj=null
	for (i=0; i<dynaMaxObjects; i++) {
		if (id==DynaObj[i].ID) {
			Obj=DynaObj[i];
			break;
		}
	}
	return Obj;
}

//enth�lt alle n�tigen Informationen �ber den aktuellen event
function dynaevObject() {
	this.type=""
	this.srcElement=null;
	this.Obj=null;
	this.screenX=0;
	this.screenY=0;
	this.offsetX=0;
	this.offsetY=0;
	this.clientX=0;
	this.clientY=0;
	this.keyCode=0;
	this.ctrlKey=0;
	this.altKey=0;
	this.shiftKey=0;
	this.metaKey=0;
	this.button=0;
	this.relatedTarget=null;
	this.cancelBubble=false;
	this.init=init;
	this.e=null;
//Initialisierungsfunktion
	function init(e){
	    if (!e) return;
		this.type=e.type;
		if (m_PlatForm.browser=="ie") {
		    this.srcElement=e.srcElement
		    this.offsetX=e.offsetX;
		    this.offsetY=e.offsetY;
		    this.clientX=e.clientX;
		    this.clientY=e.clientY;
		} else {
		    this.srcElement=e.target;
		    this.offsetX=e.layerX;
		    this.offsetY=e.layerY;
		    this.clientX=e.pageX;
		    this.clientY=e.pageY;
		}
		this.cancelBubble=e.cancelBubble;
		this.keyCode=e.keyCode
		this.button=e.button;
		this.screenX=e.screenX;		
		this.screenY=e.screenY;		
		this.ctrlKey=e.ctrlKey;		
		this.altKey=e.altKey;		
		this.shiftKey=e.shiftKey;		
		this.metaKey=e.metaKey;		
		this.relatedTarget=e.relatedTarget;		
		this.e=e;
	}
}
//*******
function dynaObj() {
    //Inner Container
	this.Obj=null; 
	//Scroll Container
	this.ObjGl=null; //Scrollbalken Container (historisch: OpenGL)
	//Content Object	
	this.ObjC=null;	
	this.ID=null
	this.OBJnr=0;
	this.App="";
	this.Doc="";
	this.ParentID=null;
	this.SetList="";
	this.ObjType=null;
	this.ParentRef=null;
	this.Scrolledx=false;
	this.Scrolledy=false;
	this.ScrollX=0;
	this.ScrollY=0;
	this.hScroll=null;
	this.vScroll=null;
	this.cScroll=null;
	this.Rows=0;
	this.Cols = 0;
	this.ColArray = new Array();
	this.Conth=0;
	this.Contw=0
	this.directScroll=false;
	this.xsetting=0;
	this.ysetting=0;
	this.state=0;
	this.updated=false;
	this.GetXSetting = GetXSetting;
	this.GetYSetting = GetYSetting;

	function GetXSetting() {
	    return dynaConv(this.ScrollX / (this.Contw / this.Cols)) + 1;
	}
	function GetYSetting() {
	    return dynaConv(this.ScrollY / (this.Conth / this.Rows)) + 1;
	}	
}

function dynaGetHierPopObj(obj) {
	if (!obj) return null;
	for (k=0; k<obj.childNodes.length; k++) {
		if (obj.childNodes[k]) 
			if ((obj.childNodes[k].tagName=="DIV") || (obj.childNodes[k].tagName=="SPAN")) {
				return obj.childNodes[k];
			}
	}
	return null;
}

function dynaSynchronousRequest(url) {
    if (window.XMLHttpRequest) {
        AJAX = new XMLHttpRequest();
    } else {
        AJAX = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (AJAX) {
        AJAX.open("GET", url, false);
        AJAX.send(null);
        return AJAX.responseText;
    } else {
        return false;
    }
}

//*******
function arcbeforeUnload() {
var oldLoc = dynaBlank;
var mySessionID=dynaSessionID;
var myCGI=arcCGISite;
var myDispatcher=dynaFirstDispatcher;

debugMsg("arcbeforeUnload");
if (self!=arcTop) {
	dynaInitVar();
	arcTop.dynaState=0;
	debugMsg(" in frame window",true);
	return;
}
    dynaCloseDialog();

if ((m_PlatForm.browser=="ie") && (arcTop.event==null)) {return;}

	arcTop.dynaState=-1;
	var p=new Array(4);
	var url;
	p[0]=0;

	dynaUrlNr=0;

	try {
		if (!((dynaCommunicationFrame) && (dynaCommunicationFrame.document))) {
			dynaCommunicationFrame=window;
		}
	} catch (e) {
		oldLoc=self.location;
	    dynaCommunicationFrame=window;
	}

	if (((p[0]) && (parseInt(p[0])>0)) || (mySessionID && (parseInt(mySessionID)>0))) {
		if (!mySessionID || (parseInt(mySessionID)<=0)) {
			mySessionID=p[0];
			myCGI=p[1];
			myDispatcher=p[3];
		}
		else {
			if (!myCGI) myCGI=p[1];
			if (!myDispatcher) myDispatcher=p[3];
		}
		url = myCGI+"?ISINIT=\""+myDispatcher+"\"&DYN=closepresentation&PARAM1="+mySessionID+" ";
		arcTop.dynaRequestInProgress=true;
		dynaSynchronousRequest(url);
	}
	dynaSessionID=null;
}

function dynaLoadUrl(params,delay) {
	var url,i,k,to,str,doit=false,x,y;
	var Ptime = new Date();
	if (arcTop.dynaState==-1) return;

	try {
		if (!dynaCommunicationFrame) {
		    dynaCommunicationFrame = self.arcBufferFrame;
		}
	} catch (e) {
	    LogException("dynaLoadUrl", e);
	    dynaCommunicationFrame = self.arcBufferFrame;
	}


		if (params) {
			if (dynaUrlNr<0) dynaUrlNr=0;
			if (!(dynaSessionID!=0)) {
				dynaCommunicationFrame.location.replace(dynaBlank);
				return;
			}
			for (i=0; i<dynaMaxObjects; i++) {
				if ((DynaObj[i].Scrolledx)|| (DynaObj[i].Scrolledy)) {
					to=DynaObj[i].Obj;
					if (DynaObj[i].ObjType=="BCHierPopup") {
						to=dynaGetHierPopObj(to)
					}
					if (to) {
						if (DynaObj[i].Scrolledx) {
							if (DynaObj[i].hScroll) DynaObj[i].ScrollX=DynaObj[i].hScroll.scrollLeft;
						    x = DynaObj[i].GetXSetting();
							if (x!=DynaObj[i].xsetting) {
						        DynaObj[i].xsetting = x;
								url = dynaUrlHeader+"DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEscape(dynaDir)+dynaEscape(DynaObj[i].Doc)+"\"&PARAM4="+DynaObj[i].OBJnr+"&PARAM5=13"+"&PARAM6="+DynaObj[i].xsetting+"&SPACE=\""+Ptime.getTime()+"\"                                          ";
								++dynaUrlNr;
								dynaUrl[dynaUrlNr]=url;
							}
							DynaObj[i].Scrolledx=false;
						}
						if (DynaObj[i].Scrolledy) {
							if (DynaObj[i].vScroll) DynaObj[i].ScrollY=DynaObj[i].vScroll.scrollTop;
						    y = DynaObj[i].GetYSetting();
							if (y!=DynaObj[i].ysetting) {
							    DynaObj[i].ysetting=y;
								url = dynaUrlHeader+"DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=SendEvent&PARAM3=\""+dynaEscape(dynaDir)+dynaEscape(DynaObj[i].Doc)+"\"&PARAM4="+DynaObj[i].OBJnr+"&PARAM5=12"+"&PARAM6="+DynaObj[i].ysetting+"&SPACE=\""+Ptime.getTime()+"\"                                                   ";
								++dynaUrlNr;
								dynaUrl[dynaUrlNr]=url;
							}
							DynaObj[i].Scrolledy=false;
						}
					}
				}
			}
			dynaUrlHeader = arcCGISite + "?ISINIT=%22" + dynaFirstDispatcher + "%22&";
			url=dynaUrlHeader+params;
			dynaUrl[0]=url;
			if (!delay) {
				arcTop.dynaRequestInProgress=true;
				if (!arcTop.dynaContact) {
					if (dynaUrlNr>=0) dynaReplace(dynaUrl[dynaUrlNr]);
				}
				else {
					setTimeout("dynadelay()",1000);
				}
			}
			else {
				for (i=dynaUrlNr; i>=0; i--) {
					dynaUrl[i+1]=dynaUrl[i];
				}
				++dynaUrlNr
			}

		}
		else {
			dynaCommunicationFrame.location.replace(dynaBlank);
		}

}

function dynaReplace(urlvar) {
	try {
		dynaSetpreviousContactTime();
		if (dynaCommunicationFrame) {
			dynaCommunicationFrame.location.replace(urlvar);
			arcTop.dynaCountRek=0;
			if (!arcScripting) status=dynaStatusMsg;
		}
    } catch (e) {
        LogException("dynaReplace", e);
	}
	arcTop.dynaContact=true;
}

function dynadelay() {
	if (arcTop.dynaState==-1) return;
	if (!arcTop.dynaCountRek) {
		arcTop.dynaCountRek=0;
	}
	if ((!arcTop.dynaContact) || (arcTop.dynaCountRek>3)) {
		if (dynaUrlNr>=0) dynaReplace(dynaUrl[dynaUrlNr]);
	}
	else {
		debugMsg("waiting...");
		++arcTop.dynaCountRek;
		setTimeout("dynadelay()",3000);
	}
}

function dynaGetAttribute(obj,name) {
	var i,str=null;
	if (!obj) return;
	for (i=0; i<obj.attributes.length; i++) {
		if (obj.attributes[i]) {
			if (obj.attributes[i].nodeName==name) {
				str=obj.attributes[i].nodeValue;
				break;
			}
		}
	}
	return str;
}

function dynaScrollbarHasChanged(dobj, obj) {
debugMsg("dynaScrollbarHasChanged ")
    var myto, vert = false, hori = false;
    myto = dynaGetMainChild(obj);
    if (obj && obj.childNodes) {
	    for (k=0; k<myto.childNodes.length; k++) {
		    if (myto.childNodes[k].lang=="VScroll") {
			    vert=true;
		    }
		    else if (myto.childNodes[k].lang=="HScroll") {
			    hori=true;
		    }
	    }
    }
    if ((dobj.hScroll != hori) || (dobj.vScroll != vert)) {
        return true;
    }
    else {
        return false;
    }
}

function dynaCheckScroll(Dobj) {
    var myto = Dobj.ObjC, str0;
    if (myto && ((Dobj.ObjType == "TABLE")
        || (Dobj.ObjType == "BCHierVertObject") || (Dobj.ObjType == "BCHierHoriObject"))) 
    {
        var sName = "S" + Dobj.ID;
        myto = myto.parentNode.parentNode;
        Dobj.ScrollX = myto.scrollLeft;
        Dobj.ScrollY = myto.scrollTop;
        var oldScroll = dynaDoScroll;
        dynaDoScroll = false;

        for (var ci = 0; ci < myto.childNodes.length; ++ci) {
            var obj2 = myto.childNodes[ci];
            if (obj2.id == sName) {
                var spos = obj2.innerHTML.split(":");
                if (spos.length > 1) {
                    var obj1 = dynaGetMainParent(Dobj.ObjC);
                    obj1 = dynaFirstChild(obj1);
                    if (obj1) {
                        Dobj.vScroll = obj1;
                        Dobj.hScroll = obj1;
                        obj1.scrollTop = dynaConv(spos[0]);
                        obj1.scrollLeft = dynaConv(spos[1]);
                        Dobj.ScrollX = obj1.scrollLeft;
                        Dobj.ScrollY = obj1.scrollTop;
                        var str = Dobj.ObjC.lang.split(":");
                        if (str[1] && str[2]) {
                            Dobj.Rows = dynaConv(str[1]);
                            Dobj.Cols = dynaConv(str[2]);
                        }
                        Dobj.Conth = dynaConv(Dobj.ObjC.style.height);
                        Dobj.Contw = dynaConv(Dobj.ObjC.style.width);
                        Dobj.xsetting = Dobj.GetXSetting();
                        Dobj.ysetting = Dobj.GetYSetting();
                    }

                }
                break;
            }
        }
        dynaDoScroll = oldScroll;
    }
    if (Dobj.vScroll || Dobj.hScroll) {
        str0 = Dobj.Obj.lang.split("*");
        if (str0 && (str0[4] == "J")) Dobj.directScroll = true;
    }
}

function dynaSetDoScroll() {
    dynaDoScroll = true;
    debugMsg("dynaSetDoScroll")
}
function dynaSetDoSlider() {
    dynaDoSlider = true;
    debugMsg("dynaSetDoSlider")
}

function dynascrollDispatch(i_obj, i_xref, i_yref, ev) {
    var obj, dobj, xid, yid, dobjX, dobjY;
    obj = dynaGetMainParent(i_obj);
    if (obj) {
        dobj = dynaGetDynaObj(obj.id);
    }
    if (!dobj) {
        debugMsg("dynascrollDispatch Error: No Source");
        return;
    }
    if (i_xref) {
    	if (i_obj.scrollLeft != dobj.ScrollX) {
            dobj.ScrollX = i_obj.scrollLeft;
            xid = "OBJ" + i_xref + ":" + dynaDoc;
            dobjX = dynaGetDynaObj(xid);
            if (dobjX && dobjX.ObjGl && (dobjX.ScrollX != dobj.ScrollX)) {
                dobjX.ObjGl.scrollLeft = dobj.ScrollX;
                debugMsg("dynascrollDispatch x " + obj.id + " > " + dobjX.ID + " " + dobj.ScrollX);
                dynascrollEx(dobjX.ObjGl, ev);
            }
        }
    }
    if (i_yref) {
        if (i_obj.scrollTop != dobj.ScrollY) {
            dobj.ScrollY = i_obj.scrollTop;
            yid = "OBJ" + i_yref + ":" + dynaDoc;
            dobjY = dynaGetDynaObj(yid);
            if (dobjY && dobjY.ObjGl && (dobjY.ScrollY != dobj.ScrollY)) {
                dobjY.ObjGl.scrollTop = dobj.ScrollY;
                debugMsg("dynascrollDispatch y " + obj.id + " > " + dobjY.ID + " " + dobj.ScrollY);
                dynascrollEx(dobjY.ObjGl, ev);
            }
        }
    }
}

function dynascrollEx(obj, ev) {
	var obj1,
		dobj,
		doDepObj,
		up,
		right,
		lHeight,
		lines,
		cWidth,
		cols,
		newx,
		lastx,
		cc,
		str0,
		str,
		substr,
		Doc,
		sx,
		sy,
        oldscrollTop = 0,
        oldscrollLeft = 0;
	obj1 = dynaGetMainParent(obj);
	if (obj1) {
	    oldscrollTop = obj.scrollTop;
	    oldscrollLeft = obj.scrollLeft;
		dobj = dynaGetDynaObj(obj1.id);
	}
	if (dobj) {
		doDepObj = false;
		if (dynaDoScroll) {
			debugMsg("dynascrollEx " + obj1.id + " x:" + obj.scrollLeft + " y:" + obj.scrollTop + " " + obj1.lang + " " + dobj.Conth)
			dynaScrollObj = dobj;
			dynaDoScroll = false;
			up = true;
			if (obj.scrollTop != dobj.ScrollY) {
				dobj.Scrolledy = true;
			}
			if (obj.scrollTop < dobj.ScrollY) up = false;
			if (obj.scrollLeft != dobj.ScrollX) {
				dobj.Scrolledx = true;
			}
			right = true;
			if (obj.scrollLeft < dobj.ScrollX) right = false;
			lHeight = dobj.Conth / dobj.Rows;
			lines = dobj.ScrollY / lHeight;
			if (up) ++lines;
			else --lines;
			if (lines < 0) lines = 0;

			cWidth = dobj.Contw / dobj.Cols;
			cols = dobj.ScrollX / cWidth;
			if (right) ++cols;
			else --cols;
			if (cols < 0) cols = 0;
			newx = cols * cWidth;
			if (dobj.colArray && dobj.colArray.length > 0) {
				lastx = 0;
				for (cc = 0; cc < dobj.colArray.length; cc++) {
					if (lastx < dobj.ScrollX) {
						lastx += dobj.colArray[cc];
					}
					else {
						if (right) {
							if (cc + 1 < dobj.colArray.length) {
								newx = lastx + dobj.colArray[cc];
							}
							else {
								newx = obj.scrollWidth;
							}
						}
						else {
							if (cc > 0) {
								newx = lastx - dobj.colArray[cc - 1];
							}
							else {
								newx = 0;
							}
						}
						break;
					}
				}
			}
			if (m_PlatForm.browser == "ie") {
				dynaDoSlider = false;
			}
			if (obj.scrollTop != dobj.ScrollY) {
				obj.scrollTop = lines * lHeight;
			}
			if (obj.scrollLeft != dobj.ScrollX) {
				obj.scrollLeft = newx;
			}
			dobj.ScrollX = obj.scrollLeft;
			dobj.ScrollY = obj.scrollTop;

			//debugMsg(" y2:" + obj.scrollTop, true);
			if (m_PlatForm.browser == "ie") {
				setTimeout("dynaSetDoSlider();", 100);
			}
			doDepObj = true;
		}
		if (obj1.lang && (dynaDoSlider || doDepObj)) {
			str0 = obj1.lang.split("*")
			str = str0[0].split(":")
			substr = new Array(str.length)
			if (str.length < 2) debugMsg("Error in dynascroll")
			for (l = 0; l < str.length; l++) substr[l] = str[l].split(';')
			for (n = 0; n < dynaMaxObjects; n++) {
				if (DynaObj[n].ObjC) {

					Doc = dynaGetDoc(DynaObj[n].Obj);
					obj1 = null;
					if (DynaObj[n].ObjType == "CHART") {
						obj1 = dynaGetContent(DynaObj[n].Obj);
					}
					else {
						obj1 = dynaGetMainParent(DynaObj[n].ObjC);
						obj1 = dynaFirstChild(obj1);
					}
					sx = null;
					sy = null;
					if (obj1) {
						for (l = 0; l < substr[0].length; l++) { //X
							Obj = Obj = 'OBJ' + substr[0][l] + ":" + Doc
							if (DynaObj[n].ID == Obj) {
								sx = "" + obj.scrollLeft;
								break;
							}
						}
						for (l = 0; l < substr[1].length; l++) { //Y
							Obj = Obj = 'OBJ' + substr[1][l] + ":" + Doc
							if (DynaObj[n].ID == Obj) {
								sy = "" + obj.scrollTop;
								break;
							}
						}
						if (DynaObj[n].ObjType == "CHART") {
							if (sy || sx) {
								dynaScrollSVG(obj1, sx, sy);
							}
						}
						else {
							if (sx) {
								obj1.scrollLeft = sx;
							    dobj.Scrolledx = true;
							}
							if (sy) {
								obj1.scrollTop = sy;
							    dobj.Scrolledy = true;
							}
						}
					}
				}
			}
		}

	}
	if (dobj && obj) {
		if (dynaDoSlider) {
			dobj.ScrollX = obj.scrollLeft;
			dobj.ScrollY = obj.scrollTop;
		}
		else if (dobj == dynaScrollObj) {
			obj.scrollLeft = dobj.ScrollX;
			obj.scrollTop = dobj.ScrollY;
        }
        if ((oldscrollTop === obj.scrollTop) && (oldscrollLeft === obj.scrollLeft)) {
            return false;
        }
    }
    return true;
}

function dynaScrollSVG(i_obj, i_x, i_y) {
	if (i_obj) {
		var svgdoc = i_obj.getSVGDocument();
		if (!svgdoc) return;
		var svgroot = svgdoc.documentElement;
		var groups = svgroot.getElementsByTagName("g");
		if (groups) {
			//debugMsg("dynaScrollSVG " + i_obj.name);
			var idx;
			if (!i_x) i_x = "0";
			if (!i_y) i_y = "0";
			for (idx = 0; idx < groups.length; idx++) {
				if (groups[idx]) {
					var str = null;
					switch (groups[idx].getAttribute('Scroll')) {
						case 'vert':
							str = "translate(0,-" + i_y + ")";
							break;
						case 'hori':
							str = "translate(-" + i_x + ",0)";
							break;
						case 'both':
							str = "translate(-" + i_x + ",-" + i_y + ")";
							break;
					}
					if (str) {
						groups[idx].setAttribute("transform", str);
					}
				}
			}
		}
	}
}

function dynaSendScroll(Obj) {
    debugMsg("dynaSendScroll " + Obj);
    var v = 0, h = 0, str, str0, substr, i, j, k, ind, ID, url,
		Ptime = new Date(),
		myIMGArray=new Array;

	str=Obj.Obj.lang;
	if (str) str0=str.split("*");
	str=str0[0].split(":")
	substr =new Array(str.length)
	for (i=0; i<str.length; i++) substr[i]=str[i].split(";")
	ind=0;
	k=0;
	for (i=0; i<substr[ind].length; i++) {
		ID='OBJ'+substr[ind][i]+":"+Obj.Doc;
		for (j=0; j<dynaMaxObjects; j++) {
			if (DynaObj[j].ID==ID) {
				if (DynaObj[j].ObjType=="CHART") {
					url = "DYN=Presentation&PARAM1="+dynaSessionID+"&PARAM2=GetObjectData&PARAM3=\""+dynaEscape(dynaDir)+dynaEscape(Obj.Doc)+"\"&PARAM4="+DynaObj[j].OBJnr+"&SPACE=\""+Ptime.getTime()+"\"                                                          "
					myIMGArray[k]=url;
					if (k==0) dynaDeActivate(true);
					++k
				}
				break;
			}
		}
	}
	for (i=0; i<myIMGArray.length; i++) {
		if (i<myIMGArray.length-1) dynaLoadUrl(myIMGArray[i],true);
		else dynaLoadUrl(myIMGArray[i],false);
	}
}

function dynagetEventPos(ev,rel) {
var pos=0;
	if (this.type=="V") {
		if (m_PlatForm.browser=="ie") {
			if (rel) pos=ev.offsetY;
			else pos=ev.clientY;
		}
		else {
			if (rel) pos=ev.layerY;
			else pos=ev.pageY;
		}
	}
	else {
		if (m_PlatForm.browser=="ie") {
			if (rel) pos=ev.offsetX;
			else pos=ev.clientX;
		}
		else {
			if (rel) pos=ev.layerX;
			else pos=ev.pageX;
		}
	}
	return pos;
}

function dynagetEventSource(ev) {
	var srcObj;
	if (ev) {
		srcObj = ev.srcElement;
		if (!srcObj) srcObj = ev.target;
	}
	return srcObj;
}

function dynaRepaint(obj) {
	if (m_PlatForm.browser!="ie") {
		obj.style.position='absolute';
		obj.style.position='relative';
	}
}

function dynaKeyDown(e) {
		dynaevObj.init(e);
		if (dynaCurrObj) {
		    if ((dynaevObj.srcElement.tagName != "TEXTAREA") && (dynaevObj.srcElement.tagName != "INPUT")) {
		        dynaDoKeypress = true;
		        dynaevObj.srcElement = dynaCurrObj;
		    }
			dynaKCheck(dynaevObj);
		}
}

function dynaCopyProp(target,source) {
var ts=target.style,ss=source.style;
	target.lang=source.lang;
	ts.backgroundImage=ss.backgroundImage;
	ts.backgroundColor=ss.backgroundColor;
	ts.color=ss.color;
	ts.fontFamily=ss.fontFamily;
}

function dynaHTMLtoStr(inS) {
	var msgObj, str, outS = "";
	msgObj = arcGetMsgObj();
	str = "<div style='position: absolute;z-index: 0;" +
         "top:0px; left:0px; width:1px; background-color: transparent;color: transparent;" +
         "position:absolute;'>"+inS+"</div>";
	msgObj.innerHTML = str;
	if (msgObj.textContent) {  //HTML Standard
		outS = msgObj.textContent;
	}
	else if (msgObj.innerText) {
		outS = msgObj.innerText;
	}

	msgObj.innerHTML = "";
	return outS;
}

//********
function dynaPops() {
	this.x=0;
	this.y=0;
	this.obj=null;
	this.td=null;
	this.level=-1;
}

function dynaPopEvents(attach) {
	var i,j,k, obj, obj1, obj2, obj3;
	
	obj=document.getElementById("dynaPopup");
	if (obj && obj.childNodes) {
		if (m_PlatForm.browser=="ie") {
			if (attach) {
				document.attachEvent("onclick",dynaPopClick);
				//obj.attachEvent("onblur",dynaBlurPop);
			}
			else {
				document.detachEvent("onclick",dynaPopClick);
				//obj.detachEvent("onblur",dynaBlurPop);
			}
		}
		else if (m_PlatForm.browser!="ie") {
			if (attach) {
				obj.addEventListener("click",dynaPopClick,true);
				//obj.addEventListener("blur",dynaBlurPop,true);
			}
			else {
				obj.removeEventListener("click",dynaPopClick,true);
				//obj.removeEventListener("blur",dynaBlurPop,true);
			}
		}
		for (j=0; j<obj.childNodes.length;j++) {
			obj1=obj.childNodes[j];
			if (obj1 && obj1.rows) {
				for (i=0; i<obj1.rows.length; i++) {
					obj2=obj1.rows[i];
					if (obj2 && obj2.childNodes) {
						for (k=0; k<obj2.childNodes.length;k++) {
							obj3=obj2.childNodes[k];
							if (obj3 &&(obj3.tagName=="TD" )) {
								if (m_PlatForm.browser=="ie") {
									if (attach) obj3.attachEvent("onmouseover",dynaEnter);
									else obj3.detachEvent("onmouseover",dynaEnter);
								}
								else {
									if (attach) obj3.addEventListener("mouseover",dynaEnter,true);
									else obj3.removeEventListener("mouseover",dynaEnter,true);
								}
								if (attach) dynaPopEventsDefined=true;
							}
						}
					}
				}
				if (obj1.id && obj1.style) obj1.style.borderStyle="none"
			}
		}
	}
}

function dynaPopClick(e) {
var obj,obj1, blur=true, str;
debugMsg("dynaPopClick "+e)
	if (m_PlatForm.browser=="ie") {
		obj=event.srcElement;
		event.cancelBubble=true;
	}
	else {
		obj=e.target;
		e.cancelBubble=true;
	}
if (obj.nodeType == Node.TEXT_NODE) obj = obj.parentNode;
	obj1=dynaGetMainParent(obj);
	if (obj1) {
		if (obj1.id=="dynaPopup") {
			blur=false;
			if ((obj.tagName=="TD") && obj.lang) {
				if (obj.lang=="CANCEL") blur=true;
				else {
					str=obj.lang.split('*');
					if (str && str[1]) {
						dynaDialogValue[0]=str[1];
//debugMsg(dynaPopupObject+"  "+obj+" "+obj.tagName+"   "+str[1],true)
						dynaReply(dynaDialogType,dynaDialogValue);
					}
				}
			}
		}
	}
	if (blur) dynaReply(dynaDialogType);
}

function dynaGetPopTab(obj) {
	var obj1=obj;
	while (obj1 && obj1.tagName!="TABLE") {
		obj1=obj1.parentNode;
	}
	return obj1;
}

function dynaEnter(e) {
	var top,left,w,h,x,y,x0,y0,str;
	var i,ind,l,l1,obj1,obj2,level;

	if (m_PlatForm.browser=="ie") {
		obj=event.srcElement;
		event.cancelBubble=true;
	}
	else {
		obj=e.target;
		e.cancelBubble=true;
	}
	if (!obj) return;

	if (obj.nodeType != Node.ELEMENT_NODE) obj = obj.parentNode;

	if (dynaLastPop) {
		if (dynaLastPop.td==obj) {
			popEvent=false;
			return;
		}
	}
	dynaGetPopObj(obj);

	top=obj.offsetTop;
	left=obj.offsetLeft
	w=obj.offsetWidth;
	h=obj.offsetHeight;
	if (left && w) x=left+w;
	if (top && h) y=top;
	if (obj.lang) str=obj.lang.split('*');
	if (str && str[0])	l="dynaPop"+str[0];
	obj1=dynaGetPopTab(obj);
	level=dynaGetPopLevel(obj1);
	obj1=document.getElementById(l);
	dynaGetPopObj(obj);
	obj.className="dynaMenuI";
	if (obj1) {
		x0=0;
		y0=0;
		if (dynaLastPop && dynaLastPop.obj) {
			x0=dynaConv(dynaLastPop.obj.style.left);
			y0=dynaConv(dynaLastPop.obj.style.top);
		}
		x+=x0;
		y+=y0;
		obj1.style.visibility="visible";
		obj1.style.borderStyle="outset";
		obj1.style.left=x+"px";
		obj1.style.top=y+"px";
		ind=dynaPopupobjects.length;
		for (i=0; i<dynaPopupobjects.length; i++) {
			if (!dynaPopupobjects[i]) {
				ind=i;
				break;
			}
		}
		obj2=new dynaPops();
		obj2.x=x;
		obj2.y=y;
		obj2.obj=obj1;
		obj2.td=obj;
		obj2.level=level;
		dynaPopupobjects[ind]=obj2;
		if (dynaLastPop && !dynaLastPop.obj) {
			dynaLastPop.td.className="";
		}
		dynaLastPop=obj2;
	}
	else {
		obj1=dynaGetPopTab(obj);
		level=dynaGetPopLevel(obj1);
		ind=dynaPopupobjects.length;
		for (i=0; i<dynaPopupobjects.length; i++) {
			if (!dynaPopupobjects[i]) {
				ind=i;
				break;
			}
		}
		obj2=new dynaPops();
		obj2.x=0;
		obj2.y=0;
		obj2.obj=null;
		obj2.td=obj;
		obj2.level=level;
		dynaPopupobjects[ind]=obj2;
		if (dynaLastPop) {
			if (dynaLastPop.level>=level) dynaLastPop.td.className="";
		}
		dynaLastPop=obj2;
	}
}

function dynaGetPopObj(obj) {
	var i,obj1,obj2,obj3,lev,objLev,id,s,str;
	obj1=dynaGetPopTab(obj);
	lev=dynaGetPopLevel(obj1)
	for (i=0; i<dynaPopupobjects.length; i++) {
		obj2=dynaPopupobjects[i];
		if (obj2 && obj2.obj==obj1) {
			obj3=obj2;
		}
	}
	for (i=0; i<dynaPopupobjects.length; i++) {
		obj2=dynaPopupobjects[i];
		if (obj2) {
			if (obj2.obj && obj2.obj.id) {
				objLev=dynaGetPopLevel(obj2.obj);
				if (objLev>lev) {
					obj2.obj.style.visibility="hidden";
					obj2.obj.style.borderStyle="none";
					obj2.td.className="";
					dynaPopupobjects[i]=null;
					dynaPopupobjects.sort();
					dynaLastPop=obj3;
				}
			}
			else {
				obj2.td.className="";
			}
		}
	}
}

function dynaGetPopLevel(obj) {
	var s,str,lev=-1;
	if (obj && obj.id) {
		s=obj.id.substring (7, obj.id.length);
		if (s) str=s.split(":");
		if (str && str[0]) {
			lev=parseInt(str[0]);
		}
	}
	return lev;
}

function dynaMakeVisible(obj) {
    if (obj) {
        if ((obj.style) && ( obj.style.display=='none') ) obj.style.display='inline';
    }
}

function dynaHandleFields() {
    var ptime = new Date();
    var mstart = ptime.getTime();
    var oObjectArray = document.getElementsByTagName("input");
    var i, obj;
    for (i = 0; i < oObjectArray.length; ++i) {
        obj = oObjectArray[i];
        if (obj && obj.className == "dynaPass") {
            var str = obj.parentNode.innerHTML;
            if (str.indexOf('type="text"') > 0) {
                str = str.replace('type="text"', 'type="password"');
            }
            else if (str.indexOf('<INPUT') >= 0) {
                str = str.replace('<INPUT', '<INPUT type="password" ');
            }
            else if (str.indexOf('<input') >= 0) {
                str = str.replace('<input', '<input type="password" ');
            }
            else {
                debugMsg("dynaHandleFields Error" + str);
            }
            var obj1 = dynaGetMainParent(obj.parentNode);
            obj.parentNode.innerHTML = str;
        }
    }
    ptime = new Date();
    var mstop = ptime.getTime();
    var diff = mstop - mstart;
    debugMsg("dynaHandleFields: time:" + diff + " Num: " + oObjectArray.length);
}

function acSendClickEvent(doc, objID, row, col) {
    var lRow = row - 1
    var lCol = col - 1
    var url = "DYN=Presentation&PARAM1=" + dynaSessionID + "&PARAM2=SendEvent&PARAM3=\"" + dynaEncDoc(doc) + "\"&PARAM4=" + objID + "&PARAM5=2" + "&PARAM6=null" + "&PARAM7=" + lRow + "&PARAM8=" + lCol;
    return acSendEvent(url);
}

function acSendSwitchEvent(doc, objID, index) {
    var url = "DYN=Presentation&PARAM1=" + dynaSessionID + "&PARAM2=SendEvent&PARAM3=\"" + dynaEncDoc(doc) + "\"&PARAM4=" + objID + "&PARAM5=1" + "&PARAM6=" + index;

    return acSendEvent(url);
}

function acSendInputEvent(doc, objID, val, row, col) {
    var unicode = false;
    var uni = "";
    if (dynaDoUnicode(val)) {
        unicode = true;
        uni = "u";
    }
    var lRow = row - 1
    var lCol = col - 1
    var url = "DYN=Presentation&PARAM1=" + dynaSessionID + "&PARAM2=SendEvent&PARAM3=\"" + dynaEncDoc(doc) + "\"&PARAM4=" + objID + "&PARAM5=5" + "&PARAM6" + uni + "=\"" + val + "\"&PARAM7=" + lRow + "&PARAM8=" + lCol;
    return acSendEvent(url);
}

function acSendEvent(url) {
    if (!arcTop.dynaContact) {
        var Ptime = new Date();
        url = url + "&SPACE=" + Ptime.getTime() + " ";
        dynaLoadUrl(url, false);
        return 1;
    }
    else {
        return 0;
    }
}


function getFunctionName(func) {
    var fName;
    if (typeof func == "function" || typeof func == "object")
        fName = ("" + func).match(/function\s*([\w\$]*)\s*\(/);
    if (fName && (fName.length > 1)) return fName[1];
}

function dynaStartJsFinish(funcName) {
    arcTop.dynaContact = false;
    var numP = 0;
    if (dynaJSParams) {
        numP = dynaJSParams.length;
    }
    if (arcScripting) {
        debugMsg("dynaStartJsFinish: " + getFunctionName(funcName) + " NumParams: " + numP)
    }

    if (funcName) {
        try {
            dynaDialogValue[0] = funcName.apply(this, dynaJSParams);
            if (dynaDialogValue[0]) {
                dynaDialogValue[0] = dynaEscape(dynaDialogValue[0]);
            }
        } catch (e) {
            LogException("dynaStartJsFinish", e);
        }
    }
    dynaDialogType = 20;
    dynaReply(dynaDialogType, dynaDialogValue);
    return;
}

//Dies ist de Default implementation der Userfunction
//Sie wird nur verwendet solange sie nicht in der HTML Startseite �berschrieben wurde
//Eine Kundenimplementation der Funktion soll in der Startseite erfolgen. Nicht hier!
function UserFunction(str1,str2,str3,str4,str5,str6,str7,str8) {
	if (str1) return str1;
	else return null;
}

function dynaObjToStr(obj) {
    var str = "";
    var obj1 = dynaGetMainParent(obj);
    if (obj1) str += obj1.id;
    str += "|" + obj + " ";
    return str;
}

function dynaSetCurrent(obj) {
	if (arcScripting) {
  	  var str = "old:" + dynaObjToStr(dynaCurrObj);
  	  str += " new:" + dynaObjToStr(obj);
  	  debugMsg("dynaSetCurrent " + str);
	}
    dynaCurrObj = obj;
}

function dynaSetPosition(obj, pos) {
    if (obj.setSelectionRange) {
        obj.focus();
        obj.setSelectionRange(pos, pos);
    }
    else if (obj.createTextRange) {
        var range = obj.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}
function dynaSetBBcursor(obj) { //Workaround f�r Blackberry
    if (dynaDoKeypress && obj && obj.value.length > 0) {
        dynaDoKeypress = false;
        dynaSetPosition(obj, 1);
    }
}

function HasDebugConsole() {
	return window.console;
}

function getTimeStamp() {
    var ptime = new Date(),
        str = ptime.toString(),
        index = str.lastIndexOf(' GMT');
    if (index > 0) {
        str = str.substring(0, index);
    }
    str += ":" + ptime.getMilliseconds();
    return str;
}

//Falls in der Startseite arcScripting eingaschaltet ist wird in das Scriptwindow eine Ausgabe
//Geschrieben. Das geht nat�rlich nur wenn ein Scriptwindow vorhanden ist.
//Es muss dazu auf dem Webserver arcScriptWind.html vorhanden sein
//Da arcScriptWind.html jeweils pro Session neu ge�ffnet wird, kann es sein, das die ersten Ausgaben
//der Session noch nicht im Script Window auftauchen
//Die Debug Messages sind jetzt nur noch in der Scripting Version enthalten
//ACHTUNG!! Das Leerzeuchen vor der Klammer muss sein um die Funktion korrekt 
//von den Ausrufen unterscheiden zu k�nnen
function debugMsg (str,append) {
	if (!arcScripting) return;
	var obj,lf="";
	try {
	    str = getTimeStamp() + "\t" + str;

		obj=arcScriptObj;
		if (obj && obj.tagName=="TEXTAREA") {
			if (!append) lf=unescape("%0D%0A")
			if (obj.value.length>0) obj.value+=lf;
			obj.value+=str;
			if (m_PlatForm.browser=="ie") obj.doScroll('pageDown');
			if (!str && arcTop.arcScriptWind) {
				arcTop.arcScriptWind.close();
				arcTop.arcScriptWind=null;
			}
		}
		if (m_PlatForm.browser=="op") {
			opera.postError(lf + str)
		}
		else if (HasDebugConsole()) {
			console.log(lf + str);
		}
	} catch (e) {
		arcScripting=false;
	}
}

function LogException(func, ex) {
    var str = ex;
    if (ex && (typeof ex.name === 'string')) {
        str = ex.name + ": " + ex.message;
    }
    if (HasDebugConsole()) {
        console.error("Exception in " + func + " " + str);
        if (typeof console.trace === 'function') {
            console.trace();
        }
    }
    else {
        debugMsg("Exception in " + func + " " + str);
    }
}

function debugBreak(i_onlyonce) {
    var obj=null;
    if (arcScripting && arcdbgbreak) {
        alert(obj.tagName);
        if (i_onlyonce) arcdbgbreak = false;
    }
}

function dynagetkeychain() {
    var keyChain, i, row;
    if (localStorageSupported) {
        if (arcScripting === true) {
            console.log("Schl�ssel f�r Applikation: " + dynaApp);
        }

        arcKeychain.selectByApplication(dynaApp, function (transaction, result) {
            keyChain = '';
            for (i = 0; i < result.rows.length; ++i) {
                row = result.rows.item(i);
                keyChain += row.username + "\t" + row.key + "\n";
            }
            if (arcScripting === true) {
                console.log("keyChain = " + keyChain);
            }
            dynaReply(21, keyChain, false);
        });
	}
	else {
		dynaReply(21, '', false);
	}
}

function dynasendkey(username, key) {
    if (localStorageSupported) {
        if (arcScripting === true) {
            console.log("dynasendkey: " + username + " " + key);
        }

		arcKeychain.createEntry(dynaApp, username, key, 
			function() {
				dynaReply(22, '1', false);
			},
			function() {
				dynaReply(22, '0', false);
			}
		);
	}
	else {
		dynaReply(22, '0', false);
	}
}

function dropClientCredentials() {
    arcKeychain.deleteEntriesByApplication(dynaApp);
}

function hasUserCredentials() {
}

function isSvgElement(obj) {
	if (obj && obj.nearestViewportElement) {
		return true;
	}
	return false;
}

function setOpacity(obj, toexcude, val) {
	if (obj) {
		var cont = obj.getElementById("content");
		if (!cont) return;
		var idx;
		for (idx = 0; idx < cont.childNodes.length; ++idx) {
			var elem = cont.childNodes.item(idx);
			if (elem && (elem.id != toexcude) && elem.style) {
				elem.style.opacity = val;
			}
		}
	}
}

function highlight(evt, dataId) {
	var srcObj = dynagetEventSource(evt);
	setOpacity(srcObj.ownerDocument, dataId, 0.5);
}
function reverthighlight(evt, dataId) {
	var srcObj = dynagetEventSource(evt);
	setOpacity(srcObj.ownerDocument, dataId, 1);
}

function handleClick(obj, ev) {
	if (obj) {
		var container = document.getElementById(obj.id);
		dynaObjectClick(container, 2, ev);
	}
}

function dropClientCredentials() {
    arcKeychain.deleteEntriesByApplication(dynaApp);
}

function getContainerID(i_id, i_docName) {
    return "Cont" + i_id + "_" + i_docName;
}

function arcHideError(obj) {
    if (obj) {
        obj.parentNode.innerHTML = "";
    }
}

function arcGetMsgObj() {
	var msgObj = document.getElementById("arcMsgObj");

	if (!msgObj) {
		msgObj = document.createElement("div"),
		msgObj = document.body.appendChild(msgObj);
		msgObj.setAttribute("id", "arcMsgObj");
	}
	return msgObj;
}

function arcShowError(id, msg) {
	var msgObj, str;
	msgObj = arcGetMsgObj();

    str = "<div style='position: absolute;z-index: 100000;" +
         "top:40%; left:10%; width:80%; background-color: white;color: black;border: 2px outset lightgray;" +
         "font-family: arial;font-size: 12pt;text-align:center;'><div onclick='arcHideError(this.parentNode);' " +
         "style='width:16pt;border: 1px solid black; background-color:red;color:white;" +
         "position:absolute; right:0px;top:0px;cursor:pointer;font-size: 8pt;text-align:center;'>X </div><br>" +
         "<strong style=''>" + msg + "</strong><br>&nbsp;</div>";
    msgObj.innerHTML = str;
    ChangeState(false);
}

function CMotionChartViewModel(svgRoot, ko) {
	var self = this;
	self.settings = new Array(100);
	function GetValuesArrayFromString(values) {
		var Array = values.split(";");
		return Array;
	};
	function MousePosition(event) {

		var m = svgRoot.getScreenCTM();

		var p = svgRoot.createSVGPoint();

		p.x = event.clientX;
		p.y = event.clientY;
		if (isNaN(p.x)) {
			alert("wrong Point: " + "event.clientX: " + event.clientX + " event: " + event);
		}
		p = p.matrixTransform(m.inverse());
		return p;
	};
	function TouchPosition(event) {

		var m = svgRoot.getScreenCTM();

		var p = svgRoot.createSVGPoint();

		p.x = event.touches[0].clientX;
		p.y = event.touches[0].clientY;
		if (isNaN(p.x)) {
			alert("wrong Point: " + "event.touches[0].clientX: " + event.touches[0].clientX + " event: " + event);
		}
		p = p.matrixTransform(m.inverse());
		return p;
	};
	function setSliderPosition(position) {

	    var sliderElement = svgRoot.ownerDocument.getElementById("sliderHandle"),
					sliderValues,
					valueArray,
					index,
					elements,
					suspendHandleId;

	    suspendHandleId = svgRoot.suspendRedraw(1000);

	    sliderValues = GetSliderValues(sliderElement);

	    valueArray = GetValuesArrayFromString(sliderValues);

	    index = GetNearestIndexForSliderPosition(position, valueArray);

	    if (index >= 0) {

	        self.currentSetting(self.settings[index]);

	        AdjustValuesInAnimations(index);
	    }
	    else {
	        alert("wrong index: " + index + "SVGPoint: " + "x:" + position.x + "y:" + position.y);
	    }
	    svgRoot.unsuspendRedraw(suspendHandleId);
	    svgRoot.forceRedraw();
	};

	function GetSliderValues(sliderElement) {
		var sliderValues = sliderElement.getElementsByTagName("animate")[0].getAttribute("oldvalues");
		if (!sliderValues) sliderValues = sliderElement.getElementsByTagName("animate")[0].getAttribute("values");

		return sliderValues;
	};

	function GetNearestIndexForSliderPosition(position, valueArray) {
		var minx, maxx, x, index, percentage;

		minx = parseFloat(valueArray[0]);
		maxx = parseFloat(valueArray[valueArray.length - 1]);
		x = Math.max(position.x, minx);
		x = Math.min(x, maxx);

		percentage = (x - minx) / (maxx - minx);

		index = Math.round(parseFloat(valueArray.length - 1) * percentage);
		return index;
	};

	function AdjustValuesInAnimations(index) {
		var item, animationValues, attributeToAnimate,
			parent,
			oldValue, newValue,
			newValuesString, 
			animationValueArray,
			i,
			j,
			elements;

		elements = svgRoot.getElementsByTagName("animate");
		for (i = 0; i < elements.length; i++) {
			item = elements[i];
			parent = item.parentElement;

			attributeToAnimate = item.getAttribute("attributeName");

			oldValue = parent.getAttribute(attributeToAnimate);

			animationValues = GetAnimationValues(item);
			
			if (animationValues) {
				animationValueArray = GetValuesArrayFromString(animationValues);
				newValue = parseFloat(animationValueArray[index]);
				if (!isNaN(newValue)) {
					parent.setAttribute(attributeToAnimate, newValue);

					item.setAttribute("oldvalues", animationValues);

					newValuesString = GetNewValuesString(index, animationValueArray);

					item.setAttribute("values", newValuesString);
				}
				else {
					//alert("animationValueArray[index] :" + animationValueArray[index]);
				}
			}
		}
	};

	function GetAnimationValues(item) {
		var animationValues = item.getAttribute("oldvalues");
		if (!animationValues) animationValues = item.getAttribute("values");
		return animationValues;
	};

	function GetNewValuesString(index, animationValueArray) {
		var newValuesString = animationValueArray[index];
		for (j = index + 1; j < animationValueArray.length; j++) {
			newValuesString += ";";
			newValuesString += animationValueArray[j];
		}
		return newValuesString;
	};
	self.setSliderPosition = function (model, event) {
	    var position = MousePosition(event);
	    setSliderPosition(position);
	};
    self.currentCursor = document.body.style.cursor;
    self.setHandCursor = function (model, event)
    {
        self.currentCursor = event.target.style.cursor;
        event.target.style.cursor = 'pointer';
    };
    self.resetCursor = function (model, event)
    {
        event.target.style.cursor = self.currentCursor;
    };
    
	self.isRunning = ko.observable(false);
	self.isDragging = ko.observable(false);
	self.currentSetting = ko.observable(self.settings[0]);
	self.startDragSlider = function (data, event) {
		var currentSettingElement;

		this.isDragging(true);
		if (svgRoot && this.isRunning()) {
			currentSettingElement = svgRoot.ownerDocument.getElementById("currentSetting");
			this.isRunning(false);
			svgRoot.pauseAnimations();
			if (currentSettingElement) {
				currentSettingElement.setAttribute("opacity", 1);
			}
		}
	};
	self.stopDragSlider = function (data, event) {
		this.isDragging(false);

	};
	
	self.handleMouseMove = function (data, event) {
		if (this.isDragging()) {
			var p = MousePosition(event);

			setSliderPosition(p);

		}
	};

	self.touchMoveSlider = function (data, event) {
		if (this.isDragging()) {
			var p = TouchPosition(event);

			setSliderPosition(p);

		}
	};
	
	self.pauseUnpauseAnimation = function (evt) {
		var sliderAnimationElement,
				currentTime,
				currentSettingElement;

		if (svgRoot) {
			currentSettingElement = svgRoot.ownerDocument.getElementById("currentSetting");
			sliderAnimationElement = svgRoot.ownerDocument.getElementById("sliderHandle").getElementsByTagName("animate");
			
			if ((svgRoot.animationsPaused && svgRoot.animationsPaused()) || !self.isRunning()) {
				this.isRunning(true);
				sliderAnimationElement[0].setAttribute("onend", "viewModel.handleEndEvent(evt);");
				svgRoot.unpauseAnimations();
				if (currentSettingElement) {
					currentSettingElement.setAttribute("opacity", 0);
				}

			}
			else {
				this.isRunning(false);
				svgRoot.pauseAnimations();
				if (currentSettingElement) {
					currentSettingElement.setAttribute("opacity", 1);
				}
			}
		}
	};
	self.handleEndEvent = function (event) {
		this.isRunning(false);
	};
	self.setSettings = function () {
		for (var i = 0; i < arguments.length; i++) {
			self.settings[i] = arguments[i];
		}
		if (self.settings.length > 0) {
			self.currentSetting(self.settings[0]);
		}
	};
	self.setTooltips = function (recordedTooltips) {
		self.TooltipMap = recordedTooltips.ToolTipMap;
	};
}
