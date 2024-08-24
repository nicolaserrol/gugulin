import {
	AmountTypeType,
	CategoryType,
	CurrencyType,
	GroupType,
} from "@/types";

export const DEFAULT_CATEGORIES: Array<CategoryType> = [
	{
		_id: '66c82e714cb86ce2abf7abf1',
		icon: 'construct-outline',
		name: 'Utilities',
		remarks: '',
		value: 'UTILITIES',
	},
	{
		_id: '66c82ec943f82024e11ef87d',
		icon: 'card-outline',
		name: 'Financial Obligation',
		remarks: '',
		value: 'FINANCIAL_OBLIGATION',
	},
	{
		_id: '66c82eceb6e896120ece51df',
		icon: 'medkit-outline',
		name: 'Health & Wellness',
		remarks: '',
		value: 'HEALTH_&_WELLNESS',
	},
	{
		_id: '66c82ed54bc172d727527b46',
		icon: 'car-outline',
		name: 'Transportation',
		remarks: '',
		value: 'TRANSPORTATION',
	},
	{
		_id: '66c82ed8e4992274ab19856a',
		icon: 'business-outline',
		name: 'Real Estate',
		remarks: '',
		value: 'REAL_ESTATE',
	},
	{
		_id: '66c82edd3f6c12f6318d914f',
		icon: 'airplane-outline',
		name: 'Travel',
		remarks: '',
		value: 'TRAVEL',
	},
	{
		_id: '66c82ee2ac5c3040a8e98eeb',
		icon: 'fast-food-outline',
		name: 'Food',
		remarks: '',
		value: 'FOOD',
	},
	{
		_id: '66c82ee78a946ac3baea2ba9',
		icon: 'bag-handle-outline',
		name: 'Hobbies',
		remarks: '',
		value: 'HOBBIES',
	},
	{
		_id: '66c8303dca28111ce431468d',
		icon: 'extension-puzzle-outline',
		name: 'Others',
		remarks: '',
		value: 'OTHERS',
	},
];

export const DEFAULT_CATEGORY: CategoryType = {
	_id: '66c8303dca28111ce431468d',
	icon: 'extension-puzzle-outline',
	name: 'Others',
	remarks: '',
	value: 'OTHERS',
};

export const CURRENCIES: Array<CurrencyType> = [
	{
		_id: '66c82ef53b4491edcbdf3008',
		name: 'Philippine Peso',
		symbol: '₱',
		value: 'php',
	},
	{
		_id: '66c82ef9bef3b8b2f483ca35',
		name: 'Qatari Riyal',
		prepend: true,
		symbol: 'QAR',
		value: 'qar',
	},
	{
		_id: '66c82efca3a239de47d8010c',
		name: 'US Dollars',
		symbol: '$',
		value: 'usd',
	},
];

export const DEFAULT_CURRENCY: CurrencyType = {
	_id: '66c82ef53b4491edcbdf3008',
	name: 'Philippine Peso',
	symbol: '₱',
	value: 'php',
};

export const DEFAULT_PLAN_GROUPS: Array<GroupType> = [
	{
		_id: '66c82fc2c83110c8d620b345',
		icon: "calendar-outline",
		name: "Needs",
		value: "needs",
	},
	{
		_id: '66c82fc67c2c7bd161581ff0',
		icon: "game-controller-outline",
		name: "Wants",
		value: "wants",
	},
	{
		_id: '66c82fca794ed7e59b46be2f',
		icon: "cash-outline",
		name: "Savings",
		value: "savings",
	},
];

export const DEFAULT_PLAN_GROUP: GroupType = {
	_id: '66c82fc2c83110c8d620b345',
	icon: "calendar-outline",
	name: "Needs",
	value: "needs",
};

export const DEFAULT_AMOUNT_TYPES: Array<AmountTypeType> = [
	{
		_id: '66c8314b6403bf0aaaf31389',
		name: "Cash",
		value: "cash",
		icon: "wallet-outline",
	},
	{
		_id: '66c8314e45dd0aab44d5f3e8',
		name: "Digital",
		value: "digital",
		icon: "card-outline",
	},
];

export const DEFAULT_AMOUNT_TYPE: AmountTypeType = {
	_id: '66c8314b6403bf0aaaf31389',
	name: "Cash",
	value: "cash",
	icon: "wallet-outline",
};