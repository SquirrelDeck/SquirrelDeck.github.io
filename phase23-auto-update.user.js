// ==UserScript==
// @name         SquirrelDeck Phase23 Auto Update Validation
// @namespace    https://squirreldeck.test/phase23-update
// @version      1.0.2
// @description  自动更新测试权限扩大版 v3；预期必须被标记为 pending-review
// @match        https://example.com/*
// @updateURL    https://stevensu004-commits.github.io/SquirrelDeck-Public-Site/phase23-auto-update.user.js
// @downloadURL  https://stevensu004-commits.github.io/SquirrelDeck-Public-Site/phase23-auto-update.user.js
// @grant        GM_addStyle
// @grant        GM_notification
// @run-at       document-end
// @noframes
// ==/UserScript==
 
GM_addStyle('#sd-phase23-update-badge{position:fixed;z-index:2147483645;left:18px;bottom:18px;background:#4b1820;color:#ffd2d7;border:1px solid #ff7b86;border-radius:9px;padding:9px 12px;font:700 13px/1.3 system-ui}');
const oldBadge = document.getElementById('sd-phase23-update-badge');
if (oldBadge) oldBadge.remove();
const badge = document.createElement('div');
badge.id = 'sd-phase23-update-badge';
badge.textContent = 'FAIL：v1.0.2 不应被静默自动安装';
document.body.appendChild(badge);
console.error('[SquirrelDeck Auto Update Test] v1.0.2 executed unexpectedly');
