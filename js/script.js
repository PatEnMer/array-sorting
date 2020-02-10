(function() {
	const table = document.querySelector('#myTable');
	const ths = table.querySelectorAll('thead th');
	const trs = table.querySelectorAll('tbody tr');

	function makeArray(nodeList) {
		let arr = [];
		for (let i = 0; i < nodeList.length; i++) {
			arr.push(nodeList[i]);
		}
		return arr;
	}

	function clearClassName(nodeList) {
		for (let i = 0; i < nodeList.length; i++) {
			nodeList[i].className = '';
		}
	}

	function sortBy(e) {
		let target = e.target;
		let thsArr = makeArray(ths);
		let trsArr = makeArray(trs);
		let index = thsArr.indexOf(target);
		let df = document.createDocumentFragment();
		let order = target.className === '' || target.className === 'desc' ? 'asc' : 'desc';

		clearClassName(ths);

		trsArr.sort(function(a, b) {
			let tdA = a.children[index].textContent;
			let tdB = b.children[index].textContent;

			if (tdA < tdB) {
				return order === 'asc' ? -1 : 1;
			} else {
				if (tdA > tdB) {
					return order === 'asc' ? 1 : -1;
				} else {
					return 0;
				}
			}
		});

		trsArr.forEach(function(tr) {
			df.appendChild(tr);
		});

		table.querySelector('tbody').appendChild(df);

		target.className = order;
	}

	for (let i = 0; i < ths.length; i++) {
		ths[i].onclick = sortBy;
	}
})();
