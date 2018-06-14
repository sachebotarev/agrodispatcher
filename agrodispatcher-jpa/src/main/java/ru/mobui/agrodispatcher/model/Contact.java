package ru.mobui.agrodispatcher.model;

import java.io.Serializable;

import javax.persistence.Embeddable;

/**
 * Entity implementation class for Entity: Contact
 *
 */
@Embeddable
public class Contact implements Serializable {

	private static final long serialVersionUID = 1L;
	private String phone;
	private String mobile;
	private String fax;
	private String email;
	

	public Contact() {
		super();
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getFax() {
		return fax;
	}


	public void setFax(String fax) {
		this.fax = fax;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}
	
	
   
}
