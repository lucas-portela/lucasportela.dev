/*
    MIT License

    Copyright (c) 2017 Kjetil Midtgarden Golid

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and) 2017 Kjetil Midtgarden Golid

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE. associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
export default (disableLoop = false) =>
  function (p) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let speed = 0.01;
    let minSpeed = 0.007;

    let color = "#6d089c";
    let rings = 40;
    let dim_init = 120;
    let dim_delta = 7;

    let chaos_init = 0.2;
    let chaos_delta = 0.12;
    let chaos_mag = 35;

    let ox = p.random(10000);
    let oy = p.random(10000);
    let oz = p.random(10000);

    p.setup = function () {
      p.createCanvas(width, height);
      p.strokeWeight(1);
      p.stroke(color);
      p.smooth();
      p.noFill();
      if (disableLoop) p.noLoop();
    };

    p.draw = function () {
      p.clear();
      p.translate(p.width / 2, p.height / 2);
      display();
    };

    function display() {
      ox -= ((p.mouseX - p.width / 2) / (p.width / 2)) * speed;
      oy -= (minSpeed, (p.mouseY - p.height / 2) / (p.height / 2)) * speed;
      oz += minSpeed;
      if (Math.abs(oy) < minSpeed) oy = minSpeed;
      for (let i = 0; i < rings; i++) {
        p.beginShape();
        for (let angle = 0; angle < 360; angle++) {
          let radian = p.radians(angle);
          let radius =
            chaos_mag *
              getNoiseWithTime(radian, chaos_delta * i + chaos_init, oz) +
            (dim_delta * i + dim_init);
          p.vertex(radius * p.cos(radian), radius * p.sin(radian));
        }
        p.endShape(p.CLOSE);
      }
    }

    function getNoiseWithTime(radian, dim, time) {
      let r = radian % p.TWO_PI;
      if (r < 0.0) {
        r += p.TWO_PI;
      }
      return p.noise(ox + p.cos(r) * dim, oy + p.sin(r) * dim, oz + time);
    }
  };
