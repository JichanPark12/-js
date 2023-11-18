class Node {
  #value;

  #link = null;

  constructor(value) {
    this.#value = value;
  }
  getLink() {
    return this.#link;
  }
  setLink(node) {
    this.#link = node;
  }
  getValue() {
    return this.#value;
  }
}

class LinkedList {
  #head = null;

  #tail = null;

  #size = 0;
  /**
   * 연결리스트가 비어있을때 삽입을 수행하면 실행되는 로직
   * head와 tail을 새로만든 노드로 설정하고 사이즈를 + 1한다
   * @param {*} value
   */
  emptyInsert(value) {
    const newNode = new Node(value);

    this.#head = newNode;
    this.#tail = newNode;
    this.#size += 1;
  }
  /**
   * 첫번째 위치에 새로운 노드를 삽입한다 새로만든 노드의 링크는 현재 head
   * 로 바꾸고 head를 새로만든 노드로 변경하고 사이즈를 + 1 한다
   * @param {*} value
   */
  insertFirst(value) {
    if (this.#size === 0) {
      this.emptyInsert(value);
      return;
    }
    const newNode = new Node(value);

    newNode.setLink(this.#head);
    this.#head = newNode;
    this.#size += 1;
  }
  /**
   *
   * 새로운 노드를 마지막에 삽입한다 현재 tail의 링크를 새로만든 노드로 설정하고
   * 새로운 노드를 tail로 설정한다음 사이즈를 + 1 한다
   * @param {*} value
  
   */
  insertLast(value) {
    if (this.#size === 0) {
      this.emptyInsert(value);
      return;
    }
    const newNode = new Node(value);
    this.#tail.setLink(newNode);
    this.#tail = newNode;
    this.#size += 1;
  }
  /**
   *
   * 특정 위치에 새로운 노드를 삽입한다
   * 특정 위치의 노드를 찾은다음 새로운 노드를 link로 설정하고
   * 새로운 노드는 특정위치의 노드가 원래 가리키던 link를 가리키게 설정한다
   * @param {Number} idx
   * @param {*} value
   */
  insertIdx(idx, value) {
    if (this.#size === 0) {
      this.emptyInsert(value);
      return;
    }
    if (idx === 1) {
      this.insertFirst(value);
      return;
    }
    if (idx > this.#size) {
      this.insertLast(value);
      return;
    }
    const newNode = new Node(value);
    let currentNode = this.#head;
    let count = 1;

    while (currentNode !== null) {
      if (idx == count + 1) {
        break;
      }
      currentNode = currentNode.getLink();
      count += 1;
    }

    newNode.setLink(currentNode.getLink());
    currentNode.setLink(newNode);
    this.#size += 1;
  }
  /**
   * 모든 요소들을 출력한다
   */
  print() {
    let currentNode = this.#head;

    while (currentNode !== null) {
      console.log(currentNode.getValue());
      currentNode = currentNode.getLink();
    }
  }
  /**
   * 특정 위치의 노드의 값을 반환한다
   * @param {Number} idx
   *
   */
  searchIdx(idx) {
    let currentNode = this.#head;
    let count = 1;

    while (currentNode !== null) {
      if (idx == count) {
        break;
      }
      currentNode = currentNode.getLink();
      count += 1;
    }

    return currentNode.getValue();
  }
  /**
   * 특정 값을 가진 노드를 찾는다.
   * @param {*} value
   * @returns
   * 값이 존재한다면 노드의 value를 반환 그렇지않다면 값이 존재하지 않습니다 라는 문구 반환
   */
  searchValue(value) {
    let currentNode = this.#head;
    let count = 1;

    while (currentNode !== null) {
      if (value == currentNode.getValue()) {
        return currentNode.getValue();
      }
      currentNode = currentNode.getLink();
      count += 1;
    }
    return '값이 존재하지 않습니다';
  }
  /**
   * 맨 첫번째의 요소를 제거하고 노드의 값을 반환한다
   */
  removeFirst() {
    if (this.#size === 0) {
      return null;
    }
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
      this.#size -= 1;
      return this.#head.getValue();
    }
    const targetNode = this.#head;
    this.#head = targetNode.getLink();
    targetNode.setLink(null);
    this.#size -= 1;
    return targetNode.getValue();
  }
  removeLast() {
    if (this.#size === 0) {
      return null;
    }
    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
      this.#size -= 1;
      return this.#head.getValue();
    }

    let currentNode = this.#head;
    while (currentNode != null) {
      if (currentNode.getLink() === this.#tail) {
        break;
      }
      currentNode = currentNode.getLink();
    }
    currentNode.setLink(null);
    this.#tail = currentNode;
    this.#size -= 1;
  }
  /**
   * 특정 위치의 노드를 제거하고 노드의 값을 반환한다.
   * @param {Number} idx
   */
  removeIdx(idx) {
    if (this.#size === 0) {
      return null;
    }

    if (idx === 1) {
      return this.removeFirst();
    }
    if (idx === this.#size) {
      return this.removeLast();
    }
    let currentNode = this.#head;
    let count = 1;

    while (currentNode !== null) {
      if (idx == count + 1) {
        break;
      }
      currentNode = currentNode.getLink();
      count += 1;
    }
    const targetNode = currentNode.getLink();
    currentNode.setLink(targetNode.getLink());

    targetNode.setLink(null);

    this.#size -= 1;

    return targetNode.getValue();
  }
  /**
   * 특정값을 찾아 제거한다.
   * @param {*} value
   */
  size() {
    return this.#size;
  }
}

const linkedList = new LinkedList();

linkedList.insertFirst('첫번째');
linkedList.insertLast('세번째');
linkedList.insertIdx(2, '두번째');
linkedList.insertIdx(10, '열번째??');
linkedList.insertIdx(5, '오렌지');

linkedList.print();
console.log(linkedList.size());
console.log('-------------구분선--------------');
linkedList.removeLast();
linkedList.removeIdx(2);
linkedList.removeFirst();

linkedList.print();
console.log(linkedList.size());
