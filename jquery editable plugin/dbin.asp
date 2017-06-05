<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<%
Response.Buffer = True
response.Charset="utf-8"
on error resume next
Dim TimerStart, TimerEnd, TimerNow, TimerWait
TimerWait = 5
TimerNow = Timer
TimerStart = TimerNow
TimerEnd = TimerStart + TimerWait
Do While (TimerNow < TimerEnd)
TimerNow = Timer
If (TimerNow < TimerStart) Then
TimerNow = TimerNow + 86400
End If
Loop
str="driver={microsoft access driver (*.mdb)};uid=admin;pwd=123456;dbq="&server.MapPath("db1.mdb")
set conn=Server.CreateObject("ADODB.Connection")
conn.open str
t_txt3=request.Form("t")
sql="update testTbl set t_txt3='"&t_txt3&"' where t_id=1"
conn.execute(sql)
if err.number<>0 then
response.Write("1")
else
response.Write("0")
end if
%>
