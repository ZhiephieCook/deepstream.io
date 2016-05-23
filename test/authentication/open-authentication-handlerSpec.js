var AuthenticationHandler = require( '../../src/authentication/open-authentication-handler' );

describe( 'open authentication handler', function(){
	var authenticationHandler;

	it( 'creates the handler', function(){
		authenticationHandler = new AuthenticationHandler();
		expect( typeof authenticationHandler.isValidUser ).toBe( 'function' );
	});

	it( 'permissions users without auth data', function(){
		var callback = jasmine.createSpy( 'callback' );
		authenticationHandler.isValidUser( null, {}, callback );
		expect( callback ).toHaveBeenCalledWith( null, 'open' );
	});

	it( 'permissions users with a username', function(){
		var callback = jasmine.createSpy( 'callback' );
		authenticationHandler.isValidUser( null, { username: 'Wolfram' }, callback );
		expect( callback ).toHaveBeenCalledWith( null, 'Wolfram' );
	});
});