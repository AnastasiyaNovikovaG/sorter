class Sorter {
  constructor() {
    // your implementation
      this.array = [];
      this.comparator = function (a,b){return a-b;}
  }

  add(element) {
    // your implementation
    this.array.push(element);
  }

  at(index) {
    // your implementation
      return this.array[index];
  }

  get length() {
    // your implementation
      return this.array.length
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
      indices.sort();
      let new_array = [];
      for (let i = 0; i < indices.length; i++) {
          new_array.push(this.array[indices[i]]);
      }
      new_array.sort(this.comparator);
      for (let i = 0; i < indices.length; i++){
          this.array.splice(indices[i], 1, new_array[i]);
      }
  }
    setComparator(compareFunction) {
        // your implementation
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;