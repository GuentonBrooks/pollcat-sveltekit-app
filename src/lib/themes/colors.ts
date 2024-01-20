import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const pollCatColors = {
	'pollcat-primary': '#30348C',
	'pollcat-secondary': '#03A64A',
	'pollcat-tertiary': '#F21667',
	'pollcat-success': '#00C851',
	'pollcat-warning': '#F2E30F',
	'pollcat-error': '#E41111',
	'pollcat-surface': '#001124'
};

export const pollCatColorTheme: CustomThemeConfig = {
	name: 'pollcat-color-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #30348C
		'--color-primary-50': '224 225 238', // #e0e1ee
		'--color-primary-100': '214 214 232', // #d6d6e8
		'--color-primary-200': '203 204 226', // #cbcce2
		'--color-primary-300': '172 174 209', // #acaed1
		'--color-primary-400': '110 113 175', // #6e71af
		'--color-primary-500': '48 52 140', // #30348C
		'--color-primary-600': '43 47 126', // #2b2f7e
		'--color-primary-700': '36 39 105', // #242769
		'--color-primary-800': '29 31 84', // #1d1f54
		'--color-primary-900': '24 25 69', // #181945
		// secondary | #03A64A
		'--color-secondary-50': '217 242 228', // #d9f2e4
		'--color-secondary-100': '205 237 219', // #cdeddb
		'--color-secondary-200': '192 233 210', // #c0e9d2
		'--color-secondary-300': '154 219 183', // #9adbb7
		'--color-secondary-400': '79 193 128', // #4fc180
		'--color-secondary-500': '3 166 74', // #03A64A
		'--color-secondary-600': '3 149 67', // #039543
		'--color-secondary-700': '2 125 56', // #027d38
		'--color-secondary-800': '2 100 44', // #02642c
		'--color-secondary-900': '1 81 36', // #015124
		// tertiary | #F21667
		'--color-tertiary-50': '253 220 232', // #fddce8
		'--color-tertiary-100': '252 208 225', // #fcd0e1
		'--color-tertiary-200': '252 197 217', // #fcc5d9
		'--color-tertiary-300': '250 162 194', // #faa2c2
		'--color-tertiary-400': '246 92 149', // #f65c95
		'--color-tertiary-500': '242 22 103', // #F21667
		'--color-tertiary-600': '218 20 93', // #da145d
		'--color-tertiary-700': '182 17 77', // #b6114d
		'--color-tertiary-800': '145 13 62', // #910d3e
		'--color-tertiary-900': '119 11 50', // #770b32
		// success | #00C851
		'--color-success-50': '217 247 229', // #d9f7e5
		'--color-success-100': '204 244 220', // #ccf4dc
		'--color-success-200': '191 241 212', // #bff1d4
		'--color-success-300': '153 233 185', // #99e9b9
		'--color-success-400': '77 217 133', // #4dd985
		'--color-success-500': '0 200 81', // #00C851
		'--color-success-600': '0 180 73', // #00b449
		'--color-success-700': '0 150 61', // #00963d
		'--color-success-800': '0 120 49', // #007831
		'--color-success-900': '0 98 40', // #006228
		// warning | #F2E30F
		'--color-warning-50': '253 251 219', // #fdfbdb
		'--color-warning-100': '252 249 207', // #fcf9cf
		'--color-warning-200': '252 248 195', // #fcf8c3
		'--color-warning-300': '250 244 159', // #faf49f
		'--color-warning-400': '246 235 87', // #f6eb57
		'--color-warning-500': '242 227 15', // #F2E30F
		'--color-warning-600': '218 204 14', // #dacc0e
		'--color-warning-700': '182 170 11', // #b6aa0b
		'--color-warning-800': '145 136 9', // #918809
		'--color-warning-900': '119 111 7', // #776f07
		// error | #E41111
		'--color-error-50': '251 219 219', // #fbdbdb
		'--color-error-100': '250 207 207', // #facfcf
		'--color-error-200': '248 196 196', // #f8c4c4
		'--color-error-300': '244 160 160', // #f4a0a0
		'--color-error-400': '236 88 88', // #ec5858
		'--color-error-500': '228 17 17', // #E41111
		'--color-error-600': '205 15 15', // #cd0f0f
		'--color-error-700': '171 13 13', // #ab0d0d
		'--color-error-800': '137 10 10', // #890a0a
		'--color-error-900': '112 8 8', // #700808
		// surface | #001124
		'--color-surface-50': '217 219 222', // #d9dbde
		'--color-surface-100': '204 207 211', // #cccfd3
		'--color-surface-200': '191 196 200', // #bfc4c8
		'--color-surface-300': '153 160 167', // #99a0a7
		'--color-surface-400': '77 88 102', // #4d5866
		'--color-surface-500': '0 17 36', // #001124
		'--color-surface-600': '0 15 32', // #000f20
		'--color-surface-700': '0 13 27', // #000d1b
		'--color-surface-800': '0 10 22', // #000a16
		'--color-surface-900': '0 8 18' // #000812
	}
};
