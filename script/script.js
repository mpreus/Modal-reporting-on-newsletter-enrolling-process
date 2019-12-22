$(document).ready(function() {
	
/* Newsletter e-mail validation and notifications */
	$("input.newsletter-button").on("click", function(e) {
		e.preventDefault();
		
		var emailAddress = $("input.newsletter-email");
		
		if ( emailAddress.val() === "" || emailAddress.val().indexOf("@") <= 0 || emailAddress.val().length <= 6)  {
			Swal.fire({
				type: 'error',
				title: 'Oops...',
				text: 'Coś poszło nie tak!',
				html: '<span>Wpisz poprawny adres e-mail</span>',
				footer: 'Jeśli problem będzie się powtarzał, skontaktuj się z nami',
				confirmButtonColor: '#f27474',
				timer: 6000
			});
			$("input.newsletter-email").val("");
		}
		else {
			Swal.fire({
				title: 'To już prawie koniec!',
				imageUrl: './images/progress-bar.png',
  				imageWidth: 400,
  				imageHeight: 70,
  				imageAlt: 'Progress bar',
				html: '<span>Na Twój adres e-mail został wysłany link aktywacyjny! Kliknij w niego, aby potwierdzić subskrypcję i odebrać rabat na pierwsze zakupy.</span><br/><br/><span><b>Przejdź do swojej skrzynki pocztowej:</b></span>',

				footer: 'First issue in your mailbox soon',
				confirmButtonColor: '#666',
				confirmButtonText: '╳',
				buttonsStyling: 'border:"none"',
				width: 800,
				footer: '<span><a href="https://profil.wp.pl/login.html?zaloguj=poczta">WP poczta</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://mail.google.com/">G-MAIL</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://poczta.o2.pl/zaloguj/">O2 poczta</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://poczta.interia.pl/">Interia poczta</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://poczta.onet.pl">Onet poczta</a></span>'
			});
			$("input.newsletter-email").val("");
		}
	}); 
});