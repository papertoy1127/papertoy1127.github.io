---
title: solved.ac 마라톤 - 5주차
date: 2024-07-05 11:47:00 +0900
categories: [PS, Marathon]
tags: []
toc: true
comments: true
math: true
---

## 들어가기 전에...

이번 주 부터 마라톤 문제 풀이와 간단한 총평을 블로그에 작성해보고자 합니다.

개인적으로 C++ 언어 연습을 위해, 마라톤 풀이는 최대한 C++로 하고자 노력하고 있고... 이번 주에는 8문제 모두를 C++로 푸는 쾌거를 이루었습니다 🎉

마라톤 풀이 글에 C++ 코드가 들어갈 수 있는데, 헤더나 이런 부분을 하나하나 쓰기 귀찮으니 여기 미리 써두고 가겠습니다.

```cpp
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
```

정수 형식 이름을 바꿔둔 이유는 본인이 C#이랑 헷갈려서 그렇다고 합니다...

마라톤 풀이를 조금 재미있게 하기 위해서, '이분 탐색 전법'을 사용하기로 했습니다. `(lo + hi) / 2`번째 문제를 풀고, 맞을 때까지 시도한 횟수가 홀수라면 왼쪽, 짝수라면 오른쪽으로 이동하여 이분 탐색 전법을 사용합니다. 구간 내의 문제를 다 풀었다면 백트래킹합니다... 만 딱히 알 필요는 없습니다. 저 재밌자고 하는 일이죠 뭐.

## 마라톤 5주차
이전 주에 난이도 증가폭을 낮음 -> 보통으로 설정했더니, 골드가 3문제씩 나오기 시작했습니다.

문제 목록은 아래와 같습니다.

<style>
.table_marathon td { width: 12.5% }
.img-link { vertical-align: middle; }
</style>
<table style="text-align: center; margin: 0 auto" class="table_marathon">
<th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th>
<tr>
<td><img src="/assets/img/solvedac_icon/5.png" alt="Bronze I" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/30503" style="display: inline-block">30503</a></td>
<td><img src="/assets/img/solvedac_icon/7.png alt="Silver IV" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/2567" style="display: inline-block">2567</a></td>
<td><img src="/assets/img/solvedac_icon/7.png alt="Silver IV" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/1907" style="display: inline-block">1907</a></td>
<td><img src="/assets/img/solvedac_icon/10.png" alt="Silver I" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/26523" style="display: inline-block">26523</a></td>
<td><img src="/assets/img/solvedac_icon/10.png" alt="Silver I" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/30505" style="display: inline-block">30505</a></td>
<td><img src="/assets/img/solvedac_icon/11.png" alt="Gold V" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/1083" style="display: inline-block">1083</a></td>
<td><img src="/assets/img/solvedac_icon/11.png" alt="Gold V" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/11067" style="display: inline-block">11067</a></td>
<td><img src="/assets/img/solvedac_icon/13.png" alt="Gold III" style="width: 16px; margin-right: 5px"><a href="https://boj.kr/14619" style="display: inline-block">14619</a></td>
</tr>
</table>

### E: <img src="/assets/img/solvedac_icon/10.png" alt="Silver I" style="width: 22px; margin-right: 5px">[SASA 마니또](https://boj.kr/30505)
처음에는 단순히 "세종이의 마니또가 알려졌는지"와 "마니또가 누구인지 모르는 학생 수"만으로 케이스워크를 하는 문제인 줄 알았습니다. 하지만 그런 생각은 예제 2를 보고 깨지고 말았는데...
거의 40분가량 시간을 쏟아부어 어떻게든 풀었습니다. 자세한 고난의 이야기는 나중에 적어 보도록 하겠습니다.

그렇게 풀고 "이게 <span><img src="/assets/img/solvedac_icon/10.png" alt="Silver I" style="width: 16px;"></span>이라니, 말도 안 돼."라는 마음가짐으로 <span><img src="/assets/img/solvedac_icon/12.png" alt="Gold IV" style="width: 16px;"></span>를 기여했고, 결과적으로 문제의 티어가 <span><img src="/assets/img/solvedac_icon/11.png" alt="Gold V" style="width: 16px;"></span>이 되었습니다. G5 올솔을 목표로 하신 ohwphil님이 문제를 슥삭하시고 갑자기 '데이터를 추가해주세요'를 날리시는 충격적인 일이 발생하긴 했지만, 어쨌든 문제를 맞은 데다 데추주 데이터에도 옳은 답이 나와서 잘 넘어가게 되었습니다.

### C: <img src="/assets/img/solvedac_icon/7.png alt="Silver IV" style="width: 22px; margin-right: 5px">[탄소 화합물](https://boj.kr/1907)
문제를 보시기만 해도 감이 올 것 같습니다. 더러운 파싱 문제입니다. 익숙하지 않은 C++로 파싱 코드 짜는 데만 30분이 넘게 걸렸습니다.

