module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !==0) {
        return false;
      }

      let bracket = [];
    
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
          if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == bracket[bracket.length - 1]) {
            bracket.pop();
            continue;
          }
    
          if (str[i] == bracketsConfig[j][0]) {
            bracket.push(str[i]);
          }
    
        }
    
      }
      
      if (bracket.length != 0) {
        return false;
      }
    
      return true;
}
