import { Category, Currency } from "@/features/preference";

export const DEFAULT_CATEGORIES: Array<Category> = [
	{
		code: 'ELECTRIC',
		icon: 'flash-outline',
		name: 'Electric Utilities',
		remarks: '',
	},
	{
		code: 'WATER',
		icon: 'water-outline',
		name: 'Water Utilities',
		remarks: '',
	},
	{
		code: 'INTERNET',
		icon: 'wifi-outline',
		name: 'Internet',
		remarks: '',
	},
	{
		code: 'CREDIT_CARD',
		icon: 'card-outline',
		name: 'Credit Card',
		remarks: '',
	},
	{
		code: 'INSURANCE',
		icon: 'medkit-outline',
		name: 'Insurance',
		remarks: '',
	},
	{
		code: 'TRANSPORTATION',
		icon: 'car-outline',
		name: 'Transportation',
		remarks: '',
	},
	{
		code: 'REAL_ESTATE',
		icon: 'business-outline',
		name: 'Real Estate',
		remarks: '',
	},
	{
		code: 'TRAVEL',
		icon: 'airplane-outline',
		name: 'Travel',
		remarks: '',
	},
	{
		code: 'FOOD',
		icon: 'fast-food-outline',
		name: 'Food',
		remarks: '',
	},
	{
		code: 'SHOPPING',
		icon: 'bag-handle-outline',
		name: 'Shopping',
		remarks: '',
	},
	{
		code: 'LOAN',
		icon: 'cash-outline',
		name: 'Loan',
		remarks: '',
	},
];

export const CURRENCIES: Array<Currency> = [
	{
    code: 'php',
    name: 'Philippine Peso',
    symbol: '₱',
  },
	{
    code: 'qar',
    name: 'Qatari Riyal',
		prepend: true,
    symbol: 'QAR',
  },
	{
    code: 'usd',
    name: 'US Dollars',
    symbol: '$',
  },
]