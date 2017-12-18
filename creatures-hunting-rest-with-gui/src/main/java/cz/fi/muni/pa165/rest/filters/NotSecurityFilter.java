package cz.fi.muni.pa165.rest.filters;

import cz.fi.muni.pa165.dto.UserDTO;
import cz.fi.muni.pa165.enums.UserRole;
import cz.fi.muni.pa165.rest.ApiUris;
import cz.fi.muni.pa165.rest.security.SecurityUtils;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @author Vojtech Sassmann &lt;vojtech.sassmann@gmail.com&gt;
 */
@WebFilter(urlPatterns = {
	ApiUris.ROOT_URI_UNSECURED_MONSTERS + "/*",
	ApiUris.ROOT_URI_UNSECURED_WEAPONS + "/*",
	ApiUris.ROOT_URI_UNSECURED_AREAS + "/*",
	ApiUris.ROOT_URI_UNSECURED_USERS + "/*"})
public class NotSecurityFilter implements Filter {
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

	}

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
		HttpServletRequest request = (HttpServletRequest) servletRequest;

		UserDTO fakeAdmin = new UserDTO();
		fakeAdmin.setRole(UserRole.ADMIN);
		fakeAdmin.setId(-1L);

		request.setAttribute(SecurityUtils.AUTHENTICATE_USER, fakeAdmin);

		filterChain.doFilter(servletRequest, servletResponse);
	}

	@Override
	public void destroy() {

	}
}
