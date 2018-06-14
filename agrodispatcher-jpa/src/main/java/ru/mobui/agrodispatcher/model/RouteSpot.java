package ru.mobui.agrodispatcher.model;

import java.io.Serializable;
import javax.persistence.*;

import org.eclipse.persistence.annotations.UuidGenerator;

/**
 * Entity implementation class for Entity: RoutePoint
 *
 */
@Entity
@Table(name="AD_ROUTE_SPOT")
@UuidGenerator(name="UUID")
public class RouteSpot implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(generator="UUID")
	@Column(name = "ID")
	private String id;
	
	@Column(name = "NAME", length = 60)
	private String name;
	
	@Column(name="DESCRIPTION")
	private String description;
	
	@Column(name="LATITUDE", precision=11,scale=9)
	private double latitude;
	
	@Column(name="LONGITUDE", precision=11,scale=9)
	private double longitude;
	
	
	@Column(name="LOADING_POINT")
	private boolean loadingPoint;
	
	@Column(name="UNLOADING_POINT")
	private boolean unloadingPoint;
	
	@Column(name="MIDDLE_POINT")
	private boolean middlePoint;
	
	@Embedded
	private Adderss address;
	
	@Embedded
	private Contact contact;

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
	

	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public double getLatitude() {
		return latitude;
	}



	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}



	public double getLongitude() {
		return longitude;
	}



	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}



	public boolean isLoadingPoint() {
		return loadingPoint;
	}



	public void setLoadingPoint(boolean loadingPoint) {
		this.loadingPoint = loadingPoint;
	}



	public boolean isUnloadingPoint() {
		return unloadingPoint;
	}



	public void setUnloadingPoint(boolean unloadingPoint) {
		this.unloadingPoint = unloadingPoint;
	}



	public boolean isMiddlePoint() {
		return middlePoint;
	}



	public void setMiddlePoint(boolean middlePoint) {
		this.middlePoint = middlePoint;
	}
	

	public RouteSpot() {
		super();
	}



	public Contact getContact() {
		return contact;
	}



	public void setContact(Contact contact) {
		this.contact = contact;
	}



	public Adderss getAddress() {
		return address;
	}



	public void setAddress(Adderss address) {
		this.address = address;
	}
	
	
   
}
