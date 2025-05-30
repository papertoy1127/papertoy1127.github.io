n = int(input())
a = []
full = '*'*n
empty = '*' + ' '*(n-2) + '*'
a.append(full + ' '*(n*2-3) + full)
for i in range(1, n-1): a.append(' '*i + empty + ' '*(n*2-3-i*2) + empty)
a.append(' '*(n-1) + '*' + ' '*(n-2) + '*' + ' '*(n-2) + '*')
for i in range(n-2, 0, -1): a.append(' '*i + empty + ' '*(n*2-3-i*2) + empty)
a.append(full + ' '*(n*2-3) + full)
print('\n'.join(a))