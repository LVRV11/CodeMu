import React from 'react';

function App(){
	function func(event){
		console.log(event.target);
	}
	return <div>
		<button onClick={func}>aaaa</button>
	</div>
}






export default App;
