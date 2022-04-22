$(document).ready(function(){
		init();
		var s = skrollr.init({
			forceHeight: true,
			smoothScrolling:true
		});
		$(window).bind("scroll",function(){
	    var s=$(document).scrollTop()
	    var m= Math.floor(s/$(this).height()*100)
	    $('.trick').text(s+"px : "+m+"%");
	  }).trigger('scroll')
		$("nav ul li").click(function() {
			$(this).addClass('active').siblings().removeClass('active')
			var n=$(this).attr('data-name')
	    $([document.documentElement, document.body]).animate({
	        scrollTop: ($("#"+n).offset().top)+120
	    }, 1000);
		});
});
history.scrollRestoration = "manual"

// 추가
$(function () {

	// 지점 리스트
	var places = [
		['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'University City Recycling Drop-off Location', // place name
         '0.1', //mile
         '(314) 505-8560', //tel
         '975 Pennsylvania', // address_01
         'Saint Louis, MO 63130' // address_02
        ],
        ['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.7', //mile
         '(314) 353-8877', //tel
         'Hamilton Ave & Bartmer Ave', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.2', //mile
         '(314) 353-8877', //tel
         '1454 Rowan Ave', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #13', // place name
         '2.3', //mile
         '(314) 353-8877', //tel
         '1400 Rowan Ave', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #22', // place name
         '2.5', //mile
         '(314) 353-8877', //tel
         '1229 McCausland Avenue', // address_01
         'Saint Louis, MO 63117' // address_02
        ],
        ['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.5', //mile
         '(314) 353-8877', //tel
         '5567 Wells Ave', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63130', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.5', //mile
         '(314) 353-8877', //tel
         'Minerva Ave & Granville PI', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - North Transfer Station', // place name
         '0.6', //mile
         '(314) 353-8877', //tel
         '201 Humboldt AVE', // address_01
         'Saint Louis, MO 63147' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Baden Branch Library', // place name
         '0.7', //mile
         '(314) 353-8877', //tel
         '8448 Church Rd', // address_01
         'Saint Louis, MO 63147' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.0', //mile
         '(314) 353-8877', //tel
         'W Florissant Ave & Union Blvd', // address_01
         'Saint Louis, MO 63120' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.2', //mile
         '(314) 353-8877', //tel
         'Riverview Blvd & Orchid Ave', // address_01
         'Saint Louis, MO 63147' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #27', // place name
         '1.3', //mile
         '(314) 353-8877', //tel
         '5435 Partridge Avenue', // address_01
         'Saint Louis, MO 63120' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.5', //mile
         '(314) 353-8877', //tel
         'Union Blvd & Lillian Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.1', //mile
         '(314) 353-8877', //tel
         'N Euclid Ave & Lee Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.1', //mile
         '(314) 353-8877', //tel
         'Blair Ave & College Ave', // address_01
         'Saint Louis, MO 63107' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #26', // place name
         '2.3', //mile
         '(314) 353-8877', //tel
         '4520 Margaretta Avenue', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63147', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '2.5', //mile
         '(314) 353-8877', //tel
         '5102 Palm St', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63136', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.0', //mile
         '(314) 353-8877', //tel
         'Riverivew Blvd & Orchid Ave', // address_01
         'Saint Louis, MO 63147' // address_02
        ],
        ['63136', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Baden Branch Library', // place name
         '2.4', //mile
         '(314) 353-8877', //tel
         '8448 Church Rd', // address_01
         'Saint Louis, MO 63147' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '0.5', //mile
         '(314) 353-8877', //tel
         '4001 Goodfellow Blvd', // address_01
         'Saint Louis, MO 63120' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '0.8', //mile
         '(314) 353-8877', //tel
         'Union Blvd & Lillian Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.0', //mile
         '(314) 353-8877', //tel
         '5162 Ashland Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.0', //mile
         '(314) 353-8877', //tel
         '5102 Palm St', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.0', //mile
         '(314) 353-8877', //tel
         '3511 Norwood Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.1', //mile
         '(314) 353-8877', //tel
         'Union Blvd & St Louis Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #27', // place name
         '1.1', //mile
         '(314) 353-8877', //tel
         '5435 Partridge Avenue', // address_01
         'Saint Louis, MO 63120' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.1', //mile
         '(314) 353-8877', //tel
         'N Euclid Ave & Lee Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.3', //mile
         '(314) 353-8877', //tel
         'W Florissant Ave & Union Blvd', // address_01
         'Saint Louis, MO 63120' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.4', //mile
         '(314) 353-8877', //tel
         '4965 St Louis Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.4', //mile
         '(314) 353-8877', //tel
         '4995 Terry Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.5', //mile
         '(314) 353-8877', //tel
         '4844 Labadie Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.7', //mile
         '(314) 353-8877', //tel
         '5567 Wells Ave', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.7', //mile
         '(314) 353-8877', //tel
         'St Louis Ave & Marcus Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #13', // place name
         '1.8', //mile
         '(314) 353-8877', //tel
         '1400 Shawmut Place', // address_01
         'Saint Louis, MO 63112' // address_02
        ],
        ['63120', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.0', //mile
         '(314) 353-8877', //tel
         'N Newstead Ave & Ashland Ave', // address_01
         'Saint Louis, MO 63115' // address_02
        ],
        ['63145', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'Central Paper Stock', // place name
         '2.0', //mile
         '(314) 353-8877', //tel
         '6665 Jonas PI', // address_01
         'Saint Louis, MO 63134' // address_02
        ],
        ['63145', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'Central Paper Stock Company Inc.', // place name
         '2.0', //mile
         '(314) 353-8877', //tel
         '6665 Jonas Place', // address_01
         'Saint Louis, MO 63134' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Carter Ave & Obear Ave', // address_01
        'Saint Louis, MO 63107' // address_02
       ],
       ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Natural Brridge Ave & Parnell St', // address_01
        'Saint Louis, MO 63107' // address_02
        ],  
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        'Natural Brridge Ave & N Spring Ave', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #8', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        '1501 Salisbury Street', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.9', //mile
        '(314) 353-8877', //tel
        '19th St & Sullivan Ave', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.0', //mile
        '(314) 353-8877', //tel
        'N 13th St & Palm St', // address_01
        'Saint Louis, MO 63107' // address_02
        ],          
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.1', //mile
        '(314) 353-8877', //tel
        'N 13th St & Montgomery St', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Fire Department', // place name
        '1.3', //mile
        '(314) 353-8877', //tel
        'Elliott Ave & Sheridan Ave', // address_01
        'Saint Louis, MO 63106' // address_02
        ],   
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #17', // place name
        '1.6', //mile
        '(314) 353-8877', //tel
        '3238 Dr. Martin Luther King Blvd', // address_01
        'Saint Louis, MO 63106' // address_02
        ],   
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #26', // place name
        '1.7', //mile
        '(314) 353-8877', //tel
        '4520 Margaretta Avenue', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.8', //mile
        '(314) 353-8877', //tel
        'Delmar Blvd', // address_01
        'Saint Louis, MO 63103' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '2.1', //mile
        '(314) 353-8877', //tel
        'St Louis Ave & Marcus Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],  
        ['63121', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '2.1', //mile
        '(314) 353-8877', //tel
        '4001 Goodfellow Blvd', // address_01
        'Saint Louis, MO 63120' // address_02
        ],
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.0', //mile
        '(314) 353-8877', //tel
        'Hodiamont Ave & Plymouth Ave', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.2', //mile
        '(314) 353-8877', //tel
        '1454 Rowan Ave', // address_01
        'Saint Louis, MO 63112' // address_02
        ],    
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'University City Recycling Drop-off Location', // place name
        '1.3', //mile
        '(314) 353-8877', //tel
        '975 Pennsylvania', // address_01
        'Saint Louis, MO 63130' // address_02
        ],
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #13', // place name
        '1.4', //mile
        '(314) 353-8877', //tel
        '1400 Shawmut Place', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.6', //mile
        '(314) 353-8877', //tel
        '5567 Wells Ave', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.7', //mile
        '(314) 353-8877', //tel
        'Minerva Ave & Granvile PI', // address_01
        'Saint Louis, MO 63112' // address_02
        ], 
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.9', //mile
        '(314) 353-8877', //tel
        '4001 Goodfellow Blvd', // address_01
        'Saint Louis, MO 63120' // address_02
        ],
        ['63133', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '2.2', //mile
        '(314) 353-8877', //tel
        'Union Blvd & St Louis Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Hamilton Ave & Bartmer Ave', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        'Minerva Ave & Granville PI', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        'Hodiamont Ave & Plymouth Ave', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Cabanne Branch Library', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        '1106 Union Boulevard', // address_01
        'Saint Louis, MO 63113' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        '5567 Wells Ave', // address_01
        'Saint Louis, MO 63112' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.8', //mile
        '(314) 353-8877', //tel
        '5200 Cates Ave', // address_01
        'Saint Louis, MO 63108' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.3', //mile
        '(314) 353-8877', //tel
        'Page Blvd & Aubert Ave', // address_01
        'Saint Louis, MO 63113' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.5', //mile
        '(314) 353-8877', //tel
        'Union Blvd & St Louis Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63112', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Alley', // place name
        '1.7', //mile
        '(314) 353-8877', //tel
        '4995 Terry Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63113', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.1', //mile
        '(314) 353-8877', //tel
        '1500 N Newstead Ave', // address_01
        'Saint Louis, MO 63113' // address_02
        ],
        ['63113', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        'Page Blvd & Aubert Ave', // address_01
        'Saint Louis, MO 63113' // address_02
        ], 
        ['63113', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.2', //mile
        '(314) 353-8877', //tel
        'N Market St & N Spring Ave', // address_01
        'Saint Louis, MO 63113' // address_02
        ],
        ['63113', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Cabanne Branch Library', // place name
        '1.3', //mile
        '(314) 353-8877', //tel
        '1106 Union Boulevard', // address_01
        'Saint Louis, MO 63113' // address_02
        ],
        ['63106', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #5', // place name
        '0.3', //mile
        '(314) 353-8877', //tel
        '2123 North Market Street', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63106', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'N 22nd St & Carr St', // address_01
        'Saint Louis, MO 63106' // address_02
        ], 
        ['63106', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Fire Department', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Elliott Ave & Sheridan Ave', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63106', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        'N 13th St & Montgomery St', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63106', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.9', //mile
        '(314) 353-8877', //tel
        'N 10th St & Ofallon St', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63106', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.0', //mile
        '(314) 353-8877', //tel
        '3238 Dr.Martin Luther King Blvd', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63108', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Alley', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        'N Sarah St & McPherson Ave', // address_01
        'Saint Louis, MO 63108' // address_02
        ],
        ['63108', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.2', //mile
        '(314) 353-8877', //tel
        '5200 Cates Ave', // address_01
        'Saint Louis, MO 63108' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #26', // place name
        '0.2', //mile
        '(314) 353-8877', //tel
        '4520 Margaretta Avenue', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'N Euclid Ave & Lee Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        'N Newstead Ave & Ashland Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Alley', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        '3511 Norwood Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Alley', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        '4844 Labadie Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        'St Louis Ave & Marcus Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Alley', // place name
        '0.8', //mile
        '(314) 353-8877', //tel
        '5102 Palm St', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Alley', // place name
        '0.9', //mile
        '(314) 353-8877', //tel
        '5162 Ashland Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.1', //mile
        '(314) 353-8877', //tel
        'Union Blvd & Lillian Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63115', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.1', //mile
        '(314) 353-8877', //tel
        'Union Blvd & St Louis Ave', // address_01
        'Saint Louis, MO 63115' // address_02
        ],
        ['63103', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Delmar Blvde', // address_01
        'Saint Louis, MO 63103' // address_02
        ],
        ['63101', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #9', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        '814 LaBeaume Avenue', // address_01
        'Saint Louis, MO 63102' // address_02
        ],
        ['63101', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        'N 10th St & Ofallon St', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63101', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.1', //mile
        '(314) 353-8877', //tel
        'N 22nd St & Carr St', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63101', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.3', //mile
        '(314) 353-8877', //tel
        'Delmar Blvd', // address_01
        'Saint Louis, MO 63103' // address_02
        ],
        ['63101', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #7', // place name
        '1.5', //mile
        '(314) 353-8877', //tel
        '2600 LaSalle Street', // address_01
        'Saint Louis, MO 63104' // address_02
        ],
        ['63101', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #17', // place name
        '2.0', //mile
        '(314) 353-8877', //tel
        '3238 Dr. Martin Luther King Blvd', // address_01
        'Saint Louis, MO 63106' // address_02
        ],
        ['63102', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        '814 LaBeaume Avenue', // address_01
        'Saint Louis, MO 63102' // address_02
        ],
        ['63110', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - City of St. Louis', // place name
        '0.3', //mile
        '(314) 353-8877', //tel
        '1660 S Kingshighway Blvd', // address_01
        'Saint Louis, MO 63110' // address_02
        ],
        ['63110', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street Department', // place name
        '1.2', //mile
        '(314) 353-8877', //tel
        '1900 Hampton Ave', // address_01
        'Saint Louis, MO 63110' // address_02
        ],
        ['63105', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'University City Recycling Drop-off Location', // place name
        '1.5', //mile
        '(314) 353-8877', //tel
        '975 Pennsylvania', // address_01
        'Saint Louis, MO 63130' // address_02
        ],
        ['63105', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #22', // place name
        '1.7', //mile
        '(314) 353-8877', //tel
        '1229 McCausland Avenue', // address_01
        'Saint Louis, MO 63117' // address_02
        ],
        ['63117', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #22', // place name
        '1.7', //mile
        '(314) 353-8877', //tel
        '1229 McCausland Avenue', // address_01
        'Saint Louis, MO 63117' // address_02
        ],
        ['63139', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #35', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        '5450 Arsenal Street', // address_01
        'Saint Louis, MO 63139' // address_02
        ],
        ['63104', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #7', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        '2600 LaSalle Street', // address_01
        'Saint Louis, MO 63104' // address_02
        ],
        ['63104', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.8', //mile
        '(314) 353-8877', //tel
        '815 Ann Ave', // address_01
        'Saint Louis, MO 63104' // address_02
        ],
        ['63104', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine hoUSE #1', // place name
        '0.9', //mile
        '(314) 353-8877', //tel
        '2910 S Jefferson Ave', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.1', //mile
        '(314) 353-8877', //tel
        'California Ave & Cherokee St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.3', //mile
        '(314) 353-8877', //tel
        'Pennsylvania Ave & Potomac St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Michigan Ave & Potomac St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        'Virginia Ave & Utah St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        'Gravois Ave & Louisiana Ave', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        'Chippewa St & S Compton Ave', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #1', // place name
        '0.6', //mile
        '(314) 353-8877', //tel
        '2910 S Jefferson Ave', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.7', //mile
        '(314) 353-8877', //tel
        'Pennsylvania Ave & Keokuk St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.8', //mile
        '(314) 353-8877', //tel
        'Minnesota Ave & Osage St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - South Transfer Station', // place name
        '1.0', //mile
        '(314) 353-8877', //tel
        '4100 S 1st St', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63118', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #14', // place name
        '1.1', //mile
        '(314) 353-8877', //tel
        '3523 Magnolia Avenue', // address_01
        'Saint Louis, MO 63118' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Carter Ave & Obear Ave', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.4', //mile
        '(314) 353-8877', //tel
        'Natural Bridge Ave & Parnell St', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        'Natural Bridge Ave & N Spring St', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Engine House #8', // place name
        '0.5', //mile
        '(314) 353-8877', //tel
        '1501 Salisbury Street', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.8', //mile
        '(314) 353-8877', //tel
        'Blair Ave & Branch St', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.9', //mile
        '(314) 353-8877', //tel
        '19th St & Sullivan Ave', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '0.9', //mile
        '(314) 353-8877', //tel
        'Blair Ave & College Ave', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63107', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Street', // place name
        '1.0', //mile
        '(314) 353-8877', //tel
        'N 13th St & Palm St', // address_01
        'Saint Louis, MO 63107' // address_02
        ],
        ['63143', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of Shrewsbury Recycling Drop-off Location', // place name
        '1.2', //mile
        '(314) 645-7441', //tel
        '7309 Melbourne Ave', // address_01
        'Saint Louis, MO 63119' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #22', // place name
         '1.3', //mile
         '(314) 353-8877', //tel
         '1229 McCausland Avenue', // address_01
         'Saint Louis, MO 63117' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #31', // place name
         '1.7', //mile
         '(314) 353-8877', //tel
         '4408 Donovan Avenue', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '1.8', //mile
         '(314) 353-8877', //tel
         'Chippewa and Clifton', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.0', //mile
         '(314) 353-8877', //tel
         '1900 Hampton Ave', // address_01
         'Saint Louis, MO 63110' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #35', // place name
         '2.1', //mile
         '(314) 353-8877', //tel
         '5450 Arsenal Street', // address_01
         'Saint Louis, MO 63139' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '2.5', //mile
         '(314) 353-8877', //tel
         'Landsdowne Ave & Wherry Ave', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63143', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Willmore Park', // place name
         '2.5', //mile
         '(314) 353-8877', //tel
         'Hampton ave', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63116', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.1', //mile
         '(314) 353-8877', //tel
         'Parker Ave & Roger PI', // address_01
         'Saint Louis, MO 63116' // address_02
        ],
        ['63116', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Carondelet Park', // place name
         '1.3', //mile
         '(314) 353-8877', //tel
         '3900 Holly Hills Drive', // address_01
         'Saint Louis, MO 63116' // address_02
        ],
        ['63109', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Willmore', // place name
         '0.2', //mile
         '(314) 353-8877', //tel
         'Hampton ave', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63109', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '0.6', //mile
         '(314) 353-8877', //tel
         'Lansdowne Ave & Wherry Ave', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63109', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '0.6', //mile
         '(314) 353-8877', //tel
         'Chippewa and Clifton', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63109', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #31', // place name
         '0.6', //mile
         '(314) 353-8877', //tel
         '4408 Donovan Avenue', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63119', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Location', // place name
         '1.6', //mile
         '(314) 645-7441', //tel
         '7309 Melbourne Ave', // address_01
         'Saint Louis, MO 63119' // address_02
        ],
        ['63109', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #31', // place name
         '2.6', //mile
         '(314) 353-8877', //tel
         '4408 Donovan Avenue', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63104', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #7', // place name
         '0.6', //mile
         '(314) 353-8877', //tel
         '2600 LaSalle Street', // address_01
         'Saint Louis, MO 63104' // address_02
        ],
        ['63104', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Street', // place name
         '0.8', //mile
         '(314) 353-8877', //tel
         '815 Ann Ave', // address_01
         'Saint Louis, MO 63104' // address_02
        ],
        ['63104', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #1', // place name
         '0.9', //mile
         '(314) 353-8877', //tel
         '2910 S Jefferson Ave', // address_01
         'Saint Louis, MO 63118' // address_02
        ],
        ['63116', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Alley', // place name
         '1.1', //mile
         '(314) 353-8877', //tel
         'Parker Ave & Roger PI', // address_01
         'Saint Louis, MO 63116' // address_02
        ],
        ['63116', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Carondelet Park', // place name
         '1.3', //mile
         '(314) 353-8877', //tel
         '3900 Holly Hills Drive', // address_01
         'Saint Louis, MO 63116' // address_02
        ],
        ['63111', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Engine House #23', // place name
         '0.3', //mile
         '(314) 353-8877', //tel
         '6500 Michigan Avenue', // address_01
         'Saint Louis, MO 63111' // address_02
        ],
        ['63111', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Carondelet Park', // place name
         '1.3', //mile
         '(314) 353-8877', //tel
         '3900 Holly Hills Drive', // address_01
         'Saint Louis, MO 63116' // address_02
        ],
        ['63123', //zip code
         ['#1 Plastics', // bottle type
          '#2 Plastics',
          '#3 Plastics',
          '#4 Plastics',
          '#5 Plastics',
          '#6 Plastics',
          '#7 Plastics'],
         'City of St. Louis Recycling Drop-off Program - Willmore Park', // place name
         '2.8', //mile
         '(314) 353-8877', //tel
         'Hampton ave', // address_01
         'Saint Louis, MO 63109' // address_02
        ],
        ['63125', //zip code
        ['#1 Plastics', // bottle type
         '#2 Plastics',
         '#3 Plastics',
         '#4 Plastics',
         '#5 Plastics',
         '#6 Plastics',
         '#7 Plastics'],
        'City of St. Louis Recycling Drop-off Program - Carondelet Park', // place name
        '3.5', //mile
        '(314) 353-8877', //tel
        '3900 Holly Hills Drive', // address_01
        'Saint Louis, MO 63116' // address_02
       ]
		
	]

	// search 클릭
	$.searchClick = function(){
		$('.searchBtn').on('click',function(){
			var bottle = $('.comSelct').val();
			var zip = $('.zipInput').val();

			if(bottle == 'false'){
				alert("select 'SEARCH FOR'");
				return false;
			}

			if(zip.length < 5){
				alert("write 'ZIP CODE'");
				return false;
			}

			$('.searchInfoBox').find('.searchNum').html('"'+bottle+'"');
			$('.searchInfoBox').find('.searchZip').html('"'+zip+'"');

			var list = [];

			// zipCode
			for(var i=0; i<places.length; i++){
				var zip_target = places[i][0];
				if(zip == zip_target){
					for(var j=0; j<places[i][1].length; j++){
						var bottle_target = places[i][1][j];
						if(bottle == bottle_target){
							list.push(places[i]);
						}
					}
				}
			}
			list.sort((a,b)=>(a[3])-(b[3]));

			$('.searchRsList').html('');
			$(list).each(function(index,item){

				var plas = '';
				for(var i=0; i<item[1].length; i++){
					if(item[1][i] == bottle){
						plas += '<p class="pColor">'+item[1][i]+'</p>';
					}else{
						plas += '<p>'+item[1][i]+'</p>';
					}

				}

				var tag = '<div class="unit">'
						+'<p class="searchNum">'+(index+1)+'.</p>'
						+'	<div class="searchUnitCon">'
						+'		<div class="searchUnitHeadBox">'
						+'			<p class="searchUnitHead">'+item[2]+'</p>'
						+'			<p class="searchMiles">'+item[3]+' mi. Municipal Location</p>'
						+'		</div>'
						+'		<div class="searchUnitInfo">'
						+'			<div class="searchMeterial">'
						+'				<b class="title">'
						+'					Materials accepted :'
						+'					<b class="pColor">'+bottle+'</b>'
						+'				</b>'
						+'				<div class="list">'+plas
						+'				</div>'
						+'			</div>'
						+'			<div class="info">'
						+'				<a>'+item[4]+'</a>'
						+'				<a>'+item[5]+'</a>'
						+'				<a>'+item[6]+'</a>'
						+'			</div>'
						+'		</div>'
						+'	</div>'
						+'</div>';

				$('.searchRsList').append(tag);
			})

			$('.searchInfoBox').show();


		})
	}	

  var pageType = $('.scrollTop').data('scrl');
	// 스크롤 감지, main display none
	$(window).scroll(function(){
		var opac = $('.main').css('opacity');
		if(opac == 0){
			$('.main').hide();
		}else{
			$('.main').show();
		}

    // 스크롤 높이
    var height = $(window).scrollTop();
    console.log(height);
    // 디스플레이 높이
    var windowH = $(window).height();
    var scrollHeight;
    if(pageType == 'scroll_01'){
      // bottle클래스 offset
      scrollHeight = $('.bottle').offset().top;
      if(height>(scrollHeight-windowH)){
        $('.scrollTop').show();
      }else{
        $('.scrollTop').hide();
      }
    }else{
      scrollHeight = $('.main').height();
      if(height>scrollHeight){
        $('.scrollTop').show();
        $('.main_nav').show();
      }else{
        $('.scrollTop').hide();
        $('.main_nav').hide();
      }

    }		
    var scrollHeight_02 = $('.main').height();

	})

	// 보틀 #1~#7 버튼 클릭
	$.bottleBtnClick = function(){
		$('.bottleBtnList li').on('click',function(){
			$('.bottleBtnList li').removeClass('btnAct');
			$(this).addClass('btnAct');

			var no = $(this).data('no');
			// bottleDtlChange
			$('.bottleDtlList').find('.bottleDtlUnit').removeClass('show');
			$('.bottleDtlList').find('.bottleDtlUnit:eq('+no+')').addClass('show');

			// select change
			$('.comSelct option:eq('+(no+1)+')').prop("selected",true);
			$('.mainSelect option:eq('+(no+1)+')').prop("selected",true);

			$('.dtl').find('.dtlList').find('.bottleDtl').removeClass('show');
			$('.dtl').find('.dtlList').find('.bottleDtl:eq('+(no)+')').addClass('show');

			// 선택항목 초기화
			$('.bottleDtlList').find('.bottleDtlUnit').find('.surveyUnit').hide();
			$('.bottleDtlList').find('.bottleDtlUnit').find('.surveyUnit:eq(0)').show();
			$('.bottleDtlList').find('input[type=radio]').prop('checked',false);
			$('.bottleDtlList').find('.noAnswer').hide();
			$('.bottleDtlList').find('.bottleRs').hide();

		})
	}


	// 셀렉트 박스 변경시
	$.bottleCSelect = function(){
		$('.searchUnit .comSelct, .mainSelect').on('change',function(){
			var value = $(this).val();

			if(value != 'false'){
				var type = $(this).data('type');
	
				var idx = $(this).find('option').index($(this).find('option:selected'));
	
				// bottleBtn change
				$('.bottleBtnList').find('li').removeClass('btnAct');
				$('.bottleBtnList').find('button:eq('+(idx-1)+')').addClass('btnAct');
	
				// bottleDtlChange
				$('.bottleDtlList').find('.bottleDtlUnit').removeClass('show');
				$('.bottleDtlList').find('.bottleDtlUnit:eq('+(idx-1)+')').addClass('show');

				$('.dtl').find('.dtlList').find('.bottleDtl').removeClass('show');
				$('.dtl').find('.dtlList').find('.bottleDtl:eq('+(idx-1)+')').addClass('show');
	
				$('.comSelct option:eq('+idx+')').prop("selected",true);

				if(type == 'Y'){
					var scrollHeight = $('.bottle').offset().top;
					$('html, body').animate({scrollTop : scrollHeight},600);

				}

				// 선택항목 초기화
				$('.bottleDtlList').find('.bottleDtlUnit').find('.surveyUnit').hide();
				$('.bottleDtlList').find('.bottleDtlUnit').find('.surveyUnit:eq(0)').show();
				$('.bottleDtlList').find('input[type=radio]').prop('checked',false);
				$('.bottleDtlList').find('.noAnswer').hide();
				$('.bottleDtlList').find('.bottleRs').hide();
			}

		})
	}

	// main bottle popup open
	$.bottlePopupOpen = function(){
		$('.bottlePopBtn').on('click',function(){
			$('.bottlePop').show();
		})
	}

	// main bottle popup close
	$.bottlePopupClose = function(){
		$('.popClose').on('click',function(){
			$('.bottlePop').css('display','none');
		})
	}

	// 우측 하단 탑버튼 클릭
	$.scrollTop =function(){
		$('.scrollTop button').on('click',function(){
			$('html, body').animate({scrollTop : 0},600);
		})
	}

	// 헤더 search 버튼 클릭 
	$.scrollSearch =function(){
		$('.scroSearch').on('click',function(){
			var scrollHeight = $('.search').offset().top;
			$('html, body').animate({scrollTop : scrollHeight},600);
		})
	}

	// 보틀 선택항목 값 변경 시
	$.bottleDtlSurveyChange = function(){
		$('.bottleDtlSurvey input').on('change',function(){
			const ANIM_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			var parent = $(this).parents('.bottleDtlSurvey');
			var unit = $(this).parents('.surveyUnit');

			var idx = $(parent).find(unit).index();
			
			var values = $(this).val();

			if(values == 'N'){
				$(parent).find('.surveyUnit').each(function(index,item){
					if((index+1) > idx){
						$(item).hide();
						$(item).find('input').prop('checked',false);
						$(item).find('.noAnswer').hide();
					}
				})
				$(unit).find('.noAnswer').show();

				var target = $(unit).find('.noAnswer').find('.comImg');
				$(this).find('.noAnswer').find('.noImg').addClass('test');
				$(target).addClass('popInTop').one(ANIM_END, function () {
					setTimeout(function () {
						$(target).removeClass('popInTop');
					}, 500);
				});


			}else{
				$(unit).find('.noAnswer').hide();
				var inputs = $(this).parents('.bottleDtlSurvey').find('input:checked');
				var total = $(this).parents('.bottleDtlSurvey').find('.surveyUnit').length;

				if(total>idx){
					$(parent).find('.surveyUnit:eq('+idx+')').show();
				}

				var yes = 0;
				$(inputs).each(function(index,item){
					if($(item).val() == 'Y'){
						yes++;
					}
				})

				

				if(yes == total){
					$(parent).find('.bottleRs').show();
					var target = $(parent).find('.bottleRs').find('.img');
					$(target).addClass('popInTop').one(ANIM_END, function () {
						setTimeout(function () {
							$(target).removeClass('popInTop');
						}, 500);
					});
				}
			}





			// var inputs = $(this).parents('.bottleDtlSurvey').find('input:checked');
			// var total = $(this).parents('.bottleDtlSurvey').find('.surveyUnit').length;
			// var no = 0;
			// var yes = 0;

			// $(inputs).each(function(index,item){
			// 	if($(item).val() == 'N'){
			// 		no++;
			// 	}else if($(item).val() == 'Y'){
			// 		yes++;
			// 	}
			// })

			// var target;
			// const ANIM_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			// var cnt = Number(no)+Number(yes);
			// if(total == cnt){
			// 	$(this).parents('.bottleDtlUnit').find('.surveyRs').find('div').hide();
			// 	if(no>0){
			// 		$(this).parents('.bottleDtlUnit').find('.surveyRs').find('.surveyN').show();
			// 		target = $(this).parents('.bottleDtlUnit').find('.surveyRs').find('.surveyN').find('.icon svg');
					
			// 	}else{
			// 		$(this).parents('.bottleDtlUnit').find('.surveyRs').find('.surveyY').show();
			// 		target = $(this).parents('.bottleDtlUnit').find('.surveyRs').find('.surveyY').find('.icon svg');
					
			// 	}

			// 	$(target).addClass('popInTop').one(ANIM_END, function () {
			// 		setTimeout(function () {
			// 			$(target).removeClass('popInTop');
			// 		}, 500);
			// 	});
			// }

			// console.log('total = '+total+', cnt = '+cnt+', no+yes = '+no+yes);

		})
	}

	$.belowBtn = function(){
		$('.belowBtn, .rsSearch').on('click',function(){
			var scrollHeight = $('.search').offset().top;
			$('html, body').animate({scrollTop : scrollHeight},600);
		})
	}

	$.rsAbout = function(){
		$('.rsAbout').on('click',function(){
			var scrollHeight = $('.dtl').offset().top;
			$('html, body').animate({scrollTop : scrollHeight},600);
		})
	}

	$.rsClose = function(){
		$('.rsClose').on('click',function(){
			$(this).parents('.bottleRs').hide();
		})
	}

	// headMenu Hover
	$.headMenu = function(){
		$('.headMenu').mouseenter(function(){
			$(this).addClass('headAct');
		})
		$('.headMenu').mouseleave(function(){
			$(this).removeClass('headAct');
		})

	}

	// 메인 셀렉트박스 '?' 선택시 이벤트
	$.mainSelectDefualt = function(){
		$('.mainSelect').on('change',function(){
			var values = $(this).val();
			if(values == 'false'){
				$(this).addClass('defSelect');
			}else{
				$(this).removeClass('defSelect');
			}
		})
	}

  var deg = 0;
  $.mainImgHover = function(){
    $('.mainBottle > div > div .mainNum > div > div').mouseenter(function(){
      var _this = $(this).parents('.mainCon').find('.mainImg img');
      var degVal = 120;
      
      deg += degVal;
      $(_this).css('transform','rotate('+deg+'deg)');

    })
  }

	$.init = function(){
		$.bottleCSelect();
		$.bottleBtnClick();
		$.searchClick();
		$.bottlePopupOpen();
		$.bottlePopupClose(); 
		$.scrollTop();
		$.scrollSearch();
		$.bottleDtlSurveyChange();
		$.belowBtn();
		$.rsAbout();
		$.rsClose();
		$.headMenu();
		$.mainSelectDefualt();
    $.mainImgHover();
		
	
	}
	$.init();
})
