## Pipe Game!

# Summary
A classic game based around rearranging pipes as fast as you can before the timer ends! Your goal
is to help the water go from the starting pipe all the way to the end while making sure there are NO leaks. I picked
this game because I wanted to focus on a couple of JavaScript functionalities that I'm currently working on and didn't
want to make something too complicated. I play quite a few games, but I love playing this kind of game whenever it pops
up as sort of a mini-game.

# Game Rules:
- The game starts as a jumbled grid of different pipes; some are elbow pipes and some are straight pipes. 
- Water is being fed in through one side of the screen, and the user needs to help it reach it's goal at another part of the screen. - The player must click on different cells around the grid where these pipes are placed to turn them into position to help the liquid   reach it's destination. 
- Be careful though, there's a timer until this water can't be held back anymore! If you don't have all your pipes in place, it'll leak out and it's game over! 
- A keen eye will be able to tell which pieces are part of the solution and which ones are extraneous and don't need to be touched.   

**Time to give Mario a run for this money as top plumber in town!**

# Wireframes:

Main grid with shuffled pipes and a hidden correct solution
![](./assets/wireframe1.jpg)

Pipe solution and hidden number functionality
![](./assets/wireframe2.jpg)

Main screen concept
![](./assets/wireframe3.jpg)

# User Stories: 

1. When the web page opens, I see the game window with the title at the top: Pipe Game! In the middle of the screen is a large button that says "Start Game". 
2. At the bottom of the screen is text explaining the simple rules: Arrange the pipes to get the water from start to finish before the time runs out!
3. When I click Start, I see Round 1 pop in the middle of the screen as it counts down from 3 to 0.
4. I see a large grid with a bunch of shuffled pipes and a position on the bottom-left corner of the screen that says "Start" and another position at the opposite side of the screen that says "Finish"
5. I see a timer at the top slowly going down as the start position blinks, letting me know I need to start making a correct path before the liquid bursts through
6. I click a bunch of different pipes trying to make a closed circuit for the liquid to go through.
7. I finally make a closed loop and right away the water comes out and makes its way along my pipe path all the way to the finish, showing me I won the round!
8. I made my through 9 more rounds as the time crunch became progressively harder, but finally beat all 10.
9. When I failed a round, I was forced to start over! 

# MVP:

- Making a flex-box/grid to hold a variety of possible numbers, denoting pipe states, making it clickable as well to cycle through certain numbers
- Making a start button to turn the game-on to true
- Come up with a fixed solution so that only one pathway is correct, but still make all of the pipe states show up in random states.
- Choosing a random grid cell on the sides of the grid to become the start point randomly, then making that generate the finish point on the opposite side of the grid
- We can just use numbers instead of pipes for our bare functionality and have them represent different pipe rotations.
  - Therefore, the correct solution is equal to a certain group of cells being certain numbers (elbow pipes can have 4 states,     straight pipes can have 2)
  - Display a win text box once the numbers entered/clicked-through matches the grid solution

# Stretch Goals:

- Making a timer, also making it go faster each round
- Adding 9 more fixed solutions for a total of 10 rounds
- put pictures on the grid to show the elbow/straight pipes as well as the start/finish areas
- make a home screen to set my start button and directions on
- Make a reset button
- include an animation effect to show pipes turning blue as they fill with water whether you win or lose
- perhaps some sound effects which click when you turn a pipe and possibly a bgm
