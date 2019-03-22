/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;
	preferences.unshift(0);
	var length = preferences.length;
	for(var i = 1; i < length; i++){
		var presentValue = preferences[i];
		var nextValue = preferences[presentValue];
		if(preferences[nextValue]==i) count+=1;
		}
		count=count/3;
		return count-(count%1);
};
