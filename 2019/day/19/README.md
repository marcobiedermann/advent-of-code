## --- Day 19: Tractor Beam ---

Unsure of the state of Santa's ship, you borrowed the tractor beam technology from Triton. Time to test it out.

When you're safely away from anything else, you activate the tractor beam, but nothing happens. It's hard to tell whether it's working if there's nothing to use it on. Fortunately, your ship's drone system can be configured to deploy a drone to specific coordinates and then check whether it's being pulled. There's even an [Intcode](9) program (your puzzle input) that gives you access to the drone system.

The program uses two input instructions to request the _X and Y position_ to which the drone should be deployed. Negative numbers are invalid and will confuse the drone; all numbers should be _zero or positive_.

Then, the program will output whether the drone is _stationary_ (`0`) or _being pulled by something_ (`1`). For example, the coordinate X=`0`, Y=`0` is directly in front of the tractor beam emitter, so the drone control program will always report `1` at that location.

To better understand the tractor beam, it is important to _get a good picture_ of the beam itself. For example, suppose you scan the 10x10 grid of points closest to the emitter:

           X
      0->      9
     0#.........
     |.#........
     v..##......
      ...###....
      ....###...
    Y .....####.
      ......####
      ......####
      .......###
     9........##

In this example, the _number of points affected by the tractor beam_ in the 10x10 area closest to the emitter is `_27_`.

However, you'll need to scan a larger area to _understand the shape_ of the beam. _How many points are affected by the tractor beam in the 50x50 area closest to the emitter?_ (For each of X and Y, this will be `0` through `49`.)

To begin, [get your puzzle input](19/input).

Answer:
