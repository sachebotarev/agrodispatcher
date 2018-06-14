package ru.mobui.agrodispatcher.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.eclipse.persistence.annotations.UuidGenerator;

@Entity
@Table(name = "AD_ROUTE")
@UuidGenerator(name="UUID")
public class Route implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "ROUTE_ID")
	@GeneratedValue(generator="UUID")
	private String id; 
	
	@Column (name = "ROUTE_NAME", length = 60)
	private String name;

	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
}
