export const useUtil = () => {

  function useChunkArray(array, chunkSize) {
    const chunkArray = (array, chunkSize) => {
      let index = 0;
      let tempArray = [];
    
      for (index = 0; index < array.length; index += chunkSize) {
        let chunk = array.slice(index, index+chunkSize);
        tempArray.push(chunk);
      }
    
      return tempArray;
    }
  
    const chunkedArray = chunkArray(array, chunkSize);
    return { chunkedArray };
  }

  async function useChunkArrayAsync(array, chunkSize) {
    const chunkArray = (array, chunkSize) => {
      return new Promise((resolve, reject) => {
        let index = 0;
        let tempArray = [];
  
        for (index = 0; index < array.length; index += chunkSize) {
          let chunk = array.slice(index, index + chunkSize);
          tempArray.push(chunk);
        }
  
        resolve(tempArray);
      });
    };
  
    const chunkedArray = await chunkArray(array, chunkSize);
  
  }  

  return {
    useChunkArray,
    useChunkArrayAsync
  }


}




