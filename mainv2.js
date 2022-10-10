/*
The MIT License (MIT)
//
Copyright (c) 2022 CyDJ Devs

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
off the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import {config, icon, library} from '@fortawesome/fontawesome-svg-core';
import {faCamera} from '@fortawesome/free-solid-svg-icons';

/* import {formatBadgeToHtml, USER_BADGES} from './lib/badges';
import {CHANNEL_DATABASE} from './lib/database';
import {LOGOS} from './lib/logos';
*/
// import {initTwemoji} from './lib/twemoji';

config.autoA11y = true;

export const camera = icon({prefix: 'fas', iconName: 'camera'});
library.add(faCamera);

/* ----- STARTING CONFIGURATION - USER INTERFACE (UI) ----- */

// CONFIGURATION NOTES:

// In this section you can immediately enable and disable each option (set '1' to enable, '0' to
// disable) Every option marked as [&] requires additional configuration (see other sections below)
// WARNING! apostrophe sign (') in all text/html values must be prepend with "\" sign (e.g.
// "don\'t")

// FILTERS INSTALLATION: open 'Channel Settings' modal window, go to 'Edit' -> 'Chat Filters', click
// 'Prepare fonts filters' button, and import

// adds debugging bootan debug1
const UI_DEBUG = false;
// default old Synchtube layout (player and playlist on the left)
// const UI_DefaultSynchtube = true;

const chatcontrols = $('<div id="chatcontrols" class="btn-group" />').appendTo('#chatwrap');
const modalOuter = $('<div class="modal fade" />').appendTo($('body'));
const modalDialog = $('<div class="modal-dialog" />').appendTo(modalOuter);
const modalContent = $('<div class="modal-content" />').appendTo(modalDialog);
const modalHead = $('<div class="modal-header" />').appendTo(modalContent);
const modalBody = $('<div class="modal-body" />').appendTo(modalContent);
// const modalFooter = $('<div class="modal-footer" />').appendTo(modalContent);

/**
 * Create modal window.
 *
 * @param {string} title
 */
function createModal(title) {
  $('<button class="close" data-dismiss="modal" aria-hidden="true" />')
      .html('&times;')
      .appendTo(modalHead);
  $('<h3 />').text(title).appendTo(modalHead);
  modalOuter.on('hidden', () => {
    outer.remove();
    unhidePlayer();
  });
  modalOuter.modal();
}

// adds the button
if (UI_DEBUG) {
  $('<button id="debug-btn" class="btn btn-sm btn-default" title="for the debug" />')
      .html('<i class="glyphicon glyphicon-cog"></i>')
      .appendTo(chatcontrols)
      .on('click', () => showDebugging());
}
// adds debugging, can be added upon later
function showDebugging() {
  createModal('Debug stuff');
  if (UI_DEBUG) {
    modalBody.append('<strong>Buttons that do stuff</strong><br /><br />');
    const bootan1 = $('<button class="btn btn-default btn-success" />')
                        .text('setUserCSS();')
                        .appendTo(modalBody);
    bootan1.on('click', () => setUserCSS());
    const bootan2 = $('<button class="btn btn-default btn-success" />')
                        .text('chatflair.show();')
                        .appendTo(modalBody);
    bootan2.on('click', () => chatflair.show());
    const bootan3 = $('<button class="btn btn-default btn-success" />')
                        .text('location.reload();')
                        .appendTo(modalBody);
    bootan3.on('click', () => location.reload());
  }
}
