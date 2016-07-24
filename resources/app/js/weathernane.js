var Time = React.createClass({	
render: function(){
if (this.props.status){
return (<div className="panelplace">
<h4>time in</h4>
<p className="featureheader">{this.props.location}</p>

</div>);}
else {return null};
}	
});
////////////End Of Time//////////////////
///////////Forecast//////////////////////
var Forecastpane = React.createClass({
getInitialState: function(){
return {
runtheforecast: false
}},	

render: function(){
var day1 = moment().format('dddd MMM Do');
var day2 = moment().add(1, 'days').format('dddd MMM Do');
var day3 = moment().add(2, 'days').format('dddd MMM Do');
var day4 = moment().add(3, 'days').format('dddd MMM Do');
var day5 = moment().add(4, 'days').format('dddd MMM Do');

var foresectioncount = document.getElementsByClassName('foresection');
if (this.props.status){
return (<div className="panelplace">
<h4>5-day forecast in</h4>
<p className="featureheader">{this.props.bringlocation}</p>
<div id="forecastbox">
<ul>

<li className="foresection">
<p>{day1}</p>
<table><tbody>
<tr>
<td>Morn:</td>
<td>{this.props.for1mornr}</td>
</tr>
<tr>
<td>Noon:</td>
<td>{this.props.for1noonr}</td>
</tr>
<tr>
<td>Eve:</td>
<td>{this.props.for1ever}</td>
</tr>
<tr>
<td>Night:</td>
<td>{this.props.for1nightr}</td>
</tr>
</tbody></table>
</li>

<li className="foresection">
<p>{day2}</p>
<table><tbody>
<tr>
<td>Morn:</td>
<td>{this.props.for2mornr}</td>
</tr>
<tr>
<td>Noon:</td>
<td>{this.props.for2noonr}</td>
</tr>
<tr>
<td>Eve:</td>
<td>{this.props.for2ever}</td>
</tr>
<tr>
<td>Night:</td>
<td>{this.props.for2nightr}</td>
</tr>
</tbody></table>
</li>

<li className="foresection">
<p>{day3}</p>
<table><tbody>
<tr>
<td>Morn:</td>
<td>{this.props.for3mornr}</td>
</tr>
<tr>
<td>Noon:</td>
<td>{this.props.for3noonr}</td>
</tr>
<tr>
<td>Eve:</td>
<td>{this.props.for3ever}</td>
</tr>
<tr>
<td>Night:</td>
<td>{this.props.for3nightr}</td>
</tr>
</tbody></table>
</li>

<li className="foresection">
<p>{day4}</p>
<table><tbody>
<tr>
<td>Morn:</td>
<td>{this.props.for4mornr}</td>
</tr>
<tr>
<td>Noon:</td>
<td>{this.props.for4noonr}</td>
</tr>
<tr>
<td>Eve:</td>
<td>{this.props.for4ever}</td>
</tr>
<tr>
<td>Night:</td>
<td>{this.props.for4nightr}</td>
</tr>
</tbody></table>
</li>

<li className="foresection">
<p>{day5}</p>
<table><tbody>
<tr>
<td>Morn:</td>
<td>{this.props.for5mornr}</td>
</tr>
<tr>
<td>Noon:</td>
<td>{this.props.for5noonr}</td>
</tr>
<tr>
<td>Eve:</td>
<td>{this.props.for5ever}</td>
</tr>
<tr>
<td>Night:</td>
<td>{this.props.for5nightr}</td>
</tr>
</tbody></table>
</li>

</ul>
</div>

</div>);}
else {return null;}
}
});
/////////////////////End of Forecast///////////
var Addedfeatures = React.createClass({
///////////////Script For Forecast Call From Added Features///////////
forecastcall: function(){
var selfish = this;
var processappkey = localStorage.getItem('yourid');
$.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.props.bringlocation+'&mode=json&units=imperial&cnt=5&appid='+processappkey, function(data){
selfish.setState(data);
});
},
////////End Of Script For Forecast Call From Added Features////////
getInitialState:function(){
return { forecastopen: false, opentime: false, calledit: null,
list: [
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
]
}},

openforecast: function(){
const res = this.forecastcall();	
this.setState({timeopen: false, forecastopen: true, calledit: res});
},

opentime: function(){
this.setState({timeopen: true, forecastopen: false});	
},

render: function(){	
return(<div className="row">
<h3 className="newheather">Additional Features</h3>

<div id="featurespanel" className="col-md-9 col-sm-9">
<Forecastpane 
bringlocation={this.props.bringlocation}
status={this.state.forecastopen} 

for1mornr={this.props.for1mornr}
for1noonr={this.props.for1noonr}
for1ever={this.props.for1ever}
for1nightr={this.props.for1nightr}

for2mornr={this.props.for2mornr}
for2noonr={this.props.for2noonr}
for2ever={this.props.for2ever}
for2nightr={this.props.for2nightr}

for3mornr={this.props.for3mornr}
for3noonr={this.props.for3noonr}
for3ever={this.props.for3ever}
for3nightr={this.props.for3nightr}

for4mornr={this.props.for4mornr}
for4noonr={this.props.for4noonr}
for4ever={this.props.for4ever}
for4nightr={this.props.for4nightr}

for5mornr={this.props.for5mornr}
for5noonr={this.props.for5noonr}
for5ever={this.props.for5ever}
for5nightr={this.props.for5nightr}

/>

<Time location={this.props.bringlocation} status={this.state.timeopen} />
</div>

<div id="featureslist" className="col-md-3 col-sm-3">
<ul>
<li id="forecastinit" onClick={this.openforecast}>5-day forecast</li>
<li id="timeinit" onClick={this.opentime}>time</li>
</ul>
</div>
</div>);}
});
///////////////////////////////////////End of Additional Features Portion/////////////////////////////////////////////////
//Main Weather Container//
var Weathervane = React.createClass({
render:function(){return (<div>
<h1>{this.props.title}</h1>
<Userdata />
</div>);}
});
//End of Main Weather Container//
//Userdata//
var Userdata = React.createClass({
getInitialState: function(){
return {
falsekeyalert: 'unshown',
verify: localStorage.getItem('state'),
setinstone: true,
deesfault: 'Houston, Texas',
main: '',
weather: [{icon: '', description: ''}],
list: [
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
{temp: {day: '',night: '',eve: '',morn: ''},weather: [{description: '',icon: ''}],},
]
}},

checkval: function(){
/*I do not know why (!arr) must be in front at checkval. It does not work when at the end*/
if (!arr) {
localStorage.setItem('state', 'denied');
this.setState({verify: 'denied'});
this.setState({ falsekeyalert: 'shown' });
}

localStorage.setItem('yourid', document.getElementById('userkey').value);

var processappkey = localStorage.getItem('yourid');
//weather script to test if api key is right//
var weathertest = new XMLHttpRequest();
var deesfault = 'Houston, Texas';
weathertest.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+deesfault+"&units=imperial&appid="+processappkey, false);
weathertest.send(null);
var arr = JSON.parse(weathertest.response);
var checkit = arr.main.temp;
//end of weather script to test if api key is right//

if (arr){
localStorage.setItem('state', 'granted');
this.setState({verify: 'granted'});
}
},

//main weather view//
mainweather: function(){
if (this.state.setinstone){return(
<div onClick={this.changewetlocation} id="mainweatherview">
<h3>{this.state.deesfault}</h3>
</div>);}
else {return(
<textarea id="newplace" defaultValue={this.state.deesfault} onBlur={this.setitinstone} />
);}
},
//end main weather view//
changewetlocation: function(){
this.setState({setinstone: false});
},

setitinstone: function(){
var locationchoose = document.getElementById('newplace').value;
this.callthebase(locationchoose);
this.forecastcall(locationchoose);
this.setState({deesfault: locationchoose, setinstone: true, changeforecast: true});
},

defaultthebase: function(){
var selfish = this;
var processappkey = localStorage.getItem('yourid');
$.get('http://api.openweathermap.org/data/2.5/weather?q='+this.state.deesfault+"&units=imperial&appid="+processappkey,(data) =>{
selfish.setState(data);
});
},

callthebase: function(locationchoose){
var selfish = this;
var processappkey = localStorage.getItem('yourid');
$.get('http://api.openweathermap.org/data/2.5/weather?q='+locationchoose+"&units=imperial&appid="+processappkey,(data) =>{
selfish.setState(data);
});
},

//Forecast Call//
forecastcalldefault: function(){
var selfish = this;
var processappkey = localStorage.getItem('yourid');
$.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.state.deesfault+'&mode=json&units=imperial&cnt=5&appid='+processappkey, function(data){
selfish.setState(data);
});
},

