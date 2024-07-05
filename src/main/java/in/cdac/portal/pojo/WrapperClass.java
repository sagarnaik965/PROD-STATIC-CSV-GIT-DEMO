package in.cdac.portal.pojo;


import java.util.ArrayList;

public class WrapperClass {

	ArrayList<Trans_Stat> al;

	byte [] data ;
	public WrapperClass() {
		al = new ArrayList<Trans_Stat>();
		
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public ArrayList<Trans_Stat> getAl() {
		return al;
	}

	public void setAl(ArrayList<Trans_Stat> al) {
		this.al = al;
	}
}
