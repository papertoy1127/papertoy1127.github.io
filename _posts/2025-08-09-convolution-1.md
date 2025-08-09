---
title: "[Convolution & Transform] 1. DFT와 Cyclic convolution"
date: 2025-08-09 01:25 +0900
categories: [algorithm, 수학, Convolution & Transform]
tags: []
toc: true
comments: true
math: true
---

이 글에서 수열과 벡터, 행렬 등은 특별한 언급이 없다면 0-index를 사용한다.

Cyclic convolution은 주어진 길이 $N$의 두 수열 $f: f_0, f_1, \cdots, f_{N-1}$와 $g: g_0, g_1, \cdots, g_{N-1}$에 대해 

$$ (f \ast g)_k = \sum_{\substack{i + j \equiv k \\ \small \pmod N}} f_i \cdot g_j $$

를 만족하는 새로운 수열 $(f \ast g)$를 결과로 하는 연산이다. 이러한 연산은 $f(x) = \sum\limits_{\small i=0}^{\small N-1} f_i x^i, g(x) = \sum\limits_{\small i=0}^{\small N-1} g_i x^i$에 대해 $f(x)g(x) \bmod {x^N-1}$를 구하는 것과 같다고 할 수 있다. 

논의를 좀 더 편리하게 이어나가기 위해 $f$와 $g$를 수열이 아니라 벡터라고 생각하자. 벡터 $f$를 이산 푸리에 변환한 것을 ${\cal F}[f]$라고 할 때, ${\cal F}[f \ast g] = {\cal F}[f] \odot {\cal F}[g]$임이 널리 알려져 있다. 여기서 $\odot$은 Hadamard product, 즉 원소끼리 곱한 것을 의미한다. 이러한 푸리에 변환은 행렬로 나타낼 수 있다. 따라서 ${\cal F}[f] = Af$를 만족하는 행렬 $A$가 존재한다. (이는 푸리에 변환이 선형변환이라는 사실에서 기인한다.) 

그렇다면, 반대로 이러한 합성곱 식으로부터 행렬 $A$를 도출할 수 있을까? 즉, $A(f \ast g) = (Af) \odot (Ag)$인 행렬 $A$를 찾을 수 있을까? 

벡터 ${\bf v}$에 대해 $$(A{\bf v})_k = \sum\limits_{\small x=0}^{\small N-1} A_{k,x} v_x$$이다. $A(f \ast g) = (Af) \odot (Ag)$이므로, $A$는 $0 \leq k < N$에 대해

$$ (A(f \ast g))_k = \sum_{x=0}^{N-1} A_{k,x} (f \ast g)_x $$

를 만족해야 한다. 이때 정의에 의해 $$(f \ast g)_x = \sum\limits_{\small i\oplus j = x} f_i \cdot g_j$$이다. (편의상 $i+j \bmod N$ 대신 $i\oplus j$로 표기했다.) 따라서 

$$ \begin{aligned} & (A(f \ast g))_k = \sum_{x=0}^{N-1} A_{k,x} (f \ast g)_x \\
= &\ \sum_{x=0}^{N-1} A_{k,x} \sum\limits_{\small i\oplus j = x} f_i \cdot g_j \\
= &\ \sum_{i=0}^{N-1} \sum_{j=0}^{N-1} A_{k,i \oplus j} (f_i \cdot g_i) \end{aligned} $$

가 된다. 마찬가지로 $((Af) \odot (Ag))_k$는

$$ \begin{aligned} & ((Af) \odot (Ag))_k = (Af)_k \cdot (Ag)_k \\
= &\ \left(\sum_{i=0}^{N-1} A_{k,i} f_i\right)\left(\sum_{j=0}^{N-1} A_{k,j} g_j\right) \\
= &\ \sum_{i=0}^{N-1} \sum_{j=0}^{N-1} (A_{k,i} A_{k,j})(f_i \cdot g_j) \end{aligned} $$

이다. 결과적으로 

$$ \sum_{i=0}^{N-1} \sum_{j=0}^{N-1} A_{k,i \oplus j}(f_i \cdot g_i) = \sum_{i=0}^{N-1} \sum_{j=0}^{N-1} (A_{k,i} A_{k,j})(f_i \cdot g_j) $$

이므로, $$A_{k,i\oplus j} = A_{k,i} A_{k,j}$$여야 함을 알 수 있다.

위 식에서 $k$와 값에는 관계없이 $A_{k,x}$에 대한 식이 정해지므로 $A_{k,x} = \chi_k(x)$라고 하자. 각각의 $\chi_k$는 $A$의 행벡터이다. 역변환을 하기 위해서는 $A$의 역행렬이 존재해야 하므로 선형 독립인 $\chi$들을 $N$개 찾을 필요가 있다.

바로 위의 식을 정리하면 $\chi(i+j \bmod N) = \chi(i) \chi(j)$가 되며, 이는 $\mathbb{Z}_n \rightarrow \mathbb{C}^\times$의 homomorphism인 것을 알 수 있다. 따라서 $0 \leq k < N$인 $k$와 $N$'th root of unity $\omega_k = (e^{\frac{2 \pi i}{N}})^k$에 대해 $\chi_k(x) = (\omega_k)^x$로 두면 선형 독립인 $\chi$를 $N$개 얻을 수 있다. 이는 우리가 알고 있는 푸리에 행렬과 동등하다.