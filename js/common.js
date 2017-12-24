$(document).ready(function() {

	function fullHeight(){
		var winHeight = $(window).height();
		$('.start_s').height(winHeight);
	};
	fullHeight();
	$(window).resize(function(){
		fullHeight();
	});

	var images_1 = document.querySelectorAll('.ready-works .slides .slideitem-1 img'),
		images_2 = document.querySelectorAll('.ready-works .slides .slideitem-2 img'),
		images_3 = document.querySelectorAll('.ready-works .slides .slideitem-3 img'),
		images_4 = document.querySelectorAll('.ready-works .slides .slideitem-4 img'),
		images_5 = document.querySelectorAll('.ready-works .slides .slideitem-5 img');
    			
    var slider = new Slider(images_1, images_2);
    
    document.querySelector('.ready-works .slides .prevButton').onclick = function(){
        slider.prev();
    }
 
    document.querySelector('.ready-works .slides .nextButton').onclick = function(){
        slider.next();
    }

    function Slider(images_1, images_2) {
    this.images_1 = images_1;
    this.images_2 = images_2;
    this.images_3 = images_3;
    this.images_4 = images_4;
    this.images_5 = images_5;
    var one = 0, two = 1, three = 2, four = 3, five = 4;

    this.prev = function () {
        this.images_1[one].classList.remove('showed');
        this.images_2[two].classList.remove('showed');
        this.images_3[three].classList.remove('showed');
        this.images_4[four].classList.remove('showed');
        this.images_5[five].classList.remove('showed');
        one--; two--; three--; four--; five--;
        one < 0 ? one = this.images_1.length - 1 : one;
        two < 0 ? two = this.images_2.length - 1 : two;  
        three < 0 ? three = this.images_3.length - 1 : three;  
        four < 0 ? four = this.images_4.length - 1 : four;  
        five < 0 ? five = this.images_5.length - 1 : five;   
        this.images_1[one].classList.add('showed');
        this.images_2[two].classList.add('showed');
        this.images_3[three].classList.add('showed');
        this.images_4[four].classList.add('showed');
        this.images_5[five].classList.add('showed');
    }

    this.next = function () {
        this.images_1[one].classList.remove('showed');
        this.images_2[two].classList.remove('showed');
        this.images_3[three].classList.remove('showed');
        this.images_4[four].classList.remove('showed');
        this.images_5[five].classList.remove('showed');
        one++; two++; three++; four++; five++;
        one >= this.images_1.length ? one = 0 : one;
        two >= this.images_2.length ? two = 0 : two;
        three >= this.images_3.length ? three = 0 : three;
        four >= this.images_4.length ? four = 0 : four;
        five >= this.images_5.length ? five = 0 : five;
        this.images_1[one].classList.add('showed');
        this.images_2[two].classList.add('showed');
        this.images_3[three].classList.add('showed');
        this.images_4[four].classList.add('showed');
        this.images_5[five].classList.add('showed');
    }
}
	
});