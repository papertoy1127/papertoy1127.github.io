---
title: 행렬을 이용한 선분 교차 판정
date: 2025-07-28 23:25 +0900
categories: [Algorithm, 수학]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

일반적으로 선분 교차 판정은 CCW를 이용한 방법이 가장 유명하다. 그러나 그러할 경우 네 점이 일직선 위에 있는 등의 예외 케이스들을 처리해주기 어려운 문제가 있다. 이 글에서 다루는 것은 CCW를 이용한 풀이와 본질적으로는 같지만, 좀 더 논리적으로 예외 케이스를 추적하기 용이한 2x2 행렬을 이용한 풀이이다.

## 선분의 벡터 방정식
어떤 직선 $l$은 두 벡터 $\mathbf{v}, \mathbf{w}$를 통해 $\mathbf{r} = \mathbf{v} + t\mathbf{w}$ 꼴로 나타낼 수 있다. 이때 $\mathbf{v}$는 시점, $\mathbf{w}$는 방향을 나타내는 벡터이다. 어떤 직선을 나타내는 $\mathbf{v}$와 $\mathbf{w}$는 유일하지 않다. $\mathbf{v}$는 직선 위의 아무 점을 택해도 되고, $\mathbf{w}$는 ($0$이 아닌) 상수배를 해도 된다. 

선분은 직선의 일부분이므로, 위 식에서 $t$의 범위를 제한해서 선분을 표현할 수 있다. 따라서 $(x_0, y_0)$과 $(x_1, y_1)$을 잇는 선분을 벡터 방정식으로 나타내기 위해, 먼저 선분을 포함하는 직선을 벡터 방정식으로 나타내어 보자. $\mathbf{v} = (x_0, y_0), \mathbf{w} = (x_1-x_0, y_1-y_0)$로 두면 $\mathbf{r} = \mathbf{v} + t \mathbf{w}$로 나타내어진다. 이제 위의 선분을 표현하는 적절한 $t$의 범위를 찾아야 하는데, $t = 0$일 때 $\mathbf{r} = (x_0, y_0)$이고 $t = 1$일 때 $\mathbf{r} = (x_1, y_1)$인 것을 알 수 있다. 따라서 $r \in [0, 1]$이 범위로 적당할 것 같다.

## 두 선분의 교차점 찾기
$$ \begin{aligned} \mathbf{v}_p = (x_0, y_0) &\quad \mathbf{w}_p = (\Delta x_p, \Delta y_p) &\quad \Delta x_p = x_1-x_0 &\quad \Delta y_p = y_1-y_0 \\
 \mathbf{v}_q = (x_2, y_2) &\quad \mathbf{w}_q = (\Delta x_q, \Delta y_q) &\quad \Delta x_q = x_3-x_2 &\quad \Delta y_q = y_3-y_2 \end{aligned} $$

라고 하자. 
이제 문제에서 주어진 두 선분을 $t, u \in [0, 1]$에 대해 각각 $\mathbf{r} = \mathbf{v}_p + t \mathbf{w}_p$, $\mathbf{r} = \mathbf{v}_q + u \mathbf{w}_q$이라고 나타낼 수 있다. 
두 선분의 교점을 찾기 위해서 $\mathbf{v}_p + t \mathbf{w}_p = \mathbf{v}_q + u \mathbf{w}_q$라는 방정식을 세울 수 있다. 미지수가 있는 항만 왼쪽으로 넘기면, $\mathbf{w}_p t - \mathbf{w}_q u = -\mathbf{v}_p + \mathbf{v}_q$이라는 식을 얻을 수 있다. 이를 행렬로 표현하면 

$$ \begin{bmatrix} \Delta x_p & -\Delta x_q \\ \Delta y_p & -\Delta y_q \end{bmatrix} \begin{bmatrix} t \\ u \end{bmatrix} = \begin{bmatrix} x_2-x_0 \\ y_2-y_0 \end{bmatrix} $$

가 된다. 이때 우리가 고려해야 할 사항은
- 해가 존재하는지
- 존재하다면 유일한지
- $t, u \in [0, 1]$ 조건을 만족하는지

