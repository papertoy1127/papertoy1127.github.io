---
title: "[Convolution & Transform] 2. WHT와 XOR convolution"
date: 2025-08-10 00:44 +0900
categories: [algorithm, 수학, Convolution & Transform]
tags: []
toc: true
comments: true
math: true
---

[이전 글](/posts/convolution-2/)에서 이어진다.

XOR convolution은 Cyclic convolution과 비슷하지만, 인덱스의 $+ \bmod N$이 아니라 $\oplus$ (bitwise XOR) 연산을 통해 정의된다. 즉,

$$ (f \ast g)_k = \sum_{i \oplus j = k} f_i \cdot g_j \newcommand\widehatfix[1]{\widehat{#1\hspace{1px}}} $$

이다. 

XOR 연산은 $(\mathbf{Z}_2)^n$ 위에서의 원소별 덧셈으로 볼 수 있다. ($i$와 $j$의 각 비트 성분들끼리 $\operatorname{mod} 2$에서 더하는 것으로 볼 수 있다.) 

이러한 XOR Convolution에 대해서도 Cyclic convolution처럼 convolution을 원소별 곱으로 바꿔 주는 변환이 존재한다. 이를 Hadamard Transform (혹은 Walsh-Hadamard Transform; WHT) 라고 부른다. $f$를 Hadamard transform한 것을 $\widehat{f}$라고 하면 마찬가지로 $\widehat{f \ast g} = \widehat{f} \odot \widehatfix{g}$이 된다. 여기서 $\ast$는 XOR convolution이다. 

이전에 한 논의를 비슷하게 적용하자. $\widehat{f} = Af$인 행렬 $A$(Hadamard matrix)가 역시나 존재하며, [널리 알려져 있다](https://en.wikipedia.org/wiki/Hadamard_transform). 이번에도 역시나 

$$ (A\mathbf{v})_k = \sum_{x \in (\mathbf{Z}_2)^n} A_{k,x} v_x $$

이다. 따라서

$$ \begin{aligned} & (A(f \ast g))_k = \sum_{x \in (\mathbf{Z}_2)^n} A_{k,x} (f \ast g)_x \\
= &\ \sum_{x \in (\mathbf{Z}_2)^n} A_{k,x} \sum_{i\oplus j = x} f_i \cdot g_j \\
= &\ \sum_{i \in (\mathbf{Z}_2)^n} \sum_{j \in (\mathbf{Z}_2)^n} A_{k,i \oplus j} (f_i \cdot g_i) \end{aligned} $$

이고, 

$$ \begin{aligned} & ((Af) \odot (Ag))_k = (Af)_k \cdot (Ag)_k \\
= &\ \bigg(\sum_{i \in (\mathbf{Z}_2)^n} A_{k,i} f_i\bigg)\bigg(\sum_{j \in (\mathbf{Z}_2)^n} A_{k,j} g_j\bigg) \\
= &\ \sum_{i \in (\mathbf{Z}_2)^n} \sum_{j \in (\mathbf{Z}_2)^n} (A_{k,i} A_{k,j})(f_i \cdot g_j) \end{aligned} $$

이므로 이전의 

$$ \sum_{i \in (\mathbf{Z}_2)^n} \sum_{j \in (\mathbf{Z}_2)^n} A_{k,i \oplus j}(f_i \cdot g_i) =\sum_{i \in (\mathbf{Z}_2)^n} \sum_{j \in (\mathbf{Z}_2)^n} (A_{k,i} A_{k,j})(f_i \cdot g_j) $$

라는 식을 그대로 사용할 수 있다. (인덱스 $i, j$가 어디에 속하는지를 제외하면 완전히 동일한 논리 전개가 가능하다!) 따라서 역시나 $A_{k,x} = \chi_k(x)$라고 두자. 이번에는 $\chi(i \oplus j) = \chi(i) \chi(j)$라는 식을 얻을 수 있다. 이번에는 $\mathbb{Z}_n$이 아닌  $(\mathbb{Z}_2)^n \rightarrow \mathbb{C}^\times$의 homomorphism 형태가 나왔다. 

이번에도 선형 독립인 $\chi$들을 $2^n$개 구해야 한다. 저번처럼 바로 보이지는 않으므로 식을 정리해보자. 

- $\chi(0+i) = \chi(0) \chi(i)$이므로 $\chi(0) = 1$이다.
- $i \oplus i = 0$이므로 $\chi(0) = \chi(i \oplus i) = \chi(i)^2 = 1$이다. 따라서 $\chi(i) = \pm 1$이다.

또 $(\mathbb{Z}_2)^n$ 위의 원소 $i$는 $n$개의 기저들의 선형 결합으로 나타낼 수 있고, 따라서 기저들에 대한 함숫값을 정하면 전체 $\chi$도 정해질 것이다. 각각의 기저는 $1$과 $-1$ 두 종류의 값을 가질 수 있으므로 총 $2^n$가지의 $\chi$를 구할 수 있다. 마지막으로 이러한 $\chi$들이 Hadamard matrix의 행벡터들과 같다는 것도 확인할 수 있다.

이전 글에서는 인덱스들이 $$(\mathbb{Z}_n, +)$$, 이 글에서는 $$((\mathbb{Z}_2)^n, \oplus)$$ 위에 있는 경우의 convolution을 분석하였다. 이러한 방법론을 다른 일반적인 가환군, 나아가서 비가환군이나 모노이드에도 적용할 수 있지 않을까..? 예를 들면, $$((\mathbb{Z}_2)^n, \lor)$$ 모노이드 (bitwise or) 위에서의 convolution 같은 것 말이다.