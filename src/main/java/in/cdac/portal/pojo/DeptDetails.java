package in.cdac.portal.pojo;
import java.sql.Time;
public class DeptDetails {

	private String dept_name;
	private String address;
	private String contact_person;
	private String designation;
	private String email;
	private String mobile;
	private String phone;
	private String username;
	private String passwd;
	private String city;
	private String state_code;
	private String pincode;
	private String dept_code;
	private String schema_name;
	private Time registration_timestamp;
	public String getDept_name() {
		return dept_name;
	}
	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContact_person() {
		return contact_person;
	}
	public void setContact_person(String contact_person) {
		this.contact_person = contact_person;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState_code() {
		return state_code;
	}
	public void setState_code(String state_code) {
		this.state_code = state_code;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getDept_code() {
		return dept_code;
	}
	public void setDept_code(String dept_code) {
		this.dept_code = dept_code;
	}
	public String getSchema_name() {
		return schema_name;
	}
	public void setSchema_name(String schema_name) {
		this.schema_name = schema_name;
	}
	public Time getRegistration_timestamp() {
		return registration_timestamp;
	}
	public void setRegistration_timestamp(Time registration_timestamp) {
		this.registration_timestamp = registration_timestamp;
	}
	public Boolean getDept_is_active() {
		return dept_is_active;
	}
	public void setDept_is_active(Boolean dept_is_active) {
		this.dept_is_active = dept_is_active;
	}
	public String getApp_code() {
		return app_code;
	}
	public void setApp_code(String app_code) {
		this.app_code = app_code;
	}
	public String getApp_name() {
		return app_name;
	}
	public void setApp_name(String app_name) {
		this.app_name = app_name;
	}
	private Boolean dept_is_active;
	private String app_code;
	private String app_name;
	@Override
	public String toString() {
		return "DeptDetails [dept_name=" + dept_name + ", address=" + address + ", contact_person=" + contact_person
				+ ", designation=" + designation + ", email=" + email + ", mobile=" + mobile + ", phone=" + phone
				+ ", username=" + username + ", passwd=" + passwd + ", city=" + city + ", state_code=" + state_code
				+ ", pincode=" + pincode + ", dept_code=" + dept_code + ", schema_name=" + schema_name
				+ ", registration_timestamp=" + registration_timestamp + ", dept_is_active=" + dept_is_active
				+ ", app_code=" + app_code + ", app_name=" + app_name + "]";
	}
	public DeptDetails(String dept_name, String address, String contact_person, String designation, String email,
			String mobile, String phone, String username, String passwd, String city, String state_code, String pincode,
			String dept_code, String schema_name, Time registration_timestamp, Boolean dept_is_active, String app_code,
			String app_name) {
		super();
		this.dept_name = dept_name;
		this.address = address;
		this.contact_person = contact_person;
		this.designation = designation;
		this.email = email;
		this.mobile = mobile;
		this.phone = phone;
		this.username = username;
		this.passwd = passwd;
		this.city = city;
		this.state_code = state_code;
		this.pincode = pincode;
		this.dept_code = dept_code;
		this.schema_name = schema_name;
		this.registration_timestamp = registration_timestamp;
		this.dept_is_active = dept_is_active;
		this.app_code = app_code;
		this.app_name = app_name;
	}
	public DeptDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	


}
