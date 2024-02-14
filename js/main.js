 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// function validate(){

//     var name = document.getElementById("name");
//     var subject = document.getElementById("subject");
//     var email = document.getElementById("email");
//     var message = document.getElementById("message");
//     var error_message = document.getElementById("error_message");
// 	error_message.style.padding = "10px";
    

//     // if(name.value.trim()==""|| subject.value.trim()==""||email.value.trim()==""||message.value.trim()==""){
//     //     alert("All fields are mandatory");
// 	// 	return false;
//     // }else if(name.value.length<5){
// 	// 	alert("name is  too short");
// 	// 	return false;

// 	// }
// 	// else{
// 	// 	return true;
// 	// }
// 	var text;
// 	
// 	// var atPos = email.indexOf("@");
//   	// var dotPos = email.lastIndexOf(".");
// 	if (!alphanumeric.test(name.value)){
// 		text = "Username must be between 3 and 20 characters long";
//       	error_message.innerHTML = text;
// 		return false;
// 	}

// 	else if(subject.value.length < 10){
// 		text = "Subject contains atleat 10 characters";
// 		error_message.innerHTML = text;
// 		return false;
// 	  }
// 	else if(email.value.indexOf("@")){
// 		text="Invalid email format";
// 		error_message.innerHTML=text;
// 		return true;
// 	  }
// 	else if(message.value.length <= 140){
// 		text = "Please Enter More Than 140 Characters";
// 		error_message.innerHTML = text;
// 		return false;
// 	  }

// 	  alert("Form submitted successfully");
	
	  

// }
  

// document.getElementById("myForm").addEventListener("submit", function(event) {
// 	event.preventDefault(); // Prevent form submission
// 	var name=document.getElementById("nameError").value;
// 	// Validate name
// 	var check=/^[a-zA-Z0-9 ]+$/; 
// 	var nameInput = document.getElementById("name").value;
// 	if (nameInput.trim() == "") {
// 		document.getElementById("nameError").innerText = "Please enter your name";
// 		return;
// 	}else if(!check.test(nameInput)) {
// 		document.getElementById("nameError").innerText = "Please enter a valid alphanumeric name";
// 		return;
// 	}
// 	else {
// 		document.getElementById("nameError").innerText = "";
		
// 	}
	
// 	// Validate email
// 	var emailInput = document.getElementById("email").value;
// 	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 	if (!emailPattern.test(emailInput)) {
// 		document.getElementById("emailError").innerText = "Please enter a valid email address";
// 		return;
// 	} else {
// 		document.getElementById("emailError").innerText = "";
// 	}
// 	//validate subject
// 	var messageInput = document.getElementById("subject").value;
// 	if (messageInput.trim() == "") {
// 		document.getElementById("subjectError").innerText = "Please enter a subject";
// 		return;
// 	} else {
// 		document.getElementById("subjectError").innerText = "";
// 	}
// 	// Validate message
// 	var messageInput = document.getElementById("message").value;
// 	if (messageInput.trim() == "") {
// 		document.getElementById("messageError").innerText = "Please enter a message";
// 		return;
// 	} else {
// 		document.getElementById("messageError").innerText = "";
// 	}
	
// 	// If all fields are valid, show popup
// 	alert("Form submitted successfully!");
// 	document.getElementById("name").value="";
// 	document.getElementById("email").value="";
// 	document.getElementById("subject").value="";
// 	document.getElementById("message").value="";
// 	// document.getElementById("name").value=""

// 	// You can replace the alert with a custom popup/modal
// });

function validateForm(){
	var messgae=document.querySelector(".error-name");
	var messgaemail=document.querySelector(".error-email");
	var messagesub=document.querySelector(".error-subject");
	var messagecontent=document.querySelector(".error-messgae");
  
	var name = document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var subject=document.getElementById("subject").value;
	var message=document.getElementById("message").value;
  
  
	var check=/^[a-zA-Z0-9 ]+$/; 
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (name == "") {
		messgae.innerText="Please provide username"
		
		return false;
		
	
	}else if(name.length<3){
		messgae.innerText="Please maintain username having minimum 3 characters"
		// name.focus();
		return false;
	
	
	}else if(!check.test(name)){
	  messgae.innerText="Please provide alphanumeric characters"
	  return false;
	
	}else{
	  document.querySelector('.error').innerText = '';
	}
	
	 if(email==""){
	  messgaemail.innerText="Please provide email";
	  return false;
	
	}else if(!emailPattern.test(email)){
	  messgaemail.innerText="Please provide valid user format";
	  return false;
	
	}else{
	  document.querySelector('.error-email').innerText = '';
	}
	 if(subject==""){
	  messagesub.innerText="Please provide subject";
	  return false;
	
	}else{
	  document.querySelector('.error-subject').innerText = '';
	}
	 if(message ==""){
	  messagecontent.innerText="Please provide message";
	  return false;
	}
	else{
	  document.querySelector('.error-messgae').innerText = '';
	}
	
	  return true;
	}