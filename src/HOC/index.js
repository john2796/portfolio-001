

export const multiFilter = (arr, filters) => {
  const filterKeys = Object.keys(filters)
  //filter all elmeents passing the criteria
  return arr.filter((item) => {
    //dynamically validate all filter criteria
    return filterKeys.every(key => !!~filters[key].indexOf(item[key]))
  })
}
/*the value of each key is an array with the values to filter

let filters = {
  color: ['blue', 'black'],
  size: [70, 50]
}

 filter the products array by color: blue and blac and also by size: 70 amd 50

 invoked
 const filtered = multiFilter(products, filters)
*/

