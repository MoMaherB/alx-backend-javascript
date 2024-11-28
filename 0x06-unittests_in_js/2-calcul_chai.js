const calculateNumber = (type, a, b) => {
	const aNum = Math.round(a);
	const bNum = Math.round(b);
	let cNum = 0;
	if (type === 'SUM') {
		cNum = aNum + bNum;
	} else if (type === 'SUBTRACT') {
		cNum = aNum - bNum;
	}
	else if (type === 'DIVIDE') {
		if (bNum === 0) {
			cNum = "Error";
		} else {
			cNum = aNum / bNum;
		}
	}
	return cNum;
}

module.exports = calculateNumber;
