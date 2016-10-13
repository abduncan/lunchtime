import {
    AngularFire,
    AuthProviders,
    AuthMethods
} from 'angularfire2';

import {
    AuthService
} from '../../app/services';

describe('AuthService', () => {

    let af: AngularFire;
    let authService: AuthService;

    beforeEach(() => {

        // Initialize variables.
        af = new AngularFire('', null, null);
        authService = new AuthService(af);

    });

    it('should call the login method on AngularFire service', () => {
        // Arrange
        let email: string = 'test@test.com';
        let password: string = 'password';

        af.auth = jasmine.createSpyObj('auth spy', ['login']);
        spyOn(af, 'auth');

        // Act
        authService.login(email, password);

        // Assert
        expect(af.auth.login).toHaveBeenCalledWith({
            email,
            password
        }, {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            });
    });

});