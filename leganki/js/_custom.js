/**
 * jQuery Spincrement plugin
 *
 * Plugin structure based on: http://blog.jeremymartin.name/2008/02/building-your-first-jquery-plugin-that.html
 * Leveraging of jQuery animate() based on: http://www.bennadel.com/blog/2007-Using-jQuery-s-animate-Method-To-Power-Easing-Based-Iteration.htm
 * Easing function from jQuery Easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
 * Thousands separator code: http://www.webmasterworld.com/forum91/8.htm
 *
 * @author John J. Camilleri
 * @version 1.2
 */

/* global jQuery */

(function ($) {
  // Custom easing function
  $.extend($.easing, {
    // This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
    spincrementEasing: function (x, t, b, c, d) {
      return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    }
  })

  // Spincrement function
  $.fn.spincrement = function (opts) {
    // Default values
    var defaults = {
      from: 0,
      to: null,
      decimalPlaces: null,
      decimalPoint: '.',
      thousandSeparator: ',',
      duration: 1000, // ms; TOTAL length animation
      leeway: 50, // percent of duraion
      easing: 'spincrementEasing',
      fade: true,
      complete: null
    }
    var options = $.extend(defaults, opts)

    // Function for formatting number
    var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/)
    function format (num, dp) {
      num = num.toFixed(dp) // converts to string!

      // Non "." decimal point
      if ((dp > 0) && (options.decimalPoint !== '.')) {
        num = num.replace('.', options.decimalPoint)
      }

      // Thousands separator
      if (options.thousandSeparator) {
        while (re_thouSep.test(num)) {
          num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2')
        }
      }
      return num
    }

    // Apply to each matching item
    return this.each(function () {
      // Get handle on current obj
      var obj = $(this)

      // Set params FOR THIS ELEM
      var from = options.from
      if (obj.attr('data-from')) {
        from = parseFloat(obj.attr('data-from'))
      }

      var to
      if (obj.attr('data-to')) {
        to = parseFloat(obj.attr('data-to'))
      } else if (options.to !== null) {
        to = options.to
      } else {
        var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator
        var re = new RegExp(ts, 'g')
        to = parseFloat(obj.text().replace(re, ''))
      }

      var duration = options.duration
      if (options.leeway) {
        // If leeway is set, randomise duration a little
        duration += Math.round(options.duration * ((Math.random() * 2) - 1) * options.leeway / 100)
      }

      var dp
      if (obj.attr('data-dp')) {
        dp = parseInt(obj.attr('data-dp'), 10)
      } else if (options.decimalPlaces !== null) {
        dp = options.decimalPlaces
      } else {
        var ix = obj.text().indexOf(options.decimalPoint)
        dp = (ix > -1) ? obj.text().length - (ix + 1) : 0
      }

      // Start
      obj.css('counter', from)
      if (options.fade) obj.css('opacity', 0)
      obj.animate(
        {
          counter: to,
          opacity: 1
        },
        {
          easing: options.easing,
          duration: duration,

          // Invoke the callback for each step.
          step: function (progress) {
            obj.html(format(progress * to, dp))
          },
          complete: function () {
            // Cleanup
            obj.css('counter', null)
            obj.html(format(to, dp))

            // user's callback
            if (options.complete) {
              options.complete(obj)
            }
          }
        }
      )
    })
  }
})(jQuery)

$(function(){

// $('.count').animate({
//   duration: 4000,
//   easing: 'swing',
//   step:function(now){
//     $(this).text(Math.ceil(now));
//   }
// });
if(localStorage.getItem('num')){
 var num = localStorage.getItem('num');
}
else{
  var num = 4801321;
}


$(".count").spincrement({
  from:0,
  to:num,
  thousandSeparator: ' ',
  duration:2000,
});

$(".count0").spincrement({
  from:0,
  to:30,
  thousandSeparator: ' ',
  duration:3000,
});
$(".count1").spincrement({
  from:0,
  to:20,
  thousandSeparator: ' ',
  duration:3000,
});

function currencyFormat(num) {
 return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
};


function counter(){
$(".count").text(currencyFormat(num++));

};

let timerId = setInterval(() => counter(), 2500);



window.addEventListener("unload", function() {
  localStorage.setItem('num', num);
});


  
 $('.s62').hover(function () {
        $(this).attr('src', 'img/hover/s62.jpg');
    }, function () {
        $(this).attr('src', 'img/s62.png');
    });  

 $('.s82').hover(function () {
        $(this).attr('src', 'img/hover/s82.jpg');
    }, function () {
        $(this).attr('src', 'img/s82.png');
    }); 

 $('.s84').hover(function () {
        $(this).attr('src', 'img/hover/s84.jpg');
    }, function () {
        $(this).attr('src', 'img/s84.png');
    }); 

 $('.s91').hover(function () {
        $(this).attr('src', 'img/hover/s91.jpg');
    }, function () {
        $(this).attr('src', 'img/s91.png');
    }); 
 $('.s93').hover(function () {
        $(this).attr('src', 'img/hover/s93.jpg');
    }, function () {
        $(this).attr('src', 'img/s93.png');
    });  
 $('.s111').hover(function () {
        $(this).attr('src', 'img/hover/s111.jpg');
    }, function () {
        $(this).attr('src', 'img/s111.png');
    });

   $('.s113').hover(function () {
        $(this).attr('src', 'img/hover/s113.jpg');
    }, function () {
        $(this).attr('src', 'img/s113.png');
    });   

     $('.s115').hover(function () {
        $(this).attr('src', 'img/hover/s115.jpg');
    }, function () {
        $(this).attr('src', 'img/s115.png');
    }); 


});