function groupAdultsByAgeRange(people) {
     const result = {}
    items = new Array();
    items = people;

    if((items == undefined) || (items.lengh == 0))
    {
        return result;
    }

    var group_20_younger = people.filter(function (item) {
            return item.age >= 18 &&  item.age <=20
      });
      if (group_20_younger.length !=0)
        {
            result['20 and younger'] = group_20_younger;
        }
     var group_21_30 = people.filter(function (item) {
        return item.age >= 21 &&  item.age <=30
      });
      if (group_20_younger.length !=0)
      {
          result['21-30'] = group_21_30;
      }
      var group_31_40 = items.filter(function (item) {
        return item.age >= 31 &&  item.age <=40
      });
      if (group_31_40.length !=0)
      {
          result['31-40'] = group_31_40;
      }
      var group_41_50 = items.filter(function (item) {
        return item.age >= 41 &&  item.age <=50
        
      });
      if (group_41_50.length !=0)
      {
          result['41-50'] = group_41_50;
      }     
      var group_51_older = items.filter(function (item) {
        return item.age > 50
      });
      if (group_51_older.length !=0)
      {
          result['51 and older'] = group_51_older;
      } 
return result;


}
// groupAdultsByAgeRange(people)

 
// exports the variables and functions above so that other modules can use them
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;