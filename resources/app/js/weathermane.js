var Weatherapp = React.createClass({
getInitialState:function(){
return {
weatherplace: 'Houston, Texas',
setplace: false,
appkey: true
};	
},

setinstone: function(){
this.setState({
	weatherplace: document.getElementById('sulocation').value,
	setplace:false
	});	
},

mainlocation: function(){
if (this.state.setplace){
return (
<div id="mainweatherchange">
<textarea id="sulocation" defaultValue={this.state.weatherplace} onBlur={this.setinstone}></textarea>
</div>
);} 
else {	
return (
<div id="mainweathercontainer">
<h4 className="mainweather" onClick={this.changelocation}>{this.state.weatherplace}<span className="blinker">|</span></h4>
</div>
);}	
},

changelocation:function(){
this.setState({setplace: true});	
},	

testicall:function(){
return (
{this.mainlocation()}
<i className={"wi "+theiconresult+" weathermane"}></i>
<h3>{temp}&deg;</h3>
)	
},

render:function(){
//weather api//	
var appid = "1333982caee02b04d765f15ec51bf10d";
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+this.state.weatherplace+"&units=imperial&appid="+appid, false);
weather.send(null);
var r = JSON.parse(weather.response);
var temp = r.main.temp;	
var theicon = r.weather[0].icon;

if ((theicon == "04d") || (theicon == "04n"))
{var theiconresult = "wi-cloudy";}	
else if (theicon == "01d")
{var theiconresult = "wi-day-sunny";}
else if (theicon == "01n")
{var theiconresult = "wi-night-clear";}	
else if ((theicon == "03d") || (theicon == "03n"))
{var theiconresult = "wi-cloud";}
else if ((theicon == "09d") || (theicon == "09n"))
{var theiconresult = "wi-rain";}
else if (theicon == "10d")
{var theiconresult = "wi-day-rain";}
else if (theicon == "10n")
{var theiconresult = "wi-night-alt-rain";}	
else if ((theicon == "11d") || (theicon == "11n"))
{var theiconresult = "wi-lightning";}
else if ((theicon == "13d") || (theicon == "13n"))
{var theiconresult = "wi-snow-wind";}	
else if ((theicon == "50d") || (theicon == "50n"))
{var theiconresult = "wi-raindrops";}
else if (theicon == "02d")
{var theiconresult = "wi-day-cloudy";}
else if (theicon == "02n")
{var theiconresult = "wi-night-alt-cloudy";}	
//end of weather api//	

return (
<div id="weatherappcontainer">
<h1 id="maintitle">weather.app</h1>
if (appkey){
	{this.testicall()}}
//{this.mainlocation()}//
//<i className={"wi "+theiconresult+" weathermane"}></i>//
//<h3>{temp}&deg;</h3>//
</div>
);}	
});
//end of Main Weather App//
//AddedFeature//
ReactDOM.render(<Weatherapp/>, document.getElementById('weathercontainer'));