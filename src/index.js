/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let time = (knowsProgramming) ? 800 : 1300 ;
      /*if (knowsProgramming === true) {
        time = 800;
      } else if (knowsProgramming === false)
        time = 1300;*/
    
      return Math.ceil(time / config[focus]);
  };
  