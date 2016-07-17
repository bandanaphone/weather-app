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
verify: localStorage.getItem('state')
}},

checkval: function(){
localStorage.setItem('yourid', document.getElementById('userkey').value);	
var processappkey = localStorage.getItem('yourid');
var weather = new XMLHttpRequest();
var deesfault = "Houston, Texas";
weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+deesfault+"&units=imperial&appid="+processappkey, false);
weather.send(null);
var r = JSON.parse(weather.response);
var check = r.main.temp;
if (check){
localStorage.setItem('state', 'granted');
this.setState({verify: 'granted'});
}
else {
this.setState({ falsekeyalert: 'shown' });
localStorage.setItem('state', 'denied');
this.setState({verify: 'denied'});
}
},

render:function(){

if (this.state.verify === 'granted'){

var processappkey = localStorage.getItem('yourid');
var weather = new XMLHttpRequest();
var deesfault = "Houston, Texas";
weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+deesfault+"&units=imperial&appid="+processappkey, false);
weather.send(null);	
var r = JSON.parse(weather.response);
var check = r.main.temp;
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
	
return (<div id="mainapp">
<h3>{deesfault}</h3>
<i className={"wi "+theiconresult+" weathermane"}></i>
<h2>{check}&deg;</h2>
</div>);	
}	
	
else if ( (!this.state.verify) || (this.state.verify === 'denied') ){
return (
<div id="signin" className="texts">
<p>Thank you for downloading this weather.app. This program utilizes data from the Open Weather API. In order to get started, you will need to 
sign up and acquire a personal API key.</p>
<p>You may register at <a href="http://openweathermap.org/" target="_blank">Open Weather API.</a> Registration is easy and free.</p>
<p>Once you have acquired a key, you may begin the app by entering your API key below.</p>
<input className="form-control" type="text" id="userkey" />
<input onClick={this.checkval} id="submitid" className="btn btn-primary center-block" type="submit" value="Activate" />
<p className={"errortext "+this.state.falsekeyalert}>Sorry. There was an error. Are you sure you entered the right key?</p>
</div>);}	

}});
//End of Userdata//
ReactDOM.render(<Weathervane title="weather.app" />, document.getElementById('mainweather'));