/**
 * Created by Jeorch on 2016/11/9.
 */
function getTime() {
    var myDate = new Date();
    var curYear = myDate.getFullYear();
    var curMonth = myDate.getMonth();
    var curDay = myDate.getDay();
    var curHour = myDate.getHours();
    var curMinute = myDate.getMinutes();
    var curSecond = myDate.getSeconds();
    var curTime = curYear+'-'+curMonth+'-'+curDay+' '+curHour+':'+curMinute+':'+curSecond
}