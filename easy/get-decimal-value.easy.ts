interface INode<T> {
  value: T;
  next?: INode<T>;
}

/* 1290. Convert Binary Number in a Linked List to Integer */

function getDecimalValue(head: any): number {
  let result = 0;
  let node = head;

  while (node) {
    result = result * 2 + node.value;
    node = node.next;
  }

  return result;
}
