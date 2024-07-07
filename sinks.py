def create_pipe_system(file_path):
    import collections

    def parse_input(file_path):
        grid = {}
        max_x = max_y = 0
        with open(file_path, 'r') as file:
            for line in file:
                obj, x, y = line.strip().split()
                x, y = int(x), int(y)
                if x > max_x:
                    max_x = x
                if y > max_y:
                    max_y = y
                grid[(x, y)] = obj
        return grid, max_x, max_y

    # Define the possible connections for each type of pipe
    pipe_connections = {
        '═': [(0, -1), (0, 1)],       # left, right
        '║': [(-1, 0), (1, 0)],       # up, down
        '╔': [(1, 0), (0, 1)],        # down, right
        '╗': [(1, 0), (0, -1)],       # down, left
        '╚': [(0, 1), (-1, 0)],       # right, up
        '╝': [(0, -1), (-1, 0)],      # left, up
        '╠': [(0, -1), (1, 0), (0, 1)], # left, down, right
        '╣': [(0, -1), (-1, 0), (0, 1)],# left, up, right
        '╦': [(1, 0), (0, -1), (0, 1)], # down, left, right
        '╩': [(0, -1), (0, 1), (-1, 0)] # left, right, up
    }

    # Function to check if two cells are connected
    def are_connected(pipe, direction):
        return direction in pipe_connections[pipe]

    grid, max_x, max_y = parse_input(file_path)
    
    source = None
    sinks = set()
    for (x, y), obj in grid.items():
        if obj == '*':
            source = (x, y)
        elif obj.isupper():
            sinks.add((x, y))
    
    if source is None:
        return ""
    
    visited = set()
    connected_sinks = set()
    
    # Perform DFS or BFS
    stack = [source]
    while stack:
        x, y = stack.pop()
        if (x, y) in visited:
            continue
        visited.add((x, y))
        if (x, y) in sinks:
            connected_sinks.add(grid[(x, y)])
        directions = [
            (x, y-1, (0, -1)),  # left
            (x, y+1, (0, 1)),   # right
            (x-1, y, (-1, 0)),  # up
            (x+1, y, (1, 0))    # down
        ]
        for nx, ny, direction in directions:
            if (nx, ny) in grid:
                if grid[(x, y)] == '*' or are_connected(grid[(x, y)], direction):
                    if grid[(nx, ny)] == '*' or are_connected(grid[(nx, ny)], (-direction[0], -direction[1])):
                        stack.append((nx, ny))
    
    return ''.join(sorted(connected_sinks))



file_path = 'data.txt'
print(create_pipe_system(file_path))