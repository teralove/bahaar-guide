module.exports = {
	BossActions: {
		103: {msg: 'Front (Dodge)'},//103 104

		117: {msg: 'Jump (Bait)'},
		118: {msg: 'Jump (Tank)'},

		131: {msg: 'Front -> Left Scratch'},//131 132 134
		125: {msg: 'Front -> Right Scratch'},//125 126 127

		108: {msg: 'Stun'},
		111: {msg: 'Back'},
		//137: {msg: 'Back'}, //Useless now since we are predicting that attack earlier on every Case it occure.

		114: {msg: 'Eviscerate'},
		115: {msg: 'Knockup'},//114 115
		138: {msg: 'Knockback (Bait)'},//113 138

		116: {msg: 'Donuts'},

		101: {msg: 'Spin Patern'},
		139: {msg: 'Spin'},//108 110 139    118 139    101 105 107 139

		121: {msg: 'Normal Waves (Left)'},
		122: {msg: '3rd Fast Waves (Left)'},
		123: {msg: '2nd Fast Waves (Left)'},
		
		140: {msg: 'Normal Waves (Right)'},
		141: {msg: '3rd Fast Waves (Right)'},
		142: {msg: '2nd Fast Waves (Right)'},

		135: {msg: 'Handle'},
		112: {msg: 'Handle'},
		
		119: {msg: 'Left Swipe'},
		120: {msg: 'Right Swipe'},

		309: {msg: 'STUN IT!'},
		310: {msg: 'STUN IT!'},

		305: {msg: 'Meteors'},
		306: {msg: 'Meteors'},
	}
}
