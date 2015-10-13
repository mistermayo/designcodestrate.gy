
            $(document).ready(function() {
            $('#success').on('submit', function(evt) {
                  evt.preventDefault();
                  setTimeout(function() {
                       window.location.reload();
                  },0);
                  this.submit();
            });
        });

        
