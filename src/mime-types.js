/*
 * https://github.com/mwhitrock/mime-types
 * Copyright (c) 2015 ; Licensed MIT
 */

/**
 * Module dependencies.
 * @private
 */

var db = require('mime-db')
var extname = require('path').extname

/**
 * Module variables.
 * @private
 */

var extractTypeRegExp = /^\s*([^;\s]*)(?:;|\s|$)/
var textTypeRegExp = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

angular.module('mime-types', [])
    .factory('MimeTypeService', function () {
        return {
            lookup: function(path) {
                if (!path || typeof path !== 'string') {
                    return false;
                }

                // get the extension ("ext" or ".ext" or full path)
                var extension = extname('x.' + path)
                    .toLowerCase()
                    .substr(1)

                if (!extension) {
                    return false
                }

                return exports.types[extension] || false
            }
        };
    });