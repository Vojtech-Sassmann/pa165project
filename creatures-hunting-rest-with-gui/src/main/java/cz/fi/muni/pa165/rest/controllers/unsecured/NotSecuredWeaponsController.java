package cz.fi.muni.pa165.rest.controllers.unsecured;

import cz.fi.muni.pa165.facade.MonsterFacade;
import cz.fi.muni.pa165.facade.WeaponFacade;
import cz.fi.muni.pa165.rest.ApiUris;
import cz.fi.muni.pa165.rest.controllers.WeaponsController;
import cz.fi.muni.pa165.rest.security.RoleResolver;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Vojtech Sassmann &lt;vojtech.sassmann@gmail.com&gt;
 */
@RestController
@RequestMapping(ApiUris.ROOT_URI_UNSECURED_WEAPONS)
public class NotSecuredWeaponsController extends WeaponsController {
	public NotSecuredWeaponsController(WeaponFacade weaponFacade, MonsterFacade monsterFacade, RoleResolver roleResolver) {
		super(weaponFacade, monsterFacade, roleResolver);
	}
}
