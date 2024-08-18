## --- Day 24: Planet of Discord ---

You land on [Eris](<https://en.wikipedia.org/wiki/Eris_(dwarf_planet)>), your last stop before reaching Santa. As soon as you do, your sensors start picking up strange life forms moving around: Eris is infested with [bugs](https://www.nationalgeographic.org/thisday/sep9/worlds-first-computer-bug/)! With an over 24-hour roundtrip for messages between you and Earth, you'll have to deal with this problem on your own.

Eris isn't a very large place; a scan of the entire area fits into a 5x5 grid (your puzzle input). The scan shows _bugs_ (`#`) and _empty spaces_ (`.`).

Each _minute_, The bugs live and die based on the number of bugs in the _four adjacent tiles_:

- A bug _dies_ (becoming an empty space) unless there is _exactly one_ bug adjacent to it.
- An empty space _becomes infested_ with a bug if _exactly one or two_ bugs are adjacent to it.

Otherwise, a bug or empty space remains the same. (Tiles on the edges of the grid have fewer than four adjacent tiles; the missing tiles count as empty space.) This process happens in every location _simultaneously_; that is, within the same minute, the number of adjacent bugs is counted for every tile first, and then the tiles are updated.

Here are the first few minutes of an example scenario:

    Initial state:
    ....#
    #..#.
    #..##
    ..#..
    #....

    After 1 minute:
    #..#.
    ####.
    ###.#
    ##.##
    .##..

    After 2 minutes:
    #####
    ....#
    ....#
    ...#.
    #.###

    After 3 minutes:
    #....
    ####.
    ...##
    #.##.
    .##.#

    After 4 minutes:
    ####.
    ....#
    ##..#
    .....
    ##...

To understand the nature of the bugs, watch for the first time a layout of bugs and empty spaces _matches any previous layout_. In the example above, the first layout to appear twice is:

    .....
    .....
    .....
    #....
    .#...

To calculate the _biodiversity rating_ for this layout, consider each tile left-to-right in the top row, then left-to-right in the second row, and so on. Each of these tiles is worth biodiversity points equal to _increasing powers of two_: 1, 2, 4, 8, 16, 32, and so on. Add up the biodiversity points for tiles with bugs; in this example, the 16th tile (`32768` points) and 22nd tile (`2097152` points) have bugs, a total biodiversity rating of `_2129920_`.

_What is the biodiversity rating for the first layout that appears twice?_

To begin, [get your puzzle input](24/input).

Answer:
