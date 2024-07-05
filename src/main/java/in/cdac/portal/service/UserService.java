package in.cdac.portal.service;

import java.util.HashSet;
import java.util.Map;

import in.cdac.portal.pojo.ChartData;

public interface UserService {

	int deptCount();

	int apkCount();

	long totTrnsaction();

	ChartData getDataForChart();

	ChartData getDataForChartMonthly();

	Map<String, Map<String, Integer>> deptList();

	Map<String, Integer> getapkAndTransAcToDept(String deptName);

	HashSet<String> getAppListDeptWise(String deptName);

	Map<String, Integer> apkWiseCount();

	Map<String, Integer> deptWiseCount();


}
