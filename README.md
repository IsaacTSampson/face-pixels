# face-pixels

## Notes
I have simplified the code, removing a few bells and whistles and the need for the Next.js framework to keep the code as simple as possible for the sake of this example.

## Learning sources
Creating particle physics:
https://www.youtube.com/watch?v=vAJEHf92tV0&t=3170s

## How it works
The animation consists of four primary components: a 'read' canvas, a 'write' canvas, the video element, and the face-tracking AI model. The video element serves as the data entry point. After setting up an animation loop, we use the video element as the image source and draw a video frame onto the read canvas. We then extract the image data from the read canvas and store it in a pixel array, where each element represents a red, green, blue, or alpha (rgba) value. The rgba values are consecutive, so every four elements represent a single pixel.

To optimize performance, we don't iterate over or store every pixel. Instead, we define a gap value that effectively skips a specified number of pixels during iteration and stores the rgba values in a particles array. The gap value also determines the pixelated effect of the particles: the larger the gap, the larger the pixel size for each particle.

Now that we have our particles array, we can maintain physics data for each particle and update their positions based on mouse movement. After updating the particles, we draw them to the write canvas according to their current physics properties. At this point, the entire write canvas is filled with particles.

Next, we need to hide particles that aren't covering the subject's face in the video. In a separate loop, we use the face-api library to process the video data and extract a list of bounding boxes (each represented by four x, y coordinates). These boxes are stored alongside our particles array. Finally, we assign an alpha value of 1 to particles that fall within the bounding boxes and an alpha value of 0 to those that don't, effectively hiding the particles outside the face. 

