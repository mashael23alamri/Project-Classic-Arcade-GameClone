# Classic-Arcade-GameClone-Udacity

The game is an enemy player,
Enemies change their speed randomly,
The game contains sores and timing.
----------------------------------------------------

# How to start the game?
1-You should move the player with the arrows to reach the water without hitting the enemies.

2-The player has 2 diamonds.

3-You must collect 10 diamonds by accessing water without collision.

4-If 10 diamonds are assembled without a collision the player wins.

5-In case of collision with numbers, diamonds are reduced by one.

6-If the number of diamonds becomes 0, the player loses.

----------------------------------------------------
# The most important idea in the game is the collision
Phitagors theory :)
```javascript
function getDistance(object1 , object2) {
  //Define two variables..
  //Calculate the difference between the x-axis of the first object and the second object..
  //References : https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas..
  let a = object1.x - object2.x;
  let b = object1.y - object2.y;

  return Math.sqrt(a*a + b*b);
}
```
----------------------------------------------------
# References
- [link to sitestackoverflow](https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas) 


