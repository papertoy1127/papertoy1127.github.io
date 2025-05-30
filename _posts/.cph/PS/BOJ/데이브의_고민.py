n, m = map(int, input().split())
arr = [[1] * m for _ in range(n)]
hor = [0, 4, 1, 2, 5, 3]
vert = [0, 3, 5, 4, 2, 1]

for i in range(1, n): arr[i][0] = hor[arr[i-1][0]]
for i in range(n):
    for j in range(1, m): arr[i][j] = vert[arr[i][j-1]]

print('\n'.join(map(lambda x: ' '.join(map(str, x)), arr)))