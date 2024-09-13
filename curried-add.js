function curriedAdd(total) {
	if (total == undefined) return 0;
	return function nxt(num){
		if (num === undefined) return total;
		total += num;
		return nxt;
	};
}

module.exports = { curriedAdd };
