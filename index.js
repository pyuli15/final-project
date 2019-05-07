      const canvas = document.getElementById('drawing');
      const context = canvas.getContext('2d');

      let width;
      let height;

      function setup() {
        width = window.innerWidth;
        height = window.innerHeight;

        // set the CSS display size
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        // set the number of display pixels, scaled for device resolution
        var scale = window.devicePixelRatio;
        canvas.width = width * scale;
        canvas.height = height * scale;

        // normalize the coordinate system
        context.scale(scale, scale);
      }

      function draw() {
        context.fillStyle = 'black';
        context.fillRect(0, 0, width, height);

        // draw text to the canvas
        context.font = '44px Zodiac';
        context.textBaseline = 'middle';
        // context.textAlign = 'center';
        context.strokeStyle = 'white';
        context.strokeText('Who Are You Among The Stars?', width/2, height/2);
      }
      
      setup();

      draw();
      
      window.addEventListener('resize', function() {
        setup();
        draw(); // not necessary for animated drawings
      });
    

