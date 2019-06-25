import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './dashboard';
import {cleanInput, calculateVat, truncateReason, formatCurrency, formatInput
} from './helper';
import ToggleableExpenseForm from './toggleableExpenseForm';
import ExpenseList from './expenseList';

describe('expenses', () => {
    describe('Dashboard', () => {
        it('renders without crashing', () => {
            shallow(<Dashboard />);
        })
    })
    describe('ToggleabelExpenseForm', () => {
        it('renders without crashing', () => {
            shallow(<ToggleableExpenseForm />);
        })
    })
    describe('ExpenseList', () => {
        it('renders without crashing', () => {
            shallow(<ExpenseList />);
        })
    })

    describe('helper', () => {
        describe('truncateReason(), truncates a string', () => {
            const string = 'test string to truncate';

            it('truncates a string', () => {
                expect(truncateReason(string, 10)).toBe('test strin...')
            })      
            it('no-ops if <= length', () => {
                expect(
                truncateReason(string, string.length)
                ).toEqual(string);
            });
                  
        });
        describe('calculateVat(), calculates vat', () => {
            it('cleanse input and returns a vat', () => {
                expect(calculateVat('100,EUR', 20)).toBe(20);
            })
        })
        describe('cleanInput()', () => {
            it('removes all none digits except periodss', () => {
                expect(cleanInput('103h$.6')).toBe('103.6')
            })
        })
        describe('formatCurrency()', () => {
            it('format inputs to pounds', () => {
                expect(formatCurrency(1000)).toBe('€1,000.00')
            })
        })
        describe('formatInput()', () => {
            it('formats input', () => {
                expect(formatInput(5000)).toEqual('5,000');
            })
        })
    })
})