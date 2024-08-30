#include <bits/stdc++.h>
using namespace std;
using i32 = int;
using i64 = long long;
using i128 = __int128_t;
using u32 = unsigned;
using u64 = unsigned long long;
using u128 = __uint128_t;
#define int
#define fastio ios_base::sync_with_stdio(false),cin.tie(NULL),cout.tie(NULL)

i32 main(void) {
    i32 n;
    cin >> n;
    vector<i32> k;
    while (n > 0) {
        k.push_back(n % 2);
        n /= 2;
    }

    vector<i32> l(k.begin(), k.end());

    if (next_permutation(k.begin(), k.end())) {
        i32 s = 0;
        for (i32 i = 0; i < k.size(); i++) s += k[i] * (1 << i);
        cout << s << ' ';
    }
}