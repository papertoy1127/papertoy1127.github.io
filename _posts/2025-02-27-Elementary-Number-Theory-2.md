---
title: 2. 이변수 일차 디오판토스 방정식
date: 2025-02-27 12:50:00 +0900
categories: [정수론 개론]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

## 베주 항등식
0이 아닌 정수 $a, b$에 대해 $ax + by = \gcd(a, b)$는 정수 해를 가진다.

강의에서는 이 명칭을 사용하지는 않았다. 유클리드 알고리즘을 사용하여 위 식의 해를 구성할 수 있다. (Constructive proof)

## 확장 유클리드 알고리즘
[이 글](/posts/Extended-Euclidean/)에 자세히 설명해 둔 덕분에 빠르게 이해하고 넘어갈 수 있었다.

기본적인 아이디어는 $a m_i + b n_i = r_i$를 만족하는 $m_i, n_i$를 찾는 것이다. 정말 간단히 설명하면, $a m_i + b n_i = r_i$라는 식이 $m_i, n_i, r_i$에 대해 선형이므로 $m_i$와 $n_i$도 $r_i$의 점화식인 $r_{i-2} = r_{i-1} q_i + r_i$와 같은 형태를 가진다. 

이미 자세히 설명된 글이 위에 있으므로 해당 글에서 식 하나만 가져오고 넘어가도록 하겠다. (해당 글에서는 $m_i, n_i$ 대신 $z_i, t_i$를 사용하였다. 그 외에도 사소한 노테이션 차이들이 있으니 주의.) 우항의 형태가 점화식에서 $r_{i-1} q_i$ 항을 이항한 $r_{i-2} - r_{i-1} q_i = r_i$인 것에 주목하자.

$$
\begin{array}{ll}
 & am_{i-2} & + & bn_{i-2} & = & r_{i-2} & \\
 -( & am_{i-1} & + & bn_{i-1} & = & r_{i-1} & ) \cdot q_i \\ \hline
 & am_i & + & bn_i & = & r_i &
\end{array}
$$

$r_{k+1} = 0$일 때 $r_k = \gcd(a, b)$였으므로, $a m_k + b n_k = r_k = \gcd(a, b)$가 된다. 

**따름정리.** 만약 $a \mid bc$ 그리고 $a \perp b$라면 $a \mid c$이다. 
<br><small>- **pf)** $gcd(a, b) = 1$이므로 $am + bn = 1$을 만족하는 정수 $m, n$이 존재한다. 양변에 c를 곱하면 $acm + bcn = c$인데, $a \mid bc$이므로 $a \mid acm + bcn = c$.</small>

> 여기서 $a \perp b$는 $a$와 $b$가 서로소, 즉 $\gcd(a, b) = 1$을 의미한다.<br><small>자주 쓰이는 노테이션은 아닌 것 같다... 강의에서는 gcd(a, b) = 1로 적어두셨다.</small>
{: .prompt-info }

## 이변수 일차 디오판토스 방정식
정수 $a, b, c\ (a \neq 0\text{ or }b \neq 0$)에 대해 방정식 $ax + by = c$가 정수해를 가지는 것은 $\gcd(a, b) \mid c$인 것과 동치이다.