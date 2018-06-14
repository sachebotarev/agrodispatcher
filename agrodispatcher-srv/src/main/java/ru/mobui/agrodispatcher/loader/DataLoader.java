package ru.mobui.agrodispatcher.loader;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.naming.NamingException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import com.google.gson.Gson;
import ru.mobui.agrodispatcher.model.Route;
import ru.mobui.agrodispatcher.model.RouteSpot;
import ru.mobui.agrodispatcher.model.JpaEntityManagerFactory;

public class DataLoader {
	
	public String load() throws Exception {
		EntityManagerFactory emf;
		BufferedReader bufferedReader;
		ArrayList<Result> result =  new ArrayList<Result>();
		ClassLoader classLoader = getClass().getClassLoader();
		
		try {
			emf = JpaEntityManagerFactory.getEntityManagerFactory();
			EntityManager em = emf.createEntityManager();
			em.getTransaction().begin();
			// Route begin
			bufferedReader = new BufferedReader(
			          new InputStreamReader(classLoader.getResourceAsStream("route.json")));
			Route[] routes = new Gson().fromJson(bufferedReader, Route[].class);
			if(routes != null && routes.length > 0 ) {
				for(Route route :routes) {
						em.persist(route);
				}
				result.add(new Result("Route", routes.length));
			}
			// Route end
			
			// Route Point begin
			bufferedReader = new BufferedReader(
			          new InputStreamReader(classLoader.getResourceAsStream("route_spot.json")));
			RouteSpot[] routePoints= new Gson().fromJson(bufferedReader, RouteSpot[].class);
			if(routePoints != null && routePoints.length > 0 ) {
				for(RouteSpot routePoint : routePoints) {
					em.persist(routePoint);
				}
				result.add(new Result("Route Spot", routePoints.length));
			}
			// Route Point end
			
			em.getTransaction().commit();
			em.close();
			
		} catch (NamingException | SQLException e) {
			throw new Exception( new Gson().toJson(e));
		}
		
		return new Gson().toJson(result);

	}
}
