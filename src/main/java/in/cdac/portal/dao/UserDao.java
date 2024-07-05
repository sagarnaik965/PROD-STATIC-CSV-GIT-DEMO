package in.cdac.portal.dao;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Map;

public interface UserDao {

	int deptCount();

	int apkCount();

	long totTrnsaction();

	long getDataForChart(String string, ArrayList<String> resAlstatic);

	long getDataForChartMonthly(String string, int year , ArrayList<String> resAlstatic);

	Map<String, Map<String, Integer>> deptList();

	Map<String, Integer> getapkAndTransAcToDept(String deptName);

	HashSet<String> getAppListDeptWise(String deptName);

	Map<String, Integer> apkWiseCount();

	Map<String, Integer> deptWiseCount();

}
