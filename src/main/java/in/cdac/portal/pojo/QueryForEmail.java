package in.cdac.portal.pojo;

public class QueryForEmail {
public String DepartmnetName;
public String NameOfContactPerson;
public String EmailAddress;
public String MobieNo;
public String Description;
public String getDepartmnetName() {
	return DepartmnetName;
}
public void setDepartmnetName(String departmnetName) {
	DepartmnetName = departmnetName;
}
public String getNameOfContactPerson() {
	return NameOfContactPerson;
}
public void setNameOfContactPerson(String nameOfContactPerson) {
	NameOfContactPerson = nameOfContactPerson;
}
public String getEmailAddress() {
	return EmailAddress;
}
public void setEmailAddress(String emailAddress) {
	EmailAddress = emailAddress;
}
public String getMobieNo() {
	return MobieNo;
}
public void setMobieNo(String mobieNo) {
	MobieNo = mobieNo;
}
public String getDescription() {
	return Description;
}
public void setDescription(String description) {
	Description = description;
}
@Override
public String toString() {
	return "QueryForEmail [DepartmnetName=" + DepartmnetName + ", NameOfContactPerson=" + NameOfContactPerson
			+ ", EmailAddress=" + EmailAddress + ", MobieNo=" + MobieNo + ", Description=" + Description + "]";
}
public QueryForEmail(String departmnetName, String nameOfContactPerson, String emailAddress, String mobieNo,
		String description) {
	super();
	DepartmnetName = departmnetName;
	NameOfContactPerson = nameOfContactPerson;
	EmailAddress = emailAddress;
	MobieNo = mobieNo;
	Description = description;
}
public QueryForEmail() {
	super();
	// TODO Auto-generated constructor stub
}


}
