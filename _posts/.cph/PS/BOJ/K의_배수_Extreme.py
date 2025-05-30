def factorize_with_phi(n):
    pfactors = {}
    i = 2
    while i*i <= n:
        if n % i == 0:
            pfactors[i] = 1
            while (n:=n//i)%i == 0: pfactors[i] += 1
        i += 1
    if n > 1: pfactors[n] = 1
    factors = [(1, 1)]
    for p,e in pfactors.items():
        n = len(factors)
        k = p
        for _ in range(e):
            for i in range(n): factors.append((factors[i][0] * k, factors[i][1] * k//p*(p-1)))
            k *= p

    return factors

P = 1000000007
n, m, k = map(int, input().split())
x = 0
for d,p in factorize_with_phi(k):
    if d&1 == 0: continue
    x += pow(2, m*n//d, P) * p
    x %= P
print((x * pow(k, -1, P)-1) % P)