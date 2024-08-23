import { CurrencyType } from '@/types';
import c from 'currency.js';
import _ from 'lodash';
import moment from 'moment';

type CurrencyOption = {
  pattern?: string;
  precision: number;
  symbol: string;
}

const defaultOptions: CurrencyOption = {
  precision: 2,
  symbol: '₱',
};

/*
 * Handles computations for numbers specially with decimal
 * @param value: 21.02
 * @param options: { symbol: '¥' }
 */
export const currency = (value: number, options: CurrencyOption = defaultOptions) => c(value, options);

export const formatCurrency = (
  amount: number,
  extras: CurrencyType,
) => {
  const {
    prepend,
    symbol = '₱',
  } = extras || {};
  // the regex below magically adds comma as thousand separators
  const options: CurrencyOption = { precision: 2, symbol };
  if (prepend) options.pattern = '# !';
  if (_.isFinite(amount)) return currency(amount, options).format();
  else return '';
};

/*
 * Formats date to user-friendly date
 * @param date: '2021-03-12T07:54:42.488Z'
 *
 * @returns 'Fri, Mar 12, 2021 3:54 PM'
 */
export const formatDateTime = (date: string, format?: string) => moment(date).format(format || 'llll');
