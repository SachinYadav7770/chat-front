import React,{useEffect,useState} from "react";
// import socket from './io';
import 'bootstrap/dist/css/bootstrap.css';

function Check() {
    return (
        // <!-- partial:index.partial.html -->
    <div className="jumbotron m-0 p-0 bg-transparent">
		<div className="row m-0 p-0 position-relative">
		  <div className="col-12 p-0 m-0 position-absolute" style={{right: "0px"}}>
			<div className="card border-0 rounded" style={{boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.10), 0 6px 10px 0 rgba(0, 0, 0, 0.01)", overflow: "hidden", height: "100vh"}}>

			  <div className="card-header p-1 bg-light border border-top-0 border-left-0 border-right-0" style={{color: "rgba(96, 125, 139,1.0)"}}>
				
				<img className="rounded float-left" style={{width: "50px", height: "50px"}} src="https://i.pinimg.com/736x/5c/24/69/5c24695df36eee73abfbdd8274085ecd--cute-anime-guys-anime-boys.jpg" />
				
				<h6 className="float-left" style={{margin: "0px", marginLeft: "10px"}}> Yusuf Bulgurcu <i className="fa fa-check text-primary" title="Onaylanmış Hesap!" aria-hidden="true"></i><small> İstanbul, TR </small></h6>
					
				  <div className="dropdown show">

					  <a id="dropdownMenuLink" data-toggle="dropdown" className="btn btn-sm float-right text-secondary" role="button"><h5><i className="fa fa-ellipsis-h" title="Ayarlar!" aria-hidden="true"></i>&nbsp;</h5></a>

					<div className="dropdown-menu dropdown-menu-right border p-0" aria-labelledby="dropdownMenuLink">
						
						<a className="dropdown-item p-2 text-secondary" href="#"> <i className="fa fa-user m-1" aria-hidden="true"></i> Profile </a>
						<hr className="my-1"></hr>
						<a className="dropdown-item p-2 text-secondary" href="#"> <i className="fa fa-trash m-1" aria-hidden="true"></i> Delete </a>

					</div>
				  </div>
					
			  </div>
			
				<div className="card bg-sohbet border-0 m-0 p-0" style={{height:"100vh"}}>
			  <div id="sohbet" className="card border-0 m-0 p-0 position-relative bg-transparent" style={{overflowY: "auto", height: "100vh"}}>
			
				<div className="balon1 p-2 m-0 position-relative" data-is="You - 3:20 pm">
				
					<a className="float-right"> Hey there! What's up? </a>
				  
				</div>
				
				<div className="balon2 p-2 m-0 position-relative" data-is="Yusuf - 3:22 pm">
				
					<a className="float-left sohbet2"> Checking out iOS7 you know.. </a>
				  
				</div>
				
				<div className="balon1 p-2 m-0 position-relative" data-is="You - 3:23 pm">
				
					<a className="float-right"> Check out this bubble! </a>
				  
				</div>
				
				<div className="balon2 p-2 m-0 position-relative" data-is="Yusuf - 3:26 pm">
				
					<a className="float-left sohbet2"> It's pretty cool! </a>
				  
				</div>
				
				<div className="balon1 p-2 m-0 position-relative" data-is="You - 3:28 pm">
				
					<a className="float-right"> Yeah it's pure CSS & HTML </a>
				  
				</div>
				
				<div className="balon2 p-2 m-0 position-relative" data-is="Yusuf - 3:33 pm">
				
					<a className="float-left sohbet2"> Wow that's impressive. But what's even more impressive is that this bubble is really high. </a>
				  
				</div>

			  </div>
			  </div>

			  <div className="w-100 card-footer p-0 bg-light border border-bottom-0 border-left-0 border-right-0">
				
					<form className="m-0 p-0" action="" method="POST" autocomplete="off">
    
					  <div className="row m-0 p-0">
						<div className="col-9 m-0 p-1">
						
							<input id="text" className="mw-100 border rounded form-control" type="text" name="text" title="Type a message..." placeholder="Type a message..." required/>
						  
						</div>
						<div className="col-3 m-0 p-1">
						
							<button className="btn btn-outline-secondary rounded border w-100" title="Gönder!" style={{paddingRight:"16px"}}><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
									
						</div>
					  </div>
				
				</form>
					
			  </div>

			</div>
		  </div>
		  
		</div>
	</div>
    )
}

export default Check;