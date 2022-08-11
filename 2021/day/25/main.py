with open("input", 'r') as file:
    data = file.read().splitlines()
    grid = {(x,y) : data[y][x] for x in range(len(data[0])) for y in range(len(data))}
    e, moved = 0, True
    while moved:
        moved = set()
        for cucumber in [a for a in grid if grid[a] == '>' and grid[((a[0] + 1) % len(data[0]), a[1])] == '.']:
            grid[((cucumber[0] + 1) % len(data[0]), cucumber[1])] = grid[cucumber]
            grid[cucumber] = '.'
            moved.add(((cucumber[0] + 1) % len(data[0]), cucumber[1]))
        for cucumber in [a for a in grid if grid[a] == 'v' and grid[(a[0], (a[1] + 1) % len(data))] == '.']:
            grid[(cucumber[0], (cucumber[1] + 1) % len(data))] = grid[cucumber]
            grid[cucumber] = '.'
            moved.add((cucumber[0], (cucumber[1] + 1) % len(data)))
        e += 1
    print(e)