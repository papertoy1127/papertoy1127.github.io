import array
n = int(input())
arr = [*map(int, input().split())]

dp = [array.array('h', [0]*(n-i+1)) for i in range(n+1)]

for c in range(2, n+1):
    for l in range(n-c+1):
        r = l+c-1
        if arr[l] == arr[r]: dp[c][l] = min(dp[c-1][l]+1, dp[c-1][l+1]+1, dp[c-2][l+1])
        else: dp[c][l] = min(dp[c-1][l]+1, dp[c-1][l+1]+1)

print(dp[n][0])