const {BadRequestError} = require("../utils/errors");

class giftExchange {
   pairs(names) {
      if (names.length % 2 != 0) {
         throw new BadRequestError("Number of names must be even");
      }
      names.sort(() => Math.random() - 0.5);
      let names2 = names;
      let result = [];
      let length = names2.length / 2;
      for (let i = 0; i < length; i++) {
         let random = Math.floor(Math.random() * names2.length);
         if(names2[random] == names2[i]) {
            names2[random] = names2[random]++;
         } 
         let tuple = [names2.splice(random, 1), names2.splice(i, 1)];
         result[i] = tuple;
      }
      return result;
   }

   traditional(names) {   
      //shuffle
      names.sort(() => Math.random() - 0.5);
      let result = [];
      let lastNum = names.length - 1;
      for (let i = 1; i < names.length; i++) {
         if (i == lastNum) {
            result.push(`${names[lastNum]} is giving a gift to ${names[0]}`)
         } else {
            result.push(`${names[i-1]} is giving a gift to ${names[i]}`)
         }
         
      }
      return result;
   }
}

module.exports = {
   giftExchange
}

 //pairs method - parameter names
 //traditional method - parameter names