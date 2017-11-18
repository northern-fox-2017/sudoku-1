class IndexMapper {
  constructor(){
    this.rowsIndexes = this.getRowsIndexes()
    this.columnsIndexes = this.getColumnsIndexes()
    this.regionsIndexes = this.getRegionsIndexes()
    this.indexesMapped = this.getIndexMapByGroup()
  }

  getIndexMapByGroup(){ // {i: x, row: x, col: x, region: x}
    let result = []
    for(let i=0; i< 81; i++){ // linear search
      var item = {i}
      for(let j=0; j < 9; j++){
        if(this.rowsIndexes[j].indexOf(i) >= 0){ 
          item.iRow = j
        }
        if(this.columnsIndexes[j].indexOf(i) >= 0){ 
          item.iColumn = j
        }
        if(this.regionsIndexes[j].indexOf(i) >= 0){ 
          item.iRegion = j
        }
      }
      result.push(item)
    }
    return result
  }
  getRowsIndexes() {
    let rows = []
    for (let i = 0; i < 81; i += 9) {
      let row = []
      for (let j = i; j < i + 9; j++) {
        row.push(j)
      }
      rows.push(row)
    }
    return rows
  }

  getColumnsIndexes() {
    let cols = [];
    for (let i = 0; i < 9; i++) {
      let col = [];
      for (let j = i; j < 9 * 9; j += 9) {
        col.push(j); 
      }
      cols.push(col);
    }
    return cols;
  }
  getRegionsIndexes() {
    let regWidth = 3;
    let regions = [];
    for (let i = 0; i < 9; i += regWidth) {
      let x = i * 9;
      for (let j = 0; j < regWidth; j++) {
        let head = x + j * regWidth;
        let tail =head +
          Math.pow(regWidth, regWidth) - 9 +
          (regWidth - 1);
        let region = [];
        for (let k = head; k <= tail; k += 9) {
          for (let m = k; m < k + regWidth; m++) {
            region.push(m); // m indexnya
          }
        }
        regions.push(region);
      }
    }
    return regions;
  }
}
// let test = new IndexMapper ()
// console.log(JSON.stringify(test.indexesMapped, null, 2))
// console.log('rows',test.rowsIndexes)
// console.log(test.columnsIndexes)
// console.log(test.regionsIndexes)
module.exports = IndexMapper