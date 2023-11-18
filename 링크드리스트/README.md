# 단일연결리스트 구현!!

- 단일 연결 리스트를 구현하자

## 단일연결리스트란?

- 노드를 일자로 연결시켜놓은것을 의미한다.
- 노드는 자신의 내용과 다음 노드를 가리킬 포인터를 가진다.

### 기능 요구 사항

- 다음의 메서드들을 가져야한다.
  - 맨 앞에 삽입하는 insertFirst
  - 맨 뒤에 삽입하는 insertLast
  - 원하는 idx번째에 삽입하는 insertIdx
  - 모든 노드를 순서대로 출력하는 print
  - 특정 idx번째의 노드를 반환하는 searchIdx
  - 특정 값을 가진 노드를 반환하는 searchValue
  - 맨 앞의 요소를 제거하는 removeFirst
  - 맨 뒤에 요소를 제거하는 removeLast
  - 특정 idx번째의 요소를 제거하는 removeIdx
  - 특정 값을 가진 노드를 제거하는 removeValue
  - 현재 연결리스트의 크기를 반환하는 size함수

### 주의사항

- 배열을 사용해선 안된다. 즉 배열에 담고 Array.prototype.메서드를 사용해선안된다.
  - 노드는 클래스이며 value와 pointer를 갖는다.
  - 연결리스트 또한 클래스이다.
