/**
 * Internal dependencies
 */
import { ACTION_TYPES } from './constants';

/**
 * @typedef {import('@woocommerce/type-defs/cart').CartBillingData} CartBillingData
 */

const {
	ERROR,
	FAILED,
	SUCCESS,
	SET_REGISTERED_PAYMENT_METHOD,
	SET_REGISTERED_EXPRESS_PAYMENT_METHOD,
} = ACTION_TYPES;

/**
 * Used to dispatch a status update only for the given type.
 *
 * @param {string} type
 *
 * @return {Object} The action object.
 */
export const statusOnly = ( type ) => ( { type } );

/**
 * Used to dispatch an error message along with setting current payment status
 * to ERROR.
 *
 * @param {string} errorMessage Whatever error message accompanying the error
 *                              condition.
 *
 * @return {Object} The action object.
 */
export const error = ( errorMessage ) => ( {
	type: ERROR,
	errorMessage,
} );

/**
 * Used to dispatch a payment failed status update.
 *
 * @param {Object}             action                   Incoming data for the
 *                                                      action.
 * @param {string}             action.errorMessage      Any message accompanying
 *                                                      the failed payment.
 * @param {CartBillingData} action.billingData       Billing data used for
 *                                                      the failed payment.
 * @param {Object}             action.paymentMethodData Arbitrary extra
 *                                                      information about the
 *                                                      payment method in use
 *                                                      (varies per payment
 *                                                      method).
 *
 * @return {Object} An action object.
 */
export const failed = ( {
	errorMessage,
	billingData,
	paymentMethodData,
} ) => ( {
	type: FAILED,
	errorMessage,
	billingData,
	paymentMethodData,
} );

/**
 * Used to dispatch a payment success status update.
 *
 * @param {Object}             action                   Incoming data for the
 *                                                      action.
 * @param {CartBillingData} action.billingData       Billing data used for
 *                                                      the failed payment.
 * @param {Object}             action.paymentMethodData Arbitrary extra
 *                                                      information about the
 *                                                      payment method in use
 *                                                      (varies per payment
 *                                                      method).
 *
 * @return {Object} An action object.
 */
export const success = ( { billingData, paymentMethodData } ) => ( {
	type: SUCCESS,
	billingData,
	paymentMethodData,
} );

/**
 * Used to dispatch an action for updating a registered payment method in the
 * state.
 *
 * @param {Object} paymentMethod Payment method to register.
 * @return {Object} An action object.
 */
export const setRegisteredPaymentMethod = ( paymentMethod ) => ( {
	type: SET_REGISTERED_PAYMENT_METHOD,
	paymentMethod,
} );

/**
 * Used to dispatch an action for updating a registered express payment
 * method in the state.
 *
 * @param {Object} paymentMethod Payment method to register.
 * @return {Object} An action object.
 */
export const setRegisteredExpressPaymentMethod = ( paymentMethod ) => ( {
	type: SET_REGISTERED_EXPRESS_PAYMENT_METHOD,
	paymentMethod,
} );
