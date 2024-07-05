package in.cdac.portal.pojo;


public class Email {
public String uemail;
public String workshop;
public String detail;
public String getUemail() {
	return uemail;
}
public void setUemail(String uemail) {
	this.uemail = uemail;
}
public String getWorkshop() {
	return workshop;
}
public void setWorkshop(String workshop) {
	this.workshop = workshop;
}
public String getDetail() {
	return detail;
}
public void setDetail(String detail) {
	this.detail = detail;
}
public Email(String uemail, String workshop, String detail) {
	super();
	this.uemail = uemail;
	this.workshop = workshop;
	this.detail = detail;
}
public Email() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "Email [uemail=" + uemail + ", workshop=" + workshop + ", detail=" + detail + "]";
}



}