파싱 코드를 짠 다음에는 저걸 어떻게 맞추지... 하고 유클리드 호제법까지 생각했지만, <span><img src="/assets/img/solvedac_icon/7.png alt="Silver IV" style="width: 16px;"></span> 문제가 그렇게 어려운 풀이를 요구할 리가 없다고 믿고 문제를 다시 보니, "계수가 1 이상 10 이하"라는 조건을 발견했습니다. 아하! O(N^3)으로 모든 경우를 체크하며 풀면 되는 거였습니다.

### B: <img src="/assets/img/solvedac_icon/7.png alt="Silver IV" style="width: 22px; margin-right: 5px">[색종이 - 2](https://boj.kr/2567)
이것도 구현 문제입니다. 그래도 구현 난이도가 다른 문제들보다는 심하지 않아 스무스하게 넘어갔습니다.

100x100짜리 배열을 준비해 놓고, 색종이로 덮인 칸을 1로, 덮이지 않은 칸을 0으로 채워 줍니다. 그리고 각 칸을 순회하며 상하좌우에 있는 모서리 길이를 모두 더해주면 전체 색종이의 모서리 길이를 알 수 있습니다.


### A: <img src="/assets/img/solvedac_icon/5.png" alt="Bronze I" style="width: 22px; margin-right: 5px">[방형구 탐색 (Easy)](https://boj.kr/30503)
문제를 보아 하니, 세그먼트 트리 문제 같습니다. (Hard) 버전은 필시 세그먼트 트리가 필요하겠더군요.

잠시 세그먼트 트리를 다시 공부해볼까 하는 생각이 들었지만, 귀찮은 나머지 세그트리의 유혹을 뿌리치고 나이브하게 구현했습니다. 그냥 배열에 담아두고 범위 내의 꽃의 개수를 셌어요.


### D: <img src="/assets/img/solvedac_icon/10.png" alt="Silver I" style="width: 22px; margin-right: 5px">[균등분포와 정규분포](https://boj.kr/26523)
문제 지문의 포스가 대단했어요. 이거 어떻게 푸나 싶을 정도...

<span><img src="/assets/img/marathon_5th/calculus.png" alt="이걸 미적확통컵이"></span>

미적확통컵이라니, 대체 왜 그런 대회가 있었던 거죠?

아무튼, $[0, 0.25) ∪ [0.75, 1]$ 구간에 속하는 원소의 개수와 $[0.25, 0.75)$ 구간에 속하는 원소의 개수를 비교해서 풀었습니다.

기여를 보니까 균등분포를 정규분포로 변환한다, 귀무가설, 어쩌고... 무서운 말이 나오던데 저만 허접하게 푼 거 같아요

### G: <img src="/assets/img/solvedac_icon/11.png" alt="Gold V" style="width: 22px; margin-right: 5px">[모노톤길](https://boj.kr/11067)
돌고 돌아 또 구현입니다. 그래도 구현 난이도가 아주 어렵진 않았어요.

x좌표를 이동할 때 y좌표가 일정하다는 것을 이용합니다. x좌표에 따라 카페들을 분류해 놓고, y좌표의 변화에 따라 정렬했는데...

자세한 내용은 추후 글로 올리겠습니다.

그리고 이거 풀고 OMCB를 치러 갔는데, 결과는 망했습니다. 30x명 중 154등인가? 했어요

### F: <img src="/assets/img/solvedac_icon/11.png" alt="Gold V" style="width: 22px; margin-right: 5px">[소트](https://boj.kr/1083)
S = 1일때부터 차근차근 해 보았습니다. 가능한 한 가장 큰 원소를 배열의 맨 앞으로 끌어오는 것을 반복하여 풀 수 있었습니다. 일종의 그리디라고 할 수 있겠네요. 

개인적으로 이번 마라톤 세트에서 제일 재미있었던 문제였습니다. 역시나 추후 글로 올리겠습니다.

### H: <img src="/assets/img/solvedac_icon/13.png" alt="Gold III" style="width: 22px; margin-right: 5px">[섬 여행](https://boj.kr/14619)
문제가 너무 DP여서 금방 알아차렸습니다. DP[출발할 섬][이동 개수]에 따라 top-down으로 DP를 돌려주어서 풀려고 했는데, 맞왜틀의 저주에 걸렸습니다.

원인은 $1 \leq K \leq 500$인데, DP 배열을 <u>1-based</u>로 쓰면서 <u>500개</u>만 할당한 것이었습니다. 전 바보예요 흑흑

## 총평
구현 문제가 5/8문제나 나왔던 끔찍한 구현 세트였습니다. C++로 짜느라 너무 힘들었어요

G번 풀 때는 std::set(트리셋)을 처음으로 써 보았습니다. 의미 있는 시간이었어요.

<img src="/assets/img/marathon_5th/marathon_5th.png" alt="마라톤 완주!">

그렇게 시작한지 12시간만에 완주에 성공했습니다!