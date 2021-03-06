package cz.fi.muni.pa165.rest.controllers;

import cz.fi.muni.pa165.dto.UserAuthenticateDTO;
import cz.fi.muni.pa165.dto.UserDTO;
import cz.fi.muni.pa165.facade.UserFacade;
import cz.fi.muni.pa165.rest.ApiUris;
import cz.fi.muni.pa165.rest.SecurityUtils;
import cz.fi.muni.pa165.rest.exceptions.NotAuthorizedException;
import cz.fi.muni.pa165.rest.exceptions.ResourceNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author Vojtech Sassmann &lt;vojtech.sassmann@gmail.com&gt;
 */
@RestController
@RequestMapping(ApiUris.ROOT_AUTH)
public class AuthController {

	private final static Logger log = LoggerFactory.getLogger(AuthController.class);

	private final UserFacade userFacade;

	@Inject
	public AuthController(UserFacade userFacade) {
		this.userFacade = userFacade;
	}

	/**
	 * Authenticate User by identifier and password curl -i -X POST
	 * 'http://localhost:8080/pa165/rest/auth?email=alojz@hlinka.com&password=1234'
	 *
	 * @param email email of user
	 * @param password password of user
	 * @return true if authentication succeeded
	 */
	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public final boolean authenticate(@RequestParam("email") String email, @RequestParam("password") String password,
	                                  HttpServletResponse response, HttpServletRequest request) throws Exception {

		log.debug("rest authenticate({}, {})", email, password);

		UserDTO userWithEmail = userFacade.findUserByEmail(email);
		if (userWithEmail == null) {
			throw new NotAuthorizedException("Invalid login combination.");
		}

		UserAuthenticateDTO userAuthenticateDTO = new UserAuthenticateDTO();
		userAuthenticateDTO.setPassword(password);
		userAuthenticateDTO.setUserId(userWithEmail.getId());

		try {
			if(userFacade.authenticate(userAuthenticateDTO)) {
				Cookie cookie = SecurityUtils.generateCookie(userFacade.findUserById(userAuthenticateDTO.getUserId()));
				response.addCookie(cookie);
				return true;
			} else {
				throw new NotAuthorizedException("Invalid login combination.");
			}
		} catch(Exception e) {
			throw new ResourceNotFoundException("User not found");
		}
	}

	/**
	 * Logout user curl -i -X DELETE
	 * 'http://localhost:8080/pa165/rest/auth?email=alojz@hlinka.com&password=1234'
	 *
	 * @return true if logout succeeded
	 */
	@RequestMapping(method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public final boolean logout(HttpServletRequest request, HttpServletResponse response) {

		log.debug("rest logout()");

		Cookie[] cookies = request.getCookies();

		Cookie creaturesCookie = null;

		for (Cookie cookie : cookies) {
			if (SecurityUtils.COOKIE.equals(cookie.getName())) {
				creaturesCookie = cookie;
			}
		}

		if (creaturesCookie == null) {
			return false;
		}

		creaturesCookie.setMaxAge(0);
		response.addCookie(creaturesCookie);
		return true;
	}
}
