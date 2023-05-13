#!/usr/bin/env python
from collections import defaultdict
from itertools import accumulate

dirs = defaultdict(int)
lines = [ '$ cd /',
     '$ ls',
     'dir a',
     '14848514 b.txt',
     '8504156 c.dat',
     'dir d',
     '$ cd a',
     '$ ls',
     'dir e',
     '29116 f',
     '2557 g',
     '62596 h.lst',
     '$ cd e',
     '$ ls',
     '584 i',
     '$ cd ..',
     '$ cd ..',
     '$ cd d',
     '$ ls',
     '4060174 j',
     '8033020 d.log',
     '5626152 d.ext',
     '7214296 k' ]

for line in lines:
    match line.split():
        case "$", "cd", "/":
            path = ["/"]
        case "$", "cd", "..":
            path.pop()
        case "$", "cd", dir:
            path.append(dir + "/")
        case "$" | "dir", *_:
            continue
        case size, _:
            for p in accumulate(path):
                dirs[p] += int(size)

print(sum(size for size in dirs.values() if size <= 100000))
print(min(size for size in dirs.values() if size >= dirs["/"] - 40_000_000))