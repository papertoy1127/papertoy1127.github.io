---
title: 윌슨의 정리와 합성수로의 확장
date: 2024-08-08 00:00:00 +0900
categories: [수학]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

## 윌슨의 정리
윌슨의 정리는 다음과 같은 정리입니다.

> **윌슨의 정리**<br>
> $(n-1)! \equiv -1\pmod p$일 필요충분조건은 $p$**가 소수**라는 것이다.

충분조건은 다음과 같이 증명합니다.

어떤 소수 $p$에 대해 $x^2 \equiv 1 \pmod p$라면, $x^2 - 1 \equiv 0 \pmod p$이므로 $p \mid x^2-1$, 즉 $p \mid (x-1)(x+1)$입니다. $p$가 소수이므로 $p \mid x-1$ 또는 $p \mid x+1$이고, 따라서 $x \equiv 1 \pmod p$이거나 $x \equiv -1 \pmod p$입니다. 결과적으로 $0 \leq k < p$이고 $k^2 \equiv 1 \pmod p$인 $k$는 $1$과 $p-1$뿐입니다. 

$\text{mod }p$ 상에서 $p$와 서로소인 모든 수는 역원을 가지고, 위에 따라 $k$가 $1$ 또는 $p-1$이 아니라면 $k^{-1} \not = k$입니다. 따라서 $1 < k < p-1$인 수들은 모두 $1 < k^{-1} < p-1$인 역원을 가져 쌍을 지어줄 수 있으므로, $1 < k < p-1$인 수들을 곱하면 $1 \pmod p$가 됩니다. 따라서 $1 \leq k < p$인 모든 수를 곱하면 $p-1 \pmod p$가 됩니다.

필요조건은 여기서는 따로 증명하지는 않겠습니다.

이제 이와 비슷한 것을 합성수를 포함해서 생각해볼 수 있습니다. 어떤 양의 정수 $n$에 대해 $n$ 이하의 $n$과 서로소인 모든 수를 곱한 수를 $e(n)$라고 할 때, $e(n)\bmod n$를 구하는 것이죠. 결론적으로는 다음과 같습니다.

$$ e(n) \bmod n = \left\{
    \begin{array}{ll}
        & n-1 & (n = 2 \text{ or } n = 4 \text{ or } n = p^k \text{ or } n = 2 \cdot p^k) & \\
        & 1 & (\text{otherwise}) & \\
    \end{array} \right. $$

