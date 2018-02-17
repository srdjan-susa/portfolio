
  $( ".nav_btn" ).click(function( event ) {
    var target = $( event.target );
    if ( target.is( "#btn_edu" ) ) {
      $( ".wide_container" ).animate({marginLeft: "0%"}, 800);
    }
    if ( target.is( "#btn_exp" ) ) {
      $( ".wide_container" ).animate({marginLeft: "-100%"}, 800);
    }
    if ( target.is( "#btn_skl" ) ) {
      $( ".wide_container" ).animate({marginLeft: "-200%"}, 800);
    }
    if ( target.is( "#btn_prj" ) ) {
      $( ".wide_container" ).animate({marginLeft: "-300%"}, 800);
    }
  });
