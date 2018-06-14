package ru.mobui.agrodispatcher.model;

import java.io.Serializable;
import java.lang.String;
import javax.persistence.*;

/**
 * Entity implementation class for Entity: Capacity
 *
 */
@Entity

public class Capacity implements Serializable {
	
	   
	@Id
	@GeneratedValue(generator="UUID")
	private String id;
	private String routeSpotId;
	private String name;
	private String description;
	@Transient
	private String XXX;
	
	@Column(name = "START_HOUR")
	private int startHour;
	
	@Column(name = "START_MINUTE")
	private int startMinute;
	
	@Column(name = "FINISH_HOUR")
	private int finishHour;
	
	@Column(name = "FINISH_MINUTE")
	private int finishMinute;
	
	@Column(name = "BREAK_START_HOUR")
	private int breakStartHour;
	
	@Column(name = "BREAK_START_MINUTE")
	private int breakStartMinute;
	
	@Column(name = "BREAK_FINISH_HOUR")
	private int breakFinishHour;
	
	@Column(name = "BREAK_FINISH_MINUTE")
	private int breakFinishMinute;
	
	private static final long serialVersionUID = 1L;

	public Capacity() {
		super();
	}   
	public String getId() {
		return this.id;
	}

	public void setId(String id) {
		this.id = id;
	}   
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public String getRouteSpotId() {
		return routeSpotId;
	}
	public void setRouteSpotId(String routeSpotId) {
		this.routeSpotId = routeSpotId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public int getStartHour() {
		return startHour;
	}
	public void setStartHour(int startHour) {
		this.startHour = startHour;
	}
	public int getStartMinute() {
		return startMinute;
	}
	public void setStartMinute(int startMinute) {
		this.startMinute = startMinute;
	}
	public int getFinishHour() {
		return finishHour;
	}
	public void setFinishHour(int finishHour) {
		this.finishHour = finishHour;
	}
	public int getFinishMinute() {
		return finishMinute;
	}
	public void setFinishMinute(int finishMinute) {
		this.finishMinute = finishMinute;
	}
	public int getBreakStartHour() {
		return breakStartHour;
	}
	public void setBreakStartHour(int breakStartHour) {
		this.breakStartHour = breakStartHour;
	}
	public int getBreakStartMinute() {
		return breakStartMinute;
	}
	public void setBreakStartMinute(int breakStartMinute) {
		this.breakStartMinute = breakStartMinute;
	}
	public int getBreakFinishHour() {
		return breakFinishHour;
	}
	public void setBreakFinishHour(int breakFinishHour) {
		this.breakFinishHour = breakFinishHour;
	}
	public int getBreakFinishMinute() {
		return breakFinishMinute;
	}
	public void setBreakFinishMinute(int breakFinishMinute) {
		this.breakFinishMinute = breakFinishMinute;
	}
	public String getXXX() {
		return "Hello";
	}
	public void setXXX(String XXX) {
		this.XXX = XXX;
	}

   
}
