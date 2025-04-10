import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css'

const customIcon = L.icon({
  iconUrl: 'LibraryIcon.png', 
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],  
});

const peacebridgeIcon = L.icon({
  iconUrl: 'PeaceBridgeIcon.png', 
  iconSize: [30, 45], 
  iconAnchor: [15, 45], 
  popupAnchor: [0, -45], 
});

const calgarytowerIcon = L.icon({
  iconUrl: 'CalgaryTowerIcon.png', 
  iconSize: [30, 45], 
  iconAnchor: [15, 45], 
  popupAnchor: [0, -45], 
});

function App() {

  return (
    <MapContainer center={[51.045136986742186, -114.05474883215655]} zoom={18} className="map-container">
       <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.045136986742186, -114.05474883215655]} icon={customIcon}>

        <Popup>
          <div>
          <h3>Central Library</h3>
          <img src="CentralLibraryImage.png" alt="Central Library"  />
          </div> 
        </Popup>
      </Marker>

      <Marker position={[51.053981078721705, -114.07895468157868]} icon={peacebridgeIcon}>
        <Popup>
          <div>
          <h3>Famous Peace Bridge. </h3>
          <img src="PeaceBridgeImage.png" alt="Peace Bridge"  />
          </div>
        </Popup>
      </Marker> 

      <Marker position={[51.044221259453366, -114.06314072305476]} icon={calgarytowerIcon}>
        <Popup>
          <div>
          <h3>Calgary Tower</h3>
          <img src="CalgaryTowerImage.png" alt="Calgary Tower"  />
          </div>
          Calgary Tower. <br /> Great View.
        </Popup>  
      </Marker> 




   </MapContainer>
  )
}



function CustomIcon (){
  return (
    <Marker position={[51.045136986742186, -114.05474883215655]} icon={customIcon}>
      
    </Marker>
  )
}

export default App
