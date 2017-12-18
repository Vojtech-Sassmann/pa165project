package cz.fi.muni.pa165.rest.controllers.unsecured;

import cz.fi.muni.pa165.facade.MonsterFacade;
import cz.fi.muni.pa165.rest.ApiUris;
import cz.fi.muni.pa165.rest.controllers.MonstersController;
import cz.fi.muni.pa165.rest.security.RoleResolver;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * @author Vojtech Sassmann &lt;vojtech.sassmann@gmail.com&gt;
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_UNSECURED_MONSTERS)
public class NotSecuredMonstersController extends MonstersController {
	public NotSecuredMonstersController(MonsterFacade monsterFacade, RoleResolver roleResolver) {
		super(monsterFacade, roleResolver);
	}
}
