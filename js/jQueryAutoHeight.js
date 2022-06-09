/*
 * jquery-auto-height.js
 *
 * Copyright (c) 2010 Tomohiro Okuwaki (http://www.tinybeans.net/blog/)
 * Licensed under MIT Lisence:
 * http://www.opensource.org/licenses/mit-license.php
 * http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license
 *
 * Since:   2010-04-19
 * Update:  2013-08-16
 * version: 0.04
 * Comment:
 *
 * jQuery 1.2 <-> 1.10.2
 *
 */

(function($) {
	$.fn.autoHeight = function(options) {
		var op = $.extend({

			column: 0,
			clear: 0,
			height: 'minHeight',
			reset: '',
			descend: function descend(a, b) { return b - a; }

		}, options || {}); // optionsÃ£ÂÂ«Ã¥â‚¬Â¤Ã£ÂÅ’Ã£Ââ€šÃ£â€šÅ’Ã£ÂÂ°Ã¤Â¸Å Ã¦â€ºÂ¸Ã£ÂÂÃ£Ââ„¢Ã£â€šâ€¹

		var self = $(this);
		var n = 0,
			hMax,
			hList = new Array(),
			hListLine = new Array();
		hListLine[n] = 0;

		// Ã¨Â¦ÂÃ§Â´ Ã£ÂÂ®Ã©Â«ËœÃ£Ââ€¢Ã£â€šâ€™Ã¥Ââ€“Ã¥Â¾â€”
		self.each(function(i) {
			if (op.reset == 'reset') {
				$(this).removeAttr('style');
			}
			var h = $(this).height();
			hList[i] = h;
			if (op.column > 1) {
				// op.columnÃ£Ââ€Ã£ÂÂ¨Ã£ÂÂ®Ã¦Å“â‚¬Ã¥Â¤Â§Ã¥â‚¬Â¤Ã£â€šâ€™Ã¦ Â¼Ã§Â´ÂÃ£Ââ€”Ã£ÂÂ¦Ã£Ââ€žÃ£ÂÂ
				if (h > hListLine[n]) {
					hListLine[n] = h;
				}
				if ((i > 0) && (((i + 1) % op.column) == 0)) {
					n++;
					hListLine[n] = 0;
				};
			}
		});

		// Ã¥Ââ€“Ã¥Â¾â€”Ã£Ââ€”Ã£ÂÅ¸Ã©Â«ËœÃ£Ââ€¢Ã£ÂÂ®Ã¦â€¢Â°Ã¥â‚¬Â¤Ã£â€šâ€™Ã©â„¢ÂÃ© â€ Ã£ÂÂ«Ã¤Â¸Â¦Ã£ÂÂ¹Ã¦â€ºÂ¿Ã£ÂË†
		hList = hList.sort(op.descend);
		hMax = hList[0];

		// Ã©Â«ËœÃ£Ââ€¢Ã£ÂÂ®Ã¦Å“â‚¬Ã¥Â¤Â§Ã¥â‚¬Â¤Ã£â€šâ€™Ã¨Â¦ÂÃ§Â´ Ã£ÂÂ«Ã©ÂÂ©Ã§â€Â¨
		var ie6 = typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined";
		if (op.column > 1) {
			for (var j = 0; j < hListLine.length; j++) {
				for (var k = 0; k < op.column; k++) {
					if (ie6) {
						self.eq(j * op.column + k).height(hListLine[j]);
					} else {
						self.eq(j * op.column + k).css(op.height, hListLine[j]);
					}
					if (k == 0 && op.clear != 0) {
						self.eq(j * op.column + k).css('clear', 'both');
					}
				}
			}
		} else {
			if (ie6) {
				self.height(hMax);
			} else {
				self.css(op.height, hMax);
			}
		}
	};
})(jQuery);