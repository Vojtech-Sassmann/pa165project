package cz.fi.muni.pa165.rest.controllers.unsecured;

import cz.fi.muni.pa165.facade.UserFacade;
import cz.fi.muni.pa165.rest.ApiUris;
import cz.fi.muni.pa165.rest.controllers.UsersController;
import cz.fi.muni.pa165.rest.security.RoleResolver;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Vojtech Sassmann &lt;vojtech.sassmann@gmail.com&gt;
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_UNSECURED_USERS)
public class UnsecuredUsersController extends UsersController {
	public UnsecuredUsersController(UserFacade monsterFacade, RoleResolver roleResolver) {
		super(monsterFacade, roleResolver);
	}
}
