SELECT 
	m.mna_name,
    Count(c.stdcomt_id) as allConf,
    att.cot,    
    group_concat(s.stdcomt_name)
FROM MNA_STDCOMT_LINK_TABLE mslt 
Inner join MNA m 
Inner Join STDCOMT s 
inner join PARTY p 
Inner join (SELECT *, count(attName) cot FROM naw_db.ATTENDANCE group by attName) att
inner join COMM c
on m.MNA_Id = mslt.mna_id and s.STDCOMT_ID = mslt.STDCOMT_ID and m.party_ID = p.party_id and att.mna_id = m.mna_id and att.comm_id = c.comm_id
group by m.mna_id;