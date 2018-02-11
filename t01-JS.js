
  $( ".nav_btn" ).click(function( event ) {
    var target = $( event.target );
    if ( target.is( "#btn_edu" ) ) {
      $( ".prezentacioni" ).animate({top: "0"}, 800);
    }
    if ( target.is( "#btn_exp" ) ) {
      $( ".prezentacioni" ).animate({top: "-90vh"}, 800);
    }
    if ( target.is( "#btn_skl" ) ) {
      $( ".prezentacioni" ).animate({top: "-180vh"}, 800);
    }
    if ( target.is( "#btn_prj" ) ) {
      $( ".prezentacioni" ).animate({top: "-270vh"}, 800);
    }
  });
