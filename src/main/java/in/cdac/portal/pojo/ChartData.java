package in.cdac.portal.pojo;

import java.util.Arrays;

public class ChartData {
	
	public String[] Labels;
	public long[] data;
	public String[] getLabels() {
		return Labels;
	}
	public void setLabels(String[] labels) {
		Labels = labels;
	}
	public long[] getData() {
		return data;
	}
	public void setData(long[] data) {
		this.data = data;
	}
	public ChartData(String[] labels, long[] data) {
		super();
		Labels = labels;
		this.data = data;
	}
	public ChartData() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "ChartData [Labels=" + Arrays.toString(Labels) + ", data=" + Arrays.toString(data) + "]";
	}
	
	
	
	
}
