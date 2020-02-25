/**
 * External dependencies
 */
import { select, apiFetch } from '@wordpress/data-controls';
import { camelCase, mapKeys } from 'lodash';

/**
 * Internal dependencies
 */
import { receiveCart, receiveError } from './actions';
import { STORE_KEY, CART_API_ERROR } from './constants';

/**
 * Resolver for retrieving all cart data.
 */
export function* getCartData() {
	const cartData = yield apiFetch( {
		path: '/wc/store/cart',
		method: 'GET',
		cache: 'no-store',
	} );

	if ( ! cartData ) {
		yield receiveError( CART_API_ERROR );
		return;
	}

	yield receiveCart(
		mapKeys( cartData, ( _value, key ) => {
			return camelCase( key );
		} )
	);
}

/**
 * Resolver for retrieving cart totals.
 */
export function* getCartTotals() {
	yield select( STORE_KEY, 'getCartData' );
}
