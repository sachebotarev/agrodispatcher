package ru.mobui.agrodispatcher.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Adderss
 *
 */

@Embeddable
public class Adderss implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	private String postCode;
	private String country;
	private String region;
	private String subRegion;
	private String city;
	private String street;
	private String number;
	private String apartment;
	
    
	
	public String getPostCode() {
		return postCode;
	}



	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}



	public String getCountry() {
		return country;
	}



	public void setCountry(String country) {
		this.country = country;
	}



	public String getRegion() {
		return region;
	}



	public void setRegion(String region) {
		this.region = region;
	}



	public String getSubRegion() {
		return subRegion;
	}



	public void setSubRegion(String subRegion) {
		this.subRegion = subRegion;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getStreet() {
		return street;
	}



	public void setStreet(String street) {
		this.street = street;
	}



	public String getNumber() {
		return number;
	}



	public void setNumber(String number) {
		this.number = number;
	}



	public String getApartment() {
		return apartment;
	}



	public void setApartment(String apartment) {
		this.apartment = apartment;
	}



	public Adderss() {
		super();
	}
   
}