이다. 편의상 $$A := \begin{bmatrix} \Delta x_p & -\Delta x_q \\ \Delta y_p & -\Delta y_q \end{bmatrix}$$로 두겠다.
따라서 $\det A = {\small -\Delta x_p \Delta y_q + \Delta x_q \Delta y_p}$에 따라 여러 경우를 나눈다.

먼저 $\det A = 0$인 경우이다. 이 경우에는 $\frac{\Delta y_p}{\Delta x_p} = \frac{\Delta y_q}{\Delta x_q}$처럼 기울기가 일치하는 경우로, 두 선분은 평행하거나 같은 직선 위에 있다. 
- 같은 직선 위에 있지 않다면 절대 만날 수 없다.
- 같은 직선 위에 있다면 1차원에서 선분 교차 판정을 하면 된다. <br>
가능한 경우는 일부가 겹치거나, 양 끝 점이 겹치거나, 아예 겹치지 않는 경우이다. C++나 Python 등의 언어는 튜플끼리 비교를 할 수 있으므로, 각 선분의 양 끝 점을 튜플에 넣고 최솟값과 최댓값을 비교하는 방식으로 꽤 깔끔하게 구현할 수 있다.

$\det A \neq 0$이라면 $A^{-1}$이 존재한다. 2x2 행렬의 역행렬을 구하는 공식을 통해 $$A^{-1} = \dfrac{1}{\det A}\begin{bmatrix} -\Delta y_q & -\Delta y_p \\ \Delta x_q & \Delta x_p \end{bmatrix}$$을 구할 수 있다. 첫 번째 식의 양 변 앞에 $A^{-1}$을 곱해 주면

$$ \begin{bmatrix} t \\ u \end{bmatrix} = A^{-1} \begin{bmatrix} x_2 - x_0 \\ y_2 - y_0 \end{bmatrix} $$

를 통해 간단히 $t$와 $u$를 구해줄 수 있고, 이 $t$와 $u$가 $[0, 1]$에 모두 포함되는지를 확인하면 선분 교차 판정이 끝난다. 추가적으로 교점의 위치를 구해야 한다면 $t$나 $u$ 중 하나를 원래 식에 대입하여 구해줄 수 있다.

주어진 점이 모두 정수라면 $A^{-1}$을 구할 때 실수 나눗셈이 필요하므로, 양 변에 $A^{-1}$ 대신 $$(\det A) A^{-1} = \begin{bmatrix} -\Delta y_q & -\Delta y_p \\ \Delta x_q & \Delta x_p \end{bmatrix}$$만 곱해 $(\det A) t$, $(\det A) u$가 $[0, \det A]$에 포함되는지를 확인하면 된다. 

위를 구현한 Python 코드로 마치겠다.

```py
def intersect(p0, p1, q0, q1):
    if p0 > p1: p0, p1 = p1, p0
    if q0 > q1: q0, q1 = q1, q0

    dxp = p1[0]-p0[0]; dyp = p1[1]-p0[1]
    dxq = q1[0]-q0[0]; dyq = q1[1]-q0[1]
    xqp = p0[0]-q0[0]; yqp = p0[1]-q0[1]
    det = -dxp*dyq+dxq*dyp
    
    if det == 0:
        if dxp*yqp != dyp*xqp: return (0, -1) # 평행
        if p1 < q0 or q1 < p0: return (0, -1) # 겹치지 않음
        if p1 == q0: return (1, p1) # 양 끝 점이 겹침
        if q1 == p0: return (1, q1)
        return (2, -1) # 일부분이 겹침

    det_t = dyq*xqp-dxq*yqp
    det_u = dyp*xqp-dxp*yqp

    if det < 0: det, det_t, det_u = -det, -det_t, -det_u

    if det_t < 0 or det_t > det: return (0, -1)
    if det_u < 0 or det_u > det: return (0, -1)

    return (1, (p0[0]+dxp*det_t/det, p0[1]+dyp*det_t/det))
```