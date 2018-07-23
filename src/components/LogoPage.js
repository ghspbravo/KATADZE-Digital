import React, { Component } from 'react'
import $ from 'jquery';

import '../anim.css'

export default class LogoPage extends Component {
  componentDidMount() {
    var aboutHeight;
    var aboutAdjustment = 300;
    var aboutImageCount;
    var aboutActiveImage = 0, aboutScrollPosition = 0, aboutLastScrollPosition = 0, aboutImagePositions = [];
    var didScroll, didResize;
    var limit, carousel;
    var $body;
    var grid = false;

    $(document).ready(function ($) {

      $body = $('body');

      limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

      if ($('ul.messages').length > 0) {
        setTimeout(function () {
          if (isCanvasSupported()) {
            $('ul.messages').distorter();
          } else {
            console.log('no canvas...');
          }
        }, 500);
      }
    });

    var randInt = function (a, b) {
      return ~~(Math.random() * (b - a) + a);
    };

    function isCanvasSupported() {
      var elem = document.createElement('canvas');
      return !!(elem.getContext && elem.getContext('2d'));
    }

    (function ($) {
      'use strict';

      var Distortion = window.Distortion || {};

      Distortion = (function () {
        function Distortion(element) {
          var _ = this;

          _.$distorter = $(element);

          _.messages = [];
          $('ul.messages li').each(function () {
            _.messages.push($(this).text().trim());
          });

          _.currentMessage = 0;
          _.$window = $(window);

          var canvas = _.createCanvas();
          _.canvas = canvas.canvas;
          _.context = canvas.context;
          _.split = _.createCanvas();
          _.$canvas = $(_.canvas);
          _.$canvas.css({ 'position': 'absolute' });

          _.blur = false;
          _.RGBSplit = false;
          _.glitch = false;
          _.changeText = false;
          _.fontSize = 168;

          if (window.innerWidth >= 1024) {
            _.fontSize = 446;
          } else if (window.innerWidth >= 480 && window.innerWidth < 1024) {
            _.fontSize = 168;
          } else {
            _.fontSize = 84;
          }


          _.$distorter.append(this.$canvas);

          _.$canvas.css({
            'width': 'calc(100% - 0px)',
            'height': '334px',
            'left': 0,
            'right': 0
          });

          _.canvas.width = _.split.canvas.width = _.$canvas.width() * 2;
          _.canvas.height = _.split.canvas.height = _.$canvas.height() * 2;

          _.init();
        }

        return Distortion;

      }());

      Distortion.prototype.createCanvas = function () {
        var canvas = document.createElement('canvas');
        return {
          canvas,
          context: canvas.getContext('2d')
        }
      };

      Distortion.prototype.init = function () {
        var _ = this;

        _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
        _.autoPlay();

        _.$window.on('resize', $.proxy(_.resize, _));

        _.render();
      };

      Distortion.prototype.initialDraw = function () {
        var _ = this;
        _.context.fillStyle = '#67CAE8';
        _.context.fillRect(0, 0, _.canvas.width, _.canvas.height);
        _.context.fillStyle = '#F7FF80';
        _.context.font = '800 ' + _.fontSize + 'px BebasNeueRegular';
        _.context.textBaseline = 'middle';
        _.context.textAlign = 'center';

        _.context.fillText(_.messages[_.currentMessage].toUpperCase(), _.canvas.width / 2, _.canvas.height / 2);
      };

      Distortion.prototype.autoPlay = function () {
        var _ = this;

        _.autoPlayTimer = setInterval(_.autoPlayIterator, 2000);
      };

      Distortion.prototype.autoPlayIterator = function () {
        var _ = this, messageTo = _.currentMessage + 1;

        if (messageTo >= _.messages.length) {
          messageTo = 0;
        }

        _.changeText = true;
        _.changeMessageHandler(messageTo);

        setTimeout(function () {
          _.changeText = false;
        }, 250);
      };

      Distortion.prototype.resize = function () {
        var _ = this;

        clearTimeout(_.windowDelay);
        _.windowDelay = window.setTimeout(function () {
          if (window.innerWidth >= 1024) {
            _.fontSize = 446;
          } else if (window.innerWidth >= 480 && window.innerWidth < 1024) {
            _.fontSize = 168;
          } else {
            _.fontSize = 84;
          }

          _.canvas.width = _.split.canvas.width = _.$canvas.width() * 2;
          _.canvas.height = _.split.canvas.height = _.$canvas.height() * 2;
        }, 50);
      };

      Distortion.prototype.changeMessageHandler = function (index) {
        var _ = this;

        _.currentMessage = index;
      };

      Distortion.prototype.render = function () {
        var _ = this;

        requestAnimationFrame($.proxy(_.render, _));
        _.initialDraw();

        _.useGlitch();
        _.useBlur();
        _.useRGBSplit();

        if (_.changeText) {
          _.glitch = true;
          _.addRandomBlur(0, 25);
          _.addRandomRGBSplit(0, 25);
        } else {
          _.glitch = false;
          _.blur = false;
          _.RGBSplit = false;
        }
      };

      Distortion.prototype.useGlitch = function () {
        var _ = this;

        if (_.glitch) {
          var w = _.canvas.width;
          var h = _.canvas.height;
          for (var i = 0; i < randInt(1, 13); i++) {
            var x = Math.random() * w;
            var y = Math.random() * h;
            var spliceWidth = w - x;
            var spliceHeight = randInt(5, h / 3);
            _.context.drawImage(_.canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
            _.context.drawImage(_.canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
          }
        }
      };

      Distortion.prototype.useBlur = function () {
        var _ = this;

        if (_.blur) {
          _.split.context.drawImage(_.canvas, 0, 0);
          _.context.globalAlpha = .15;
          _.context.drawImage(_.split.canvas, -_.blur[0], 0);
          _.context.drawImage(_.split.canvas, _.blur[0], 0);
          _.context.drawImage(_.split.canvas, -_.blur[1], 0);
          _.context.drawImage(_.split.canvas, _.blur[1], 0);
          _.context.globalAlpha = 1;
        }
      };

      Distortion.prototype.useRGBSplit = function () {
        var _ = this;

        if (_.RGBSplit) {
          var w = this.canvas.width;
          var h = this.canvas.height;
          var x = Math.random() * w;
          var y = Math.random() * h;
          var spliceWidth = w - x;
          var spliceHeight = randInt(5, h / 3);

          _.split.context.drawImage(_.canvas, 0, 0);
          _.split.context.globalCompositeOperation = 'source-in';
          _.split.context.fillStyle = 'rgba(0,255,255,1)';
          _.split.context.fillRect(0, 0, _.canvas.width / 2, _.canvas.height / 2);
          _.context.drawImage(_.split.canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
          _.split.context.fillStyle = 'rgba(255,255,255,1)';
          _.split.context.fillRect(0, 0, _.canvas.width / 2, _.canvas.height / 2);
          _.context.drawImage(_.split.canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
        }
      };

      Distortion.prototype.addRandomBlur = function (min, max) {
        var _ = this;

        var random = Math.random() * (max - min) + min;
        _.blur = [random, random / 2];
      };

      Distortion.prototype.addRandomRGBSplit = function (min, max) {
        var _ = this;

        var random = Math.random() * (max - min) + min;
        _.RGBSplit = [random, random / 2];

      };

      $.fn.distorter = function () {
        var _ = this, opt = arguments[0], l = _.length, ret, i;

        for (i = 0; i < l; i++) {
          if (typeof opt == 'object' || typeof opt == 'undefined') {
            _[i].distorter = new Distortion(_[i]);
          } else {
            ret = _[i].distorter[opt].apply(_[i].distorter);
          }
          if (typeof ret != 'undefined') {
            return ret;
          }
        }

        return _;
      }
    })($);
  }

  render() {
    return (
      <div className="mainbg row">
        <div class="hero hero--home">
          <ul class="messages" id="messages">
            <li data-message="Katadze.">
              <span data-message="Katadze.">Katadze.</span>
            </li>
            <li data-message="Develop.">
              <span data-message="Develop.">Develop.</span>
            </li>
            <li data-message="Product." class="active">
              <span data-message="Product.">Product.</span>
            </li>
            <li data-message="Design.">
              <span data-message="Design.">Design.</span>
            </li>
            <li data-message="Digital.">
              <span data-message="Digital.">Digital.</span>
            </li>
            <li data-message="Experience.">
              <span data-message="Experience.">Experience.</span>
            </li>
          </ul>
        </div>
        <div className="bot-hint" style={{ fontSize: '60px', color: '#F7FF80', userSelect: 'none' }}>↓</div>
      </div>
    )
  }
}
