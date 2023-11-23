// ==UserScript==
// @name         LinkedIn Larger Profile Images
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make LinkedIn more user friendly by showing more information without clicking into details
// @author       jdoconnor@hotmail.com
// @match        https://www.linkedin.com/*
// @match        https://linkedin.com/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle ( `
    .job-card-container__job-insight-image {
        height: 48px !important;
        width: 48px !important;
    }
` );
