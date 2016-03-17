(function($){
  $(function(){

    $('.button-collapse').sideNav({
         menuWidth: 300, // Default is 240
         closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
       }
     );    $('.parallax').parallax();

       // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
       $('.modal-trigger').leanModal();


  }); // end of document ready
})(jQuery); // end of jQuery name space
