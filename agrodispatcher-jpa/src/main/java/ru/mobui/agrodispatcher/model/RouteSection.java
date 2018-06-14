package ru.mobui.agrodispatcher.model;

import java.io.Serializable;
import javax.persistence.*;

import org.eclipse.persistence.annotations.UuidGenerator;

/**
 * Entity implementation class for Entity: RouteSection
 *
 */
@Entity
@Table(name="AD_ROUTE_SECTION")
@UuidGenerator(name="UUID")
public class RouteSection implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="ROUTE_SECTION_ID")
	@GeneratedValue(generator="UUID")
	private String id;
	
	@Column(name="ROUTE_ID")
	private String route_id;

	public RouteSection() {
		super();
	}
   
}
