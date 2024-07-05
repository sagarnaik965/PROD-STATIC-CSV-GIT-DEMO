package in.cdac.portal.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.apache.ignite.cache.query.annotations.QuerySqlField;

@Table(name = "trans_stats")
@Entity
public class Trans_Stat implements Serializable{

	@QuerySqlField(index = true)
	@Column(name = "ac")
	public String ac;
	@QuerySqlField(index = true)
	@Column(name = "scheme_code")
	public String scheme_code;
	@QuerySqlField(index = true)
	@Column(name = "opr")
	public String opr;
	@QuerySqlField(index = true)
	@Column(name = "status")
	public String status;
	@QuerySqlField(index = true)
	@Column(name = "err")
	public String err;
	@QuerySqlField(index = true)
	@Column(name = "date")
	public String date;
	@QuerySqlField(index = true)
	@Column(name = "txn_count")
	public Integer txn_count;
	@QuerySqlField(index = true)
	@Column(name = "is_exist_ref_num")
	public boolean is_exist_ref_num;
	@QuerySqlField(index = true)
	@Column(name = "trans_id")
	public Integer trans_id;
	
	public Trans_Stat() {}

	
	public Trans_Stat(String ac, String scheme_code, String opr, String status, String err, String date,
			Integer txn_count, boolean is_exist_ref_num, Integer trans_id) {
		super();
		this.ac = ac;
		this.scheme_code = scheme_code;
		this.opr = opr;
		this.status = status;
		this.err = err;
		this.date = date;
		this.txn_count = txn_count;
		this.is_exist_ref_num = is_exist_ref_num;
		this.trans_id = trans_id;
	}


	public String getAc() {
		return ac;
	}

	public void setAc(String ac) {
		this.ac = ac;
	}

	public String getScheme_code() {
		return scheme_code;
	}

	public void setScheme_code(String scheme_code) {
		this.scheme_code = scheme_code;
	}

	public String getOpr() {
		return opr;
	}

	public void setOpr(String opr) {
		this.opr = opr;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getErr() {
		return err;
	}

	public void setErr(String err) {
		this.err = err;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Integer getTxn_count() {
		return txn_count;
	}

	public void setTxn_count(Integer txn_count) {
		this.txn_count = txn_count;
	}

	public boolean isIs_exist_ref_num() {
		return is_exist_ref_num;
	}

	public void setIs_exist_ref_num(boolean is_exist_ref_num) {
		this.is_exist_ref_num = is_exist_ref_num;
	}

	public Integer getTrans_id() {
		return trans_id;
	}

	public void setTrans_id(Integer trans_id) {
		this.trans_id = trans_id;
	}
	
}