forecastcall: function(locationchoose){
var selfish = this;
var processappkey = localStorage.getItem('yourid');
$.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+locationchoose+'&mode=json&units=imperial&cnt=5&appid='+processappkey, function(data){
selfish.setState(data);
});
},
//End Of Forecast Call//

componentDidMount: function(){
return this.forecastcalldefault(), this.defaultthebase();
},

render:function(){
if (this.state.verify === 'granted'){
//main weather script//
var theicon = this.state.weather[0].icon;
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
//end of main weather script//

return (<div id="mainapp">
{this.mainweather()}
<i className={"wi "+theiconresult+" weathermane"}></i>
<h2>{this.state.main.temp}&deg;</h2>
<p>{this.state.weather[0].description}</p>
<p>humidity: {this.state.main.humidity}</p>
<Addedfeatures bringlocation={this.state.deesfault} 

for1mornr={this.state.list[0].temp.morn}
for1noonr={this.state.list[0].temp.day}
for1ever={this.state.list[0].temp.eve}
for1nightr={this.state.list[0].temp.night}

for2mornr={this.state.list[1].temp.morn}
for2noonr={this.state.list[1].temp.day}
for2ever={this.state.list[1].temp.eve}
for2nightr={this.state.list[1].temp.night}

for3mornr={this.state.list[2].temp.morn}
for3noonr={this.state.list[2].temp.day}
for3ever={this.state.list[2].temp.eve}
for3nightr={this.state.list[2].temp.night}

for4mornr={this.state.list[3].temp.morn}
for4noonr={this.state.list[3].temp.day}
for4ever={this.state.list[3].temp.eve}
for4nightr={this.state.list[3].temp.night}

for5mornr={this.state.list[4].temp.morn}
for5noonr={this.state.list[4].temp.day}
for5ever={this.state.list[4].temp.eve}
for5nightr={this.state.list[4].temp.night}

/>
</div>);
}

else if ( (!this.state.verify) || (this.state.verify === 'denied') ){
return (
<div id="signin" className="texts">
<p>Thank you for downloading this weather.app. This program utilizes data from the Open Weather API. In order to get started, you will need to
sign up and acquire a personal API key. Please note that it may take a few hours for your new API key to work.</p>
<p>You may register at <a href="http://openweathermap.org/" target="_blank">Open Weather API.</a> Registration is easy and free.</p>
<p>Once you have acquired a key, you may begin the app by entering your API key below.</p>
<input className="form-control" type="text" id="userkey" />
<input onClick={this.checkval} id="submitid" className="btn btn-primary center-block" type="submit" value="Activate" />
<p className={"errortext "+this.state.falsekeyalert}>Sorry. There was an error. Are you sure you entered the right key?</p>
</div>);}

}});
//End of Userdata//
ReactDOM.render(<Weathervane title="weather.app" />, document.getElementById('mainweather'));
