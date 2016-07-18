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
weather: [{icon: '', description: ''}]
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
var deesfault = "Houston, Texas";
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
this.setState({deesfault: document.getElementById('newplace').value});	
this.setState({setinstone: true});	
},

callthebase: function(){
var selfish = this;
var processappkey = localStorage.getItem('yourid');
$.get('http://api.openweathermap.org/data/2.5/weather?q='+this.state.deesfault+"&units=imperial&appid="+processappkey, function(data){
selfish.setState(data);	
});		
},

componentDidMount: function(){
return this.callthebase();
},

componentDidUpdate: function(){
if (this.state.setinstone){
return this.callthebase();}
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