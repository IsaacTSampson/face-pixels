# face-pixels

## Pages 
https://isaactsampson.github.io/face-pixels/

## Notes
I have simplified the code, removing a few bells and whistles and the need for the Next.js framework to keep the code as simple as possible for the sake of this example. You can find the original implementation of this component at: https://sneaker-society-fe-108c13acc674.herokuapp.com/.

IMPORTANT - I encourage viewing this on desktop as it has not yet be optimised for mobile devices.

## Learning sources
Creating particle physics:
https://www.youtube.com/watch?v=vAJEHf92tV0&t=3170s

## How it works
The animation consists of four primary components: a 'read' canvas, a 'write' canvas, the video element, and the face-tracking AI model. After setting up an animation loop, the video element is used as the image source, and a video frame is drawn onto the read canvas. Image data is then extracted from the read canvas and stored in a pixel array, where each element represents a red, green, blue, or alpha (rgba) value. These rgba values are consecutive, with every four elements representing a single pixel.

To optimize performance, not every pixel is iterated over or stored. Instead, a gap value is defined, which skips a specified number of pixels during iteration, storing the rgba values in a particles array. The gap value also determines the particle size: a larger gap results in larger particles.

Once the particles array is created, physics data is maintained for each particle, and their positions are updated based on mouse movement. After updating, the particles are drawn onto the write canvas according to their physics properties, eventually filling the entire canvas with particles.

Next, particles that aren't covering the subject's face in the video are hidden. Using the face-api library, video data is processed in a separate loop to extract a list of bounding boxes, each represented by an x and y coordinate, along with a width and height. These boxes are stored alongside the particles array. Finally, an alpha value of 1 is assigned to particles within the bounding boxes, while an alpha value of 0 is assigned to those outside, effectively hiding particles that fall outside the face area.

